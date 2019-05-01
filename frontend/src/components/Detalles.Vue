<template lang="pug">
//div
  v-dialog(v-model="dialog" max-width="500" hide-overlay)
    v-btn( small slot="activator" color="blue" fab dark)
      v-icon add
    v-card
      v-toolbar(dark color="indigo")
        v-btn(icon dark @click.native="dialog = false")
          v-icon close
        v-toolbar-title Add to Product
        v-spacer
        v-toolbar-items
          v-btn(dark flat @click.native="dialog = false" ) Cancel
      v-card-title(primary-title)
        h3.headline.mb-0 {{catalog}}
      v-layout(row wrap center)
        v-flex(xs12 offset-xs5)
          v-switch(v-model="joto" color="green" :label="'Edit'")
      v-form(ref="form" v-on:submit.prevent="onSubmit()" )
        v-layout(row).text-xs-center
          v-flex(xs10 offset-xs1 )
            v-input.muere( prepend-icon="vpn_key")
              v-text-field(:value="id"  label="External key" name="id")
            v-input(prepend-icon="reorder")
              v-textarea(outline :value="codex" autofocus  :disabled="!joto" label="Insert URL Code" name="barcode" )

           
        
        v-divider 
        v-card-actions
          v-spacer
          v-btn.error(type="submit" @click.native="dialog = false") Save 
  //div
    v-dialog(v-model="dialog" width="600")    
        h4 Marca: {{marca}}
        h4 Garantía de 2 años
        h4 Condiciones PRoducto Cerrado y nuevo
    
</template>
<script>
export default {
    name: 'Frame',
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false,
      }
    }
}
</script>

