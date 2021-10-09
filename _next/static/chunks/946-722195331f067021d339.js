(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{4391:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(1413),n=r(7294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},a=r(6445),s=function(e,t){return n.createElement(a.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:o}))};s.displayName="UploadOutlined";var c=n.forwardRef(s)},3911:function(e,t){var r;!function(i,n,o,a){"use strict";var s={URL:i.URL||i.webkitURL||i.mozURL||i.msURL,getUserMedia:function(){var e=o.getUserMedia||o.webkitGetUserMedia||o.mozGetUserMedia||o.msGetUserMedia;return e?e.bind(o):e}(),requestAnimFrame:i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.oRequestAnimationFrame||i.msRequestAnimationFrame,requestTimeout:function(e,t){if(e=e||s.noop,t=t||0,!s.requestAnimFrame)return setTimeout(e,t);var r=(new Date).getTime(),i=new Object,n=s.requestAnimFrame;return i.value=n((function o(){(new Date).getTime()-r>=t?e.call():i.value=n(o)})),i},Blob:i.Blob||i.BlobBuilder||i.WebKitBlobBuilder||i.MozBlobBuilder||i.MSBlobBuilder,btoa:function(){var e=i.btoa||function(e){for(var t="",r=0,i=e.length,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=void 0,a=void 0,s=void 0,c=void 0,d=void 0,l=void 0,u=void 0;r<i;)c=(o=e.charCodeAt(r++))>>2,d=(3&o)<<4|(a=e.charCodeAt(r++))>>4,l=(15&a)<<2|(s=e.charCodeAt(r++))>>6,u=63&s,isNaN(a)?l=u=64:isNaN(s)&&(u=64),t=t+n.charAt(c)+n.charAt(d)+n.charAt(l)+n.charAt(u);return t};return e?e.bind(i):s.noop}(),isObject:function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},isEmptyObject:function(e){return s.isObject(e)&&!Object.keys(e).length},isArray:function(e){return e&&Array.isArray(e)},isFunction:function(e){return e&&"function"===typeof e},isElement:function(e){return e&&1===e.nodeType},isString:function(e){return"string"===typeof e||"[object String]"===Object.prototype.toString.call(e)},isSupported:{canvas:function(){var e=n.createElement("canvas");return e&&e.getContext&&e.getContext("2d")},webworkers:function(){return i.Worker},blob:function(){return s.Blob},Uint8Array:function(){return i.Uint8Array},Uint32Array:function(){return i.Uint32Array},videoCodecs:function(){var e=n.createElement("video"),t={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{e&&e.canPlayType&&(t.mp4=""!==e.canPlayType('video/mp4; codecs="mp4v.20.8"'),t.h264=""!==(e.canPlayType('video/mp4; codecs="avc1.42E01E"')||e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')),t.ogv=""!==e.canPlayType('video/ogg; codecs="theora"'),t.ogg=""!==e.canPlayType('video/ogg; codecs="theora"'),t.webm=-1!==e.canPlayType('video/webm; codecs="vp8, vorbis"'))}catch(r){}return t}()},noop:function(){},each:function(e,t){var r=void 0,i=void 0;if(s.isArray(e))for(r=-1,i=e.length;++r<i&&!1!==t(r,e[r]););else if(s.isObject(e))for(r in e)if(e.hasOwnProperty(r)&&!1===t(r,e[r]))break},mergeOptions:function(e,t){if(s.isObject(e)&&s.isObject(t)&&Object.keys){var r={};return s.each(e,(function(t,i){r[t]=e[t]})),s.each(t,(function(i,n){var o=t[i];s.isObject(o)&&e[i]?r[i]=s.mergeOptions(e[i],o):r[i]=o})),r}},setCSSAttr:function(e,t,r){s.isElement(e)&&(s.isString(t)&&s.isString(r)?e.style[t]=r:s.isObject(t)&&s.each(t,(function(t,r){e.style[t]=r})))},removeElement:function(e){s.isElement(e)&&e.parentNode&&e.parentNode.removeChild(e)},createWebWorker:function(e){if(!s.isString(e))return{};try{var t=new s.Blob([e],{type:"text/javascript"}),r=s.URL.createObjectURL(t);return{objectUrl:r,worker:new Worker(r)}}catch(i){return""+i}},getExtension:function(e){return e.substr(e.lastIndexOf(".")+1,e.length)},getFontSize:function(){var e=arguments.length>0&&arguments[0]!==a?arguments[0]:{};if(!n.body||!1===e.resizeFont)return e.fontSize;var t=e.text,r=e.gifWidth,i=parseInt(e.fontSize,10),o=parseInt(e.minFontSize,10),s=n.createElement("div"),c=n.createElement("span");for(s.setAttribute("width",r),s.appendChild(c),c.innerHTML=t,c.style.fontSize=i+"px",c.style.textIndent="-9999px",c.style.visibility="hidden",n.body.appendChild(c);c.offsetWidth>r&&i>=o;)c.style.fontSize=--i+"px";return n.body.removeChild(c),i+"px"},webWorkerError:!1},c=Object.freeze({default:s}),d={validate:function(e){e=s.isObject(e)?e:{};var t={};return s.each(d.validators,(function(r,i){var n=i.errorCode;if(!e[n]&&!i.condition)return(t=i).error=!0,!1})),delete t.condition,t},isValid:function(e){var t=!0!==d.validate(e).error;return t},validators:[{condition:s.isFunction(s.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:s.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:s.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:s.isFunction(s.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:s.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:s.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:s.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},l=Object.freeze({default:d}),u=function(){},f={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:u,completeCallback:u,saveRenderingContexts:!1,savedRenderingContexts:[],crossOrigin:"Anonymous"},m=Object.freeze({default:f});function g(){return d.isValid()}function h(){var e,t,r,i,n,o=256,a=499,s=491,c=487,d=503,l=3*d,u=o-1,f=4,m=100,g=16,h=1<<g,p=10,v=10,b=h>>v,w=h<<p-v,y=o>>3,C=6,S=1<<C,k=y*S,x=30,F=10,E=1<<F,O=8,W=1<<O,A=F+O,U=1<<A,R=[],M=[],T=[],I=[];function V(e,a,s){var c,d;for(t=e,r=a,i=s,n=new Array(o),c=0;c<o;c++)n[c]=new Array(4),(d=n[c])[0]=d[1]=d[2]=(c<<f+8)/o|0,T[c]=h/o|0,M[c]=0}function j(){for(var e=[],t=new Array(o),r=0;r<o;r++)t[n[r][3]]=r;for(var i=0,a=0;a<o;a++){var s=t[a];e[i++]=n[s][0],e[i++]=n[s][1],e[i++]=n[s][2]}return e}function z(){var e,t,r,i,a,s,c,d;for(c=0,d=0,e=0;e<o;e++){for(r=e,i=(a=n[e])[1],t=e+1;t<o;t++)(s=n[t])[1]<i&&(r=t,i=s[1]);if(s=n[r],e!=r&&(t=s[0],s[0]=a[0],a[0]=t,t=s[1],s[1]=a[1],a[1]=t,t=s[2],s[2]=a[2],a[2]=t,t=s[3],s[3]=a[3],a[3]=t),i!=c){for(R[c]=d+e>>1,t=c+1;t<i;t++)R[t]=e;c=i,d=e}}for(R[c]=d+u>>1,t=c+1;t<256;t++)R[t]=u}function H(){var n,o,u,g,h,p,v,b,w,y,S,F,O,A;for(r<l&&(i=1),e=30+(i-1)/3,F=t,O=0,A=r,y=(S=r/(3*i))/m|0,b=E,(v=(p=k)>>C)<=1&&(v=0),n=0;n<v;n++)I[n]=b*((v*v-n*n)*W/(v*v));for(w=r<l?3:r%a!==0?3*a:r%s!==0?3*s:r%c!==0?3*c:3*d,n=0;n<S;)if(D(b,o=G(u=(255&F[O+0])<<f,g=(255&F[O+1])<<f,h=(255&F[O+2])<<f),u,g,h),0!==v&&N(v,o,u,g,h),(O+=w)>=A&&(O-=r),0===y&&(y=1),++n%y===0)for(b-=b/e,(v=(p-=p/x)>>C)<=1&&(v=0),o=0;o<v;o++)I[o]=b*((v*v-o*o)*W/(v*v))}function L(e,t,r){var i,a,s,c,d,l,u;for(d=1e3,u=-1,a=(i=R[t])-1;i<o||a>=0;)i<o&&((s=(l=n[i])[1]-t)>=d?i=o:(i++,s<0&&(s=-s),(c=l[0]-e)<0&&(c=-c),(s+=c)<d&&((c=l[2]-r)<0&&(c=-c),(s+=c)<d&&(d=s,u=l[3])))),a>=0&&((s=t-(l=n[a])[1])>=d?a=-1:(a--,s<0&&(s=-s),(c=l[0]-e)<0&&(c=-c),(s+=c)<d&&((c=l[2]-r)<0&&(c=-c),(s+=c)<d&&(d=s,u=l[3]))));return u}function B(){return H(),P(),z(),j()}function P(){var e;for(e=0;e<o;e++)n[e][0]>>=f,n[e][1]>>=f,n[e][2]>>=f,n[e][3]=e}function N(e,t,r,i,a){var s,c,d,l,u,f,m;for((d=t-e)<-1&&(d=-1),(l=t+e)>o&&(l=o),s=t+1,c=t-1,f=1;s<l||c>d;){if(u=I[f++],s<l){m=n[s++];try{m[0]-=u*(m[0]-r)/U|0,m[1]-=u*(m[1]-i)/U|0,m[2]-=u*(m[2]-a)/U|0}catch(g){}}if(c>d){m=n[c--];try{m[0]-=u*(m[0]-r)/U|0,m[1]-=u*(m[1]-i)/U|0,m[2]-=u*(m[2]-a)/U|0}catch(g){}}}}function D(e,t,r,i,o){var a=n[t],s=e/E;a[0]-=s*(a[0]-r)|0,a[1]-=s*(a[1]-i)|0,a[2]-=s*(a[2]-o)|0}function G(e,t,r){var i,a,s,c,d,l,u,m,h,y;for(h=m=~(1<<31),u=l=-1,i=0;i<o;i++)(a=(y=n[i])[0]-e)<0&&(a=-a),(s=y[1]-t)<0&&(s=-s),a+=s,(s=y[2]-r)<0&&(s=-s),(a+=s)<m&&(m=a,l=i),(c=a-(M[i]>>g-f))<h&&(h=c,u=i),d=T[i]>>v,T[i]-=d,M[i]+=d<<p;return T[l]+=b,M[l]-=w,u}V.apply(this,arguments);var q={};return q.map=L,q.process=B,q}function p(){try{this.onmessage=function(t){var r,i=t.data||{};i.gifshot&&(r=e.run(i),postMessage(r))}}catch(t){}var e={dataToRGB:function(e,t,r){for(var i=t*r*4,n=0,o=[];n<i;)o.push(e[n++]),o.push(e[n++]),o.push(e[n++]),n++;return o},componentizedPaletteToArray:function(e){e=e||[];for(var t=[],r=0;r<e.length;r+=3){var i=e[r],n=e[r+1],o=e[r+2];t.push(i<<16|n<<8|o)}return t},processFrameWithQuantizer:function(e,t,r,i){for(var n=this.dataToRGB(e,t,r),o=new h(n,n.length,i),a=o.process(),s=new Uint32Array(this.componentizedPaletteToArray(a)),c=t*r,d=new Uint8Array(c),l=0,u=0;u<c;u++){var f=n[l++],m=n[l++],g=n[l++];d[u]=o.map(f,m,g)}return{pixels:d,palette:s}},run:function(e){var t=e=e||{},r=t.height,i=(t.palette,t.sampleInterval),n=t.width,o=e.data;return this.processFrameWithQuantizer(o,n,r,i)}};return e}function v(e,t,r,i){var n=0,o=(i=i===a?{}:i).loop===a?null:i.loop,s=i.palette===a?null:i.palette;if(t<=0||r<=0||t>65535||r>65535)throw"Width/Height invalid.";e[n++]=71,e[n++]=73,e[n++]=70,e[n++]=56,e[n++]=57,e[n++]=97;if(e[n++]=255&t,e[n++]=t>>8&255,e[n++]=255&r,e[n++]=r>>8&255,e[n++]=0|(null!==s?128:0),e[n++]=0,e[n++]=0,null!==o){if(o<0||o>65535)throw"Loop count invalid.";e[n++]=33,e[n++]=255,e[n++]=11,e[n++]=78,e[n++]=69,e[n++]=84,e[n++]=83,e[n++]=67,e[n++]=65,e[n++]=80,e[n++]=69,e[n++]=50,e[n++]=46,e[n++]=48,e[n++]=3,e[n++]=1,e[n++]=255&o,e[n++]=o>>8&255,e[n++]=0}var c=!1;this.addFrame=function(t,r,i,o,d,l){if(!0===c&&(--n,c=!1),l=l===a?{}:l,t<0||r<0||t>65535||r>65535)throw"x/y invalid.";if(i<=0||o<=0||i>65535||o>65535)throw"Width/Height invalid.";if(d.length<i*o)throw"Not enough pixels for the frame size.";var u=!0,f=l.palette;if(f!==a&&null!==f||(u=!1,f=s),f===a||null===f)throw"Must supply either a local or global palette.";for(var m=function(e){var t=e.length;if(t<2||t>256||t&t-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return t}(f),g=0;m>>=1;)++g;m=1<<g;var h=l.delay===a?0:l.delay,p=l.disposal===a?0:l.disposal;if(p<0||p>3)throw"Disposal out of range.";var v=!1,b=0;if(l.transparent!==a&&null!==l.transparent&&(v=!0,(b=l.transparent)<0||b>=m))throw"Transparent color index.";if((0!==p||v||0!==h)&&(e[n++]=33,e[n++]=249,e[n++]=4,e[n++]=p<<2|(!0===v?1:0),e[n++]=255&h,e[n++]=h>>8&255,e[n++]=b,e[n++]=0),e[n++]=44,e[n++]=255&t,e[n++]=t>>8&255,e[n++]=255&r,e[n++]=r>>8&255,e[n++]=255&i,e[n++]=i>>8&255,e[n++]=255&o,e[n++]=o>>8&255,e[n++]=!0===u?128|g-1:0,!0===u)for(var w=0,y=f.length;w<y;++w){var C=f[w];e[n++]=C>>16&255,e[n++]=C>>8&255,e[n++]=255&C}n=function(e,t,r,i){e[t++]=r;var n=t++,o=1<<r,s=o-1,c=o+1,d=c+1,l=r+1,u=0,f=0;function m(r){for(;u>=r;)e[t++]=255&f,f>>=8,u-=8,t===n+256&&(e[n]=255,n=t++)}function g(e){f|=e<<u,u+=l,m(8)}var h=i[0]&s,p={};g(o);for(var v=1,b=i.length;v<b;++v){var w=i[v]&s,y=h<<8|w,C=p[y];if(C===a){for(f|=h<<u,u+=l;u>=8;)e[t++]=255&f,f>>=8,u-=8,t===n+256&&(e[n]=255,n=t++);4096===d?(g(o),d=c+1,l=r+1,p={}):(d>=1<<l&&++l,p[y]=d++),h=w}else h=C}g(h),g(c),m(1),n+1===t?e[n]=0:(e[n]=t-n-1,e[t++]=0);return t}(e,n,g<2?2:g,d)},this.end=function(){return!1===c&&(e[n++]=59,c=!0),n}}var b=function(){},w=function(e){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=b,this.onRenderProgressCallback=b,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=e,this.initializeWebWorkers(e)};function y(e,t){e.getBase64GIF((function(e){t({error:!1,errorCode:"",errorMsg:"",image:e})}))}w.prototype={workerMethods:p(),initializeWebWorkers:function(e){var t,r=h.toString()+"("+p.toString()+"());",i=void 0,o=void 0,a=void 0,c=-1,d="";for(t=e.numWorkers;++c<t;)i=s.createWebWorker(r),s.isObject(i)?(o=i.objectUrl,a=i.worker,this.workers.push({worker:a,objectUrl:o}),this.availableWorkers.push(a)):(d=i,s.webWorkerError=!!i);this.workerError=d,this.canvas=n.createElement("canvas"),this.canvas.width=e.gifWidth,this.canvas.height=e.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(e){this.availableWorkers.push(e)},byteMap:function(){for(var e=[],t=0;t<256;t++)e[t]=String.fromCharCode(t);return e}(),bufferToString:function(e){for(var t=e.length,r="",i=-1;++i<t;)r+=this.byteMap[e[i]];return r},onFrameFinished:function(e){var t=this,r=t.frames,i=!!(t.options.images||[]).length,n=r.every((function(e){return!e.beingProcessed&&e.done}));t.numRenderedFrames++,i&&e(t.numRenderedFrames/r.length),t.onRenderProgressCallback(.75*t.numRenderedFrames/r.length),n?t.generatingGIF||t.generateGIF(r,t.onRenderCompleteCallback):s.requestTimeout((function(){t.processNextFrame()}),1)},processFrame:function(e){var t=this,r=(this.options,this.options),i=r.progressCallback,n=r.sampleInterval,o=this.frames,s=void 0,c=void 0,d=function(){var e=arguments.length>0&&arguments[0]!==a?arguments[0]:{},r=e.data;delete s.data,s.pixels=Array.prototype.slice.call(r.pixels),s.palette=Array.prototype.slice.call(r.palette),s.done=!0,s.beingProcessed=!1,t.freeWorker(c),t.onFrameFinished(i)};(s=o[e]).beingProcessed||s.done?this.onFrameFinished():(s.sampleInterval=n,s.beingProcessed=!0,s.gifshot=!0,(c=this.getWorker())?(c.onmessage=d,c.postMessage(s)):d({data:t.workerMethods.run(s)}))},startRendering:function(e){this.onRenderCompleteCallback=e;for(var t=0;t<this.options.numWorkers&&t<this.frames.length;t++)this.processFrame(t)},processNextFrame:function(){for(var e=-1,t=0;t<this.frames.length;t++){var r=this.frames[t];if(!r.done&&!r.beingProcessed){e=t;break}}e>=0&&this.processFrame(e)},generateGIF:function(e,t){var r=[],i={loop:this.repeat},n=this.options,o=n.interval,a=n.frameDuration,c=!!n.images.length,d=n.gifHeight,l=n.gifWidth,u=new v(r,l,d,i),f=this.onRenderProgressCallback,m=c?100*o:0,g=void 0;this.generatingGIF=!0,s.each(e,(function(t,r){var i=r.palette;f(.75+.25*r.position*1/e.length);for(var n=0;n<a;n++)u.addFrame(0,0,l,d,r.pixels,{palette:i,delay:m})})),u.end(),f(1),this.frames=[],this.generatingGIF=!1,s.isFunction(t)&&(g=this.bufferToString(r),t("data:image/gif;base64,"+s.btoa(g)))},setRepeat:function(e){this.repeat=e},addFrame:function(e,t){t=s.isObject(t)?t:{};var r=this,i=r.ctx,n=r.options,o=n.gifWidth,a=n.gifHeight,c=s.getFontSize(t),d=t,l=d.filter,u=d.fontColor,f=d.fontFamily,m=d.fontWeight,g=(d.gifHeight,d.gifWidth,d.text),h=d.textAlign,p=d.textBaseline,v=t.textXCoordinate?t.textXCoordinate:"left"===h?1:"right"===h?o:o/2,b=t.textYCoordinate?t.textYCoordinate:"top"===p?1:"center"===p?a/2:a,w=m+" "+c+" "+f,y=void 0;try{i.filter=l,i.drawImage(e,0,0,o,a),g&&(i.font=w,i.fillStyle=u,i.textAlign=h,i.textBaseline=p,i.fillText(g,v,b)),y=i.getImageData(0,0,o,a),r.addFrameImageData(y)}catch(C){return""+C}},addFrameImageData:function(){var e=arguments.length>0&&arguments[0]!==a?arguments[0]:{},t=this.frames,r=e.data;this.frames.push({data:r,width:e.width,height:e.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:t.length})},onRenderProgress:function(e){this.onRenderProgressCallback=e},isRendering:function(){return this.generatingGIF},getBase64GIF:function(e){var t=this;t.startRendering((function(r){t.destroyWorkers(),s.requestTimeout((function(){e(r)}),0)}))},destroyWorkers:function(){if(!this.workerError){var e=this.workers;s.each(e,(function(e,t){var r=t.worker,i=t.objectUrl;r.terminate(),s.URL.revokeObjectURL(i)}))}}};var C=function(){},S=function(){var e=arguments.length>0&&arguments[0]!==a?arguments[0]:{},t=arguments[1];t=s.isFunction(t)?t:C;var r=n.createElement("canvas"),i=void 0,o=e.images,c=!!o.length,d=e.cameraStream,l=e.crop,u=e.filter,f=e.fontColor,m=e.fontFamily,g=e.fontWeight,h=e.keepCameraOn,p=(e.numWorkers,e.progressCallback),v=e.saveRenderingContexts,b=e.savedRenderingContexts,y=e.text,S=e.textAlign,k=e.textBaseline,x=e.videoElement,F=e.videoHeight,E=e.videoWidth,O=e.webcamVideoElement,W=Number(e.gifWidth),A=Number(e.gifHeight),U=Number(e.interval),R=(Number(e.sampleInterval),c?0:1e3*U),M=[],T=b.length?b.length:e.numFrames,I=T,V=new w(e),j=s.getFontSize(e),z=e.textXCoordinate?e.textXCoordinate:"left"===S?1:"right"===S?W:W/2,H=e.textYCoordinate?e.textYCoordinate:"top"===k?1:"center"===k?A/2:A,L=g+" "+j+" "+m,B=l?Math.floor(l.scaledWidth/2):0,P=l?E-l.scaledWidth:0,N=l?Math.floor(l.scaledHeight/2):0,D=l?F-l.scaledHeight:0,G=function e(){var r=I-1;function n(){var n;v&&M.push(i.getImageData(0,0,W,A)),y&&(i.font=L,i.fillStyle=f,i.textAlign=S,i.textBaseline=k,i.fillText(y,z,H)),n=i.getImageData(0,0,W,A),V.addFrameImageData(n),p((T-(I=r))/T),r>0&&s.requestTimeout(e,R),I||V.getBase64GIF((function(e){t({error:!1,errorCode:"",errorMsg:"",image:e,cameraStream:d,videoElement:x,webcamVideoElement:O,savedRenderingContexts:M,keepCameraOn:h})}))}b.length?(i.putImageData(b[T-I],0,0),n()):function e(){try{P>E&&(P=E),D>F&&(D=F),B<0&&(B=0),N<0&&(N=0),i.filter=u,i.drawImage(x,B,N,P,D,0,0,W,A),n()}catch(t){if("NS_ERROR_NOT_AVAILABLE"!==t.name)throw t;s.requestTimeout(e,100)}}()};T=T!==a?T:10,U=U!==a?U:.1,r.width=W,r.height=A,i=r.getContext("2d"),function e(){b.length||0!==x.currentTime?G():s.requestTimeout(e,100)}()},k=function(){var e=arguments.length>0&&arguments[0]!==a?arguments[0]:{},t=e.videoWidth,r=e.videoHeight,i=e.gifWidth,n=e.gifHeight,o={width:0,height:0,scaledWidth:0,scaledHeight:0};return t>r?(o.width=Math.round(t*(n/r))-i,o.scaledWidth=Math.round(o.width*(r/n))):(o.height=Math.round(r*(i/t))-n,o.scaledHeight=Math.round(o.height*(t/i))),o},x={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function e(t){e.attempts=e.attempts||0;var r=t.cameraStream,i=t.completedCallback,n=t.videoElement;n&&(n.videoWidth>0&&n.videoHeight>0?(n.removeEventListener("loadeddata",x.findVideoSize),i({videoElement:n,cameraStream:r,videoWidth:n.videoWidth,videoHeight:n.videoHeight})):e.attempts<10?(e.attempts+=1,s.requestTimeout((function(){x.findVideoSize(t)}),400)):i({videoElement:n,cameraStream:r,videoWidth:x.defaultVideoDimensions.width,videoHeight:x.defaultVideoDimensions.height}))},onStreamingTimeout:function(e){s.isFunction(e)&&e({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}})},stream:function(e){var t=s.isArray(e.existingVideo)?e.existingVideo[0]:e.existingVideo,r=e.cameraStream,i=e.completedCallback,n=e.streamedCallback,o=e.videoElement;if(s.isFunction(n)&&n(),t){if(s.isString(t))o.src=t,o.innerHTML='<source src="'+t+'" type="video/'+s.getExtension(t)+'" />';else if(t instanceof Blob){try{o.src=s.URL.createObjectURL(t)}catch(a){}o.innerHTML='<source src="'+t+'" type="'+t.type+'" />'}}else if(o.mozSrcObject)o.mozSrcObject=r;else if(s.URL)try{o.srcObject=r,o.src=s.URL.createObjectURL(r)}catch(a){o.srcObject=r}o.play(),s.requestTimeout((function e(){e.count=e.count||0,!0===x.loadedData?(x.findVideoSize({videoElement:o,cameraStream:r,completedCallback:i}),x.loadedData=!1):(e.count+=1)>10?x.findVideoSize({videoElement:o,cameraStream:r,completedCallback:i}):e()}),0)},startStreaming:function(e){var t=s.isFunction(e.error)?e.error:s.noop,r=s.isFunction(e.streamed)?e.streamed:s.noop,i=s.isFunction(e.completed)?e.completed:s.noop,o=e.crossOrigin,a=e.existingVideo,c=e.lastCameraStream,d=e.options,l=e.webcamVideoElement,u=s.isElement(a)?a:l||n.createElement("video");o&&(u.crossOrigin=d.crossOrigin),u.autoplay=!0,u.loop=!0,u.muted=!0,u.addEventListener("loadeddata",(function(e){x.loadedData=!0,d.offset&&(u.currentTime=d.offset)})),a?x.stream({videoElement:u,existingVideo:a,completedCallback:i}):c?x.stream({videoElement:u,cameraStream:c,streamedCallback:r,completedCallback:i}):s.getUserMedia({video:!0},(function(e){x.stream({videoElement:u,cameraStream:e,streamedCallback:r,completedCallback:i})}),t)},startVideoStreaming:function(e){var t=arguments.length>1&&arguments[1]!==a?arguments[1]:{},r=t.timeout!==a?t.timeout:0,i=t.callback,n=t.webcamVideoElement,o=void 0;r>0&&(o=s.requestTimeout((function(){x.onStreamingTimeout(i)}),1e4)),x.startStreaming({error:function(){i({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}})},streamed:function(){clearTimeout(o)},completed:function(){var t=arguments.length>0&&arguments[0]!==a?arguments[0]:{},r=t.cameraStream,i=t.videoElement,n=t.videoHeight,o=t.videoWidth;e({cameraStream:r,videoElement:i,videoHeight:n,videoWidth:o})},lastCameraStream:t.lastCameraStream,webcamVideoElement:n,crossOrigin:t.crossOrigin,options:t})},stopVideoStreaming:function(e){var t=e=s.isObject(e)?e:{},r=t.keepCameraOn,i=t.videoElement,n=t.webcamVideoElement,o=e.cameraStream||{},a=o.getTracks&&o.getTracks()||[],c=!!a.length,d=a[0];!r&&c&&s.isFunction(d.stop)&&d.stop(),s.isElement(i)&&!n&&(i.pause(),s.isFunction(s.URL.revokeObjectURL)&&!s.webWorkerError&&i.src&&s.URL.revokeObjectURL(i.src),s.removeElement(i))}};function F(e){e=s.isObject(e)?e:{},x.stopVideoStreaming(e)}function E(e,t){var r=e.options||{},i=r.images,o=r.video,a=Number(r.gifWidth),c=Number(r.gifHeight),d=(Number(r.numFrames),e.cameraStream),l=e.videoElement,u=e.videoWidth,f=e.videoHeight,m=k({videoWidth:u,videoHeight:f,gifHeight:c,gifWidth:a}),g=t;r.crop=m,r.videoElement=l,r.videoWidth=u,r.videoHeight=f,r.cameraStream=d,s.isElement(l)&&(l.width=a+m.width,l.height=c+m.height,r.webcamVideoElement||(s.setCSSAttr(l,{position:"fixed",opacity:"0"}),n.body.appendChild(l)),l.play(),S(r,(function(e){i&&i.length||o&&o.length||F(e),g(e)})))}function O(e,t){if(t=s.isFunction(e)?e:t,e=s.isObject(e)?e:{},s.isFunction(t)){var r=s.mergeOptions(f,e)||{},i=e.cameraStream,o=r.images,c=o?o.length:0,l=r.video,u=r.webcamVideoElement;r=s.mergeOptions(r,{gifWidth:Math.floor(r.gifWidth),gifHeight:Math.floor(r.gifHeight)}),c?function(){var e=arguments.length>0&&arguments[0]!==a?arguments[0]:{},t=e.callback,r=e.images,i=e.options,o=e.imagesLength,c={getUserMedia:!0,"window.URL":!0},l=d.validate(c),u=[],f=0,m=void 0,g=void 0;if(l.error)return t(l);function h(){s.each(u,(function(e,t){t&&(t.text?g.addFrame(t.img,i,t.text):g.addFrame(t,i))})),y(g,t)}g=new w(i),s.each(r,(function(e,r){var a=r;r.src&&(a=a.src),s.isElement(a)?(i.crossOrigin&&(a.crossOrigin=i.crossOrigin),u[e]=a,(f+=1)===o&&h()):s.isString(a)&&(m=new Image,i.crossOrigin&&(m.crossOrigin=i.crossOrigin),function(i){r.text&&(i.text=r.text),i.onerror=function(e){var r=void 0;if(0===--o)return(r={}).error="None of the requested images was capable of being retrieved",t(r)},i.onload=function(t){r.text?u[e]={img:i,text:i.text}:u[e]=i,(f+=1)===o&&h(),s.removeElement(i)},i.src=a}(m),s.setCSSAttr(m,{position:"fixed",opacity:"0"}),n.body.appendChild(m))}))}({images:o,imagesLength:c,callback:t,options:r}):l?function(){var e=arguments.length>0&&arguments[0]!==a?arguments[0]:{},t=e.callback,r=e.existingVideo,i=e.options,n={getUserMedia:!0,"window.URL":!0},o=d.validate(n),c=void 0,l=void 0;if(o.error)return t(o);if(s.isElement(r)&&r.src){if(l=r.src,c=s.getExtension(l),!s.isSupported.videoCodecs[c])return t(d.messages.videoCodecs)}else s.isArray(r)&&s.each(r,(function(e,t){if(c=t instanceof Blob?t.type.substr(t.type.lastIndexOf("/")+1,t.length):t.substr(t.lastIndexOf(".")+1,t.length),s.isSupported.videoCodecs[c])return r=t,!1}));x.startStreaming({completed:function(e){e.options=i||{},E(e,t)},existingVideo:r,crossOrigin:i.crossOrigin,options:i})}({existingVideo:l,callback:t,options:r}):function(){var e=arguments.length>0&&arguments[0]!==a?arguments[0]:{},t=e.callback,r=e.lastCameraStream,i=e.options,n=e.webcamVideoElement;if(!g())return t(d.validate());i.savedRenderingContexts.length?S(i,(function(e){t(e)})):x.startVideoStreaming((function(){var e=arguments.length>0&&arguments[0]!==a?arguments[0]:{};e.options=i||{},E(e,t)}),{lastCameraStream:r,callback:t,webcamVideoElement:n,crossOrigin:i.crossOrigin})}({lastCameraStream:i,callback:t,webcamVideoElement:u,options:r})}}var W={utils:c,error:l,defaultOptions:m,createGIF:O,takeSnapShot:function(e,t){if(t=s.isFunction(e)?e:t,e=s.isObject(e)?e:{},s.isFunction(t)){var r=s.mergeOptions(f,e);O(s.mergeOptions(r,{interval:.1,numFrames:1,gifWidth:Math.floor(r.gifWidth),gifHeight:Math.floor(r.gifHeight)}),t)}},stopVideoStreaming:F,isSupported:function(){return d.isValid()},isWebCamGIFSupported:g,isExistingVideoGIFSupported:function(e){var t=!1;if(s.isArray(e)&&e.length){if(s.each(e,(function(e,r){s.isSupported.videoCodecs[r]&&(t=!0)})),!t)return!1}else if(s.isString(e)&&e.length&&!s.isSupported.videoCodecs[e])return!1;return d.isValid({getUserMedia:!0})},isExistingImagesGIFSupported:function(){return d.isValid({getUserMedia:!0})},VERSION:"0.4.5"};(r=function(){return W}.apply(t,[]))===a||(e.exports=r)}("undefined"!==typeof window?window:{},"undefined"!==typeof document?document:{createElement:function(){}},"undefined"!==typeof window?window.navigator:{})}}]);