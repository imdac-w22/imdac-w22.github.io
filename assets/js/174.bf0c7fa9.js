(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{389:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("Youtube",{attrs:{id:"EaRrmOtPYTM",citation:"griffith"}}),t._v(" "),s("p",[t._v("DOM Events are notifications that some action has occurred on the page and can represent a basic user action or the status of the render model. For example, when a user clicks on a button, that is a DOM Event. When the pages loads, that is a DOM Event. When the page is scrolled, the window is resized, or the mouse is moved are all DOM Events. There are DOM Events for the keyboard, mouse, touch, clipboard, media, view, printing, drag & drop, animation, forms, and more.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),s("Youtube",{attrs:{id:"pzT4hAY82q4",citation:"griffith"}}),t._v(" "),s("p",[t._v("Mouse events occur when the user uses the mouse to interact with the page. While there are many different "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_events",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mouse Events"),s("OutboundLink")],1),t._v(", the most common used are "),s("code",[t._v("click")]),t._v(", "),s("code",[t._v("mouseover")]),t._v(", and "),s("code",[t._v("mouseout")]),t._v(".")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("Youtube",{attrs:{id:"5-koI06rmcA",citation:"griffith"}}),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("While the most common events types are going to come from the the mouse or keyboard, there are many other "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events",target:"_blank",rel:"noopener noreferrer"}},[t._v("Standard Events"),s("OutboundLink")],1),t._v(" that can be used.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("Sometimes it is necessary to add an event listener to multiple elements. At first you may fear that you will have to add the event listener to each element individual. While this is true to some extent, there are a couple of techniques that make this process much less painful.")]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("The first way to add an event listener to multiple elements is to use a loop. When retrieving multiple elements using the "),s("router-link",{attrs:{to:"/content/html-elements/"}},[t._v("querySelectorAll()")]),t._v(" method an array to returned. Using this array and the "),s("router-link",{attrs:{to:"/content/loops/"}},[s("code",[t._v("for...of")]),t._v(" loop")]),t._v(", it possible to add the same event listener to each element. Additional, by defining the event handler function outside of the "),s("code",[t._v("addEventListener()")]),t._v(" method, we can make the code our more efficient.")],1),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("Youtube",{attrs:{id:"JYc7gr9Ehl0",citation:"griffith"}}),t._v(" "),s("p",[t._v("Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future.")]),t._v(" "),s("p",[t._v("Consider the following HTML:")]),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),s("p",[t._v("However, if there are additional children inside the target element. In the following example, and an icon is added to the list items that are important. If you were click on the icon instead of the item using the javascript code above, nothing will happen. However, this problem is solved using the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/closest",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("closest()")]),t._v(" method"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"javascript-event-listeners"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-event-listeners","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript Event Listeners")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Event Listeners are JavaScript objects that listens for a specific DOM Event to occur and executes a function when it does. Event Listeners are created using the "),e("code",[this._v("addEventListener()")]),this._v(" method.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" button "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbutton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`You pressed the button!`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"event-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Types")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mouse-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mouse-events","aria-hidden":"true"}},[this._v("#")]),this._v(" Mouse Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"Mouse Events: Click, Mouseover, Mouseout",src:"//codepen.io/IMD/embed/XGEopJ/?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/XGEopJ/"}},[this._v("Mouse Events: Click, Mouseover, Mouseout")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"keyboard-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-events","aria-hidden":"true"}},[this._v("#")]),this._v(" Keyboard Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Keyboard events occur when the user uses the keyboard to interact with the page. There are only three keyboard events: "),e("code",[this._v("keydown")]),this._v(", "),e("code",[this._v("keydown")]),this._v(", and "),e("code",[this._v("keypress")]),this._v(" (ignores modifier keys). When a key is pressed the browser will provide a key code that can be used to identify which key was pressed. These codes are retrieved using a property from the Event object. Unfortunately, this part of the API is in the middle of a transition period, so there are two common properties that can be used to retrieve the key code.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The old property is "),e("code",[this._v("keyCode")]),this._v(", which will provide a number of the represents the key pressed. This number will be different depending on the which the keyboard event.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"380",scrolling:"no",title:"Keyboard Events: The keyCode Property",src:"//codepen.io/IMD/embed/JzLmyv/?height=380&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/JzLmyv/"}},[this._v("Keyboard Events: The keyCode Property")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The new property is "),e("code",[this._v("key")]),this._v(", which provide a string that represents the key pressed.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"393",scrolling:"no",title:"Keyboard Events: The key Property",src:"//codepen.io/IMD/embed/rRdoOX/?height=393&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/rRdoOX/"}},[this._v("Keyboard Events: The key Property")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"other-standard-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-standard-events","aria-hidden":"true"}},[this._v("#")]),this._v(" Other Standard Events")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The "),s("code",[t._v("change")]),t._v(" event is fired for "),s("code",[t._v("<input>")]),t._v(", "),s("code",[t._v("<select>")]),t._v(", and "),s("code",[t._v("<textarea>")]),t._v(" elements when a change to the element's value is committed by the user.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"Standard Events: The change Event",src:"//codepen.io/IMD/embed/wOmRbZ/?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/wOmRbZ/"}},[this._v("Standard Events: The change Event")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"event-listeners-on-multiple-elements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-listeners-on-multiple-elements","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Listeners on Multiple Elements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-a-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-loop","aria-hidden":"true"}},[this._v("#")]),this._v(" Using a Loop")])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"411",scrolling:"no",title:"Adding Event Listener to Multiple Elements with a Loop",src:"//codepen.io/IMD/embed/KEoJQg/?height=411&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/KEoJQg/"}},[this._v("Adding Event Listener to Multiple Elements with a Loop")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-event-delegation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-event-delegation","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Event Delegation")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Clean the car"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item completed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Feed the cat"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Buy milk"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Using traditional event listener techniques, if we wanted to toggle the "),e("code",[this._v("completed")]),this._v(" class when a list item is clicked, we would have to add an event listener to each list item. However, by using event delegation, this can be done with a single event listener added to the list, instead of the list items. However, to make this work, we will need to add an if statement to varify that the event target is a list item and not the list itself. This can be accomplished by using the "),e("code",[this._v("classList.contains()")]),this._v(" method.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n$list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'item'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toggle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'completed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("closest()")]),this._v(" method of the Element interface returns the closest ancestor of the current element (or the current element itself) which matches the selectors given in a parameter. If no such element exists, it returns null.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Clean the car"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item completed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fas fa-exclamation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Feed the cat"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Buy milk"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n$list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.item'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      $item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toggle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'completed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])}],!1,null,null,null);e.default=n.exports}}]);