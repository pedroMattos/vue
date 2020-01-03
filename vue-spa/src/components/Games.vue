<template>
    <div id="main">
        <banner/>
        <cards/>
    </div>
</template>

<script>
import cards from './Cards'
import banner from './banner-internal'
export default {
    name: 'games-page',
    components: {
        cards,
        banner,
    },
    data() {
        return {
        }
    },
}
</script>