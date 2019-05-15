<template lang="pug" >
v-layout(row justify-center)
  v-dialog(v-model="dialog" block width="500")
    v-btn(slot="activator" small icon color="green accent-3" dark)
      v-icon add
    v-card()
      v-card-title.headline Agregar más producto de: {{nombre}}
      v-card-text() 
        v-layout(class="text-xs-center")
          v-flex(xs5 )
            v-btn.success(flat icon small @click="decrement")
              v-icon add
          v-flex(xs2)
            v-text-field(name="sotck" :value="cantidades")
          v-flex(xs4 )
            v-btn.success(flat icon small @click="increment")
              v-icon remove
      v-card-actions
        v-spacer
        v-btn(color="red white--text darken-1"  @click.native="dialog = false") Cancelar
        v-btn(color="green white--text darken-1"  @click="enviar(cantidades)"  @click.native="dialog = false") Agregar
        
</template>

<script >
  import {api} from '@/api'
  //import $ from 'jquery'
  export default {
    props: {   
      producto:Number,
      nombre: String,
      cantidades: Number,
      precio:Number
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