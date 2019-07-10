# Resource

[Resource](https://www.terraform.io/docs/configuration/resources.html) 用於定義在該環境內的所有創建資源，透過 terraform 提供的各種 resuorces 減少人工佈署到 production 環境。

## Feature 支援

以 AWS 來說，一個新的 feature release 後大約 1 ~ 2 個禮拜可以被 terraform 支援，實際上與社群有關。



```terraform
resource "aws_instance" "web" {
  ami           = "ami-408c7f28"
  instance_type = "t3.nano"
}
```