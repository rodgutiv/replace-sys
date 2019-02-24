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
            v-flex( text-xs-left xs12 sm6 md4 lg4)
              v-card
                v-img(src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="150px")
                v-card-title(primary-title)
                  div
                    div 
                      h1 {{codigo}}
                    div
                      h2 Description
                    div {{descripcion}}
                v-card-actions
                  v-spacer
                 
      
    
    
    
    
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
      descripcion:null,
      codigo:null,
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
created() {
    this.id = this.$route.params.id;
    api.get('/products/search/44252C')
    //api.post('/products/buscar')
    //api.get(`/producto`)
    .then(response => {
      alert(response.data.codigo)
      this.codigo = response.data.codigo,
      this.descripcion = response.data.descripcion 
    })
    .catch(e => {
      this.errors.push(e)
    })
    
}


}

</script>