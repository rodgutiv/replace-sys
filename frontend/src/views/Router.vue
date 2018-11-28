<template lang="pug">
v-app
  div
    toolbar
    div
      router-view
    v-container(grid-list-md text-xs-center)
      v-layout(row wrap center)
         v-flex(xs11)
            h1.display-3 Refacciones 
         v-flex(xs11 lg11)
          v-text-field(v-model="escrito" label="Find Product" single-line solo prepend-icon="search" )
         v-flex(xs1 lg1)
          v-btn(color="white" flat @click="enviar") buscar
      v-layout(row wrap)
         v-flex(lg12 xs12)
          v-data-iterator(:items="items" :search="escrito" item-key="key_ext" :rows-per-page-items="rowsPerPageItems"  row wrap :pagination.sync="pagination" content-tag="v-layout")
            v-flex(slot="item" slot-scope="props" text-xs-left xs12 sm6 md4 lg4)
              v-card
                v-img(src="https://www.eleconomista.com.mx/__export/1507847242640/sites/eleconomista/img/historico/shutterstock_84492967.jpg_1612941218.jpg" height="150px")
                v-card-title(primary-title)
                  div
                    div 
                      h1 {{props.item.nombre}}
                    div 
                      h1 {{props.item.codigo}}
                    div
                      h2 Description
                    div {{props.item.descripcion}}
                v-card-actions
                  v-spacer
                  Modalprod(:Nombre="props.item.nombre" :tipo="props.item.tipo" :marca="props.item.marca" :precio="props.item.precio" :codigo="props.item.codigo")            
      
    
    
    
    v-container
      h1 {{info}}
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
     items: [],
      errors: [],
      empty: []
    }



},

 methods: {

 },
 enviar(){
      api.post('/products/search',[{name:"code",value:this.escrito}])
      //api.post('/busqueda_product',[{name:"id_product",value:cle}])
      .then(response => {
          this.items=response.data
          alert("sí")
      
    
      }).catch(error => {
        this.items=error

      })
    },
created() {
    this.id = this.$route.params.id;
    api.get(`/products/all`)
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