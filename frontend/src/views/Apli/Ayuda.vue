<template lang="pug">
v-app
  div
    div
      router-view
    v-container(grid-list-md text-xs-center)
      v-card( style="background: linear-gradient(180deg,#000,#2b467b);     padding: 10px;")
        v-layout(row wrap class="white--text")
          v-flex(xs12 center)
            v-layout(row wrap)
              h1(id="titulo") Ayuda
            v-layout(row wrap)
              v-flex(xs8 text-xs-center style="margin-left: 17%;" )
                h2 Nombre
                v-input
                  v-text-field( label="Nombre completo / Empresa" single-line solo required)
              v-flex(xs8 text-xs-center style="margin-left: 17%;" )
                  h2 Email
                  v-input
                    v-text-field( label="Direccion de correo de respuesta" single-line solo required)
              v-flex(xs8 text-xs-center style="margin-left: 17%;" )
                  h2 Mensaje
                  v-input
                    v-text-field( label="Mensaje" single-line solo required)
            v-layout(row wrap)
              v-flex(xs8 text-xs-center  style="margin-left: 17%;" )
                v-btn(v-on:click="Submit3()") Enviar
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
    Submit3(){
      api.get('/ayuda/')
      .then(response => {
        this.models = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  created() {

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
