<template>
    <div class="center" id="main-form-login">
        <form @submit.prevent="login()" class="col s12">
            <div class="row">
                <p class="center">Join Us</p>
                <div class="input-field col s12">
                <input v-model="email" id="email" type="email" class="validate">
                <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                <input v-model="password" id="password" type="password" class="validate">
                <label for="password">Password</label>
                </div>
            </div>
            <input type="submit" value="Login" class="btn">
        </form>
    </div>
</template>

<script>
import auth from './firebaseinit'
export default {
    name: 'form-login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    mounted() {
        const res = auth
        console.log(res)
    },
    methods: {
        async login() {
            // recupera o valor das variaveis
            const { email, password } = this

            try {
                const res = await auth
                console.log(res)
            } catch(e) {
                console.log(e)
            }
        }
    },
}
</script>

<style>
    #main-form-login form {
        width: 400px;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        margin: auto;
        transform: translateY(100px);
    }
    #main-form-login form p {
        font-size: 25px;
        font-weight: 700;
    }
</style>