<template>
    <div id="main">
        <router-view></router-view>
    </div>
</template>

<script>
import banner from './banner-internal'
import single from './singleContent'
import games from './Games'
export default {
    name: 'indexGames',
    components: {
        banner,
        single,
        games,
    },
    data() {
        return {
        }
    },
}
</script>