(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{316:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Node.js module to detect the C standard library (libc) implementation\nfamily and version in use on a given Linux system.")]),t._v(" "),s("p",[t._v("Provides a value suitable for use with the "),s("code",[t._v("LIBC")]),t._v(" option of\n"),s("a",{attrs:{href:"https://www.npmjs.com/package/prebuild",target:"_blank",rel:"noopener noreferrer"}},[t._v("prebuild"),s("OutboundLink")],1),t._v(",\n"),s("a",{attrs:{href:"https://www.npmjs.com/package/prebuild-ci",target:"_blank",rel:"noopener noreferrer"}},[t._v("prebuild-ci"),s("OutboundLink")],1),t._v(" and\n"),s("a",{attrs:{href:"https://www.npmjs.com/package/prebuild-install",target:"_blank",rel:"noopener noreferrer"}},[t._v("prebuild-install"),s("OutboundLink")],1),t._v(",\ntherefore allowing build and provision of pre-compiled binaries\nfor musl-based Linux e.g. Alpine as well as glibc-based.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("On all other platforms will run the child command as-is.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),s("p",[t._v("Copyright 2017 Lovell Fuller")]),t._v(" "),s("p",[t._v('Licensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at '),s("a",{attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.apache.org/licenses/LICENSE-2.0"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v('Unless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.')])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"detect-libc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detect-libc","aria-hidden":"true"}},[this._v("#")]),this._v(" detect-libc")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Currently supports libc detection of "),e("code",[this._v("glibc")]),this._v(" and "),e("code",[this._v("musl")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm install detect-libc\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GLIBC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MUSL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" family"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isNonGlibcLinux "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'detect-libc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("GLIBC")]),t._v(' is a String containing the value "glibc" for comparison with '),s("code",[t._v("family")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("MUSL")]),t._v(' is a String containing the value "musl" for comparison with '),s("code",[t._v("family")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("family")]),t._v(" is a String representing the system libc family.")]),t._v(" "),s("li",[s("code",[t._v("version")]),t._v(" is a String representing the system libc version number.")]),t._v(" "),s("li",[s("code",[t._v("isNonGlibcLinux")]),t._v(" is a Boolean representing whether the system is a non-glibc Linux, e.g. Alpine.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"detect-libc-command-line-tool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detect-libc-command-line-tool","aria-hidden":"true"}},[this._v("#")]),this._v(" detect-libc command line tool")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When run on a Linux system with a non-glibc libc,\nthe child command will be run with the "),e("code",[this._v("LIBC")]),this._v(" environment variable\nset to the relevant value.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The command line feature requires "),e("code",[this._v("spawnSync")]),this._v(" provided by Node v0.12+.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("detect-libc child-command\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"integrating-with-prebuild"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrating-with-prebuild","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrating with prebuild")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"install"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"detect-libc prebuild-install || node-gyp rebuild"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mocha && detect-libc prebuild-ci"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"detect-libc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.0.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prebuild-install"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.2.0"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prebuild"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^6.2.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prebuild-ci"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.2.3"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"licence"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#licence","aria-hidden":"true"}},[this._v("#")]),this._v(" Licence")])}],!1,null,null,null);e.default=n.exports}}]);