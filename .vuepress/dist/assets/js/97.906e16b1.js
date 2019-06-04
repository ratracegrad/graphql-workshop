(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{264:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[e("a",{attrs:{href:"https://npmjs.org/package/etag",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/etag.svg",alt:"NPM Version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://npmjs.org/package/etag",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/dm/etag.svg",alt:"NPM Downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/node/v/etag.svg",alt:"Node.js Version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://travis-ci.org/jshttp/etag",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/travis/jshttp/etag/master.svg",alt:"Build Status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://coveralls.io/r/jshttp/etag?branch=master",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/etag/master.svg",alt:"Test Coverage"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Create simple HTTP ETags")]),t._v(" "),e("p",[t._v("This module generates HTTP ETags (as defined in RFC 7232) for use in\nHTTP responses.")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("This is a "),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),e("OutboundLink")],1),t._v(" module available through the\n"),e("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm registry"),e("OutboundLink")],1),t._v(". Installation is done using the\n"),e("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("npm install")]),t._v(" command"),e("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"etag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag","aria-hidden":"true"}},[this._v("#")]),this._v(" etag")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install etag\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" etag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'etag'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"etag-entity-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-entity-options","aria-hidden":"true"}},[this._v("#")]),this._v(" etag(entity, [options])")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Generate a strong ETag for the given entity. This should be the complete\nbody of the entity. Strings, "),e("code",[t._v("Buffer")]),t._v("s, and "),e("code",[t._v("fs.Stats")]),t._v(" are accepted. By\ndefault, a strong ETag is generated except for "),e("code",[t._v("fs.Stats")]),t._v(", which will\ngenerate a weak ETag (this can be overwritten by "),e("code",[t._v("options.weak")]),t._v(").")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ETag'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("etag")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("etag")]),this._v(" accepts these properties in the options object.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"weak"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weak","aria-hidden":"true"}},[this._v("#")]),this._v(" weak")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Specifies if the generated ETag will include the weak validator mark (that\nis, the leading "),e("code",[t._v("W/")]),t._v("). The actual entity tag is the same. The default value\nis "),e("code",[t._v("false")]),t._v(", unless the "),e("code",[t._v("entity")]),t._v(" is "),e("code",[t._v("fs.Stats")]),t._v(", in which case it is "),e("code",[t._v("true")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm test\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"benchmark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benchmark","aria-hidden":"true"}},[this._v("#")]),this._v(" Benchmark")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run-script bench\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" etag@1.8.1 bench nodejs-etag\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/index.js\n\n  http_parser@2.7.0\n  node@6.11.1\n  v8@5.1.281.103\n  uv@1.11.0\n  zlib@1.2.11\n  ares@1.10.1-DEV\n  icu@58.2\n  modules@48\n  openssl@1.0.2k\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/body0-100b.js\n\n  100B body\n\n  4 tests completed.\n\n  buffer - strong x 258,647 ops/sec ±1.07% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("180 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  buffer - weak   x 263,812 ops/sec ±0.61% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("184 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  string - strong x 259,955 ops/sec ±1.19% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("185 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  string - weak   x 264,356 ops/sec ±1.09% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("184 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/body1-1kb.js\n\n  1KB body\n\n  4 tests completed.\n\n  buffer - strong x 189,018 ops/sec ±1.12% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("182 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  buffer - weak   x 190,586 ops/sec ±0.81% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("186 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  string - strong x 144,272 ops/sec ±0.96% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("188 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  string - weak   x 145,380 ops/sec ±1.43% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("187 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/body2-5kb.js\n\n  5KB body\n\n  4 tests completed.\n\n  buffer - strong x 92,435 ops/sec ±0.42% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("188 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  buffer - weak   x 92,373 ops/sec ±0.58% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("189 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  string - strong x 48,850 ops/sec ±0.56% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("186 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  string - weak   x 49,380 ops/sec ±0.56% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("190 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/body3-10kb.js\n\n  10KB body\n\n  4 tests completed.\n\n  buffer - strong x 55,989 ops/sec ±0.93% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("188 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  buffer - weak   x 56,148 ops/sec ±0.55% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("190 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  string - strong x 27,345 ops/sec ±0.43% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("188 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  string - weak   x 27,496 ops/sec ±0.45% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("190 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/body4-100kb.js\n\n  100KB body\n\n  4 tests completed.\n\n  buffer - strong x 7,083 ops/sec ±0.22% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("190 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  buffer - weak   x 7,115 ops/sec ±0.26% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("191 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  string - strong x 3,068 ops/sec ±0.34% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("190 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  string - weak   x 3,096 ops/sec ±0.35% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("190 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/stats.js\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stat")]),t._v("\n\n  4 tests completed.\n\n  real - strong x 871,642 ops/sec ±0.34% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("189 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  real - weak   x 867,613 ops/sec ±0.39% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("190 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  fake - strong x 401,051 ops/sec ±0.40% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("189 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  fake - weak   x 400,100 ops/sec ±0.47% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("188 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"LICENSE"}},[this._v("MIT")])])}],!1,null,null,null);s.default=a.exports}}]);