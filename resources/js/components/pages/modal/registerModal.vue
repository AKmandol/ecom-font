<template>
    
    <Modal
        scrollable 
        footer-hide	
        :mask-closable="false"
        :closable="false"
        v-model="this.$store.state.modelRegister"
        width="50"
        >
    
            <button type="button" class="btn-close fs-5 position-absolute m-3 top-0 end-0" @click="modelRegisterToggle()"></button>

            <div class="row mx-auto align-items-center">
                
                <div class="d-sm-12 col-md-4 p-4 text-center text-md-start bg-white rounded border">
                    <div class="mb-3 p-2">
                        <h5 class="text-center text-dark fs-5">Download Our Mobile</h5>
                        <h3 class="text-center text-danger fs-3 my-2 fw-bolder">App</h3>
                        <p class="text-center fs-6">for more excitting offfer<sup class="text-mute text-danger">*</sup></p>
                    </div>
                    <img class="img-fluid rounded" src="assets/mobile-app.png" alt="...">
                </div>

                <div class="col-sm-12 col-md-8 p-4 mx-auto">

                    <div class="d-flex justify-content-center bg-white border rounded-1 py-2">
                        <b-icon-app-indicator width="60" height="60" class="text-info text-center rounded-3"></b-icon-app-indicator>
                    </div>

                    <form class="p-4 border rounded-0 bg-light">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" placeholder="Your full name">
                            <label>Full Name<strong class="text-danger ml-1">*</strong></label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" autocomplete="off" class="form-control" placeholder="Your email">
                            <label>Your Email<strong class="text-danger ml-1">*</strong></label>
                        </div>
                        <div class="form-floating mb-3">
                            <input autocomplete="off" type="password" class="form-control" placeholder="Password">
                            <label>Password<strong class="text-danger ml-1">*</strong></label>
                        </div>
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" placeholder="Choose a photo">
                            <span class="input-group-text">Profile Image</span>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" placeholder="228/A,Rd-10,Dhanmondhi,Dhaka,Bangladesh">
                            <label>Full Address</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" placeholder="Your mobile number">
                            <label>Phone Number</label>
                        </div>
                    </form>

                   
                    <a class="w-100 btn btn-lg btn-primary my-0 rounded-0 border-2">Register</a>
                    <h6 class="text-muted text-center py-1 mb-0">or</h6>
                    <a class="w-100 btn btn-lg btn-secondary rounded-0 border-2" @click="showLoginModal" >Login</a>
                   

                </div>

            </div>
            
    </Modal>

</template>
    
<script>
export default {

    data(){
        return{
            modelRegister: false,
        }
    },

    methods: {

        modelRegisterToggle() {
            this.$store.dispatch("toggleRegisterModal", this.modelRegister)
        },
        showLoginModal() {
            this.modelRegisterToggle()
            this.$store.dispatch("toggleLoginModal", this.modelRegister)
        },
        
    }

}
</script>

<style scoped>

</style>