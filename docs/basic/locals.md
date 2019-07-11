# Locals

[locals](https://www.terraform.io/docs/configuration/locals.html) 通常在 module 內用於重複使用，常常用來將 variable 的值拿來運算或者特殊處理。

- `locals` 包含多個 `variable` 一次餵給 resource。

```terraform
# Define the common tags for all resources
locals {
  common_tags = {
    Component   = "awesome-app"
    Environment = "production"
  }
}

# Create a resource that blends the common tags with instance-specific tags.
resource "aws_instance" "server" {
  ami           = "ami-123456"
  instance_type = "t2.micro"

  tags = "${merge(
    local.common_tags,
    map(
      "Name", "awesome-app-server",
      "Role", "server"
    )
  )}"
}
```

- `locals` 內可以包含 `locals` 進行多次處理後才給 resource。

```terraform
# Ids for multiple sets of EC2 instances, merged together
locals {
  instance_ids = "${concat(aws_instance.blue.*.id, aws_instance.green.*.id)}"
}

# A computed default name prefix
locals {
  default_name_prefix = "${var.project_name}-web"
  name_prefix         = "${var.name_prefix != "" ? var.name_prefix : local.default_name_prefix}"
}

# Local values can be interpolated elsewhere using the "local." prefix.
resource "aws_s3_bucket" "files" {
  bucket = "${local.name_prefix}-files"
  # ...
}
```