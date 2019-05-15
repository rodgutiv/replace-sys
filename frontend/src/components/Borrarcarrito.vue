<template lang="pug" >
v-layout(row justify-center)
  v-dialog(v-model="dialog" block width="500")
    v-btn(slot="activator" small flat icon color="red lighten-2" dark)
      v-icon delete
    v-card(dark)
      v-card-title.headline 
      v-flex( offset-xs5 xs1)
        v-icon(large color="red") warning
      v-card-text ¿Seguro quieres quitar {{nombre}} del carrito?
      v-card-actions
        v-spacer
        v-btn(color="blue white--text darken-1"  @click.native="dialog = false") Cancelar
        v-btn(color="red white--text darken-1"  @click="enviar(producto)"  ) Quitar
        
</template>

<script >
  import {api} from '@/api'
  //import $ from 'jquery'
  export default {
    props: {   
      producto:Number,
      nombre: String,
      stock: Number,
      clave: String
    },
    data (){
    return {
      dialog: false
    }
  },
  methods: {

       enviar(key) {
         //alert(key)
        api.post('/compra/borrar_carr', [{"id":key}])
        .then(response => {
          if (response.data==null) {
             this.info=response.data
          }
          else{
              api.post('/products/addstock', [{"clave":this.clave},{"stock":this.stock}])
              .then(response => {
                  
                  this.dialog=false  
              }).catch(error => {
                this.info= error
                alert(this.info)
              })          
           //this.$router.go()
          }
       
        
        }).catch(error => {

          this.info= error
        })
          
  
   }
 },

  }



  


</script>