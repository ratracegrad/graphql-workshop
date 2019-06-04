(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{329:function(e,t,a){"use strict";a.r(t);var i=a(0),n=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("p",[e._v("An ini format parser and serializer for node.")]),e._v(" "),a("p",[e._v("Sections are treated as nested objects.  Items before the first\nheading are saved on the object directly.")]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("Consider an ini-file "),a("code",[e._v("config.ini")]),e._v(" that looks like this:")]),e._v(" "),a("pre",[a("code",[e._v("; this comment is being ignored\nscope = global\n\n[database]\nuser = dbuser\npassword = dbpassword\ndatabase = use_this_database\n\n[paths.default]\ndatadir = /var/lib/data\narray[] = first value\narray[] = second value\narray[] = third value\n")])]),e._v(" "),a("p",[e._v("You can read, manipulate and write the ini-file like so:")]),e._v(" "),a("pre",[a("code",[e._v("var fs = require('fs')\n  , ini = require('ini')\n\nvar config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'))\n\nconfig.scope = 'local'\nconfig.database.database = 'use_another_database'\nconfig.paths.default.tmpdir = '/tmp'\ndelete config.paths.default.datadir\nconfig.paths.default.array.push('fourth value')\n\nfs.writeFileSync('./config_modified.ini', ini.stringify(config, { section: 'section' }))\n")])]),e._v(" "),a("p",[e._v("This will result in a file called "),a("code",[e._v("config_modified.ini")]),e._v(" being written\nto the filesystem with the following content:")]),e._v(" "),a("pre",[a("code",[e._v("[section]\nscope=local\n[section.database]\nuser=dbuser\npassword=dbpassword\ndatabase=use_another_database\n[section.paths.default]\ntmpdir=/tmp\narray[]=first value\narray[]=second value\narray[]=third value\narray[]=fourth value\n")])]),e._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[e._v("#")]),e._v(" API")]),e._v(" "),a("h3",{attrs:{id:"decode-inistring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decode-inistring","aria-hidden":"true"}},[e._v("#")]),e._v(" decode(inistring)")]),e._v(" "),a("p",[e._v("Decode the ini-style formatted "),a("code",[e._v("inistring")]),e._v(" into a nested object.")]),e._v(" "),a("h3",{attrs:{id:"parse-inistring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parse-inistring","aria-hidden":"true"}},[e._v("#")]),e._v(" parse(inistring)")]),e._v(" "),a("p",[e._v("Alias for "),a("code",[e._v("decode(inistring)")])]),e._v(" "),a("h3",{attrs:{id:"encode-object-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encode-object-options","aria-hidden":"true"}},[e._v("#")]),e._v(" encode(object, [options])")]),e._v(" "),a("p",[e._v("Encode the object "),a("code",[e._v("object")]),e._v(" into an ini-style formatted string. If the\noptional parameter "),a("code",[e._v("section")]),e._v(" is given, then all top-level properties\nof the object are put into this section and the "),a("code",[e._v("section")]),e._v("-string is\nprepended to all sub-sections, see the usage example above.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("options")]),e._v(" object may contain the following:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("section")]),e._v(" A string which will be the first "),a("code",[e._v("section")]),e._v(" in the encoded\nini data.  Defaults to none.")]),e._v(" "),a("li",[a("code",[e._v("whitespace")]),e._v(" Boolean to specify whether to put whitespace around the\n"),a("code",[e._v("=")]),e._v(" character.  By default, whitespace is omitted, to be friendly to\nsome persnickety old parsers that don't tolerate it well.  But some\nfind that it's more human-readable and pretty with the whitespace.")])]),e._v(" "),a("p",[e._v("For backwards compatibility reasons, if a "),a("code",[e._v("string")]),e._v(" options is passed\nin, then it is assumed to be the "),a("code",[e._v("section")]),e._v(" value.")]),e._v(" "),a("h3",{attrs:{id:"stringify-object-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringify-object-options","aria-hidden":"true"}},[e._v("#")]),e._v(" stringify(object, [options])")]),e._v(" "),a("p",[e._v("Alias for "),a("code",[e._v("encode(object, [options])")])]),e._v(" "),a("h3",{attrs:{id:"safe-val"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safe-val","aria-hidden":"true"}},[e._v("#")]),e._v(" safe(val)")]),e._v(" "),a("p",[e._v("Escapes the string "),a("code",[e._v("val")]),e._v(" such that it is safe to be used as a key or\nvalue in an ini-file. Basically escapes quotes. For example")]),e._v(" "),a("pre",[a("code",[e._v("ini.safe('\"unsafe string\"')\n")])]),e._v(" "),a("p",[e._v("would result in")]),e._v(" "),a("pre",[a("code",[e._v('"\\"unsafe string\\""\n')])]),e._v(" "),a("h3",{attrs:{id:"unsafe-val"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-val","aria-hidden":"true"}},[e._v("#")]),e._v(" unsafe(val)")]),e._v(" "),a("p",[e._v("Unescapes the string "),a("code",[e._v("val")])])])}],!1,null,null,null);t.default=n.exports}}]);