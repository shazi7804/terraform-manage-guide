(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{203:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"terraform-plan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terraform-plan","aria-hidden":"true"}},[a._v("#")]),a._v(" terraform plan")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.terraform.io/docs/commands/plan.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("plan"),e("OutboundLink")],1),a._v(" 用於執行前進行差異比對，透過 "),e("code",[a._v("plan")]),a._v(" 來檢查更新是否符合需求，確保 terraform 按計畫進行更新。")]),a._v(" "),e("p",[a._v("terraform 會拿現有的 "),e("code",[a._v("state")]),a._v(" 與目前定義的 "),e("code",[a._v("resource")]),a._v(" 進行比對，")]),a._v(" "),e("h2",{attrs:{id:"執行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#執行流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 執行流程")]),a._v(" "),e("div",{staticClass:"language-terraform extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ terraform plan\n")])])]),e("ol",[e("li",[a._v("plan 會檢查可以 refresh 的資源，像是 data 就會每次都檢查。")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("Refreshing Terraform state in-memory prior to plan"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nThe refreshed state will be used to calculate this plan, but will not be\npersisted to local or remote state storage.\n\ndata.aws_ami.ubuntu: Refreshing state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("接下來 "),e("code",[a._v("plan")]),a._v(" 會告訴你這次執行會有的 "),e("code",[a._v("動作")])])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("An execution plan has been generated and is shown below.\nResource actions are indicated with the following symbols:\n  + create\n  - destroy\n  -/+ destroy and the create replacment\n  -"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" change to data resource\n")])])]),e("ul",[e("li",[a._v("新增 resource 顯示 "),e("code",[a._v("+")])]),a._v(" "),e("li",[a._v("修改 resource 顯示 "),e("code",[a._v("~")]),a._v(" (僅異動 resource 內參數)")]),a._v(" "),e("li",[a._v("刪除 resource 顯示 "),e("code",[a._v("-")])]),a._v(" "),e("li",[a._v("先刪除後新增 resource 顯示 "),e("code",[a._v("-/+")])]),a._v(" "),e("li",[a._v("異動 data 顯示 "),e("code",[a._v("->")])])]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("再來就是詳細資源"),e("code",[a._v("異動清單")])])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("Terraform will perform the following actions:\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# aws_elb.web-elb will be created")]),a._v("\n  + resource "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"aws_elb"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"web-elb"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      + arn                         "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("known after apply"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      + availability_zones          "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n          + "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"us-west-2a"')]),a._v(",\n          + "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"us-west-2b"')]),a._v(",\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("最後是此次異動的總結")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("Plan: 8 to add, 0 to change, 0 to destroy.\n------------------------------------------------------------------------\n")])])]),e("h2",{attrs:{id:"使用-out-避免-apply-與-plan-的差異"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-out-避免-apply-與-plan-的差異","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 "),e("code",[a._v("-out")]),a._v(" 避免 apply 與 plan 的差異")]),a._v(" "),e("p",[a._v("使用自動化執行 terraform 時 "),e("code",[a._v("-out")]),a._v(" 可以幫你匯出這次 plan 的 "),e("code",[a._v("異動清單")]),a._v("，讓 "),e("router-link",{attrs:{to:"/command/apply.html"}},[a._v("apply")]),a._v(" 執行時按照這個 "),e("code",[a._v("異動清單")]),a._v(" 執行更新，確保 plan 和 apply 執行時是相同的結果。")],1),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ terraform plan -out"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("sample-deployment\n$ terraform apply sample-deployment\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);