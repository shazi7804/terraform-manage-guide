# Resource

resource 用於定義在該環境內的所有創建資源，透過 terraform 提供的各種 resuorces 減少人工佈署到 production 環境

以 AWS 來說，一個新的 feature release 後大約 1 ~ 2 個禮拜可以被 terraform 支援。

```terraform
resource "aws_instance" "web" {
  ami           = "ami-408c7f28"
  instance_type = "t1.micro"
}
```