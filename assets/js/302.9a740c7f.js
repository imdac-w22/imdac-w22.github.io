(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{517:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://laravel.com/docs/8.x/blade",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blade"),a("OutboundLink")],1),t._v(" is a simple but powerful templating engine included with Laravel. Blade has a collection of directives, which makes templates easier to read and create. It also has a sophisticated component system used to modularize a web application and build template layouts. Finally, unlike other templating engines, Blade uses plain PHP code inside the templates and is converted to plain PHP when the template is compiled. This means Blade is simpler and more powerful than plain PHP and yet adds zero overhead to a web application.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[a("a",{attrs:{href:"https://laravel.com/docs/8.x/blade#displaying-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("Displaying Data"),a("OutboundLink")],1),t._v(" in a Blade file can be accomplished by wrapping the variable in double curly braces "),t._m(9),t._v(". This is sometimes known as moustache syntax.")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),a("p",[t._v("Sometimes, it may be necessary to prevent the Blade engine from rendering the moustache syntax. For example, if you were also working with the "),a("a",{attrs:{href:"https://v3.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),a("OutboundLink")],1),t._v(" framework. In this case, the "),a("code",[t._v("@")]),t._v(" can be placed in front of the "),t._m(13),t._v(". When the Blade template is rendered, the "),a("code",[t._v("@")]),t._v(" will be removed, but the "),t._m(14),t._v(" will remain.")]),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"laravel-blade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-blade","aria-hidden":"true"}},[this._v("#")]),this._v(" Laravel Blade")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Blade template files use the "),e("code",[this._v(".blade.php")]),this._v(" extension and are typically stored in the "),e("code",[this._v("resources/views")]),this._v(" directory.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rendering-blade-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rendering-blade-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Rendering Blade Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Like other view files, Routes can display Blade view files using the "),e("code",[this._v("view")]),this._v(" helper function.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/greetings'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// renders /resources/views/greetings.blade.php")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'greetings'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("Remember that only the base name is required. Laravel will know to look for "),e("code",[this._v(".blade.php")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Data can also be passed to a Blade view file by adding an array to the "),e("code",[this._v("view")]),this._v(" helper function.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/greetings'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'greetings'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'John'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"display-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Display Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{pre:!0,attrs:{style:"white-space: nowrap"}},[e("code",[this._v("{{ }}")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The Blade "),e("span",{pre:!0,attrs:{style:"white-space: nowrap"}},[e("code",[this._v("{{ }}")])]),this._v(" statement is automatically sent through PHP's "),e("code",[this._v("htmlspecialchars")]),this._v(" function to prevent XSS attacks. However, if you do need to display raw HTML, it can be done using the "),e("code",[this._v("{!! !!}")]),this._v(" statement.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{pre:!0,attrs:{style:"white-space: nowrap"}},[e("code",[this._v("{{ }}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{pre:!0,attrs:{style:"white-space: nowrap"}},[e("code",[this._v("{{ }}")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rendered as: Hello {{ name }}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);