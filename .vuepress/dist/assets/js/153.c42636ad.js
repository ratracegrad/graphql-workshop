(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{320:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("A nearly stateless terminal based horizontal gauge / progress bar.")]),e._v(" "),e._m(1),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("Gauge 2.x is breaking release, please see the "),s("router-link",{attrs:{to:"./CHANGELOG.html"}},[e._v("changelog")]),e._v(" for details on\nwhat's changed if you were previously a user of this module.")],1),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("This is the typical interface to the module– it provides a pretty\nfire-and-forget interface to displaying your status information.")]),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("The second argument is the percent completed as a value between 0 and 1.\nWithout it, completion is just not updated. You'll also note that completion\ncan be passed in as part of a status object as the first argument. If both\nit and the completed argument are passed in, the completed argument wins.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),s("p",[e._v('It turns out this is important when you\'re pausing the progress bar on one\nfilehandle and printing to another– otherwise (with a big enough print) node\ncan end up printing the "end progress bar" bits to the progress bar filehandle\nwhile other stuff is printing to another filehandle. These getting interleaved\ncan cause corruption in some terminals.')]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),s("p",[e._v("Returns true if the gauge is enabled.")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),s("p",[e._v("Change the active theme, will be displayed with the next show or pulse. This can be:")]),e._v(" "),e._m(27),e._v(" "),s("p",[e._v("If no theme is selected then a default is picked using a combination of our\nbest guesses at your OS, color support and unicode support.")]),e._v(" "),e._m(28),e._v(" "),s("p",[e._v("Change the active template, will be displayed with the next show or pulse")]),e._v(" "),e._m(29),e._v(" "),s("p",[e._v("If you have more than one thing going on that you want to track completion\nof, you may find the related "),s("a",{attrs:{href:"https://www.npmjs.com/package/are-we-there-yet",target:"_blank",rel:"noopener noreferrer"}},[e._v("are-we-there-yet"),s("OutboundLink")],1),e._v(" helpful.  It's "),s("code",[e._v("change")]),e._v("\nevent can be wired up to the "),s("code",[e._v("show")]),e._v(" method to get a more traditional\nprogress bar interface.")]),e._v(" "),e._m(30),e._v(" "),e._m(31),e._m(32),e._v(" "),e._m(33),e._m(34),e._v(" "),e._m(35),e._v(" "),s("p",[e._v("Theme objects are a function that fetches the default theme based on\nplatform, unicode and color support.")]),e._v(" "),s("p",[e._v("Options is an object with the following properties:")]),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),e._m(48),e._v(" "),e._m(49),e._v(" "),e._m(50),e._v(" "),e._m(51),e._v(" "),s("p",[e._v("newTheme should be a bare object– we'll start by discussing the properties\ndefined by the default themes:")]),e._v(" "),e._m(52),e._v(" "),s("p",[e._v("More generally, themes can have any value that would be a valid value when rendering\ntemplates. The properties in the theme are used when their name matches a type in\nthe template. Their values can be:")]),e._v(" "),e._m(53),e._v(" "),s("p",[e._v("There are a couple of special prefixes:")]),e._v(" "),e._m(54),e._v(" "),s("p",[e._v("And one special suffix:")]),e._v(" "),e._m(55),e._v(" "),e._m(56),e._v(" "),e._m(57),e._v(" "),e._m(58),e._v(" "),s("p",[e._v("Copy the current themeset into a new one.  This allows you to easily inherit\none themeset from another.")]),e._v(" "),e._m(59),e._v(" "),s("p",[e._v("A template is an array of objects and strings that, after being evaluated,\nwill be turned into the gauge line.  The default template is:")]),e._v(" "),e._m(60),e._m(61),e._v(" "),e._m(62),e._v(" "),e._m(63),e._v(" "),s("p",[e._v("This is the super simple, assume nothing, do no magic internals used by gauge to\nimplement its ordinary interface.")]),e._v(" "),e._m(64),e._m(65),e._v(" "),e._m(66),e._v(" "),s("p",[e._v("Change the active theme.")]),e._v(" "),e._m(67),e._v(" "),s("p",[e._v("Change the active template.")]),e._v(" "),e._m(68),e._v(" "),s("p",[e._v("Change the width to render at.")]),e._v(" "),e._m(69),e._v(" "),s("p",[e._v("Return the string necessary to hide the progress bar")]),e._v(" "),e._m(70),e._v(" "),s("p",[e._v("Return a string to hide the cursor.")]),e._v(" "),e._m(71),e._v(" "),s("p",[e._v("Return a string to show the cursor.")]),e._v(" "),e._m(72),e._v(" "),e._m(73)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"gauge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge","aria-hidden":"true"}},[this._v("#")]),this._v(" gauge")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" Gauge "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"gauge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" gauge "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Gauge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\ngauge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\ngauge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("pulse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"this"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\ngauge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"gauge-demo.gif",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"changes-from-1-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changes-from-1-x","aria-hidden":"true"}},[this._v("#")]),this._v(" CHANGES FROM 1.x")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-gauge-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-gauge-class","aria-hidden":"true"}},[this._v("#")]),this._v(" THE GAUGE CLASS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('var Gauge = require("gauge")\n\nvar gauge = new Gauge([stream], [options])\n')])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("strong",[e._v("stream")]),e._v(" – "),s("em",[e._v("(optional, default STDERR)")]),e._v(" A stream that progress bar\nupdates are to be written to.  Gauge honors backpressure and will pause\nmost writing if it is indicated.")]),e._v(" "),s("li",[s("strong",[e._v("options")]),e._v(" – "),s("em",[e._v("(optional)")]),e._v(" An option object.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Constructs a new gauge. Gauges are drawn on a single line, and are not drawn\nif "),t("strong",[this._v("stream")]),this._v(" isn't a tty and a tty isn't explicitly provided.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("If "),s("strong",[e._v("stream")]),e._v(" is a terminal or if you pass in "),s("strong",[e._v("tty")]),e._v(" to "),s("strong",[e._v("options")]),e._v(" then we\nwill detect terminal resizes and redraw to fit.  We do this by watching for\n"),s("code",[e._v("resize")]),e._v(" events on the tty.  (To work around a bug in verisons of Node prior\nto 2.5.0, we watch for them on stdout if the tty is stderr.) Resizes to\nlarger window sizes will be clean, but shrinking the window will always\nresult in some cruft.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("strong",[e._v("IMPORTANT:")]),e._v(" If you prevously were passing in a non-tty stream but you still\nwant output (for example, a stream wrapped by the "),s("code",[e._v("ansi")]),e._v(" module) then you\nneed to pass in the "),s("strong",[e._v("tty")]),e._v(" option below, as "),s("code",[e._v("gauge")]),e._v(" needs access to\nthe underlying tty in order to do things like terminal resizes and terminal\nwidth detection.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("strong",[this._v("options")]),this._v(" object can have the following properties, all of which are\noptional:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[s("strong",[e._v("updateInterval")]),e._v(": How often gauge updates should be drawn, in miliseconds.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("fixedFramerate")]),e._v(": Defaults to false on node 0.8, true on everything\nelse.  When this is true a timer is created to trigger once every\n"),s("code",[e._v("updateInterval")]),e._v(" ms, when false, updates are printed as soon as they come\nin but updates more often than "),s("code",[e._v("updateInterval")]),e._v(" are ignored.  The reason\n0.8 doesn't have this set to true is that it can't "),s("code",[e._v("unref")]),e._v(" its timer and\nso it would stop your program from exiting– if you want to use this\nfeature with 0.8 just make sure you call "),s("code",[e._v("gauge.disable()")]),e._v(" before you\nexpect your program to exit.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("themes")]),e._v(": A themeset to use when selecting the theme to use. Defaults\nto "),s("code",[e._v("gauge/themes")]),e._v(", see the "),s("a",{attrs:{href:"#themes"}},[e._v("themes")]),e._v(" documentation for details.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("theme")]),e._v(": Select a theme for use, it can be a:")]),e._v(" "),s("ul",[s("li",[e._v("Theme object, in which case the "),s("strong",[e._v("themes")]),e._v(" is not used.")]),e._v(" "),s("li",[e._v("The name of a theme, which will be looked up in the current "),s("em",[e._v("themes")]),e._v("\nobject.")]),e._v(" "),s("li",[e._v("A configuration object with any of "),s("code",[e._v("hasUnicode")]),e._v(", "),s("code",[e._v("hasColor")]),e._v(" or\n"),s("code",[e._v("platform")]),e._v(" keys, which if wlll be used to override our guesses when making\na default theme selection.")])]),e._v(" "),s("p",[e._v("If no theme is selected then a default is picked using a combination of our\nbest guesses at your OS, color support and unicode support.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("template")]),e._v(": Describes what you want your gauge to look like.  The\ndefault is what npm uses.  Detailed "),s("a",{attrs:{href:"#templates"}},[e._v("documentation")]),e._v(" is later in this\ndocument.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("hideCursor")]),e._v(": Defaults to true.  If true, then the cursor will be hidden\nwhile the gauge is displayed.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("tty")]),e._v(": The tty that you're ultimately writing to.  Defaults to the same\nas "),s("strong",[e._v("stream")]),e._v(".  This is used for detecting the width of the terminal and\nresizes. The width used is "),s("code",[e._v("tty.columns - 1")]),e._v(". If no tty is available then\na width of "),s("code",[e._v("79")]),e._v(" is assumed.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("enabled")]),e._v(": Defaults to true if "),s("code",[e._v("tty")]),e._v(" is a TTY, false otherwise.  If true\nthe gauge starts enabled.  If disabled then all update commands are\nignored and no gauge will be printed until you call "),s("code",[e._v(".enable()")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Plumbing")]),e._v(": The class to use to actually generate the gauge for\nprinting.  This defaults to "),s("code",[e._v("require('gauge/plumbing')")]),e._v(" and ordinarly you\nshouldn't need to override this.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("cleanupOnExit")]),e._v(": Defaults to true. Ordinarily we register an exit\nhandler to make sure your cursor is turned back on and the progress bar\nerased when your process exits, even if you Ctrl-C out or otherwise exit\nunexpectedly. You can disable this and it won't register the exit handler.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-show-section-status-completed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-show-section-status-completed","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.show(section | status, [completed])")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The first argument is either the section, the name of the current thing\ncontributing to progress, or an object with keys like "),s("strong",[e._v("section")]),e._v(",\n"),s("strong",[e._v("subsection")]),e._v(" & "),s("strong",[e._v("completed")]),e._v(" (or any others you have types for in a custom\ntemplate).  If you don't want to update or set any of these you can pass\n"),s("code",[e._v("null")]),e._v(" and it will be ignored.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-hide-cb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-hide-cb","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.hide([cb])")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Removes the gauge from the terminal.  Optionally, callback "),t("code",[this._v("cb")]),this._v(" after IO has\nhad an opportunity to happen (currently this just means after "),t("code",[this._v("setImmediate")]),this._v("\nhas called back.)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-pulse-subsection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-pulse-subsection","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.pulse([subsection])")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("subsection")]),this._v(" – "),t("em",[this._v("(optional)")]),this._v(" The specific thing that triggered this pulse")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Spins the spinner in the gauge to show output.  If "),t("strong",[this._v("subsection")]),this._v(" is\nincluded then it will be combined with the last name passed to "),t("code",[this._v("gauge.show")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-disable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-disable","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.disable()")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Hides the gauge and ignores further calls to "),t("code",[this._v("show")]),this._v(" or "),t("code",[this._v("pulse")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-enable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-enable","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.enable()")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Shows the gauge and resumes updating when "),t("code",[this._v("show")]),this._v(" or "),t("code",[this._v("pulse")]),this._v(" is called.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-isenabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-isenabled","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.isEnabled()")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-setthemeset-themes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-setthemeset-themes","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.setThemeset(themes)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Change the themeset to select a theme from. The same as the "),t("code",[this._v("themes")]),this._v(" option\nused in the constructor. The theme will be reselected from this themeset.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-settheme-theme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-settheme-theme","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.setTheme(theme)")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Theme object, in which case the "),s("strong",[e._v("themes")]),e._v(" is not used.")]),e._v(" "),s("li",[e._v("The name of a theme, which will be looked up in the current "),s("em",[e._v("themes")]),e._v("\nobject.")]),e._v(" "),s("li",[e._v("A configuration object with any of "),s("code",[e._v("hasUnicode")]),e._v(", "),s("code",[e._v("hasColor")]),e._v(" or\n"),s("code",[e._v("platform")]),e._v(" keys, which if wlll be used to override our guesses when making\na default theme selection.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-settemplate-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-settemplate-template","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.setTemplate(template)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"tracking-completion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tracking-completion","aria-hidden":"true"}},[this._v("#")]),this._v(" Tracking Completion")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"themes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes","aria-hidden":"true"}},[this._v("#")]),this._v(" THEMES")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("var themes = require('gauge/themes')\n\n// fetch the default color unicode theme for this platform\nvar ourTheme = themes({hasUnicode: true, hasColor: true})\n\n// fetch the default non-color unicode theme for osx\nvar ourTheme = themes({hasUnicode: true, hasColor: false, platform: 'darwin'})\n\n// create a new theme based on the color ascii theme for this platform\n// that brackets the progress bar with arrows\nvar ourTheme = themes.newTheme(theme(hasUnicode: false, hasColor: true}), {\n  preProgressbar: '→',\n  postProgressbar: '←'\n})\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The object returned by "),t("code",[this._v("gauge/themes")]),this._v(" is an instance of the "),t("code",[this._v("ThemeSet")]),this._v(" class.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("var ThemeSet = require('gauge/theme-set')\nvar themes = new ThemeSet()\n// or\nvar themes = require('gauge/themes')\nvar mythemes = themes.newThemeset() // creates a new themeset based on the default themes\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"themes-opts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-opts","aria-hidden":"true"}},[this._v("#")]),this._v(" themes(opts)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"themes-getdefault-opts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-getdefault-opts","aria-hidden":"true"}},[this._v("#")]),this._v(" themes.getDefault(opts)")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("strong",[e._v("hasUnicode")]),e._v(" - If true, fetch a unicode theme, if no unicode theme is\navailable then a non-unicode theme will be used.")]),e._v(" "),s("li",[s("strong",[e._v("hasColor")]),e._v(" - If true, fetch a color theme, if no color theme is\navailable a non-color theme will be used.")]),e._v(" "),s("li",[s("strong",[e._v("platform")]),e._v(" (optional) - Defaults to "),s("code",[e._v("process.platform")]),e._v(".  If no\nplatform match is available then "),s("code",[e._v("fallback")]),e._v(" is used instead.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If no compatible theme can be found then an error will be thrown with a\n"),t("code",[this._v("code")]),this._v(" of "),t("code",[this._v("EMISSINGTHEME")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"themes-addtheme-themename-themeobj"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-addtheme-themename-themeobj","aria-hidden":"true"}},[this._v("#")]),this._v(" themes.addTheme(themeName, themeObj)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"themes-addtheme-themename-parenttheme-newtheme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-addtheme-themename-parenttheme-newtheme","aria-hidden":"true"}},[this._v("#")]),this._v(" themes.addTheme(themeName, [parentTheme], newTheme)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Adds a named theme to the themeset.  You can pass in either a theme object,\nas returned by "),t("code",[this._v("themes.newTheme")]),this._v(" or the arguments you'd pass to\n"),t("code",[this._v("themes.newTheme")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"themes-getthemenames"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-getthemenames","aria-hidden":"true"}},[this._v("#")]),this._v(" themes.getThemeNames()")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Return a list of all of the names of the themes in this themeset. Suitable\nfor use in "),t("code",[this._v("themes.getTheme(…)")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"themes-gettheme-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-gettheme-name","aria-hidden":"true"}},[this._v("#")]),this._v(" themes.getTheme(name)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Returns the theme object from this theme set named "),t("code",[this._v("name")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If "),t("code",[this._v("name")]),this._v(" does not exist in this themeset an error will be thrown with\na "),t("code",[this._v("code")]),this._v(" of "),t("code",[this._v("EMISSINGTHEME")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"themes-setdefault-opts-themename"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-setdefault-opts-themename","aria-hidden":"true"}},[this._v("#")]),this._v(" themes.setDefault([opts], themeName)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("opts")]),this._v(" is an object with the following properties.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("strong",[e._v("platform")]),e._v(" - Defaults to "),s("code",[e._v("'fallback'")]),e._v(".  If your theme is platform\nspecific, specify that here with the platform from "),s("code",[e._v("process.platform")]),e._v(", eg,\n"),s("code",[e._v("win32")]),e._v(", "),s("code",[e._v("darwin")]),e._v(", etc.")]),e._v(" "),s("li",[s("strong",[e._v("hasUnicode")]),e._v(" - Defaults to "),s("code",[e._v("false")]),e._v(". If your theme uses unicode you\nshould set this to true.")]),e._v(" "),s("li",[s("strong",[e._v("hasColor")]),e._v(" - Defaults to "),s("code",[e._v("false")]),e._v(".  If your theme uses color you should\nset this to true.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("themeName")]),this._v(" is the name of the theme (as given to "),t("code",[this._v("addTheme")]),this._v(") to use for\nthis set of "),t("code",[this._v("opts")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"themes-newtheme-parenttheme-newtheme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-newtheme-parenttheme-newtheme","aria-hidden":"true"}},[this._v("#")]),this._v(" themes.newTheme([parentTheme,] newTheme)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Create a new theme object based on "),t("code",[this._v("parentTheme")]),this._v(".  If no "),t("code",[this._v("parentTheme")]),this._v(" is\nprovided then a minimal parentTheme that defines functions for rendering the\nactivity indicator (spinner) and progress bar will be defined. (This\nfallback parent is defined in "),t("code",[this._v("gauge/base-theme")]),this._v(".)")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("strong",[e._v("preProgressbar")]),e._v(" - displayed prior to the progress bar, if the progress\nbar is displayed.")]),e._v(" "),s("li",[s("strong",[e._v("postProgressbar")]),e._v(" - displayed after the progress bar, if the progress bar\nis displayed.")]),e._v(" "),s("li",[s("strong",[e._v("progressBarTheme")]),e._v(" - The subtheme passed through to the progress bar\nrenderer, it's an object with "),s("code",[e._v("complete")]),e._v(" and "),s("code",[e._v("remaining")]),e._v(" properties\nthat are the strings you want repeated for those sections of the progress\nbar.")]),e._v(" "),s("li",[s("strong",[e._v("activityIndicatorTheme")]),e._v(" - The theme for the activity indicator (spinner),\nthis can either be a string, in which each character is a different step, or\nan array of strings.")]),e._v(" "),s("li",[s("strong",[e._v("preSubsection")]),e._v(" - Displayed as a separator between the "),s("code",[e._v("section")]),e._v(" and\n"),s("code",[e._v("subsection")]),e._v(" when the latter is printed.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("strong",[e._v("strings & numbers")]),e._v(" - They'll be included as is")]),e._v(" "),s("li",[s("strong",[e._v("function (values, theme, width)")]),e._v(" - Should return what you want in your output.\n"),s("em",[e._v("values")]),e._v(" is an object with values provided via "),s("code",[e._v("gauge.show")]),e._v(",\n"),s("em",[e._v("theme")]),e._v(" is the theme specific to this item (see below) or this theme object,\nand "),s("em",[e._v("width")]),e._v(" is the number of characters wide your result should be.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("pre")]),this._v(" - Is shown prior to the property, if its displayed.")]),this._v(" "),t("li",[t("strong",[this._v("post")]),this._v(" - Is shown after the property, if its displayed.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("Theme")]),this._v(" - Its value is passed to a function-type item as the theme.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"themes-addtoallthemes-theme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-addtoallthemes-theme","aria-hidden":"true"}},[this._v("#")]),this._v(" themes.addToAllThemes(theme)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This "),t("em",[this._v("mixes-in")]),this._v(" "),t("code",[this._v("theme")]),this._v(" into all themes currently defined. It also adds it\nto the default parent theme for this themeset, so future themes added to\nthis themeset will get the values from "),t("code",[this._v("theme")]),this._v(" by default.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"themes-newthemeset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-newthemeset","aria-hidden":"true"}},[this._v("#")]),this._v(" themes.newThemeset()")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"templates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#templates","aria-hidden":"true"}},[this._v("#")]),this._v(" TEMPLATES")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'progressbar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'activityIndicator'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" kerning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'section'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" kerning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'subsection'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" kerning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The various template elements can either be "),t("strong",[this._v("plain strings")]),this._v(", in which case they will\nbe be included verbatum in the output, or objects with the following properties:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("em",[e._v("type")]),e._v(" can be any of the following plus any keys you pass into "),s("code",[e._v("gauge.show")]),e._v(" plus\nany keys you have on a custom theme.\n"),s("ul",[s("li",[s("code",[e._v("section")]),e._v(" – What big thing you're working on now.")]),e._v(" "),s("li",[s("code",[e._v("subsection")]),e._v(" – What component of that thing is currently working.")]),e._v(" "),s("li",[s("code",[e._v("activityIndicator")]),e._v(" – Shows a spinner using the "),s("code",[e._v("activityIndicatorTheme")]),e._v("\nfrom your active theme.")]),e._v(" "),s("li",[s("code",[e._v("progressbar")]),e._v(" – A progress bar representing your current "),s("code",[e._v("completed")]),e._v("\nusing the "),s("code",[e._v("progressbarTheme")]),e._v(" from your active theme.")])])]),e._v(" "),s("li",[s("em",[e._v("kerning")]),e._v(" – Number of spaces that must be between this item and other\nitems, if this item is displayed at all.")]),e._v(" "),s("li",[s("em",[e._v("maxLength")]),e._v(" – The maximum length for this element. If its value is longer it\nwill be truncated.")]),e._v(" "),s("li",[s("em",[e._v("minLength")]),e._v(" – The minimum length for this element. If its value is shorter it\nwill be padded according to the "),s("em",[e._v("align")]),e._v(" value.")]),e._v(" "),s("li",[s("em",[e._v("align")]),e._v(' – (Default: left) Possible values "left", "right" and "center". Works\nas you\'d expect from word processors.')]),e._v(" "),s("li",[s("em",[e._v("length")]),e._v(" – Provides a single value for both "),s("em",[e._v("minLength")]),e._v(" and "),s("em",[e._v("maxLength")]),e._v(". If both\n"),s("em",[e._v("length")]),e._v(" and *minLength or "),s("em",[e._v("maxLength")]),e._v(" are specifed then the latter take precedence.")]),e._v(" "),s("li",[s("em",[e._v("value")]),e._v(" – A literal value to use for this template item.")]),e._v(" "),s("li",[s("em",[e._v("default")]),e._v(" – A default value to use for this template item if a value\nwasn't otherwise passed in.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"plumbing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plumbing","aria-hidden":"true"}},[this._v("#")]),this._v(" PLUMBING")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("var Plumbing = require('gauge/plumbing')\nvar gauge = new Plumbing(theme, template, width)\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("strong",[e._v("theme")]),e._v(": The theme to use.")]),e._v(" "),s("li",[s("strong",[e._v("template")]),e._v(": The template to use.")]),e._v(" "),s("li",[s("strong",[e._v("width")]),e._v(": How wide your gauge should be")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-settheme-theme-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-settheme-theme-2","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.setTheme(theme)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-settemplate-template-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-settemplate-template-2","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.setTemplate(template)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-setwidth-width"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-setwidth-width","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.setWidth(width)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-hide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-hide","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.hide()")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-hidecursor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-hidecursor","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.hideCursor()")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-showcursor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-showcursor","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.showCursor()")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"gauge-show-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauge-show-status","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("gauge.show(status)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Using "),t("code",[this._v("status")]),this._v(" for values, render the provided template with the theme and return\na string that is suitable for printing to update the gauge.")])}],!1,null,null,null);t.default=n.exports}}]);