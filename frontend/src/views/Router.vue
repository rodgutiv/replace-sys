<template lang="pug">
v-app
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