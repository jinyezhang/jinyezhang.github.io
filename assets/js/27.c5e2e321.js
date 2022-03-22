(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{424:function(s,t,a){"use strict";a.r(t);var r=a(56),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-的默认行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-的默认行为"}},[s._v("#")]),s._v(" vue 的默认行为")]),s._v(" "),a("p",[a("strong",[s._v("vue 会自动合并多个连续空格为一个")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("vue 现在是我工作中主要用到的框架，在使用过程中发现 vue 有很多自动处理的行为，非常的实用。但工作中可能有需要改动默认行为的地方，此时需要单独处理了")])]),s._v(" "),a("p",[s._v("最近在使用 vue 的过程中，需要了一个问题，发现 vue 会自动合并多个空格为一个进行展示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/vue/default/vue%E8%87%AA%E5%8A%A8%E5%90%88%E5%B9%B6%E7%A9%BA%E6%A0%BC.png",alt:"avator"}})]),s._v(" "),a("p",[s._v("如上图所示，控制台中可以看到后端接口返回的数据中明明有多个空格，但是渲染到页面上的时候发现所有的连续空格自动合并成一个。")]),s._v(" "),a("p",[s._v("其实这样是没啥问题的，关键是在进行此部分数据检索时，后端由于空格的匹配问题，导致检索数据后匹配不上任何数据。")]),s._v(" "),a("p",[s._v("由于连续空格合并成一个后导致的检索失败问题：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/vue/default/vue%E8%87%AA%E5%8A%A8%E5%90%88%E5%B9%B6%E7%A9%BA%E6%A0%BC%E5%AF%BC%E8%87%B4%E6%A3%80%E7%B4%A2%E5%A4%B1%E8%B4%A5.png",alt:"avator"}})]),s._v(" "),a("p",[s._v("知道检索失败的原因后，根据问题百度查找答案：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/vue/default/vue%E5%8F%96%E6%B6%88%E8%87%AA%E5%8A%A8%E5%90%88%E5%B9%B6%E7%A9%BA%E6%A0%BC%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.png",alt:"avator"}})]),s._v(" "),a("p",[s._v("html 部分代码：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("el"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("table"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("column prop"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SearchKey"')]),s._v(" label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"描述"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scope"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("pre "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"preCls"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SearchKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pre"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("el"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("table"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("column"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("pre")]),s._v("标签是有默认样式的，此时需要去除部分样式，可以通过 css 进行处理：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("preCls "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("787878")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("最终效果图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/vue/default/%E6%95%88%E6%9E%9C%E5%9B%BE.png",alt:"avator"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);