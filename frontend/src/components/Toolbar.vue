<template lang="pug">
div(id="barra")
    v-navigation-drawer(id="navi" v-model="drawer" fixed persistent enable-resize-watcher="false" class="hidden-lg-and-up")
      v-list
         v-list-tile
            v-list-tile-content
                v-list-tile-title
                    router-link(class="white--text" style="text-decoration: none" to="/") Inicio
         v-list-tile
            v-list-tile-content
               v-list-tile-title
                  router-link(class="white--text" style="text-decoration: none" to="/aplicacion/productos") Producto
         v-list-tile
            v-list-tile-content
               v-list-tile-title
                  router-link(class="white--text" to="/about") Nosotros

    v-toolbar(color="black darken-1" dark app id="tol")
      v-toolbar-side-icon(class="hidden-lg-and-up" @click.stop="drawer = !drawer")
      v-toolbar-title(slot="extension")
        v-btn(flat)
            v-img(id="logo" to="" src="http://localhost:3000/imagenes/Logo.png")
      v-spacer
      v-toolbar-items(id="abajo" slot="extension" class="hidden-md-and-down")
        v-btn(flat)
            router-link(id="en" class="white--text" style="text-decoration: none" to="/") Inicio
        v-btn(flat)
            router-link(id="en" class="white--text" style="text-decoration: none" to="/aplicacion/productos") Producto
        v-btn(flat)
            router-link(id="en" class="white--text" style="text-decoration: none" to="/") Nuevos
        v-btn(flat)
            router-link(id="en" class="white--text" style="text-decoration: none" to="/") Servicio Pesado
        v-btn(flat)
            router-link(id="en" class="white--text" style="text-decoration: none" to="/") Outlet
        v-btn(flat)
            router-link(id="en" class="white--text" style="text-decoration: none" to="/") Noticias
        v-btn(flat)
            router-link(id="en" class="white--text" style="text-decoration: none" to="/") Promociones
      v-toolbar-items(slot="extension" id="to")
        v-btn(flat )
          v-img(src="http://localhost:3000/imagenes/carrito_compra.png")
      v-toolbar-items(id="min")
        v-btn(id="boton")
            v-img(id="ima" src="http://localhost:3000/imagenes/twiter.png")
        v-btn(id="boton")
            v-img(id="ima" src="http://localhost:3000/imagenes/facebook.png")
        v-btn(id="boton")
            v-img(id="ima" src="http://localhost:3000/imagenes/instagram.png")
        v-btn(id="boton")
            v-img(id="ima" src="http://localhost:3000/imagenes/correo.png")
      v-toolbar-items(id="min2")
        v-btn(flat id="btn1")
            router-link(class="white--text" style="text-decoration: none" to="/") Crea tu cuenta /
        v-btn(flat id="btn2")
            router-link(class="white--text" style="text-decoration: none" to="/") Ingresa /
        v-btn(flat id="btn3")
            router-link(class="white--text" style="text-decoration: none" to="/aplicacion/ayuda") Ayuda
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

<style>
    #logo{
        align-items: end;
        width: 120%;
        background-color: black;
    }
    #min{
        background-color: black;
    }
    #min2{
        height: 25px;
        background-color: #2b467b;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    #ima{
        width: 35%;
        height: 20%;
        flex: 0 0 auto;

    }
    #to{
        height: inherit;
        background-color: black;
    }
    #barra{
        background-color: #212121;
    }
    #boton{
        width: 10%;
        height: 40%;
        background-color: transparent;
        font-size: 18px;
    }
    #btn1{

        font-size: 12px;
        padding: 0 0;
    }
    #btn2{
        font-size: 12px;
        padding: 0 0;
    }
    #btn3{
        font-size: 12px;
        padding: 0 0;
    }
    #abajo{
        background-color: black;
        height: 32px;
        padding: 0 10px;
    }
    #tol{
        padding: 0 100px;
    }
    #en{
        font-size: 20px;
    }
</style>
