<template lang="pug">
v-app
  div
    toolbar
    div
      router-view
    v-container(grid-list-md text-xs-center)
      v-layout(row wrap center)
         v-flex(xs12)
            h1.display-3 Reface
         v-flex(xs12 lg12)
          v-text-field( v-model="escrito"   label="Find Product" single-line solo prepend-icon="search" )
      v-layout(row wrap center)
         v-flex(lg12 xs12)
          v-data-table( :headers="headers" 
          :pagination.sync="pagination"
          :rows-per-page-items="rowsPerPageItems" 
          item-key="key_ext" 
          :items="items" 
          expand="true"
          :search="escrito"
          class="elevation-1")
            template(slot="headerCell" slot-scope="props")
              v-tooltip(bottom)
                span(slot="activator") {{ props.header.text }}
                span {{ props.header.text }}

            template( slot="items" slot-scope="props")

              td {{props.item.key_ext}}
              td
                ModalCode(
                :id="props.item.id"
                :key_ext="props.item.key_ext"
                :description="props.item.description"
                :codex="props.item.barcode"
                )
              //-td
                p 0
              //-td
                v-btn(fab small color="green" dark)
                  router-link(class="white--text" :to="{ name: 'addcomp', params: { id: props.item.id } }") 
                    v-icon devices_other
              td
                Modal(:id="props.item.id"
                  :description="props.item.description"
                  :stock="props.item.stock"
                  :line="props.item.line"  
                  :unites="props.item.unit_int"
                  :packs="props.item.pack_unit"
                  :fdateb="props.item.final_date_buy" 
                  :weight="props.item.weight"
                  :sale_price="props.item.sale_price" 
                  :csaleyear="props.item.cant_sale_year" 
                  :cbuyear="props.item.cant_buy_year" 
                  :model="props.item.model"
                  :satkey="props.item.key_sat"
                  :BarCode="props.item.barcode")
              td {{props.item.barcode}}                
      
    foother
</template>
<script>
import toolbar from '@/components/Toolbar.vue'
//import foother from '@/components/Footer.vue'
//import Video from '@/components/Video.vue'
export default {
  components:{
    toolbar//,foother,Video
  }
}
</script>