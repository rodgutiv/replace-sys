<template lang="pug">
v-app
  div
    toolbar
    div
      router-view
    v-container(grid-list-md text-xs-center)
      v-layout(row wrap center)
         v-flex(xs11)
            h1.display-3 Products {{id}}
         v-flex(xs12 lg12)
          v-text-field(v-model="escrito" label="Find Product" single-line solo prepend-icon="search" )
      v-layout(row wrap)
         v-flex(lg12 xs12)
          v-data-iterator(:items="items" :search="escrito" item-key="key_ext" :rows-per-page-items="rowsPerPageItems"  row wrap :pagination.sync="pagination" content-tag="v-layout")
            v-flex(slot="item" slot-scope="props" text-xs-left xs12 sm6 md4 lg4)
              v-card
                v-img(src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="150px")
                v-card-title(primary-title)
                  div
                    div 
                      h1 {{props.item.id}}
                    div
                      h2 Description
                    div {{props.item.descripcion}}
                v-card-actions
                  v-spacer
                  Modalprod(:Producto="props.item.id" :description="props.item.description" :volume="props.item.volume" :weight="props.item.weight" :stock="props.item.stock" :purchase_price="props.item.purchase_price" :sale_price="props.item.sale_price" :id_order="id")            
      
    
    
    
    
    foother
</template>
<script>
import toolbar from '@/components/Toolbar.vue'
import Modalprod from '@/components/Modalprod.vue'

import {api} from '@/api'
//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
    toolbar, Modalprod
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