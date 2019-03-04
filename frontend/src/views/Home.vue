<template lang="pug">
v-app
  div
    v-container(grid-list-md r id="carrusel")
        v-carousel(id ="carru1")
            v-carousel-item(v-for="(item,i) in items" :key="i" :src="item.src")
    v-container(grid-list-md r id="contenido-busca")
      v-layout(row center)
        v-flex(xs6 sm6 id="bloques")
          v-layout(row id="busquedas" style="height:100%;")
            v-flex(xs2 style="padding-top: 130px; margin-left: 25%;")
              a(v-on:click="Submit()")
                v-img(src="http://localhost:3000/imagenes/lupita busqueda.png" width="50px")
            v-flex(xs6 style="padding-top: 130px;") 
              v-text-field(ref="dat" color="black" v-model="datos" label="BÚSQUEDA GENERAL" solo name="buscar" v-on:keyup.enter="Submit()")
        v-flex(xs6 sm6 id="bloques")
          v-layout(row  id="busquedas")
            v-flex(xs5 class="white--text" padding-top="160px")
              v-layout(row  )
                v-flex(xs4 style="padding-top: 30px;")
                  a(v-on:click="Submit2")
                    v-img(src="http://localhost:3000/imagenes/lupita busqueda.png" max-width="40px")
                v-flex(xs8 style="padding-top: 30px;")
                  h3 BÚSQUEDA ESPECÍFICA
            v-flex(fñex xs7)
              v-layout(row)                
                v-flex(xs10 sm10)
                  h3(class="white--text" id="text") MARCA
                  v-select(v-model="selec1"
                    :items="brands"
                    attach
                    solo
                    color="black"
                    item-value="marca"
                    @change="model(selec1)"
                    v-on:keyup.enter="Submit2()"
                    required
                    )
                  v-text-field(ref="marcas" name="marca" style="display:none" readonly :value="selec1")
                  h3(class="white--text" id="text")  MODELO
                  v-select(
                  v-model="selec2"
                  attach
                  color="black"
                  :items="models"
                  item-value="name"
                  @change="year(selec2)"
                  v-on:keyup.enter="Submit2()"
                  required
                  solo)
                  v-text-field(ref="modelos" name="modelo" style="display:none" readonly :value="selec2" )
                  h3(class="white--text" id="text") AÑO
                  v-select(
                  attach
                  color="black"
                  v-model="selec3"
                  :items="years"
                  item-value="año"
                  @change="engine(selec3)"
                  v-on:keyup.enter="Submit2()"
                  required
                  solo)
                  v-text-field(ref="años" name="año" style="display:none" readonly :value="selec3" )
                  h3(class="white--text" id="text") MOTOR
                  v-select(
                  attach
                  color="black"
                  v-model="selec4"
                  :items="engines"
                  item-value="motor"
                  @change="sparepart(selec4)"
                  v-on:keyup.enter="Submit2()"
                  required
                  solo)
                  v-text-field(ref="motores" name="motor" style="display:none" readonly :value="selec4" )
                  h3(class="white--text" id="text") REFACCION
                  v-select(
                  attach
                  color="black"
                  v-model="selec5"
                  :items="spareparts"
                  item-value="refaccion"
                  @change="final(selec5)"
                  v-on:keyup.enter="Submit2()"
                  required
                  solo)
    //footer
    v-container
      v-layout(class="white--text" :style="content1" text-xs-center row  wrap style="width: 100%;")
                v-flex(flex xs4)
                    h3 SERVICIO AL CLIENTE
                    v-layout(row  wrap)
                        v-flex(xs4)
                            v-img(src="http://localhost:3000/imagenes/atención_al_cliente.png" width="30%"  style="margin-left:80%;") 
                        v-flex(xs8)
                            v-layout(row  wrap)
                                v-flex(xs12)
                                    span Contactanos
                                v-flex(xs12)
                                    span (443) 254 34 56
                    v-spacer
                    v-layout(row  wrap)
                        v-flex(xs4)
                            v-img(src="http://localhost:3000/imagenes/ubicación.png" width="30%"    style="margin-left:80%;") 
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
                    
                v-flex(flex xs4)
                    h3 CUENTAS Y PEDIDOS
                    v-layout(row  wrap)
                        v-flex(xs12)
                            span Contactanos
                        v-flex(xs12)
                            span Factura electrónica
                        v-flex(xs12)
                            span Preguntas frecuentes
                v-flex(flex xs4)
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
//import footer from '@/components/Footer.vue'

import {api} from '@/api'
//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
  },
  data () {
    return {
        escrito:null,
        info:' ',
        id:0,
        datos:'',
        rowsPerPageItems: [6, 12, 24],
        pagination: {
            rowsPerPage: 6
        },
        brands:[],
        models: [],
        years: [],
        engines: [],
        spareparts: [],
        errors: [],
        empty: [],
        items: [
          {
            src: 'http://localhost:3000/imagenes/slider.png'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
        
    }
  },
  methods: {
    Submit(){
      this.info = this.$refs.dat.value;
      sessionStorage.setItem("dato",this.info)
      this.$router.push({ path: '/aplicacion/productos'})
    },
    Submit2(){
      this.$router.push({ path: '/aplicacion/especifica'});
    },
    model(dato){
      var marca = dato;
      sessionStorage.setItem("marca",marca);
      api.get('/products/specific/model/'+dato)
      .then(response => {
        this.models = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    year(dato){
      var modelo = dato;
      sessionStorage.setItem("modelo",modelo);
      api.get('/products/specific/year/'+dato)
      .then(response => {
        this.years = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    engine(dato){
      var año = dato;
      sessionStorage.setItem("año",año);
      api.get('/products/specific/engine/'+dato)
      .then(response => {
        this.engines = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    sparepart(dato){
      var motor = dato;
      sessionStorage.setItem("motor",motor);
      api.get('/products/specific/sparepart/'+dato)
      .then(response => {
        this.spareparts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    final(dato){
      var refaccion = dato;
      sessionStorage.setItem("nombre",refaccion);
    }
  },
  created(){
    sessionStorage.setItem("content1",null)
    sessionStorage.setItem("content2","display:none")
    sessionStorage.removeItem('marca');
    sessionStorage.removeItem('modelo');
    sessionStorage.removeItem('año');
    sessionStorage.removeItem('motor');
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('dato');
    api.get('/products/specific/brand')
    .then(response => {
      this.brands = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

</script>
<style>
  #contenido-busca{
      max-width: 1485px;
  }
  #busquedas{
    background: linear-gradient(to bottom, black,#2b467b);
    padding: 30px;
  }
  #bloques{
    padding: 10px;
    
  }
  #carrusel{
      max-width: 1485px;
  }
  .v-text-field--solo .v-input__slot {
    min-height: 10px;
  }
  .v-text-field--solo .v-input__slot {
    border-radius: 4px;
  }
  #text{    
    position: relative;
    text-align: right;
  }
  #pie{
    background: linear-gradient(to bottom, black,#2b467b);
  }
</style>
