(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{197:function(r,a,e){"use strict";e.r(a);var t=e(0),v=Object(t.a)({},function(){var r=this,a=r.$createElement,e=r._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"為什麼要用-terraform"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#為什麼要用-terraform","aria-hidden":"true"}},[r._v("#")]),r._v(" 為什麼要用 Terraform")]),r._v(" "),e("p",[r._v("Terraform 主要為新一代的 infrastructure 管理工具，過去不管是管理 Data Center 或者是 Cloud 都是透過人工的方式去點選出期望的設定值，而人工處理往往會導致各種問題發生，Terraform 就是為了解決這些問題而生。")]),r._v(" "),e("h2",{attrs:{id:"系統維運的痛點"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系統維運的痛點","aria-hidden":"true"}},[r._v("#")]),r._v(" 系統維運的痛點")]),r._v(" "),e("h3",{attrs:{id:"多環境不易維護，一個動作做三次，能接受嗎？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多環境不易維護，一個動作做三次，能接受嗎？","aria-hidden":"true"}},[r._v("#")]),r._v(" 多環境不易維護，一個動作做三次，能接受嗎？")]),r._v(" "),e("p",[r._v("在管理有多環境下會造成 "),e("code",[r._v("人力的重工")]),r._v(" 的議題，一件事情做 n+1 次其實是一件很蠢的事情，一位工程師應該要把 "),e("code",[r._v("時間浪費在有意義的事情上")]),r._v("。")]),r._v(" "),e("h3",{attrs:{id:"環境一致性，到-dev-正常，上到-production-卻壞掉了？！"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#環境一致性，到-dev-正常，上到-production-卻壞掉了？！","aria-hidden":"true"}},[r._v("#")]),r._v(" 環境一致性，到 Dev 正常，上到 Production 卻壞掉了？！")]),r._v(" "),e("p",[r._v("過了一陣子後要在不同產品執行相同的作業時，往往會很容易有 "),e("code",[r._v("環境不一致")]),r._v(" 的情況發生，其引發的因素有很多。")]),r._v(" "),e("p",[r._v("要避免執行不一致的最好辦法大概只有按照 SOP 做事，但我們往往不希望自己是那個被當成只能做 SOP 的作業員，如果我們都能複製第一次做的步驟，然後只調整部分不一樣參數呢？")]),r._v(" "),e("h3",{attrs:{id:"人員的狀態、異動、嚴謹度等，你掌握不住的都在人。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#人員的狀態、異動、嚴謹度等，你掌握不住的都在人。","aria-hidden":"true"}},[r._v("#")]),r._v(" 人員的狀態、異動、嚴謹度等，你掌握不住的都在人。")]),r._v(" "),e("p",[r._v("我相信在講到 "),e("code",[r._v("人")]),r._v(" 的議題，一堆主管都心有戚戚焉，技術的問題通常有硬方法解決，再不然就找專家顧問團，有錢好辦事麻！但是人卻不是如此，即使給予足夠的薪資待遇依然會遇到人員當天狀態不好？然後線上就給他 "),e("code",[r._v("rm -rf /*")]),r._v("，再威一點就下個 "),e("code",[r._v("sudo")]),r._v("，「"),e("a",{attrs:{href:"https://www.google.com/search?q=mysql%E4%BB%8E%E5%88%A0%E5%BA%93%E5%88%B0%E8%B7%91%E8%B7%AF",target:"_blank",rel:"noopener noreferrer"}},[r._v("MySQL 從刪庫到跑路"),e("OutboundLink")],1),r._v("」一書也大有人在，所以自動化還是解決人的議題最根本的方法。")]),r._v(" "),e("h2",{attrs:{id:"terraform-帶來的好處"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terraform-帶來的好處","aria-hidden":"true"}},[r._v("#")]),r._v(" Terraform 帶來的好處")]),r._v(" "),e("p",[r._v("Terraform 宗旨在於 "),e("code",[r._v("自動化")]),r._v("、"),e("code",[r._v("環境一致性")]),r._v("、"),e("code",[r._v("可被測試")]),r._v(" 大幅減少在維運 infrastructure 時的議題，也基於 infrastructure as code 後所有的變更都有軌跡，也可以在開發流程下加入 code review 或者 Release Manage 等角色。")]),r._v(" "),e("h3",{attrs:{id:"跨平台特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨平台特性","aria-hidden":"true"}},[r._v("#")]),r._v(" 跨平台特性")]),r._v(" "),e("p",[r._v("Terraform 有一個最大的優勢是強大的跨平台特性，你可以透過 Terraform 一種工具管理各種雲平台，只需要學習一種工具即可套用在各個平台如 AWS、Azure、GCP .. 等，詳細支援可以參考 "),e("a",{attrs:{href:"https://www.terraform.io/docs/providers/index.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("Provides"),e("OutboundLink")],1)]),r._v(" "),e("h3",{attrs:{id:"自動化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自動化","aria-hidden":"true"}},[r._v("#")]),r._v(" 自動化")]),r._v(" "),e("p",[r._v("所有的 infrastructure 變更都由 terraform 代勞，你不需要再手動執行相同的動作，把時間浪費再美好的事情吧。")]),r._v(" "),e("h3",{attrs:{id:"環境一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#環境一致性","aria-hidden":"true"}},[r._v("#")]),r._v(" 環境一致性")]),r._v(" "),e("p",[r._v("佈署透過 terraform 之後，你就可以複製到任何環境去 "),e("code",[r._v("建立相同的環境")]),r._v(" 不需要擔心會有些許誤差，即使有部分資訊不同，也可以透過 "),e("code",[r._v("變數")]),r._v(" 來達到不同環境的區別。")]),r._v(" "),e("h3",{attrs:{id:"稽核與軌跡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#稽核與軌跡","aria-hidden":"true"}},[r._v("#")]),r._v(" 稽核與軌跡")]),r._v(" "),e("p",[r._v("是不是和作者一樣也有導入像是 ISO 27001 的困擾？每次的變更都要有第二人審核，每一筆過程都要有記錄？")]),r._v(" "),e("p",[r._v("因為 infrastructure as code 的特性放進 "),e("code",[r._v("版本控管")]),r._v(" 作為變更記錄，並且儲存每次執行 terraform apply 的 "),e("code",[r._v("紀錄")]),r._v(" 每一次上線到 Production 利用 Pull Request 的機制進行審核，讓整個 ISO 27001 的過程有了解套。")]),r._v(" "),e("h3",{attrs:{id:"自動化測試"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自動化測試","aria-hidden":"true"}},[r._v("#")]),r._v(" 自動化測試")]),r._v(" "),e("p",[r._v("當你的 infrastructure 變成程式碼之後，"),e("code",[r._v("自動化測試")]),r._v(" 就離你不遠了，不需要擔心上到 Production 出包，你可以先在測試環境或者 CI 進行自動化測試，並且在每一次的變更都進行相容性測試，有了這一道關卡就不需要擔心你的環境有異常。")]),r._v(" "),e("h2",{attrs:{id:"導入-terraform-的省思"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#導入-terraform-的省思","aria-hidden":"true"}},[r._v("#")]),r._v(" 導入 Terraform 的省思")]),r._v(" "),e("p",[r._v("雖然 Terraform 能夠解決以上大部分的痛點，但卻也帶來不同的議題必須思考，不論是對於 Dev 或者 Ops 入門都有相當的 "),e("code",[r._v("學習門檻")]),r._v("，學習成本變成了最困難的第一步。")])])},[],!1,null,null,null);a.default=v.exports}}]);