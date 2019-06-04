(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{344:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[n("a",{attrs:{href:"https://travis-ci.com/npm/npm-packlist",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://travis-ci.com/npm/npm-packlist.svg?token=hHeDp9pQmz9kvsgRNVHy&branch=master",alt:"Build Status"}}),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("Get a list of the files to add from a folder into an npm package")]),t._v(" "),n("p",[t._v("These can be handed to "),n("a",{attrs:{href:"http://npm.im/tar",target:"_blank",rel:"noopener noreferrer"}},[t._v("tar"),n("OutboundLink")],1),t._v(" like so to make an npm\npackage tarball:")]),t._v(" "),t._m(1),n("p",[t._v("This uses the following rules:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("Same API as "),n("a",{attrs:{href:"http://npm.im/ignore-walk",target:"_blank",rel:"noopener noreferrer"}},[t._v("ignore-walk"),n("OutboundLink")],1),t._v(", just hard-coded\nfile list and rule sets.")]),t._v(" "),t._m(4)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"npm-packlist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-packlist","aria-hidden":"true"}},[this._v("#")]),this._v(" npm-packlist")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" packlist "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npm-packlist'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" packageDir "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/to/package'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" packageTarball "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/to/package.tgz'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("packlist")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" packageDir "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("files")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" tar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    prefix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cwd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" packageDir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" packageTarball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    gzip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" files"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tarball has been created, continue with your day")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[n("p",[t._v("If a "),n("code",[t._v("package.json")]),t._v(" file is found, and it has a "),n("code",[t._v("files")]),t._v(" list,\nthen ignore everything that isn't in "),n("code",[t._v("files")]),t._v(".  Always include the\nreadme, license, notice, changes, changelog, and history files, if\nthey exist, and the package.json file itself.")])]),t._v(" "),n("li",[n("p",[t._v("If there's no "),n("code",[t._v("package.json")]),t._v(" file (or it has no "),n("code",[t._v("files")]),t._v(" list), and\nthere is a "),n("code",[t._v(".npmignore")]),t._v(" file, then ignore all the files in the\n"),n("code",[t._v(".npmignore")]),t._v(" file.")])]),t._v(" "),n("li",[n("p",[t._v("If there's no "),n("code",[t._v("package.json")]),t._v(" with a "),n("code",[t._v("files")]),t._v(" list, and there's no\n"),n("code",[t._v(".npmignore")]),t._v(" file, but there is a "),n("code",[t._v(".gitignore")]),t._v(" file, then ignore\nall the files in the "),n("code",[t._v(".gitignore")]),t._v(" file.")])]),t._v(" "),n("li",[n("p",[t._v("Everything in the root "),n("code",[t._v("node_modules")]),t._v(" is ignored, unless it's a\nbundled dependency.  If it IS a bundled dependency, and it's a\nsymbolic link, then the target of the link is included, not the\nsymlink itself.")])]),t._v(" "),n("li",[n("p",[t._v("Unless they're explicitly included (by being in a "),n("code",[t._v("files")]),t._v(" list, or\na "),n("code",[t._v("!negated")]),t._v(" rule in a relevant "),n("code",[t._v(".npmignore")]),t._v(" or "),n("code",[t._v(".gitignore")]),t._v("),\nalways ignore certain common cruft files:")]),t._v(" "),n("ol",[n("li",[t._v(".npmignore and .gitignore files (their effect is in the package\nalready, there's no need to include them in the package)")]),t._v(" "),n("li",[t._v("editor junk like "),n("code",[t._v(".*.swp")]),t._v(", "),n("code",[t._v("._*")]),t._v(" and "),n("code",[t._v(".*.orig")]),t._v(" files")]),t._v(" "),n("li",[n("code",[t._v(".npmrc")]),t._v(" files (these may contain private configs)")]),t._v(" "),n("li",[t._v("The "),n("code",[t._v("node_modules/.bin")]),t._v(" folder")]),t._v(" "),n("li",[t._v("Waf and gyp cruft like "),n("code",[t._v("/build/config.gypi")]),t._v(" and "),n("code",[t._v(".lock-wscript")])]),t._v(" "),n("li",[t._v("Darwin's "),n("code",[t._v(".DS_Store")]),t._v(" files because wtf are those even")]),t._v(" "),n("li",[n("code",[t._v("npm-debug.log")]),t._v(" files at the root of a project")])]),t._v(" "),n("p",[t._v("You can explicitly re-include any of these with a "),n("code",[t._v("files")]),t._v(" list in\n"),n("code",[t._v("package.json")]),t._v(" or a negated ignore file rule.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("The "),n("code",[t._v("Walker")]),t._v(" and "),n("code",[t._v("WalkerSync")]),t._v(" classes take a "),n("code",[t._v("bundled")]),t._v(" argument, which\nis a list of package names to include from node_modules.  When calling\nthe top-level "),n("code",[t._v("packlist()")]),t._v(" and "),n("code",[t._v("packlist.sync()")]),t._v(" functions, this\nmodule calls into "),n("code",[t._v("npm-bundled")]),t._v(" directly.")])}],!1,null,null,null);e.default=s.exports}}]);