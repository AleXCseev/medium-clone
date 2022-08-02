<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">
                        Sign Up
                    </h1>
                    <p class="text-xs-center">
                        <!-- <router-link :to="{name: 'login'}">Nave an account?</router-link> -->
                    </p>
                    <app-validation-errors v-if="validationErrors" :validation-errors="validationErrors"/>
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Username" v-model="username">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Email" v-model="email">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control form-control-lg" placeholder="Password" v-model="password">
                        </div>
                        <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppValidationErrors from '@/components/ValidationErrors.vue';
export default {
    name: "AppRegister",
    components: {
        AppValidationErrors
    },
    data () {
        return {
            email: "",
            password: "",
            username: "",
        }
    },
    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmitting
        },
        validationErrors() {
            return this.$store.state.auth.validationErrors
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch("register", {
                    email: this.email, 
                    username: this.username, 
                    password: this.password
                })
                .then(() => this.$router.push({name: "home"}))
                // .catch(error => console.log(error))
        }
    }
}
</script>