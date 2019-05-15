<template lang="pug" >
v-layout(row justify-center)
  v-dialog(v-model="dialog" block width="500")
    v-btn.primary(slot="activator" round  dark) Pago en Oxxo
    v-card()
      v-card-title.headline Cuenta para depositar en Oxxo
      v-card-text() 
        v-layout(class="text-xs-center")
          v-flex(xs12 )
            h2 Hola
      v-card-actions
        v-spacer
        v-btn(color="red white--text darken-1"  @click.native="dialog = false") Cancelar
        v-btn(color="green white--text darken-1"  @click="enviar()"  @click.native="dialog = false") Confirmar
        
</template>

<script >
  import {api} from '@/api'
  //import $ from 'jquery'
  export default {
    props: {   
      id:Number,
      total: String,
      cant: Number
    },
    data (){
      return {
        dialog: false,
        bpm: null,
        estado:'pendiente'
      }
    },
    methods: {    
      enviar() {
        //-----cant
        api.post('/compra/finish', [{"id": this.id,"total_productos":this.cant, "total_venta":this.total.toFixed(2), "estado":this.estado}])
        .then(response => {
          if (response.data==null) {
              this.info=response.data
              alert(response.data)
          }
          else{
              //this.dialog=false           
              alert("Compra concluida quedamos pendientes de su pago")
              sessionStorage.removeItem("compra")
            //this.$router.go()
          }
        
        
        }).catch(error => {

          this.info= error
        })        
        //this.$router.go(this.$router.currentRoute)
      },
      created(){
        this.id = sessionStorage.getItem("compra")
        this.bpm=this.cantidades
      }
    }
  }
  </script>