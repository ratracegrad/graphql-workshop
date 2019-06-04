(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{506:function(a,t,e){"use strict";e.r(t);var n=e(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("p",[a._v("If you want to write an option parser, and have it be good, there are\ntwo ways to do it.  The Right Way, and the Wrong Way.")]),a._v(" "),e("p",[a._v("The Wrong Way is to sit down and write an option parser.  We've all done\nthat.")]),a._v(" "),e("p",[a._v("The Right Way is to write some complex configurable program with so many\noptions that you go half-insane just trying to manage them all, and put\nit off with duct-tape solutions until you see exactly to the core of the\nproblem, and finally snap and write an awesome option parser.")]),a._v(" "),e("p",[a._v("If you want to write an option parser, don't write an option parser.\nWrite a package manager, or a source control system, or a service\nrestarter, or an operating system.  You probably won't end up with a\ngood one of those, but if you don't give up, and you are relentless and\ndiligent enough in your procrastination, you may just end up with a very\nnice option parser.")]),a._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[a._v("#")]),a._v(" USAGE")]),a._v(" "),e("pre",[e("code",[a._v('// my-program.js\nvar nopt = require("nopt")\n  , Stream = require("stream").Stream\n  , path = require("path")\n  , knownOpts = { "foo" : [String, null]\n                , "bar" : [Stream, Number]\n                , "baz" : path\n                , "bloo" : [ "big", "medium", "small" ]\n                , "flag" : Boolean\n                , "pick" : Boolean\n                , "many" : [String, Array]\n                }\n  , shortHands = { "foofoo" : ["--foo", "Mr. Foo"]\n                 , "b7" : ["--bar", "7"]\n                 , "m" : ["--bloo", "medium"]\n                 , "p" : ["--pick"]\n                 , "f" : ["--flag"]\n                 }\n             // everything is optional.\n             // knownOpts and shorthands default to {}\n             // arg list defaults to process.argv\n             // slice defaults to 2\n  , parsed = nopt(knownOpts, shortHands, process.argv, 2)\nconsole.log(parsed)\n')])]),a._v(" "),e("p",[a._v("This would give you support for any of the following:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ node my-program.js --foo "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"blerp"')]),a._v(" --no-flag\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"blerp"')]),a._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"flag"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n$ node my-program.js ---bar 7 --foo "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Mr. Hand"')]),a._v(" --flag\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" bar: 7, foo: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Mr. Hand"')]),a._v(", flag: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n$ node my-program.js --foo "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"blerp"')]),a._v(" -f -----p\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" foo: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"blerp"')]),a._v(", flag: true, pick: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n$ node my-program.js -fp --foofoo\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" foo: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Mr. Foo"')]),a._v(", flag: true, pick: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n$ node my-program.js --foofoo -- -fp  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- stops the flag parsing.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" foo: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Mr. Foo"')]),a._v(", argv: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" remain: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-fp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n$ node my-program.js --blatzk 1000 -fp "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# unknown opts are ok.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" blatzk: 1000, flag: true, pick: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n$ node my-program.js --blatzk "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" -fp "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# but they need a value")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" blatzk: true, flag: true, pick: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n$ node my-program.js --no-blatzk -fp "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# unless they start with "no-"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" blatzk: false, flag: true, pick: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n$ node my-program.js --baz b/a/z "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# known paths are resolved.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" baz: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Users/isaacs/b/a/z"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# if Array is one of the types, then it can take many")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# values, and will always be an array.  The other types provided")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# specify what types are allowed in the list.")]),a._v("\n\n$ node my-program.js --many 1 --many null --many foo\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" many: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1"')]),a._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"null"')]),a._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n$ node my-program.js --many foo\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" many: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Read the tests at the bottom of "),e("code",[a._v("lib/nopt.js")]),a._v(" for more examples of\nwhat this puppy can do.")]),a._v(" "),e("h2",{attrs:{id:"types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#types","aria-hidden":"true"}},[a._v("#")]),a._v(" Types")]),a._v(" "),e("p",[a._v("The following types are supported, and defined on "),e("code",[a._v("nopt.typeDefs")])]),a._v(" "),e("ul",[e("li",[a._v("String: A normal string.  No parsing is done.")]),a._v(" "),e("li",[a._v("path: A file system path.  Gets resolved against cwd if not absolute.")]),a._v(" "),e("li",[a._v("url: A url.  If it doesn't parse, it isn't accepted.")]),a._v(" "),e("li",[a._v("Number: Must be numeric.")]),a._v(" "),e("li",[a._v("Date: Must parse as a date. If it does, and "),e("code",[a._v("Date")]),a._v(" is one of the options,\nthen it will return a Date object, not a string.")]),a._v(" "),e("li",[a._v("Boolean: Must be either "),e("code",[a._v("true")]),a._v(" or "),e("code",[a._v("false")]),a._v(".  If an option is a boolean,\nthen it does not need a value, and its presence will imply "),e("code",[a._v("true")]),a._v(" as\nthe value.  To negate boolean flags, do "),e("code",[a._v("--no-whatever")]),a._v(" or "),e("code",[a._v("--whatever false")])]),a._v(" "),e("li",[a._v("NaN: Means that the option is strictly not allowed.  Any value will\nfail.")]),a._v(" "),e("li",[a._v('Stream: An object matching the "Stream" class in node.  Valuable\nfor use when validating programmatically.  (npm uses this to let you\nsupply any WriteStream on the '),e("code",[a._v("outfd")]),a._v(" and "),e("code",[a._v("logfd")]),a._v(" config options.)")]),a._v(" "),e("li",[a._v("Array: If "),e("code",[a._v("Array")]),a._v(" is specified as one of the types, then the value\nwill be parsed as a list of options.  This means that multiple values\ncan be specified, and that the value will always be an array.")])]),a._v(" "),e("p",[a._v("If a type is an array of values not on this list, then those are\nconsidered valid values.  For instance, in the example above, the\n"),e("code",[a._v("--bloo")]),a._v(" option can only be one of "),e("code",[a._v('"big"')]),a._v(", "),e("code",[a._v('"medium"')]),a._v(", or "),e("code",[a._v('"small"')]),a._v(",\nand any other value will be rejected.")]),a._v(" "),e("p",[a._v("When parsing unknown fields, "),e("code",[a._v('"true"')]),a._v(", "),e("code",[a._v('"false"')]),a._v(", and "),e("code",[a._v('"null"')]),a._v(" will be\ninterpreted as their JavaScript equivalents, and numeric values will be\ninterpreted as a number.")]),a._v(" "),e("p",[a._v("You can also mix types and values, or multiple types, in a list.  For\ninstance "),e("code",[a._v("{ blah: [Number, null] }")]),a._v(" would allow a value to be set to\neither a Number or null.")]),a._v(" "),e("p",[a._v("To define a new type, add it to "),e("code",[a._v("nopt.typeDefs")]),a._v(".  Each item in that\nhash is an object with a "),e("code",[a._v("type")]),a._v(" member and a "),e("code",[a._v("validate")]),a._v(" method.  The\n"),e("code",[a._v("type")]),a._v(" member is an object that matches what goes in the type list.  The\n"),e("code",[a._v("validate")]),a._v(" method is a function that gets called with "),e("code",[a._v("validate(data, key, val)")]),a._v(".  Validate methods should assign "),e("code",[a._v("data[key]")]),a._v(" to the valid\nvalue of "),e("code",[a._v("val")]),a._v(" if it can be handled properly, or return boolean\n"),e("code",[a._v("false")]),a._v(" if it cannot.")]),a._v(" "),e("p",[a._v("You can also call "),e("code",[a._v("nopt.clean(data, types, typeDefs)")]),a._v(" to clean up a\nconfig object and remove its invalid properties.")]),a._v(" "),e("h2",{attrs:{id:"error-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-handling","aria-hidden":"true"}},[a._v("#")]),a._v(" Error Handling")]),a._v(" "),e("p",[a._v("By default, nopt outputs a warning to standard error when invalid\noptions are found.  You can change this behavior by assigning a method\nto "),e("code",[a._v("nopt.invalidHandler")]),a._v(".  This method will be called with\nthe offending "),e("code",[a._v("nopt.invalidHandler(key, val, types)")]),a._v(".")]),a._v(" "),e("p",[a._v("If no "),e("code",[a._v("nopt.invalidHandler")]),a._v(" is assigned, then it will console.error\nits whining.  If it is assigned to boolean "),e("code",[a._v("false")]),a._v(" then the warning is\nsuppressed.")]),a._v(" "),e("h2",{attrs:{id:"abbreviations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abbreviations","aria-hidden":"true"}},[a._v("#")]),a._v(" Abbreviations")]),a._v(" "),e("p",[a._v("Yes, they are supported.  If you define options like this:")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foolhardyelephants"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Boolean\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pileofmonkeys"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Boolean "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Then this will work:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("node program.js --foolhar --pil\nnode program.js --no-f --pileofmon\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# etc.")]),a._v("\n")])])]),e("h2",{attrs:{id:"shorthands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shorthands","aria-hidden":"true"}},[a._v("#")]),a._v(" Shorthands")]),a._v(" "),e("p",[a._v("Shorthands are a hash of shorter option names to a snippet of args that\nthey expand to.")]),a._v(" "),e("p",[a._v("If multiple one-character shorthands are all combined, and the\ncombination does not unambiguously match any other option or shorthand,\nthen they will be broken up into their constituent parts.  For example:")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"s"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--loglevel"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"silent"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"g"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--global"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"f"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--force"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"p"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--parseable"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"l"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--long"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -sgflp\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# just like doing this:")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" --loglevel silent --global --force --long --parseable\n")])])]),e("h2",{attrs:{id:"the-rest-of-the-args"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-rest-of-the-args","aria-hidden":"true"}},[a._v("#")]),a._v(" The Rest of the args")]),a._v(" "),e("p",[a._v("The config object returned by nopt is given a special member called\n"),e("code",[a._v("argv")]),a._v(", which is an object with the following fields:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("remain")]),a._v(": The remaining args after all the parsing has occurred.")]),a._v(" "),e("li",[e("code",[a._v("original")]),a._v(": The args as they originally appeared.")]),a._v(" "),e("li",[e("code",[a._v("cooked")]),a._v(": The args after flags and shorthands are expanded.")])]),a._v(" "),e("h2",{attrs:{id:"slicing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slicing","aria-hidden":"true"}},[a._v("#")]),a._v(" Slicing")]),a._v(" "),e("p",[a._v("Node programs are called with more or less the exact argv as it appears\nin C land, after the v8 and node-specific options have been plucked off.\nAs such, "),e("code",[a._v("argv[0]")]),a._v(" is always "),e("code",[a._v("node")]),a._v(" and "),e("code",[a._v("argv[1]")]),a._v(" is always the\nJavaScript program being run.")]),a._v(" "),e("p",[a._v("That's usually not very useful to you.  So they're sliced off by\ndefault.  If you want them, then you can pass in "),e("code",[a._v("0")]),a._v(" as the last\nargument, or any other number that you'd like to slice off the start of\nthe list.")])])}],!1,null,null,null);t.default=s.exports}}]);