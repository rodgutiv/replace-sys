<template lang="pug">
div
  v-dialog(v-model="dialog" persistent width="400")
    v-btn( @click="dialog = true" small slot="activator" dark) Detalles
    v-card
      v-form(ref="form" v-model="valid" v-on:submit.prevent="onSubmit()" lazy-validation v-on:click="closeModal")
        v-card-title.headline.black.white--text(primary-title) Producto:  {{Nombre}}
        v-layout(row wrap)
          v-flex(xs12 text-xs-center)
            v-card
              v-card-title(primary-title).headline.blue.darken-4.white--text Detalles
              v-layout(row wrap)
                v-flex(xs6)
                  h4 Tipo
                v-flex(xs6) {{tipo}}
                v-flex(xs6)
                  h4 Precio
                v-flex(xs6) {{precio}}
                v-flex(xs6)
                  h4 Marca
                v-flex(xs6) {{marca}}

        v-divider 
        v-card-actions
          v-btn.error(color="white" flat @click.native="dialog = false") Cerrar
        




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
    name:'Modalprod',
 props: {
    tipo: String,
    Nombre:String,
    marca:String,
    precio:String,
    codigo:String
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