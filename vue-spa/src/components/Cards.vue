<template>
    <div class="container" id="main-cards">
        <div class="row">
            <div v-for="item in card" :key="item.id" class="col s12 m3">
                <div class="card">
                <div class="card-image">
                    <img v-bind:src="item.url_img">
                    <span class="card-title">{{ item.title }}</span>
                </div>
                <div class="card-content">
                    <p>{{ item.desc }}</p>
                </div>
                <div class="card-action">
                    <router-link class="modal-trigger" :to="{name: 'single', params: { nome: item.slug }}">Read More</router-link>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bd from './firebaseinit'
export default {
    name: 'cards',
    created() {
        var context = this;
        var docRef = bd.collection("Cards");
        docRef.get().then(function(doc) {
            doc.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'title': doc.data().Nome,
                    'desc': doc.data().Desc,
                    'url_img': doc.data().ImgUrl,
                    'slug': doc.data().Slug,
                }
                context.card.push(data)
            })
        })
    },
    data() {
        return {
            card: [],
        }
    }
}
</script>