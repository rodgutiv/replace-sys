<template lang="pug">
v-app
    div
      router-view
    v-container(grid-list-md style="    max-width: fit-content;")
        v-card(style="padding: 10%;")
          v-layout(row wrap class="blue--text text-md-center" center style="padding: 1%;")
            v-flex(xs12 right)
              h1(style="color:#003b94; ") Detalles de Compra 
          v-layout(row wrap)
              v-flex(xs12 class="text-md-center")
                h2 Cantidad de productos: {{cantidad}}
              v-flex(xs12 class="text-md-center")
                h2 Total: $ {{total.toFixed(2)}}      
          //v-speacer
          v-layout(row wrap class="blue--text" style="padding-top:5%")
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
            
            v-layout(row wrap center style="color:#084a9f;")
              v-flex(xs12 class="text-md-center")
                h1() Forma de pago
              v-flex(xs6 class="text-md-center")
                v-btn.primary(slot="activator" round  dark @click="guardar") Pago con Paypal
              v-flex(xs6 class="text-md-center")
                oxxo(:id="id" :total="total" :cant="cantidad")
    
    v-container()
      v-layout.white(style="color:#084a9f;" text-xs-center row  wrap )
        v-flex(flex xs4)
            v-img(src="http://vps-nodolab.com/imagenes/tarjeta cash.png" width="30%"  style="margin-left: 35%;")
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
            v-img(src="http://vps-nodolab.com/imagenes/envio.png" width="30%"  style="margin-left: 35%;")
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
            v-img(src="http://vps-nodolab.com/imagenes/seguridad.png" width="30%"  style="margin-left: 35%;")
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
import oxxo from '@/components/Oxxo.vue'
import {api} from '@/api'
//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
    toolbar, oxxo
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
      existencia:null,
      total:0,
      id:null,
      cantidad:0
    }



},

 methods: {
   guardar(){
     //alert('gracias por su compra')
     //this.$router.push({ path: '/aplicacion/pagar'});
     //this.$router.push({ name: 'pagar'});
     //this.$router.push({ path: '/aplicacion/pagar'});
      /*api.post('/compra/pay', [{'total':this.total, 'cantidad':this.cantidad,'items':this.items2}])
      .then(response => {
        alert(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })*/
      alert('Pago realizado')

   }
 },
created() {
    this.id = sessionStorage.getItem("compra")
    this.code = this.$route.params.id
    //Carrito
    api.post(`/compra/listcar`,[{'id_compras':this.code}])
    .then(response => {
      // JSON responses are automatically parsed.
      this.items=response.data
      for(var i = 0; i < this.items.length; i++){
        this.total = this.total + this.items[i].total
        this.cantidad = this.cantidad + this.items[i].cantidades
        this.items2[i] = {'name':this.items[i].nombre,'sku':i+1,'price':this.items[i].total,'currency':'MX','quantity':this.items[i].cantidades}
      }
      sessionStorage.setItem("total",this.total)
      sessionStorage.setItem("cantidad", this.cantidad)
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
