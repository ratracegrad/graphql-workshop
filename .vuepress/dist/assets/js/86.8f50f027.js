(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{253:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.org/package/depd",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/depd.svg",alt:"NPM Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://npmjs.org/package/depd",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dm/depd.svg",alt:"NPM Downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/node/v/depd.svg",alt:"Node.js Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://travis-ci.org/dougwilson/nodejs-depd",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/travis/dougwilson/nodejs-depd/master.svg?label=linux",alt:"Linux Build"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://ci.appveyor.com/project/dougwilson/nodejs-depd",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/appveyor/ci/dougwilson/nodejs-depd/master.svg?label=windows",alt:"Windows Build"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://coveralls.io/r/dougwilson/nodejs-depd?branch=master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/coveralls/dougwilson/nodejs-depd/master.svg",alt:"Coverage Status"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Deprecate all the things")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),s("p",[t._v("This module can also be bundled with systems like\n"),s("a",{attrs:{href:"http://browserify.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browserify"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://webpack.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),s("OutboundLink")],1),t._v(",\nthough by default this module will alter it's API to no longer display or\ntrack deprecations.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),s("p",[t._v("This library allows you to display deprecation messages to your users.\nThis library goes above and beyond with deprecation warnings by\nintrospection of the call stack (but only the bits that it is interested\nin).")]),t._v(" "),s("p",[t._v("Instead of just warning on the first invocation of a deprecated\nfunction and never again, this module will warn on the first invocation\nof a deprecated function per unique call site, making it ideal to alert\nusers of all deprecated uses across the code base, rather than just\nwhatever happens to execute first.")]),t._v(" "),s("p",[t._v("The deprecation warnings from this module also include the file and line\ninformation for the call into the module that the deprecated function was\nin.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Create a new deprecate function that uses the given namespace name in the\nmessages and will display the call site prior to the stack entering the\nfile this function was called from. It is highly suggested you use the\nname of your module as the namespace.")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Call this function from deprecated code to display a deprecation message.\nThis message will appear once per unique caller site. Caller site is the\nfirst call site in the stack in a different file from the caller of this\nfunction.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("Call this function to wrap a given function in a deprecation message on any\ncall to the function. An optional message can be supplied to provide a custom\nmessage.")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("Call this function to wrap a given property on object in a deprecation message\non any accessing or setting of the property. An optional message can be supplied\nto provide a custom message.")]),t._v(" "),s("p",[t._v("The method must be called on the object where the property belongs (not\ninherited from the prototype).")]),t._v(" "),s("p",[t._v("If the property is a data descriptor, it will be converted to an accessor\ndescriptor in order to display the deprecation message.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("The error represents the deprecation and is emitted only once with the same\nrules as writing to STDERR. The error has the following properties:")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._v(" "),s("p",[t._v('This will display a deprecated message about "oldfunction" being deprecated\nfrom "my-module" on STDERR.')]),t._v(" "),t._m(38),t._m(39),t._v(" "),s("p",[t._v('This will display a deprecated message about "weirdfunction" being deprecated\nfrom "my-module" on STDERR when called with less than 2 arguments.')]),t._v(" "),t._m(40),t._m(41),t._v(" "),t._m(42),t._m(43),t._v(" "),s("p",[t._v('This will display a deprecated message about "oldprop" being deprecated\nfrom "my-module" on STDERR when accessed. A deprecation will be displayed\nwhen setting the value and when getting the value.')]),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"depd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#depd","aria-hidden":"true"}},[this._v("#")]),this._v(" depd")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("With great modules comes great responsibility; mark things deprecated!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This module is installed directly using "),e("code",[this._v("npm")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ npm install depd\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" deprecate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'depd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("NOTE")]),this._v(" this library has a similar interface to the "),e("code",[this._v("debug")]),this._v(" module, and\nthis module uses the calling file to get the boundary for the call stacks,\nso you should always create a new "),e("code",[this._v("deprecate")]),this._v(" object in each file and not\nwithin some central file.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"depd-namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#depd-namespace","aria-hidden":"true"}},[this._v("#")]),this._v(" depd(namespace)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"deprecate-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deprecate-message","aria-hidden":"true"}},[this._v("#")]),this._v(" deprecate(message)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the message is omitted, a message is generated for you based on the site\nof the "),e("code",[this._v("deprecate()")]),this._v(" call and will display the name of the function called,\nsimilar to the name displayed in a stack trace.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"deprecate-function-fn-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deprecate-function-fn-message","aria-hidden":"true"}},[this._v("#")]),this._v(" deprecate.function(fn, message)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"deprecate-property-obj-prop-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deprecate-property-obj-prop-message","aria-hidden":"true"}},[this._v("#")]),this._v(" deprecate.property(obj, prop, message)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"process-on-deprecation-fn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-on-deprecation-fn","aria-hidden":"true"}},[this._v("#")]),this._v(" process.on('deprecation', fn)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('This module will allow easy capturing of deprecation errors by emitting the\nerrors as the type "deprecation" on the global '),e("code",[this._v("process")]),this._v(". If there are no\nlisteners for this type, the errors are written to STDERR as normal, but if\nthere are any listeners, nothing will be written to STDERR and instead only\nemitted. From there, you can write the errors in a different format or to a\nlogging source.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("message")]),t._v(" - This is the message given by the library")]),t._v(" "),s("li",[s("code",[t._v("name")]),t._v(" - This is always "),s("code",[t._v("'DeprecationError'")])]),t._v(" "),s("li",[s("code",[t._v("namespace")]),t._v(" - This is the namespace the deprecation came from")]),t._v(" "),s("li",[s("code",[t._v("stack")]),t._v(" - This is the stack of the call to the deprecated thing")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Example "),e("code",[this._v("error.stack")]),this._v(" output:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("DeprecationError: my-cool-module deprecated oldfunction\n    at Object.<anonymous> ([eval]-wrapper:6:22)\n    at Module._compile (module.js:456:26)\n    at evalScript (node.js:532:25)\n    at startup (node.js:80:7)\n    at node.js:902:3\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"process-env-no-deprecation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-env-no-deprecation","aria-hidden":"true"}},[this._v("#")]),this._v(" process.env.NO_DEPRECATION")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("As a user of modules that are deprecated, the environment variable "),e("code",[this._v("NO_DEPRECATION")]),this._v("\nis provided as a quick solution to silencing deprecation warnings from being\noutput. The format of this is similar to that of "),e("code",[this._v("DEBUG")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ NO_DEPRECATION=my-module,othermod node app.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('This will suppress deprecations from being output for "my-module" and "othermod".\nThe value is a list of comma-separated namespaces. To suppress every warning\nacross all namespaces, use the value '),e("code",[this._v("*")]),this._v(" for a namespace.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Providing the argument "),e("code",[this._v("--no-deprecation")]),this._v(" to the "),e("code",[this._v("node")]),this._v(" executable will suppress\nall deprecations (only available in Node.js 0.8 or higher).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("NOTE")]),this._v(' This will not suppress the deperecations given to any "deprecation"\nevent listeners, just the output to STDERR.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"process-env-trace-deprecation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-env-trace-deprecation","aria-hidden":"true"}},[this._v("#")]),this._v(" process.env.TRACE_DEPRECATION")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("As a user of modules that are deprecated, the environment variable "),e("code",[this._v("TRACE_DEPRECATION")]),this._v("\nis provided as a solution to getting more detailed location information in deprecation\nwarnings by including the entire stack trace. The format of this is the same as\n"),e("code",[this._v("NO_DEPRECATION")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ TRACE_DEPRECATION=my-module,othermod node app.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('This will include stack traces for deprecations being output for "my-module" and\n"othermod". The value is a list of comma-separated namespaces. To trace every\nwarning across all namespaces, use the value '),e("code",[this._v("*")]),this._v(" for a namespace.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Providing the argument "),e("code",[this._v("--trace-deprecation")]),this._v(" to the "),e("code",[this._v("node")]),this._v(" executable will trace\nall deprecations (only available in Node.js 0.8 or higher).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("NOTE")]),this._v(" This will not trace the deperecations silenced by "),e("code",[this._v("NO_DEPRECATION")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"display"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display","aria-hidden":"true"}},[this._v("#")]),this._v(" Display")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"files/message.png",alt:"message"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When a user calls a function in your library that you mark deprecated, they\nwill see the following written to STDERR (in the given colors, similar colors\nand layout to the "),e("code",[this._v("debug")]),this._v(" module):")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('bright cyan    bright yellow\n|              |          reset       cyan\n|              |          |           |\n▼              ▼          ▼           ▼\nmy-cool-module deprecated oldfunction [eval]-wrapper:6:22\n▲              ▲          ▲           ▲\n|              |          |           |\nnamespace      |          |           location of mycoolmod.oldfunction() call\n               |          deprecation message\n               the word "deprecated"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the user redirects their STDERR to a file or somewhere that does not support\ncolors, they see (similar layout to the "),e("code",[this._v("debug")]),this._v(" module):")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Sun, 15 Jun 2014 05:21:37 GMT my-cool-module deprecated oldfunction at [eval]-wrapper:6:22\n▲                             ▲              ▲          ▲              ▲\n|                             |              |          |              |\ntimestamp of message          namespace      |          |             location of mycoolmod.oldfunction() call\n                                             |          deprecation message\n                                             the word "deprecated"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"deprecating-all-calls-to-a-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deprecating-all-calls-to-a-function","aria-hidden":"true"}},[this._v("#")]),this._v(" Deprecating all calls to a function")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" deprecate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'depd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-cool-module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// message automatically derived from function name")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object.oldfunction")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oldfunction "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deprecate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("oldfunction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// all calls to function are deprecated")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// specific message")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oldfunction "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deprecate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// all calls to function are deprecated")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'oldfunction'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"conditionally-deprecating-a-function-call"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conditionally-deprecating-a-function-call","aria-hidden":"true"}},[this._v("#")]),this._v(" Conditionally deprecating a function call")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" deprecate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'depd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-cool-module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("weirdfunction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// calls with 0 or 1 args are deprecated")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deprecate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'weirdfunction args < 2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When calling "),e("code",[this._v("deprecate")]),this._v(" as a function, the warning is counted per call site\nwithin your own module, so you can display different deprecations depending\non different situations and the users will still get all the warnings:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" deprecate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'depd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-cool-module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("weirdfunction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// calls with 0 or 1 args are deprecated")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deprecate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'weirdfunction args < 2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// calls with non-string first argument are deprecated")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deprecate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'weirdfunction non-string first arg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"deprecating-property-access"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deprecating-property-access","aria-hidden":"true"}},[this._v("#")]),this._v(" Deprecating property access")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" deprecate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'depd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-cool-module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oldprop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'something'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// message automatically derives from property name")]),t._v("\ndeprecate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'oldprop'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// explicit message")]),t._v("\ndeprecate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'oldprop'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'oldprop >= 0.10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"LICENSE"}},[this._v("MIT")])])}],!1,null,null,null);e.default=n.exports}}]);