(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)n=s[u],i[n]&&d.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-288a7d84":"e8268861","chunk-2b17571f":"d7cd7ad7","chunk-2d0af0c7":"85e3894d","chunk-2d0c0c03":"0d8ee30e","chunk-2d0cb6c9":"0e1f5b1c","chunk-2d0d63f1":"9899bcd3","chunk-2d0daa98":"1d3bcf08","chunk-2d0e492d":"2b986f80","chunk-2d0f09f3":"4e1d3d56","chunk-2d20efc5":"a932ad87","chunk-2d2160bd":"31e9f5b9","chunk-2d230c31":"4c0a447e","chunk-2d23822a":"42cbaaa6","chunk-39cc3a02":"0729c27b","chunk-f3f9f486":"76d27766"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-288a7d84":1,"chunk-2b17571f":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-288a7d84":"5c5a738e","chunk-2b17571f":"41a4938a","chunk-2d0af0c7":"31d6cfe0","chunk-2d0c0c03":"31d6cfe0","chunk-2d0cb6c9":"31d6cfe0","chunk-2d0d63f1":"31d6cfe0","chunk-2d0daa98":"31d6cfe0","chunk-2d0e492d":"31d6cfe0","chunk-2d0f09f3":"31d6cfe0","chunk-2d20efc5":"31d6cfe0","chunk-2d2160bd":"31d6cfe0","chunk-2d230c31":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-39cc3a02":"31d6cfe0","chunk-f3f9f486":"31d6cfe0"}[t]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],f.parentNode.removeChild(f),a(o)},f.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){n[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(function(e,a){r=i[t]=[e,a]});e.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+n+")");o.type=r,o.request=n,a[1](o)}i[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00af":function(t,e,a){},"033f":function(t,e,a){},"09fe":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",color:"#003b94",dark:""}},r),[t._v(" Detalles ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{color:"#003b94"}},[a("v-toolbar-title",[t._v("Detalles "+t._s(t.nombre))]),a("v-spacer")],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("h4",[t._v(" Código: "+t._s(t.codigo)+" ")]),a("h4",[t._v(" Clave Interna: "+t._s(t.clave_interna)+" ")]),a("h4",[t._v(" Descripción: "+t._s(t.descripcion)+" ")]),a("h4",[t._v(" Categoría: "+t._s(t.categoria)+" ")]),a("h4",[t._v(" Subcategoría: "+t._s(t.tipo)+" ")]),a("h4",[t._v(" Marca: "+t._s(t.marca)+" ")]),a("h4",[t._v(" Precio: "+t._s(t.precio)+" ")]),a("h4",[t._v(" Stock: "+t._s(t.stock)+" ")]),a("h4",[t._v(" Status: "+t._s(t.status)+" ")]),a("h4",[t._v(" Imágenes Asociadas: ")]),a("v-card",[a("v-container",{attrs:{"grid-list-sm":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(3,function(e){return a("v-flex",{key:e,attrs:{xs4:"","d-flex":""}},[a("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(5*e+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*e+10),"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)}),1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Aceptar\n      ")])],1)],1)],1)},n=[],i=(a("c5f6"),{name:"Frame",props:{nombre:String,codigo:String,clave_interna:String,descripcion:String,categoria:String,tipo:String,marca:String,precio:Number,stock:Number,status:String},data:function(){return{cant:0,info:null,dialog:!1}}}),o=i,s=a("2877"),c=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},"0a2d":function(t){t.exports={needHelp:"Need Help?"}},1196:function(t,e,a){"use strict";var r=a("af69"),n=a.n(r);n.a},"173d":function(t){t.exports={facebook:"Facebook",footer:"Footer",github:"Github",twitter:"Twitter"}},"1a5d":function(t,e,a){var r={"./Clientes.vue":["7246","chunk-39cc3a02"],"./Dashboard.vue":["7277","chunk-2d0d63f1"],"./Icons.vue":["9cc6","chunk-2d0f09f3"],"./Maps.vue":["daba","chunk-288a7d84"],"./Notifications.vue":["fda7","chunk-2d23822a"],"./Productos.vue":["6753","chunk-f3f9f486"],"./TableList.vue":["6d0d","chunk-2d0daa98"],"./Typography.vue":["547e","chunk-2b17571f"],"./Upgrade.vue":["9198","chunk-2d0e492d"],"./UserProfile.vue":["4a39","chunk-2d0cb6c9"],"./editar-producto.vue":["b265","chunk-2d20efc5"],"./editar-usuario.vue":["ee50","chunk-2d230c31"],"./lista-productos.vue":["42b1","chunk-2d0c0c03"],"./nuevo-producto.vue":["c192","chunk-2d2160bd"],"./nuevo-usuario.vue":["0d52","chunk-2d0af0c7"]};function n(t){var e=r[t];return e?a.e(e[1]).then(function(){var t=e[0];return a(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return Object.keys(r)},n.id="1a5d",t.exports=n},"25f5":function(t,e,a){"use strict";var r=a("48ff"),n=a.n(r);n.a},2609:function(t,e,a){"use strict";a.r(e),e["default"]={drawer:null,color:"success",image:"https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"}},"2a74":function(t,e,a){"use strict";a.r(e);a("28a5");var r=a("768b"),n=(a("a481"),a("ac6a"),a("f3e2"),a("c653")),i={};n.keys().forEach(function(t){if("./index.js"!==t){var e=t.replace(/(\.\/|\.js)/g,""),a=e.split("/"),o=Object(r["a"])(a,2),s=o[0],c=o[1];i[s]||(i[s]={namespaced:!0}),i[s][c]=n(t).default}}),e["default"]=i},4072:function(t,e,a){"use strict";var r=a("94b2"),n=a.n(r);n.a},"41c0":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{id:"app-drawer",app:"",dark:"",floating:"",persistent:"","mobile-break-point":"991",width:"260"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},[a("v-img",{attrs:{src:t.image,height:"100%"}},[a("v-layout",{staticClass:"fill-height",attrs:{tag:"v-list",column:""}},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",{attrs:{color:"white"}},[a("v-img",{attrs:{src:t.logo,height:"34",contain:""}})],1),a("v-list-tile-title",{staticClass:"title"},[t._v("\n          Vuetify MD\n        ")])],1),a("v-divider"),t.responsive?a("v-list-tile",[a("v-text-field",{staticClass:"purple-input search-input",attrs:{label:"Search...",color:"purple"}})],1):t._e(),t._l(t.links,function(e,r){return a("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{to:e.to,"active-class":t.color,avatar:""}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)}),a("v-list-tile",{staticClass:"v-list-item v-list__tile--buy",attrs:{disabled:"","active-class":"primary",to:"/upgrade"}},[a("v-list-tile-action",[a("v-icon",[t._v("mdi-package-up")])],1),a("v-list-tile-title",{staticClass:"font-weight-light"},[t._v("\n          Upgrade To PRO\n        ")])],1)],2)],1)],1)},n=[],i=a("cebc"),o=a("2f62"),s={data:function(){return{logo:"./img/vuetifylogo.png",links:[{to:"/dashboard",icon:"mdi-view-dashboard",text:"Dashboard"},{to:"/clientes",icon:"mdi-account",text:"Clientes"},{to:"/productos",icon:"mdi-account",text:"Productos"},{to:"/user-profile",icon:"mdi-account",text:"User Profile"},{to:"/table-list",icon:"mdi-clipboard-outline",text:"Table List"},{to:"/typography",icon:"mdi-format-font",text:"Typography"},{to:"/icons",icon:"mdi-chart-bubble",text:"Icons"},{to:"/maps",icon:"mdi-map-marker",text:"Maps"},{to:"/notifications",icon:"mdi-bell",text:"Notifications"}],responsive:!1}},computed:Object(i["a"])({},Object(o["c"])("app",["image","color"]),{inputValue:{get:function(){return this.$store.state.app.drawer},set:function(t){this.setDrawer(t)}},items:function(){return this.$t("Layout.View.items")}}),mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(i["a"])({},Object(o["b"])("app",["setDrawer","toggleDrawer"]),{onResponsiveInverted:function(){window.innerWidth<991?this.responsive=!0:this.responsive=!1}})},c=s,l=(a("ff57"),a("2877")),u=Object(l["a"])(c,r,n,!1,null,null,null);e["default"]=u.exports},"42e7":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("material-card",t._g(t._b({staticClass:"v-card--material-stats"},"material-card",t.$attrs,!1),t.$listeners),[a("v-card",{staticClass:"pa-4",class:"elevation-"+t.elevation,attrs:{slot:"offset",color:t.color,dark:""},slot:"offset"},[a("v-icon",{attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")])],1),a("div",{staticClass:"text-xs-right"},[a("p",{staticClass:"category grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),a("h3",{staticClass:"title display-1 font-weight-light"},[t._v("\n      "+t._s(t.value)+" "),a("small",[t._v(t._s(t.smallValue))])])]),a("template",{slot:"actions"},[a("v-icon",{staticClass:"mr-2",attrs:{color:t.subIconColor,size:"20"}},[t._v("\n      "+t._s(t.subIcon)+"\n    ")]),a("span",{staticClass:"caption font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)],2)},n=[],i=a("cebc"),o=a("e3a9"),s={inheritAttrs:!1,props:Object(i["a"])({},o["default"].props,{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}})},c=s,l=(a("4d79"),a("2877")),u=Object(l["a"])(c,r,n,!1,null,null,null);e["default"]=u.exports},4451:function(t,e,a){},"451f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",color:"#003b94",dark:""}},r),[t._v(" Detalles ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"indigo"}},[a("v-toolbar-title",[t._v("Ver detalles de "+t._s(t.nombre))]),a("v-spacer")],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("h4",[t._v(" Email: "+t._s(t.email)+" ")]),a("h4",[t._v(" Fecha de nacimiento: "+t._s(t.fecha)+" ")]),a("h4",[t._v(" Telefono: "+t._s(t.telefono)+" ")]),a("h4",[t._v(" Número interior: "+t._s(t.interior)+" ")]),a("h4",[t._v(" Número exterior: "+t._s(t.exterior)+" ")]),a("h4",[t._v(" Calle: "+t._s(t.calle)+" ")]),a("h4",[t._v(" Colonia: "+t._s(t.colonia)+" ")]),a("h4",[t._v(" Localidad: "+t._s(t.localidad)+" ")]),a("h4",[t._v(" Municipio: "+t._s(t.municipio)+" ")]),a("h4",[t._v(" Estado: "+t._s(t.estado)+" ")]),a("h4",[t._v(" País: "+t._s(t.pais)+" ")]),a("h4",[t._v(" Código Postal: "+t._s(t.cp)+" ")]),a("h4",[t._v(" Referencias: "+t._s(t.referencias)+" ")]),a("h4",[t._v(" Status: "+t._s(t.status)+" ")])])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Aceptar\n      ")])],1)],1)],1)},n=[],i={name:"Frame",props:{nombre:String,email:String,fecha:String,telefono:String,interior:String,exterior:String,calle:String,colonia:String,localidad:String,municipio:String,estado:String,pais:String,cp:String,referencias:String,status:String},data:function(){return{cant:0,info:null,dialog:!1}}},o=i,s=a("2877"),c=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},"48ff":function(t,e,a){},4937:function(t,e,a){},4999:function(t,e,a){var r={"./en/Common.json":"0a2d","./en/Core/Footer.json":"173d","./en/Core/Toolbar.json":"f26b","./en/Home.json":"5cc6"};function n(t){var e=i(t);return a(e)}function i(t){var e=r[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id="4999"},"4d79":function(t,e,a){"use strict";var r=a("4451"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=(a("a481"),a("ac6a"),a("f3e2"),a("8103")),i=a.n(n),o=a("bba4"),s=a.n(o),c=a("ffe0");c.keys().forEach(function(t){var e=c(t),a=i()(s()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));r["default"].component(a,e.default||e)});var l=a("bc3a"),u=a.n(l);r["default"].prototype.$http=u.a;a("4633");r["default"].use(a("84b5"));var d=a("ce5b"),f=a.n(d),v={primary:"#4caf50",secondary:"#4caf50",tertiary:"#495057",accent:"#82B1FF",error:"#f55a4e",info:"#00d3ee",success:"#5cb860",warning:"#ffa21a"};a("bf40"),a("5363");r["default"].use(f.a,{iconfont:"mdi",theme:v});var p=a("31bd"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("core-filter"),a("core-toolbar"),a("core-drawer"),a("core-view")],1)},m=[],b=(a("5c0b"),a("2877")),g={},_=Object(b["a"])(g,h,m,!1,null,null,null),y=_.exports,k=a("a925"),x=(a("0cd8"),a("28a5"),a("ac4d"),a("8a81"),a("4999")),w={},C=!0,S=!1,O=void 0;try{for(var j,E=function(){var t=j.value;if("./index.js"===t)return"continue";var e=t.replace(/(\.\/|\.json$)/g,"").split("/");e.reduce(function(a,r,n){return a[r]?a[r]:(a[r]=n+1===e.length?x(t):{},a[r])},w)},D=x.keys()[Symbol.iterator]();!(C=(j=D.next()).done);C=!0)E()}catch(K){S=!0,O=K}finally{try{C||null==D.return||D.return()}finally{if(S)throw O}}var N=w;r["default"].use(k["a"]);var I=new k["a"]({locale:"en",fallbackLocale:"en",messages:N}),$=I,T=(a("7f7f"),a("6d67"),a("0284")),L=a.n(T),P=a("8c4f"),A=a("0a89"),U=a.n(A),F=[{path:"/dashboard",view:"Dashboard"},{path:"/clientes",name:"Clientes",view:"Clientes"},{path:"/productos",name:"Productos",view:"Productos"},{path:"/user-profile",name:"User Profile",view:"UserProfile"},{path:"/table-list",name:"Table List",view:"TableList"},{path:"/typography",view:"Typography"},{path:"/icons",view:"Icons"},{path:"/maps",view:"Maps"},{path:"/notifications",view:"Notifications"},{path:"/upgrade",name:"Upgrade to PRO",view:"Upgrade"}];function M(t,e,r){return{name:r||e,path:t,component:function(t){return a("1a5d")("./".concat(e,".vue")).then(t)}}}r["default"].use(P["a"]);var B=new P["a"]({mode:"history",routes:F.map(function(t){return M(t.path,t.view,t.name)}).concat([{path:"*",redirect:"/dashboard"}]),scrollBehavior:function(t,e,a){return a||(t.hash?{selector:t.hash}:{x:0,y:0})}});r["default"].use(U.a),Object({NODE_ENV:"production",BASE_URL:"/"}).GOOGLE_ANALYTICS&&r["default"].use(L.a,{id:Object({NODE_ENV:"production",BASE_URL:"/"}).GOOGLE_ANALYTICS,router:B,autoTracking:{page:!0}});var V=B,R=a("2f62"),z={},H={},W=a("2a74"),Y={},G={};r["default"].use(R["a"]);var q=new R["a"].Store({actions:z,getters:H,modules:W["default"],mutations:Y,state:G}),J=q;Object(p["sync"])(J,V),r["default"].config.productionTip=!1,new r["default"]({i18n:$,router:V,store:J,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("b19e"),n=a.n(r);n.a},"5cc6":function(t){t.exports={title:"Vuetify Alpha",footer:"2018 Vuetify LLC",drawerItems:["Inspire"],needHelp:"Need help?"}},"602c":function(t,e,a){"use strict";var r=a("033f"),n=a.n(r);n.a},6096:function(t,e,a){"use strict";a.r(e);var r=function(t){return function(e,a){return e[t]=a}},n=function(t){return function(e){return e[t]=!e[t]}};e["default"]={setDrawer:r("drawer"),setImage:r("image"),setColor:r("color"),toggleDrawer:n("drawer")}},"78d5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("material-card",t._g(t._b({staticClass:"v-card--material-chart"},"material-card",t.$attrs,!1),t.$listeners),[a("chartist",{attrs:{slot:"header",data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type},slot:"header"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},n=[],i=(a("6762"),a("2fdb"),{inheritAttrs:!1,props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0,validator:function(t){return["Bar","Line","Pie"].includes(t)}}}}),o=i,s=(a("e536"),a("2877")),c=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},"7a74":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{id:"core-footer",absolute:"",height:"82"}},[a("div",{staticClass:"footer-items"},t._l(t.links,function(e){return a("span",{key:e.name},[a("a",{staticClass:"tertiary--text footer-links",attrs:{href:e.Link}},[t._v(t._s(e.name))])])}),0),a("v-spacer"),a("span",{staticClass:"font-weight-light copyright"},[t._v("\n    ©\n    "+t._s((new Date).getFullYear())+"\n    "),a("a",{attrs:{href:"https://www.creative-tim.com/",target:"_blank"}},[t._v("Creative Tim")]),t._v(", made with\n    "),a("v-icon",{attrs:{color:"tertiary",size:"17"}},[t._v("mdi-heart")]),t._v("\n    for a better web\n  ")],1)],1)},n=[],i={data:function(){return{links:[{name:"Home",Link:"/dashboard"},{name:"Creative Tim",Link:"https://www.creative-tim.com"},{name:"About Us",Link:"https://creative-tim.com/presentation"},{name:"Blog",Link:"https://blog.creative-tim.com"}]}}},o=i,s=(a("602c"),a("2877")),c=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},"80d6":function(t,e,a){},9306:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("div",{attrs:{id:"core-view"}},[a("v-fade-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1),"Maps"!==t.$route.name?a("core-footer"):t._e()],1)},n=[],i={metaInfo:function(){return{title:"Vuetify Material Dashboard by CreativeTim"}}},o=i,s=(a("ee4f"),a("2877")),c=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},"94b2":function(t,e,a){},"9cbf":function(t,e,a){"use strict";var r=a("00af"),n=a.n(r);n.a},"9d6c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-alert",t._g(t._b({staticClass:"v-alert--notification",class:["elevation-"+t.elevation],attrs:{value:t.value}},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},n=[],i=(a("c5f6"),{inheritAttrs:!1,props:{elevation:{type:[Number,String],default:6},value:{type:Boolean,default:!0}}}),o=i,s=(a("4072"),a("2877")),c=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},af69:function(t,e,a){},b19e:function(t,e,a){},b2ab:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[a("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[a("v-icon",[t._v("mdi-settings")])],1),a("v-card",[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Sidebar Filters")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.colors,function(e){return a("v-avatar",{key:e,class:[e===t.color?"color-active color-"+e:"color-"+e],attrs:{size:"23"},on:{click:function(a){return t.setColor(e)}}})}),1),a("v-divider",{staticClass:"mt-3"})],1),a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Images")])]),t._l(t.images,function(e){return a("v-flex",{key:e,attrs:{xs3:""}},[a("v-img",{class:[t.image===e?"image-active":""],attrs:{src:e,height:"120"},nativeOn:{click:function(a){return t.setImage(e)}}})],1)}),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{href:"https://www.creative-tim.com/product/vuetify-material-dashboard",target:"_blank",color:"success",block:""}},[t._v("\n            Free Download\n          ")])],1),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"white--text",attrs:{href:"https://demos.creative-tim.com/vuetify-material-dashboard/documentation",target:"_blank",color:"primary",block:""}},[t._v("\n            Documentation\n          ")])],1),a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center body-2 text-uppercase"},[a("div",{staticClass:" sidebar-filter"},[t._v("\n              Thank You for Sharing!\n            ")]),a("div",[a("v-btn",{staticClass:"mr-2 v-btn-facebook",attrs:{color:"indigo",fab:"",icon:"",small:"",round:""}},[a("v-icon",[t._v("mdi-facebook")])],1),a("v-btn",{staticClass:"v-btn-twitter",attrs:{color:"cyan",fab:"",icon:"",small:"",round:""}},[a("v-icon",[t._v("mdi-twitter")])],1)],1)])])],2)],1)],1)],1)},n=[],i=a("cebc"),o=a("2f62"),s={data:function(){return{colors:["primary","info","success","warning","danger"],images:["https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg"]}},computed:Object(i["a"])({},Object(o["c"])("app",["image","color"]),{color:function(){return this.$store.state.app.color}}),methods:Object(i["a"])({},Object(o["b"])("app",["setImage"]),{setColor:function(t){this.$store.state.app.color=t}})},c=s,l=(a("9cbf"),a("2877")),u=Object(l["a"])(c,r,n,!1,null,null,null);e["default"]=u.exports},c653:function(t,e,a){var r={"./app/mutations.js":"6096","./app/state.js":"2609","./index.js":"2a74"};function n(t){var e=i(t);return a(e)}function i(t){var e=r[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id="c653"},c6cc:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-offset",class:t.classes,style:t.styles},[t._t("default")],2)},n=[],i=(a("c5f6"),{props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}}),o=i,s=(a("1196"),a("2877")),c=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},cb2c:function(t,e,a){"use strict";var r=a("4937"),n=a.n(r);n.a},cbcd:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",color:"#003b94",dark:""}},r),[t._v(" Editar ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{color:"#003b94"}},[a("v-toolbar-title",[t._v("Editar "+t._s(t.nombre))]),a("v-spacer")],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("h4",[t._v(" Código: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Código",value:t.codigo}}),a("h4",[t._v(" Clave Interna: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Clave Interna",value:t.clave_interna}}),a("h4",[t._v(" Descripción: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Descripción",value:t.descripcion}}),a("h4",[t._v(" Categoría: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Categoría",value:t.categoria}}),a("h4",[t._v(" Subcategoría: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Subcategoría",value:t.tipo}}),a("h4",[t._v(" Marca: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Marca",value:t.marca}}),a("h4",[t._v(" Precio: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Precio",value:t.precio,type:"number"}}),a("h4",[t._v(" Stock: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Stock",value:t.stock,type:"number"}}),a("h4",[t._v(" Status: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Status",value:t.status}}),a("h4",[t._v(" Imágenes Asociadas: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Imagen 1",type:"file"}}),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Imagen 2",type:"file"}}),a("v-text-field",{staticClass:"Imagen 3",attrs:{label:"Clave Interna",type:"file"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"#003b94",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Actualizar\n      ")]),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Cancelar\n      ")])],1)],1)],1)},n=[],i=(a("c5f6"),{name:"Frame",props:{nombre:String,codigo:String,clave_interna:String,descripcion:String,categoria:String,tipo:String,marca:String,precio:Number,stock:Number,status:String},data:function(){return{cant:0,info:null,dialog:!1}}}),o=i,s=a("2877"),c=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},cf98:function(t,e,a){},d23b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticStyle:{background:"#eee"},attrs:{id:"core-toolbar",flat:"",prominent:""}},[a("div",{staticClass:"v-toolbar-title"},[a("v-toolbar-title",{staticClass:"tertiary--text font-weight-light"},[t.responsive?a("v-btn",{staticClass:"default v-btn--simple",attrs:{dark:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.onClickBtn(e)}}},[a("v-icon",[t._v("mdi-view-list")])],1):t._e(),t._v("\n      "+t._s(t.title)+"\n    ")],1)],1),a("v-spacer"),a("v-toolbar-items",[a("v-flex",{attrs:{"align-center":"",layout:"","py-2":""}},[t.responsiveInput?a("v-text-field",{staticClass:"mr-4 mt-2 purple-input",attrs:{label:"Search...","hide-details":"",color:"purple"}}):t._e(),a("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/"}},[a("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-view-dashboard")])],1),a("v-menu",{attrs:{bottom:"",left:"","content-class":"dropdown-menu","offset-y":"",transition:"slide-y-transition"}},[a("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{slot:"activator",to:"/notifications"},slot:"activator"},[a("v-badge",{attrs:{color:"error",overlap:""}},[a("template",{slot:"badge"},[t._v("\n              "+t._s(t.notifications.length)+"\n            ")]),a("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-bell")])],2)],1),a("v-card",[a("v-list",{attrs:{dense:""}},t._l(t.notifications,function(e){return a("v-list-tile",{key:e,on:{click:t.onClick}},[a("v-list-tile-title",{domProps:{textContent:t._s(e)}})],1)}),1)],1)],1),a("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/user-profile"}},[a("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-account")])],1)],1)],1)],1)},n=[],i=a("cebc"),o=(a("7f7f"),a("2f62")),s={data:function(){return{notifications:["Mike, John responded to your email","You have 5 new tasks","You're now a friend with Andrew","Another Notification","Another One"],title:null,responsive:!1,responsiveInput:!1}},watch:{$route:function(t){this.title=t.name}},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(i["a"])({},Object(o["b"])("app",["setDrawer","toggleDrawer"]),{onClickBtn:function(){this.setDrawer(!this.$store.state.app.drawer)},onClick:function(){},onResponsiveInverted:function(){window.innerWidth<991?(this.responsive=!0,this.responsiveInput=!1):(this.responsive=!1,this.responsiveInput=!0)}})},c=s,l=(a("25f5"),a("2877")),u=Object(l["a"])(c,r,n,!1,null,null,null);e["default"]=u.exports},e3a9:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?a("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):a("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?a("span",[a("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),a("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),a("v-card-text",[t._t("default")],2),t.$slots.actions?a("v-divider",{staticClass:"mx-3"}):t._e(),t.$slots.actions?a("v-card-actions",[t._t("actions")],2):t._e()],1)},n=[],i=(a("c5f6"),{inheritAttrs:!1,props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}}),o=i,s=(a("cb2c"),a("2877")),c=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},e536:function(t,e,a){"use strict";var r=a("80d6"),n=a.n(r);n.a},ee4f:function(t,e,a){"use strict";var r=a("cf98"),n=a.n(r);n.a},f26b:function(t){t.exports={title:"Title"}},f902:function(t,e,a){},ff57:function(t,e,a){"use strict";var r=a("f902"),n=a.n(r);n.a},ffe0:function(t,e,a){var r={"./core/Detalles.vue":"451f","./core/Detalles0.vue":"09fe","./core/Detalles1.vue":"cbcd","./core/Drawer.vue":"41c0","./core/Filter.vue":"b2ab","./core/Footer.vue":"7a74","./core/Toolbar.vue":"d23b","./core/View.vue":"9306","./helper/Offset.vue":"c6cc","./material/Card.vue":"e3a9","./material/ChartCard.vue":"78d5","./material/Notification.vue":"9d6c","./material/StatsCard.vue":"42e7"};function n(t){var e=i(t);return a(e)}function i(t){var e=r[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id="ffe0"}});
//# sourceMappingURL=app.e67d1048.js.map