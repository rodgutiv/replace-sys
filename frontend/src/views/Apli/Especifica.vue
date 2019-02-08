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
          v-data-iterator(:items="items" :search="escrito" item-key="key_ext" :rows-per-page-items="rowsPerPageItems"  row wrap :pagination.sync="pagination" content-tag="v-layout")
            v-flex(slot="item" slot-scope="props" text-xs-left xs12 sm6 md3 lg3)
              v-card(id="bloque")
                v-img(src="http://localhost:3000/imagenes/disco.png")
                v-divider 
                v-card-title(primary-title)
                  div
                    div(colo="#003b94") 
                      h3 {{props.item.nombre}}
                    div(color="#003b94") ${{props.item.precio}}
                    div 
                      v-rating(id="stars" v-model="rating"  background-color="#003b94" color="#003b94")
                v-card-actions
                  v-btn(id="boton_prod") Comprar
                  v-btn(id="boton_prod") Ver detalles
      
    
    
    
    
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
      escrito:null,
      info:null,
      id:null,
      rowsPerPageItems: [6, 12, 24],
      pagination: {
        rowsPerPage: 6
      },
      marca:null,
      modelo:null,
      año:null,
      motor:null,
      refaccion:null,
      items: [],
      errors: [],
      empty: []
    }



},

 methods: {

 },
created() {
    this.marca = sessionStorage.getItem("marca");
    this.modelo = sessionStorage.getItem("modelo");
    this.año = sessionStorage.getItem("año");
    this.motor = sessionStorage.getItem("motor");
    this.refaccion = sessionStorage.getItem("nombre");
    api.post(`/products/specific`,[{brand:this.marca},{model:this.modelo},{year:this.año},{engine:this.motor},{name:this.refaccion}])
    //api.get(`/producto`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data
      //alert(response.data)
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
</style>