(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{326:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://travis-ci.org/isaacs/ignore-walk",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/isaacs/ignore-walk.svg?branch=master",alt:"BuildStatus"}}),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ignore-walk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignore-walk","aria-hidden":"true"}},[this._v("#")]),this._v(" ignore-walk")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Nested/recursive "),e("code",[this._v(".gitignore")]),this._v("/"),e("code",[this._v(".npmignore")]),this._v(" parsing and filtering.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Walk a directory creating a list of entries, parsing any "),e("code",[this._v(".ignore")]),this._v("\nfiles met along the way to exclude files.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" USAGE")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" walk "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ignore-walk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All options are optional, defaults provided.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this function returns a promise, but you can also pass a cb")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if you like that approach better.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("walk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// root dir to start in. defaults to process.cwd()")]),t._v("\n  ignoreFiles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.gitignore'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// list of filenames. defaults to ['.ignore']")]),t._v("\n  includeEmpty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true to include empty dirs, default false")]),t._v("\n  follow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true to follow symlink dirs, default false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to walk synchronously, do it this way:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" walk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/wow/such/filepath'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you want to get at the underlying classes, they're at "),e("code",[this._v("walk.Walker")]),this._v("\nand "),e("code",[this._v("walk.WalkerSync")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" OPTIONS")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[s("code",[t._v("path")]),t._v(" The path to start in.  Defaults to "),s("code",[t._v("process.cwd()")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ignoreFiles")]),t._v(" Filenames to treat as ignore files.  The default is\n"),s("code",[t._v("['.ignore']")]),t._v(".  (This is where you'd put "),s("code",[t._v(".gitignore")]),t._v(" or\n"),s("code",[t._v(".npmignore")]),t._v(" or whatever.)  If multiple ignore files are in a\ndirectory, then rules from each are applied in the order that the\nfiles are listed.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("includeEmpty")]),t._v(" Set to "),s("code",[t._v("true")]),t._v(" to include empty directories, assuming\nthey are not excluded by any of the ignore rules.  If not set, then\nthis follows the standard "),s("code",[t._v("git")]),t._v(" behavior of not including\ndirectories that are empty.")]),t._v(" "),s("p",[t._v("Note: this will cause an empty directory to be included if it\nwould contain an included entry, even if it would have otherwise\nbeen excluded itself.")]),t._v(" "),s("p",[t._v("For example, given the rules "),s("code",[t._v("*")]),t._v(" (ignore everything) and "),s("code",[t._v("!/a/b/c")]),t._v("\n(re-include the entry at "),s("code",[t._v("/a/b/c")]),t._v("), the directory "),s("code",[t._v("/a/b")]),t._v(" will be\nincluded if it is empty.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("follow")]),t._v("  Set to "),s("code",[t._v("true")]),t._v(" to treat symbolically linked directories as\ndirectories, recursing into them.  There is no handling for nested\nsymlinks, so "),s("code",[t._v("ELOOP")]),t._v(" errors can occur in some cases when using this\noption.  Defaults to "),s("code",[t._v("false")]),t._v(".")])])])}],!1,null,null,null);e.default=n.exports}}]);