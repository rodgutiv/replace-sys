(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-294e0788"],{"11e9":function(t,e,a){var r=a("52a7"),o=a("4630"),n=a("6821"),i=a("6a99"),s=a("69a8"),l=a("c69a"),c=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?c:function(t,e){if(t=n(t),e=i(e,!0),l)try{return c(t,e)}catch(a){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},"15cd":function(t,e,a){"use strict";var r=a("6e96"),o=a.n(r);o.a},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,a){var r=a("d3f4"),o=a("8b97").set;t.exports=function(t,e,a){var n,i=e.constructor;return i!==a&&"function"==typeof i&&(n=i.prototype)!==a.prototype&&r(n)&&o&&o(t,n),t}},"6e96":function(t,e,a){},"8b97":function(t,e,a){var r=a("d3f4"),o=a("cb7c"),n=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,a){return n(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:n}},9093:function(t,e,a){var r=a("ce10"),o=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},aa77:function(t,e,a){var r=a("5ca1"),o=a("be13"),n=a("79e5"),i=a("fdef"),s="["+i+"]",l="​",c=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),u=function(t,e,a){var o={},s=n(function(){return!!i[t]()||l[t]()!=l}),c=o[t]=s?e(v):i[t];a&&(o[a]=c),r(r.P+r.F*s,"String",o)},v=u.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(d,"")),t};t.exports=u},c5f6:function(t,e,a){"use strict";var r=a("7726"),o=a("69a8"),n=a("2d95"),i=a("5dbc"),s=a("6a99"),l=a("79e5"),c=a("9093").f,d=a("11e9").f,u=a("86cc").f,v=a("aa77").trim,f="Number",p=r[f],x=p,m=p.prototype,g=n(a("2aeb")(m))==f,b="trim"in String.prototype,_=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():v(e,3);var a,r,o,n=e.charCodeAt(0);if(43===n||45===n){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var i,l=e.slice(2),c=0,d=l.length;c<d;c++)if(i=l.charCodeAt(c),i<48||i>o)return NaN;return parseInt(l,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof p&&(g?l(function(){m.valueOf.call(a)}):n(a)!=f)?i(new x(_(e)),a,p):_(e)};for(var h,y=a("9e1e")?c(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;y.length>w;w++)o(x,h=y[w])&&!o(p,h)&&u(p,h,d(x,h));p.prototype=m,m.constructor=p,a("2aba")(r,f,p)}},d4af:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",[a("router-view")],1),a("v-container",{staticStyle:{"max-width":"fit-content"},attrs:{"grid-list-md":""}},[a("v-card",{staticStyle:{padding:"50px",with:"80%"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){e.preventDefault(),t.guardar()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-layout",{staticClass:"blue--text",staticStyle:{padding:"20px"},attrs:{row:"",wrap:"",center:""}},[a("v-flex",{attrs:{xs12:"",right:""}},[a("h1",{staticStyle:{color:"#003b94"}},[t._v("Entrega")])])],1),a("v-layout",{staticStyle:{padding:"20px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{staticStyle:{display:"none"},attrs:{color:"#003b94;",label:"Nombre",value:t.codigo,name:"id"}}),a("v-text-field",{attrs:{color:"#003b94;",label:"Nombre",value:t.nombre_cliente,name:"nombre"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{ref:"email",attrs:{color:"#003b94;",label:"Email",value:t.email,name:"email"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{color:"#003b94;",label:"Teléfono",name:"tel"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{color:"#003b94;",label:"Código Postal",name:"cpostal"}})],1)],1),a("v-divider",{attrs:{id:"divi",gradient:"to rigth, #7B1FA2, #E1BEE7"}}),a("v-layout",{staticStyle:{padding:"20px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{color:"#003b94;",label:"Estado",name:"estado"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{color:"#003b94;",label:"Municipio",name:"mun"}})],1)],1),a("v-divider",{attrs:{id:"divi"}}),a("v-layout",{staticStyle:{padding:"20px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{color:"#003b94;",label:"Calle",name:"calle"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{color:"#003b94;",label:"Núm Ext.",name:"next"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{color:"#003b94;",label:"Núm Int.",name:"nint"}})],1)],1),a("v-divider",{attrs:{id:"divi"}}),a("v-layout",{staticStyle:{padding:"20px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",lg6:""}},[a("v-text-field",{attrs:{color:"#003b94;",label:"Referencias",name:"referencia"}})],1)],1),a("v-divider",{attrs:{id:"divi"}}),a("v-layout",{staticStyle:{padding:"20px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{color:"#003b94;",label:"Colonia",name:"colonia"}})],1),a("v-flex",{staticStyle:{"padding-left":"50px","padding-top":"10px"},attrs:{xs6:""}},[a("v-btn",{attrs:{color:"#003b94;",type:"submit"}},[t._v("Siguiente")])],1)],1),a("v-layout",{staticClass:"blue--text",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-lg-left",attrs:{xs12:""}},[a("h2",{staticStyle:{color:"#084a9f"}},[t._v("Productos")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,pagination:t.pagination,"rows-per-page-items":t.rowsPerPageItems,"item-key":"name",items:t.items},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headerCell",fn:function(e){return[a("v-tooltip",{attrs:{bottom:""}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[t._v(t._s(e.header.text))]),a("span",[t._v(t._s(e.header.text))])])]}},{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.nombre))]),a("td",[t._v(t._s(e.item.cantidades))]),a("td",[t._v(t._s(e.item.precio))]),a("td",[t._v(t._s(e.item.total))]),a("td",[a("Agregar",{attrs:{producto:e.item.claves_productos,nombre:e.item.nombre,cantidades:e.item.cantidades}})],1),a("td",[a("Borrar",{attrs:{producto:e.item.claves_productos,cantidad:e.item.cantidades,nombre:e.item.nombre}})],1)]}}])})],1)],1)],1)],1)],1),a("v-container",[a("v-layout",{staticClass:"white",staticStyle:{color:"#084a9f"},attrs:{"text-xs-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{flex:"",xs4:""}},[a("v-img",{staticStyle:{"margin-left":"35%"},attrs:{src:"http://vps-nodolab.com:3000/imagenes/tarjeta cash.png",width:"30%"}}),a("h3",[t._v("Paga con tarjeta o en fectivo")]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("Con Mercado Pago,")])]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("tienes meses sinintereses")])]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("con tarjeta o efectivo en puntos")])]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("de pago. ¡Y siempre es seguro!")])])],1),a("v-flex",{attrs:{flex:"",xs4:""}},[a("v-img",{staticStyle:{"margin-left":"35%"},attrs:{src:"http://vps-nodolab.com:3000/imagenes/envio.png",width:"30%"}}),a("h3",[t._v("Envío gratis desde $449")]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("Con Mercado Pago,")])]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("tienes meses sinintereses")])]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("con tarjeta o efectivo en puntos")])]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("de pago. ¡Y siempre es seguro!")])])],1),a("v-flex",{attrs:{flex:"",xs4:""}},[a("v-img",{staticStyle:{"margin-left":"35%"},attrs:{src:"http://vps-nodolab.com:3000/imagenes/seguridad.png",width:"30%"}}),a("h3",[t._v("Seguridad")]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("Con Mercado Pago,")])]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("tienes meses sinintereses")])]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("con tarjeta o efectivo en puntos")])]),a("v-flex",{attrs:{xs12:""}},[a("span",[t._v("de pago. ¡Y siempre es seguro!")])])],1)],1)],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{block:"",width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",small:"",flat:"",icon:"",color:"red lighten-2",dark:""},slot:"activator"},[a("v-icon",[t._v("delete")])],1),a("v-card",{attrs:{dark:""}},[a("v-card-title",{staticClass:"headline"},[t._v("¿Cuantos quieres quitar?")]),a("v-flex",{attrs:{"offset-xs5":"",xs1:""}},[a("v-icon",{attrs:{large:"",color:"red"}},[t._v("warning")])],1),a("v-card-text",[t._v("Estas seguro que quieres quitar?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue white--text darken-1"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"red white--text darken-1"},on:{click:function(e){t.enviar(t.producto)}},nativeOn:{click:function(e){t.dialog2=!1}}},[t._v("Quitar")])],1)],1)],1)],1)},i=[],s=(a("c5f6"),{props:{producto:Number,nombre:String,cantidad:Number},data:function(){return{dialog:!1}},methods:{enviar:function(t){alert(t)}}}),l=s,c=a("2877"),d=Object(c["a"])(l,n,i,!1,null,null,null),u=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{block:"",width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",small:"",icon:"",color:"green accent-3",dark:""},slot:"activator"},[a("v-icon",[t._v("add")])],1),a("v-card",{attrs:{dark:""}},[a("v-card-title",{staticClass:"headline"},[t._v("¿Cuantos quieres agregar "+t._s(t.producto)+" ?")]),a("v-card-text",[t._v("Estas seguro que quieres quitar?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue white--text darken-1"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"red white--text darken-1"},on:{click:function(e){t.enviar(t.producto)}},nativeOn:{click:function(e){t.dialog2=!1}}},[t._v("Agregar")])],1)],1)],1)],1)},f=[],p={props:{producto:Number,nombre:String,cantidad:Number},data:function(){return{dialog:!1}},methods:{enviar:function(t){alert(t)}}},x=p,m=Object(c["a"])(x,v,f,!1,null,null,null),g=m.exports,b=a("d722"),_=a("1157"),h=a.n(_),y={components:{toolbar:toolbar,Borrar:u,Agregar:g},data:function(){return{codigo:null,nombre:null,precio:null,descripcion:null,tipo:null,marca:null,modelo:null,"año":null,marca_auto:null,motor:null,rating:3,code:null,show:!1,rowsPerPageItems:[12],rowsPerPageItems2:[4],pagination:{rowsPerPage:12},pagination2:{rowsPerPage:4},items:[],items2:[],errors:[],empty:[],headers:[{text:"Nombre",value:"nombre",sortable:!1},{text:"Cantidades",value:null},{text:"Precio",value:null},{text:"Total",value:null},{text:"Agregar",value:null},{text:"Borrar",value:null}],exist:7,existencia:null,nombre_cliente:null,email:null,info:null}},methods:{guardar:function(){var t=this;b["a"].post("/compra/buy",h()(event.currentTarget).serializeArray()).then(function(e){t.info=e.data,t.$router.push({name:"pagar",params:{id:t.codigo}})}).catch(function(e){t.errors.push(e),t.$router.push({name:"pagar",params:{id:t.codigo}})})}},created:function(){var t=this;this.codigo=this.$route.params.id,b["a"].post("/compra/listcar",[{id_compras:this.codigo}]).then(function(e){t.items=e.data}).catch(function(e){t.errors.push(e)})}},w=y,E=(a("15cd"),Object(c["a"])(w,r,o,!1,null,null,null));e["default"]=E.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-294e0788.3196dc9f.js.map