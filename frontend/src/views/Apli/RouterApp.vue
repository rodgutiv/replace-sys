<template lang="pug">
v-app
    //toolbar
    div
        v-container(grid-list-md r)
            router-view
</template>
<script>
import toolbar from '@/components/Toolbar.vue'
export default {
    components: {
        toolbar
    },
    data() {
        return {}
    },
    methods: {

    },
    mounted() {
       
    }



}
</script>
<style>
    
</style>
