# Terraform 指令

Terraform 只是一個簡單而強大的指令 (Command line)，透過簡單的指令即可自動佈署 infrastructure 環境。

```terraform
$ terraform
Usage: terraform [--version] [--help] <command> [args]

The available commands for execution are listed below.
The most common, useful commands are shown first, followed by
less common or more advanced commands. If you're just getting
started with Terraform, stick with the common commands. For the
other commands, please read the help and docs before usage.

Common commands:
    apply              Builds or changes infrastructure
    console            Interactive console for Terraform interpolations
    destroy            Destroy Terraform-managed infrastructure
    fmt                Rewrites config files to canonical format
    get                Download and install modules for the configuration
    graph              Create a visual graph of Terraform resources
    import             Import existing infrastructure into Terraform
    init               Initialize a new or existing Terraform configuration
    output             Read an output from a state file
    plan               Generate and show an execution plan
    providers          Prints a tree of the providers used in the configuration
    push               Upload this Terraform module to Terraform Enterprise to run
    refresh            Update local state file against real resources
    show               Inspect Terraform state or plan
    taint              Manually mark a resource for recreation
    untaint            Manually unmark a resource as tainted
    validate           Validates the Terraform files
    version            Prints the Terraform version
    workspace          Workspace management

All other commands:
    debug              Debug output management (experimental)
    force-unlock       Manually unlock the terraform state
    state              Advanced state management
```

## Help

terraform 對每一個 sub-command 都有 help 資訊

```bash
$ terraform graph -h
```

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