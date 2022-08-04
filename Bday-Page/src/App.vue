<script>
import Navbar from "./components/util/Navbar.vue";
import Home from "./components/Home.vue";

export default {
    components: {Home, Navbar}
}

</script>

<template>
    <Navbar></Navbar>
    <router-view></router-view>
</template>

<style scoped>

</style>
