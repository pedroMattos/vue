<template>
    <div id="main">
        <div id="header-single">
            <div id="img">
                <img :src="url_img" :alt="title">
            </div>
            <div class="container" id="title">
                <h1 class="left">{{ title }}</h1>
            </div>
        </div>
        <div class="container" id="content">
            <p>{{ desc }}</p>
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
    #header-single #title {
        color: white;
        font-style: italic;
    }
    #header-single #title h1 {
        font-size: 30px;
    }
    #header-single img {
        position: absolute;
        height: 300px;
        width: 100%;
        top: -93px;
        filter: brightness(0.5);
        z-index: -3;
        object-fit: cover;
        object-position: top;
    }
    #header-single #img {
        position: relative;
    }
    #header-single {
        height: 300px;
    }
</style>