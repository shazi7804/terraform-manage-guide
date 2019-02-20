# Output

當你創建一個 resource 如 VPC，你會需要取得該 VPC ID 以應用在其他 resource (如 subnet)，此時 Output 就會派上用場，抑或者 EC2 所產生出的 instance-id, public-dns。

```terraform
output "address" {
  value = "${aws_instance.web.public_dns}"
}
```