(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{370:function(e,t,a){"use strict";a.r(t);var i=a(0),s=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[a("em",[e._v("This page contains excerpts from the "),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization",target:"_blank",rel:"noopener noreferrer"}},[e._v("Image Optimization"),a("OutboundLink")],1),e._v(" article on Google Developers web site.")])]),e._v(" "),a("p",[e._v("Images often account for most of the downloaded bytes on a web page and also often occupy a significant amount of visual space.")]),e._v(" "),a("p",[e._v("Image optimization is the process of eliminating, replacing or decreasing the size of an image while still maintaining acceptable quality and visual effect of the site.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("In some situations, it is possible to eliminate an image or replace it by using a combination of HTML, CSS, and JavaScript. Some techniques include using CSS effects (gradients and shadows), web animations and web fonts in place of images. So it is important to ask yourself if each image is truly required or if it can be replaced using an existing web technology.")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("A vector graphic, like a Scalable Vector Graphics (SVG), is created using lines, points and polygons to represent an image. Vector formats are ideally suited for images that consist of simple geometric shapes (for example, logos, text, and icons). They are also resolution-independent, which means they can be scaled without any lose of quality, which makes them an ideal format for the high-resolution screens and assets that need to be displayed at varying sizes. Vectors do not work well with complex images like a photo.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("A raster graphic is a series of pixels placed in a rectangular grid. Common raster image formats include GIF, PNG, JPEG, and WebP. Raster images are not resolution independent and will lose quality as the image is scaled up or zoomed. Raster images work best used with complex images like photos.\n")]),e._m(4),e._v(" "),e._m(5),a("p"),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("The most widely supported and used vector format is Scalable Vector Graphics (SVG), which is an XML-based image format for two-dimensional graphics: we can embed the SVG markup directly on the page, or as an external resource.")]),e._v(" "),a("p",[e._v("While it is also possible to create a SVG by writing code using a text editor, most vector-based drawing software, like Adobe Illustrator, will also import and export to SVG. When exporting an SVG from one of these applications, the SVG can contain a lot of unnecessary metadata. So, it is always a good idea to minify your SVG files by selecting the Minify option or using an external minifier, like "),a("a",{attrs:{href:"https://vecta.io/nano",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nano"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("Because a raster image is a 2-dimensional grid of individual pixels, the more pixels an image contains, the larger the file size will be. So the first step to optimizing a raster image is to choose a correct resolution.")]),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("In the world of the high-resolution screens of various sizes it can be difficult to know what the correct resolution of an image should be, and often it will not be only one answer. This is where "),a("router-link",{attrs:{to:"/modules/html/responsive-images/"}},[e._v("Responsive Images")]),e._v(" come in. But before any of that, it is important to understand how High-Resolution screens affect pixels.")],1),e._v(" "),a("p",[e._v("When we talk about image pixels, we need to distinguish between different kinds of pixels: CSS pixels and device pixels.")]),e._v(" "),a("p",[e._v("A single CSS pixel may contain multiple device pixels - for example, a single CSS pixel may correspond directly to a single device pixel, or may be backed by multiple device pixels. This can pose a problem for raster images as the resolution of the image will need to increase to maintain the quality, thus increasing the overall size.")]),e._v(" "),a("p",[e._v("For example, a screen that has a 2x screen resolution will require an image that is 4 times the size of the standard screen, a 3x screen resolution, 9 times the image size. Put another way, an image that is 100px by 100px will need to be 900px by 900px to appear at the same quality on a 3x screen resolution.")]),e._v(" "),e._m(9),e._v(" "),a("p",[e._v('For certain types of data, such as source code for a page, or an executable file, it is critical that a compressor does not alter or lose any of the original information: a single missing or wrong bit of data could completely change the meaning of the contents of the file, or worse, break it entirely. For some other types of data, such as images, audio, and video, it may be perfectly acceptable to deliver an "approximate" representation of the original data.')]),e._v(" "),a("p",[e._v("In fact, due to how the eye works, we can often get away with discarding some information about each pixel in order to reduce the file-size of an image - for example, our eyes have different sensitivity to different colors, which means that we can use fewer bits to encode some colors. As a result, a typical image optimization pipeline consists of two high level steps:")]),e._v(" "),e._m(10),e._v(" "),a("p",[e._v("The first step is optional, and the exact algorithm will depend on the particular image format, but it is important to understand that any image can undergo a lossy compression step to reduce its size. In fact, the difference between various image formats, such as GIF, PNG, JPEG, and others, is in the combination of the specific algorithms they use (or omit) when applying the lossy and lossless steps.")]),e._v(" "),e._m(11),e._v(" "),a("p",[e._v('In addition to different lossy and lossless compression algorithms, different image formats support different features such as animation and transparency (alpha) channels. As a result, the choice of the "right format" for a particular image is a combination of desired visual results and functional requirements.')]),e._v(" "),a("table",[e._m(12),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("APNG")]),e._v(" "),a("td",[e._v("Animated Portable Network Graphics")]),e._v(" "),a("td",[e._v(".apng")]),e._v(" "),a("td",[e._v("Good choice for lossless animation sequences (GIF is less performant). AVIF and WebP have better performance but less broad browser support.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://caniuse.com/?search=apng",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome, Edge, Firefox, Opera, Safari                                       "),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("AVIF")]),e._v(" "),a("td",[e._v("AV1 Image File Format")]),e._v(" "),a("td",[e._v(".avif")]),e._v(" "),e._m(13),e._v(" "),a("td",[a("a",{attrs:{href:"https://caniuse.com/?search=avif",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome, Opera, Firefox (still images only: animated images not implemented)"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("GIF")]),e._v(" "),a("td",[e._v("Graphics Interchange Format")]),e._v(" "),a("td",[e._v(".gif")]),e._v(" "),a("td",[e._v("Good choice for simple images and animations. Prefer PNG for lossless and indexed still images, and consider WebP, AVIF or APNG for animation sequences.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://caniuse.com/?search=gif",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome, Edge, Firefox, IE, Opera, Safari                                   "),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("JPEG")]),e._v(" "),a("td",[e._v("Joint Photographic Expert Group image")]),e._v(" "),a("td",[e._v(".jpg, .jpeg, .jfif, .pjpeg, .pjp")]),e._v(" "),a("td",[e._v("Good choice for lossy compression of still images (currently the most popular). Prefer PNG when more precise reproduction of the image is required, or WebP/AVIF if both better reproduction and higher compression are required.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://caniuse.com/?search=jpeg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome, Edge, Firefox, IE, Opera, Safari                                   "),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("PNG")]),e._v(" "),a("td",[e._v("Portable Network Graphics")]),e._v(" "),a("td",[e._v(".png")]),e._v(" "),a("td",[e._v("PNG is preferred over JPEG for more precise reproduction of source images, or when transparency is needed. WebP/AVIF provide even better compression and reproduction, but browser support is more limited.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://caniuse.com/?search=png",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome, Edge, Firefox, IE, Opera, Safari"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("SVG")]),e._v(" "),a("td",[e._v("Scalable Vector Graphics")]),e._v(" "),a("td",[e._v(".svg")]),e._v(" "),a("td",[e._v("Vector image format; ideal for user interface elements, icons, diagrams, etc., that must be drawn accurately at different sizes.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://caniuse.com/?search=svg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome, Edge, Firefox, IE, Opera, Safari"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("WebP")]),e._v(" "),a("td",[e._v("Web Picture format")]),e._v(" "),a("td",[e._v(".webp")]),e._v(" "),a("td",[e._v("Excellent choice for both images and animated images. WebP offers much better compression than PNG or JPEG with support for higher color depths, animated frames, transparency etc. AVIF offers slightly better compression, but is not quite as well-supported in browsers and does not support progressive rendering.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://caniuse.com/?search=webp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome, Edge, Firefox, Opera, Safari"),a("OutboundLink")],1)])])])]),e._v(" "),a("p",[e._v("Table from "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types",target:"_blank",rel:"noopener noreferrer"}},[e._v("Image file type and format guide"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("There are three universally supported and most commonly used image formats: GIF, PNG, and JPEG. In addition to these formats, some browsers also support newer formats such as WebP and JPEG XR, which offer better overall compression and more features. So, which format should you use?")]),e._v(" "),e._m(14),e._v(" "),a("p",[e._v("GIF limits the color palette to at most 256 colors, which makes it a poor choice for most images. Further, PNG-8 delivers better compression for images with a small palette. As a result, GIF is the right answer only when animation is required.")]),e._v(" "),e._m(15),e._v(" "),a("p",[e._v("PNG does not apply any lossy compression algorithms beyond the choice of the size of the color palette. As a result, it will produce the highest quality image, but at a cost of significantly higher file-size than other formats. Use judiciously.")]),e._v(" "),a("p",[e._v("If the image asset contains imagery composed of geometric shapes, consider converting it to a vector (SVG) format!")]),e._v(" "),a("p",[e._v('If the image asset contains text, stop and reconsider. Text in images is not selectable, searchable, or "zoomable". If you need to convey a custom look (for branding or other reasons), use a web font instead.')]),e._v(" "),e._m(16),e._v(" "),a("p",[e._v("JPEG uses a combination of lossy and lossless optimization to reduce file-size of the image asset. Try several JPEG quality levels to find the best quality vs. file-size tradeoff for your asset.")]),e._v(" "),a("p",[e._v("Finally, once you've determined the optimal image format and its settings for each of your assets, consider adding an additional variant encoded in WebP and JPEG XR. Both of these formats are new, and unfortunately are not (yet) universally supported by all browsers, but they can nonetheless provide significant savings for newer clients - for example, on average, WebP delivers a 30% file-size decrease over a comparable JPEG image.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"image-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-optimization","aria-hidden":"true"}},[this._v("#")]),this._v(" Image Optimization")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"eliminating-and-replacing-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eliminating-and-replacing-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Eliminating and Replacing Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"vector-vs-raster-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vector-vs-raster-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Vector vs. Raster Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{display:"grid","grid-template-columns":"1fr 2fr 4fr","align-items":"center"}},[t("img",{attrs:{src:"/images/charizard.svg"}}),this._v(" "),t("img",{attrs:{src:"/images/charizard.svg"}}),this._v(" "),t("img",{attrs:{src:"/images/charizard.svg"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{display:"grid","grid-template-columns":"1fr 2fr 4fr","align-items":"center"}},[t("img",{staticStyle:{width:"100%"},attrs:{src:"/images/fall-retriver.jpeg"}}),this._v(" "),t("img",{staticStyle:{width:"100%"},attrs:{src:"/images/fall-retriver.jpeg"}}),this._v(" "),t("img",{staticStyle:{width:"100%"},attrs:{src:"/images/fall-retriver.jpeg"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("small",[this._v("Photo by "),t("a",{attrs:{href:"https://unsplash.com/@joshhild?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[this._v("Josh Hild")]),this._v(" on "),t("a",{attrs:{href:"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[this._v("Unsplash")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"optimizing-vector-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-vector-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Optimizing Vector Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"optimizing-raster-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-raster-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Optimizing Raster Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"high-resolution-screens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#high-resolution-screens","aria-hidden":"true"}},[this._v("#")]),this._v(" High Resolution Screens")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"lossless-vs-lossy-image-compression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lossless-vs-lossy-image-compression","aria-hidden":"true"}},[this._v("#")]),this._v(" Lossless vs Lossy Image Compression")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v('Image is processed with a "lossy" filter that eliminates some pixel data')]),this._v(" "),t("li",[this._v('Image is processed with a "lossless" filter that compresses the pixel data')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"raster-image-formats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raster-image-formats","aria-hidden":"true"}},[this._v("#")]),this._v(" Raster Image Formats")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("Abbreviation")]),e._v(" "),a("th",[e._v("Format")]),e._v(" "),a("th",[e._v("File extension(s)")]),e._v(" "),a("th",[e._v("Summary")]),e._v(" "),a("th",[e._v("Support")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("Good choice for both images and animated images due to high performance and royalty free image format. It offers much better compression than PNG or JPEG with support for higher color depths, animated frames, transparency etc. Note that when using AVIF, you should include fallbacks to formats with better browser support (i.e. using the "),t("code",[this._v("<picture>")]),this._v(" element).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Do you need animation? If so, GIF is a good universal choice.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Do you need to preserve fine detail with highest resolution? Use PNG.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Are you optimizing a photo, screenshot, or a similar image asset? Use JPEG.")])])}],!1,null,null,null);t.default=s.exports}}]);