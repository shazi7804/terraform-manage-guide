# Output

[output](https://www.terraform.io/docs/configuration/outputs.html) 可以將 resource 的資源給外部使用，當創建一個 resource 如 VPC，會需要取得該 VPC ID 以應用在其他 resource (如 subnet)，此時 Output 就會派上用場，抑或者 EC2 所產生出的 instance-id, public-dns。

```terraform
output "address" {
  value = "${aws_instance.web.public_dns}"
}
```