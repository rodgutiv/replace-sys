<template lang="pug">
    v-container(id="pie")
        v-footer(height="auto" )
            v-layout(flex class="white--text" text-xs-center row  wrap)
                v-flex(xs4 style="padding-left: 20%;")
                    h3 SERVICIO AL CLIENTE
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                v-flex(xs4)
                    h3 CUENTAS Y PEDIDOS
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                v-flex(xs4 style="padding-right: 18%;")
                    h3 AYUDA E INFORMACIÓN
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM
                    p(id="derechos") LOREM IPSUM

                v-flex(xs12)
                    v-layout(flex class="white--text" text-xs-center row  wrap style="margin-top: 30px;")
                        v-spacer
                        v-flex(xs12)
                            v-layout
                                v-divider(color="white" style="margin: 40px")
                                v-avatar(style="border-radius: initial;")
                                    v-img(style="border-radius: initial;" src="http://vps-nodolab.com:3000/public/imagenes/Logo.png")
                                v-divider(color="white" style="margin: 40px")
                        v-flex(xs12)
                            v-layout
                                v-flex(xs6)
                                    Cookies
                                    //a( class="white--text" @click="mostrar_politic") Condiciones de uso
                                    v-divider(vertical color="white" style="margin-left: 10px; margin-right: 10px;     min-height: 60%;")
                                    //a(class="white--text" @click="mostrar_politic") Aviso de privacidad
                                    Privacidad
                                v-flex(xs3)

                                v-flex(xs3)
                                    a( class="white--text") Todos los derechos reservados/REFACE/2019
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
