<template lang="pug">
v-app(dark)
  div
    toolbar
    div
      router-view
</template>
<script>
import toolbar from '@/components/Toolbar.vue'
export default {
  components:{
    toolbar
  }
}
</script>