(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94c300dc"],{"044b":function(t,e){function r(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&r(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},"0a06":function(t,e,r){"use strict";var n=r("2444"),o=r("c532"),i=r("f6b4"),a=r("5270");function s(t){this.defaults=t,this.interceptors={request:new i,response:new i}}s.prototype.request=function(t){"string"===typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),t=o.merge(n,{method:"get"},this.defaults,t),t.method=t.method.toLowerCase();var e=[a,void 0],r=Promise.resolve(t);this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});while(e.length)r=r.then(e.shift(),e.shift());return r},o.forEach(["delete","get","head","options"],function(t){s.prototype[t]=function(e,r){return this.request(o.merge(r||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){s.prototype[t]=function(e,r,n){return this.request(o.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=s},"0df6":function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"1d2b":function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},2444:function(t,e,r){"use strict";(function(e){var n=r("c532"),o=r("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function s(){var t;return"undefined"!==typeof XMLHttpRequest?t=r("b50d"):"undefined"!==typeof e&&(t=r("b50d")),t}var c={adapter:s(),transformRequest:[function(t,e){return o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(t){c.headers[t]={}}),n.forEach(["post","put","patch"],function(t){c.headers[t]=n.merge(i)}),t.exports=c}).call(this,r("4362"))},"2d83":function(t,e,r){"use strict";var n=r("387f");t.exports=function(t,e,r,o,i){var a=new Error(t);return n(a,e,r,o,i)}},"2e67":function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,r){"use strict";var n=r("c532");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(n.isURLSearchParams(e))i=e.toString();else{var a=[];n.forEach(e,function(t,e){null!==t&&"undefined"!==typeof t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))}))}),i=a.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},"387f":function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t}},3934:function(t,e,r){"use strict";var n=r("c532");t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},4362:function(t,e,r){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,n="/";e.cwd=function(){return n},e.chdir=function(e){t||(t=r("df7c")),n=t.resolve(e,n)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"467f":function(t,e,r){"use strict";var n=r("2d83");t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},5270:function(t,e,r){"use strict";var n=r("c532"),o=r("c401"),i=r("2e67"),a=r("2444"),s=r("d925"),c=r("e683");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){u(t),t.baseURL&&!s(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||a.adapter;return e(t).then(function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},"53af":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",[r("toolbar"),r("div",[r("router-view")],1),r("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[r("v-layout",{attrs:{row:"",wrap:"",center:""}},[r("v-flex",{attrs:{xs11:""}},[r("h1",{staticClass:"display-3"},[t._v("Refacciones ")])]),r("v-flex",{attrs:{xs11:"",lg11:""}},[r("v-text-field",{attrs:{label:"Find Product","single-line":"",solo:"","prepend-icon":"search"},model:{value:t.escrito,callback:function(e){t.escrito=e},expression:"escrito"}})],1),r("v-flex",{attrs:{xs1:"",lg1:""}},[r("v-btn",{attrs:{color:"white",flat:""},on:{click:t.enviar}},[t._v("buscar")])],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{lg12:"",xs12:""}},[r("v-data-iterator",{attrs:{items:t.items,search:t.escrito,"item-key":"key_ext","rows-per-page-items":t.rowsPerPageItems,row:"",wrap:"",pagination:t.pagination,"content-tag":"v-layout"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"item",fn:function(e){return r("v-flex",{attrs:{"text-xs-left":"",xs12:"",sm6:"",md4:"",lg4:""}},[r("v-card",[r("v-img",{attrs:{src:"https://www.eleconomista.com.mx/__export/1507847242640/sites/eleconomista/img/historico/shutterstock_84492967.jpg_1612941218.jpg",height:"150px"}}),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",[r("h1",[t._v(t._s(e.item.nombre))])]),r("div",[r("h1",[t._v(t._s(e.item.codigo))])]),r("div",[r("h2",[t._v("Description")])]),r("div",[t._v(t._s(e.item.descripcion))])])]),r("v-card-actions",[r("v-spacer"),r("Modalprod",{attrs:{Nombre:e.item.nombre,tipo:e.item.tipo,marca:e.item.marca,precio:e.item.precio,codigo:e.item.codigo}})],1)],1)],1)}}])})],1)],1)],1),r("v-container",[r("h1",[t._v(t._s(t.info))])]),r("foother")],1)])},o=[],i=(r("cadf"),r("551c"),r("097d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-toolbar",{attrs:{color:"grey darken-1",dark:"",app:""}},[r("v-toolbar-title",[r("router-link",{staticClass:"white--text",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[t._v("Reface")])],1),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-md-and-down"},[r("v-btn",{attrs:{flat:""}},[r("router-link",{staticClass:"white--text",attrs:{to:"/"}},[t._v("Inicio")])],1),r("v-btn",{attrs:{flat:""}},[r("router-link",{staticClass:"white--text",attrs:{to:"/"}},[t._v("Nosotros")])],1)],1),r("v-toolbar-items",[r("v-btn",{attrs:{flat:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r("router-link",{staticClass:"grey--text",attrs:{to:"/"}},[t._v("Iniciar Sesion")])],1)],1)],1)],1)}),a=[],s={name:"Frame",data:function(){return{drawer:!0}}},c=s,u=r("2877"),f=Object(u["a"])(c,i,a,!1,null,null,null);f.options.__file="Toolbar.vue";var l=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-dialog",{attrs:{persistent:"",width:"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-btn",{attrs:{slot:"activator",small:"",dark:""},on:{click:function(e){t.dialog=!0}},slot:"activator"},[t._v("Detalles")]),r("v-card",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){e.preventDefault(),t.onSubmit()},click:t.closeModal},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card-title",{staticClass:"headline black white--text",attrs:{"primary-title":""}},[t._v("Producto:  "+t._s(t.Nombre))]),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"","text-xs-center":""}},[r("v-card",[r("v-card-title",{staticClass:"headline blue darken-4 white--text",attrs:{"primary-title":""}},[t._v("Detalles")]),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:""}},[r("h4",[t._v("Tipo")])]),r("v-flex",{attrs:{xs6:""}},[t._v(t._s(t.tipo))]),r("v-flex",{attrs:{xs6:""}},[r("h4",[t._v("Precio")])]),r("v-flex",{attrs:{xs6:""}},[t._v(t._s(t.precio))]),r("v-flex",{attrs:{xs6:""}},[r("h4",[t._v("Marca")])]),r("v-flex",{attrs:{xs6:""}},[t._v(t._s(t.marca))])],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-btn",{staticClass:"error",attrs:{color:"white",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Cerrar")])],1)],1)],1)],1)],1)},d=[],h={name:"Modalprod",props:{tipo:String,Nombre:String,marca:String,precio:String,codigo:String},data:function(){return{usuario:null,info:null,dialog:!1}}},v=h,m=(r("e16f"),Object(u["a"])(v,p,d,!1,null,null,null));m.options.__file="Modalprod.vue";var g=m.exports,w=r("bc3a"),y=r.n(w),x=y.a.create({baseURL:"http://localhost:3000/"}),b={components:{toolbar:l,Modalprod:g},data:function(){return{escrito:null,info:null,id:null,rowsPerPageItems:[6,12,24],pagination:{rowsPerPage:6},items:[],errors:[],empty:[]}},methods:{},enviar:function(){var t=this;x.post("/products/search",[{name:"code",value:this.escrito}]).then(function(e){t.items=e.data,alert("sí")}).catch(function(e){t.items=e})},created:function(){var t=this;this.id=this.$route.params.id,x.get("/products/all").then(function(e){t.items=e.data}).catch(function(e){t.errors.push(e)})}},_=b,C=Object(u["a"])(_,n,o,!1,null,null,null);C.options.__file="Router.vue";e["default"]=C.exports},6504:function(t,e,r){},"7a77":function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},"7aac":function(t,e,r){"use strict";var n=r("c532");t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"8df4":function(t,e,r){"use strict";var n=r("7a77");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new n(t),e(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t,e=new o(function(e){t=e});return{token:e,cancel:t}},t.exports=o},"9fa6":function(t,e,r){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}function i(t){for(var e,r,i=String(t),a="",s=0,c=n;i.charAt(0|s)||(c="=",s%1);a+=c.charAt(63&e>>8-s%1*8)){if(r=i.charCodeAt(s+=.75),r>255)throw new o;e=e<<8|r}return a}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=i},b50d:function(t,e,r){"use strict";var n=r("c532"),o=r("467f"),i=r("30b5"),a=r("c345"),s=r("3934"),c=r("2d83"),u="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||r("9fa6");t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var m=t.auth.username||"",g=t.auth.password||"";p.Authorization="Basic "+u(m+":"+g)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||v)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:t,request:d};o(e,f,i),d=null}},d.onerror=function(){f(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var w=r("7aac"),y=(t.withCredentials||s(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;y&&(p[t.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(p,function(t,e){"undefined"===typeof l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(x){if("json"!==t.responseType)throw x}"function"===typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},bc3a:function(t,e,r){t.exports=r("cee4")},c345:function(t,e,r){"use strict";var n=r("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,a={};return t?(n.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([r]):a[e]?a[e]+", "+r:r}}),a):a}},c401:function(t,e,r){"use strict";var n=r("c532");t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},c532:function(t,e,r){"use strict";var n=r("1d2b"),o=r("044b"),i=Object.prototype.toString;function a(t){return"[object Array]"===i.call(t)}function s(t){return"[object ArrayBuffer]"===i.call(t)}function c(t){return"undefined"!==typeof FormData&&t instanceof FormData}function u(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function f(t){return"string"===typeof t}function l(t){return"number"===typeof t}function p(t){return"undefined"===typeof t}function d(t){return null!==t&&"object"===typeof t}function h(t){return"[object Date]"===i.call(t)}function v(t){return"[object File]"===i.call(t)}function m(t){return"[object Blob]"===i.call(t)}function g(t){return"[object Function]"===i.call(t)}function w(t){return d(t)&&g(t.pipe)}function y(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function x(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function _(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function C(){var t={};function e(e,r){"object"===typeof t[r]&&"object"===typeof e?t[r]=C(t[r],e):t[r]=e}for(var r=0,n=arguments.length;r<n;r++)_(arguments[r],e);return t}function k(t,e,r){return _(e,function(e,o){t[o]=r&&"function"===typeof e?n(e,r):e}),t}t.exports={isArray:a,isArrayBuffer:s,isBuffer:o,isFormData:c,isArrayBufferView:u,isString:f,isNumber:l,isObject:d,isUndefined:p,isDate:h,isFile:v,isBlob:m,isFunction:g,isStream:w,isURLSearchParams:y,isStandardBrowserEnv:b,forEach:_,merge:C,extend:k,trim:x}},c8af:function(t,e,r){"use strict";var n=r("c532");t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},cee4:function(t,e,r){"use strict";var n=r("c532"),o=r("1d2b"),i=r("0a06"),a=r("2444");function s(t){var e=new i(t),r=o(i.prototype.request,e);return n.extend(r,i.prototype,e),n.extend(r,e),r}var c=s(a);c.Axios=i,c.create=function(t){return s(n.merge(a,t))},c.Cancel=r("7a77"),c.CancelToken=r("8df4"),c.isCancel=r("2e67"),c.all=function(t){return Promise.all(t)},c.spread=r("0df6"),t.exports=c,t.exports.default=c},d925:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},df7c:function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return n.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,n="/"===a.charAt(0))}return e=r(i(e.split("/"),function(t){return!!t}),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(t){var n=e.isAbsolute(t),o="/"===a(t,-1);return t=r(i(t.split("/"),function(t){return!!t}),!n).join("/"),t||n||(t="."),t&&o&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var r=t.length-1;r>=0;r--)if(""!==t[r])break;return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var o=n(t.split("/")),i=n(r.split("/")),a=Math.min(o.length,i.length),s=a,c=0;c<a;c++)if(o[c]!==i[c]){s=c;break}var u=[];for(c=s;c<o.length;c++)u.push("..");return u=u.concat(i.slice(s)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},e.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return o(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r("4362"))},e16f:function(t,e,r){"use strict";var n=r("6504"),o=r.n(n);o.a},e683:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b4:function(t,e,r){"use strict";var n=r("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o}}]);
//# sourceMappingURL=chunk-94c300dc.6f2e77c7.js.map