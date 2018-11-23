<template lang="pug">
div
   //v-navigation-drawer.darken-4.white--text(
          :mini-variant="miniVariant"
          hide-overlay="true"
          persistent="false"
          left="true"
          v-model="drawer"
         enable-resize-watcher="false"
         app)
      v-list.blue.darken-3
         v-list-tile
            v-list-tile-content
               v-list-tile-title(class="white--text ")  Nuestro Menu 
         v-divider
         v-list-tile
            v-list-tile-content
               v-list-tile-title
                  router-link(class="white--text" to="/") Inicio
         v-list-tile
            v-list-tile-content
               v-list-tile-title
                  router-link(class="white--text" to="/") Nosotros



   v-toolbar(color="grey darken-1" dark app)
      //v-toolbar-side-icon( @click.stop="drawer = !drawer")
      v-toolbar-title
        router-link(class="white--text" style="text-decoration: none" to="/") Reface
      v-spacer
      v-toolbar-items(class="hidden-md-and-down")
         v-btn(flat)
            router-link(class="white--text" to="/") Inicio
         v-btn(flat)
            router-link(class="white--text" to="/") Nosotros
      v-toolbar-items
        v-btn(flat @click.stop="rightDrawer = !rightDrawer")
          router-link.grey--text(to="/") Iniciar Sesion
     
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