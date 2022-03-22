(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{427:function(s,t,a){"use strict";a.r(t);var r=a(56),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"cascader-级联选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cascader-级联选择器"}},[s._v("#")]),s._v(" cascader 级联选择器")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("在使用省市区两级或三级地区联动时，经常会用到 cascader 级联选择器，非常好用。")])]),s._v(" "),a("h2",{attrs:{id:"cascader-基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cascader-基本使用"}},[s._v("#")]),s._v(" cascader 基本使用")]),s._v(" "),a("p",[s._v("elementUi 官网"),a("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/cascader",target:"_blank",rel:"noopener noreferrer"}},[s._v("cascader 级联选择器"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/elementUi/cascader/%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95.png",alt:"avatar"}})]),s._v(" "),a("blockquote",[a("p",[s._v("主要参数如下:")]),s._v(" "),a("blockquote",[a("ol",[a("li",[a("code",[s._v("v-model")]),s._v(":绑定的值，单面板时是一个一维数组，多面板时是一个多维数组")]),s._v(" "),a("li",[a("code",[s._v("options")]),s._v(":就是选择器下拉面板中需要展示的内容，是个数组，里面的结构是："),a("code",[s._v("value/label/children")]),s._v("三项，"),a("code",[s._v("children")]),s._v("里面同理")]),s._v(" "),a("li",[s._v("如果要监听级联选择器中选值的方法，则需要使用"),a("code",[s._v("change")]),s._v("事件")])])])]),s._v(" "),a("p",[s._v("我需要实现的是："),a("strong",[s._v("多选并且可以检索筛选下拉面板内容的功能，而且是双面板的结构")]),s._v("。")]),s._v(" "),a("p",[s._v("我刚开始是用了级联选择器，但是由于后端给我的数据有 "),a("code",[s._v("2000+")]),s._v("数据，导致面板在进行搜索筛选时，"),a("strong",[s._v("页面卡顿")]),s._v("。")]),s._v(" "),a("p",[s._v("效果图如下：\n"),a("img",{attrs:{src:"/images/elementUi/cascader/%E6%95%88%E6%9E%9C%E5%9B%BE.png",alt:"avatar"}})]),s._v(" "),a("p",[a("strong",[s._v("此级联选择器中，一级面板数据量有 "),a("code",[s._v("2000+")]),s._v(",二级面板数据只有固定的 "),a("code",[s._v("2")]),s._v(" 条。")])]),s._v(" "),a("h2",{attrs:{id:"cascader-渲染数据过多问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cascader-渲染数据过多问题"}},[s._v("#")]),s._v(" cascader 渲染数据过多问题")]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("当 option 内容过多(我这边渲染 2000+条数据),导致页面十分卡顿，此时需要考虑以下的几种方案")])]),s._v(" "),a("h3",{attrs:{id:"考虑远程搜索-无此功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#考虑远程搜索-无此功能"}},[s._v("#")]),s._v(" 考虑远程搜索（无此功能）")]),s._v(" "),a("p",[s._v("与"),a("code",[s._v("cascader")]),s._v("级联选择器类似的有个下拉选择器"),a("code",[s._v("select")]),s._v(","),a("code",[s._v("select")]),s._v("有个针对数据量大渲染问题的方法就是："),a("strong",[s._v("远程搜索")]),s._v(":\n"),a("img",{attrs:{src:"/images/elementUi/cascader/select_%E8%BF%9C%E7%A8%8B%E6%90%9C%E7%B4%A2.png",alt:"avatar"}})]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("为了启用远程搜索，需要将"),a("code",[s._v("filterable")]),s._v("和"),a("code",[s._v("remote")]),s._v("设置为"),a("code",[s._v("true")]),s._v("，同时传入一个"),a("code",[s._v("remote-method")]),s._v("。"),a("code",[s._v("remote-method")]),s._v("为一个"),a("code",[s._v("Function")]),s._v("，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果"),a("code",[s._v("el-option")]),s._v("是通过"),a("code",[s._v("v-for")]),s._v("指令渲染出来的，此时需要为"),a("code",[s._v("el-option")]),s._v("添加"),a("code",[s._v("key")]),s._v("属性，且其值需具有唯一性，比如"),a("code",[s._v("item.value")]),s._v("。")]),s._v(" "),a("p",[s._v("在查看 "),a("code",[s._v("cascader")]),s._v(" 组件的官网解释后，只发现了"),a("strong",[s._v("可搜索功能")]),s._v("，并没有"),a("strong",[s._v("远程搜索功能")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("可搜索功能与远程搜索功能是不一样的，可搜索功能是在组件渲染时，就将全部的内容渲染出来。所以并不能完全实现远程搜索的功能。")])]),s._v(" "),a("h3",{attrs:{id:"考虑动态加载-不适合一级面板数据量大的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#考虑动态加载-不适合一级面板数据量大的情况"}},[s._v("#")]),s._v(" 考虑动态加载（不适合一级面板数据量大的情况）")]),s._v(" "),a("p",[a("code",[s._v("cascader")]),s._v("级联选择器：与下拉选择器的区别主要是在于可以实现多面板数据展示，因此为了能够更好的渲染数据，有个动态加载的功能，此功能主要是用于"),a("strong",[s._v("动态加载某一级面板下的选项")]),s._v("，如果是多级面板，且子级面板数据量大的情况下，是可以使用动态面板的，但此时我们遇到的问题是：一级面板数据量多大，二级面板数据量少。\n"),a("img",{attrs:{src:"/images/elementUi/cascader/%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD.png",alt:"avatar"}})]),s._v(" "),a("h3",{attrs:{id:"分页获取数据-不太人性化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页获取数据-不太人性化"}},[s._v("#")]),s._v(" 分页获取数据（不太人性化）")]),s._v(" "),a("p",[s._v("当数据量过大时，通常我们会想到分页获取数据，后端一次性将"),a("code",[s._v("2000+")]),s._v("数据全部返回给我，我分页去获取。百度后发现有大佬已经实现此功能：")]),s._v(" "),a("p",[s._v("参考大神链接：\n分页获取数据解决 select 组件数据量大卡顿问题："),a("a",{attrs:{href:"https://blog.csdn.net/ZYS10000/article/details/111822862",target:"_blank",rel:"noopener noreferrer"}},[s._v("分页获取数据解决 select 组件数据量大卡顿问题"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("分页获取数据主要难点是："),a("strong",[s._v("什么时候分页获取？如何触发分页？以及 filter-method 方法的使用")]),s._v(" "),a("img",{attrs:{src:"/images/elementUi/cascader/select%E7%BB%84%E4%BB%B6%E5%88%86%E9%A1%B5%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE.png",alt:"avatar"}})]),s._v(" "),a("p",[s._v("大神用了一个自定义的"),a("code",[s._v("vue")]),s._v("指令，用于监听用户的下拉操作：")]),s._v(" "),a("p",[s._v("具体思路就是：\n先加载前几十条数据，如果用户有执行下拉动滚动条的操作，则滚动触底后加载后面几十条的数据。依次类推。")]),s._v(" "),a("p",[s._v("此时会有个问题，在实际的应用场景中，用户不会通过下拉去直接选择，而是通过检索的方式来处理。如果要检索的内容还未通过下拉动滚动条加载出来，则此时是检索不到对应的数据的。因为检索会从已有的"),a("code",[s._v("options")]),s._v("数据中筛选，而非原始数据。")]),s._v(" "),a("p",[s._v("使用这种方式的效果的确是组件渲染快速了，但是不人性化。")]),s._v(" "),a("h3",{attrs:{id:"异步加载数据-依然卡顿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步加载数据-依然卡顿"}},[s._v("#")]),s._v(" 异步加载数据(依然卡顿)")]),s._v(" "),a("p",[s._v("看到有个钩子函数，是筛选之前的钩子。想到可以开始给面板的数据"),a("code",[s._v("options")]),s._v("赋值为空，然后通过输入关键字后，筛选到对应的内容后，赋值给"),a("code",[s._v("options")]),s._v("，但是经过实验发现，筛选只能是从已有的"),a("code",[s._v("options")]),s._v("中筛选，通过自定义的数据中筛选是无法实现的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/elementUi/cascader/%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE.png",alt:"avatar"}})]),s._v(" "),a("h3",{attrs:{id:"自己写一个类似的级联选择器-成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自己写一个类似的级联选择器-成功"}},[s._v("#")]),s._v(" 自己写一个类似的级联选择器(成功)")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/elementUi/cascader/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9%E5%99%A8.png",alt:"avatar"}})]),s._v(" "),a("p",[s._v("根据观察现成的级联选择器，可以在"),a("code",[s._v("elementUi")]),s._v("官网中发现相似的组件：")]),s._v(" "),a("blockquote",[a("p",[s._v("已选中的选项：可以用"),a("code",[s._v("el-tag")]),s._v("来表示，"),a("code",[s._v("el-tag")]),s._v("中本身也有删除功能\n检索功能：可以用"),a("code",[s._v("el-input")]),s._v("输入框来处理，可以加个防抖并监听"),a("code",[s._v("input")]),s._v("的输入事件\n下拉选项框：可以通过"),a("code",[s._v("div")]),s._v("来表示，两级面板用两个"),a("code",[s._v("div")]),s._v("并列展示即可")])]),s._v(" "),a("p",[s._v("具体代码如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("el"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tag v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(tag,tagIndex) in dailiOptions"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tagIndex"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("closable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!disabled"')]),s._v(" color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#f4f4f5"')]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("close"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"closeDailiTag(tagIndex)"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("层级"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("el"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dailiCls"')]),s._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"display:flex;flex-direction:column;position:relative;margin-top:10px;"')]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!disabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("el"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("input v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("model"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"searchWord"')]),s._v(" placeholder"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请输入品牌关键词"')]),s._v(" clearable size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mini"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"disabled"')]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("input"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"searchWordChange"')]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("focus"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"inputFocus"')]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("blur"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"inputBlur"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("i slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"suffix"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"choosePinpai==null&&!dailiFocusFlag?'el-icon-arrow-down':'el-icon-arrow-up'\"")]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("click"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"flagClick"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("el"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("input"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ppListCls"')]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"choosePinpai!=null||dailiFocusFlag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ppLeft"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(p,pIndex) in agentBrandOptions"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pIndex"')]),s._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cursor:pointer;"')]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("click"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"selectPinpai(pIndex)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"choosePinpai==pIndex?'active':''\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ppRight"')]),s._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("show"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"showGrapeFlag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("click"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"selectGrape(2)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"chooseGrape==2?'active':''\"")]),s._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cursor:pointer;"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("层级"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("click"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"selectGrape(3)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"chooseGrape==3?'active':''\"")]),s._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cursor:pointer;"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("层级"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("strong",[s._v("input 组件——监听组件内容的输入")]),s._v("\n通过"),a("code",[s._v("setTimeout")]),s._v("实现防抖，延迟"),a("code",[s._v("500毫秒")]),s._v("后，将根据"),a("code",[s._v("input")]),s._v("组件中输入的内容进行筛选。然后将筛选后的内容赋值给"),a("code",[s._v("options")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("searchWordChange2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xianhuoFocusFlag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("showGrapeFlag2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("choosePinpai2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" dailiOptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pinPaiData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tradeBrandOptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dailiOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tradeBrandOptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pinPaiData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("showGrapeFlag2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("choosePinpai2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xianhuoFocusFlag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("还有其他需要注意的小细节：")]),s._v(" "),a("blockquote",[a("p",[s._v("两级面板的显示与隐藏\n选中某条数据后的样式改变，通过 css 中的 after 伪元素来处理\n……")])]),s._v(" "),a("p",[s._v("最终完成!!!")])])}),[],!1,null,null,null);t.default=e.exports}}]);