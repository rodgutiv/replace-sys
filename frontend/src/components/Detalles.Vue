<template lang="pug">
  v-dialog(v-model="dialog" max-width="500")
    v-btn( @click="dialog = true" round slot="activator" color="#003b94" dark) Detalles
    v-card
      v-toolbar(dark color="indigo")
        v-toolbar-title {{nombre}}
        v-spacer
      v-layout(row)
        v-flex(xs10 offset-xs1 )
          h4 Marca: {{marca}}
          h4 Garantía de 2 años
          h4 Condiciones: Producto Cerrado y nuevo
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

