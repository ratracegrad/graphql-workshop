(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{644:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"xdg-basedir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xdg-basedir","aria-hidden":"true"}},[t._v("#")]),t._v(" xdg-basedir "),s("a",{attrs:{href:"https://travis-ci.org/sindresorhus/xdg-basedir",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/sindresorhus/xdg-basedir.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("Get "),s("a",{attrs:{href:"https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("XDG Base Directory"),s("OutboundLink")],1),t._v(" paths")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),s("p",[t._v("The properties "),s("code",[t._v(".data")]),t._v(", "),s("code",[t._v(".config")]),t._v(", "),s("code",[t._v(".cache")]),t._v(", "),s("code",[t._v(".runtime")]),t._v(" will return "),s("code",[t._v("null")]),t._v(" in the uncommon case that both the XDG environment variable is not set and the users home directory can't be found. You need to handle this case. A common solution is to "),s("a",{attrs:{href:"https://github.com/yeoman/configstore/blob/b82690fc401318ad18dcd7d151a0003a4898a314/index.js#L15",target:"_blank",rel:"noopener noreferrer"}},[t._v("fall back to a temp directory"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("Directory for user specific data files.")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("Directory for user specific configuration files.")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("Directory for user specific non-essential data files.")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Directory for user-specific non-essential runtime files and other file objects (such as sockets, named pipes, etc).")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("MIT © "),s("a",{attrs:{href:"https://sindresorhus.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sindre Sorhus"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ npm install --save xdg-basedir\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xdgBasedir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xdg-basedir'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nxdgBasedir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/home/sindresorhus/.local/share'")]),t._v("\n\nxdgBasedir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/home/sindresorhus/.config'")]),t._v("\n\nxdgBasedir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataDirs\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> ['/home/sindresorhus/.local/share', '/usr/local/share/', '/usr/share/']")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data","aria-hidden":"true"}},[this._v("#")]),this._v(" .data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[this._v("#")]),this._v(" .config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache","aria-hidden":"true"}},[this._v("#")]),this._v(" .cache")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"runtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runtime","aria-hidden":"true"}},[this._v("#")]),this._v(" .runtime")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"datadirs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datadirs","aria-hidden":"true"}},[this._v("#")]),this._v(" .dataDirs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Preference-ordered array of base directories to search for data files in addition to "),e("code",[this._v(".data")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configdirs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configdirs","aria-hidden":"true"}},[this._v("#")]),this._v(" .configDirs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Preference-ordered array of base directories to search for configuration files in addition to "),e("code",[this._v(".config")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);e.default=r.exports}}]);