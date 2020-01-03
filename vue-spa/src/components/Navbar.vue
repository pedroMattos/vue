<template>
    <nav class="transparent" >
        <div class="nav-wrapper container">
            <router-link :to="{ name: 'Home' }" class="brand-logo">Logo</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link :to="{ name: 'jogos' }">Jogos</router-link></li>
                <li><a>Filmes</a></li>
                <li><a>Contatos</a></li>
            </ul>
        </div>
    </nav >
</template>

<script>
export default {
    name: 'nav-bar',
    data() {
        return {
        }
    }
}
</script>