(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{638:function(e,a,s){"use strict";s.r(a);var t=s(0),r=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("div",{staticClass:"watch"},[s("p",[s("a",{attrs:{href:"https://www.linkedin.com/learning/sass-essential-training/working-with-variables",target:"_blank",rel:"noopener noreferrer"}},[e._v('Watch "Working with variables" on LinkedIn Learning'),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("One the most persuasive reasons for using Sass was introduction to variables, which was not possible in CSS at the time of Sass's introduction. However, even with the addition of "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Variables"),s("OutboundLink")],1),e._v(", Sass Variables still have some advantages.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://sass-lang.com/documentation/variables",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sass Variables"),s("OutboundLink")],1),e._v(" begin with a "),s("code",[e._v("$")]),e._v(" and the name of the variable. A colon ("),s("code",[e._v(":")]),e._v(") is used to separate the variable from the value or expression. To use a variable, simply call the variable inside of a style rule.")]),e._v(" "),s("p",[e._v("Sass Variables can be used anywhere in the code and store almost any kind of data. One common use for Sass variables is storing colors.")]),e._v(" "),e._m(1),s("p",[e._v("The above code will compiled to the following CSS.")]),e._v(" "),e._m(2),s("div",{staticClass:"try"},[s("p",[s("a",{attrs:{href:"https://www.sassmeister.com/gist/186612fe19e87b1b8afb0a9bdfbec819",target:"_blank",rel:"noopener noreferrer"}},[e._v("Try it yourself on Sassmeister"),s("OutboundLink")],1)])]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("As mentioned above, CSS now supports variables natively. But they are some very important key difference between the two.")]),e._v(" "),e._m(4)])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"sass-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Sass Variables")])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$offwhite")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" #EEE8D6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$darkblue")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" #022933"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v("body ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$offwhite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$darkblue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[e._v("body")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" #EEE8D6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" #022933"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"sass-variables-vs-css-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass-variables-vs-css-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Sass Variables vs CSS Variables")])},function(){var e=this.$createElement,a=this._self._c||e;return a("ul",[a("li",[a("p",[this._v("Sass variables are read by the Sass compiler and removed from the resulting CSS, while CSS variables are included in CSS and are read by the browser during run time.")])]),this._v(" "),a("li",[a("p",[this._v("CSS variables can hold different values for different elements, while Sass variable can only hold one value at a time.")])]),this._v(" "),a("li",[a("p",[this._v("If you change the value of a CSS variable all uses of the variable include those that occur "),a("em",[this._v("before")]),this._v(" the change will be affected. Whereas if you change the value of a Sass variable, only future uses of the variable will be affected.")])])])}],!1,null,null,null);a.default=r.exports}}]);