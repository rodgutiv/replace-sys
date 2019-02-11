<template lang="pug">
v-app
  div
    toolbar
    v-container(grid-list-md r id="carrusel")
        v-carousel(id ="carru1")
            v-carousel-item(v-for="(item,i) in items" :key="i" :src="item.src")
    v-container(grid-list-md r id="contenido-busca")
        v-layout(row wrap center id="busquedas")
          v-layout(row wrap left id="general")
              v-flex(xs2 id="div-btn-general")
                v-btn(v-on:click="Submit()" id="lupa1")
                  v-img(src="http://localhost:3000/imagenes/lupita busqueda.png")
              v-flex(xs6 )
                v-text-field(ref="dat" v-model="datos" label="BUSQUEDA GENERAL" solo name="buscar")
          v-layout(row wrap right id="especifica")
              v-flex(xs5 id="div-btn-especifica")
                  v-btn(v-on:click="Submit2" id="lupa2")
                    v-img(src="http://localhost:3000/imagenes/lupita busqueda.png")
                  h2 BÚSQUEDA ESPECÍFICA
              v-flex(xs7 id="div-selects")
                  h3 MARCA
                  v-select(
                  v-model="selec1"
                  :items="brands"
                  item-value="marca"
                  @change="model(selec1)"
                  required
                  outline)
                  v-text-field(ref="marcas" name="marca" style="display:none" readonly :value="selec1")
                  h3 MODELO
                  v-select(
                  v-model="selec2"
                  :items="models"
                  item-value="name"
                  @change="year(selec2)"
                  required
                  outline)
                  v-text-field(ref="modelos" name="modelo" style="display:none" readonly :value="selec2" )
                  h3 AÑO
                  v-select(
                  v-model="selec3"
                  :items="years"
                  item-value="año"
                  @change="engine(selec3)"
                  required
                  outline)
                  v-text-field(ref="años" name="año" style="display:none" readonly :value="selec3" )
                  h3 MOTOR
                  v-select(
                  v-model="selec4"
                  :items="engines"
                  item-value="motor"
                  @change="sparepart(selec4)"
                  required
                  outline)
                  v-text-field(ref="motores" name="motor" style="display:none" readonly :value="selec4" )
                  h3 REFACCION
                  v-select(
                  v-model="selec5"
                  :items="spareparts"
                  item-value="refaccion"
                  @change="final(selec5)"
                  required
                  outline)
                  v-text-field(ref="spar" name="refaccion" style="display:none" readonly :value="selec5")


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
      api.get('/products/specific/model/'+dato)
      .then(response => {
        this.models = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    year(dato){
      api.get('/products/specific/year/'+dato)
      .then(response => {
        this.years = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    engine(dato){
      api.get('/products/specific/engine/'+dato)
      .then(response => {
        this.engines = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    sparepart(dato){
      api.get('/products/specific/sparepart/'+dato)
      .then(response => {
        this.spareparts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    final(dato){
      var marca = this.$refs.marcas.value;
      var modelo = this.$refs.modelos.value;
      var año = this.$refs.años.value;
      var motor = this.$refs.motores.value;
      var refaccion = dato;
      sessionStorage.setItem("marca",marca);
      sessionStorage.setItem("modelo",modelo);
      sessionStorage.setItem("año",año);
      sessionStorage.setItem("motor",motor);
      sessionStorage.setItem("nombre",refaccion);
    }
  },
  created(){
    sessionStorage.setItem("dato",''),
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
  #carrusel{
      max-width: 1485px;
  }
  #carru1{
    height: 350px;
  }
  #contenido-busca{
      max-width: 1485px;
  }
  #lupa1{
    background-color: transparent;
  }
  #lupa2{
    background-color: transparent;
    float: left;
    margin-left: 24%;
  }
  #general{

  }
  #especifica{
    margin-top: 30px;
  }
  #busquedas{
    background: linear-gradient(to bottom, black,#2b467b);
    padding-bottom: 30px;
  }
  #div-btn-general
  {
    margin-left: 25%;
  }
  #div-btn-especifica{
    margin-top: 20px;
    color: white;
  }
  #div-selects{
    color: white;
  }
  #div-selects h3{
    width: 65%;
    position: relative;
    text-align: right;
  }
  .v-text-field--outline .v-input__slot {
    background: white!important;
    border-radius: 4px;
    width: 65%;
    height: 25px;
  }
  .v-select__slot {
    top: -16px;
  }
  .theme--light.v-text-field--outline .v-input__slot {
    border: 0px solid rgba(244,0,0,.54);
  }
  .v-text-field__details{
    display:none!important;
  }
  .v-text-field--outline .v-input__slot {
    min-height: 10px;
  }
  .container {
      padding: 12px;
  }
  .v-select.v-text-field--enclosed:not(.v-text-field--single-line) .v-select__selections {
    padding-top: 32px;
  }
  .v-menu__content theme--light menuable__content__active {
    top: 620px!important;
  }
  .primary--text {
    color: #2b467b !important;
    caret-color: #2b467b !important;
  }
  /*#2b467b*/
</style>
