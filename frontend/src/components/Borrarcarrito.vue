<template lang="pug" >
v-layout(row justify-center)
  v-dialog(v-model="dialog" block width="500")
    v-btn(slot="activator" small flat icon color="red lighten-2" dark)
      v-icon delete
    v-card(dark)
      v-card-title.headline ¿Cuantos quieres quitar?
      v-flex( offset-xs5 xs1)
        v-icon(large color="red") warning
      v-card-text Estas seguro que quieres quitar?
      v-card-actions
        v-spacer
        v-btn(color="blue white--text darken-1"  @click.native="dialog = false") Cancelar
        v-btn(color="red white--text darken-1"  @click="enviar(producto)"  @click.native="dialog2 = false") Quitar
        
</template>

<script >
  //import {api} from '@/api'
  //import $ from 'jquery'
  export default {
    props: {   
      producto:Number,
      nombre: String,
      cantidad: Number
    },
    data (){
    return {
      dialog: false
    }
  },
  methods: {

       enviar(key) {
         alert(key)
        /*api.post('/borrar_ext', [{name:"id",value:key}])
        .then(response => {
          if (response.data==null) {
             this.info=response.data
          }
          else{
              this.dialog=false            
           this.$router.go()
          }
       
        
        }).catch(error => {

          this.info= error
        })
           this.$router.go()*/
        //this.$router.go(this.$router.currentRoute)
        
  
   }
 },

  }



  


</script>