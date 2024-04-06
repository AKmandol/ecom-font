<template>
    <div>
        <a @click="toggleLoginModal()" class="nav-link text-white fw-bold px-2 py-1 d-flex align-items-center btn btn-login"><b-icon-person width="17" height="17" class="mr-2 text-light d-inline"></b-icon-person>Login</a>

        <Modal
            scrollable 
            footer-hide	
            :mask-closable="false"
            :closable="false"
            v-model="this.$store.state.modelLogin"
            width="50"
            >

            <button type="button" class="btn-close fs-5 position-absolute m-3 top-0 end-0" @click="toggleLoginModal()"></button>

            <div class="row align-items-center justify-content-center py-5">
                
                <div class="col-sm-12 col-md-6 p-4 text-center mx-auto">
                    <h1 class="display-6 fw-bold lh-1 mb-4">Feel Free to <span class="text-info">Join</span> us, We are always active.</h1>
                    <p class="fs-6"><span class="text-dark">Top-Sell BD </span> was establish at 2003. Our motive was to make online market available in all over Bangladesh. We are the most reliable and secure E-commerce company in the country.</p>
                </div>

                <div class="col-sm-12 col-md-6 text-center mx-auto">

                    <div class="d-flex justify-content-center bg-light border rounded-2 py-2">
                        <b-icon-shield-lock width="60" height="60" class="text-success text-center rounded-3"></b-icon-shield-lock>
                    </div>

                    <form class="px-4 py-5 border rounded-2 bg-light" method="post" action="" @submit.prevent="userLogin()">

                        <div class="form-floating mb-3">
                            <input type="email" name="email" v-model="form.email" autocomplete="off" class="form-control" placeholder="name@example.com">
                            <label>Email address</label>
                            <span v-if="errors['email']"> {{errors['email'][0]}} </span>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" name="password" v-model="form.password" autocomplete="off" class="form-control" id="floatingPassword" placeholder="Password">
                            <label>Password</label>
                            <span v-if="errors['password']"> {{errors['password'][0]}} </span>
                        </div>
                        <div class="checkbox mb-3">
                            <label>
                            <input type="checkbox" value="remember-me"> Remember me
                            </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit" > Login </button>
                    </form>

                    <h6 class="text-muted text-center py-1 mb-0">or</h6>
                    <a class="w-100 btn btn-lg btn-secondary" @click="showRegisterModal()" >Resister</a>

                </div>

            </div>

        </Modal>

        <UserRegister></UserRegister>
    </div>
</template>

<script>  

import UserRegister from './registerModal.vue';

export default {
    name: "UserLogin",

    components: {
        UserRegister,
    },

    data(){
        return{
            modelLogin: false,
            modelRegister: false,

            form: {
                email: '',
                password: ''
            },

            errors:{},
        }
    },

    methods: {

        userLogin() {
            axios.post('/login',this.form)
            .then((result) => {
                this.$router.push({name:'userDashboard'})
            })
            .catch((err) => {
                this.errors = err.response
            });
        },


       
        toggleLoginModal() {
            this.$store.dispatch("toggleLoginModal", this.modelLogin)
        },
        showRegisterModal() {
            this.toggleLoginModal()
            this.$store.dispatch("toggleRegisterModal", this.modelRegister)
        },

    }

}
</script>

<style scoped>
.btn-login {
    background: #05332eea;
}
</style>