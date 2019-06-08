(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{200:function(e,r,a){"use strict";a.r(r);var t=a(0),s=Object(t.a)({},function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider","aria-hidden":"true"}},[e._v("#")]),e._v(" Provider")]),e._v(" "),a("p",[e._v("provider 是整個 terraform 最重要的元件，你必須設定該 terrafrom 要執行的環境 (example: AWS)，以及該環境的 terraform 權限 (Example: access_key, secret_key)")]),e._v(" "),a("div",{staticClass:"language-terraform extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('provider "aws" {\n  access_key = "foo"\n  secret_key = "bar"\n  region     = "us-east-1"\n}\n')])])]),a("h2",{attrs:{id:"environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Environment variables")]),e._v(" "),a("p",[e._v("但是登入權限寫在 provider 並不是很好的作法，所以 terraform 也支援 "),a("code",[e._v("Environment variables")]),e._v(" 的方式設定 credentials，這是很常見的使用方式。")]),e._v(" "),a("p",[e._v("只要定義 provider 為 aws")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('provider "aws" {}\n')])])]),a("p",[e._v("剩下都交由 "),a("code",[e._v("環境變數")]),e._v(" 處理")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ export AWS_ACCESS_KEY_ID="anaccesskey"\n$ export AWS_SECRET_ACCESS_KEY="asecretkey"\n$ export AWS_DEFAULT_REGION="us-west-2"\n$ terraform plan\n')])])]),a("h2",{attrs:{id:"shared-credentials-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-credentials-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Shared Credentials file")]),e._v(" "),a("p",[e._v("如果你有多個 terraform 要指定不同 credential 的需求，"),a("code",[e._v("Shared Credentials file")]),e._v(" 可以讓你指定不同的 credentials file，通常在 local 開發會用到這樣的方式")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('provider "aws" {\n  region                  = "us-west-2"\n  shared_credentials_file = "/Users/tf_user/.aws/creds"\n  profile                 = "customprofile"\n}\n')])])])])},[],!1,null,null,null);r.default=s.exports}}]);