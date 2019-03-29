<template lang="pug">
v-app
  div
    toolbar
    div
      router-view
    v-container(grid-list-md text-xs-center)
      v-card(style="padding: 10px;")
        v-form
          v-layout(row wrap class="blue--text" center)
            v-flex(xs12)
              h1 Entrega
          v-layout(row wrap)
            v-flex(xs6)
              h3 CÓDIGO POSTAL
            v-flex(xs6)
              v-text-field
          v-divider
          v-layout(row wrap)
            v-flex(xs6)
              v-flex(xs6)
                h3 Estado
              v-flex(xs6)
                v-text-field
            v-flex(xs6)
              v-flex(xs6)
                h3 Município
              v-flex(xs6)
                v-text-field
          v-divider
          v-layout(row wrap)
            v-flex(xs2)
              h3 Calle
            v-flex(xs2)
              v-text-field
            v-flex(xs2)
              h3 Núm Ext.
            v-flex(xs2)
              v-text-field
            v-flex(xs2)
              h3 Núm Int.
            v-flex(xs2)
              v-text-field
          v-divider
          v-layout(row wrap)
            v-flex(xs6)
              h3 Referencias 
            v-flex(xs6)
              v-text-field
          v-divider
          v-layout(row wrap)
            v-flex(xs6)
              h3 Colonia 
            v-flex(xs6)
              v-text-field
          v-speacer
          v-layout(row wrap class="blue--text" )
            v-flex(xs12 class="text-lg-left")
              h2(style="color:#084a9f;") Productos
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

          //v-flex(xs6 style="padding: 6%;")
            v-layout(row wrap)
              h1(id="titulo" style="color:#003b94;") {{nombre}}
            v-layout(row wrap)
              v-flex(xs6 left)
                h3(style="color:#003b94;") {{existencia}}
              v-flex(xs6 left)            
                h3(style="color:#003b94;") ${{precio}}
            v-layout(row wrap)
              v-flex(xs4 style="padding-left: 10%;")
                v-text-field(style="width: 50px; color:#003b94;" type="number"  min="1" value=0 name="stock_products")
              v-flex(xs4 style="padding-right:30%;")
                v-btn.white--text(color="#003b94" @click="comprar") comprar
              v-flex(xs4 style="padding-right:10%;")
                v-btn.white--text(color="#003b94" @click="agregar") agregar
            v-layout(row wrap)
              v-flex(xs12  style="padding-left: 10%;")
                v-img(src="http://localhost:3000/imagenes/tarjetas.png" style="width:80%;")
        
    
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
      ],
      exist:7,
      existencia:null
    }



},

 methods: {
   gardar(){
      api.post('/products/stockup',this.code)
      .then(response => {
        alert(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
   }
 },
created() {
    this.code = sessionStorage.getItem("code");
    //Carrito
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
