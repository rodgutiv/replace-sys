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
              v-flex(xs2 id="div-btn-especifica")
                  v-btn(v-on:click="Submit2" id="lupa2")
                    v-img(src="http://localhost:3000/imagenes/lupita busqueda.png")
                  h2 BÚSQUEDA ESPECÍFICA
              v-flex(xs3)
                  v-select(
                  v-model="selec1"
                  :items="brands"
                  item-value="marca"
                  label="Marca"
                  @change="model(selec1)"
                  required
                  outline)
                  v-text-field(ref="marcas" name="marca" style="display:none" readonly :value="selec1")
                  v-select(
                  v-model="selec2"
                  :items="models"
                  item-value="name"
                  label="Modelo"
                  @change="year(selec2)"
                  required
                  outline)
                  v-text-field(ref="modelos" name="modelo" style="display:none" readonly :value="selec2" )
                  v-select(
                  v-model="selec3"
                  :items="years"
                  item-value="año"
                  label="Año"
                  @change="engine(selec3)"
                  required
                  outline)
                  v-text-field(ref="años" name="año" style="display:none" readonly :value="selec3" )
                  v-select(
                  v-model="selec4"
                  :items="engines"
                  item-value="motor"
                  label="Motor"
                  @change="sparepart(selec4)"
                  required
                  outline)
                  v-text-field(ref="motores" name="motor" style="display:none" readonly :value="selec4" )
                  v-select(
                  v-model="selec5"
                  :items="spareparts"
                  item-value="refaccion"
                  label="Refacción"
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
  }
  #general{

  }
  #especifica{

  }
  #busquedas{
    background: linear-gradient(to bottom, black,#2b467b);
  }
  #div-btn-general
  {
    margin-left: 25%;
  }
  /*#2b467b*/
</style>
