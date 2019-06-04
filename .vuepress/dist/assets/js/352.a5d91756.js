(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{518:function(t,s,e){"use strict";e.r(s);var r=e(0),a=Object(r.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[e("a",{attrs:{href:"https://npmjs.org/package/parseurl",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/parseurl.svg",alt:"NPM Version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://npmjs.org/package/parseurl",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/dm/parseurl.svg",alt:"NPM Downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/node/v/parseurl.svg",alt:"Node.js Version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://travis-ci.org/pillarjs/parseurl",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/travis/pillarjs/parseurl/master.svg",alt:"Build Status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://coveralls.io/r/pillarjs/parseurl?branch=master",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/coveralls/pillarjs/parseurl/master.svg",alt:"Test Coverage"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Parse a URL with memoization.")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("This is a "),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),e("OutboundLink")],1),t._v(" module available through the\n"),e("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm registry"),e("OutboundLink")],1),t._v(". Installation is done using the\n"),e("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("npm install")]),t._v(" command"),e("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"parseurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseurl","aria-hidden":"true"}},[this._v("#")]),this._v(" parseurl")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install parseurl\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parseurl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'parseurl'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"parseurl-req"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseurl-req","aria-hidden":"true"}},[this._v("#")]),this._v(" parseurl(req)")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Parse the URL of the given request object (looks at the "),e("code",[t._v("req.url")]),t._v(" property)\nand return the result. The result is the same as "),e("code",[t._v("url.parse")]),t._v(" in Node.js core.\nCalling this function multiple times on the same "),e("code",[t._v("req")]),t._v(" where "),e("code",[t._v("req.url")]),t._v(" does\nnot change will return a cached parsed object, rather than parsing again.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"parseurl-original-req"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseurl-original-req","aria-hidden":"true"}},[this._v("#")]),this._v(" parseurl.original(req)")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Parse the original URL of the given request object and return the result.\nThis works by trying to parse "),e("code",[t._v("req.originalUrl")]),t._v(" if it is a string, otherwise\nparses "),e("code",[t._v("req.url")]),t._v(". The result is the same as "),e("code",[t._v("url.parse")]),t._v(" in Node.js core.\nCalling this function multiple times on the same "),e("code",[t._v("req")]),t._v(" where "),e("code",[t._v("req.originalUrl")]),t._v("\ndoes not change will return a cached parsed object, rather than parsing again.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"benchmark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benchmark","aria-hidden":"true"}},[this._v("#")]),this._v(" Benchmark")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run-script bench\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" parseurl@1.3.2 bench nodejs-parseurl\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/index.js\n\n  http_parser@2.7.0\n  node@4.8.4\n  v8@4.5.103.47\n  uv@1.9.1\n  zlib@1.2.11\n  ares@1.10.1-DEV\n  icu@56.1\n  modules@46\n  openssl@1.0.2k\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/fullurl.js\n\n  Parsing URL "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8888/foo/bar?user=tj&pet=fluffy"')]),t._v("\n\n  3 tests completed.\n\n  fasturl   x 1,246,766 ops/sec ±0.74% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("188 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  nativeurl x    91,536 ops/sec ±0.54% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("189 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  parseurl  x    90,645 ops/sec ±0.38% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("189 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/pathquery.js\n\n  Parsing URL "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/foo/bar?user=tj&pet=fluffy"')]),t._v("\n\n  3 tests completed.\n\n  fasturl   x 2,077,650 ops/sec ±0.69% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("186 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  nativeurl x   638,669 ops/sec ±0.67% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("189 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  parseurl  x 2,431,842 ops/sec ±0.71% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("189 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/samerequest.js\n\n  Parsing URL "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/foo/bar?user=tj&pet=fluffy"')]),t._v(" on same request object\n\n  3 tests completed.\n\n  fasturl   x  2,135,391 ops/sec ±0.69% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("188 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  nativeurl x    672,809 ops/sec ±3.83% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("186 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  parseurl  x 11,604,947 ops/sec ±0.70% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("189 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/simplepath.js\n\n  Parsing URL "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/foo/bar"')]),t._v("\n\n  3 tests completed.\n\n  fasturl   x 4,961,391 ops/sec ±0.97% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("186 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  nativeurl x   914,931 ops/sec ±0.83% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("186 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  parseurl  x 7,559,196 ops/sec ±0.66% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("188 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node benchmark/slash.js\n\n  Parsing URL "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v("\n\n  3 tests completed.\n\n  fasturl   x  4,053,379 ops/sec ±0.91% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("187 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  nativeurl x    963,999 ops/sec ±0.58% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("189 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  parseurl  x 11,516,143 ops/sec ±0.58% "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("188 runs sampled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"LICENSE"}},[this._v("MIT")])])}],!1,null,null,null);s.default=a.exports}}]);