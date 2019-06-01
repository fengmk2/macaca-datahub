(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{173:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),s("h2",{attrs:{id:"创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),s("p",[t._v("创建名字为 sample 项目。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/macaca-datahub/assets/1556087099347-92adea0d-cfd1-4319-a825-55db0b39c01a.png",width:"75%"}})]),t._v(" "),s("h2",{attrs:{id:"添加接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加接口")]),t._v(" "),s("p",[t._v("添加 "),s("code",[t._v("test1")]),t._v(" 接口, 则对 "),s("code",[t._v("http://localhost:8080/api/test1")]),t._v(" 请求 mock 数据。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/macaca-datahub/assets/1556087110649-c5fb6a9d-0fe6-4e62-8b38-2d16bb0a2947.png",width:"75%"}})]),t._v(" "),s("h2",{attrs:{id:"接口构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口构建","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口构建")]),t._v(" "),s("p",[t._v("场景管理 - 新增场景即接口返回数据 Response， 可添加多个场景方便开发时进行快速切换。同时，可以对接口响应状态及 header 进行设置, 如不进行特殊配置则返回 "),s("code",[t._v("200")]),t._v(" 状态码。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/macaca-datahub/assets/1556087121904-1ad45f70-6971-4f3c-bbd9-437094078bd5.png",width:"75%"}})]),t._v(" "),s("p",[t._v("代理模式, 如有代理场景需求, 配置代理模式。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/macaca-datahub/assets/1556087132434-16c7eeb1-c2d3-46fe-b134-1c3ddd7fba95.png",width:"75%"}})]),t._v(" "),s("p",[t._v("请求字段描述, JSON Schema 格式, 可选是否开启校验, 可选配。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/macaca-datahub/assets/1556087143815-69411382-01dc-4fe7-8311-b1b5bf276f98.png",width:"75%"}})]),t._v(" "),s("p",[t._v("响应字段描述, JSON Schema 格式, 可选是否开启校验, 根据场景数据自动生成。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/macaca-datahub/assets/1556087153997-526ee70c-a763-4604-a53f-12796bfe1e74.png",width:"75%"}})]),t._v(" "),s("h2",{attrs:{id:"生成接口文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成接口文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成接口文档")]),t._v(" "),s("p",[t._v("接口文档, 根据接口构建信息自动生成。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/macaca-datahub/assets/1556087165144-25f3d3f8-d83e-4876-b112-e134cbc627f9.png",width:"75%"}})]),t._v(" "),s("h2",{attrs:{id:"看看效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#看看效果","aria-hidden":"true"}},[t._v("#")]),t._v(" 看看效果")]),t._v(" "),s("p",[t._v("具体代码参照示例项目"),s("a",{attrs:{href:"//github.com/macaca-sample/webpack-datahub-sample"}},[t._v("webpack-datahub-sample")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/test1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("请求结果, 如页面中显示对 "),s("code",[t._v("http://localhost:8080/api/test1")]),t._v(" 请求结果为上述步骤 mock 数据 "),s("code",[t._v("default data")]),t._v("。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/macaca-datahub/assets/1556087178188-5d2ff9a7-d0f4-4f07-b113-26f492925373.png",width:"75%"}})]),t._v(" "),s("h2",{attrs:{id:"查看实时快照"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看实时快照","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看实时快照")]),t._v(" "),s("p",[t._v("对 mock 数据进行请求后可在实时快照中找到对应历史请求信息。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/macaca-datahub/assets/1556087195119-12fc2430-91a2-451e-9483-0bd4f4bf6860.png",width:"75%"}})])])}],!1,null,null,null);a.default=e.exports}}]);