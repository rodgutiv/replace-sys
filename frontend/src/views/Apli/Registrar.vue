<template lang="pug">
v-app
     v-container(grid-list-xl text-xs-center)
        v-layout(row wrap)
          //v-flex(md4 offset-md4) Bienvendio
              v-img(src="http://vps-nodolab.com:3000/imagenes/Logo.png")

          v-flex(xs12 lg6 offset-lg3)
            v-card
                v-card-title.center( center class="headline grey lighten-2 text-xs-right" primary-title  style="padding-left:10%") Registrate
                    //v-btn(flat)
                        v-img(src="http://vps-nodolab.com:3000/imagenes/Logo.png")
                v-card-media(style="padding:5%")
                  v-form(ref="form" v-model="valid" v-on:submit.prevent="registrar()" lazy-validation)
                    v-layout(row wrap)
                      v-flex(xs12 md12)
                        v-text-field( v-model="nombres"                        
                        label="Nombre Completo"
                        name="nombre_completo"
                        required)
                      v-flex(xs12 md6)
                        v-text-field( v-model="nick"
                        label="Nombre de Usuario"
                        name="username"
                        required)
                      v-flex(xs12 md12)
                        v-text-field( v-model="email"
                        :rules="emailRules"
                        label="Correo electronico"
                        name="email"
                        required)
                      v-flex(xs12 md12)
                        v-text-field(
                        v-model="password"
                        :append-icon="show1 ? 'visibility_off' : 'visibility'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="password"
                        label="Contraseña"
                        hint="Al menos 8 Caracteres"
                        counter
                        @click:append="show1 = !show1")
                      v-flex(xs12 md6)
                        v-dialog(
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        lazy
                        full-width
                        width="290px")
                          v-text-field(
                            :value = "date_born"
                            item-value ="date_born"
                            slot="activator"
                            v-model="date"
                            label="Fecha de nacimiento"
                            name="fecha_nacimiento"
                            prepend-icon="event"
                            readonly)
                          v-date-picker(:value = "date_born" color="blue" v-model="date" scrollable)
                            v-spacer
                            v-btn( flat color="primary" @click="modal = false") Cancel
                            v-btn( flat color="primary" @click="$refs.dialog.save(date)") OK
                      v-flex(xs12 md6)
                        v-text-field( v-model="tel"                        
                        label="Teléfono"
                        name="telefono"
                        required)
                      v-flex(xs12 md4)
                        v-text-field( v-model="num1"                 
                        label="Numero Interior"
                        name="num_interior"
                        required)
                      v-flex(xs12 md4)
                        v-text-field( v-model="num2"                 
                        label="Numero exterior"
                        name="num_exterior"
                        required)
                      v-flex(xs12 md4)
                        v-text-field( v-model="calle"                 
                        label="Calle"
                        name="calle"
                        required)
                      v-flex(xs12 md6)
                        v-text-field( v-model="colonia"                 
                        label="Colonia"
                        name="colonia"
                        required)
                      v-flex(xs12 md6)
                        v-text-field( v-model="localidad"                 
                        label="Localidad"
                        name="localidad"
                        required)
                      v-flex(xs12 md6)
                        v-text-field( v-model="municipio"                 
                        label="Municipio"
                        name="municipio"
                        required)
                      v-flex(xs12 md6)
                        v-text-field( v-model="estado"                 
                        label="Estado"
                        name="esatdo"
                        required)
                      v-flex(xs12 md6)
                        v-text-field( v-model="pais"                 
                        label="País"
                        name="pais"
                        required)
                      v-flex(xs12 md6)
                        v-text-field( v-model="cp"                 
                        label="Codigo Postal"
                        name="codigo_postal"
                        required)
                      v-flex(xs12 md12)
                        v-text-field( v-model="referencias"                 
                        label="Referencias"
                        name="referencias"
                        required)
                    v-card-actions
                        v-btn.error.white--text(@click="reset") Cancelar
                        v-spacer
                        v-btn.success.white--text(type="submit") Registrarse
                        //v-btn.error(@click="clear") Cancelar

          v-flex(xs12 lg6 offset-lg3)
            v-progress-circular(:style="ver" indeterminate)
            h1 {{info2}}
            h1 {{result}}



</template>


<script>
import Vue from "vue"
import VueResource from "vue-resource"
Vue.use(VueResource)
import {api} from '@/api'
import $ from 'jquery'

   export default {
     data () {
       return {
          info: null,
          valid:true,
          show1: false,
          result:null,
          ver:"display:none",
          usuario: "",
          password: "",
          nombres:"",
          apellidos:"",
          rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Al menos 8 Caracteres'
          },
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
          ],
          email: '',
          modal:false,
          date:"",
          date_born:"",
          tel:"",
          num1:"",
          num2:"",
          calle:"",
          colonia:"",
          localidad:"",
          municipio:"",
          nick:"",
          estado:"",
          pais:"",
          cp:"",
          referencias:"",
          info2:""
       }
     },
     methods: {

      registrar() {
        api.post('/ad-usuarios/new-user', $(event.currentTarget).serializeArray())
        .then(response => {
          this.info = response.data.message
          if(this.info == 'Saved!'){
            this.info2 = "Bienvenido"
            this.$router.push({ name: 'login'});
          }else{
            this.info2 = this.info
          }
        })
        .catch(e => {
          this.errors.push(e)
          alert(e)
        })
      },
      reset () {
        this.$refs.form.reset()
      }
     }

   }
</script>
