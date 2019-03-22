<template lang="pug">
v-app
  div
    toolbar
    div
      router-view
    v-container(grid-list-md text-xs-center)
      v-card(style="padding: 10px;")
        v-layout(row wrap class="blue--text" center)
          v-flex(xs6)
            v-img(src="http://localhost:3000/imagenes/disco2.png")
          divider(vertical)
          v-flex(xs6 style="padding: 6%;")
            v-layout(row wrap)
              h1(id="titulo" style="color:#003b94;") {{nombre}}
            v-layout(row wrap)
              h3(id="precio" style="color:#003b94;") ${{precio}}
            v-layout(row wrap)
              v-flex(xs4 style="    padding-left: 10%;")
                v-text-field(style="width: 50px; color:#003b94;" type="number"  min="1" value=0 name="stock_products")
              v-flex(xs4 style="padding-right:30%;")
                v-btn.white--text(color="#003b94") comprar
              v-flex(xs4 style="padding-right:10%;")
                v-btn.white--text(color="#003b94") agregar
            v-layout(row wrap)
              v-flex(xs12  style="padding-left: 10%;")
                v-img(src="http://localhost:3000/imagenes/tarjetas.png" style="width:80%;")
        divider
        v-layout(row wrap class="blue--text")
          v-flex(xs5)
            v-layout(row wrap)
              v-flex(xs12 center)
                h2(style="color:#084a9f;") Especificaciones
            v-layout(row wrap center)
              v-flex(xs6)
                h3(style="color:#084a9f;") Marca:
              v-flex(xs6)
                h3(style="color:#084a9f;") {{marca}}
            v-layout(row wrap center)
              v-flex(xs6)
                h3(style="color:#084a9f;") Tipo:
              v-flex(xs6)
                h3(style="color:#084a9f;") {{tipo}}
          v-flex(xs7)
            v-layout(row wrap)
              v-flex(xs12 center)
                h2(style="color:#084a9f;") Te puede gustar
                v-data-iterator(:items="items2"  :search="escrito" item-key="key_ext" :rows-per-page-items="rowsPerPageItems2"  row wrap :pagination.sync="pagination2" content-tag="v-layout")
                  v-flex(slot="item" slot-scope="props" text-xs-left xs12 sm6 md3 lg3)
                    v-card(id="bloque")
                      v-img(src="http://localhost:3000/imagenes/disco.png")
                      v-divider(id="division")
                      v-card-title(id="act" primary-title style="al" )
                        div
                          div
                            h5(style="color:#003b94;") {{props.item.nombre}}
                          div
                            h5(style="color:#003b94;") ${{props.item.precio}}
                          div 
                            v-rating(id="stars" size="10" v-model="rating" readonly background-color="#003b94" style="color:#003b94;")
                      v-card-actions(id="act")
                        v-btn(id="boton_prod" small round v-on:click="comprar(props.item.codigo)") Comprar
                          //router-link(class="white--text"  :to="{ name: 'agregar', params: { code: props.item.code } }")
                        v-btn(id="boton_prod" small round @click="show = !show") Ver detalles
                      v-card-text(v-show="show" id="datos") 
                        h6 Marca: {{marca}}
                        h6 Garantía de 2 años
                        h6 Condiciones PRoducto Cerrado y nuevo
                        //Modaldetalles(:marca="props.item.marca")
    v-container(grid-list-md )
      v-card(style="background: white; padding: 50px;")
        v-layout(row wrap class="blue--text")
          v-flex(xs6 class="text-lg-left")
            h2(style="color:#084a9f;") Descripción
            h3(style="color:#084a9f;") {{descripcion}}
          v-flex(xs6 text-xs-center)
            h2(style="color:#084a9f;") ¿En que te podemos ayudar?
            v-input
              v-text-field( label="REALIZA UNA PREGUNTA" single-line solo )
        v-layout(row wrap class="blue--text" )
          v-flex(xs6 class="text-lg-left")
            h2(style="color:#084a9f;") Compativilidad
            v-data-table( 
            :headers="headers" 
            :pagination.sync="pagination"
            :rows-per-page-items="rowsPerPageItems" 
            item-key="name" 
            :items="items" 
              class="elevation-1"
            )
              template(slot="headerCell" slot-scope="props")
                v-tooltip(bottom)
                  span(slot="activator") {{ props.header.text }}
                  span {{ props.header.text }}

              template( slot="items" slot-scope="props")
                td {{props.item.marca_auto}}
                td {{props.item.modelo}}
                td {{props.item.anio}}
                td {{props.item.motor}}
          v-flex(xs6 text-xs-center)
            h2(style="color:#084a9f;") Califica nuestro producto
            v-rating(id="stars" v-model="rating"  background-color="#003b94" color="#003b94")
    v-container()
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
      rowsPerPageItems: [12],
      rowsPerPageItems2: [4],
      pagination: {
        rowsPerPage: 12
      },
      pagination2: {
        rowsPerPage: 4
      },
      items: [],
      items2: [],
      errors: [],
      empty: [],
      headers:[
        { text: 'Marca', value: null, sortable:false },  
        { text: 'Modelo', value: null },
        { text: 'Año', value: null },
        { text: 'Motor', value: null }
      ]
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
      this.marca = response.data.marca
      this.descripcion = response.data.descripcion
      this.items = response.data.autos
    })
    .catch(e => {
      this.errors.push(e)
    }),
    api.post(`/products/specific`,this.marca)
    //api.get(`/producto`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.items2 = response.data
      alert(this.items2)
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
    padding-left: 40px;
    padding-top: 20px;
  }
  #precio{
    padding-left: 40px;
    padding-top: 40px;
  }
</style>
