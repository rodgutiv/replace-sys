<template lang="pug">
v-app
  div    
    v-container(style="padding: 0px;"   )
      //div(class="wrapper")
        input(checked type=radio name="slider" id="slide1")
        input(checked type=radio name="slider" id="slide2")
        input(checked type=radio name="slider" id="slide3")
        div(class="slider-wrapper")
          div(class="inner")
            article
              div(class="info top-left")
                h3 Malacca
              v-img(src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg")


            article
              div(class="info top-left")
                h3 Malacca
              v-img(src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg")
            article
              div(class="info top-left")
                h3 Malacca
              v-img(src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg")
      
        div(class="slider-prev-next-control")
          label(for="slide1")
          label(for="slide2")
          label(for="slide3")
        div(class="slider-dot-control")
          label(for="slide1")
          label(for="slide2")
          label(for="slide3")
          
      //hooper( :autoPlay="true" :playSpeed="2000" ) 
        slide 
          v-img(src="http://vps-nodolab.com:3000/imagenes/foto_home.png" alt="")
        slide 
          v-img(src="http://vps-nodolab.com:3000/imagenes/foto_home2.png" alt="")
        slide 
          v-img(src="http://vps-nodolab.com:3000/imagenes/spare-parts2.png" alt="")

      //</slide>
        <slide>
          slide 2
        </slide>
        <slide>
          slide 3
        </slide>
        <slide>
          slide 4
        </slide>
        <slide>
          slide 5
        </slide>
        <slide>
          slide 6
        </slide>
      //div(class="slider")
        ul
          li
            v-img(src="http://vps-nodolab.com:3000/imagenes/foto_home.png" alt="")
          li
            v-img(src="http://vps-nodolab.com:3000/imagenes/spare-parts.jpg" alt="")
          li
            v-img(src="http://vps-nodolab.com:3000/imagenes/1344-min.jpg" alt="")
      //carousel( :data="data" :controls="true")
      //carousel(:per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false")
        slide Slide 1 Content
        slide Slide 2 Content
      v-carousel(hide-delimiters height="100%")
          v-carousel-item(v-for="(item,i) in items" :key="i" :src="item.src" )
    v-container(id="segundo" style="color:#062252" class=" hidden-xs-only")
      v-card()
        v-card-title(color="#062252")
          h2(style="color:#062252") RECOMENDACIONES PARA TI
          v-btn(small flat to="/aplicacion/productos") VER MÁS
        v-divider(id="divid" style="margin-left: 1%; max-width: 35%; border-width: 2px; color:#062252;")
        md-card-media
          swiper(:options="swiperOption")
            swiper-slide 
              div(style="padding:10%")
                router-link(style="text-decoration: none" to="/aplicacion/productos")
                  v-img( style="padding-bottom: 30.2092%!important; " alt="Disco" src="http://vps-nodolab.com:3000/imagenes/disco1.png")
            swiper-slide 
              div(style="padding:10%")
                router-link(style="text-decoration: none" to="/aplicacion/productos")
                  v-img(  alt="Bujia" src="http://vps-nodolab.com:3000/imagenes/bujia.png")
            swiper-slide 
              div(style="padding:10%")
                router-link(style="text-decoration: none" to="/aplicacion/productos")
                  v-img( alt="Rin" src="http://vps-nodolab.com:3000/imagenes/Rin-01.png") 
            swiper-slide 
              div(style="padding:10%")
                router-link(style="text-decoration: none" to="/aplicacion/productos")
                  v-img( alt="Filtro" src="http://vps-nodolab.com:3000/imagenes/filtro.png") 
            swiper-slide 
              div(style="padding:10%")
                router-link(style="text-decoration: none" to="/aplicacion/productos")
                  v-img( alt="escape" src="http://vps-nodolab.com:3000/imagenes/escape.png")
            div(class="swiper-button-prev"  slot="button-prev")
            div(class="swiper-button-next" slot="button-next")
            div(class="swiper-pagination" slot="pagination")
    v-container( color=" #003b94!important" class="hidden-sm-and-up")
      v-card()
        v-card-title
          h4(style="color:#062252") RECOMENDACIONES PARA TI
          v-btn(small flat to="/aplicacion/productos") VER MÁS
          v-divider(id="divid")
        md-card-media
          swiper(:options="swiperOption")
            swiper-slide 
              div(style="padding:10%")
                router-link(style="text-decoration: none" to="/aplicacion/productos")
                  v-img( style="padding-bottom: 30.2092%!important; " alt="Disco" src="http://vps-nodolab.com:3000/imagenes/disco1.png")
            swiper-slide 
              div(style="padding:10%")
                router-link(style="text-decoration: none" to="/aplicacion/productos")
                  v-img(  alt="Bujia" src="http://vps-nodolab.com:3000/imagenes/bujia.png")
            swiper-slide 
              div(style="padding:10%")
                router-link(style="text-decoration: none" to="/aplicacion/productos")
                  v-img( alt="Rin" src="http://vps-nodolab.com:3000/imagenes/Rin-01.png") 
            swiper-slide 
              div(style="padding:10%")
                router-link(style="text-decoration: none" to="/aplicacion/productos")
                  v-img( alt="Filtro" src="http://vps-nodolab.com:3000/imagenes/filtro.png") 
            swiper-slide 
              div(style="padding:10%")
                router-link(style="text-decoration: none" to="/aplicacion/productos")
                  v-img( alt="escape" src="http://vps-nodolab.com:3000/imagenes/escape.png")
            div(class="swiper-button-prev"  slot="button-prev")
            div(class="swiper-button-next" slot="button-next")
            div(class="swiper-pagination" slot="pagination")
    v-container(style="padding-top:30%" class="hidden-xs-only")
      v-img.right(src="http://vps-nodolab.com:3000/imagenes/carro2.png" class="hidden-sm-and-down" style="width:90%")
      v-img.center(src="http://vps-nodolab.com:3000/imagenes/carro2.png" class="hidden-md-and-up" style="width:90%")
      v-btn(v-on:click="Submit('accesorios')" flat id="text1" style="color:#062252;" class="hidden-sm-and-down") Accesorios
      v-btn(v-on:click="Submit('accesorios')" color="#152d5b" flat id="text2" class="hidden-md-and-up") Accesorios
      v-btn(v-on:click="Submit('accesorios')" style="color:#062252;" flat id="text3" class="hidden-sm-and-down") Llantas
      v-btn(v-on:click="Submit('accesorios')" color="#152d5b" flat id="text4" class="hidden-md-and-up") Llantas
      v-btn(v-on:click="Submit('accesorios')" style="color:#062252;" flat id="text5" class="hidden-sm-and-down") Chasis
      v-btn(v-on:click="Submit('accesorios')" color="#152d5b" flat id="text6" class="hidden-md-and-up") Chasis
      v-btn(v-on:click="Submit('accesorios')" style="color:#062252;" flat id="text7" class="hidden-sm-and-down") Faros
      v-btn(v-on:click="Submit('accesorios')" color="#152d5b" flat id="text8" class="hidden-md-and-up") Faros
      v-btn(v-on:click="Submit('accesorios')" style="color:#062252;" flat id="text9" class="hidden-sm-and-down") Motor
      v-btn(v-on:click="Submit('accesorios')" color="#152d5b" flat id="text10" class="hidden-md-and-up") Motor
      v-btn(v-on:click="Submit('accesorios')" style="color:#062252;" flat id="text11" class="hidden-sm-and-down") Carrocería
      v-btn(v-on:click="Submit('accesorios')" color="#152d5b" flat id="text12" class="hidden-md-and-up") Carrocería
      v-btn(v-on:click="Submit('accesorios')" style="color:#062252;" flat id="text13" class="hidden-sm-and-down") Pintura
      v-btn(v-on:click="Submit('accesorios')" color="#152d5b" flat id="text14" class="hidden-md-and-up") Pintura
    v-container.center(style="padding-top10%" class="hidden-sm-and-up")
      v-layout(class="text-xs-center")
        v-flex(xs6)
          v-btn.white--text(color="#152d5b") Accesorios
        v-flex(xs6)
          v-btn.white--text(color="#152d5b") Accesorios
    v-container(  id="tercero"  class="hidden-sm-and-down")
      v-flex(xs12 sm4)
        h1.display-2.font-weight-bold(style="color:#062252" class="text-md-center") PROMOCIONES DEL MES
      v-flex(xs12 sm3 style="padding-left: 8%")
        h3(style="color:#062252" class="text-xs-center") Desubre todas las ofertas que tenemos en REFACE durante mayo
      v-flex(xs12 sm2 md2 style="padding-left:16%")
        promociones
    v-container( class="hidden-md-and-up")
      v-flex(xs12 class="text-xs-center" )
        h3.display-2.font-weight-bold(style="color:#062252" class="text-md-center") PROMOCIONES DEL MES
      v-flex(xs12 class="text-xs-center")
        h3(style="color:#062252") Desubre todas las ofertas que tenemos en REFACE durante mayo
      v-flex(xs12 sm2 md2 class="text-xs-center" class="hidden-xs-only" style="padding-left:50%")
        //v-btn(color="#062252" class="white--text" to="/") Ver más
        promociones
      v-flex(xs12 sm2 md2 class="text-xs-center" class="hidden-sm-and-up" )
        //v-btn(color="#062252" class="white--text" to="/") Ver más
        promociones
</template>
<script>
//imporprt footer from '@/components/Footer.vue'
import promociones from '@/components/Promociones.vue'
import {api} from '@/api'
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';


//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
      promociones,
      Hooper,
      Slide
  },
  data () {
    return {
      
        data: [
          {
            content: this.content,
          },
          {
            content: this.content,
          },
          {
            content: this.content,
          }
        ],
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
            src: 'http://vps-nodolab.com:3000/imagenes/foto_home.png'
          },
          {
            src: 'http://vps-nodolab.com:3000/imagenes/slide1.jpeg'
          },
          {
            src: 'http://vps-nodolab.com:3000/imagenes/foto_home2.png'
          }
        ],
        selec1:null,
        selec2:null,
        selec3:null,
        selec4:null,
        selec5:null,
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }

    }
  },
  methods: {
    Submit(escrito){
          //alert(escrito)
          this.currentUrl = window.location.pathname;
          sessionStorage.setItem("dato",escrito)
          if(this.currentUrl == '/aplicacion/productos'){
              //alert('go')
              this.$forceUpdate('/aplicacion/productos')
              //this.$router.go({path: '/aplicacion/productos' })
          }else{
              this.$router.push({path: '/aplicacion/productos' });
              //alert('push')
          }

          //alert(sessionStorage.getItem("dato"))
          //this.$router.push({ path: '/aplicacion/productos'})

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
    },
    /*Submit(escrito){
        //alert(escrito)
        //alert(sessionStorage.getItem("dato"))
        //this.$router.push({ path: '/aplicacion/productos'})
        this.$router.go({path: '/aplicacion/productos' });
    }*/
    /*content(createElement, data, vm) {
        return createElement('div', {
          class: 'example-slide',
        }, [`Slide ${vm.$parent.direction}`]);
      },*/
  },
  created(){
    if(sessionStorage.getItem("variable") == 1){
      sessionStorage.removeItem("variable")
      this.$router.go();
    }
    //alert(sessionStorage.getItem("nombre"))
    sessionStorage.setItem("content1",null)
    sessionStorage.setItem("content2","display:none")
    //sessionStorage.removeItem('marca');
    //sessionStorage.removeItem('modelo');
    //sessionStorage.removeItem('año');
    //sessionStorage.removeItem('motor');
    //sessionStorage.removeItem('nombre');
    //sessionStorage.removeItem('dato');
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
    top:30%;
    left:2%;
    width:95%;
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
  #divid{
    border-color:#062252!important;
  }
  .v-responsive .v-carousel__item{
      height: 100%!important;
  }

.swiper-button-next {
  background-color: #062252!important;
  background-image: url("http://vps-nodolab.com:3000/imagenes/flechas.png") !important;
}
.swiper-button-prev {
  background-color: #062252!important;
  background-image: url("http://vps-nodolab.com:3000/imagenes/flechas2.png") !important;
}
.swiper-button-prev, .swiper-button-next{
    top: 42%;
    
    width: 40px;
    height: 72px;
}

#text1{
  position: absolute;
  left: 77%;
  top: 70%;


}
#text2{
  position: absolute;
  left: 62%;
  top: 60%;
  z-index: 1;

}
#text3{
  position: absolute;
  left: 83%;
  top: 85%;
  z-index: 1;

}
#text4{
  position: absolute;
  left: 72%;
  top: 72%;
  z-index: 1;

}
#text5{
  position: absolute;
  left: 77%;
  top: 92%;
  z-index: 1;

}
#text6{
  position: absolute;
  left: 65%;
  top: 79%;
  z-index: 1;

}
#text7{
  position: absolute;
  left: 62%;
  top: 93%;
  z-index: 1;

}
#text8{
  position: absolute;
  left: 65%;
  top: 79%;
  z-index: 1;

}
#text9{
  position: absolute;
  left: 42%;
  top: 93%;
  z-index: 1;

}
#text10{
  position: absolute;
  left: 65%;
  top: 79%;
  z-index: 1;

}
#text11{
  position: absolute;
  left: 23%;
  top: 87%;
  z-index: 1;

}
#text12{
  position: absolute;
  left: 65%;
  top: 79%;
  z-index: 1;

}
#text13{
  position: absolute;
  left: 60%;
  top: 70%;
  z-index: 1;

}
#text14{
  position: absolute;
  left: 65%;
  top: 79%;
  z-index: 1;

}
</style>
