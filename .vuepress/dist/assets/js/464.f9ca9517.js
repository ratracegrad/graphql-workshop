(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{630:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"update-notifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-notifier","aria-hidden":"true"}},[t._v("#")]),t._v(" update-notifier "),s("a",{attrs:{href:"https://travis-ci.org/yeoman/update-notifier",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/yeoman/update-notifier.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Inform users of your package of updates in a non-intrusive way.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),s("p",[t._v("Whenever you initiate the update notifier and it's not within the interval threshold, it will asynchronously check with npm in the background for available updates, then persist the result. The next time the notifier is initiated, the result will be loaded into the "),s("code",[t._v(".update")]),t._v(" property. This prevents any impact on your package startup performance.\nThe update check is done in a unref'ed "),s("a",{attrs:{href:"https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options",target:"_blank",rel:"noopener noreferrer"}},[t._v("child process"),s("OutboundLink")],1),t._v(". This means that if you call "),s("code",[t._v("process.exit")]),t._v(", the check will still be performed in its own process.")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),s("p",[t._v("How often to check for updates.")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),s("p",[t._v("Only notifies if there is an update and the process is "),s("a",{attrs:{href:"https://nodejs.org/api/process.html#process_tty_terminals_and_process_stdout",target:"_blank",rel:"noopener noreferrer"}},[t._v("TTY"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),s("p",[t._v("Defer showing the notification to after the process has exited.")]),t._v(" "),t._m(36),t._v(" "),s("p",[t._v("Type: "),s("code",[t._v("string")]),s("br"),t._v("\nDefault: "),s("a",{attrs:{href:"https://github.com/yeoman/update-notifier#update-notifier-",target:"_blank",rel:"noopener noreferrer"}},[t._v("See above screenshot"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Message that will be shown when an update is available.")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),s("p",[t._v("Options object that will be passed to "),s("a",{attrs:{href:"https://github.com/sindresorhus/boxen",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("boxen")]),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),s("p",[t._v("Allows notification to be shown when running as an npm script.")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),s("p",[t._v("Users can also opt-out by "),s("a",{attrs:{href:"https://github.com/sindresorhus/guides/blob/master/set-environment-variables.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("setting the environment variable"),s("OutboundLink")],1),t._v(" "),s("code",[t._v("NO_UPDATE_NOTIFIER")]),t._v(" with any value or by using the "),s("code",[t._v("--no-update-notifier")]),t._v(" flag on a per run basis.")]),t._v(" "),s("p",[t._v("The check is also skipped on CI automatically.")]),t._v(" "),t._m(46),t._v(" "),s("p",[t._v("The idea for this module came from the desire to apply the browser update strategy to CLI tools, where everyone is always on the latest version. We first tried automatic updating, which we discovered wasn't popular. This is the second iteration of that idea, but limited to just update notifications.")]),t._v(" "),t._m(47),t._v(" "),s("p",[t._v("There are a bunch projects using it:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/npm/npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),s("OutboundLink")],1),t._v(" - Package manager for JavaScript")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://yeoman.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yeoman"),s("OutboundLink")],1),t._v(" - Modern workflows for modern webapps")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://ava.li",target:"_blank",rel:"noopener noreferrer"}},[t._v("AVA"),s("OutboundLink")],1),t._v(" - Simple concurrent test runner")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/xojs/xo",target:"_blank",rel:"noopener noreferrer"}},[t._v("XO"),s("OutboundLink")],1),t._v(" - JavaScript happiness style linter")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/sindresorhus/pageres",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pageres"),s("OutboundLink")],1),t._v(" - Capture website screenshots")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://nodegh.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node GH"),s("OutboundLink")],1),t._v(" - GitHub command line tool")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.org/browse/depended/update-notifier",target:"_blank",rel:"noopener noreferrer"}},[t._v("And 1600+ more…"),s("OutboundLink")],1)]),t._v(" "),t._m(48),t._v(" "),s("p",[t._v("BSD-2-Clause © Google")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Update notifications for your CLI app")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"screenshot.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents","aria-hidden":"true"}},[this._v("#")]),this._v(" Contents")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"#install"}},[t._v("Install")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#usage"}},[t._v("Usage")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#how"}},[t._v("How")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#api"}},[t._v("API")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#about"}},[t._v("About")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#users"}},[t._v("Users")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ npm install update-notifier\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"simple"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple","aria-hidden":"true"}},[this._v("#")]),this._v(" Simple")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" updateNotifier "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update-notifier'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pkg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./package.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateNotifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"comprehensive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comprehensive","aria-hidden":"true"}},[this._v("#")]),this._v(" Comprehensive")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" updateNotifier "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update-notifier'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pkg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./package.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Checks for available update and returns an instance")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" notifier "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateNotifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Notify using the built-in convenience method")]),t._v("\nnotifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `notifier.update` contains some useful info about the update")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n{\n\tlatest: '1.0.1',\n\tcurrent: '1.0.0',\n\ttype: 'patch', // Possible values: latest, major, minor, patch, prerelease, build\n\tname: 'pageres'\n}\n*/")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options-and-custom-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-and-custom-message","aria-hidden":"true"}},[this._v("#")]),this._v(" Options and custom message")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" notifier "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateNotifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tpkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tupdateCheckInterval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 week")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`Update available: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("notifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latest"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how","aria-hidden":"true"}},[this._v("#")]),this._v(" How")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The first time the user runs your app, it will check for an update, and even if an update is available, it will wait the specified "),e("code",[this._v("updateCheckInterval")]),this._v(" before notifying the user. This is done to not be annoying to the user, but might surprise you as an implementer if you're testing whether it works. Check out "),e("a",{attrs:{href:"example.js"}},[e("code",[this._v("example.js")])]),this._v(" to quickly test out "),e("code",[this._v("update-notifier")]),this._v(" and see how you can test that it works in your app.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"notifier-updatenotifier-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notifier-updatenotifier-options","aria-hidden":"true"}},[this._v("#")]),this._v(" notifier = updateNotifier(options)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Checks if there is an available update. Accepts options defined below. Returns an instance with an "),e("code",[this._v(".update")]),this._v(" property there is an available update, otherwise "),e("code",[this._v("undefined")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"pkg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pkg","aria-hidden":"true"}},[this._v("#")]),this._v(" pkg")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Type: "),e("code",[this._v("Object")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[this._v("#")]),this._v(" name")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Required")]),e("br"),this._v("\nType: "),e("code",[this._v("string")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[this._v("#")]),this._v(" version")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Required")]),e("br"),this._v("\nType: "),e("code",[this._v("string")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"updatecheckinterval"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updatecheckinterval","aria-hidden":"true"}},[this._v("#")]),this._v(" updateCheckInterval")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Type: "),e("code",[this._v("number")]),e("br"),this._v("\nDefault: "),e("code",[this._v("1000 * 60 * 60 * 24")]),this._v(" "),e("em",[this._v("(1 day)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"callback-error-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#callback-error-update","aria-hidden":"true"}},[this._v("#")]),this._v(" callback(error, update)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Type: "),e("code",[this._v("Function")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Passing a callback here will make it check for an update directly and report right away. Not recommended as you won't get the benefits explained in "),e("a",{attrs:{href:"#how"}},[e("code",[this._v("How")])]),this._v(". "),e("code",[this._v("update")]),this._v(" is equal to "),e("code",[this._v("notifier.update")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"notifier-notify-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notifier-notify-options","aria-hidden":"true"}},[this._v("#")]),this._v(" notifier.notify([options])")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Convenience method to display a notification message. "),e("em",[this._v("(See screenshot)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"options-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-2","aria-hidden":"true"}},[this._v("#")]),this._v(" options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Type: "),e("code",[this._v("Object")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"defer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defer","aria-hidden":"true"}},[this._v("#")]),this._v(" defer")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Type: "),e("code",[this._v("boolean")]),e("br"),this._v("\nDefault: "),e("code",[this._v("true")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message","aria-hidden":"true"}},[this._v("#")]),this._v(" message")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"isglobal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isglobal","aria-hidden":"true"}},[this._v("#")]),this._v(" isGlobal")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Type: "),e("code",[this._v("boolean")]),e("br"),this._v("\nDefault: "),e("code",[this._v("true")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Include the "),e("code",[this._v("-g")]),this._v(" argument in the default message's "),e("code",[this._v("npm i")]),this._v(" recommendation. You may want to change this if your CLI package can be installed as a dependency of another project, and don't want to recommend a global installation. This option is ignored if you supply your own "),e("code",[this._v("message")]),this._v(" (see above).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"boxenopts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boxenopts","aria-hidden":"true"}},[this._v("#")]),this._v(" boxenOpts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Type: "),e("code",[this._v("Object")]),e("br"),this._v("\nDefault: "),e("code",[this._v("{padding: 1, margin: 1, align: 'center', borderColor: 'yellow', borderStyle: 'round'}")]),this._v(" "),e("em",[this._v("(See screenshot)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"shouldnotifyinnpmscript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shouldnotifyinnpmscript","aria-hidden":"true"}},[this._v("#")]),this._v(" shouldNotifyInNpmScript")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Type: "),e("code",[this._v("boolean")]),e("br"),this._v("\nDefault: "),e("code",[this._v("false")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"user-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" User settings")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Users of your module have the ability to opt-out of the update notifier by changing the "),s("code",[t._v("optOut")]),t._v(" property to "),s("code",[t._v("true")]),t._v(" in "),s("code",[t._v("~/.config/configstore/update-notifier-[your-module-name].json")]),t._v(". The path is available in "),s("code",[t._v("notifier.config.path")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"about"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about","aria-hidden":"true"}},[this._v("#")]),this._v(" About")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"users"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#users","aria-hidden":"true"}},[this._v("#")]),this._v(" Users")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);e.default=n.exports}}]);