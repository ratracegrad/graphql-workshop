(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{614:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"node-touch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-touch","aria-hidden":"true"}},[e._v("#")]),e._v(" node-touch")]),e._v(" "),a("p",[e._v("For all your node touching needs.")]),e._v(" "),a("h2",{attrs:{id:"installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v("\n")])])]),a("h2",{attrs:{id:"cli-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" CLI Usage:")]),e._v(" "),a("p",[e._v("See "),a("code",[e._v("man touch")])]),e._v(" "),a("p",[e._v("This package exports a binary called "),a("code",[e._v("nodetouch")]),e._v(" that works mostly\nlike the unix builtin "),a("code",[e._v("touch(1)")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"api-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" API Usage:")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" touch "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"touch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("Gives you the following functions:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("touch(filename, options, cb)")])]),e._v(" "),a("li",[a("code",[e._v("touch.sync(filename, options)")])]),e._v(" "),a("li",[a("code",[e._v("touch.ftouch(fd, options, cb)")])]),e._v(" "),a("li",[a("code",[e._v("touch.ftouchSync(fd, options)")])])]),e._v(" "),a("p",[e._v("All the "),a("code",[e._v("options")]),e._v(" objects are optional.")]),e._v(" "),a("p",[e._v("All the async functions return a Promise.  If a callback function is\nprovided, then it's attached to the Promise.")]),e._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("force")]),e._v(" like "),a("code",[e._v("touch -f")]),e._v(" Boolean")]),e._v(" "),a("li",[a("code",[e._v("time")]),e._v(" like "),a("code",[e._v("touch -t <date>")]),e._v(" Can be a Date object, or any parseable\nDate string, or epoch ms number.")]),e._v(" "),a("li",[a("code",[e._v("atime")]),e._v(" like "),a("code",[e._v("touch -a")]),e._v(" Can be either a Boolean, or a Date.")]),e._v(" "),a("li",[a("code",[e._v("mtime")]),e._v(" like "),a("code",[e._v("touch -m")]),e._v(" Can be either a Boolean, or a Date.")]),e._v(" "),a("li",[a("code",[e._v("ref")]),e._v(" like "),a("code",[e._v("touch -r <file>")]),e._v(" Must be path to a file.")]),e._v(" "),a("li",[a("code",[e._v("nocreate")]),e._v(" like "),a("code",[e._v("touch -c")]),e._v(" Boolean")])]),e._v(" "),a("p",[e._v("If neither "),a("code",[e._v("atime")]),e._v(" nor "),a("code",[e._v("mtime")]),e._v(" are set, then both values are set.  If\none of them is set, then the other is not.")]),e._v(" "),a("h2",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli","aria-hidden":"true"}},[e._v("#")]),e._v(" cli")]),e._v(" "),a("p",[e._v("This package creates a "),a("code",[e._v("nodetouch")]),e._v(" command line executable that works\nvery much like the unix builtin "),a("code",[e._v("touch(1)")])])])}],!1,null,null,null);t.default=o.exports}}]);