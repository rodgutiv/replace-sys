<template lang="pug">
v-app
  div
    toolbar
    div
      router-view
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
     items: [],
      errors: [],
      empty: []
    }



},

 methods: {

 },
 enviar(){
      api.get('/products/search',{code:this.escrito})
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