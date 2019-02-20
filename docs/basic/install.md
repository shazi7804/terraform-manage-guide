# 安裝


## Shell auto complete

如果你使用的是常見的 bash 或 zsh shell 的話，可以使用 terraform 提供的 auto complete，用 Tab 就可以讓 sub-command 自動補齊。


### 設定 auto complete

```bash
$ echo 'complete -o nospace -C /usr/local/bin/terraform terraform' > ~/.bashrc
```

或者使用 terraform 的 -install-autocomplete 安裝

```bash
$ terraform -install-autocomplete
```

解除安裝也只要一行

```bash
$ terraform -uninstall-autocomplete
```

## terraformrc

terraform 的設定檔預設在 `.terraformrc/terraform.rc` (Windows 則在 %APPDATA%/terraform.rc)

提供幾個參數使用

- disable_checkpoint：預設 terraform 會與 [HashiCorp service](https://checkpoint.hashicorp.com/) 檢查版本訊息。
- disable_checkpoint_signature：預設 terraform 會檢查 HashiCorp service 的憑證簽章。
- plugin_cache_dir：plugin cache 目錄。
- credentials：存取 [remote backend](https://www.terraform.io/docs/backends/types/remote.html) 或 [Terraform Enterprise's private module registry](https://www.terraform.io/docs/enterprise/registry/index.html) 時的認證