# 前置準備

Terraform 要佈署 AWS 環境需要準備幾項作業：

1. State Storage：`S3 bucket`
2. State Locking：`DynamoDB`
3. IAM User 權限 (AdministratorAccess)

既然是佈署 AWS 選的就是 S3 Backend，然而我不建議把 Backend 由 Terraform 納管，避免 Terraform 誤刪 S3 bucket。

## State Storage

建立 S3 bucket 要注意幾點功能建議開啟

- Versioning
- Object-level logging

> 命名規則必須不重複，也可以拿 Account-ID 來做為 Bucket name (ex. terraform-ap-northeast-1-0123456789)

## State Locking

S3 Backend 的 Locking 採用 DynamoDB，

- Primary key：LockID
- Type：String
- Capacity reads：1
- Capacity writes：1

> Capacity 設為最低消費 1 就好，同時僅有 1 個執行 terraform。
