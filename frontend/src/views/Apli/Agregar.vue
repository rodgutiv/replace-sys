<template lang="pug">
v-app
  div
    div
      router-view
    v-container(grid-list-md text-xs-center)
      v-card( style="background: white;     padding: 10px;")
        v-layout(row wrap class="blue--text")
          v-flex(xs6)
            v-img(src="http://localhost:3000/imagenes/disco2.png")
          v-flex(xs6 center)
            v-layout(row wrap)
              h1(id="titulo") {{nombre}}
            v-layout(row wrap)
              h3(id="precio") ${{precio}}
            v-layout(row wrap)
              v-flex(xs3)
                h3 3
              v-flex(xs4)
                v-btn comprar            
              v-flex(xs4)
                v-btn agregar
            v-layout(row wrap center)
              v-flex(xs12)
                v-img(src="http://localhost:3000/imagenes/tarjetas.png")
        v-layout(row wrap class="blue--text")
          v-flex(xs5)
            v-layout(row wrap)
              v-flex(xs12 center)
                h2 Especificaciones
            v-layout(row wrap center)
              v-flex(xs6)
                h3 Marca: 
              v-flex(xs6)
                h3 {{marca}}
            v-layout(row wrap center)
              v-flex(xs6)
                h3 Tipo: 
              v-flex(xs6)
                h3 {{tipo}}
          v-flex(xs7)
            v-layout(row wrap)
              v-flex(xs12 center)
                h2 Te puede gustar
    v-container(grid-list-md )
      v-card(style="background: white; padding: 20px;")
        v-layout(row wrap class="blue--text")
          v-flex(xs6 class="text-lg-left") 
            h2 Descripción
            h3 {{descripcion}}
          v-flex(xs6 text-xs-center)
            h2 ¿En que te podemos ayudar?
            v-input
              v-text-field( label="REALIZA UNA PREGUNTA" single-line solo )
        v-layout(row wrap class="blue--text" )
          v-flex(xs6 class="text-lg-left")
            h2 Compativilidad
          v-flex(xs6 text-xs-center)
            h2 Califica nuestro producto
            v-rating(id="stars" v-model="rating"  background-color="#003b94" color="#003b94")
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
      nombre:null,
      precio:null,
      descripcion:null,
      tipo:null,
      marca:null,
      modelo:null,
      año:null,
      marca_auto:null,
      motor:null,
      rating: 3,
      code:null,
      show: false,
      rowsPerPageItems: [12, 24, 36],
      pagination: {
        rowsPerPage: 12
      },
      items: [],
      errors: [],
      empty: []
    }



},

 methods: {
   comprar(){

   }
 },
created() {
    this.code = sessionStorage.getItem("code");
    //alert(this.code)
    api.get(`/products/search/`+this.code)
    //api.get(`/producto`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.nombre = response.data.nombre
      this.precio = response.data.precio
      this.modelo = response.data.modelo
      this.tipo = response.data.tipo
      this.descripcion = response.data.descripcion
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
  #stars{
    color:#003b94;
  }
  #boton_prod{
    font-size: 12px;
    color: white;
    background-color: #003b94;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
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
  #titulo{
    width: 100%;
  }
  #precio{
    width: 40%;
  }
</style>
