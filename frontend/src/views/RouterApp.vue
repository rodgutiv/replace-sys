<template lang="pug">
v-app
    div
        v-container(grid-list-md r)
            router-view
</template>
<script>
export default {
    components: {
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