<template lang="pug">
v-app
	div
	v-container(grid-list-md r)
</template>
<script>
import Modalprod from '@/components/Modalprod.vue'
export default {
    components: {
        Modalprod
    },
    data() {
        return {}
    },
    methods: {

    },
    mounted() {
        if (sessionStorage.getItem("id") === null) {
            this.$router.push({
                name: 'home'
            })
        }
    }



}
</script>


























    v-container(grid-list-md text-xs-center)
      v-layout(row wrap center)
         v-flex(xs11)
            h1.display-3 Refacciones 
         v-flex(xs11 lg11)
          v-text-field(v-model="escrito" label="Find Product" single-line solo)
          //v-text-field(v-model="escrito" label="Find Product" single-line solo prepend-icon="search" )
         v-flex(xs1 lg1)
          v-btn( flat @click="enviar") buscar
      v-layout(row wrap)
         v-flex(lg12 xs12)
          v-data-iterator(:items="items" :search="escrito" item-key="key_ext" :rows-per-page-items="rowsPerPageItems"  row wrap :pagination.sync="pagination" content-tag="v-layout")
            v-flex(slot="item" slot-scope="props" text-xs-left xs12 sm6 md4 lg4)
              v-card
                v-img(src="https://www.eleconomista.com.mx/__export/1507847242640/sites/eleconomista/img/historico/shutterstock_84492967.jpg_1612941218.jpg" height="150px")
                v-card-title(primary-title)
                  div
                    div 
                      h1 {{props.item.nombre}}
                    div 
                      h1 {{props.item.codigo}}
                    div
                      h2 Description
                    div {{props.item.descripcion}}
                v-card-actions
                  v-spacer
                  Modalprod(:Nombre="props.item.nombre" :tipo="props.item.tipo" :marca="props.item.marca" :precio="props.item.precio" :codigo="props.item.codigo")            
      
    
    
    
    v-container
      h1 {{info}}