<template lang="pug">
v-app
  div
    toolbar
    div
      router-view
    v-container(grid-list-md text-xs-center style="background: white;")
      v-layout(row wrap center)  
        v-flex(xs12 lg5 mb-3)
          v-expansion-panel(popout)
            v-expansion-panel-content()
              template(v-slot="header")
                div Item
              v-card
                v-card-text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>

      v-layout(row wrap center)
         v-flex(xs11)
            //h1.display-3 Products {{id}}
         v-flex(xs12 lg12)
          v-text-field(v-model="escrito" label="Find Product" style="display:none" single-line solo prepend-icon="search" )
      v-layout(row wrap)
         v-flex(lg12 xs12)
          v-data-iterator(:items="items"  :search="escrito" item-key="key_ext" :rows-per-page-items="rowsPerPageItems"  row wrap :pagination.sync="pagination" content-tag="v-layout")
            v-flex(slot="item" slot-scope="props" text-xs-left xs12 sm6 md3 lg3)
              v-card(id="bloque")
                v-img(src="http://localhost:3000/imagenes/disco.png")
                v-divider(id="division")
                v-card-title(id="act" primary-title style="al" )
                  div
                    div
                      h3(style="color:#003b94;") {{props.item.nombre}}
                    div
                      h3(style="color:#003b94;") ${{props.item.precio}}
                    div 
                      v-rating(id="stars" v-model="rating" readonly background-color="#003b94" style="color:#003b94;")
                v-card-actions(id="act")
                  v-btn(id="boton_prod" round v-on:click="comprar(props.item.codigo)") Comprar
                  //Modaldetalles
                    //router-link(class="white--text"  :to="{ name: 'agregar', params: { code: props.item.code } }")
                  v-btn(id="boton_prod" round @click="show = !show") Ver detalles
                v-card-text(v-show="show" id="datos") 
                  h4 Marca: {{marca}}
                  h4 Garantía de 2 años
                  h4 Condiciones Producto Cerrado y nuevo
                  //Modaldetalles(:marca="props.item.marca")
      
    
    
    
    
    //foother
    v-container
      v-layout.white(style="color:#084a9f;" :style="content2" text-xs-center row  wrap )
        v-flex(flex xs4)
            v-img(src="http://localhost:3000/imagenes/tarjeta cash.png" width="30%"  style="margin-left: 35%;") 
            h3 Paga con tarjeta o en fectivo
            v-flex(xs12)
                span Con Mercado Pago,
            v-flex(xs12)
                span tienes meses sinintereses
            v-flex(xs12)
                span con tarjeta o efectivo en puntos
            v-flex(xs12)
                span de pago. ¡Y siempre es seguro!
        v-flex(flex xs4)
            v-img(src="http://localhost:3000/imagenes/envio.png" width="30%"  style="margin-left: 35%;") 
            h3 Envío gratis desde $449
            v-flex(xs12)
                span Con Mercado Pago,
            v-flex(xs12)
                span tienes meses sinintereses
            v-flex(xs12)
                span con tarjeta o efectivo en puntos
            v-flex(xs12)
                span de pago. ¡Y siempre es seguro!
        v-flex(flex xs4)
            v-img(src="http://localhost:3000/imagenes/seguridad.png" width="30%"  style="margin-left: 35%;") 
            h3 Seguridad
            v-flex(xs12)
                span Con Mercado Pago,
            v-flex(xs12)
                span tienes meses sinintereses
            v-flex(xs12)
                span con tarjeta o efectivo en puntos
            v-flex(xs12)
                span de pago. ¡Y siempre es seguro!
</template>
<script>
import toolbar from '@/components/Toolbar.vue'
//import Modaldetalles from '@/components/Detalles.Vue'
import {api} from '@/api'
//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
    toolbar //, Modaldetalles
  },
  data () {
    return {
      escrito:'',
      info:null,
      rating: 3,
      id:null,
      show: false,
      rowsPerPageItems: [12, 24, 36],
      pagination: {
        rowsPerPage: 12
      },
      items: [],
      errors: [],
      empty: [],
      content1:null,
      content2:null,
    }



},

 methods: {
   comprar(dato){
     sessionStorage.setItem("code",dato);
     this.$router.push({ path: '/aplicacion/agregar/'+dato});
   }
 },
created() {
    sessionStorage.setItem("content1","display:none")
    sessionStorage.setItem("content2",null)
    //alert(this.content2)
    if(sessionStorage.getItem("dato")!=null){
      this.escrito=sessionStorage.getItem("dato")
    }else{
      this.escrito=''
    }
    api.get(`/products/all`)    
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    
    
}


}

</script>
<style>
  #bloque{
    text-align: center;
  }
  #boton_prod{
    font-size: 12px;
    color: white;
    background-color: #003b94;
  }
  #stars{
    color: #003b94 !important;
  }
  #act{
    display: block;
  }
  #division{
    margin-left: 5%;
    max-width: 90%;
    border-width: 1px; 
  }
  .theme--light.v-divider{
    border-color:#bac5df
  }
  #datos{
    text-align: left;
  }
  .primary--text{
    color: #003b94 !important;
  }
</style>
