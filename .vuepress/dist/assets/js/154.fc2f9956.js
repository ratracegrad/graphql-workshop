(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{321:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Match files using the patterns the shell uses, like stars and stuff.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://travis-ci.org/isaacs/node-glob/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/isaacs/node-glob.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://ci.appveyor.com/project/isaacs/node-glob",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://ci.appveyor.com/api/projects/status/kd7f3yftf7unxlsx?svg=true",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/github/isaacs/node-glob?branch=master",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://coveralls.io/repos/isaacs/node-glob/badge.svg?branch=master&service=github",alt:"Coverage Status"}}),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Install with npm")]),t._v(" "),t._m(4),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("The following characters have special magic meaning when used in a\npath portion:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("If no matching files are found, then an empty array is returned.  This\ndiffers from the shell, where the pattern itself is returned.  For\nexample:")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),a("ul",[t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"}},[t._v("minimatch documentation"),a("OutboundLink")],1)])]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("Perform an asynchronous glob search.")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("Perform a synchronous glob search.")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),a("p",[t._v("It's an EventEmitter, and starts walking the filesystem to find matches\nimmediately.")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),a("p",[t._v("All the options that can be passed to Minimatch can also be passed to\nGlob to change pattern matching behavior.  Also, some have been added,\nor have glob-specific ramifications.")]),t._v(" "),a("p",[t._v("All options are false by default, unless otherwise noted.")]),t._v(" "),a("p",[t._v("All options are added to the Glob object, as well.")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),a("p",[t._v("While strict compliance with the existing standards is a worthwhile\ngoal, some discrepancies exist between node-glob and other\nimplementations, and are intentional.")]),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),a("p",[t._v("These options were deprecated in version 5, and removed in version 6.")]),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),t._m(58),t._v(" "),a("p",[t._v("Glob searching, by its very nature, is susceptible to race conditions,\nsince it relies on directory walking and such.")]),t._v(" "),a("p",[t._v("As a result, it is possible that a file that exists when glob looks for\nit may have been deleted or modified by the time it returns the result.")]),t._v(" "),a("p",[t._v("As part of its internal implementation, this program caches all stat\nand readdir calls that it makes, in order to cut down on system\noverhead.  However, this also makes it even more susceptible to races,\nespecially if the cache or statCache objects are reused between glob\ncalls.")]),t._v(" "),a("p",[t._v("Users are thus advised not to use a glob result as a guarantee of\nfilesystem state in the face of rapid changes.  For the vast majority\nof operations, this is never a problem.")]),t._v(" "),t._m(59),t._v(" "),a("p",[t._v("Any change to behavior (including bugfixes) must come with a test.")]),t._v(" "),a("p",[t._v("Patches that fail tests or reduce performance will be rejected.")]),t._v(" "),t._m(60)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"glob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#glob","aria-hidden":"true"}},[this._v("#")]),this._v(" Glob")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This is a glob implementation in JavaScript.  It uses the "),e("code",[this._v("minimatch")]),this._v("\nlibrary to do its matching.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"oh-my-glob.gif",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm i glob\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" glob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"glob"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options is optional")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("glob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("er"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// files is an array of filenames.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" If the "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`nonull`")])]),t._v(" option is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and nothing\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" was found"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" then files is "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// er is an error object or null.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"glob-primer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#glob-primer","aria-hidden":"true"}},[this._v("#")]),this._v(" Glob Primer")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('"Globs" are the patterns you type when you do stuff like '),e("code",[this._v("ls *.js")]),this._v(" on\nthe command line, or put "),e("code",[this._v("build/*")]),this._v(" in a "),e("code",[this._v(".gitignore")]),this._v(" file.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Before parsing the path part patterns, braced sections are expanded\ninto a set.  Braced sections start with "),a("code",[t._v("{")]),t._v(" and end with "),a("code",[t._v("}")]),t._v(", with any\nnumber of comma-delimited sections within.  Braced sections may contain\nslash characters, so "),a("code",[t._v("a{/b/c,bcd}")]),t._v(" would expand into "),a("code",[t._v("a/b/c")]),t._v(" and "),a("code",[t._v("abcd")]),t._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("*")]),t._v(" Matches 0 or more characters in a single path portion")]),t._v(" "),a("li",[a("code",[t._v("?")]),t._v(" Matches 1 character")]),t._v(" "),a("li",[a("code",[t._v("[...]")]),t._v(" Matches a range of characters, similar to a RegExp range.\nIf the first character of the range is "),a("code",[t._v("!")]),t._v(" or "),a("code",[t._v("^")]),t._v(" then it matches\nany character not in the range.")]),t._v(" "),a("li",[a("code",[t._v("!(pattern|pattern|pattern)")]),t._v(" Matches anything that does not match\nany of the patterns provided.")]),t._v(" "),a("li",[a("code",[t._v("?(pattern|pattern|pattern)")]),t._v(" Matches zero or one occurrence of the\npatterns provided.")]),t._v(" "),a("li",[a("code",[t._v("+(pattern|pattern|pattern)")]),t._v(" Matches one or more occurrences of the\npatterns provided.")]),t._v(" "),a("li",[a("code",[t._v("*(a|b|c)")]),t._v(" Matches zero or more occurrences of the patterns provided")]),t._v(" "),a("li",[a("code",[t._v("@(pattern|pat*|pat?erN)")]),t._v(" Matches exactly one of the patterns\nprovided")]),t._v(" "),a("li",[a("code",[t._v("**")]),t._v(' If a "globstar" is alone in a path portion, then it matches\nzero or more directories and subdirectories searching for matches.\nIt does not crawl symlinked directories.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"dots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dots","aria-hidden":"true"}},[this._v("#")]),this._v(" Dots")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If a file or directory path portion has a "),e("code",[this._v(".")]),this._v(" as the first character,\nthen it will not match any glob pattern unless that pattern's\ncorresponding path part also has a "),e("code",[this._v(".")]),this._v(" as its first character.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For example, the pattern "),a("code",[t._v("a/.*/c")]),t._v(" would match the file at "),a("code",[t._v("a/.b/c")]),t._v(".\nHowever the pattern "),a("code",[t._v("a/*/c")]),t._v(" would not, because "),a("code",[t._v("*")]),t._v(" does not start with\na dot character.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can make glob treat dots as normal characters by setting\n"),e("code",[this._v("dot:true")]),this._v(" in the options.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"basename-matching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basename-matching","aria-hidden":"true"}},[this._v("#")]),this._v(" Basename Matching")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you set "),e("code",[this._v("matchBase:true")]),this._v(" in the options, and the pattern has no\nslashes in it, then it will seek for any file anywhere in the tree\nwith a matching basename.  For example, "),e("code",[this._v("*.js")]),this._v(" would match\n"),e("code",[this._v("test/simple/basic.js")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"empty-sets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#empty-sets","aria-hidden":"true"}},[this._v("#")]),this._v(" Empty Sets")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$ echo a*s*d*f\na*s*d*f\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To get the bash-style behavior, set the "),e("code",[this._v("nonull:true")]),this._v(" in the options.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"see-also"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#see-also","aria-hidden":"true"}},[this._v("#")]),this._v(" See Also:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("man sh")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("man bash")]),this._v(' (Search for "Pattern Matching")')])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("man 3 fnmatch")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("man 5 gitignore")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"glob-hasmagic-pattern-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#glob-hasmagic-pattern-options","aria-hidden":"true"}},[this._v("#")]),this._v(" glob.hasMagic(pattern, [options])")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Returns "),e("code",[this._v("true")]),this._v(" if there are any special characters in the pattern, and\n"),e("code",[this._v("false")]),this._v(" otherwise.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Note that the options affect the results.  If "),a("code",[t._v("noext:true")]),t._v(" is set in\nthe options object, then "),a("code",[t._v("+(a|b)")]),t._v(" will not be considered a magic\npattern.  If the pattern has a brace expansion, like "),a("code",[t._v("a/{b/c,x/y}")]),t._v("\nthen that is considered magical, unless "),a("code",[t._v("nobrace:true")]),t._v(" is set in the\noptions.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"glob-pattern-options-cb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#glob-pattern-options-cb","aria-hidden":"true"}},[this._v("#")]),this._v(" glob(pattern, [options], cb)")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("pattern")]),t._v(" "),a("code",[t._v("{String}")]),t._v(" Pattern to be matched")]),t._v(" "),a("li",[a("code",[t._v("options")]),t._v(" "),a("code",[t._v("{Object}")])]),t._v(" "),a("li",[a("code",[t._v("cb")]),t._v(" "),a("code",[t._v("{Function}")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("err")]),t._v(" "),a("code",[t._v("{Error | null}")])]),t._v(" "),a("li",[a("code",[t._v("matches")]),t._v(" "),a("code",[t._v("{Array<String>}")]),t._v(" filenames found matching the pattern")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"glob-sync-pattern-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#glob-sync-pattern-options","aria-hidden":"true"}},[this._v("#")]),this._v(" glob.sync(pattern, [options])")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("pattern")]),t._v(" "),a("code",[t._v("{String}")]),t._v(" Pattern to be matched")]),t._v(" "),a("li",[a("code",[t._v("options")]),t._v(" "),a("code",[t._v("{Object}")])]),t._v(" "),a("li",[t._v("return: "),a("code",[t._v("{Array<String>}")]),t._v(" filenames found matching the pattern")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"class-glob-glob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-glob-glob","aria-hidden":"true"}},[this._v("#")]),this._v(" Class: glob.Glob")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create a Glob object by instantiating the "),e("code",[this._v("glob.Glob")]),this._v(" class.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Glob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"glob"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Glob\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Glob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"new-glob-glob-pattern-options-cb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#new-glob-glob-pattern-options-cb","aria-hidden":"true"}},[this._v("#")]),this._v(" new glob.Glob(pattern, [options], [cb])")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("pattern")]),t._v(" "),a("code",[t._v("{String}")]),t._v(" pattern to search for")]),t._v(" "),a("li",[a("code",[t._v("options")]),t._v(" "),a("code",[t._v("{Object}")])]),t._v(" "),a("li",[a("code",[t._v("cb")]),t._v(" "),a("code",[t._v("{Function}")]),t._v(" Called when an error occurs, or matches are found\n"),a("ul",[a("li",[a("code",[t._v("err")]),t._v(" "),a("code",[t._v("{Error | null}")])]),t._v(" "),a("li",[a("code",[t._v("matches")]),t._v(" "),a("code",[t._v("{Array<String>}")]),t._v(" filenames found matching the pattern")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note that if the "),e("code",[this._v("sync")]),this._v(" flag is set in the options, then matches will\nbe immediately available on the "),e("code",[this._v("g.found")]),this._v(" member.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("minimatch")]),t._v(" The minimatch object that the glob uses.")]),t._v(" "),a("li",[a("code",[t._v("options")]),t._v(" The options object passed in.")]),t._v(" "),a("li",[a("code",[t._v("aborted")]),t._v(" Boolean which is set to true when calling "),a("code",[t._v("abort()")]),t._v(".  There\nis no way at this time to continue a glob search after aborting, but\nyou can re-use the statCache to avoid having to duplicate syscalls.")]),t._v(" "),a("li",[a("code",[t._v("cache")]),t._v(" Convenience object.  Each field has the following possible\nvalues:\n"),a("ul",[a("li",[a("code",[t._v("false")]),t._v(" - Path does not exist")]),t._v(" "),a("li",[a("code",[t._v("true")]),t._v(" - Path exists")]),t._v(" "),a("li",[a("code",[t._v("'FILE'")]),t._v(" - Path exists, and is not a directory")]),t._v(" "),a("li",[a("code",[t._v("'DIR'")]),t._v(" - Path exists, and is a directory")]),t._v(" "),a("li",[a("code",[t._v("[file, entries, ...]")]),t._v(" - Path exists, is a directory, and the\narray value is the results of "),a("code",[t._v("fs.readdir")])])])]),t._v(" "),a("li",[a("code",[t._v("statCache")]),t._v(" Cache of "),a("code",[t._v("fs.stat")]),t._v(" results, to prevent statting the same\npath multiple times.")]),t._v(" "),a("li",[a("code",[t._v("symlinks")]),t._v(" A record of which paths are symbolic links, which is\nrelevant in resolving "),a("code",[t._v("**")]),t._v(" patterns.")]),t._v(" "),a("li",[a("code",[t._v("realpathCache")]),t._v(" An optional object which is passed to "),a("code",[t._v("fs.realpath")]),t._v("\nto minimize unnecessary syscalls.  It is stored on the instantiated\nGlob object, and may be re-used.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("end")]),t._v(" When the matching is finished, this is emitted with all the\nmatches found.  If the "),a("code",[t._v("nonull")]),t._v(" option is set, and no match was found,\nthen the "),a("code",[t._v("matches")]),t._v(" list contains the original pattern.  The matches\nare sorted, unless the "),a("code",[t._v("nosort")]),t._v(" flag is set.")]),t._v(" "),a("li",[a("code",[t._v("match")]),t._v(" Every time a match is found, this is emitted with the specific\nthing that matched. It is not deduplicated or resolved to a realpath.")]),t._v(" "),a("li",[a("code",[t._v("error")]),t._v(" Emitted when an unexpected error is encountered, or whenever\nany fs error occurs if "),a("code",[t._v("options.strict")]),t._v(" is set.")]),t._v(" "),a("li",[a("code",[t._v("abort")]),t._v(" When "),a("code",[t._v("abort()")]),t._v(" is called, this event is raised.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("pause")]),t._v(" Temporarily stop the search")]),t._v(" "),a("li",[a("code",[t._v("resume")]),t._v(" Resume the search")]),t._v(" "),a("li",[a("code",[t._v("abort")]),t._v(" Stop the search forever")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("If you are running many "),a("code",[t._v("glob")]),t._v(" operations, you can pass a Glob object\nas the "),a("code",[t._v("options")]),t._v(" argument to a subsequent operation to shortcut some\n"),a("code",[t._v("stat")]),t._v(" and "),a("code",[t._v("readdir")]),t._v(" calls.  At the very least, you may pass in shared\n"),a("code",[t._v("symlinks")]),t._v(", "),a("code",[t._v("statCache")]),t._v(", "),a("code",[t._v("realpathCache")]),t._v(", and "),a("code",[t._v("cache")]),t._v(" options, so that\nparallel glob operations will be sped up by sharing information about\nthe filesystem.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("cwd")]),t._v(" The current working directory in which to search.  Defaults\nto "),a("code",[t._v("process.cwd()")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("root")]),t._v(" The place where patterns starting with "),a("code",[t._v("/")]),t._v(" will be mounted\nonto.  Defaults to "),a("code",[t._v('path.resolve(options.cwd, "/")')]),t._v(" ("),a("code",[t._v("/")]),t._v(" on Unix\nsystems, and "),a("code",[t._v("C:\\")]),t._v(" or some such on Windows.)")]),t._v(" "),a("li",[a("code",[t._v("dot")]),t._v(" Include "),a("code",[t._v(".dot")]),t._v(" files in normal matches and "),a("code",[t._v("globstar")]),t._v(" matches.\nNote that an explicit dot in a portion of the pattern will always\nmatch dot files.")]),t._v(" "),a("li",[a("code",[t._v("nomount")]),t._v(' By default, a pattern starting with a forward-slash will be\n"mounted" onto the root setting, so that a valid filesystem path is\nreturned.  Set this flag to disable that behavior.')]),t._v(" "),a("li",[a("code",[t._v("mark")]),t._v(" Add a "),a("code",[t._v("/")]),t._v(" character to directory matches.  Note that this\nrequires additional stat calls.")]),t._v(" "),a("li",[a("code",[t._v("nosort")]),t._v(" Don't sort the results.")]),t._v(" "),a("li",[a("code",[t._v("stat")]),t._v(" Set to true to stat "),a("em",[t._v("all")]),t._v(" results.  This reduces performance\nsomewhat, and is completely unnecessary, unless "),a("code",[t._v("readdir")]),t._v(" is presumed\nto be an untrustworthy indicator of file existence.")]),t._v(" "),a("li",[a("code",[t._v("silent")]),t._v(" When an unusual error is encountered when attempting to\nread a directory, a warning will be printed to stderr.  Set the\n"),a("code",[t._v("silent")]),t._v(" option to true to suppress these warnings.")]),t._v(" "),a("li",[a("code",[t._v("strict")]),t._v(" When an unusual error is encountered when attempting to\nread a directory, the process will just continue on in search of\nother matches.  Set the "),a("code",[t._v("strict")]),t._v(" option to raise an error in these\ncases.")]),t._v(" "),a("li",[a("code",[t._v("cache")]),t._v(" See "),a("code",[t._v("cache")]),t._v(" property above.  Pass in a previously generated\ncache object to save some fs calls.")]),t._v(" "),a("li",[a("code",[t._v("statCache")]),t._v(' A cache of results of filesystem information, to prevent\nunnecessary stat calls.  While it should not normally be necessary\nto set this, you may pass the statCache from one glob() call to the\noptions object of another, if you know that the filesystem will not\nchange between calls.  (See "Race Conditions" below.)')]),t._v(" "),a("li",[a("code",[t._v("symlinks")]),t._v(" A cache of known symbolic links.  You may pass in a\npreviously generated "),a("code",[t._v("symlinks")]),t._v(" object to save "),a("code",[t._v("lstat")]),t._v(" calls when\nresolving "),a("code",[t._v("**")]),t._v(" matches.")]),t._v(" "),a("li",[a("code",[t._v("sync")]),t._v(" DEPRECATED: use "),a("code",[t._v("glob.sync(pattern, opts)")]),t._v(" instead.")]),t._v(" "),a("li",[a("code",[t._v("nounique")]),t._v(" In some cases, brace-expanded patterns can result in the\nsame file showing up multiple times in the result set.  By default,\nthis implementation prevents duplicates in the result set.  Set this\nflag to disable that behavior.")]),t._v(" "),a("li",[a("code",[t._v("nonull")]),t._v(" Set to never return an empty set, instead returning a set\ncontaining the pattern itself.  This is the default in glob(3).")]),t._v(" "),a("li",[a("code",[t._v("debug")]),t._v(" Set to enable debug logging in minimatch and glob.")]),t._v(" "),a("li",[a("code",[t._v("nobrace")]),t._v(" Do not expand "),a("code",[t._v("{a,b}")]),t._v(" and "),a("code",[t._v("{1..3}")]),t._v(" brace sets.")]),t._v(" "),a("li",[a("code",[t._v("noglobstar")]),t._v(" Do not match "),a("code",[t._v("**")]),t._v(" against multiple filenames.  (Ie,\ntreat it as a normal "),a("code",[t._v("*")]),t._v(" instead.)")]),t._v(" "),a("li",[a("code",[t._v("noext")]),t._v(" Do not match "),a("code",[t._v("+(a|b)")]),t._v(' "extglob" patterns.')]),t._v(" "),a("li",[a("code",[t._v("nocase")]),t._v(" Perform a case-insensitive match.  Note: on\ncase-insensitive filesystems, non-magic patterns will match by\ndefault, since "),a("code",[t._v("stat")]),t._v(" and "),a("code",[t._v("readdir")]),t._v(" will not raise errors.")]),t._v(" "),a("li",[a("code",[t._v("matchBase")]),t._v(" Perform a basename-only match if the pattern does not\ncontain any slash characters.  That is, "),a("code",[t._v("*.js")]),t._v(" would be treated as\nequivalent to "),a("code",[t._v("**/*.js")]),t._v(", matching all js files in all directories.")]),t._v(" "),a("li",[a("code",[t._v("nodir")]),t._v(" Do not match directories, only files.  (Note: to match\n"),a("em",[t._v("only")]),t._v(" directories, simply put a "),a("code",[t._v("/")]),t._v(" at the end of the pattern.)")]),t._v(" "),a("li",[a("code",[t._v("ignore")]),t._v(" Add a pattern or an array of glob patterns to exclude matches.\nNote: "),a("code",[t._v("ignore")]),t._v(" patterns are "),a("em",[t._v("always")]),t._v(" in "),a("code",[t._v("dot:true")]),t._v(" mode, regardless\nof any other settings.")]),t._v(" "),a("li",[a("code",[t._v("follow")]),t._v(" Follow symlinked directories when expanding "),a("code",[t._v("**")]),t._v(" patterns.\nNote that this can result in a lot of duplicate references in the\npresence of cyclic links.")]),t._v(" "),a("li",[a("code",[t._v("realpath")]),t._v(" Set to true to call "),a("code",[t._v("fs.realpath")]),t._v(" on all of the results.\nIn the case of a symlink that cannot be resolved, the full absolute\npath to the matched entry is returned (though it will usually be a\nbroken symlink)")]),t._v(" "),a("li",[a("code",[t._v("absolute")]),t._v(" Set to true to always receive absolute paths for matched\nfiles.  Unlike "),a("code",[t._v("realpath")]),t._v(", this also affects the values returned in\nthe "),a("code",[t._v("match")]),t._v(" event.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"comparisons-to-other-fnmatch-glob-implementations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comparisons-to-other-fnmatch-glob-implementations","aria-hidden":"true"}},[this._v("#")]),this._v(" Comparisons to other fnmatch/glob implementations")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The double-star character "),a("code",[t._v("**")]),t._v(" is supported by default, unless the\n"),a("code",[t._v("noglobstar")]),t._v(" flag is set.  This is supported in the manner of bsdglob\nand bash 4.3, where "),a("code",[t._v("**")]),t._v(" only has special significance if it is the only\nthing in a path part.  That is, "),a("code",[t._v("a/**/b")]),t._v(" will match "),a("code",[t._v("a/x/y/b")]),t._v(", but\n"),a("code",[t._v("a/**b")]),t._v(" will not.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note that symlinked directories are not crawled as part of a "),e("code",[this._v("**")]),this._v(",\nthough their contents may match against subsequent portions of the\npattern.  This prevents infinite loops and duplicates and the like.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("If an escaped pattern has no matches, and the "),a("code",[t._v("nonull")]),t._v(" flag is set,\nthen glob returns the pattern as-provided, rather than\ninterpreting the character escapes.  For example,\n"),a("code",[t._v('glob.match([], "\\\\*a\\\\?")')]),t._v(" will return "),a("code",[t._v('"\\\\*a\\\\?"')]),t._v(" rather than\n"),a("code",[t._v('"*a?"')]),t._v(".  This is akin to setting the "),a("code",[t._v("nullglob")]),t._v(" option in bash, except\nthat it does not resolve escaped pattern characters.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("If brace expansion is not disabled, then it is performed before any\nother interpretation of the glob pattern.  Thus, a pattern like\n"),a("code",[t._v("+(a|{b),c)}")]),t._v(", which would not be valid in bash or zsh, is expanded\n"),a("strong",[t._v("first")]),t._v(" into the set of "),a("code",[t._v("+(a|b)")]),t._v(" and "),a("code",[t._v("+(a|c)")]),t._v(", and those patterns are\nchecked for validity.  Since those two are valid, matching proceeds.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"comments-and-negation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comments-and-negation","aria-hidden":"true"}},[this._v("#")]),this._v(" Comments and Negation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('Previously, this module let you mark a pattern as a "comment" if it\nstarted with a '),e("code",[this._v("#")]),this._v(' character, or a "negated" pattern if it started\nwith a '),e("code",[this._v("!")]),this._v(" character.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To specify things that should not match, use the "),e("code",[this._v("ignore")]),this._v(" option.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Please only use forward-slashes in glob expressions.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Though windows uses either "),a("code",[t._v("/")]),t._v(" or "),a("code",[t._v("\\")]),t._v(" as its path separator, only "),a("code",[t._v("/")]),t._v("\ncharacters are used by this glob implementation.  You must use\nforward-slashes "),a("strong",[t._v("only")]),t._v(" in glob expressions.  Back-slashes will always\nbe interpreted as escape characters, not path separators.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Results from absolute patterns such as "),a("code",[t._v("/foo/*")]),t._v(" are mounted onto the\nroot setting using "),a("code",[t._v("path.join")]),t._v(".  On windows, this will by default result\nin "),a("code",[t._v("/foo/*")]),t._v(" matching "),a("code",[t._v("C:\\foo\\bar.txt")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"race-conditions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#race-conditions","aria-hidden":"true"}},[this._v("#")]),this._v(" Race Conditions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"contributing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributing","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# to run tests\nnpm test\n\n# to re-generate test fixtures\nnpm run test-regen\n\n# to benchmark against bash/zsh\nnpm run bench\n\n# to profile javascript\nnpm run prof\n")])])])}],!1,null,null,null);e.default=n.exports}}]);