<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <router-link class="navbar-brand" to="/">Aethi</router-link> 
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button> 
           
        <div class="navbar-collapse" id="collapsibleNavId" v-if="isAuthenticated">
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
            <ul class="navbar-nav  mt-2 mt-lg-0">
                <li class="nav-item p-2">Hello <span class="p-2" style="color:white">{{email}}{{role}}</span></li>
                <button class="btn btn-outline-success my-2 my-sm-0" @click="logout()">Logout</button>
            </ul>
        </div>
          <ul class="nav navbar-nav" v-else>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name : 'login' }">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name : 'signup' }">Signup</router-link>
                    </li>
                </ul>
    </nav>
</template>

<script>
import authstore from '../store/authStore'
export default {
    name: 'AppNavbar',
     computed : {
      email(){
        return authstore.state.auth.email;
      },
      role(){
        return authstore.state.auth.role;
      },
      isAuthenticated() {
        return authstore.getters.isAuthenticated;
      }
    },
    methods:
    {
       logout(){
               authstore.dispatch( 'logout' )
                    .then( () => this.$router.push( { name: 'login' } ) );
        }
    }
}
</script>


<style scoped>

</style>