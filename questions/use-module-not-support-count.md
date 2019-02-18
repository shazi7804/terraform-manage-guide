# 使用 module 不支援 count

## 使用情境

使用同一份 terraform code 維護多個環境時，`使用 module 建立 resource`，無法使用 count 判斷該 module 是否需要存在。

## Example

- vpc.tf
```terraform
module "vpc" {
  source  = "104corp/vpc/aws"
  version = "1.1.0"

  count = "${var.vpc_create ? 1 : 0}"
}
```

- variables.tf
```terraform
variable "vpc_create" {
  description = "VPC Hub Enable"
  default     = false
}
```

- main.auto.tfvars (dev)
```terraform
vpc_create = true
```

- main.auto.tfvars (production)
```terraform
vpc_create = false
```

## Issess

```
Error: module "vpc": "count" is not a valid argument
```

## Resolve

- [Support the count parameter for modules #953](hashicorp/terraform#953)