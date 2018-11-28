<template lang="pug">
div
  v-dialog(v-model="dialog" persistent width="400")
    v-btn( @click="dialog = true" small slot="activator"  dark) Buy
    v-card
      v-form(ref="form" v-model="valid" v-on:submit.prevent="onSubmit()" lazy-validation v-on:click="closeModal")
        v-card-title.headline.black.white--text(primary-title) Producto:  {{description}}
        v-layout(row wrap)
          v-flex(xs12 text-xs-center)
            v-card
              v-card-title(primary-title).headline.blue.darken-4.white--text Detalles
              v-layout(row wrap)
                v-flex(xs6)
                  h4 Stock
                v-flex(xs6) {{stock}}
                v-flex(xs6)
                  h4 Purchase Price
                v-flex(xs6) {{sale_price}}
                v-flex(xs6)
                  h4 Weight
                v-flex(xs6) {{weight}}
              v-layout
                v-flex(xs12 )
                  v-input( prepend-icon="label")
                    v-text-field(:value="id_order"  label="ID"  name= "id_order_company" readonly="readonly")
                  v-input( prepend-icon="label")
                    v-text-field(:value= "Producto"  label="ID"  name= "id_products" readonly="readonly")
                  v-input( prepend-icon="label")
                    v-text-field(type="number"  min="1" label="Quantity" value=1 name= "stock")
                  v-input( prepend-icon="label")
                    v-text-field(readonly="readonly" :value="sale_price" type="number"  min="1" label="Price" name= "sale_price")
                  v-input( prepend-icon="label")
                    v-text-field(readonly="readonly" type="text"  label="Usuario" :value="usuario" name ="id_user")

        v-divider 
        v-card-actions
          v-btn.error(color="white" flat @click.native="dialog = false") Cerrar
          v-spacer
          v-btn.primary(type="submit" @click="submit" /*@click.native="dialog = false"*/) Añadir
        




</template>
<style type="text/css">
  .dato{
    display: none;
  }


</style>

<script>
//import {api} from '@/api'
//import $ from 'jquery'
  export default {
    name:'ModalCar',
 props: {
    description: String,
    Producto:String,
    id_order:String,
    volume:String,
    weight:String,
    stock:String,
    purchase_price:String,
    sale_price:String
  },
    data () {
      return {
        usuario:null,
        info:null,
        dialog: false

      }
    }

  }
</script>