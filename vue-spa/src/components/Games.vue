<template>
    <div id="main">
        <div>
            <banner/>
            <cards/>
        </div>
        <div id="si">
        </div>
    </div>
</template>

<script>
import cards from './Cards'
import banner from './banner-internal'
import single from './singleContent'
export default {
    name: 'games-page',
    components: {
        cards,
        banner,
        single,
    },
    data() {
        return {
            url: '',
        }
    },
    beforeMount() {
        var fPath = this.$route.fullPath
        var splited = fPath.split('/')
        this.url = splited[1]
    },
}
</script>