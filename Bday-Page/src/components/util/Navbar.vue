<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Elias Geburtstag</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/details">Details</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/help">Schichten</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/privacy">Datenschutz</router-link>
                    </li>
                </ul>
                <div class="navbar-brand spinner-border text-secondary" role="status" style="display: none"
                     id="nav_spinner"></div>
                <router-link class="navbar me-lg-3" to="/guests">Wer ist schon dabei?</router-link>
                <router-link class="btn btn-success" type="button" to="/join">JOIN NOW</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>

</style>