<template lang="pug">
  v-dialog(v-model="dialog" max-width="50%")
    //a(@click="dialog = true" slot="activator"  class="white--text") Aviso de privacidad
    v-btn( @click="dialog = true" round small slot="activator" flat color="white" dark) Aviso de Cookies
    v-card
      v-toolbar(dark color="indigo")
        v-toolbar-title Aviso de cookies
        v-spacer
      v-card-text
          v-flex(xs12 md12 style="padding-bottom: 10px;")
            div(class="text-sm-left") Normalmente, las cookies se clasifican en cookies”temporales“y cookies “permanentes“. Las cookies temporales suelen utilizarse únicamente para realizar la transmisión de comunicación en una red de comunicaciones electrónica y son estrictamente necesarias para un servicio solicitado explícitamente por el suscriptor o usuario.
          v-flex(xs12 md12 style="padding-bottom: 10px;")
            div(class="text-sm-left") Las cookies de sesión son el tipo más habitual de cookies temporales y te ayudan a navegar de forma eficiente por nuestra web, realizando un seguimiento de tu recorrido página a página y teniendo en cuenta la información que has proporcionado durante la sesión actual. Las cookies temporales se guardan en la memoria temporal del navegador y se borran cuando éste se cierra. El uso de las cookies de sesión no requiere consentimiento explícito.
          v-flex(xs12 md12 style="padding-bottom: 10px;")
            div(class="text-sm-left") Las cookies permanentes, en cambio, guardan las preferencias del usuario para la sesión actual y futuras visitas. Se incorporan a la memoria no volátil de tu dispositivo (normalmente, en el disco duro) y siguen siendo válidas cuando se reinicia el navegador. Las cookies permanentes suelen utilizarse para hacer un seguimiento del comportamiento del usuario y facilitar una publicidad personalizada. El uso de las cookies permanentes requiere un consentimiento explícito.
          v-flex(xs12 md12 style="padding-bottom: 10px;")
            div(class="text-sm-left") Las cookies propias las establece el propietario de la página web, que es el responsable de informar al usuario del sitio sobre la finalidad del tratamiento de los datos y obtener su consentimiento. Las cookies de terceros se establecen mediante plug-ins de terceros, y tanto el propietario del sitio web como el tercero son conjuntamente responsables de notificar al usuario sobre la finalidad del tratamiento de los datos y obtener su consentimiento.
          v-flex(xs12 md12 style="padding-bottom: 10px;")
            h4 Qué uso hace la web de REFACE de las cookies
            div(class="text-sm-left") La web de REFACE utiliza cookies propias solamente a través de cookies de sesión (principalmente para el inicio de sesión y las búsquedas). Estas cookies temporales se borran al final de la sesión. Si visitas nuestro sitio web, entendemos que autorizas el uso de las cookies de sesión. A continuación, encontrarás información sobre cómo evitar el uso de cookies de sesión. Ten en cuenta que es posible que determinadas características de nuestro sitio web no funcionen correctamente sin las cookies de sesión.
      v-card-actions
        v-spacer
        v-btn.error(small type="submit" @click.native="dialog = false") Cerrar 
    
</template>
<script>
export default {
    name: 'Frame',
    props: {
      nombre: String,
      marca: String
    },
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false,
      }
    }
}
</script>
<style>
  #texto{
    padding-bottom: 10px;
  }
</style>

