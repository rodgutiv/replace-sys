<template lang="pug">
v-app
  div
    v-container(style="padding: 0px;" )
        v-carousel(hide-delimiters height="50%")
            v-carousel-item(v-for="(item,i) in items" :key="i" :src="item.src")
    v-container(id="segundo")
        v-carousel(hide-delimiters height="50%")
            v-carousel-item(v-for="(item,i) in items" :key="i" :src="item.src")
    v-container(style="padding-top:30%")
      v-img(src="http://localhost:3000/imagenes/carro_detalles.png")
    v-container(id="tercero")
      v-flex(xs4)
        h1.display-2.font-weight-bold(class="text-md-center") PROMOCIONES DEL MES 
      v-flex(xs3 style="padding-left: 8%")
        p(class="text-md-center") Desubre todas las ofertas que tenemos en REFACE durante mayo
      v-flex(xs4 style="padding-left:12%")
        v-btn(color="#062252" class="white--text" to="/") Ver más

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
        ],
        selec1:null,
        selec2:null,
        selec3:null,
        selec4:null,
        selec5:null

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
  #segundo{
    position:absolute;
    z-index:1;
    top:25%;
    left:5%;
    width:90%;
  }
  #tercero{
    position:absolute;
    z-index:1;
    top:60%;
    left:5%;
    width:90%;
    color:#062252;
  }
  .carousel {
    height: 30% !important;
  }
</style>
