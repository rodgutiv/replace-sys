<template lang="pug">
    div
        v-toolbar(color="#152d5b"  style="height: auto;")    
            v-flex(xs1)
                router-link(style="text-decoration: none" to="/") 
                    v-img(style="border-radius: inherit; width: 80%;" to="/" src="http://localhost:3000/imagenes/Logo.png") 
            v-flex(xs11)
                v-layout(row wrap style="padding-left: 10%;")
                    v-flex(xs8)
                        v-text-field(class="black--text" style="padding-top: 20px;" ref="dat" v-model="escrito" class="black--text" label="Find Product" solo append-icon="search" v-on:keyup.enter="Submit(escrito)")
                    v-flex(xs4 style="padding-top: 2%;")
                        v-layout(row wrap class="text-md-center" )
                            router-link(style="text-decoration: none" to="/") 
                                v-btn(flat class="white--text" small) Iniciar Sesión
                            router-link(style="text-decoration: none" to="/aplicacion/ayuda") 
                                v-btn(flat class="white--text" small) Ayuda
                            v-btn(small class="white--text" flat icon href="https://www.facebook.com/")
                                v-img(id="ima" src="http://localhost:3000/imagenes/facebook.png")
                            v-btn(small class="white--text" flat icon href="https://www.instagram.com/?hl=es-la")
                                v-img(id="ima" src="http://localhost:3000/imagenes/instagram.png")
                                //v-img(id="ima" src="http://localhost:3000/imagenes/instagram.png")
                v-layout(row wrap class="hidden-md-and-down" style="margin-bottom:25px" )
                    v-spacer()
                    router-link(style="text-decoration: none" to="/") 
                        v-btn(flat class="white--text" small) Inicio
                    v-divider(vertical color="white")
                    router-link(style="text-decoration: none" to="/aplicacion/productos") 
                        v-btn(flat class="white--text" small) Productos
                    v-divider(vertical color="white")
                    router-link(style="text-decoration: none" to="/") 
                        v-btn(flat class="white--text" small) Servicio Pesado
                    v-divider(vertical color="white")
                    router-link(style="text-decoration: none" to="/") 
                        v-btn(flat class="white--text" small) Outlet
                    v-divider(vertical color="white")
                    router-link(style="text-decoration: none" to="/") 
                        v-btn(flat class="white--text" small) Noticias
                    v-divider(vertical color="white")
                    router-link(style="text-decoration: none" to="/") 
                        v-btn(flat class="white--text" small) Promociones
                    v-spacer
                    router-link(style="text-decoration: none" to="/") 
                        v-avatar
                            v-img(src="http://localhost:3000/imagenes/carrito_compra.png")
                        v-btn(flat class="white--text" small) Carrito

</template>


<script>
export default {
    name: 'Frame',
    data () {
        return {
        drawer: true,
        info: null,
        escrito: null
        }    
    },
    methods: {
            Submit(escrito){
                //alert(escrito)
                sessionStorage.setItem("dato",escrito)
                //alert(sessionStorage.getItem("dato"))
                //this.$router.push({ path: '/aplicacion/productos'})
                this.$router.go({path: '/aplicacion/productos' });
            }
        }
}
</script>

<style>
    .v-toolbar__content{
        height: 100px !important;
    }
    .v-text-field.v-text-field--solo .v-input__control {
        min-height: auto !important;
        padding: 0;
    }
    .primary--text{
        color: #003b94 !important;
    }
</style>
