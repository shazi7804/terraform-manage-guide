# terraform plan

[plan](https://www.terraform.io/docs/commands/plan.html) 用於執行前進行差異比對，透過 `plan` 來檢查更新是否符合需求，確保 terraform 按計畫進行更新。

terraform 會拿現有的 `state` 與目前定義的 `resource` 進行比對，

## 執行流程

```terraform
$ terraform plan
```

1. plan 會檢查可以 refresh 的資源，像是 data 就會每次都檢查。

```bash
Refreshing Terraform state in-memory prior to plan...
The refreshed state will be used to calculate this plan, but will not be
persisted to local or remote state storage.

data.aws_ami.ubuntu: Refreshing state...
```

2. 接下來 `plan` 會告訴你這次執行會有的 `動作`

```bash
An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create
  - destroy
  -/+ destroy and the create replacment
  -> change to data resource
```

- 新增 resource 顯示 `+`
- 修改 resource 顯示 `~` (僅異動 resource 內參數)
- 刪除 resource 顯示 `-`
- 先刪除後新增 resource 顯示 `-/+`
- 異動 data 顯示 `->`

3. 再來就是詳細資源`異動清單`

```bash
Terraform will perform the following actions:

  # aws_elb.web-elb will be created
  + resource "aws_elb" "web-elb" {
      + arn                         = (known after apply)
      + availability_zones          = [
          + "us-west-2a",
          + "us-west-2b",
          ...
```

4. 最後是此次異動的總結

```bash
Plan: 8 to add, 0 to change, 0 to destroy.
------------------------------------------------------------------------
```

## 使用 `-out` 避免 apply 與 plan 的差異

使用自動化執行 terraform 時 `-out` 可以幫你匯出這次 plan 的 `異動清單`，讓 [apply](apply.md) 執行時按照這個 `異動清單` 執行更新，確保 plan 和 apply 執行時是相同的結果。

```bash
$ terraform plan -out=sample-deployment
$ terraform apply sample-deployment
```