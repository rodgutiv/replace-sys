<template lang="pug">
v-app
  div
    toolbar
    div
      router-view
    v-container(grid-list-md text-xs-center style="background: white;")
      v-layout(row wrap center)
         v-flex(xs11)
            //h1.display-3 Products {{id}}
         v-flex(xs12 lg12)
          v-text-field(v-model="escrito" label="Find Product" style="display:none" single-line solo prepend-icon="search" )
      v-layout(row wrap)
         v-flex(lg12 xs12)
          v-data-iterator(:items="items"  :search="escrito" item-key="key_ext" :rows-per-page-items="rowsPerPageItems"  row wrap :pagination.sync="pagination" content-tag="v-layout")
            v-flex(slot="item" slot-scope="props" text-xs-left xs12 sm6 md3 lg3)
              v-card(id="bloque")
                v-img(src="http://localhost:3000/imagenes/disco.png")
                v-divider(id="division")
                v-card-title(id="act" primary-title style="al" )
                  div
                    div(color="#003b94") 
                      h3 {{props.item.nombre}}
                    div(color="#003b94") ${{props.item.precio}}
                    div 
                      v-rating(id="stars" v-model="rating" readonly background-color="#003b94" color="#003b94")
                v-card-actions(id="act")
                  v-btn(id="boton_prod" v-on:click="comprar(props.item.codigo)") Comprar
                    //router-link(class="white--text"  :to="{ name: 'agregar', params: { code: props.item.code } }")
                  v-btn(id="boton_prod" @click="show = !show") Ver detalles
                v-card-text(v-show="show" id="datos") 
                  h4 Marca: {{props.item.marca}}
                  h4 Garantía de 2 años
                  h4 Condiciones PRoducto Cerrado y nuevo

      
    
    
    
    
    foother
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
      escrito:'',
      info:null,
      rating: 3,
      id:null,
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
   comprar(dato){
     sessionStorage.setItem("code",dato);
     this.$router.push({ path: '/aplicacion/agregar/'+dato});
     alert(this.items[0])
   }
 },
created() {
    if(sessionStorage.getItem("dato")!=null){
      this.escrito=sessionStorage.getItem("dato")
    }else{
      this.escrito=''
    }
    api.get(`/products/all`)
    //api.get(`/producto`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data
      alert(this.items.length)
      
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
  /*.v-data-iterator__actions__select .v-select{
    color: #000 !important;
    caret-color:  #000 !important;
  }
  .v-list__tile .v-list__tile--link .v-list__tile--active{
    color: #000 !important;
    caret-color:  #000 !important;
  }
  .v-list__tile__content{
    color: #000 !important;
    caret-color:  #000 !important;
  }
  .v-icon{
    color: #000 !important;
    caret-color:  #000 !important;
  }*/
</style>
