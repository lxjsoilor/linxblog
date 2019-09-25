webpackJsonp([125],{102:function(s,t,a){s.exports=a(201)},201:function(s,t,a){var n=a(2)(null,a(446),null,null);s.exports=n.exports},446:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Mint UI documentation")]),s._v(" "),a("p",[s._v("This part introduces installation and basic usage of Mint UI.")]),s._v(" "),a("hr"),s._v(" "),a("h3",[s._v("npm")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),a("h3",[s._v("CDN")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),a("h3",[s._v("Hello world")]),s._v(" "),a("p",[s._v("If you are using CDN, a Hello world page is easy to code with Mint UI.")]),s._v(" "),s._m(4),s._v(" "),a("iframe",{attrs:{width:"100%",height:"300",src:"//jsfiddle.net/leopoldthecuber/jd6on9vr/embedded/",allowfullscreen:"allowfullscreen",frameborder:"0"}}),s._v(" "),a("p",[s._v("If you are using npm and wish to apply webpack, please continue to the next page: "),a("router-link",{attrs:{to:"/en2/quickstart"}},[s._v("Quick Start.")])],1),s._v(" "),a("br"),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10)],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("Installing with npm is recommended, for it works seamlessly with "),a("a",{attrs:{href:"https://webpack.js.org/"}},[s._v("webpack")]),s._v(".")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-shell"},[s._v("npm i mint-ui -S\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("Get the latest version from "),a("a",{attrs:{href:"https://unpkg.com/mint-ui/"}},[s._v("unpkg.com/mint-ui")]),s._v(", and import JavaScript and CSS file in your page.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- import CSS --\x3e")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/mint-ui/lib/style.css"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- import JavaScript --\x3e")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/mint-ui/lib/index.js"')]),s._v(">")]),a("span",{staticClass:"undefined"}),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-meta"},[s._v("<!DOCTYPE html>")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("meta")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("charset")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"UTF-8"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- import CSS --\x3e")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/mint-ui/lib/style.css"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"app"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClick"')]),s._v(">")]),s._v("Button"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- import Vue before Mint UI --\x3e")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/vue/dist/vue.js"')]),s._v(">")]),a("span",{staticClass:"undefined"}),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- import JavaScript --\x3e")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/mint-ui/lib/index.js"')]),s._v(">")]),a("span",{staticClass:"undefined"}),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"actionscript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n      el: "),a("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v(",\n      methods: {\n        handleClick: "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$toast("),a("span",{staticClass:"hljs-string"},[s._v("'Hello world!'")]),s._v(")\n        }\n      }\n    })\n  ")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("strong",[s._v("About event handlers")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("In Vue 2.0, to listen for a native DOM event on a component, you'll need to use the "),a("code",[s._v(".native")]),s._v(" modifier:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("my-component")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClick"')]),s._v(">")]),s._v("Click Me"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("my-component")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("For the sake of usability, we handled the "),a("code",[s._v("Button")]),s._v(" component so that it can listen to "),a("code",[s._v("click")]),s._v(" events:")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleButtonClick"')]),s._v(">")]),s._v("Click Me"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("But for other components, the "),a("code",[s._v(".native")]),s._v(" modifier is still required.")])}]}}});
//# sourceMappingURL=125.3708a72fc60015b05ecb.js.map