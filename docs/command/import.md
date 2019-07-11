# terraform import

[import](https://www.terraform.io/docs/commands/import.html) 可以 `匯入現有資源` 進行托管。



1. 必須先在 tf 定義要 import 的 resource 

```terraform
resource "aws_instance" "example" {
  # ...instance configuration...
}
```

2. 將現有的 ec2 instance `i-abcd1234` 匯到 aws_instance.example 這個 resource

```bash
$ terraform import aws_instance.example i-abcd1234
```

3. 之後要變更 `i-abcd1234` 這個 ec2 就只需要調整 `aws_instance.example`。