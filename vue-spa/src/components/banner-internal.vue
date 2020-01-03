<template>
    <div id="main-div">
        <div id="img-banner">
            <img v-for="item in image" :key="item.id" v-bind:src="item.url" v-bind:alt="item.alt">
        </div>
        <div  id="titles">
            <h1>{{ title }}</h1>
        </div >
    </div>
</template>

<script>
export default {
    name: 'banner-internal',
    data() {
        return {
            title: 'Our games is the best',
            image: [
                {url: 'https://firebasestorage.googleapis.com/v0/b/ccm-mobile-c3339.appspot.com/o/filmes-banner.jpg?alt=media&token=9ba717c9-d373-4c04-ae77-69e701997f03', 
                alt: 'imagem banner'}
            ],
        }
    },
}
</script>

<style>
#main-div {
  height: 300px;
}
#main-div #img-banner {
  position: relative;
}
#main-div #img-banner img {
  position: absolute;
  top: -106px;
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
  filter: brightness(0.6);
  z-index: -3;
}
#main-div #titles h1 {
  color: white;
  padding-left: 200px;
  padding-top: 50px;
  font-size: 30px;
  font-style: italic;
}
</style>