(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{878:function(e,t,a){"use strict";a.r(t);var r=a(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Use what you have learned about working with JavaScript and the Fetch API to create a customizable clock application that displays the time, date, the "),a("a",{attrs:{href:"https://apod.nasa.gov/apod/astropix.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Astronomy Picture of the Day"),a("OutboundLink")],1),e._v(" (APOD) from NASA.")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("When a user first arrives, the clock app should display the current time and the day's APOD. By clicking on a button, the user should be able to reveal more information, such as the day of the week, the day of the month, the day of the year, and the week of the year. It's up to you what additional information you want to offer.")]),e._v(" "),a("p",[e._v("The user should be able to reveal a settings panel, which will allow the user to customize the clock application. At least two customizations should be possible. For example, you could customize how the time is displayed or the color of the clock. Again, be creative and choose whatever settings are most appropriate for your application.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("To complete this assignment, students must register for an "),a("a",{attrs:{href:"https://api.nasa.gov/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API Key"),a("OutboundLink")],1),e._v(" to use the APOD API.")]),e._v(" "),a("p",[e._v("While you are encouraged to build everything by hand, feel free to do some research (and/or ask your instructor) on some JavaScript libraries to explore while completing the assignment.")]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Your assignment must adhere to the following requirements:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),a("ol",[a("li",[e._v("Due to the limit on requests for the APOD API, students are encouraged to store the APOD data in local storage or use a static file during development.")]),e._v(" "),a("li",[e._v("Some APOD image may be too dark or too light for the font color. Using a semi-transparent linear-gradient on top of the image can be an easy way to add more contrast.")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval",target:"_blank",rel:"noopener noreferrer"}},[e._v("setInterval"),a("OutboundLink")],1),e._v(" method can be used to periodically check the current date and time.")]),e._v(" "),a("li",[e._v("Icons can make the web application look more polished and the "),a("a",{attrs:{href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Font Awesome"),a("OutboundLink")],1),e._v(" library has a wide array of available icons.")]),e._v(" "),a("li",[e._v("An object can be an excellent way to store a web application settings. Storing an object to local storage does require using "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON.stringify"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON.parse"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(7),e._v(" "),a("Youtube",{attrs:{id:"9oVl6Xzjg_s"}}),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("Your assignment must adhere to the following requirements:")]),e._v(" "),e._m(9)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"clock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clock","aria-hidden":"true"}},[this._v("#")]),this._v(" Clock")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"objective"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"app-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" App Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Resources")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[e._v("Submit your work in a Git repository named "),a("strong",[e._v("mtm6302-final-project")])]),e._v(" "),a("li",[e._v("The assignment should utilize one HTML ("),a("strong",[e._v("index.html")]),e._v("), CSS ("),a("strong",[e._v("style.css")]),e._v("), and JavaScript ("),a("strong",[e._v("script.js")]),e._v(") file, each located at the root of the repository. Any images should be stored in "),a("strong",[e._v("/images")]),e._v(".")]),e._v(" "),a("li",[e._v("Feel free to use a modern CSS Framework like Bootstrap or Foundation, or a CSS reset ("),a("strong",[e._v("reset.css")]),e._v(").")]),e._v(" "),a("li",[e._v("The web application should be responsive.")]),e._v(" "),a("li",[e._v("You may not use inline events. All DOM events must be handled using Event Listeners.")]),e._v(" "),a("li",[e._v("You may not declare variables with "),a("code",[e._v("var")]),e._v(". Use either "),a("code",[e._v("const")]),e._v(" or "),a("code",[e._v("let")]),e._v(".")]),e._v(" "),a("li",[e._v("The use of JavaScript libraries is allowed.")]),e._v(" "),a("li",[e._v("Do not use the "),a("code",[e._v("XMLHttpRequest")]),e._v(" object or the jQuery "),a("code",[e._v("ajax()")]),e._v(" method. Use the Fetch API for asynchronous operations.")]),e._v(" "),a("li",[e._v("The web application should not experience any page refreshes.")]),e._v(" "),a("li",[e._v("The web application should display the current date and time (hours, minutes, seconds).")]),e._v(" "),a("li",[e._v("The web application should display a greeting that changes depending on the time of day.")]),e._v(" "),a("li",[e._v("The web application should asynchronously retrieve and display the Astronomy Picture of the Day using NASA's APOD API.")]),e._v(" "),a("li",[e._v("The web application should allow the user to show and hide additional time and date information.")]),e._v(" "),a("li",[e._v("The web application should allow the user to customize at least two aspects of the application.")]),e._v(" "),a("li",[e._v("The web application should store any user settings to local storage and automatically retrieve those settings on page load.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"hints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hints","aria-hidden":"true"}},[this._v("#")]),this._v(" Hints")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rubric"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Requirement")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Marks")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Repository and files are named and structured correctly")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2")])]),e._v(" "),a("tr",[a("td",[e._v("The current date and time is displayed")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("1")])]),e._v(" "),a("tr",[a("td",[e._v("The time accurately updates every second")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),a("tr",[a("td",[e._v("The current NASA APOD is asynchronously retrieved and displayed")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),a("tr",[a("td",[e._v("A greeting (relevant to the time of day) is displayed")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("1")])]),e._v(" "),a("tr",[a("td",[e._v('Visibility can be toggled on a "more data" section')]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("1")])]),e._v(" "),a("tr",[a("td",[e._v("Visibility can be toggled on a settings section")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("1")])]),e._v(" "),a("tr",[a("td",[e._v("At least two application features can be customized")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("4")])]),e._v(" "),a("tr",[a("td",[e._v("The settings are stored in and retrieved from Local Storage")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("4")])]),e._v(" "),a("tr",[a("td",[e._v("The UI is responsive and well designed")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Total")])]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("25")])])])])])}],!1,null,null,null);t.default=i.exports}}]);