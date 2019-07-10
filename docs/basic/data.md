# Data

data 用於處理已經 `既有資源` 的使用，必須透過 data 去把對應的 resource name, id 找出來。

### 常見會用 data 處理的 `既有資源`
  - Account Number
  - AWS default AMI

```terraform
# Find the latest available AMI that is tagged with Component = web
data "aws_ami" "web" {
  filter {
    name   = "state"
    values = ["available"]
  }

  filter {
    name   = "tag:Component"
    values = ["web"]
  }

  most_recent = true
}
```