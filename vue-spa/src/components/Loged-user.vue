<template>
    <div id="main">
        <banner/>
        <h1>bem vindo {{ email }}</h1>
    </div>
</template>

<script>
import banner from './banner-internal'
import auth from './firebaseinit'
export default {
    name: 'loged',
    components: {
        banner,
    },
    data() {
        return {
            email: '',
        }
    },
    mounted() {
        var context = this;
        auth.app.auth().onAuthStateChanged(user => {
            // se user.uid não estiver vazio, loga, senao nulo
            window.uid = user ? user.uid : null

            if(window.uid) {
                context.email = auth.app.auth().currentUser.email
            }
        })
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