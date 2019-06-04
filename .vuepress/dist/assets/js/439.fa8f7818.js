(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{605:function(t,s,e){"use strict";e.r(s);var r=e(0),n=Object(r.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"strip-json-comments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strip-json-comments","aria-hidden":"true"}},[t._v("#")]),t._v(" strip-json-comments "),e("a",{attrs:{href:"https://travis-ci.org/sindresorhus/strip-json-comments",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://travis-ci.org/sindresorhus/strip-json-comments.svg?branch=master",alt:"Build Status"}}),e("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),e("p",[t._v("This is now possible:")]),t._v(" "),t._m(1),t._m(2),t._v(" "),e("p",[t._v("Also available as a "),e("a",{attrs:{href:"https://github.com/sindresorhus/gulp-strip-json-comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("gulp"),e("OutboundLink")],1),t._v("/"),e("a",{attrs:{href:"https://github.com/sindresorhus/grunt-strip-json-comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("grunt"),e("OutboundLink")],1),t._v("/"),e("a",{attrs:{href:"https://github.com/sindresorhus/broccoli-strip-json-comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("broccoli"),e("OutboundLink")],1),t._v(" plugin.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("Accepts a string with JSON and returns a string without comments.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("Replace comments with whitespace instead of stripping them entirely.")]),t._v(" "),t._m(14),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/sindresorhus/strip-json-comments-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("strip-json-comments-cli"),e("OutboundLink")],1),t._v(" - CLI for this module")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/sindresorhus/strip-css-comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("strip-css-comments"),e("OutboundLink")],1),t._v(" - Strip comments from CSS")])]),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("MIT © "),e("a",{attrs:{href:"http://sindresorhus.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sindre Sorhus"),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Strip comments from JSON. Lets you use comments in your JSON files!")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rainbows")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unicorn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ❤ */")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cake"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It will replace single-line comments "),s("code",[this._v("//")]),this._v(" and multi-line comments "),s("code",[this._v("/**/")]),this._v(" with whitespace. This allows JSON error positions to remain as close as possible to the original source.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install --save strip-json-comments\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" json "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{/*rainbows*/"unicorn":"cake"}\'')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stripJsonComments")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> {unicorn: 'cake'}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"stripjsoncomments-input-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stripjsoncomments-input-options","aria-hidden":"true"}},[this._v("#")]),this._v(" stripJsonComments(input, [options])")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"input"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input","aria-hidden":"true"}},[this._v("#")]),this._v(" input")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Type: "),s("code",[this._v("string")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" options")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"whitespace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whitespace","aria-hidden":"true"}},[this._v("#")]),this._v(" whitespace")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Type: "),s("code",[this._v("boolean")]),s("br"),this._v("\nDefault: "),s("code",[this._v("true")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"related"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related","aria-hidden":"true"}},[this._v("#")]),this._v(" Related")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);s.default=n.exports}}]);