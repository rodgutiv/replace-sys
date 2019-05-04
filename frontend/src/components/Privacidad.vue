<template lang="pug">
  v-dialog(v-model="dialog" max-width="60%")
    //a(@click="dialog = true" slot="activator"  class="white--text") Aviso de privacidad
    v-btn( @click="dialog = true" round small slot="activator" flat color="white" dark) Aviso de privacidad
    v-card
      v-toolbar(dark color="indigo")
        v-toolbar-title AVISO DE PRIVACIDAD
        v-spacer
      v-card-text
        v-layout(id="texto")
          v-flex(xs12 md6 )
            h4 Refaccionaria Ceballos S. de R. L. de C.V.
            div(class="text-sm-left") Con domicilio en Avenida acueducto, numero 1989, colonia Matamoros, código postal 58240, de conformidad con lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares hace de su conocimiento el presente aviso de privacidad para los clientes y proveedores. 
          v-flex(xs12 md6 offset-xs1 )
            h4 1.- SOBRE EL TRATAMIENTO DE SUS DATOS PERSONALES DE LOS CLIENTES Y PROVEEDORES: 
            div(class="text-sm-left") Recabamos sus datos personales y datos personales sensibles para los efectos mencionados en el presente Aviso de Privacidad. En este sentido, hacemos de su conocimiento que sus datos personales serán tratados y resguardados con base en los principios de licitud, calidad, consentimiento, información, lealtad, proporcionalidad y responsabilidad, previstos en la Ley.
        v-layout(id="texto")    
          v-flex(xs12 md6 )
            h4 2- FINALIDAD EN EL TRATAMIENTO DE SUS DATOS PERSONALES: 
            div(class="text-sm-left") Recopilamos sus datos personales y datos personales sensibles por lo que solicitamos su consentimiento a través del presente Aviso de Privacidad con el objeto de utilizarlos para los fines siguientes: 
              div A) Para contactarlo y enviar la información relevante sobre nuestros productos. 
              div B) Identificarlo como cliente o proveedor de Nuestra Empresa. 
              div C) Para realizar todas las gestiones internas necesarias relacionadas con la relación comercial vigente, incluyendo cuestiones de crédito y pagos. 
          v-flex(xs12 md6 offset-xs1 )
            h4 3. MEDIOS PARA LIMITAR EL USO O DIVULGACIÓN DE SUS DATOS PERSONALES: 
            div(class="text-sm-left") Hacemos de su conocimiento que sus datos personales y datos personales sensibles serán resguardados bajo estrictas medidas de seguridad, administrativas, técnicas y físicas, las cuales han sido implementadas con el objeto de proteger sus datos personales contra daño, pérdida, alteración, destrucción, acceso o tratamiento no autorizados. 
        v-layout(id="texto")
          v-flex(xs12 md6 )
            h4 4. MEDIOS PARA EL EJERCICIO DE SUS DERECHOS COMO TITULAR DE LOS DATOS PERSONALES: 
            div(class="text-sm-left") Como titular de los datos personales objeto del presente Aviso de Privacidad, usted podrá ejercitar sus derechos de acceso, rectificación, cancelación u oposición, mismos que se consagran en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Así mismo, podrá revocar el consentimiento otorgado para el uso de sus datos personales. 
            div(class="text-sm-left") En cualquiera de estos supuestos, puede realizar su solicitud mediante el envío de un correo electrónico a la dirección refaccionariaceballos@gmail.com 
            div(class="text-sm-left") Con la finalidad de poder atender su solicitud, esta deberá satisfacer los requisitos estipulados en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. 
          v-flex(xs12 md6 offset-xs1 )
            h4 5.- TRANSFERENCIA DE SUS DATOS PERSONALES: 
            div(class="text-sm-left") Sus datos personales y/o datos personales sensibles, podrán ser transferidos a los terceros, que para el cumplimiento de las obligaciones que Refaccionaria Ceballos S. de R.L. de C.V., le ofrece, sea necesario. Lo anterior, sin perjuicio de las excepciones de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. 
        v-layout(id="texto")
          v-flex(xs12 md6 )
            h4 6. CAMBIOS AL PRESENTE AVISO DE PRIVACIDAD: 
            div(class="text-sm-left") El presente aviso de privacidad podrá ser modificado en el futuro. En todo caso, cualquier modificación al aviso de privacidad serán oportunamente informados a través de la publicación, correo electrónico o de nuestra página web
            div(class="text-sm-left") Por su seguridad, el Aviso de Privacidad vigente, estará disponible en todo momento en la página web antes señalada. 
            div(class="text-sm-left") REFACCIONARIA CEBALLOS S. DE R.L. DE C.V.
            div(class="text-sm-left") FECHA DE ULTIMA ACTUALIZACION: 28/08/2018 
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

