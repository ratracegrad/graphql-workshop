(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{662:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"create-server-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-server-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Create Server File")]),t._v(" "),s("p",[t._v("In your server folder create a new file called "),s("code",[t._v("app.js")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"create-express-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-express-app","aria-hidden":"true"}},[t._v("#")]),t._v(" Create Express App")]),t._v(" "),s("p",[t._v("Open this file in your editor. The first thing we need to do is to required the express module we just installed. Add this line:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" express "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Now that we have required express then we will create an app by calling the express function. Add this line:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"set-port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-port","aria-hidden":"true"}},[t._v("#")]),t._v(" Set Port")]),t._v(" "),s("p",[t._v("Now that we have created our app we need to tell it which port to listen to. We tell our app what port to listen to and we have to pass it a callback function. When the app starts listening to the port, this callback function will be executed. We will put a console.log in the callback function to let us know the server is listening.")]),t._v(" "),s("p",[t._v("Add this to your file:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server listening on port 3000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"test-your-express-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-your-express-server","aria-hidden":"true"}},[t._v("#")]),t._v(" Test Your Express Server")]),t._v(" "),s("p",[t._v("If we run our app, we should see the console.log displayed in our terminal. To test your server, go to your terminal and enter the following command:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("node app\n")])])]),s("p",[t._v("You should see the console.log in your terminal that the server is listening on port 3000.")]),t._v(" "),s("p",[t._v("To stop running the server, enter "),s("code",[t._v("ctrl-c")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"install-nodemon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-nodemon","aria-hidden":"true"}},[t._v("#")]),t._v(" Install nodemon")]),t._v(" "),s("p",[t._v("Now every time we update our "),s("code",[t._v("app.js")]),t._v(" file we will need to stop our server in the terminal and start it again for our changes to take effect. There is a package called "),s("code",[t._v("nodemon")]),t._v(" that will automatically restart the server when the "),s("code",[t._v("app.js")]),t._v(" file changes. This makes development a lot easier.")]),t._v(" "),s("p",[t._v("From the terminal enter this command to install nodemon:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install nodemon "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save\n")])])]),s("p",[t._v("Now that we have it installed we can start our server now using the command:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("nodemon app\n")])])])])}],!1,null,null,null);e.default=n.exports}}]);