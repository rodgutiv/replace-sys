<template lang="pug">
v-app
    div
      router-view
    v-container(grid-list-md text-xs-center style="background: white;")
      v-layout(row wrap center)
        v-flex(xs12 lg5 mb-3)
          v-expansion-panel(popout)
            v-expansion-panel-content()
              template(v-slot="header")
                div Item
              v-card
                v-card-text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>

      v-layout(row wrap center)
        //v-flex(xs11)
            h1.display-3 Products {{id}}
        v-flex(xs12 md4 lg4)
          v-text-field(v-model="escrito" label="Find Product" single-line solo prepend-icon="search" )
        v-flex(xs12 md4 lg4)
          v-select(:items="categorias" v-model="sub" solo label="Todas las categorías" @change="subcatego(sub)" v-on:keyup.enter="Submit2(sub)")
        v-flex(xs12 md4 lg4)
          v-select(:items="subcategorias" v-model="sub2" solo label="Subcategoría" @change="Submit2(sub2)" v-on:keyup.enter="Submit2(sub2)")

      v-layout(row wrap)
         v-flex(lg12 xs12)
          v-data-iterator(:items="items"  :search="escrito" item-key="key_ext" :rows-per-page-items="rowsPerPageItems"  row wrap :pagination.sync="pagination" content-tag="v-layout")
            v-flex(slot="item" slot-scope="props" text-xs-left xs12 sm6 md3 lg3)
              v-card(id="bloque")
                v-img(src="http://vps-nodolab.com:3000/imagenes/disco.png")
                v-divider(id="division")
                v-card-title(id="act" primary-title style="al" )
                  div
                    div
                      h3(style="color:#003b94;") {{props.item.nombre}}
                    div
                      h3(style="color:#003b94;") ${{props.item.precio}}
                    div
                      v-rating(id="stars" v-model="rating" readonly background-color="#003b94" style="color:#003b94;")
                v-card-actions(id="act")
                  v-btn(id="boton_prod" round v-on:click="comprar(props.item.codigo)") Comprar
                  Modaldetalles(:nombre="props.item.nombre" :marca="props.item.marca")

    v-container
      v-layout.white(style="color:#084a9f;" :style="content2" text-xs-center row  wrap )
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
import toolbar from '@/components/Toolbar.vue'
import Modaldetalles from '@/components/Detalles.vue'
import {api} from '@/api'
//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
    toolbar, Modaldetalles
  },
  data () {
    return {
      escrito:'',
      info:null,
      rating: 3,
      id:null,
      show: false,
      rowsPerPageItems: [12, 24, 36],
      pagination: {
        rowsPerPage: 12
      },
      items: [],
      errors: [],
      empty: [],
      content1:null,
      content2:null,
      dialog: false,
      categorias: [
          'ACCESORIOS',
          'ADITIVOS, QUIMICOS Y LUBRICANTES',
          'AFINACION',
          'CARBURACION Y FUEL INJECTION',
          'CARROCERIA',
          'COMBUSTIBLE',
          'CUIDADO AUTOMOTRIZ',
          'DIFERENCIAL Y CARDAN',
          'ELECTRICO',
          'EMBRAGUE',
          'ENCENDIDO',
          'ENFRIAMIENTO',
          'FUEL INYECCION',
          'HERRAMIENTA',
          'INTERIOR',
          'LIGAS Y EMPAQUES',
          'MISCELANEA',
          'MOTOR',
          'PARTES ELECTRICAS',
          'RETENES',
          'RODAMIENTO',
          'SENSORES',
          'SISTEMA DE FRENOS',
          'SISTEMA HIDRAULICO',
          'SUSPENSION Y DIRECCION',
          'TRANSMISION',
      ],
      subcategorias: [],
      sub:null,
      sub2:null,
      usuarios:null
    }



},

 methods: {
   comprar(dato){
     sessionStorage.setItem("code",dato);
     //this.$router.push({ path: '/aplicacion/agregar/'+dato});
     this.$router.push({name: 'agregar', params: { id: dato  } })
   },
   subcatego(sub){
      this.escrito = sub
      switch(sub){
        case 'ACCESORIOS':
          this.subcategorias = ['PLUMA LIMPIAPARABRISAS','ANTISULFANTE','PLAFONES CALAVERAS','LIMPIAPARABRISAS','TAPETES']
          break
        case 'ADITIVOS, QUIMICOS Y LUBRICANTES':
          this.subcategorias = ['ANTICONGELANTE','GRASAS','LIMPIADORES','ADITIVOS','QUIMICOS','DESENGRASANTE','SILICONES','ACCESORIOS','MARCADOR PARA AJUSTES','ADITIVO']
          break
        case 'AFINACION':
          this.subcategorias = ['FILTROS DE AIRE',
            'CABLE BUJIA',
            'FILTROS',
             'FILTROS DE GASOLINA',
             'VALVULA PCV',
             'FILTROS DE ACEITE',
             'ACEITE',
             'FILTRO DE GASOLINA',
             'FILTRO DE DIESEL',
             'TERMINAL',
             'KIT DE AFINACION',
             'FILTRO DE ACEITE']
          break
        case 'CARBURACION Y FUEL INJECTION':
          this.subcategorias = ['JUNTAS,EMPAQUES',
            'EMPAQUE',
            'REPUESTOS DE CARBURADOR',
            'EMPAQUES']
          break
        case 'CARROCERIA':
          this.subcategorias = ['PLUMA LIMPIAPARABRISAS',
            'TOLVAS',
            'MANIJAS',
            'RETROVISOR',
            'LUNA DE ESPEJO',
            'FACIAS',
            'DEFENSAS',
            'GUANTERA']
          break
        case 'COMBUSTIBLE':
          this.subcategorias = ['REPUESTO BOMBA GASOLINA',
            'TAPON GASOLINA']
          break
        case 'CUIDADO AUTOMOTRIZ':
          this.subcategorias = ['AROMATIZANTE',
            'TOALLA',
            'ESTOPA',
            'ESPUMA']
          break
        case 'DIFERENCIAL Y CARDAN':
          this.subcategorias = ['CRUCETA',
            'NUDO DIRECCION',
            'KIT SATELITE Y PLANETARIO']
          break
        case 'ELECTRICO':
          this.subcategorias = ['IMPULSORES',
            'ENCENDIDO',
            'CAMBIO DE LUZ',
            'MARCHAS',
            'ALTERNADORES',
            'RELAY',
            'FOCOS',
            'FUSIBLES',
            'FLASHER',
            'AMPERIMETRO',
            'FAROS',
            'VALVULA',
            'PALANCA',
            'BATERIA',
            'CABLES DE BATERIA',
            'CABLE AUTOMOTRIZ',
            'CARCASA',
            'ELEVADOR',
            'ENCENDEDORES',
            'CUARTOS',
            'ACCESORIOS TERMINALES',
            'TAPA DISTRIBUIDOR',
            'MARCADORES']
          break
        case 'EMBRAGUE':
          this.subcategorias = ['HORQUILLA',
            'BUJE',
            'CHICOTE',
            'BOLA CLUTCH',
            'COLLARIN',
            'KIT EMBRAGUE',
            'CUENCA',
            'ACTUADOR',
            'MAROMA',
            'KIT DE CLUTCH',
            'SWITCH CLUTCH',
            'CABLE SELECTOR',
            'CABLE VELOCIDAD',
            'KIT DISTRIBUCION',
            'BOMBA CLUTCH',
            'CAJA VELOCIDADES',
            'CABLE TRANSVERSAL',
            'PEDAL',
            'CLUTCH',
            'PALANCA']
          break
        case 'ENCENDIDO':
          this.subcategorias = ['TRANSMISORES'
          ]
          break
        case 'ENFRIAMIENTO':
          this.subcategorias = ['MANGUERAS',
          'BRIDA TOMA AGUA',
          'BOMBA AGUA',
          'POLEA TERMICA',
          'TERMOSTATO',
          'TOMA AGUA',
          'TAPON CARTER',
          'TAPON DEPOSITO',
          'DEPOSITO',
          'MOTOVENTILADOR',
          'TAPON RADIADOR',
          'RADIADOR',
          'RADIADOR AGUA',
          'ASPAS',
          'FAN CLUTCH',
          'VALVULA',
          'TAPON ANTICONGELANTE',
          'KIT TOMA AGUA',
          'RADIADOR ACEITE',
          'FILTRO CABINA',
          'TAPON LATON',
          'JUNTAS BOMBA AGUA',
          'BRIDA',
          'MANGUERA']
          break
        case 'FUEL INYECCION':
          this.subcategorias = ['INYECTOR',
          'LIGAS',
          'VALVULA EGR',
          'VALVULA PASO AIRE',
          'VALVULA IAC',
          'CAJA ENCENDIDO',
          'VALVULA VACIO',
          'SENSOR TEMPERATURA',
          'CUERPO DE ACELERACION',
          'VALVULA',
          'TERMOSTATO',
          'VALVULA REGULADORA',
          'REGULADOR DE PRESION'
          ]
          break
        case 'HERRAMIENTA':
          this.subcategorias = ['GATO DE EMERGENCIA',
          'KIT HERRAMIENTA'
          ]
          break
        case 'INTERIOR':
          this.subcategorias = ['VOLANTES',
          'GATILLO',
          'CINTURON DE SEGURIDAD']
          break
        case 'LIGAS Y EMPAQUES':
          this.subcategorias = ['LIGA DISTRIBUIDOR']
          break
        case 'MISCELANEA':
          this.subcategorias = ['HERRAMIENTAS',
          'BOTONES',
          'BOCINA CLAXON',
          'CINCHOS',
          'CINTAS',
          'ARANDELAS',
          'GRAPAS',
          'AMPERIMETRO',
          'REPUESTO PALANCA',
          'MANIJA']
          break
        case 'MOTOR':
          this.subcategorias = ['JUNTA MOTOR',
            'EMPAQUE',
            'POLEA',
            'SOPORTE MOTOR',
            'BARRAS',
            'POLEA TENSORA',
            'TAPA',
            'ARBOLES DE LEVAS',
            'TENSOR',
            'BALANCINES',
            'EMPAQUES',
            'CONDENSADOR',
            'KIT DISTRIBUCION',
            'COLILLA',
            'JUNTAS,EMPAQUES',
            'JUNTA PUNTERIAS',
            'VALVULA PCV',
            'GUIA DE VALVULA',
            'VALVULA ESCAPE',
            'VALVULA SOLENOIDE',
            'BANDA',
            'TAPON ACEITE',
            'LAINAS',
            'TURBINAS',
            'SELLOS Y JUNTAS DE MOTOR']
          break
        case 'PARTES ELECTRICAS':
          this.subcategorias = ['ARNES',
          'TAPA DISTRIBUIDOR',
          'BOMBA GASOLINA',
          'BOBINA',
          'ENCENDIDO',
          'SWITCH',
          'BULBO TEMPERATURA',
          'BULBO REVERSA',
          'SWITCH LUZ',
          'BULBO ACEITE',
          'BULBO RADIADOR',
          'SOLENOIDE',
          'BUJIA',
          'FLOTADOR',
          'DISTRIBUIDOR',
          'BULBOS Y SENSORES',
          'BOMBA GASOLINA MECANICA',
          'CAPUCHON',
          'BANDA',
          'RELAY',
          'INTERRUPTOR DE LUZ',
          'CABLE ACELERADOR',
          'SWITCH ENCENDIDO',
          'INTERRUPTOR EMERGENCIA',
          'CAPUCHON BOBINA']
          break
        case 'RETENES':
          this.subcategorias = ['RETENES'
          ]
          break
        case 'RODAMIENTO':
          this.subcategorias = ['TRIPOIDE',
          'ESPIGA',
          'FLECHA',
          'VARILLA DIRECCION',
          'JUNTA HOMOCINETICA',
          'KIT RUEDA',
          'BALERO',
          'MANGUETA']
          break
        case 'SENSORES':
          this.subcategorias = ['SENSOR OXIGENO',
          'SENSOR MAF',
          'SENSOR TEMPERATURA',
          'SENSOR CTS',
          'SENSOR ACELERADOR',
          'SENSOR MAP',
          'SENSOR PRESION',
          'SENSOR CKP',
          'SENSOR CMP',
          'SENSOR DETONACION',
          'SENSOR VELOCIDAD',
          'SENSOR ABS',
          'SENSOR ARBOL',
          'SENSOR TPS',
          'SENSOR GOLPETEO',
          'SENSOR TRANSMISION',
          'SENSOR',
          'SENSOR POSICION',
          'SENSOR DESGASTE',
          'SENSOR FRENO',
          'SENSOR KS',
          'SENSOR CRK',
          'SENSOR ECT',
          'SENSOR VSS']
          break
        case 'SISTEMA DE FRENOS':
          this.subcategorias = ['REPUESTO DE CALIPER',
          'BALERO',
          'CILINDROS',
          'BOMBA CLUTCH',
          'BOMBA DE FRENO',
          'BALATAS',
          'DISCOS',
          'MAZA',
          'PARTES DE TAMBOR',
          'AJUSTADOR',
          'ANCLA',
          'LEVA',
          'KIT FRENO',
          'ACUMULADORES',
          'LIQUIDO DE FRENOS',
          'MANGUERAS',
          'PISTONES',
          'HERRAJE',
          'FUNDA ACELERADOR',
          'CHICOTE FRENO',
          'VALVULA',
          'BOOSTER',
          'BULBOS Y SENSORES',
          'TAMBOR']
          break
        case 'SISTEMA HIDRAULICO':
          this.subcategorias = ['BOMBA CLUTCH'
          ]
          break
        case 'SUSPENSION Y DIRECCION':
          this.subcategorias = ['COPLE',
          'ROTULA',
          'BOMBA DIRECCION',
          'VARILLA',
          'TERMINAL',
          'BIELETA',
          'RESORTE',
          'SOPORTE',
          'ABRAZADERA',
          'CAJA DIRECCION',
          'GOMAS',
          'AMORTIGUADOR',
          'CHAVETAS',
          'CACAHUATES',
          'TORNILLO ESTABILIZADOR',
          'CAMPANA',
          'BRAZO LIMPIADOR',
          'BALEROS Y TAZAS',
          'MACHETA',
          'BRAZO PITMAN',
          'BRAZO AUXILIAR',
          'NUDOS',
          'BASE AMORTIGUADOR',
          'TIRANTES',
          'GALLETAS',
          'TOPES',
          'CARBURADOR',
          'SOPORTE TRANSMISION',
          'SOPORTE CARDAN',
          'BRAZO',
          'BRAZO ANCO',
          'FLAUTA BALANCÍN',
          'BUJE',
          'AUMENTO RESORTE',
          'VALVULA PCV',
          'CREMALLERA',
          'PARTES DE SUSPENSION Y DIRECCION',
          'HORQUILLA',
          'BALERO',
          'DIRECCION',
          'CLUTCH',
          'SUSPENSIÓN',
          'BOLSA AIRE']
                    break
                  case 'TRANSMISION':
                    this.subcategorias = ['BRONCES',
          'CANDELERO',
          'PALANCA DE VELOCIDADES',
          'ARO DENTADO',
          'YUGOS',
          'HUESO CAJA VELOCIDADES',
          'CABLE CAJA',
          'CORONA Y PIÑON']
          break
      }
    },
    Submit2(buscado){
      this.escrito = buscado
    }
 },
created() {
    this.usuario=sessionStorage.getItem("nombre")
    //alert(sessionStorage.getItem("nombre"))
    //alert(sessionStorage.getItem("dato"))
    this.info = this.$route.params.info,
    //alert("ejemplo "+this.info)
    sessionStorage.setItem("content1","display:none")
    sessionStorage.setItem("content2",null)
    //alert(this.content2)
    if(sessionStorage.getItem("dato")!=null){
      this.escrito=sessionStorage.getItem("dato")
    }else{
      this.escrito=''
    }
    api.get(`/products/all`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data
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
  #boton_prod{
    font-size: 12px;
    color: white;
    background-color: #003b94;
  }
  #stars{
    color: #003b94 !important;
  }
  #act{
    display: block;
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
  .primary--text{
    color: #003b94 !important;
  }
</style>
