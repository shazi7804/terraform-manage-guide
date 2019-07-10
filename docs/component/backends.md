# Backends

[Backends](https://www.terraform.io/docs/backends/index.html) 定義各種儲存介面儲存 `state`。

## Backend Types

[Backend Types](https://www.terraform.io/docs/backends/types/index.html) 支援多種儲存方式，以 S3 為例：

```
terraform {
  backend "s3" {
    bucket         = "terraform-101-ap-northeast-1-123456789"
    key            = "terraform.tfstate"
    dynamodb_table = "terraform-state-locking"
    region         = "ap-northeast-1"
  }
}
```

> Backend 不支援 variable data

> dynamodb_table 用於 Locking (options) 