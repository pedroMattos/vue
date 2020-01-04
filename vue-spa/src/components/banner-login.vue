<template>
    <div id="main-div-login">
        <div id="img-banner">
            <img v-for="item in image" :key="item.id" v-bind:src="item.url" v-bind:alt="item.alt">
        </div>
    </div>
</template>

<script>
export default {
    name: 'banner-internal',
    data() {
        return {
            image: [
                {url: 'https://firebasestorage.googleapis.com/v0/b/ccm-mobile-c3339.appspot.com/o/mea.jpg?alt=media&token=f07f2c2c-4215-4c62-b042-a329689961b7', 
                alt: 'imagem banner'}
            ],
        }
    },
}
</script>

<style>
#main-div-login {
  height: 100%;
}
#main-div-login #img-banner {
  position: relative;
}
#main-div-login #img-banner img {
  position: absolute;
  top: -106px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  object-fit: cover;
  filter: brightness(0.25);
  z-index: -3;
}
#main-div-login #titles h1 {
  color: white;
  padding-left: 200px;
  padding-top: 50px;
  font-size: 30px;
  font-style: italic;
}
</style>