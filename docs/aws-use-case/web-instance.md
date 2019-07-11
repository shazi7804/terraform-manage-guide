# 實作 Web Instance

## 實作資源

- [data aws_ami](https://www.terraform.io/docs/providers/aws/d/ami.html)
- [resource aws_instance](https://www.terraform.io/docs/providers/aws/r/instance.html)
- [resource aws_security_group](https://www.terraform.io/docs/providers/aws/r/security_group.html)
- [resource aws_security_group_rule](https://www.terraform.io/docs/providers/aws/r/security_group_rule.html)
- [resource aws_elb](https://www.terraform.io/docs/providers/aws/r/elb.html)
- [resource aws_elb_attachment](https://www.terraform.io/docs/providers/aws/r/elb_attachment.html)


## 實作目標

1. 使用 data 搜尋到 Ubuntu 18.04 的 AMI-ID
2. 建立 Ubuntu 18.04 的 EC2 instance
3. 使用 user data 安裝 apache
4. 使用 count 建立多台 instance 並且掛上 ELB

## LAB Start

- **main.tf**

```terraform
provider "aws" {
  region = "us-west-2"
}

data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-bionic-18.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}
```

- **security-groups.tf** 定義 security groups

```terraform
resource "aws_security_group" "elb" {
  name_prefix = "terraform-101-elb-"
  description = "allow all outcomming traffic"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

  tags = {
    Name = "terraform-101-elb-sg"
  }
}

resource "aws_security_group" "web" {
  name_prefix = "terraform-101-web-"
  description = "allow all outcomming traffic"

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }

  tags = {
    Name = "terraform-101-web-sg"
  }
}

resource "aws_security_group_rule" "web-rule" {
  type            = "ingress"
  from_port       = 80
  to_port         = 80
  protocol        = "tcp"

  source_security_group_id = "${aws_security_group.elb.id}"

  security_group_id = "${aws_security_group.web.id}"
}
```


- **ec2.tf** 定義 ec2 instance

```terraform
resource "aws_instance" "web" {
  count = 2

  ami             = "${data.aws_ami.ubuntu.id}"
  instance_type   = "t3.nano"
  vpc_security_group_ids = ["${aws_security_group.web.id}"]



  user_data = <<-EOF
                #!/bin/bash
                apt-get install -y apache2
                echo `hostname` > /var/www/html/index.html
              EOF

  tags = {
    Name = "terraform-101-web-instance"
  }
}
```

- **elb.tf** 定義 ELB

```terraform
resource "aws_elb" "web-elb" {
  name = "terraform-101-elb"

  security_groups    = ["${aws_security_group.elb.id}"]
  availability_zones = ["us-west-2a", "us-west-2b", "us-west-2c"]


  health_check {
    healthy_threshold = 2
    unhealthy_threshold = 2
    timeout = 3
    interval = 30
    target = "HTTP:80/"
  }

  listener {
    lb_port           = "80"
    lb_protocol       = "http"
    instance_port     = "80"
    instance_protocol = "http"
  }
}

resource "aws_elb_attachment" "elb" {
  count = 2
  elb      = "${aws_elb.web-elb.id}"
  instance = "${aws_instance.web.*.id[count.index]}"
}
```

執行 terraform 佈署

```bash
$ terraform init
$ terraform plan -out=terraform-101-workshop
$ terraform apply terraform-101-workshop
```

## 驗證

- 連續透過 ELB 訪問 80 port，會 random 兩台 instance。

## 清場

```bash
$ terraform destroy
```

- 確認 EC2 刪除。 
- 確認 ELB 刪除。
- 確認 Security Groups 刪除。
