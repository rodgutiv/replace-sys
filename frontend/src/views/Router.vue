<template lang="pug">
v-app
  div
    toolbar
    div
      router-view
    Footer
</template>
<script>
import toolbar from '@/components/Toolbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    toolbar, Footer
  }
}
</script>