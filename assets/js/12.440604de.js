(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{173:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[this._v("#")]),this._v(" Output")]),this._v(" "),s("p",[this._v("當你創建一個 resource 如 VPC，你會需要取得該 VPC ID 以應用在其他 resource (如 subnet)，此時 Output 就會派上用場，抑或者 EC2 所產生出的 instance-id, public-dns。")]),this._v(" "),s("div",{staticClass:"language-terraform extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('output "address" {\n  value = "${aws_instance.web.public_dns}"\n}\n')])])])])}],!1,null,null,null);s.default=n.exports}}]);