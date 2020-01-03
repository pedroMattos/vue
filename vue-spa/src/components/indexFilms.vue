<template>
    <div id="main">
        <banner/>
        <router-view></router-view>
    </div>
</template>

<script>
import banner from './banner-internal'
import single from './singleContent'
export default {
    name: 'indexFilms',
    components: {
        banner,
        single,
    },
    data() {
        return {
        }
    },
}
</script>