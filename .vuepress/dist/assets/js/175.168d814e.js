(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{342:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("p",[t._v("If you want to write an option parser, and have it be good, there are\ntwo ways to do it.  The Right Way, and the Wrong Way.")]),t._v(" "),s("p",[t._v("The Wrong Way is to sit down and write an option parser.  We've all done\nthat.")]),t._v(" "),s("p",[t._v("The Right Way is to write some complex configurable program with so many\noptions that you hit the limit of your frustration just trying to\nmanage them all, and defer it with duct-tape solutions until you see\nexactly to the core of the problem, and finally snap and write an\nawesome option parser.")]),t._v(" "),s("p",[t._v("If you want to write an option parser, don't write an option parser.\nWrite a package manager, or a source control system, or a service\nrestarter, or an operating system.  You probably won't end up with a\ngood one of those, but if you don't give up, and you are relentless and\ndiligent enough in your procrastination, you may just end up with a very\nnice option parser.")]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" USAGE")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// my-program.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nopt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nopt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Stream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stream"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stream\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" knownOpts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baz"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bloo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"big"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"medium"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"small"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flag"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pick"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"many1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"many2"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shortHands "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foofoo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mr. Foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b7"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--bar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--bloo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"medium"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--pick"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--flag"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// everything is optional.")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// knownOpts and shorthands default to {}")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// arg list defaults to process.argv")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// slice defaults to 2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parsed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("knownOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shortHands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parsed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("This would give you support for any of the following:")]),t._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ node my-program.js --foo "blerp" --no-flag\n{ "foo" : "blerp", "flag" : false }\n\n$ node my-program.js ---bar 7 --foo "Mr. Hand" --flag\n{ bar: 7, foo: "Mr. Hand", flag: true }\n\n$ node my-program.js --foo "blerp" -f -----p\n{ foo: "blerp", flag: true, pick: true }\n\n$ node my-program.js -fp --foofoo\n{ foo: "Mr. Foo", flag: true, pick: true }\n\n$ node my-program.js --foofoo -- -fp  # -- stops the flag parsing.\n{ foo: "Mr. Foo", argv: { remain: ["-fp"] } }\n\n$ node my-program.js --blatzk -fp # unknown opts are ok.\n{ blatzk: true, flag: true, pick: true }\n\n$ node my-program.js --blatzk=1000 -fp # but you need to use = if they have a value\n{ blatzk: 1000, flag: true, pick: true }\n\n$ node my-program.js --no-blatzk -fp # unless they start with "no-"\n{ blatzk: false, flag: true, pick: true }\n\n$ node my-program.js --baz b/a/z # known paths are resolved.\n{ baz: "/Users/isaacs/b/a/z" }\n\n# if Array is one of the types, then it can take many\n# values, and will always be an array.  The other types provided\n# specify what types are allowed in the list.\n\n$ node my-program.js --many1 5 --many1 null --many1 foo\n{ many1: ["5", "null", "foo"] }\n\n$ node my-program.js --many2 foo --many2 bar\n{ many2: ["/path/to/foo", "path/to/bar"] }\n')])])]),s("p",[t._v("Read the tests at the bottom of "),s("code",[t._v("lib/nopt.js")]),t._v(" for more examples of\nwhat this puppy can do.")]),t._v(" "),s("h2",{attrs:{id:"types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#types","aria-hidden":"true"}},[t._v("#")]),t._v(" Types")]),t._v(" "),s("p",[t._v("The following types are supported, and defined on "),s("code",[t._v("nopt.typeDefs")])]),t._v(" "),s("ul",[s("li",[t._v("String: A normal string.  No parsing is done.")]),t._v(" "),s("li",[t._v("path: A file system path.  Gets resolved against cwd if not absolute.")]),t._v(" "),s("li",[t._v("url: A url.  If it doesn't parse, it isn't accepted.")]),t._v(" "),s("li",[t._v("Number: Must be numeric.")]),t._v(" "),s("li",[t._v("Date: Must parse as a date. If it does, and "),s("code",[t._v("Date")]),t._v(" is one of the options,\nthen it will return a Date object, not a string.")]),t._v(" "),s("li",[t._v("Boolean: Must be either "),s("code",[t._v("true")]),t._v(" or "),s("code",[t._v("false")]),t._v(".  If an option is a boolean,\nthen it does not need a value, and its presence will imply "),s("code",[t._v("true")]),t._v(" as\nthe value.  To negate boolean flags, do "),s("code",[t._v("--no-whatever")]),t._v(" or "),s("code",[t._v("--whatever false")])]),t._v(" "),s("li",[t._v("NaN: Means that the option is strictly not allowed.  Any value will\nfail.")]),t._v(" "),s("li",[t._v('Stream: An object matching the "Stream" class in node.  Valuable\nfor use when validating programmatically.  (npm uses this to let you\nsupply any WriteStream on the '),s("code",[t._v("outfd")]),t._v(" and "),s("code",[t._v("logfd")]),t._v(" config options.)")]),t._v(" "),s("li",[t._v("Array: If "),s("code",[t._v("Array")]),t._v(" is specified as one of the types, then the value\nwill be parsed as a list of options.  This means that multiple values\ncan be specified, and that the value will always be an array.")])]),t._v(" "),s("p",[t._v("If a type is an array of values not on this list, then those are\nconsidered valid values.  For instance, in the example above, the\n"),s("code",[t._v("--bloo")]),t._v(" option can only be one of "),s("code",[t._v('"big"')]),t._v(", "),s("code",[t._v('"medium"')]),t._v(", or "),s("code",[t._v('"small"')]),t._v(",\nand any other value will be rejected.")]),t._v(" "),s("p",[t._v("When parsing unknown fields, "),s("code",[t._v('"true"')]),t._v(", "),s("code",[t._v('"false"')]),t._v(", and "),s("code",[t._v('"null"')]),t._v(" will be\ninterpreted as their JavaScript equivalents.")]),t._v(" "),s("p",[t._v("You can also mix types and values, or multiple types, in a list.  For\ninstance "),s("code",[t._v("{ blah: [Number, null] }")]),t._v(" would allow a value to be set to\neither a Number or null.  When types are ordered, this implies a\npreference, and the first type that can be used to properly interpret\nthe value will be used.")]),t._v(" "),s("p",[t._v("To define a new type, add it to "),s("code",[t._v("nopt.typeDefs")]),t._v(".  Each item in that\nhash is an object with a "),s("code",[t._v("type")]),t._v(" member and a "),s("code",[t._v("validate")]),t._v(" method.  The\n"),s("code",[t._v("type")]),t._v(" member is an object that matches what goes in the type list.  The\n"),s("code",[t._v("validate")]),t._v(" method is a function that gets called with "),s("code",[t._v("validate(data, key, val)")]),t._v(".  Validate methods should assign "),s("code",[t._v("data[key]")]),t._v(" to the valid\nvalue of "),s("code",[t._v("val")]),t._v(" if it can be handled properly, or return boolean\n"),s("code",[t._v("false")]),t._v(" if it cannot.")]),t._v(" "),s("p",[t._v("You can also call "),s("code",[t._v("nopt.clean(data, types, typeDefs)")]),t._v(" to clean up a\nconfig object and remove its invalid properties.")]),t._v(" "),s("h2",{attrs:{id:"error-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-handling","aria-hidden":"true"}},[t._v("#")]),t._v(" Error Handling")]),t._v(" "),s("p",[t._v("By default, nopt outputs a warning to standard error when invalid values for\nknown options are found.  You can change this behavior by assigning a method\nto "),s("code",[t._v("nopt.invalidHandler")]),t._v(".  This method will be called with\nthe offending "),s("code",[t._v("nopt.invalidHandler(key, val, types)")]),t._v(".")]),t._v(" "),s("p",[t._v("If no "),s("code",[t._v("nopt.invalidHandler")]),t._v(" is assigned, then it will console.error\nits whining.  If it is assigned to boolean "),s("code",[t._v("false")]),t._v(" then the warning is\nsuppressed.")]),t._v(" "),s("h2",{attrs:{id:"abbreviations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abbreviations","aria-hidden":"true"}},[t._v("#")]),t._v(" Abbreviations")]),t._v(" "),s("p",[t._v("Yes, they are supported.  If you define options like this:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foolhardyelephants"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pileofmonkeys"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Then this will work:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("node program.js --foolhar --pil\nnode program.js --no-f --pileofmon\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# etc.")]),t._v("\n")])])]),s("h2",{attrs:{id:"shorthands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shorthands","aria-hidden":"true"}},[t._v("#")]),t._v(" Shorthands")]),t._v(" "),s("p",[t._v("Shorthands are a hash of shorter option names to a snippet of args that\nthey expand to.")]),t._v(" "),s("p",[t._v("If multiple one-character shorthands are all combined, and the\ncombination does not unambiguously match any other option or shorthand,\nthen they will be broken up into their constituent parts.  For example:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"s"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--loglevel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"silent"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"g"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--global"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"f"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--force"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"p"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--parseable"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--long"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -sgflp\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# just like doing this:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" --loglevel silent --global --force --long --parseable\n")])])]),s("h2",{attrs:{id:"the-rest-of-the-args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-rest-of-the-args","aria-hidden":"true"}},[t._v("#")]),t._v(" The Rest of the args")]),t._v(" "),s("p",[t._v("The config object returned by nopt is given a special member called\n"),s("code",[t._v("argv")]),t._v(", which is an object with the following fields:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("remain")]),t._v(": The remaining args after all the parsing has occurred.")]),t._v(" "),s("li",[s("code",[t._v("original")]),t._v(": The args as they originally appeared.")]),t._v(" "),s("li",[s("code",[t._v("cooked")]),t._v(": The args after flags and shorthands are expanded.")])]),t._v(" "),s("h2",{attrs:{id:"slicing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slicing","aria-hidden":"true"}},[t._v("#")]),t._v(" Slicing")]),t._v(" "),s("p",[t._v("Node programs are called with more or less the exact argv as it appears\nin C land, after the v8 and node-specific options have been plucked off.\nAs such, "),s("code",[t._v("argv[0]")]),t._v(" is always "),s("code",[t._v("node")]),t._v(" and "),s("code",[t._v("argv[1]")]),t._v(" is always the\nJavaScript program being run.")]),t._v(" "),s("p",[t._v("That's usually not very useful to you.  So they're sliced off by\ndefault.  If you want them, then you can pass in "),s("code",[t._v("0")]),t._v(" as the last\nargument, or any other number that you'd like to slice off the start of\nthe list.")])])}],!1,null,null,null);a.default=e.exports}}]);