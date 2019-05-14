<template lang="pug">
v-app
     v-container(grid-list-xl text-xs-center)
        v-layout(row wrap)
          //v-flex(md4 offset-md4) Bienvendio
              v-img(src="http://localhost:3000/imagenes/Logo.png")

          v-flex(xs12 lg6 offset-lg3)
            v-card
                v-card-title.center(style="padding-left:10%")
                    v-toolbar-title Bienvendio
                    v-spacer
                    v-btn(flat)
                        v-img(src="http://localhost:3000/imagenes/Logo.png")
                v-card-media(style="padding:5%")
                   v-form(ref="form" v-model="valid" v-on:submit.prevent="m_login()" lazy-validation)
                      v-text-field(v-model="login.usuario" label="Usuario" name="usuario")
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
                    v-spacer
                    v-btn.success.white--text(type="submit") Iniciar Sesion
                    v-btn.error(@click="clear") Cancelar

          v-flex(xs12 lg6 offset-lg3)
            v-progress-circular(:style="ver" indeterminate)
            h1 {{info}}
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
          show1: false,
          result:null,
          password: '',
          ver:"display:none",
          login: {
            usuario: "",
            password: ""
          },
          rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Al menos 8 Caracteres'
          },
       }
     },
     methods: {

      /*m_login() {
        this.ver=true
        if (this.login.usuario.length === 0) {
          this.info = "Necesitas ingresar tu usuario"
        } else if (this.login.password.length === 0) {
          this.info = "Indica tu contraseña"
        } else {
          this.request_status = ""
          let data = {
              usuario: this.login.usuario,
              password: this.login.password,
          }
          this.$http.post(V.SERVER + V.OPS.LOGIN, data).then(response => {
            if (response.data.success==false) {
              this.ver="display:none"
              this.info="Contraseña Incorrecta"
            }
            else if (response.data.nickname!=null && response.data.id!=null ) {
              this.info="Bienvenido"+response.data.nickname
              this.ver="display:none"
              sessionStorage.setItem("id",response.data.id)
              sessionStorage.setItem("rol",response.data.rol)
              sessionStorage.setItem("nick",response.data.nickname)
              sessionStorage.setItem("sucursal",response.data.sucursal)
              this.$router.push({ name: 'aplication'})
            }
          }, er => {
            this.info= er
          })
        }
      },*/
      onSubmit() {
        api.post('/form', $(event.currentTarget).serializeArray())
        //api.post('/form', $(event.currentTarget).serializeArray())
        .then(response => {
          if (response.data==null) {
            this.info="Contraseña Incorrecta"


          }
          else if (response.data.nickname!=null && response.data.id!=null ) {
            sessionStorage.setItem("id",response.data.id)
            sessionStorage.setItem("rol",response.data.rol)
            sessionStorage.setItem("nick",response.data.nickname)
            sessionStorage.setItem("sucursal",response.data.sucursal)
            this.$router.push({ name: 'aplication'})



          }


        }).catch(error => {
          this.info= error

        })
      },
       clear () {
         this.$refs.form.reset()
       }
     }

   }
</script>
