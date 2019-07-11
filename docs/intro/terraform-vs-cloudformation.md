# Terraform VS. CloudFormation

[CloudFormation](https://aws.amazon.com/tw/cloudformation/) 是 [AWS][aws] 原生的 infrastructure as code 服務，可以透過 JSON、YAML 格式佈署 AWS 服務，與 Terraform 是相同性質的 IaC 工具，在使用前可以先參考兩者的比較。

![terraform-cloudformation-comparison](../assets/img/terraform-cloudformation-comparison.png)

## 差異比較表

比較項目 | Terraform | CloudFormation
----------- | -------- | ------- | ---  
支援平台 | **非常多** | AWS 
原廠支援 | [HashiCorp][hashicorp] | **AWS** 
雲服務支援 | 依靠社群，服務支援較慢 | **原生雲服務支援較快**
語言 | HCL | YAML、JSON 
現有 Legacy 移轉  | **可匯入現有資源** | 必須重建 
Rollback | 無 | **有**
執行差異比對 | 有 | 有 
Cross Regions | 變數實現 | StackSet 
Deployment Locking | DynamoDB | **內建**
Metadata State | **支援多種類型** | S3
Destry Protection | 有 | 有
模組化概念 | [Module Registry][terraform-registry] | [Stack][cloudformation-stacks]
UI | CLI | CLI、Web Console
授權 | 開源軟體 / 企業版 | Free
其他 | 可支援 CloudFormation | [Stack Policy][cloudformation-stackpolicy]、[Event Trigger][cloudformation-event-trigger] |

---

Terraform 和 CloudFormation 兩者工具在功能上算是互補，擇一都會有部分的缺陷必須接受，兩者共用則可以參考「[Terraform 和 CloudFormation 組合技的技巧][terraform-and-cloudformation]」但是帶來的學習成本也是需要考量的點。


## 參考資料

- [Your Infrastructure as Code CloudFormation Vs Terraform?](https://hackernoon.com/your-infrastructure-as-code-cloudformation-vs-terraform-34ec5fb5f044)



[aws]: (https://aws.amazon.com/tw/)

[hashicorp]: (https://www.hashicorp.com/)
[terraform-registry]: (https://registry.terraform.io)

[cloudformation-stacks]: (https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html)
[cloudformation-stackpolicy]: (https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html)
[cloudformation-event-trigger]: (https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html)

[terraform-and-cloudformation]: (https://shazi.info/terraform-%e5%92%8c-cloudformation-%e7%b5%84%e5%90%88%e6%8a%80%e7%9a%84%e6%8a%80%e5%b7%a7/)