(function(t){function e(e){for(var r,n,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)n=s[u],o[n]&&d.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-288a7d84":"fa1206a7","chunk-2b17571f":"9bcd5329","chunk-2d0cb6c9":"543a4fb4","chunk-2d0cbe3a":"473ee618","chunk-2d0d0215":"4dd62485","chunk-2d0d6393":"93bdc9a9","chunk-2d0d63f1":"a0d715e5","chunk-2d0daa98":"013ba44f","chunk-2d0e492d":"9bf3c730","chunk-2d0f09f3":"d005efc0","chunk-2d23822a":"21651a80"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-288a7d84":1,"chunk-2b17571f":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-288a7d84":"5c5a738e","chunk-2b17571f":"41a4938a","chunk-2d0cb6c9":"31d6cfe0","chunk-2d0cbe3a":"31d6cfe0","chunk-2d0d0215":"31d6cfe0","chunk-2d0d6393":"31d6cfe0","chunk-2d0d63f1":"31d6cfe0","chunk-2d0daa98":"31d6cfe0","chunk-2d0e492d":"31d6cfe0","chunk-2d0f09f3":"31d6cfe0","chunk-2d23822a":"31d6cfe0"}[t]+".css",o=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],f.parentNode.removeChild(f),a(i)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){n[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,a){r=o[t]=[e,a]});e.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+n+")");i.type=r,i.request=n,a[1](i)}o[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00af":function(t,e,a){},"033f":function(t,e,a){},"09fe":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",color:"#003b94",dark:""}},r),[t._v(" Detalles ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{color:"#003b94"}},[a("v-toolbar-title",[t._v("Detalles "+t._s(t.nombre))]),a("v-spacer")],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("h4",[t._v(" Código: "+t._s(t.codigo)+" ")]),a("h4",[t._v(" Clave Interna: "+t._s(t.clave_interna)+" ")]),a("h4",[t._v(" Descripción: "+t._s(t.descripcion)+" ")]),a("h4",[t._v(" Categoría: "+t._s(t.categoria)+" ")]),a("h4",[t._v(" Subcategoría: "+t._s(t.tipo)+" ")]),a("h4",[t._v(" Marca: "+t._s(t.marca)+" ")]),a("h4",[t._v(" Precio: "+t._s(t.precio)+" ")]),a("h4",[t._v(" Stock: "+t._s(t.stock)+" ")]),a("h4",[t._v(" Status: "+t._s(t.status)+" ")]),a("h4",[t._v(" Imágenes Asociadas: ")]),a("v-card",[a("v-container",{attrs:{"grid-list-sm":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(3,function(e){return a("v-flex",{key:e,attrs:{xs4:"","d-flex":""}},[a("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(5*e+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*e+10),"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)}),1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Aceptar\n      ")])],1)],1)],1)},n=[],o=(a("c5f6"),{name:"Frame",props:{nombre:String,codigo:String,clave_interna:String,descripcion:String,categoria:String,tipo:String,marca:String,precio:Number,stock:Number,status:String},data:function(){return{cant:0,info:null,dialog:!1}}}),i=o,s=a("2877"),l=Object(s["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports},"0a2d":function(t){t.exports={needHelp:"Need Help?"}},"0fd0":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",color:"error",dark:""}},r),[t._v(" Eliminar ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"indigo"}},[a("v-toolbar-title",[t._v("Eliminar Usuario")]),a("v-spacer")],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-card-text",[t._v("\n          ¿Estás seguro de que deseas eliminar al usuario "+t._s(t.nombre)+" del sistema? Esta acción no se puede deshacer.\n        ")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Cancelar\n      ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.eliminar(t.id),t.dialog=!1}}},[t._v("\n        Eliminar\n      ")])],1)],1)],1)},n=[],o=a("d722"),i={name:"Frame",props:{id:String,nombre:String},data:function(){return{cant:0,info:null,dialog:!1}},methods:{eliminar:function(t){o["a"].post("/ad-usuarios/delete-user/"+t).then(function(t){}).catch(function(t){console.log(t)})}}},s=i,l=a("2877"),c=Object(l["a"])(s,r,n,!1,null,null,null);e["default"]=c.exports},1196:function(t,e,a){"use strict";var r=a("af69"),n=a.n(r);n.a},"173d":function(t){t.exports={facebook:"Facebook",footer:"Footer",github:"Github",twitter:"Twitter"}},"1a5d":function(t,e,a){var r={"./Clientes.vue":["7246","chunk-2d0d6393"],"./Compras.vue":["4c1f","chunk-2d0cbe3a"],"./Dashboard.vue":["7277","chunk-2d0d63f1"],"./Icons.vue":["9cc6","chunk-2d0f09f3"],"./Maps.vue":["daba","chunk-288a7d84"],"./Notifications.vue":["fda7","chunk-2d23822a"],"./Productos.vue":["6753","chunk-2d0d0215"],"./TableList.vue":["6d0d","chunk-2d0daa98"],"./Typography.vue":["547e","chunk-2b17571f"],"./Upgrade.vue":["9198","chunk-2d0e492d"],"./UserProfile.vue":["4a39","chunk-2d0cb6c9"]};function n(t){var e=r[t];return e?a.e(e[1]).then(function(){var t=e[0];return a(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return Object.keys(r)},n.id="1a5d",t.exports=n},2056:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",color:"#003b94",dark:""}},r),[t._v(" Detalles ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"indigo"}},[a("v-toolbar-title",[t._v("Ver detalles de "+t._s(t.nombre))]),a("v-spacer")],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("h4",[t._v(" Email: "+t._s(t.email)+" ")]),a("h4",[t._v(" Fecha de nacimiento: "+t._s(t.fecha)+" ")]),a("h4",[t._v(" Telefono: "+t._s(t.telefono)+" ")]),a("h4",[t._v(" Número interior: "+t._s(t.interior)+" ")]),a("h4",[t._v(" Número exterior: "+t._s(t.exterior)+" ")]),a("h4",[t._v(" Calle: "+t._s(t.calle)+" ")]),a("h4",[t._v(" Colonia: "+t._s(t.colonia)+" ")]),a("h4",[t._v(" Localidad: "+t._s(t.localidad)+" ")]),a("h4",[t._v(" Municipio: "+t._s(t.municipio)+" ")]),a("h4",[t._v(" Estado: "+t._s(t.estado)+" ")]),a("h4",[t._v(" País: "+t._s(t.pais)+" ")]),a("h4",[t._v(" Código Postal: "+t._s(t.cp)+" ")]),a("h4",[t._v(" Referencias: "+t._s(t.referencias)+" ")]),a("h4",[t._v(" Status: "+t._s(t.status)+" ")])])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Aceptar\n      ")])],1)],1)],1)},n=[],o={name:"Frame",props:{nombre:String,email:String,fecha:String,telefono:String,interior:String,exterior:String,calle:String,colonia:String,localidad:String,municipio:String,estado:String,pais:String,cp:String,referencias:String,status:String},data:function(){return{cant:0,info:null,dialog:!1}}},i=o,s=a("2877"),l=Object(s["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports},"25f5":function(t,e,a){"use strict";var r=a("48ff"),n=a.n(r);n.a},2609:function(t,e,a){"use strict";a.r(e),e["default"]={drawer:null,color:"success",image:"https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"}},"2a74":function(t,e,a){"use strict";a.r(e);a("28a5");var r=a("768b"),n=(a("a481"),a("ac6a"),a("f3e2"),a("c653")),o={};n.keys().forEach(function(t){if("./index.js"!==t){var e=t.replace(/(\.\/|\.js)/g,""),a=e.split("/"),i=Object(r["a"])(a,2),s=i[0],l=i[1];o[s]||(o[s]={namespaced:!0}),o[s][l]=n(t).default}}),e["default"]=o},4072:function(t,e,a){"use strict";var r=a("94b2"),n=a.n(r);n.a},"41c0":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{id:"app-drawer",app:"",dark:"",floating:"",persistent:"","mobile-break-point":"991",width:"260"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},[a("v-img",{attrs:{src:t.image,height:"100%"}},[a("v-layout",{staticClass:"fill-height",attrs:{tag:"v-list",column:""}},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",{attrs:{color:"white"}},[a("v-img",{attrs:{src:t.logo,height:"34",contain:""}})],1),a("v-list-tile-title",{staticClass:"title"},[t._v("\n          Reface Admin\n        ")])],1),a("v-divider"),t.responsive?a("v-list-tile",[a("v-text-field",{staticClass:"purple-input search-input",attrs:{label:"Search...",color:"purple"}})],1):t._e(),t._l(t.links,function(e,r){return a("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{to:e.to,"active-class":t.color,avatar:""}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)})],2)],1)],1)},n=[],o=a("cebc"),i=a("2f62"),s={data:function(){return{logo:"./img/reface_logo.jpeg",links:[{to:"/dashboard",icon:"mdi-view-dashboard",text:"Inicio"},{to:"/clientes",icon:"mdi-account",text:"Clientes"},{to:"/productos",icon:"mdi-animation",text:"Productos"},{to:"/compras",icon:"mdi-clipboard-outline",text:"Ordenes de Compra"},{to:"/user-profile",icon:"mdi-account",text:"Perfil Administrador"}],responsive:!1}},computed:Object(o["a"])({},Object(i["c"])("app",["image","color"]),{inputValue:{get:function(){return this.$store.state.app.drawer},set:function(t){this.setDrawer(t)}},items:function(){return this.$t("Layout.View.items")}}),mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(o["a"])({},Object(i["b"])("app",["setDrawer","toggleDrawer"]),{onResponsiveInverted:function(){window.innerWidth<991?this.responsive=!0:this.responsive=!1}})},l=s,c=(a("ff57"),a("2877")),u=Object(c["a"])(l,r,n,!1,null,null,null);e["default"]=u.exports},"42e7":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("material-card",t._g(t._b({staticClass:"v-card--material-stats"},"material-card",t.$attrs,!1),t.$listeners),[a("v-card",{staticClass:"pa-4",class:"elevation-"+t.elevation,attrs:{slot:"offset",color:t.color,dark:""},slot:"offset"},[a("v-icon",{attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")])],1),a("div",{staticClass:"text-xs-right"},[a("p",{staticClass:"category grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),a("h3",{staticClass:"title display-1 font-weight-light"},[t._v("\n      "+t._s(t.value)+" "),a("small",[t._v(t._s(t.smallValue))])])]),a("template",{slot:"actions"},[a("v-icon",{staticClass:"mr-2",attrs:{color:t.subIconColor,size:"20"}},[t._v("\n      "+t._s(t.subIcon)+"\n    ")]),a("span",{staticClass:"caption font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)],2)},n=[],o=a("cebc"),i=a("e3a9"),s={inheritAttrs:!1,props:Object(o["a"])({},i["default"].props,{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}})},l=s,c=(a("4d79"),a("2877")),u=Object(c["a"])(l,r,n,!1,null,null,null);e["default"]=u.exports},4451:function(t,e,a){},"451f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",color:"#003b94",dark:""}},r),[t._v(" Detalles ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"indigo"}},[a("v-toolbar-title",[t._v("Ver detalles de "+t._s(t.nombre))]),a("v-spacer")],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("h4",[t._v(" Email: "+t._s(t.email)+" ")]),a("h4",[t._v(" Fecha de nacimiento: "+t._s(t.fecha)+" ")]),a("h4",[t._v(" Telefono: "+t._s(t.telefono)+" ")]),a("h4",[t._v(" Número interior: "+t._s(t.interior)+" ")]),a("h4",[t._v(" Número exterior: "+t._s(t.exterior)+" ")]),a("h4",[t._v(" Calle: "+t._s(t.calle)+" ")]),a("h4",[t._v(" Colonia: "+t._s(t.colonia)+" ")]),a("h4",[t._v(" Localidad: "+t._s(t.localidad)+" ")]),a("h4",[t._v(" Municipio: "+t._s(t.municipio)+" ")]),a("h4",[t._v(" Estado: "+t._s(t.estado)+" ")]),a("h4",[t._v(" País: "+t._s(t.pais)+" ")]),a("h4",[t._v(" Código Postal: "+t._s(t.cp)+" ")]),a("h4",[t._v(" Referencias: "+t._s(t.referencias)+" ")]),a("h4",[t._v(" Status: "+t._s(t.status)+" ")])])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Aceptar\n      ")])],1)],1)],1)},n=[],o={name:"Frame",props:{nombre:String,email:String,fecha:String,telefono:String,interior:String,exterior:String,calle:String,colonia:String,localidad:String,municipio:String,estado:String,pais:String,cp:String,referencias:String,status:String},data:function(){return{cant:0,info:null,dialog:!1}}},i=o,s=a("2877"),l=Object(s["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports},"48ff":function(t,e,a){},4937:function(t,e,a){},4999:function(t,e,a){var r={"./en/Common.json":"0a2d","./en/Core/Footer.json":"173d","./en/Core/Toolbar.json":"f26b","./en/Home.json":"5cc6"};function n(t){var e=o(t);return a(e)}function o(t){var e=r[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(r)},n.resolve=o,t.exports=n,n.id="4999"},"4d79":function(t,e,a){"use strict";var r=a("4451"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=(a("a481"),a("ac6a"),a("f3e2"),a("8103")),o=a.n(n),i=a("bba4"),s=a.n(i),l=a("ffe0");l.keys().forEach(function(t){var e=l(t),a=o()(s()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));r["default"].component(a,e.default||e)});var c=a("bc3a"),u=a.n(c);r["default"].prototype.$http=u.a;a("4633");r["default"].use(a("84b5"));var d=a("ce5b"),f=a.n(d),v={primary:"#4caf50",secondary:"#4caf50",tertiary:"#495057",accent:"#82B1FF",error:"#f55a4e",info:"#00d3ee",success:"#5cb860",warning:"#ffa21a"};a("bf40"),a("5363");r["default"].use(f.a,{iconfont:"mdi",theme:v});var p=a("31bd"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("core-filter"),a("core-toolbar"),a("core-drawer"),a("core-view")],1)},h=[],g=(a("5c0b"),a("2877")),b={},_=Object(g["a"])(b,m,h,!1,null,null,null),y=_.exports,x=a("a925"),k=(a("0cd8"),a("28a5"),a("ac4d"),a("8a81"),a("4999")),w={},C=!0,S=!1,O=void 0;try{for(var j,E=function(){var t=j.value;if("./index.js"===t)return"continue";var e=t.replace(/(\.\/|\.json$)/g,"").split("/");e.reduce(function(a,r,n){return a[r]?a[r]:(a[r]=n+1===e.length?k(t):{},a[r])},w)},D=k.keys()[Symbol.iterator]();!(C=(j=D.next()).done);C=!0)E()}catch(K){S=!0,O=K}finally{try{C||null==D.return||D.return()}finally{if(S)throw O}}var N=w;r["default"].use(x["a"]);var $=new x["a"]({locale:"en",fallbackLocale:"en",messages:N}),I=$,T=(a("7f7f"),a("6d67"),a("0284")),P=a.n(T),A=a("8c4f"),L=a("0a89"),F=a.n(L),U=[{path:"/dashboard",view:"Dashboard"},{path:"/clientes",name:"Clientes",view:"Clientes"},{path:"/productos",name:"Productos",view:"Productos"},{path:"/user-profile",name:"User Profile",view:"UserProfile"},{path:"/table-list",name:"Table List",view:"TableList"},{path:"/typography",view:"Typography"},{path:"/icons",view:"Icons"},{path:"/maps",view:"Maps"},{path:"/notifications",view:"Notifications"},{path:"/upgrade",name:"Upgrade to PRO",view:"Upgrade"},{path:"/compras",name:"Compras",view:"Compras"}];function M(t,e,r){return{name:r||e,path:t,component:function(t){return a("1a5d")("./".concat(e,".vue")).then(t)}}}r["default"].use(A["a"]);var B=new A["a"]({mode:"history",routes:U.map(function(t){return M(t.path,t.view,t.name)}).concat([{path:"*",redirect:"/dashboard"}]),scrollBehavior:function(t,e,a){return a||(t.hash?{selector:t.hash}:{x:0,y:0})}});r["default"].use(F.a),Object({NODE_ENV:"production",BASE_URL:"/"}).GOOGLE_ANALYTICS&&r["default"].use(P.a,{id:Object({NODE_ENV:"production",BASE_URL:"/"}).GOOGLE_ANALYTICS,router:B,autoTracking:{page:!0}});var R=B,V=a("2f62"),z={},H={},q=a("2a74"),G={},W={};r["default"].use(V["a"]);var Y=new V["a"].Store({actions:z,getters:H,modules:q["default"],mutations:G,state:W}),J=Y;Object(p["sync"])(J,R),r["default"].config.productionTip=!1,new r["default"]({i18n:I,router:R,store:J,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("b19e"),n=a.n(r);n.a},"5cc6":function(t){t.exports={title:"Vuetify Alpha",footer:"2018 Vuetify LLC",drawerItems:["Inspire"],needHelp:"Need help?"}},"602c":function(t,e,a){"use strict";var r=a("033f"),n=a.n(r);n.a},6096:function(t,e,a){"use strict";a.r(e);var r=function(t){return function(e,a){return e[t]=a}},n=function(t){return function(e){return e[t]=!e[t]}};e["default"]={setDrawer:r("drawer"),setImage:r("image"),setColor:r("color"),toggleDrawer:n("drawer")}},"78d5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("material-card",t._g(t._b({staticClass:"v-card--material-chart"},"material-card",t.$attrs,!1),t.$listeners),[a("chartist",{attrs:{slot:"header",data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type},slot:"header"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},n=[],o=(a("6762"),a("2fdb"),{inheritAttrs:!1,props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0,validator:function(t){return["Bar","Line","Pie"].includes(t)}}}}),i=o,s=(a("e536"),a("2877")),l=Object(s["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports},"7a74":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{id:"core-footer",absolute:"",height:"82"}},[a("v-spacer"),a("span",{staticClass:"font-weight-light copyright"},[t._v("\n    ©\n    "+t._s((new Date).getFullYear())+"\n    "),a("a",{attrs:{target:"_blank"}},[t._v("Reface")]),t._v(",\n      Todos los derechos reservados.\n  ")])],1)},n=[],o={data:function(){return{links:[{name:"Home",Link:"/dashboard"},{name:"Creative Tim",Link:"https://www.creative-tim.com"},{name:"About Us",Link:"https://creative-tim.com/presentation"},{name:"Blog",Link:"https://blog.creative-tim.com"}]}}},i=o,s=(a("602c"),a("2877")),l=Object(s["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports},"80d6":function(t,e,a){},9306:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("div",{attrs:{id:"core-view"}},[a("v-fade-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1),"Maps"!==t.$route.name?a("core-footer"):t._e()],1)},n=[],o={metaInfo:function(){return{title:"Vuetify Material Dashboard by CreativeTim"}}},i=o,s=(a("ee4f"),a("2877")),l=Object(s["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports},"94b2":function(t,e,a){},"9cbf":function(t,e,a){"use strict";var r=a("00af"),n=a.n(r);n.a},"9d6c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-alert",t._g(t._b({staticClass:"v-alert--notification",class:["elevation-"+t.elevation],attrs:{value:t.value}},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},n=[],o=(a("c5f6"),{inheritAttrs:!1,props:{elevation:{type:[Number,String],default:6},value:{type:Boolean,default:!0}}}),i=o,s=(a("4072"),a("2877")),l=Object(s["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports},af69:function(t,e,a){},b19e:function(t,e,a){},b2ab:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[a("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[a("v-icon",[t._v("mdi-settings")])],1),a("v-card",[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Sidebar Filters")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.colors,function(e){return a("v-avatar",{key:e,class:[e===t.color?"color-active color-"+e:"color-"+e],attrs:{size:"23"},on:{click:function(a){return t.setColor(e)}}})}),1),a("v-divider",{staticClass:"mt-3"})],1),a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Images")])]),t._l(t.images,function(e){return a("v-flex",{key:e,attrs:{xs3:""}},[a("v-img",{class:[t.image===e?"image-active":""],attrs:{src:e,height:"120"},nativeOn:{click:function(a){return t.setImage(e)}}})],1)})],2)],1)],1)],1)},n=[],o=a("cebc"),i=a("2f62"),s={data:function(){return{colors:["primary","info","success","warning","danger"],images:["https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg"]}},computed:Object(o["a"])({},Object(i["c"])("app",["image","color"]),{color:function(){return this.$store.state.app.color}}),methods:Object(o["a"])({},Object(i["b"])("app",["setImage"]),{setColor:function(t){this.$store.state.app.color=t}})},l=s,c=(a("9cbf"),a("2877")),u=Object(c["a"])(l,r,n,!1,null,null,null);e["default"]=u.exports},c197:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",color:"error",dark:""}},r),[t._v(" Eliminar ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"indigo"}},[a("v-toolbar-title",[t._v("Eliminar Producto")]),a("v-spacer")],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("v-card-text",[t._v("\n          ¿Estás seguro de que deseas eliminar el producto "+t._s(t.nombre)+" del sistema? Esta acción no se puede deshacer.\n        ")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Cancelar\n      ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.eliminar(t.clave_interna),t.dialog=!1}}},[t._v("\n        Eliminar\n      ")])],1)],1)],1)},n=[],o=a("d722"),i={name:"Frame",props:{clave_interna:String,nombre:String},data:function(){return{cant:0,info:null,dialog:!1}},methods:{eliminar:function(t){o["a"].post("/ad-productos/delete-product/"+t).then(function(t){}).catch(function(t){console.log(t)})}}},s=i,l=a("2877"),c=Object(l["a"])(s,r,n,!1,null,null,null);e["default"]=c.exports},c653:function(t,e,a){var r={"./app/mutations.js":"6096","./app/state.js":"2609","./index.js":"2a74"};function n(t){var e=o(t);return a(e)}function o(t){var e=r[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(r)},n.resolve=o,t.exports=n,n.id="c653"},c6cc:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-offset",class:t.classes,style:t.styles},[t._t("default")],2)},n=[],o=(a("c5f6"),{props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}}),i=o,s=(a("1196"),a("2877")),l=Object(s["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports},cb2c:function(t,e,a){"use strict";var r=a("4937"),n=a.n(r);n.a},cbcd:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",color:"#003b94",dark:""}},r),[t._v(" Editar ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.Update()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-toolbar",{attrs:{color:"#003b94"}},[a("v-toolbar-title",[t._v("Editar "+t._s(t.nombre))]),a("v-spacer")],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("h4",[t._v(" Código: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Código",name:"codigo",value:t.codigo}}),a("h4",[t._v(" Clave Interna: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Clave Interna",name:"clave_interna",value:t.clave_interna}}),a("h4",[t._v(" Nombre: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Nombre",name:"nombre",value:t.nombre}}),a("h4",[t._v(" Descripción: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Descripción",name:"descripcion",value:t.descripcion}}),a("h4",[t._v(" Categoría: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Categoría",name:"categoria",value:t.categoria}}),a("h4",[t._v(" Subcategoría: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Subcategoría",name:"tipo",value:t.tipo}}),a("h4",[t._v(" Marca: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Marca",name:"marca",value:t.marca}}),a("h4",[t._v(" Autos: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Autos",disabled:"true"}}),a("h4",[t._v(" Precio: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Precio",name:"precio",value:t.precio,type:"number"}}),a("h4",[t._v(" Stock: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Stock",name:"stock",value:t.stock,type:"number"}}),a("h4",[t._v(" Status: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Status",name:"status",value:t.status}}),a("h4",[t._v(" Imágenes Asociadas: ")]),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Imagen 1",type:"file"}}),a("v-text-field",{staticClass:"purple-input",attrs:{label:"Imagen 2",type:"file"}}),a("v-text-field",{staticClass:"Imagen 3",attrs:{label:"Clave Interna",type:"file"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Cancelar\n        ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat",type:"submit"},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Guardar Cambios\n        ")])],1)],1)],1)],1)},n=[],o=(a("c5f6"),a("d722")),i=a("1157"),s=a.n(i),l={name:"Frame",props:{nombre:String,codigo:String,clave_interna:String,descripcion:String,categoria:String,tipo:String,marca:String,precio:Number,stock:Number,status:String,autos:String},data:function(){return{cant:0,info:null,dialog:!1}},methods:{Update:function(){o["a"].post("/ad-productos/update-product",s()(event.currentTarget).serializeArray()).then(function(t){}).catch(function(t){console.log(t)})}}},c=l,u=a("2877"),d=Object(u["a"])(c,r,n,!1,null,null,null);e["default"]=d.exports},cf98:function(t,e,a){},d23b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticStyle:{background:"#eee"},attrs:{id:"core-toolbar",flat:"",prominent:""}},[a("div",{staticClass:"v-toolbar-title"},[a("v-toolbar-title",{staticClass:"tertiary--text font-weight-light"},[t.responsive?a("v-btn",{staticClass:"default v-btn--simple",attrs:{dark:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.onClickBtn(e)}}},[a("v-icon",[t._v("mdi-view-list")])],1):t._e(),t._v("\n        "+t._s(t.title)+"\n      ")],1)],1),a("v-spacer"),a("v-toolbar-items",[a("v-flex",{attrs:{"align-center":"",layout:"","py-2":""}},[a("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/"}},[a("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-view-dashboard")])],1),a("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/user-profile"}},[a("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-account")])],1)],1)],1)],1)},n=[],o=a("cebc"),i=(a("7f7f"),a("2f62")),s={data:function(){return{notifications:["Mike, John responded to your email","You have 5 new tasks","You're now a friend with Andrew","Another Notification","Another One"],title:null,responsive:!1,responsiveInput:!1}},watch:{$route:function(t){this.title=t.name}},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(o["a"])({},Object(i["b"])("app",["setDrawer","toggleDrawer"]),{onClickBtn:function(){this.setDrawer(!this.$store.state.app.drawer)},onClick:function(){},onResponsiveInverted:function(){window.innerWidth<991?(this.responsive=!0,this.responsiveInput=!1):(this.responsive=!1,this.responsiveInput=!0)}})},l=s,c=(a("25f5"),a("2877")),u=Object(c["a"])(l,r,n,!1,null,null,null);e["default"]=u.exports},d722:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var r=a("bc3a"),n=a.n(r),o=n.a.create({baseURL:"http://localhost:3000"})},e3a9:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?a("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):a("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?a("span",[a("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),a("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),a("v-card-text",[t._t("default")],2),t.$slots.actions?a("v-divider",{staticClass:"mx-3"}):t._e(),t.$slots.actions?a("v-card-actions",[t._t("actions")],2):t._e()],1)},n=[],o=(a("c5f6"),{inheritAttrs:!1,props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}}),i=o,s=(a("cb2c"),a("2877")),l=Object(s["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports},e536:function(t,e,a){"use strict";var r=a("80d6"),n=a.n(r);n.a},ee4f:function(t,e,a){"use strict";var r=a("cf98"),n=a.n(r);n.a},f26b:function(t){t.exports={title:"Title"}},f902:function(t,e,a){},ff57:function(t,e,a){"use strict";var r=a("f902"),n=a.n(r);n.a},ffe0:function(t,e,a){var r={"./core/Detalles.vue":"451f","./core/Detalles0.vue":"09fe","./core/Detalles1.vue":"cbcd","./core/Detalles2.vue":"0fd0","./core/Detalles3.vue":"c197","./core/Detalles4.vue":"2056","./core/Drawer.vue":"41c0","./core/Filter.vue":"b2ab","./core/Footer.vue":"7a74","./core/Toolbar.vue":"d23b","./core/View.vue":"9306","./helper/Offset.vue":"c6cc","./material/Card.vue":"e3a9","./material/ChartCard.vue":"78d5","./material/Notification.vue":"9d6c","./material/StatsCard.vue":"42e7"};function n(t){var e=o(t);return a(e)}function o(t){var e=r[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(r)},n.resolve=o,t.exports=n,n.id="ffe0"}});
//# sourceMappingURL=app.f90c92d0.js.map