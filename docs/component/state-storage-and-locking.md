# State Storage and Locking

[State](https://www.terraform.io/docs/state/) 是 Terraform 最重要的資訊，如果沒有保存好，那麼你的 IaC 就有可能大亂。

Terraform 本身需要 `state` 來判斷 Resource 的現況，若是 `state` 不存在，Terraform 將不認得既有存在的服務，如果在沒有 `state` 的情況下，Terraform 會以 New Resource 的方式新建資源。

## State Storage

當執行 `plan`、`apply` 時 Terraform 會去參考 state 的資訊，以 `terraform.tfstate` 命名檔案。

預設 `state` 儲存在 `local`，為了避免遺失或多人開發，一般會透過 [backends](backends.md) 儲存。

## State Locking

當多人開發時，為了避免在同一時間重複執行 `apply` 的 lock 機制，lock 的方法與使用的 [backends](backends.md) 有關係，以 [Backend S3](https://www.terraform.io/docs/backends/types/s3.html) 為例，Lock 則採用 [DynamoDB](https://aws.amazon.com/tw/dynamodb/)。