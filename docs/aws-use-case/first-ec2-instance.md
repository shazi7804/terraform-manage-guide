# 第一個 EC2 Instance

## 實作資源

- [data aws_ami](https://www.terraform.io/docs/providers/aws/d/ami.html)
- [resource aws_instance](https://www.terraform.io/docs/providers/aws/r/instance.html)

## 實作目標

1. 使用 data 搜尋到 Ubuntu 18.04 的 AMI-ID
2. 建立 Ubuntu 18.04 的 EC2 instance

## LAB Start

- **main.tf** 定義主要性資源

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

- **ec2.tf** 定義 ec2 instance

```terraform
resource "aws_instance" "web" {
  ami           = "${data.aws_ami.ubuntu.id}"
  instance_type = "t3.nano"

  tags = {
    Name = "terraform-101-first-ec2"
  }
}
```


執行 terraform 佈署

```bash
$ terraform init
$ terraform plan -out=terraform-101-workshop
$ terraform apply terraform-101-workshop
```

## 驗證

- 建立一台以 `Ubuntu 18.04` 的 EC2 instance
- EC2 instance type 為 `t3.nano`
- EC2 tag 為 `Key:"Name"`, `Value:"terraform-101-first-ec2"`

## 清場

```bash
$ terraform destroy
```

確認 EC2 刪除。 