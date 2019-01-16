<template lang="pug">
v-app
  div
    toolbar
    v-container(grid-list-md r)
        v-carousel
            v-carousel-item(v-for="(item,i) in items" :key="i" :src="item.src") hola
    v-container(grid-list-md r)
        v-layout(row wrap center) 
            v-flex(xs12 sm6 )
                speacer
                v-input(prepend-icon="search")
                    v-text-field(label="Busqueda General" solo)
            v-flex(xs12 sm6 )
                v-select(
                v-model="selected"
                :items="items"
                item-text="name"
                item-value ="name" 
                label="Marca" 
                required
                outline)
                v-text-field(name="id_prov" style="display:none" readonly :value="selected")
                v-select(
                v-model="selected"
                :items="items"
                item-text="name"
                item-value ="name" 
                label="Modelo" 
                required
                outline)
                v-text-field(name="id_prov" style="display:none" readonly :value="selected" )
                v-select(
                v-model="selected"
                :items="items"
                item-text="name"
                item-value ="name" 
                label="Año" 
                required
                outline)
                v-text-field(name="id_prov" style="display:none" readonly :value="selected" )
                v-select(
                v-model="selected"
                :items="items"
                item-text="name"
                item-value ="name" 
                label="Motor" 
                required
                outline)
                v-text-field(name="id_prov" style="display:none" readonly :value="selected" )
                v-select(
                v-model="selected"
                :items="items"
                item-text="name"
                item-value ="name" 
                label="Refacción" 
                required
                outline)
                v-text-field(name="id_prov" style="display:none" readonly :value="selected")

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
        empty: [],    
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
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
  }
}

</script>