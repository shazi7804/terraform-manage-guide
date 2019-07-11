# 不能在 count 內計算數值

## 使用情境

count 只能計算已知的數值，對於不存在的數值會有問題，當 apply count 有數值時可以正常運作，而 destroy count 為 0 時就會 fail。

## 範例

- main.tf
```terraform
resource "aws_security_group_rule" "ingress_with_source_security_group_id" {
  count = "${length(var.web_ingress_source_security_group_id)}"
}
```

- main.auto.tfvars
```terraform
web_ingress_source_security_group_id = [
  {
    rule                     = "http-80-tcp"
    source_security_group_id = "${var.alb_sg_id}"
  },
  {
    rule                     = "https-443-tcp"
    source_security_group_id = "${var.alb_sg_id}"
  }
]
```

## 問題

```
aws_security_group_rule.ingress_with_source_security_group_id: value of ‘count’ cannot be computed
```

## 參考資料

- [terraform modules value of count cannot be computed #12570](https://github.com/hashicorp/terraform/issues/12570)
- [Terraform 茶包「value of count cannot be computed」解法](https://shazi.info/terraform-%E8%8C%B6%E5%8C%85%E3%80%8Cvalue-of-count-cannot-be-computed%E3%80%8D%E8%A7%A3%E6%B3%95/)