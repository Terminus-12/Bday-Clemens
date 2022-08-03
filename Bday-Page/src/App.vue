<script>
import Navbar from "./components/utility/Navbar.vue";
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
