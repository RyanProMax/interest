(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657],{5894:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(4942),i=n(4806),o=n(9552),s=n(7294),c=n(2212),a=n(9365),l=n(1217),u=(n(1223),n(237)),d=(n(6111),n(5893));function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=[{val:"Mini Cooper 3D \u6a21\u578b\u3002"},{val:"* \u57fa\u4e8e Three.js\u3002"}];function h(e){var t=e.isMobile,n=(0,s.useRef)(null),r=(0,s.useRef)(null),p=(0,s.useState)("default"),h=p[0],v=(p[1],(0,s.useState)(0)),_=v[0],w=v[1];return(0,s.useEffect)((function(){var e=Math.round(n.current.clientWidth),t=window.innerHeight-400;if(console.log("renderer.current: ",r.current),r.current)r.current.setSize(e,t),n.current.removeChild(n.current.childNodes[0]),n.current.appendChild(r.current.domElement);else{var i=new c.xsS;i.background=new c.Ilk(16777215);var o=new c.CP7({antialias:!0}),s=new c.cPb(75,e/t,.1,1e3);switch(h){case"inside":s.position.set(0,1.2,-.8),s.lookAt(0,1.2,1e3);break;default:s.position.set(-4,2,4)}var u=new c.Ox3(16747520,1);u.position.set(0,5,20),i.add(u),(new l.E).load("https://cloud.zhangyuyan.cn/model/mini_cooper_s/scene.gltf",(function(e){w(0);var t=1e4;e.scene.scale.set(t,t,t),e.scene.traverse((function(e){e.isMesh&&(e.material.emissive=e.material.color,e.material.emissiveMap=e.material.map)})),i.add(e.scene)}),(function(e){console.log("xhr: ",e),0!==e.total&&(console.log(e.loaded/e.total*100+"%"),w(Math.round(e.loaded/e.total*100)))}),(function(e){console.error("error: ",e)})),o.setSize(e,t),n.current.appendChild(o.domElement);var d=new a.z(s,o.domElement);o.setAnimationLoop((function(){switch(h){case"inside":break;default:d.update()}o.render(i,s)})),r.current=o}}),[h,_,t]),(0,d.jsxs)(u.Z,f(f({className:"interest-mini-cooper",title:"Mini Cooper",description:m},e),{},{children:[(0,d.jsx)("div",{ref:n,className:"interest-mini-cooper__content"}),_>0&&_<=100&&(0,d.jsxs)("div",{className:"interest-mini-cooper__loading",children:[(0,d.jsx)(o.Z,{}),(0,d.jsx)(i.default,{strokeColor:{"0%":"#108ee9","100%":"#87d068"},percent:_,className:"interest-mini-cooper__progress"})]})]}))}},237:function(e,t,n){"use strict";var r=n(4184),i=n.n(r),o=n(7294),s=n(5893);function c(e,t){var n=e.children,r=e.className,o=e.title,c=e.description,a=e.isMobile;return(0,s.jsxs)("div",{className:i()("app-content",{"app-content--mobile":a},r),ref:t,children:[o&&(0,s.jsx)("h1",{className:"app-content__title",children:o}),(0,s.jsx)("ul",{className:"app-content__description",children:c&&c.length&&c.map((function(e,t){var n=e.val,r=e.style;return(0,s.jsx)("li",{style:r,className:"app-content__description-item",children:n},t)}))}),n]})}t.Z=(0,o.forwardRef)(c)},7957:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/mini-cooper",function(){return n(5894)}])}},function(e){e.O(0,[737,483,676,453,614,774,888,179],(function(){return t=7957,e(e.s=t);var t}));var t=e.O();_N_E=t}]);