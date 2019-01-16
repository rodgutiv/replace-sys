<template lang="pug">
div
   v-toolbar(color="grey darken-1" dark app)
      v-toolbar-side-icon(class="hidden-lg-and-up" @click.stop="drawer = !drawer")
      v-toolbar-title
        v-btn(flat)
            v-img(src="https://cdn.vuetifyjs.com/images/parallax/material.jpg")
      v-spacer
      v-toolbar-items(class="hidden-md-and-down")
        
        v-btn(flat)
            router-link(class="white--text" to="/") Inicio
        v-btn(flat)
            router-link(class="white--text" to="/aplication/general") Producto
        v-btn(flat)
            router-link(class="white--text" to="/") Nuevos
        v-btn(flat)
            router-link(class="white--text" to="/") Servicio Pesado
        v-btn(flat)
            router-link(class="white--text" to="/") Outlet
        v-btn(flat)
            router-link(class="white--text" to="/") Noticias
        v-btn(flat)
            router-link(class="white--text" to="/") Promociones
      v-toolbar-items
        v-btn(flat)
          v-img(src="https://cdn.vuetifyjs.com/images/parallax/material.jpg")
     
</template>


<script>
export default {
  name: 'Frame',
  data () {
    return {
      drawer: true
    }
  }
}
</script>