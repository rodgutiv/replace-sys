<template lang="pug">
    v-container(id="pie")
            v-layout(class="white--text" :style="content1" text-xs-center row  wrap style="width: 100%;")
                v-flex(flex xs4)
                    h3 SERVICIO AL CLIENTE
                    v-layout(row  wrap)
                        v-flex(xs4)
                            v-img(src="http://localhost:3000/imagenes/atención_al_cliente.png" width="30%"  style="margin-left:80%;") 
                        v-flex(xs8)
                            v-layout(row  wrap)
                                v-flex(xs12)
                                    span Contactanos
                                v-flex(xs12)
                                    span (443) 254 34 56
                    v-spacer
                    v-layout(row  wrap)
                        v-flex(xs4)
                            v-img(src="http://localhost:3000/imagenes/ubicación.png" width="30%"    style="margin-left:80%;") 
                        v-flex(xs8)
                            v-layout(row  wrap)
                                v-flex(xs12)
                                    span Encuentranos en:
                                v-flex(xs12)
                                    span Av. Acueducto 1969
                                v-flex(xs12)
                                    span Matamoros 58240
                                v-flex(xs12)
                                    span Morelia, mich.
                    
                v-flex(flex xs4)
                    h3 CUENTAS Y PEDIDOS
                    v-layout(row  wrap)
                        v-flex(xs12)
                            span Contactanos
                        v-flex(xs12)
                            span Factura electrónica
                        v-flex(xs12)
                            span Preguntas frecuentes
                v-flex(flex xs4)
                    h3 INFORMACIÓN
                    v-layout(row  wrap)
                        v-flex(xs12)
                            span Contactanos 
                        v-flex(xs12)
                            span Factura electrónica
                        v-flex(xs12)
                            span Preguntas frecuentes
            v-layout(class="white--text" :style="content2" text-xs-center row  wrap )
                v-flex(flex xs4)
                    h3 SERVICIO AL CLIENTE
                    v-layout(row  wrap)
                        v-flex(xs4)
                            v-img(src="http://localhost:3000/imagenes/atención_al_cliente.png" width="30%"  style="margin-left:80%;") 
                        v-flex(xs8)
                            v-layout(row  wrap)
                                v-flex(xs12)
                                    span Contactanos
                                v-flex(xs12)
                                    span (443) 254 34 56
                    v-spacer
                    v-layout(row  wrap)
                        v-flex(xs4)
                            v-img(src="http://localhost:3000/imagenes/ubicación.png" width="30%"    style="margin-left:80%;") 
                        v-flex(xs8)
                            v-layout(row  wrap)
                                v-flex(xs12)
                                    span Encuentranos en:
                                v-flex(xs12)
                                    span Av. Acueducto 1969
                                v-flex(xs12)
                                    span Matamoros 58240
                                v-flex(xs12)
                                    span Morelia, mich.
                    
                v-flex(flex xs4)
                    h3 CUENTAS Y PEDIDOS
                    v-layout(row  wrap)
                        v-flex(xs12)
                            span Contactanos
                        v-flex(xs12)
                            span Factura electrónica
                        v-flex(xs12)
                            span Preguntas frecuentes
                v-flex(flex xs4)
                    h3 INFORMACIÓN
                    v-layout(row  wrap)
                        v-flex(xs12)
                            span Contactanos 
                        v-flex(xs12)
                            span Factura electrónica
                        v-flex(xs12)
                            span Preguntas frecuentes
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
        content2:"display:none"
    }
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
