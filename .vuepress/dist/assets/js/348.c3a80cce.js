(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{514:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.org/package/on-finished",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/on-finished.svg",alt:"NPM Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://npmjs.org/package/on-finished",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dm/on-finished.svg",alt:"NPM Downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://nodejs.org/download/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/node/v/on-finished.svg",alt:"Node.js Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://travis-ci.org/jshttp/on-finished",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/travis/jshttp/on-finished/master.svg",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://coveralls.io/r/jshttp/on-finished?branch=master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/on-finished/master.svg",alt:"Test Coverage"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Execute a callback when a HTTP request closes, finishes, or errors.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),s("p",[t._v("Attach a listener to listen for the response to finish. The listener will\nbe invoked only once when the response finished. If the response finished\nto an error, the first argument will contain the error. If the response\nhas already finished, the listener will be invoked.")]),t._v(" "),s("p",[t._v("Listening to the end of a response would be used to close things associated\nwith the response, like open files.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("Attach a listener to listen for the request to finish. The listener will\nbe invoked only once when the request finished. If the request finished\nto an error, the first argument will contain the error. If the request\nhas already finished, the listener will be invoked.")]),t._v(" "),s("p",[t._v("Listening to the end of a request would be used to know when to continue\nafter reading the data.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("The following code ensures that file descriptors are always closed\nonce the response finishes.")]),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"on-finished"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-finished","aria-hidden":"true"}},[this._v("#")]),this._v(" on-finished")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ npm install on-finished\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" onFinished "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'on-finished'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"onfinished-res-listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onfinished-res-listener","aria-hidden":"true"}},[this._v("#")]),this._v(" onFinished(res, listener)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Listener is invoked as "),e("code",[this._v("listener(err, res)")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFinished")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// clean up open fds, etc.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// err contains the error is request error'd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"onfinished-req-listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onfinished-req-listener","aria-hidden":"true"}},[this._v("#")]),this._v(" onFinished(req, listener)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Listener is invoked as "),e("code",[this._v("listener(err, req)")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n\nreq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEncoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nres"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" str\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFinished")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data is read unless there is err")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"onfinished-isfinished-res"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onfinished-isfinished-res","aria-hidden":"true"}},[this._v("#")]),this._v(" onFinished.isFinished(res)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Determine if "),e("code",[this._v("res")]),this._v(" is already finished. This would be useful to check and\nnot even start certain operations if the response has already finished.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"onfinished-isfinished-req"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onfinished-isfinished-req","aria-hidden":"true"}},[this._v("#")]),this._v(" onFinished.isFinished(req)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Determine if "),e("code",[this._v("req")]),this._v(" is already finished. This would be useful to check and\nnot even start certain operations if the request has already finished.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"special-node-js-requests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#special-node-js-requests","aria-hidden":"true"}},[this._v("#")]),this._v(" Special Node.js requests")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"http-connect-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-connect-method","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP CONNECT method")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The meaning of the "),e("code",[this._v("CONNECT")]),this._v(" method from RFC 7231, section 4.3.6:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("The CONNECT method requests that the recipient establish a tunnel to\nthe destination origin server identified by the request-target and,\nif successful, thereafter restrict its behavior to blind forwarding\nof packets, in both directions, until the tunnel is closed.  Tunnels\nare commonly used to create an end-to-end virtual connection, through\none or more proxies, which can then be secured using TLS (Transport\nLayer Security, [RFC5246]).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In Node.js, these request objects come from the "),e("code",[this._v("'connect'")]),this._v(" event on\nthe HTTP server.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When this module is used on a HTTP "),e("code",[this._v("CONNECT")]),this._v(' request, the request is\nconsidered "finished" immediately, '),e("strong",[this._v("due to limitations in the Node.js\ninterface")]),this._v(". This means if the "),e("code",[this._v("CONNECT")]),this._v(' request contains a request entity,\nthe request will be considered "finished" even before it has been read.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There is no such thing as a response object to a "),e("code",[this._v("CONNECT")]),this._v(" request in\nNode.js, so there is no support for for one.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"http-upgrade-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-upgrade-request","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP Upgrade request")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The meaning of the "),e("code",[this._v("Upgrade")]),this._v(" header from RFC 7230, section 6.1:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('The "Upgrade" header field is intended to provide a simple mechanism\nfor transitioning from HTTP/1.1 to some other protocol on the same\nconnection.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In Node.js, these request objects come from the "),e("code",[this._v("'upgrade'")]),this._v(" event on\nthe HTTP server.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When this module is used on a HTTP request with an "),e("code",[this._v("Upgrade")]),this._v(' header, the\nrequest is considered "finished" immediately, '),e("strong",[this._v("due to limitations in the\nNode.js interface")]),this._v(". This means if the "),e("code",[this._v("Upgrade")]),this._v(' request contains a request\nentity, the request will be considered "finished" even before it has been\nread.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There is no such thing as a response object to a "),e("code",[this._v("Upgrade")]),this._v(" request in\nNode.js, so there is no support for for one.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" destroy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'destroy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" onFinished "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'on-finished'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nhttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFinished")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"LICENSE"}},[this._v("MIT")])])}],!1,null,null,null);e.default=a.exports}}]);