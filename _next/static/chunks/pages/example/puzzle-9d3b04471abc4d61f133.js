(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[709],{9351:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(5400),i=r(2809),a=r(7538),o=r(318),l=r(7294),s=r(237),u=r(8465),c=r(1187),f=r(7085),h=r(9101);function d(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw a}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e){return new Promise((function(t){var r=document.createElement("canvas"),n=r.getContext("2d");r.width=1e3,r.height=1e3;var i=new Image;i.src=e,i.onload=function(){var a=r.height/r.height;i.height*=a,i.width*=a,n.drawImage(i,0,0,r.width,r.height);for(var o=n.getImageData(0,0,r.width,r.height).data,l=0,s=0,u=0,c=0,f=0;f<o.length;f+=4)l+=o[f],s+=o[f+1],u+=o[f+2],c+=o[f+3];t({rgba:[Math.round(l/(o.length/4)),Math.round(s/(o.length/4)),Math.round(u/(o.length/4)),Math.round(c/(o.length/4))],url:e})}}))}function m(e){return window.URL.createObjectURL(e)}var v=r(5893);function y(e){var t=e.onChange,r=(0,l.useState)(!1),n=r[0],i=r[1],a=(0,l.useState)(""),o=a[0],s=a[1],d=(0,v.jsxs)("div",{children:[n?(0,v.jsx)(f.Z,{}):(0,v.jsx)(h.Z,{}),(0,v.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,v.jsx)(u.Z,{name:"avatar",listType:"picture-card",className:"interest-puzzle-picture",showUploadList:!1,onChange:function(e){if(!("image/jpeg"===e.file.type||"image/png"===e.file.type))return c.default.error("\u53ea\u652f\u6301\u56fe\u7247\u683c\u5f0f"),void e.fileList.pop();if("uploading"!==e.file.status){if("done"===e.file.status){var r=m(e.file.originFileObj);e.file.imageUrl=r,i(!1),s(r)}t(e)}else i(!0)},customRequest:function(e){e.onSuccess()},children:o?(0,v.jsx)("img",{src:o,alt:"avatar",style:{width:"100%"},onLoad:function(e){var t=e.target,r=t.width,n=t.height,i=t.classList;r>n?i.add("object-fit"):i.remove("object-fit")}}):d})}var b=r(6697),j=r(266),w=r(809),x=r.n(w);function O(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return r(e)}}))}var P=(0,v.jsxs)("div",{children:[(0,v.jsx)(h.Z,{}),(0,v.jsx)("div",{style:{marginTop:8},children:"Upload"})]});function S(e){var t=e.onChange,r=(0,l.useState)([]),n=r[0],i=r[1],a=(0,l.useState)(""),o=a[0],s=a[1],f=(0,l.useState)(""),h=f[0],d=f[1],p=function(){var e=(0,j.Z)(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,O(t.originFileObj);case 3:t.preview=e.sent;case 4:s(t.url||t.preview),d(t.name||t.url.substring(t.url.lastIndexOf("/")+1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Z,{customRequest:function(e){e.onSuccess()},listType:"picture-card",fileList:n,onPreview:p,onChange:function(e){var r=e.file,n=e.fileList;if(!("image/jpeg"===r.type||"image/png"===r.type))return c.default.error("\u53ea\u652f\u6301\u56fe\u7247\u683c\u5f0f"),void n.pop();n.forEach((function(e){e.blobURL=m(e.originFileObj)})),t({file:r,fileList:n}),i(n)},multiple:!0,children:P}),(0,v.jsx)(b.Z,{visible:!!o,title:h,footer:null,onCancel:function(){return s("")},children:(0,v.jsx)("img",{alt:"example",style:{width:"100%"},src:o})})]})}var Z=r(6155);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){return(0,v.jsx)(Z.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}var _=r(2777);function I(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw a}}}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t){var r=e.url,n=e.width,i=void 0===n?800:n,a=e.height,o=void 0===a?800:a,s=e.pixel,u=void 0===s?8:s,c=e.fileList,f=e.onFinish,h=(0,l.useRef)(null),p=(0,l.useRef)(null),m=(0,l.useRef)([]),y=(0,l.useRef)([]);return(0,l.useImperativeHandle)(t,(function(){return{changeVal:function(e){var t=h.current,r=t.width,n=t.height,i=t.toDataURL({width:r,height:n,left:0,top:0,format:"png"}),a=document.createElement("a");a.download=e,a.href=i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}})),(0,l.useEffect)((function(){var e=new _.fabric.Canvas("canvas",{selectable:!1,selection:!1,hoverCursor:"pointer",enableRetinaScaling:!1}),t=e.getContext("2d");h.current=e,p.current=t}),[]),(0,l.useEffect)((function(){var e=h.current,t=p.current,n=e.width,i=e.height,a=Math.floor(n/u),o=function(){for(var r=[],n=0;n<e.height;n+=u)for(var i=0;i<e.width;i+=u){var o=t.getImageData(i,n,u,u).data;r[n/u*a+i/u]=[];for(var s=0;s<o.length;s+=4)r[n/u*a+i/u].push([o[s],o[s+1],o[s+2],o[s+3]])}m.current=function(e){var t,r=[],n=d(e);try{for(n.s();!(t=n.n()).done;){var i,a=t.value,o=0,l=0,s=0,u=0,c=d(a);try{for(c.s();!(i=c.n()).done;){var f=i.value;o+=f[0],l+=f[1],s+=f[2],u+=f[3]}}catch(h){c.e(h)}finally{c.f()}r.push([Math.round(o/a.length),Math.round(l/a.length),Math.round(s/a.length),Math.round(u/a.length)])}}catch(h){n.e(h)}finally{n.f()}return r}(r),l()},l=function(){var t,r=m.current,n=y.current,i=[],o=I(r);try{for(o.s();!(t=o.n()).done;){for(var l=t.value,s=0,c=1/0,h=0;h<n.length;h++){var d=n[h].rgba,p=Math.pow(d[0]-l[0],2)+Math.pow(d[1]-l[1],2)+Math.pow(d[2]-l[2],2)+Math.pow(d[3]-l[3],2);Math.sqrt(p)<c&&(c=Math.sqrt(p),s=h)}i.push(n[s].url)}}catch(b){o.e(b)}finally{o.f()}for(var g=function(t){_.fabric.Image.fromURL(i[t],(function(r){var n=r.height>r.width?u/r.width:u/r.height;r.set({left:t%a*u,top:Math.floor(t/a)*u,originX:"center",scaleX:n,scaleY:n}),e.add(r)}))},v=0;v<i.length;v++)g(v);f()};(0,j.Z)(x().mark((function t(){var a;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],c.forEach((function(e){a.push(g(e.blobURL))})),t.next=4,Promise.all(a);case 4:y.current=t.sent,_.fabric.Image.fromURL(r,(function(t){var r=t.height>t.width?n/t.width:i/t.height;t.set({left:n/2,originX:"center",top:0,scaleX:r,scaleY:r,selectable:!1}),t.on("added",(function(e){setTimeout((function(){o()}),500)})),e.add(t)}));case 6:case"end":return t.stop()}}),t)})))()}),[r,c,u,f]),(0,v.jsx)("canvas",{id:"canvas",width:i,height:o})}var R=(0,l.forwardRef)(M),N=r(5592),k=r(924),U=r(2850),z=r(358);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var D=[{val:"\u6839\u636e\u7ec4\u5408\u7d20\u6750\u62fc\u63a5\u6210\u76ee\u6807\u56fe\u7247\u3002"},{val:"* \u753b\u5e03\u5c3a\u5bf8\u4e3a\u6700\u7ec8\u751f\u6210\u56fe\u7247\u7684\u5c3a\u5bf8\uff0c\u503c\u8d8a\u5927\u5219\u5904\u7406\u901f\u5ea6\u8d8a\u6162\u3002"},{val:"* \u62fc\u56fe\u5355\u5143\u4e3a\u7ec4\u5408\u7d20\u6750\u7684\u5c3a\u5bf8\uff0c\u503c\u8d8a\u5c0f\u5219\u5904\u7406\u901f\u5ea6\u8d8a\u6162\u3002"}];function T(e){var t=a.Z.useForm(),r=(0,o.Z)(t,1)[0],u=(0,l.useState)({}),c=u[0],f=u[1],h=(0,l.useState)(!1),d=h[0],p=h[1],g=(0,l.useRef)(null),m=(0,l.useState)(!1),b=m[0],j=m[1];if(e.isMobile)return(0,v.jsx)(z.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));var w=function(){g.current.changeVal(c.file.name)};return(0,v.jsx)(s.Z,{className:"interest-puzzle",title:"Puzzle",description:D,children:(0,v.jsxs)(a.Z,{name:"basic",form:r,initialValues:{size:3200,pixel:32},onFinish:function(e){f(e),p(!0),j(!0)},labelCol:{span:3},wrapperCol:{span:20,offset:1},children:[(0,v.jsx)(a.Z.Item,{valuePropName:"file",getValueFromEvent:function(e){return e&&e.file},label:"\u76ee\u6807\u56fe\u7247",name:"file",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u76ee\u6807\u56fe\u7247"}],children:(0,v.jsx)(y,{})}),(0,v.jsx)(a.Z.Item,{valuePropName:"fileList",getValueFromEvent:function(e){return e&&e.fileList},label:"\u7ec4\u5408\u7d20\u6750",name:"fileList",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ec4\u5408\u7d20\u6750"}],children:(0,v.jsx)(S,{})}),(0,v.jsx)(a.Z.Item,{label:"\u753b\u5e03\u5c3a\u5bf8",name:"size",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u753b\u5e03\u5c3a\u5bf8"}],children:(0,v.jsx)(L,{marks:{800:"800px",1600:"1600px",3200:"3200px",6400:"6400px"},min:800,max:6400,step:800})}),(0,v.jsx)(a.Z.Item,{label:"\u62fc\u56fe\u5355\u5143",name:"pixel",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u62fc\u56fe\u5355\u5143\u5c3a\u5bf8"}],children:(0,v.jsx)(L,{marks:{8:"8px",16:"16px",32:"32px",64:"64px"},min:8,max:64,step:8})}),(0,v.jsxs)(a.Z.Item,{wrapperCol:{span:20,offset:4},children:[(0,v.jsx)(n.default,{loading:b,icon:(0,v.jsx)(N.Z,{}),type:"primary",htmlType:"submit",children:"Generate"}),d&&!b&&(0,v.jsx)(n.default,{loading:b,onClick:w,icon:(0,v.jsx)(k.Z,{}),type:"primary",style:{marginLeft:20},children:"Export"}),d&&(0,v.jsx)(n.default,{onClick:function(){r.resetFields(),p(!1),j(!1)},icon:(0,v.jsx)(U.Z,{}),style:{marginLeft:20},children:"Reset"})]}),d&&(0,v.jsx)(a.Z.Item,{label:"\u9884\u89c8",style:{marginTop:50},children:(0,v.jsx)("div",{className:"interest-puzzle__canvas-wrapper",children:(0,v.jsx)(R,{ref:g,width:c.size,height:c.size,pixel:c.pixel,url:c.file.imageUrl,fileList:c.fileList,export:w,onFinish:function(){j(!1)}})})})]})})}},237:function(e,t,r){"use strict";var n=r(4806),i=r(9552),a=r(4184),o=r.n(a),l=r(7294),s=r(5893);function u(e,t){var r=e.children,a=e.className,u=e.title,c=e.description,f=e.isNarrow,h=(0,l.useState)(0),d=h[0],p=h[1],g=function(e){p(e)};return(0,l.useImperativeHandle)(t,(function(){return{handleProcess:g}})),(0,s.jsxs)("div",{className:o()("app-content",{"app-content--narrow":f},a),ref:t,children:[u&&(0,s.jsx)("h1",{className:"app-content__title",children:u}),(0,s.jsx)("ul",{className:"app-content__description",children:c&&c.length&&c.map((function(e,t){var r=e.val,n=e.style;return(0,s.jsx)("li",{style:n,className:"app-content__description-item",children:r},t)}))}),r,(0,s.jsxs)("div",{className:o()("interest-loading","interest-content-loading",{"interest-loading--hide":0===d||d>=100}),children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(n.default,{strokeColor:{"0%":"#108ee9","100%":"#87d068"},percent:d,className:"interest-loading__progress"})]})]})}t.Z=(0,l.forwardRef)(u)},358:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(6671),i=r(5893);function a(){return(0,i.jsx)(n.default,{image:n.default.PRESENTED_IMAGE_SIMPLE,description:"\u6682\u4e0d\u652f\u6301\u79fb\u52a8\u7aef\u4f7f\u7528",style:{marginTop:100}})}},277:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/puzzle",function(){return r(9351)}])},4960:function(){},6759:function(){},6272:function(){}},function(e){e.O(0,[498,676,806,552,400,829,29,398,774,888,179],(function(){return t=277,e(e.s=t);var t}));var t=e.O();_N_E=t}]);