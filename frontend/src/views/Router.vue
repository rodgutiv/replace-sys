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
                    div {{props.item.description}}
                v-card-actions
                  v-spacer
                  ModalCar(:Producto="props.item.id" :description="props.item.description" :volume="props.item.volume" :weight="props.item.weight" :stock="props.item.stock" :purchase_price="props.item.purchase_price" :sale_price="props.item.sale_price" :id_order="id")            
      
    
    
    
    
    foother
</template>
<script>
import toolbar from '@/components/Toolbar.vue'
import Modalprod from '@/components/Modalprod.vue'

import {api} from '@/api'
import $ from 'jquery'
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
     items: [],
      errors: [],
      empty: []
    }



},

 methods: {

 },
 enviar(){
      api.post('/busqueda_product',[{name:"key_ext",value:this.escrito}])
      //api.post('/busqueda_product',[{name:"id_product",value:cle}])
      .then(response => {
          this.items=response.data
      
    
      }).catch(error => {
        this.items=null

      })
    },
created() {
    this.id = this.$route.params.id;
    api.get(`/producto`)
    //api.get(`/producto`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    
}


}

</script>