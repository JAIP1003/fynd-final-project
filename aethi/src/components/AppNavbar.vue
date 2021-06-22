<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <router-link class="navbar-brand" to="/">Aethi</router-link>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active exact">
                    <!-- <span class="sr-only">(current)</span> -->
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item exact">
                    <router-link class="nav-link" to="/adminHome">Admin</router-link>
                </li>
                 <li class="nav-item">
                    <router-link class="nav-link" to="/cart">Cart</router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <router-link to="/login"><button class="btn btn-outline-success my-2 my-sm-0">Logout</button></router-link>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppNavbar',
}
</script>


<style scoped>

</style>