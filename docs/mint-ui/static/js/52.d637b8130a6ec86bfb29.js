webpackJsonp([52],{274:function(t,s,e){var a=e(2)(null,e(356),null,null);t.exports=a.exports},356:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Popup")]),t._v(" "),e("blockquote",[e("p",[t._v("A popup box with customized contents.")])]),t._v(" "),e("hr"),t._v(" "),e("h2",[t._v("Import")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("h2",[t._v("API")]),t._v(" "),t._m(6),e("h2",[t._v("Slot")]),t._v(" "),t._m(7)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-javascript"},[e("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { Popup } "),e("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"hljs-string"},[t._v("'mint-ui'")]),t._v(";\n\nVue.component(Popup.name, Popup);\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("position")]),t._v(" defines the location of the popup. If it's "),e("code",[t._v("bottom")]),t._v(", when you switch on the popup, it'll slide into the screen from the bottom and become fixed at the bottom. The sliding animation alters with "),e("code",[t._v("position")]),t._v(", and you don't need to configure it manually.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Sync "),e("code",[t._v("visible")]),t._v(" with one of your vue instance variables. Toggle it to switch on/off the popup.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("mt-popup")]),t._v("\n  "),e("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"popupVisible"')]),t._v("\n  "),e("span",{staticClass:"hljs-attr"},[t._v("position")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"bottom"')]),t._v(">")]),t._v("\n  ...\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("mt-popup")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("If the "),e("code",[t._v("position")]),t._v(" attribute is omitted, the popup will be located at the center of the viewport (and of course you can relocate it using CSS). In this case, you may want to set its popup-transition attribute to "),e("code",[t._v("popup-fade")]),t._v(" so that it'll have a fading effect when switched on/off.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("mt-popup")]),t._v("\n  "),e("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"popupVisible"')]),t._v("\n  "),e("span",{staticClass:"hljs-attr"},[t._v("popup-transition")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"popup-fade"')]),t._v(">")]),t._v("\n  ...\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("mt-popup")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"table-container"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v("option")]),t._v(" "),e("th",[t._v("description")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("acceptable values")]),t._v(" "),e("th",[t._v("default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("visible")]),t._v(" "),e("td",[t._v("visibility of the popup")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("position")]),t._v(" "),e("td",[t._v("location of the popup. If omitted, the popup will be centered")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("'top'"),e("br"),t._v("'right'"),e("br"),t._v("'bottom'"),e("br"),t._v("'left'")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("pop-transition")]),t._v(" "),e("td",[t._v("CSS transition of the popup. Configurable only when "),e("code",[t._v("position")]),t._v(" is omitted")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("'popup-fade'")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("modal")]),t._v(" "),e("td",[t._v("if a modal pops with the popup")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("closeOnClickModal")]),t._v(" "),e("td",[t._v("if the popup turns off when the modal is clicked")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("true")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"table-container"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("-")]),t._v(" "),e("td",[t._v("content of the popup")])])])])])}]}},89:function(t,s,e){t.exports=e(274)}});
//# sourceMappingURL=52.d637b8130a6ec86bfb29.js.map