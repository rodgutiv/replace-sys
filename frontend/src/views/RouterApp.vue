<template lang="pug">
v-app
    div
        Toolbar
        v-container(grid-list-md r)
            router-view
</template>
<script>
import Toolbar from '@/components/Toolbar.vue'
export default {
    components: {
        Toolbar
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