(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{301:function(e,t,r){"use strict";r.r(t);var i=r(0),a=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("p",[e._v("Hi, figured we could actually use a changelog now:")]),e._v(" "),e._m(0),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/iarna/are-we-there-yet/pull/92",target:"_blank",rel:"noopener noreferrer"}},[e._v("#92"),r("OutboundLink")],1),e._v(" Fix bug where\n"),r("code",[e._v("finish")]),e._v(" would throw errors when including "),r("code",[e._v("TrackerStream")]),e._v(" objects in\n"),r("code",[e._v("TrackerGroup")]),e._v(" collections.  (@brianloveswords)")])]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-1-5-2018-05-24"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-2018-05-24","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.1.5 2018-05-24")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-1-4-2017-04-21"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-2017-04-21","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.1.4 2017-04-21")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Fix typo in package.json")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-1-3-2017-04-21"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-2017-04-21","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.1.3 2017-04-21")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Improve documentation and limit files included in the distribution.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-1-2-2016-03-15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-2016-03-15","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.1.2 2016-03-15")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Add tracker group cycle detection and tests for it")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-1-1-2016-01-29"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-2016-01-29","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.1.1 2016-01-29")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Fix a typo in stream completion tracker")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-1-0-2016-01-29"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-0-2016-01-29","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.1.0 2016-01-29")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Rewrote completion percent computation to be low impact– no more walking a\ntree of completion groups every time we need this info.  Previously, with\nmedium sized tree of completion groups, even a relatively modest number of\ncalls to the top level "),r("code",[e._v("completed()")]),e._v(" method would result in absurd numbers\nof calls overall as it walked down the tree. We now, instead, keep track as\nwe bubble up changes, so the computation is limited to when data changes and\nto the depth of that one branch, instead of "),r("em",[e._v("every")]),e._v(" node. (Plus, we were already\nincurring "),r("em",[e._v("this")]),e._v(" cost, since we already bubbled out changes.)")]),e._v(" "),r("li",[e._v("Moved different tracker types out to their own files.")]),e._v(" "),r("li",[e._v("Made tests test for TOO MANY events too.")]),e._v(" "),r("li",[e._v("Standarized the source code formatting")])])}],!1,null,null,null);t.default=a.exports}}]);