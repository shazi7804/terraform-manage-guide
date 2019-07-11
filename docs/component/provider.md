# Provider

[Provides](https://www.terraform.io/docs/providers/index.html) 是整個 terraform 最重要的元件，必須設定該 terrafrom 要執行的環境 (e.g. AWS)，以及該環境的 terraform 權限 (Example：regions、access_key、secret_key)

```terraform
provider "aws" {
  access_key = "foo"
  secret_key = "bar"
  region     = "us-east-1"
}
```

## Environment variables

但是登入權限寫在 provider 並不是很好的作法，所以 terraform 也支援 `Environment variables` 的方式設定 credentials，這是很常見的使用方式。

只要定義 provider 為 aws

```
provider "aws" {}
```

剩下都交由 `環境變數` 處理

```
$ export AWS_ACCESS_KEY_ID="anaccesskey"
$ export AWS_SECRET_ACCESS_KEY="asecretkey"
$ export AWS_DEFAULT_REGION="us-west-2"
$ terraform plan
```

## Shared Credentials file

如果有多個 terraform 要指定不同 credential 的需求，`Shared Credentials file` 可以指定不同的 credentials file，通常在 local 開發會用到這樣的方式

```
provider "aws" {
  region                  = "us-west-2"
  shared_credentials_file = "/Users/tf_user/.aws/creds"
  profile                 = "customprofile"
}
```

## Multiple Providers

在特殊情況下會需要使用多個 Providers，像是 Cross Regions、跨平台等，利用 `alias` 指定不同 provider。

```
provider "aws" {
  region = "ap-northeast-1"
  alias  = "main"
}

provider "aws" {
  region = "us-east-1"
  alias  = "cloudfront"
```