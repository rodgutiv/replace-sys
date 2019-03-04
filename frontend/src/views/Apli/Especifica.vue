<template lang="pug">
v-app
  div
    toolbar
    div
      router-view
    v-container(grid-list-md text-xs-center style="background: white;")
      v-layout(row wrap center)
         v-flex(xs11)
            //h1.display-3 Products {{id}}
         v-flex(xs12 lg12)
          v-text-field(v-model="escrito" label="Find Product" style="display:none" single-line solo prepend-icon="search" )
      v-layout(row wrap)
         v-flex(lg12 xs12)
          v-data-iterator(:items="items" :search="escrito" item-key="key_ext" :rows-per-page-items="rowsPerPageItems"  row wrap :pagination.sync="pagination" content-tag="v-layout")
            v-flex(slot="item" slot-scope="props" text-xs-left xs12 sm6 md3 lg3)
              v-card(id="bloque")
                v-img(src="http://localhost:3000/imagenes/disco.png")
                v-divider(id="division")
                v-card-title(id="act" primary-title)
                  div
                    div|
                      h3(style="color:#003b94;")  {{props.item.nombre}}
                    div
                      h3(style="color:#003b94;") ${{props.item.precio}}
                    div 
                      v-rating(id="stars" v-model="rating" readonly  background-color="#003b94" style="color:#003b94;")
                v-card-actions(id="act")
                  v-btn(id="boton_prod" round v-on:click="comprar(props.item.codigo)") Comprar
                    router-link(class="white--text"  :to="{ name: 'agregar', params: { code: props.item.code } }")
                  v-btn(id="boton_prod" round @click="show = !show") Ver detalles
                v-card-text(v-show="show" id="datos") 
                  h4 Marca: {{props.item.marca}}
                  h4 Garantía de 2 años
                  h4 Condiciones PRoducto Cerrado y nuevo
      
    
    
    
    
    //foother
    v-container
      v-layout(class="white--text" :style="content2" text-xs-center row  wrap )
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

import {api} from '@/api'
//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
    toolbar
  },
  data () {
    return {
      escrito:null,
      info:null,
      show: false,
      id:null,
      rating: 3,
      rowsPerPageItems: [6, 12, 24],
      pagination: {
        rowsPerPage: 6
      },
      marca:null,
      modelo:null,
      año:null,
      motor:null,
      refaccion:null,
      items: [],
      errors: [],
      datos: []
    }



},

 methods: {
   comprar(dato){
     sessionStorage.setItem("code",dato);
     this.$router.push({ path: '/aplicacion/agregar/'+dato});
   }
 },
created() {
  if(sessionStorage.getItem("marca") != null){
    this.marca = sessionStorage.getItem("marca");
    //alert(this.marca)
    this.datos[0] = {brand:this.marca}
  }
  if(sessionStorage.getItem("modelo") != null){
    this.modelo = sessionStorage.getItem("modelo");
    //alert(this.modelo)
    this.datos[1] = {model:this.modelo}
  }
  if(sessionStorage.getItem("año") != null){
    this.año = sessionStorage.getItem("año");
    //alert(this.año)
    this.datos[2] = {year:this.año}
  }
  if(sessionStorage.getItem("motor") != null){
    this.motor = sessionStorage.getItem("motor");
    //alert(this.motor)
    this.datos[3] = {engine:this.motor}
  }
  if(sessionStorage.getItem("nombre") != null){
    this.refaccion = sessionStorage.getItem("nombre");
    //alert(this.refaccion)
    this.datos[4] = {name:this.refaccion}
  }
  //alert(this.datos)
  api.post(`/products/specific`,this.datos)
  //api.get(`/producto`)
  .then(response => {
    // JSON responses are automatically parsed.
    this.items = response.data
    //alert(response.data)
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
  #act{
    display: block;
  }
  #division{
    margin-left: 5%;
    max-width: 90%;
    border-width: 3px; 
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