(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{310:function(t,e,n){"use strict";n.r(e);var r=n(4),l=(n(34),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n().fetch();case 3:return r=e.sent,e.abrupt("return",{page:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("es",{year:"numeric",month:"long",day:"numeric"})}}}),o=n(33),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("section",{staticClass:"text-gray-900 body-font"},[n("div",{staticClass:"container px-5 mx-auto"},[n("h1",{staticClass:"text-left py-12 font-bold font-sans text-4xl"},[t._v("Blog")]),t._v(" "),n("div",{staticClass:"flex flex-wrap -m-4"},t._l(t.page,(function(e){return n("NuxtLink",{key:e.id,staticClass:"p-4 md:w-1/3",attrs:{to:{name:"blog-slug",params:{slug:e.slug}}}},[n("div",{staticClass:"\n              h-full\n              border-2 border-gray-200 border-opacity-60\n              rounded-lg\n              overflow-hidden\n            "},[n("NuxtImg",{staticClass:"lg:h-48 md:h-36 w-full object-cover object-center",attrs:{provider:"cloudinary",src:e.image,alt:"blog"}}),t._v(" "),n("div",{staticClass:"p-6"},[n("h2",{staticClass:"\n                  tracking-widest\n                  text-xs\n                  title-font\n                  font-medium\n                  text-gray-400\n                  mb-1\n                "},[t._v("\n                "+t._s(t.formatDate(e.createdAt))+"\n              ")]),t._v(" "),n("h1",{staticClass:"title-font text-lg font-medium text-gray-900 mb-3"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),n("p",{staticClass:"leading-relaxed mb-3"},[t._v("\n                "+t._s(e.description)+"\n              ")]),t._v(" "),n("div",{staticClass:"flex items-center flex-wrap"},[n("a",{staticClass:"inline-flex items-center md:mb-2 lg:mb-0"},[t._v("Leer más\n                  "),n("svg",{staticClass:"w-4 h-4 ml-2",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M5 12h14"}}),t._v(" "),n("path",{attrs:{d:"M12 5l7 7-7 7"}})])])])])],1)])})),1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);