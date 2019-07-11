<template lang="pug">
v-app
     v-container(grid-list-xl text-xs-center)
        v-layout(row wrap)
          //v-flex(md4 offset-md4) Bienvendio
              v-img(src="http://localhost:3000/imagenes/Logo.png")

          v-flex(xs12 lg6 md6 offset-lg3 offset-md3 )
            v-card
                v-card-title.center( center class="headline grey lighten-2 text-xs-right" primary-title  style="padding-left:10%") Bienvenido
                    //v-btn(flat)
                        v-img(src="http://vps-nodolab.com:3000/imagenes/Logo.png")
                v-card-media(style="padding:5%")
                  v-form(ref="form" v-model="valid" v-on:submit.prevent="m_login()" lazy-validation)
                    v-flex(xs12)
                      v-text-field( v-model="login.email"
                        :rules="emailRules"
                        label="Correo electronico"
                        name="id"
                        required)
                    v-flex(xs12)
                      v-text-field(
                        v-model="login.password"
                        :append-icon="show1 ? 'visibility_off' : 'visibility'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="password"
                        label="Contraseña"
                        hint="Al menos 8 Caracteres"
                        counter
                        @click:append="show1 = !show1")
                      v-card-actions
                          v-btn.primary.white--text(small v-on:click="registrar") Registrarse
                          v-spacer
                          v-btn.white--text(type="submit" small :disabled="!valid" color="success") Iniciar Sesion
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
          valid:true,
          info: null,
          show1: false,
          result:null,
          password: '',
          ver:"display:none",
          login: {
            email: "",
            password: ""
          },
          rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Al menos 8 Caracteres'
          },

          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
          ],
          info2:""
       }
     },
     methods: {

      registrar() {
        this.$router.push({ name: 'registrar'});
      },
      m_login() {
        alert($(event.currentTarget).serializeArray())
        api.post('/ad-usuarios/login', $(event.currentTarget).serializeArray())
        .then(response => {
          //alert('entro al api')
          this.info = response.data.message
          if(this.info == 'Bienvenido'){
            sessionStorage.setItem("id",response.data.data.id)
            sessionStorage.setItem("nombre",response.data.data.datos_personales.username)
            alert(sessionStorage.getItem("nombre"))
            this.info2 = 'Bienvenido '+response.data.data.datos_personales.username
            sessionStorage.setItem("variable",1)
            //this.$router.push({ name: 'inicio'});
            this.$router.push({ name: 'home'});
          }else{
            this.info2 = this.info
            //alert(this.info)
          }
        })
        .catch(e => {
          alert(e)
          this.errors.push(e)
          alert(e)
        })
      }
     }

   }
</script>
