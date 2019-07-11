<template lang="pug" >
v-layout(row justify-center)
  v-dialog(v-model="dialog" block width="500")
    v-btn(slot="activator" color="#062252" small  dark) Ver más
    v-card()
      v-toolbar(dark color="indigo")
        v-toolbar-title Proximamente 
        v-spacer
      v-card-text() 
        v-layout(class="text-xs-center")
          v-flex(xs12 )
            h1 Dentro de muy poco tiempo podras aprovechas nuestras promociones              
          
      v-card-actions
        v-spacer
        v-btn(color="green white--text darken-1" @click.native="dialog = false") Cerrar
        
</template>

<script >
  import {api} from '@/api'
  //import $ from 'jquery'
  export default {
    props: {      
    },
    data (){
      return {
        dialog: false,
        bpm: null
      }
    },
    methods: {    
      decrement () {
        this.cantidades--
      },
      increment () {
        this.cantidades++
      },
      enviar(cant) {
        //-----cant
        api.post('/compra/agregar', [{"id": this.producto,"cantidad":cant, "precio":this.precio}])
        .then(response => {
          if (response.data==null) {
              this.info=response.data
          }
          else{
              this.dialog=false           
            //this.$router.go()
          }
        
        
        }).catch(error => {

          this.info= error
        })
        this.$router.push({name: 'comprar', params: { id: this.id  } })
        //this.$router.go(this.$router.currentRoute)
      },
      created(){
        this.id = sessionStorage.getItem("compra")
        this.bpm=this.cantidades
      }
    }
  }
  </script>