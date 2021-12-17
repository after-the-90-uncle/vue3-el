<template>
    <Layout>
        <template #main> 
            我是首页 {{$store.state.session}}
        </template>
    </Layout>
</template>
<script>
import Layout from "../components/Layout";
export default {
    name: "App",
    components: {
        Layout,
    },
    mounted() {
        console.log(this.$store.state.session)
        this.fetch()
    },
    methods: {
        async fetch(){
            // let result = await this.$api.get("/ifastps")
            // console.log(result )
        }
    },
};
</script>

<style lang="scss"></style>
