(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[852],{5789:function(e,t,r){"use strict";t.Z=void 0;var n=r(8614).Col;t.Z=n},872:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(3038)),i=r(7294),c=n(r(7046));var u=function(){var e=(0,i.useState)({}),t=(0,a.default)(e,2),r=t[0],n=t[1];return(0,i.useEffect)((function(){var e=c.default.subscribe((function(e){n(e)}));return function(){return c.default.unsubscribe(e)}}),[]),r};t.default=u},8614:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Col",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var a=n(r(5855)),i=n(r(1977)),c={useBreakpoint:n(r(872)).default};t.default=c},5673:function(e,t,r){"use strict";t.Z=void 0;var n=r(8614).Row;t.Z=n},9681:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5673),a=r(5789),i=r(4942),c=r(1163),u=r(4184),s=r.n(u),o=r(5893);var l=function(e){var t=e.name,r=e.imgSrc,n=e.path,a=e.isMobile,i=(0,c.useRouter)();return(0,o.jsxs)("div",{className:"interest-card",onClick:function(){i.push(n)},children:[(0,o.jsx)("div",{className:s()("interest-card__image-wrapper",{"interest-card__image-wrapper--mobile":a}),children:(0,o.jsx)("img",{src:r,className:"interest-card__image",alt:t})}),(0,o.jsx)("span",{className:"interest-card__name",children:t})]})},f=r(1223);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t=e.isMobile,r=[{name:"Puzzle",imgSrc:"".concat(f.basePath,"/images/02.jpg"),path:"/example/puzzle"},{name:"String Video",imgSrc:"".concat(f.basePath,"/images/03.jpg"),path:"/example/string-video"},{name:"Generate GIF",imgSrc:"".concat(f.basePath,"/images/03.jpg"),path:"/example/generate-gif"},{name:"Mini Cooper",imgSrc:"".concat(f.basePath,"/images/04.png"),path:"/example/mini-cooper"}];return(0,o.jsx)("div",{className:"interest-example",children:(0,o.jsx)(n.Z,{gutter:[16,16],style:{maxWidth:1280,width:"100%"},children:r.map((function(e,r){return(0,o.jsx)(a.Z,{xs:24,md:12,lg:8,xl:6,children:(0,o.jsx)(l,d(d({},e),{},{isMobile:t}))},r)}))})})}},3772:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example",function(){return r(9681)}])}},function(e){e.O(0,[676,829,774,888,179],(function(){return t=3772,e(e.s=t);var t}));var t=e.O();_N_E=t}]);