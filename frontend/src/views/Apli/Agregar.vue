<template lang="pug">
v-app
    div
      router-view
    v-container(grid-list-md text-xs-center)
      v-card(style="padding: 10px;")
        v-layout(row wrap class="blue--text"  )
          v-flex(xs12 md6)
            v-img(src="http://vps-nodolab.com:3000/imagenes/disco2.png")
          v-divider(vertical)
          v-flex(xs12 md5 class="text-md-center" style="padding-top: 6%;padding-left: 10%;")
            v-layout(row wrap class="text-md-center")
              v-flex(xs12)
                h1(style="color:#003b94;") {{nombre}}
            v-layout(row wrap )
              v-flex(xs6 class="text-md-center")
                h1(style="color:#003b94;") {{existencia}}
              v-flex(xs6 class="text-md-center")
                h1(style="color:#003b94;") ${{precio}}
            v-form( v-on:submit.prevent="agregar()" lazy-validation )
              v-layout(row wrap)
                v-flex(xs12 md4 sm4 class="text-md-center")
                  v-text-field(style="display:none;" :value="codigo" name="code")
                  v-text-field(ref="cant" style=" color:#003b94;" type="number"  min="1" :value=0 name="stock")
                v-flex(xs12 md4 sm4 class="text-md-center")
                  v-btn.white--text(type="submit" color="#003b94" ) agregar
                v-flex(xs12 md4 sm4 class="text-md-center")
                  v-btn.white--text(color="#003b94" v-on:click="comprar") comprar
            v-layout(row wrap)
              v-flex(xs12  class="text-md-center")
                v-img(src="http://vps-nodolab.com:3000/imagenes/tarjetas.png")



        v-divider
        v-layout(row wrap class="blue--text")
          v-flex(xs12 md6 )
            v-layout(row wrap)
              v-flex(xs12 center)
                h2(style="color:#084a9f;") Especificaciones
            v-layout(row wrap center)
              v-flex(xs6)
                h3(style="color:#084a9f;") Marca:
              v-flex(xs6)
                h3(style="color:#084a9f;") {{marca}}
            v-layout(row wrap center)
              v-flex(xs6)
                h3(style="color:#084a9f;") Tipo:
              v-flex(xs6)
                h3(style="color:#084a9f;") {{tipo}}
          v-flex(xs6 class="hidden-sm-and-down")
            v-layout(row wrap)
              v-flex(xs12  center)
                h2(style="color:#084a9f;") Te puede gustar
                v-data-iterator(:items="items2" item-key="key_ext" :rows-per-page-items="rowsPerPageItems2"  row wrap :pagination.sync="pagination2" content-tag="v-layout")
                  v-flex(slot="item" slot-scope="props" text-xs-left xs12 sm6 md3 lg3)
                    v-card(id="bloque")
                      v-img(src="http://vps-nodolab.com:3000/imagenes/disco.png")
                      v-divider(id="division")
                      v-card-title(id="act" primary-title style="al" )
                        div
                          div
                            h5(style="color:#003b94;") {{props.item.nombre}}
                          div
                            h5(style="color:#003b94;") ${{props.item.precio}}
                          div
                            v-rating(id="stars" size="10" v-model="rating" readonly background-color="#003b94" style="color:#003b94;")
                      v-card-actions(id="act")
                        v-flex(sm12)
                          v-btn(id="boton_prod" small round v-on:click="ver(props.item.codigo)") Comprar
                          Modaldetalles(:nombre="props.item.nombre" :marca="props.item.marca")
                          //router-link(class="white--text"  :to="{ name: 'agregar', params: { code: props.item.code } }")
                    //      v-btn(id="boton_prod" small round @click="show = !show") Ver detalles
                      v-card-text(v-show="show" id="datos")
                        h6 Marca: {{marca}}
                        h6 Garantía de 2 años
                        h6 Condiciones PRoducto Cerrado y nuevo

    v-container(grid-list-md )
      v-card(style="background: white; padding: 50px;")
        v-layout(row wrap class="blue--text")
          v-flex( xs12 md6 sm6 class="text-lg-left")
            h2(style="color:#084a9f;") Descripción
            h3(style="color:#084a9f;") {{descripcion}}
          v-flex( xs12 md6 sm6 text-xs-center)
            h2(style="color:#084a9f;") ¿En que te podemos ayudar?
            v-input
              v-text-field( label="REALIZA UNA PREGUNTA" single-line solo )
        v-layout(row wrap class="blue--text" )
          v-flex( xs12 md6 sm6 class="text-lg-left")
            h2(style="color:#084a9f;") Compatibilidad
            v-data-table(
            :headers="headers"
            :pagination.sync="pagination"
            :rows-per-page-items="rowsPerPageItems"
            item-key="name"
            :items="items"
              class="elevation-1"
            )
              template(slot="headerCell" slot-scope="props")
                v-tooltip(bottom)
                  span(slot="activator") {{ props.header.text }}
                  span {{ props.header.text }}

              template( slot="items" slot-scope="props")
                td {{props.item.marca_auto}}
                td {{props.item.modelo}}
                td {{props.item.anio}}
                td {{props.item.motor}}
          v-flex( xs12 md6 sm6 text-xs-center)
            h2(style="color:#084a9f;") Califica nuestro producto
            v-rating(id="stars" v-model="rating"  background-color="#003b94" color="#003b94")
    v-container()
      v-layout.white(style="color:#084a9f;" text-xs-center row  wrap )
        v-flex(flex  xs12 md4 sm4)
            v-img(src="http://vps-nodolab.com:3000/imagenes/tarjeta cash.png" width="30%"  style="margin-left: 35%;")
            h3 Paga con tarjeta o en fectivo
            v-flex(xs12)
                span Con Mercado Pago,
            v-flex(xs12)
                span tienes meses sinintereses
            v-flex(xs12)
                span con tarjeta o efectivo en puntos
            v-flex(xs12)
                span de pago. ¡Y siempre es seguro!
        v-flex(flex  xs12 md4 sm4)
            v-img(src="http://vps-nodolab.com:3000/imagenes/envio.png" width="30%"  style="margin-left: 35%;")
            h3 Envío gratis desde $449
            v-flex(xs12)
                span Con Mercado Pago,
            v-flex(xs12)
                span tienes meses sinintereses
            v-flex(xs12)
                span con tarjeta o efectivo en puntos
            v-flex(xs12)
                span de pago. ¡Y siempre es seguro!
        v-flex(flex  xs12 md4 sm4)
            v-img(src="http://vps-nodolab.com:3000/imagenes/seguridad.png" width="30%"  style="margin-left: 35%;")
            h3 Seguridad
            v-flex(xs12)
                span Con Mercado Pago,
            v-flex(xs12)
                span tienes meses sinintereses
            v-flex(xs12)
                span con tarjeta o efectivo en puntos
            v-flex(xs12)
                span de pago. ¡Y siempre es seguro!
</template>
<script>

import Modaldetalles from '@/components/Detalles2.vue'
import {api} from '@/api'
import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
    Modaldetalles
  },
  data () {
    return {
      nombre:null,
      precio:null,
      descripcion:null,
      tipo:null,
      marca:null,
      modelo:null,
      año:null,
      marca_auto:null,
      motor:null,
      rating: 3,
      code:null,
      show: false,
      rowsPerPageItems: [12],
      rowsPerPageItems2: [4],
      pagination: {
        rowsPerPage: 12
      },
      pagination2: {
        rowsPerPage: 4
      },
      items: [],
      items2: [],
      errors: [],
      empty: [],
      headers:[
        { text: 'Marca', value: null, sortable:false },
        { text: 'Modelo', value: null },
        { text: 'Año', value: null },
        { text: 'Motor', value: null }
      ],
      exist:7,
      existencia:null,
      codigo:null,
      total:null,
      id_compra:0,
      info:null,
      usuario:null,
      id_ultima_compra:null
    }



},

 methods: {
   ver(dato){
     //sessionStorage.setItem("code",dato);
     this.$router.push({ name: 'agregar', params: { id: dato  }});
   },
   agregar(){
     //alert("entro")
     api.post('/products/stockup',$(event.currentTarget).serializeArray())
      .then(response => {
        if(!response.data[0].success){
          alert(response.data)
        }else{
          if(response.data[0].success==true){
            this.total = this.precio * response.data[2].stock
            //alert(this.total)
            api.post('/compra/addcar',[{'code':this.id_compra},{'claves':response.data[1].id},{'nombre':this.nombre},{'canti':response.data[2].stock},{'precio':this.precio},{'total':this.total}])
            .then(response => {
              this.info = response.data
              alert('Producto agregado al carrito')
            })
            .catch(e => {
              //alert(e)
              alert('Producto agregado al carrito')
              this.errors.push(e)
            })
          }else{
            alert('algo salio mal')
          }
        }
      })
      .catch(e => {
        this.errors.push(e)
      })
   },
   comprar(){
     //alert(this.code)
     if(!sessionStorage.getItem("id")){
       this.$router.push({name: 'login'})
     }else{
       this.$router.push({name: 'comprar', params: { id: this.id_compra  } })
     }
     //this.$router.push({ path: '/aplicacion/comprar'});
     
   }
 },
created() {

    this.code = this.$route.params.id
    //this.code = sessionStorage.getItem("code");
    //sthis.code = 1
    //alert(this.code)
    api.get(`/products/search/`+this.code)
    //api.get(`/producto`)
    .then(response => {
      //alert(response.data.stock)
      //alert(response.data.precio)
      // JSON responses are automatically parsed.
      this.nombre = response.data.nombre
      this.precio = response.data.precio
      this.modelo = response.data.modelo
      this.tipo = response.data.tipo
      this.marca = response.data.marca      
      this.descripcion = response.data.descripcion
      this.items = response.data.autos
      this.codigo=response.data.codigo
      this.exist=response.data.stock

      if(this.exist==0){
      this.existencia="No hay en existencia"
      }else{
        if((this.exist>0)&&(this.exist<20)){
          this.existencia="Poca existencia"
        }else if(this.exist>20){
          this.existencia="En existencia"
        }
      }
      api.post(`/products/specific2`,[{'marca':this.marca}])
      //api.get(`/producto`)
      .then(response => {        
        // JSON responses are automatically parsed.
        this.items2 = response.data
        //alert(this.items2)
        //alert(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
    })
    .catch(e => {
      this.errors.push(e)
    })
    if(!sessionStorage.getItem("compra")){
      api.get(`/compra/lastindex`)
      //api.get(`/producto`)
      .then(response => {
        this.id_compra = parseInt(response.data) + 1
        sessionStorage.setItem("compra",this.id_compra)
        api.post('/compra/add_buy', [{'id':this.id_compra},{'estado':'proceso'}])
        //api.post('/compra/buy', {id:'1'},{nombre_completo:this.nombre_cliente})
        .then(response => {
          this.info = response.data
        })
        .catch(e => {
          this.errors.push(e)
          //this.$router.push({  path: '/aplicacion/pagar'})
        })

      })
      .catch(e => {
        //alert(e)
        this.errors.push(e)
      })
    }else{
      this.id_compra = sessionStorage.getItem("compra")
    }
    
}


}

</script>
<style>
  #bloque{
    text-align: center;
  }
  #stars{
    color:#003b94;
  }
  #boton_prod{
    font-size: 10px;
    color: white;
    background-color: #003b94;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }
  #division{
    margin-left: 5%;
    max-width: 90%;
    border-width: 1px;
  }
  .theme--light.v-divider{
    border-color:#bac5df
  }
  #datos{
    text-align: left;
  }
  #precio{
    padding-left: 40px;
    padding-top: 40px;
  }
</style>
