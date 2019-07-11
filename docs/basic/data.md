# Data

data 用於查找 `既有資源`，透過 data 去把對應的 resource name、id 找出來。



## 語法

範例抓取 Ubuntu 16.04 最新版的 AMI

```terraform
data "aws_ami" "ubuntu-default-latest" {
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

- [most_recent](https://www.terraform.io/docs/providers/aws/d/ami.html#most_recent) 當有多個結果時，只抓最新的那組 AMI。
- [filter](https://www.terraform.io/docs/providers/aws/d/ami.html#filter) 可以針對多種條件篩選 AMI，如果希望固定 AMI 則 filter 條件就必須非常精準，常見使用 [name_regex](https://www.terraform.io/docs/providers/aws/d/ami.html#name_regex)。
- [owners](https://www.terraform.io/docs/providers/aws/d/ami.html#owners) 提供這個 AMI 的來源帳號。


## 常見會用 data 處理的 `既有資源`

- Account Number
- AWS Default AMI
