webpackJsonp([9],{162:function(t,s,a){t.exports=a(317)},317:function(t,s,a){var n=a(2)(null,a(436),null,null);t.exports=n.exports},436:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("tab-container")]),t._v(" "),a("blockquote",[a("p",[t._v("面板，可切换显示子页面。")])]),t._v(" "),a("hr"),t._v(" "),a("h2",[t._v("引入")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("例子")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("API")]),t._v(" "),a("h3",[t._v("tab-container")]),t._v(" "),t._m(3),a("h3",[t._v("tab-container-item")]),t._v(" "),t._m(4),a("h2",[t._v("Slot")]),t._v(" "),a("h3",[t._v("tab-container")]),t._v(" "),t._m(5),a("h3",[t._v("tab-container-item")]),t._v(" "),t._m(6)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { TabContainer, TabContainerItem } "),a("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"hljs-string"},[t._v("'mint-ui'")]),t._v(";\n\nVue.component(TabContainer.name, TabContainer);\nVue.component(TabContainerItem.name, TabContainerItem);\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("改变 ative 的值，与 "),a("code",[t._v("<tab-container-item>")]),t._v(" 的 id 一致即显示对应页面。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-tab-container")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":active.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"active"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tab-container1"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"n in 10"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"'tab-container1 ' + $index\"")]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tab-container2"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"n in 5"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"'tab-container2 ' + $index\"")]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tab-container3"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"n in 7"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"'tab-container3 ' + $index\"")]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-tab-container")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("active")]),t._v(" "),a("td",[t._v("当前激活的 id")]),t._v(" "),a("td",[t._v("*")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("swipeable")]),t._v(" "),a("td",[t._v("显示滑动效果")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("false")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("item 的 id")]),t._v(" "),a("td",[t._v("*")]),t._v(" "),a("td"),t._v(" "),a("td")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("内容")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("内容")])])])])])}]}}});
//# sourceMappingURL=9.d9e41317f4caa590a026.js.map