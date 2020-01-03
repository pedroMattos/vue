<template>
    <div id="home">
      <div id="header">
        <img v-for="item in image" :key="item.id" v-bind:src="item.url" v-bind:alt="item.alt">
        <div class="container" id="titles">
            <h1>{{ title }}</h1>
            <button class="btn btn-cta"><router-link :to="{ name: 'jogos' }">{{ ctaText }}</router-link></button>
        </div>
      </div>
      <div id="cards">
        <cards/>
      </div>
    </div>
</template>

<script>
import cards from './Cards'
export default {
    name: 'banner',
    components: { cards, },
    data() {
        return {
            image: [
                {
                  url: 'https://img.olhardigital.com.br/uploads/acervo_imagens/2018/06/r16x9/20180622155150_1200_675_-_dishonored.jpg',
                  alt: 'image banner',
                }
            ],
            title: 'See our Games',
            ctaText: 'Go!',
        }
    }
}
</script>
<style>
#header {
  color: white;
  position: relative;
  height: 100vh;
}
#header img {
  position: absolute;
  width: 100vw;
  z-index: -3;
  height: 100%;
  filter: brightness(0.6);
  object-fit: cover;
  top: -64px;
}
#header #titles {
  position: absolute;
  top: 40%;
  margin-left: 200px;
}
.btn-cta {
  background-color: orangered;
  border-radius: 20px;
  border: 0.5px solid grey;
  transition-duration: 0.5s;
}
.btn-cta:hover {
  background-color: transparent;
  transition-duration: 0.5s;
}
.btn-cta a {
    color: white;
}
</style>