<template>
    <nav class="transparent" >
        <div class="nav-wrapper container">
            <router-link :to="{ name: 'Home' }" class="brand-logo">Logo</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link :to="{ name: 'jogos' }">Jogos</router-link></li>
                <li><router-link :to="{ name: 'filmes' }">Filmes</router-link></li>
                <li><a>Contatos</a></li>
                <li v-if="state == false"><router-link :to="{ name: 'login' }">Login</router-link></li>
                <li v-if="state == true"><router-link :to="{ name: 'userpage' }">{{ touserpage }}</router-link></li>
                <li @click="logout" v-if="state == true"><a href="#logout">Logout</a></li>
            </ul>
        </div>
    </nav >
</template>

<script>
import auth from './firebaseinit'
export default {
    name: 'nav-bar',
    data() {
        return {
            touserpage: 'Perfil',
            state: false,
        }
    },
    mounted() {
        var context = this;
        auth.app.auth().onAuthStateChanged(user => {
            // se user.uid não estiver vazio, loga, senao nulo
            window.uid = user ? user.uid : null

            if(window.uid) {
                context.state = true
            }
        })
    },
    methods: {
        async logout() {
            await auth.app.auth().signOut()
            this.$router.push({ name: 'login' })
            location.reload()
        }
    },
}
</script>