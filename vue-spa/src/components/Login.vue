<template>
    <div id="main-login">
        <banner/>
        <formLogin/>
    </div>
</template>

<script>
import banner from './banner-login'
import formLogin from './Form-login'
export default {
    name: 'login',
    components: {
        banner,
        formLogin,
    },
    data() {
        return {
            
        }
    },
}
</script>