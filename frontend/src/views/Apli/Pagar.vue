<template lang="pug">
v-app
    div
      router-view
    v-container(grid-list-md style="    max-width: fit-content;")
      v-card(style="padding: 50px; with:80%")
        v-form(ref="form" v-on:submit="guardar" lazy-validation)
          v-layout(row wrap class="blue--text" center style="padding: 20px;")
            v-flex(xs12 right)
              h1(style="color:#003b94; ") Forma de Pago
          v-layout(row wrap style="padding: 20px;")
              v-radio-group( column)
                v-flex(xs12 color="#003b94" )
                  v-radio( label="Tarjeta de Crésdito" value="Tarjeta de Crésdito" name="pago")
                v-divider(id="divi" gradient="to rigth, #7B1FA2, #E1BEE7")
                v-flex(xs12 color="#003b94" )
                  v-radio(label="Tarjeta de Débito" value="Tarjeta de Débito" name="pago")
                v-divider(id="divi" gradient="to rigth, #7B1FA2, #E1BEE7")
                v-flex(xs12 color="#003b94" )
                  v-radio(label="Transferencia Electrónica" value="Transferencia Electrónica" name="pago")
          //  v-layout(row wrap style="padding: 20px;")
              v-flex(xs12 lg6 color="#003b94" )
                v-checkbox(v-model="checkbox" label="Tarjeta de Crésdito")
                //v-text-field(color="#003b94;"  :value="client" label="Tarjeta de Crésdito"  name= "clientname" )
            v-divider(id="divi" gradient="to rigth, #7B1FA2, #E1BEE7")
            v-layout(row wrap style="padding: 20px;")
              v-flex(xs6)
                v-checkbox(v-model="checkbox" label="Tarjeta de Débito")
                //v-text-field(color="#003b94;" :value="client" label="Tarjeta de Débito"  name= "clientname" )
            v-divider(id="divi")
            v-layout(row wrap style="padding: 20px;")
              v-flex(xs6)
                v-checkbox(v-model="checkbox" label="Tarjeta de Débito")
                //v-text-field(color="#003b94;" :value="client" label="c"  name= "clientname" )
          v-layout(row wrap style="padding: 20px;")
            v-flex(xs6 style="padding-left:25%;")              
              v-btn(color="#003b94;" @click="guardar") Siguiente              
          //v-speacer
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
                  td {{props.item.nombre}}
                  td {{props.item.cantidades}}
                  td {{props.item.precio}}
                  td {{props.item.total}}
    
    v-container()
      v-layout.white(style="color:#084a9f;" text-xs-center row  wrap )
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
        { text: 'Nombre', value: 'nombre', sortable:false },  
        { text: 'Cantidades', value: null },
        { text: 'Precio', value: null },
        { text: 'Total', value: null }
      ],
      exist:7,
      existencia:null
    }



},

 methods: {
   guardar(){
     alert('gracias por su compra')
     //this.$router.push({ path: '/aplicacion/pagar'});
     //this.$router.push({ name: 'pagar'});
     //this.$router.push({ path: '/aplicacion/pagar'});
      /*api.post('/products/stockup', $(event.currentTarget).serializeArray())
      .then(response => {
        alert(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })*/

   }
 },
created() {
    this.code = this.$route.params.id
    //Carrito
    api.post(`/compra/listcar`,[{'id_compras':this.code}])
    .then(response => {
      // JSON responses are automatically parsed.
      this.items=response.data
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
  #divi{
    margin-left: initial;
    max-width: inherit;
    border-width: 3px;
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
  .primary--text{
    color: #003b94 !important;
    caret-color: #003b94 !important;
  }
  .theme--light.v-label {
    color: #003b94 !important;
  }
  .v-input__control{
    width: -webkit-fill-available;
  }
</style>
