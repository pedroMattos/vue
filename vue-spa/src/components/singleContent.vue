<template>
    <div id="main">
        <div id="main">
            <div id="header">
                <div id="img">
                    <img :src="url_img" :alt="title">
                </div>
                <div class="center" id="title">
                    <h3>{{ title }}</h3>
                </div>
            </div>
            <div id="content">

            </div>
        </div>
    </div>
</template>

<script>
// import database
import bd from './firebaseinit'
export default {
    // nome do template
    name: 'singleContent',
    data() {
        return {
            'id': null,
            'title': null,
            'desc': null,
            'url_img': null,
            'slug': null,
        }
    },
    beforeRouteEnter (to, from, next) {
        // query contents in single
        // NÃO ESQUECER DE COLOCAR LETRAS MAIUSCULAS E MINUSCULAS DA MESMA FORMA QUE ESTA DECLARADO NO BANCO
        bd.collection('Cards').where('Slug', '==', to.params.nome).get().then(query => {
            query.forEach(doc => {
                next(vm => {
                    vm.id = doc.data().id
                    vm.title = doc.data().Nome
                    vm.desc = doc.data().Desc
                    vm.url_img = doc.data().ImgUrl
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            bd.collection('Cards').where('Slug', '==', this.$route.params.nome).get().then(query => {
            query.forEach(doc => {
                next(context => {
                    // Seta os dados nas variaveis
                    this.id = doc.data().id
                    this.title = doc.data().Nome
                    this.desc = doc.data().Desc
                    this.url_img = doc.data().ImgUrl
                })
            })
        })
        }
    },
}
</script>

<style>
    #header #title {
        color: black;
    }
</style>