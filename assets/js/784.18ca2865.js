(window.webpackJsonp=window.webpackJsonp||[]).push([[784],{999:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("For this assignment, you will demonstrate your skills and understanding of using PHP to create HTML to generate 100 random dominoes on the page.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("The following requirement must be met to complete the assignment successfully:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("A completed version of the assignment can be found at the following:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://dominoes.eisenbraun.ca",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dominoes.eisenbraun.ca"),s("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("The following hints can help complete the assignment.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"dominoes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dominoes","aria-hidden":"true"}},[this._v("#")]),this._v(" Dominoes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"objective"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Warning")]),this._v(" "),e("p",[this._v("The web application must be functional and without errors. A non-functional game due to syntax errors or missing functionality will "),e("strong",[this._v("result in a failing grade")]),this._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("Clone this repository from GitHub and use the provided files to complete the assignment.")]),t._v(" "),s("li",[t._v("Convert the "),s("strong",[t._v("index.html")]),t._v(" file to be a PHP file.\n"),s("ol",[s("li",[t._v("Update the file extension")]),t._v(" "),s("li",[t._v("Remove the demo HTML code")])])]),t._v(" "),s("li",[t._v("Using loops and a simple array, generate the HTML necessary to create 100 dominoes.\n"),s("ol",[s("li",[t._v("Each domino should have two sections.")]),t._v(" "),s("li",[t._v("Randomly choose the number of dots to create using the "),s("code",[t._v("rand()")]),t._v(" function.")]),t._v(" "),s("li",[t._v("Add a number class to the domino section based on the number of dots created. The classes are: "),s("code",[t._v("zero")]),t._v(", "),s("code",[t._v("one")]),t._v(", "),s("code",[t._v("two")]),t._v(", "),s("code",[t._v("three")]),t._v(", "),s("code",[t._v("four")]),t._v(", "),s("code",[t._v("five")]),t._v(", and "),s("code",[t._v("six")]),t._v(".")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hints","aria-hidden":"true"}},[this._v("#")]),this._v(" Hints")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("The following guide shows one way to complete the assignment\n"),s("img",{attrs:{src:"/images/mtm6405-dominoes-hint.png",alt:"Dominoes Template"}})]),t._v(" "),s("li",[t._v("Unlike in JavaScript, nested loops must use different variable names for their iterators to avoid conflict with each other."),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this will cause an infinite loop")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// instead do this")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$j")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$j")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$j")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rubric"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Criteria")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Pts")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Creates 100 dominoes on the page")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("Creates two sections for each domino with the proper number class")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("8")])]),t._v(" "),s("tr",[s("td",[t._v("Creates a random number of dots for each section")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("8")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Total")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("20")])])])])])}],!1,null,null,null);e.default=n.exports}}]);