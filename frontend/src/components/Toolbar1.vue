<template lang="pug">
    v-container( grid-list-md text-xs-center)
        v-toolbar(color="#152d5b" app)
            v-flex(xl2 lg2)
                    //v-toolbar-side-icon(class="hidden-lg-and-up" @click.stop="drawer = !drawer")
                    a(to="/")
                        v-img(src="http://localhost:3000/imagenes/Logo.png" alt="logo" style="width:43%;")
            v-flex(xl8 lg8)
                v-toolbar-items
                    a( to="/" class="menu" class="white--text") INICIO
                    
                    v-btn(flat class="white--text" small) Productos
                    
                    //router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Servicio Pesado
                    
                    //router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Outlet
                    
                    //router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Noticias
                    
                    //router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Promociones
            v-flex(xl2 lg2)
        //v-toolbar(color="#152d5b" app)
            router-link(style="text-decoration: none" to="/")
                v-img(src="http://localhost:3000/imagenes/Logo.png" alt="logo" style="width:43%;")
            v-toolbar-items
                a( to="/" class="menu" class="white--text") INICIO
                
                v-btn(flat class="white--text" ) Productos
                
                    //router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Servicio Pesado
                    
                    //router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Outlet
                    
                    //router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Noticias
                    
                    //router-link(style="text-decoration: none" to="/")
                        v-btn(flat class="white--text" small) Promociones
        v-flex(xl2 lg2)
    // <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-2">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo.png" alt="logo" style="width:43%;">
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                            <div class="main-menu">
                                <nav>
                                    <ul class="mobile-menu">
                                <li><a href="index.html">Inicio </a></li>
                                <li><a href="">Productos </a></li>
                                <li><a href="">Servicio pesado </a></li>
                                <li><a href="">Outlet </a></li>
                                <li><a href="">Noticias </a></li>
                                <li><a href="">Promociones </a></li>
                                
                            </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2">
                            <div class="header-right-wrap">
                                <div class="same-style cart-wrap">
                                    <a href="#" class="cart-active">
                                        <i class="la la-shopping-cart"></i>
                                        <span class="count-style">02</span>
                                    </a>
                                </div>
                                <div class="same-style header-search ml-15">
                                    <a class="search-active" href="#"><i class="la la-search"></i></a>
                                </div>
                                <div class="same-style setting-wrap ml-15">
                                    <a class="setting-active" href="#"><i class="la la-user"></i></a>
                                    <div class="setting-content">
                                        <ul>
                                            <li>
                                                <h4>Tu cuenta</h4>
                                                <ul>
                                                    <li><a href="">Iniciar sesión</a></li>
                                                    <li><a href="">Crear cuenta</a></li>
                                                    <li><a href="">Mi cuenta</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
    .nav{
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
    .menu{
        font-size: 14px;
        display: inline-block;
        line-height: 108px;
        text-transform: uppercase;
        color: #000000;
        font-weight: 500;
        font-family: "montserrat", sans-serif;
        letter-spacing: .8px;
    }
</style>
