<template lang="pug">
    v-container(id="pie")
        v-footer(height="auto" )
            v-layout(flex class="white--text" text-xs-center row  wrap)
                v-flex(xs12 lg4 md4 sm4 class="text-md-center")
                    h3 SERVICIO AL CLIENTE
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                v-flex(xs12 lg4 md4 sm4 class="text-md-center")
                    h3 CUENTAS Y PEDIDOS
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                v-flex(xs12 lg4 md4 sm4 class="text-md-center")
                    h3 AYUDA E INFORMACIÓN
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM

                v-flex(xs12)                    
                            v-layout(xs12)
                                v-divider(color="white" style="margin: 3%")
                                v-avatar(style="border-radius: initial;")
                                    v-img(style="border-radius: initial;" src="http://vps-nodolab.com:3000/imagenes/Logo.png")
                                v-divider(color="white" style="margin: 3%")
                    
                            v-layout(raw wrap)
                                v-flex(xs12 sm4 md4)
                                    Cookies
                                v-flex(xs12 sm4  md4)
                                    Privacidad
                                v-flex(xs12 sm4 md4 style="padding-top:1%")
                                    a( class="white--text text-md-center" ) Todos los derechos reservados/REFACE/2019
</template>
<script>
import Privacidad from '@/components/Privacidad.vue'
import Cookies from '@/components/Cookies.vue'
export default {
    components:{
        Privacidad, Cookies
    },
    data () {
        return {
            content1:null,
            content2:null,
            dialog:false
        }
    },
    methods:{
      mostrar_politic(){
        var message = "POLITICAS DE PRIVACIDAD: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
        alert(message)
      },
      mostrar_about(){
        var message = "ACERCA DE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
        alert(message)
      },
      mostrar_resp(){
        var message = "RESPONSABILIDADES: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
        alert(message)
      },
      mostrar_dev(){
        var message = "Desarrollada por NodoLab.";
        alert(message)
      },
      mostrar_cookies(){
        var message = "DECLARACION DE COOKIES: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
        alert(message)
      }
    }
}
</script>
<style>
#pie{
    /*background: linear-gradient(to bottom, black,#2b467b);*/
    background: #042052;
}
.container {
    max-width: 100%;
}
.theme--light.v-footer {
    background: transparent;
}
#derechos {
    margin-bottom: 0px;
}
</style>
