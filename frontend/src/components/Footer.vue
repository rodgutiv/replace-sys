<template lang="pug">
    v-container(id="pie")  
        v-footer(height="auto" )
            v-layout(flex class="white--text" text-xs-center row  wrap)
                v-flex(xs12 style="margin-top: 40px;")
                    h3 DERECHOS RESERVADOS
                    p(id="derechos") El texto esta disponible bajo la Licencia Creative Common Atribución Compartit Igual3.0; pueden aplicar 
                    p(id="derechos") cláusulas adicionales. Al usar este sitio, usted acepta nuestros términos de uso y nuestra política de privacidad.
                    p(id="derechos") Reface es una marca registrada una organización sin ánimo de lucro
                v-layout(flex class="white--text" text-xs-center row  wrap style="margin-top: 60px;")
                    v-flex(xs2)
                        a( class="white--text") Politicas de privacidad
                    v-flex(xs2)
                        a( class="white--text") Acerca de Reface
                    v-flex(xs2)
                        a( class="white--text") Limitación de responsabilidad
                    v-flex(xs2)
                        a( class="white--text") Desarrolladores
                    v-flex(xs2)
                        a( class="white--text") Declaración de Cookies
                    v-flex(xs2)
                        a( class="white--text") Versión para móviles
</template>
<script>
export default {
    data () {
        return {
            content1:null,
            content2:null,
        }
    },
    created(){
        //sessionStorage.setItem("content1",null)
        this.content1 = sessionStorage.getItem("content1")
        //sessionStorage.setItem("content2","display:none")
        this.content2 = sessionStorage.getItem("content2")
        //alert(this.content2)
    }
}
</script>
<style>
#pie{
    background: linear-gradient(to bottom, black,#2b467b);
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
