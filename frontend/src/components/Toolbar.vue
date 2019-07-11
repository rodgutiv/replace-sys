<template lang="pug">
    div
        v-navigation-drawer(id="nav" v-model="drawer" dark fixed persistent enable-resize-watcher="false" class="hidden-lg-and-up")
            v-list
                v-list-tile(id="nav2")
                    v-list-tile-content
                    v-list-tile-title(class="white--text ") Menú
                v-divider
                v-list-tile
                    v-list-tile-content
                    v-list-tile-title
                        router-link(id="list" style="text-decoration: none" to="/") Inicio
                v-list-tile
                    v-list-tile-content
                    v-list-tile-title
                        router-link(id="list" style="text-decoration: none" to="/aplicacion/productos") Productos
                v-list-tile
                    v-list-tile-content
                    v-list-tile-title
                        router-link(id="list" style="text-decoration: none" to="/") Servicio Pesado
                v-list-tile
                    v-list-tile-content
                    v-list-tile-title
                        router-link(id="list" style="text-decoration: none" to="/") Outlet
                v-list-tile
                    v-list-tile-content
                    v-list-tile-title
                        router-link(id="list" style="text-decoration: none" to="/") Noticias
                v-list-tile
                    v-list-tile-content
                    v-list-tile-title
                        router-link(id="list" style="text-decoration: none" to="/") Promociones
        v-navigation-drawer( id="nav" dark fixed persistent enable-resize-watcher="false" class="hidden-lg-and-up"
            temporary
            v-model="rightDrawer"
            right= true
            app
            )
            v-list
                v-list-tile
                    v-list-tile-content
                    v-list-tile-title
                        router-link(id="list" style="text-decoration: none" :style="ver1" to="/aplicacion/login" ) Inisiar Sesión
                        v-btn(flat :style="ver2" md2 class="white--text" small v-on:click="cerrar()") Cerrar Sesión
                v-list-tile
                    v-list-tile-content
                    v-list-tile-title
                        router-link(id="list" style="text-decoration: none" to="/aplicacion/ayuda") Ayuda

        v-toolbar(color="#152d5b")
            v-flex(xl1 lg1  md1 sm2 xs2)
                v-flex
                    router-link(style="text-decoration: none" to="/")
                        v-img(id="logo" style="border-radius: inherit; " to="/" src="http://vps-nodolab.com:3000/imagenes/Logo.png")
            v-flex(xs2 sm1 md1 class="hidden-lg-and-up")
                v-toolbar-side-icon(class="white--text "  @click.stop="drawer = !drawer")
            v-flex(xs11 sm10 md11 lg11 class="text-md-center")
                v-layout(row wrap style="padding-left: 5%;" class="text-xs-center")
                    v-flex(lg4 md6 xs9  sm4 order-md2 order-sm2 order-xs2 style="padding-top: 1.5%" class="text-md-center")
                        v-layout(row wrap class="text-md-center")
                            v-flex(lg4 :style="ver1" class="hidden-sm-and-down")
                                router-link(id="boton"   to="/aplicacion/login" )
                                    v-btn( flat md2 class="white--text" small) Iniciar Sesión
                            v-flex(lg3 :style="ver2" class="hidden-sm-and-down")
                                v-btn(flat  md2  class="white--text" small v-on:click="cerrar()") Cerrar Sesión
                            v-flex(xs3 class="hidden-sm-and-down")
                                router-link(id="boton"  to="/aplicacion/ayuda")
                                    v-btn(flat class="white--text" small) Ayuda
                            v-flex(xs4 md2 lg2)
                                v-btn(small class="white--text" flat icon href="https://www.facebook.com/")
                                    v-img( src="http://vps-nodolab.com:3000/imagenes/FB.png")
                            v-flex(xs4 md2 lg2)
                                v-btn(small  class="white--text" flat icon href="https://www.instagram.com/?hl=es-la")
                                    v-img( src="http://vps-nodolab.com:3000/imagenes/IG.png")
                            v-flex(xs4 md2 lg2 class="hidden-md-and-up")
                                v-btn(icon @click.stop="rightDrawer = !rightDrawer")
                                    v-icon(class="white--text " ) more_vert
                    v-flex(lg8 md5 xs5 sm6 class="hidden-xs-only" order-md1 order-sm1 order-xs1  style="padding-top: 2%;")
                        v-text-field(class="black--text"  ref="dat" v-model="escrito" class="black--text" label="Find Product" solo append-icon="search" v-on:keyup.enter="Submit(escrito)")
                    v-flex(order-md3 md1 sm1 xs1 order-sm3 order-xs3 class="hidden-lg-and-up" style="padding-top: 1%;" class="text-xs-center")
                        v-btn(flat icon small class="text-xs-center" v-on:click="comprar()" )
                            v-img(src="http://vps-nodolab.com:3000/imagenes/carrito.png")
                v-layout(row wrap class="hidden-md-and-down" style="margin-bottom:20px" )
                    v-spacer()
                    router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Inicio
                    v-divider(vertical id="divison")
                    router-link(style="text-decoration: none" to="/aplicacion/productos")
                        v-btn(flat class="white--text" small) Productos
                    v-divider(vertical id="divison")
                    router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Servicio Pesado
                    v-divider(vertical id="divison")
                    router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Outlet
                    v-divider(vertical id="divison")
                    router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Noticias
                    v-divider(vertical id="divison")
                    router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Promociones
                    v-spacer
                    v-btn(flat icon small class="text-xs-center" v-on:click="comprar()" )
                        v-img(src="http://vps-nodolab.com:3000/imagenes/carrito.png")
                    v-btn(flat class="white--text" small v-on:click="comprar()") Carrito

</template>


<script>
export default {
    name: 'Frame',
    data () {
        return {
        drawer: false,
        rightDrawer: false,
        info: null,
        escrito: null,
        currentUrl:null,
        usuario:null,
        ver1:"display:none",
        ver2:"display:none",
        compra:null
        }
    },
    methods: {
            Submit(escrito){
                //alert(escrito)
                this.currentUrl = window.location.pathname;
                sessionStorage.setItem("dato",escrito)
                if(this.currentUrl == '/aplicacion/productos'){
                    //alert('go')
                    this.$forceUpdate('/aplicacion/productos')
                    //this.$router.go({path: '/aplicacion/productos' })
                }else{
                    this.$router.push({path: '/aplicacion/productos' });
                    //alert('push')
                }

                //alert(sessionStorage.getItem("dato"))
                //this.$router.push({ path: '/aplicacion/productos'})

            },
            cerrar(){
                alert('cerrar sesion')
                sessionStorage.removeItem("id")
                sessionStorage.removeItem("nombre")
                sessionStorage.removeItem("variable")
                sessionStorage.removeItem("compra")
                this.$router.go({ name: 'home'})
            },
            comprar(){
                if(this.usuario != null){
                    this.compra=sessionStorage.getItem("compra")
                    if(this.comprar != null ){
                        this.$router.push({name: 'comprar', params: { id: this.compra  } })
                    }else{
                        this.$router.push({name: 'comprar', params: { id: 0  } })
                    }
                }else{
                    this.$router.push({name: 'login' });
                }
                //alert(this.code)
                //this.$router.push({ path: '/aplicacion/comprar'});

            }
        },
        created(){
            sessionStorage.removeItem("dato")
            //alert(sessionStorage.getItem("nombre"))
            this.usuario=sessionStorage.getItem("nombre")
            if(this.usuario == null){
                this.ver2="display:none;"
                this.ver1=true
            }else{
                this.ver1="display:none;"
                this.ver2=true
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
    #logo{
        width: 80%;
    }
    #nav{
        background-color: #F3F3F3;
    }
    #nav2{
        background-color: #152d5b;
    }
    #list{
        color: #152d5b;
    }
    #boton{
        text-decoration: none;
        padding-top: 1%;
    }
    #divison{
        background-color:white;
        margin-top: 0.5%; 
        margin-bottom: 0.5%
    }
</style>
