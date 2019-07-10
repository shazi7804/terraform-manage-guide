# Resource

[Resource](https://www.terraform.io/docs/configuration/resources.html) 用於定義在該環境內的所有創建資源，透過 terraform 提供的各種 resuorces 減少人工佈署到 production 環境。

## 語法

```terraform
resource "aws_instance" "web" {
  ami           = "ami-408c7f28"
  instance_type = "t3.nano"
}
```

- [aws_instance](https://www.terraform.io/docs/providers/aws/r/instance.html) 用於定義 AWS EC2 instance 的 resource。
- web 替這個 resource 自定義的 uniq key，相同的 resource 只能有一個 uniq key 避免引用資源時無法找到正確的 resource。
- ami、instance_type 為 instance 的參數，未定義的參數都有預設值。