# terraform apply

[apply](https://www.terraform.io/docs/commands/apply.html) 當確認都已經 final 後，apply 會按照設定執行更新，而 apply 更新有兩種模式。

```bash
$ terraform apply
```

- 按照 `*.tf` 的設定進行更新 (預設)
- 使用 [plan -out](plan.md#使用-out-避免-apply-與-plan-的差異) 產生的異動檔更新。

> plan -out 不會詢問 (yes/no) 而是直接執行。
