<template lang="pug">
v-app
    div
      router-view
    v-container(grid-list-md style="    max-width: fit-content;")
      v-card(style="padding: 50px; with:80%")
        v-form(ref="form" v-model="valid" v-on:submit.prevent="guardar()" lazy-validation)
          v-layout(row wrap class="blue--text" center style="padding: 20px;")
            v-flex(xs6)
              h1(style="color:#003b94; ") Direcció de Entrega
            v-spacer
            v-flex(xs6 class="text-md-rigth" style="padding-left:33%;" )
              v-btn(color="#003b94;" @click="reset") Otra
          v-layout(row wrap style="padding: 20px; display:none")
            v-flex(xs6)
              v-text-field(color="#003b94;" label="Nombre" style="display:none;" :value="codigo" name= "id" )
              v-text-field(color="#003b94;" label="Nombre" :value="nombre_cliente" name= "nombre" )
            v-flex(xs6)
              v-text-field(color="#003b94;" ref="email" label="Email" :value="email" name= "email" )
            v-flex(xs6)
              v-text-field(color="#003b94;" label="Teléfono" :value="tel" name= "tel" )
          v-divider(id="divi" gradient="to rigth, #7B1FA2, #E1BEE7")
          v-layout(row wrap style="padding: 20px;")
            v-flex(xs6)
              v-text-field(color="#003b94;" label="Código Postal" :value="cp" name= "cpostal" )
          v-divider(id="divi" gradient="to rigth, #7B1FA2, #E1BEE7")
          v-layout(row wrap style="padding: 20px;")
            v-flex(xs6)
              v-text-field(color="#003b94;" label="Estado" :value="estado" name= "estado"  )
            v-flex(xs6)
              v-text-field(color="#003b94;" label="Municipio" :value="municipio" name= "mun" )
          v-divider(id="divi")
          v-layout(row wrap style="padding: 20px;")
            v-flex(xs6)
              v-text-field(color="#003b94;" label="Calle" :value="calle" name= "calle"  )
            v-flex(xs3)
              v-text-field(color="#003b94;" label="Núm Ext." :value="ni" name= "next"  )
            v-flex(xs3)
              v-text-field(color="#003b94;" label="Núm Int." :value="ne"  name= "nint"  )
          v-divider(id="divi")
          v-layout(row wrap style="padding: 20px;")
            v-flex(xs12 lg6)
              v-text-field(color="#003b94;" label="Referencias" :referencia="referencia" name= "referencia" )
            v-flex(xs6)
              v-text-field(color="#003b94;" label="Colonia" :colonia="colonia" name= "colonia"  )
          
          v-layout(row wrap class="blue--text" )
            v-flex(xs12 class="text-lg-left")
              h2(style="color:#084a9f;") Carrito
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
                  td {{props.item.nombre}}
                  td {{props.item.cantidades}}
                  td {{props.item.precio}}
                  td {{props.item.total}}
                  td
                    Agregar(:producto="props.item.claves_productos" :nombre="props.item.nombre" :cantidades="props.item.cantidades")
                  td
                    Borrar(:producto="props.item.claves_productos" :cantidad="props.item.cantidades" :nombre="props.item.nombre")

          
          v-layout(row wrap style="padding: 20px;")                    
            v-flex(xs12 class="text-md-right")
              v-btn(color="#003b94;" type="submit") Siguiente
              //v-btn(color="#003b94;" v-on:click="guardar") Siguiente
    v-container()
      v-layout.white(style="color:#084a9f;" text-xs-center row  wrap )
        v-flex(flex xs4)
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
        v-flex(flex xs4)
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
        v-flex(flex xs4)
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
import Borrar from '@/components/Borrarcarrito.vue'
import Agregar from '@/components/Agregar.vue'

import {api} from '@/api'
import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
    toolbar, Borrar, Agregar
  },
  data () {
    return {
      codigo:null,
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
        { text: 'Nombre', value: 'nombre', sortable:false },
        { text: 'Cantidades', value: null },
        { text: 'Precio', value: null },
        { text: 'Total', value: null },
        { text: 'Agregar', value: null},
        { text: 'Borrar', value: null }
      ],
      exist:7,
      existencia:null,
      nombre_cliente:null,
      email:null,
      info:null,
      tel:null,
      cp:null,
      estado:null,
      municipio:null,
      calle:null,
      ni:null,
      ne:null,
      referencia:null,
      colonia:null,
      nombre_user:null
    }



},

 methods: {
    reset () {
      this.$refs.form.reset()
    },
    guardar(){
      //this.$router.push({ path: '/aplicacion/pagar'});
      //this.$router.push({ name: 'pagar'});
      //this.$router.push({ path: '/aplicacion/pagar'});
      //alert(this.$refs.email.value)
      //this.$router.push({  path: '/aplicacion/pagar'});
      api.post('/compra/buy', $(event.currentTarget).serializeArray())
      //api.post('/compra/buy', {id:'1'},{nombre_completo:this.nombre_cliente})
      .then(response => {
        this.info = response.data
        //alert(response.data)
        //this.$router.push({  path: '/aplicacion/pagar'});
        this.$router.push({name: 'pagar', params: { id: this.codigo  } })
      })
      .catch(e => {
        this.errors.push(e)
        //this.$router.push({  path: '/aplicacion/pagar'});
        this.$router.push({name: 'pagar', params: { id: this.codigo  } })
      })

   }
 },
created() {
    this.usuario=sessionStorage.getItem("id")
    if(this.usuario != null){
      api.get('/ad-usuarios/all-users/'+this.usuario)
      .then(response => {
        // JSON responses are automatically parsed.
        this.nombre_cliente=response.data.datos_personles.nombre_completo
        this.email=response.data.datos_personles.email
        this.tel=response.data.datos_personles.telefono
        this.cp=response.data.domicilio.codigo_postal
        this.estado=response.data.domicilio.estado
        this.municipio=response.data.domicilio.municipio
        this.ni=response.data.domicilio.num_interior
        this.ne=response.data.domicilio.num_exterior
        this.referencia=response.data.domicilio.referencias
        this.colonia=response.data.domicilio.colonia
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
    this.codigo = this.$route.params.id
    //alert(this.codigo)
    //this.code = sessionStorage.getItem("code");
    //Carrito
    /*api.get(`/products/search/`+this.code)*/
    api.post(`/compra/listcar`,[{'id_compras':this.codigo}])
    .then(response => {
      // JSON responses are automatically parsed.
      this.items=response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
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
    font-size: 12px;
    color: white;
    background-color: #003b94;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }
  #act{
    display: block;
  }
  #divi{
    margin-left: initial;
    max-width: inherit;
    border-width: 3px;
  }
  #datos{
    text-align: left;
  }
  #titulo{
    padding-left: 40px;
    padding-top: 20px;
  }
  #precio{
    padding-left: 40px;
    padding-top: 40px;
  }
  .primary--text{
    color: #003b94 !important;
    caret-color: #003b94 !important;
  }
  .theme--light.v-label {
    color: #003b94 !important;
}
</style>
