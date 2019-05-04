<template lang="pug">
v-app
    div
      router-view
    v-container(grid-list-md text-xs-center)
      //v-card( style="background: linear-gradient(180deg,#000,#2b467b);     padding: 10px;")
      v-card( style="background: #152d5b;     padding: 10px;")
        v-form(ref="form" v-model="valid" v-on:submit.prevent="Submit3()" lazy-validation)
          v-layout(row wrap class="white--text")
            v-flex(xs12 center)
              v-layout(row wrap)
                h1(id="titulo") Ayuda
              v-layout(row wrap)
                v-flex(xs8 text-xs-center style="margin-left: 17%;" )
                  h2 Nombre
                  v-input
                    v-text-field( name="name" label="Nombre completo / Empresa" single-line solo required)
                v-flex(xs8 text-xs-center style="margin-left: 17%;" )
                    h2 Email
                    v-input
                      v-text-field( name="from" label="Direccion de correo de respuesta" single-line solo required)
                v-flex(xs8 text-xs-center style="margin-left: 17%;" )
                    h2 Mensaje
                    v-input
                      v-textarea( name="message" label="Mensaje" single-line solo required)
              v-layout(row wrap)
                v-flex(xs8 text-xs-center  style="margin-left: 17%;" )
                  v-btn(type="submit") Enviar
    v-container
      v-layout(class="white--text" :style="content1" text-xs-center row  wrap style="width: 100%;")
                v-flex(flex xs4 style="color: #152d5b;" )
                    h3 SERVICIO AL CLIENTE
                    v-layout(row  wrap)
                        v-flex(xs4)
                            v-img(src="http://localhost:3000/imagenes/atención.png" width="30%"  style="margin-left:80%;")
                        v-flex(xs8)
                            v-layout(row  wrap)
                                v-flex(xs12)
                                    span Contactanos
                                v-flex(xs12)
                                    span (443) 254 34 56
                    v-spacer
                    v-layout(row  wrap)
                        v-flex(xs4)
                            v-img(src="http://localhost:3000/imagenes/ubicación2.png" width="30%"    style="margin-left:80%;")
                        v-flex(xs8)
                            v-layout(row  wrap)
                                v-flex(xs12)
                                    span Encuentranos en:
                                v-flex(xs12)
                                    span Av. Acueducto 1969
                                v-flex(xs12)
                                    span Matamoros 58240
                                v-flex(xs12)
                                    span Morelia, mich.

                v-flex(flex xs4 style="color: #152d5b;" )
                    h3 CUENTAS Y PEDIDOS
                    v-layout(row  wrap)
                        v-flex(xs12)
                            span Contactanos
                        v-flex(xs12)
                            span Factura electrónica
                        v-flex(xs12)
                            span Preguntas frecuentes
                v-flex(flex xs4 style="color: #152d5b;" )
                    h3 INFORMACIÓN
                    v-layout(row  wrap)
                        v-flex(xs12)
                            span Contactanos
                        v-flex(xs12)
                            span Factura electrónica
                        v-flex(xs12)
                            span Preguntas frecuentes
</template>
<script>
import toolbar from '@/components/Toolbar.vue'

import {api} from '@/api'
import $ from 'jquery'
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
      alert('entro')
      api.post('/ayuda/',$(event.currentTarget).serializeArray())
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
