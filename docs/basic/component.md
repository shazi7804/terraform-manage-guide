# 重要元件組成

一個基本的 Terraform 由幾個重要的元件組成

## Provider

provider 是整個 terraform 最重要的元件，你必須設定該 terrafrom 要執行的環境 (example: AWS)，以及該環境的 terraform 權限 (Example: access_key, secret_key)

## Resource

resource 用於定義在該環境內的所有創建資源，透過 terraform 提供的各種 resuorces 減少人工佈署到 production 環境

以 AWS 來說，一個新的 feature release 後大約 1 ~ 2 個禮拜可以被 terraform 支援。

## Data

data 用於處理已經 `既有資源` 的使用，必須透過 data 去把對應的 resource name, id 找出來。

### 常見會用 data 處理的 `既有資源`
  - Account Number
  - AWS default AMI

## Output

當你創建一個 resource 如 VPC，你會需要取得該 VPC ID 以應用在其他 resource (如 subnet)，此時 Output 就會派上用場，抑或者 EC2 所產生出的 instance-id, private-ip。