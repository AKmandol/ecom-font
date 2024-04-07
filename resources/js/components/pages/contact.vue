<template>
    <div>
  
        <div v-if="isLoading" class="preloader">
            <div class="spinner"></div>
        </div>
       
        <div class="container-fluid m-x  bg-dark mb-5 position-relative mt-50">

            <div class="row">
                <iframe class="m-0 p-0 border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473352.62217123056!2d91.98677707943028!3d22.047018614001473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad87c0002f69cd%3A0xbfb6392c4dba1529!2sMember%20Para!5e0!3m2!1sen!2sbd!4v1680704358161!5m2!1sen!2sbd" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
  
            <div class="row">
                <div class="col-md-10 col-sm-11 mx-auto bg-white shadow border-bottom rounded position-absolute top-100 start-50 translate-middle">
                    <div class="row text-center p-2">
                        <router-link to="/faq" class="bg-white px-3 py-2 border shadow rounded col-md-3 col-sm-12">
                            <b-icon-grid-fill class="d-inline nav-icon" width="15" height="15"></b-icon-grid-fill>
                            <span class="d-inline ml-2 text-dark fw-bold mr-2">FAQ</span>
                        </router-link>
                        <span class="text-secondary my-auto mx-auto col-auto"><b-icon-arrow-bar-left class="d-inline nav-icon" width="25" height="25"></b-icon-arrow-bar-left></span>
                        <router-link to="/about" class="bg-white px-3 py-2 border shadow rounded col-md-3 col-sm-12">
                            <b-icon-trophy class="d-inline nav-icon" width="15" height="15"></b-icon-trophy>
                            <span class="d-inline text-dark fw-bold ml-2">About Us</span>
                        </router-link>
                        <span class="text-secondary my-auto mx-auto col-auto"><b-icon-arrow-bar-left class="d-inline nav-icon" width="25" height="25"></b-icon-arrow-bar-left></span>
                        <router-link to="/contact" class="main-color px-3 py-2 border shadow rounded col-md-3 col-sm-12">
                            <b-icon-telephone class="d-inline text-white" width="15" height="15"></b-icon-telephone>
                            <span class="d-inline text-light fw-bold ml-2">Contact Us</span>
                        </router-link>
                    </div>
                </div>
            </div>
  
        </div>
       
  
        <div class="m-x my-4">
            <div class="container">
                <div class="row">

                    <div class="col-lg-7 col-md-12 mx-auto border-right rounded bg-light m-0 p-0">

                        <div class="mb-3 border p-3 border-custom-rd  rounded">
                            <h3 class="text-dark fw-bold text-center">Feel free to contact us</h3>
                        </div>   

                        <div class="px-3">
                            <form method="POST" class="p-3">

                                <div class="row mb-4">
                                    <label for="fullname" class="col-sm-12 col-md-3 col-form-label text-dark fw-bold">Full name <span class="text-danger ml-1">*</span> </label>
                                    <div class="col-sm-12 col-md-9">
                                        <input type="text" class="form-control bg-input" v-model="formValidate.name" id="fullname" placeholder="Fullname" :class="hasError('name') ? 'is-invalid' : '' ">
                                        <div class="invalid-feedback" v-if="hasError('name')">{{getError('name')}}</div>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <label for="email" class="col-sm-12 col-md-3 col-form-label text-dark fw-bold">Email <span class="text-danger ml-1">*</span> </label>
                                    <div class="col-sm-12 col-md-9">
                                        <input type="email" class="form-control bg-input" v-model="formValidate.email" id="email" placeholder="Email" :class="hasError('email') ? 'is-invalid' : '' ">
                                        <div class="invalid-feedback" v-if="hasError('email')">{{getError('email')}}</div>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <label for="phone" class="col-sm-12 col-md-3 col-form-label text-dark fw-bold">Phone no <small>(Optional)</small> </label>
                                    <div class="col-sm-12 col-md-9">
                                        <input type="text" class="form-control bg-input" :class="hasError('phone') ? 'is-invalid' : '' "  v-model="formValidate.phone" id="phone" placeholder="Phone number">
                                        <div class="invalid-feedback" v-if="hasError('phone')">{{getError('phone')}}</div>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <label for="msg" class="col-sm-12 col-md-3 col-form-label text-dark fw-bold">Messeage <span class="text-danger ml-1">*</span> </label>
                                    <div class="col-sm-12 col-md-9">
                                        <textarea class="form-control bg-input" id="msg" rows="3" v-model="formValidate.msg" placeholder="Message" :class="hasError('msg') ? 'is-invalid' : '' "></textarea>
                                        <div class="invalid-feedback" v-if="hasError('msg')">{{getError('msg')}}</div>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <label class="col-sm-12 col-md-3"></label>
                                    <div class="text-center col-sm-12 col-md-9 mt-3">
                                        <button class="btn col-12 btn-success text-white" @click="this.loading = true" icon="ios-send-outline" @click.prevent="sendEmail">
                                            <span v-if="loading">Loading...</span>
                                            <span v-else >Send Email</span>
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div class="offset-md-3 col-md-9 col-sm-12  text-center my-2">
                            <p class="text-center text-success">Follow us on</p>
                            <span class="d-flex justify-content-center">
                                <a class="p-2" href="#" target="_blank"><b-icon-facebook width="30" height="30" class="header-icon text-primary ul-li"></b-icon-facebook></a>
                                <a class="p-2" href="#" target="_blank"><b-icon-instagram width="30" height="30" class="header-icon text-danger ul-li"></b-icon-instagram></a>
                                <a class="p-2" href="#" target="_blank"><b-icon-twitter width="30" height="30" class="header-icon text-primary ul-li"></b-icon-twitter></a>
                            </span>
                        </div>

                    </div>

                    <div class="col-lg-4 col-md-12 mx-auto rounded bg-light p-0">

                        <div class="mb-3 border py-3 px-0 rounded border-custom-rd">
                            <h3 class="text-dark fw-bold text-center">Our Location</h3>
                        </div>

                        <div class="row p-0 mb-4">
                        
                            <div class="col-10 mx-auto py-2 my-2 border rounded bg-white">
                                <h6 class="p-2 text-start text-secondary"><span class="text-dark fw-bold">Address : </span>Bandarban Sadar, Bandarban.</h6>
                                <h6 class="p-2 text-start text-secondary"><span class="text-dark fw-bold">Road no : </span>3 No Circle Area.</h6>
                                <h6 class="p-2 text-start text-secondary"><span class="text-dark fw-bold">House no : </span>Member Para.</h6>
                            </div>

                            <div class="col-10 mx-auto py-2 my-2 border rounded bg-white">
                                <h6 class="p-2 text-start text-secondary"><span class="text-dark fw-bold">Phone no : </span>01718274787</h6>
                                <h6 class="p-2 text-start text-secondary"><span class="text-dark fw-bold">Email : </span>info@besttourinfo.com.</h6>
                                <h6 class="p-2 text-start text-secondary"><span class="text-dark fw-bold">Email : </span>support@besttourinfo.com.</h6>
                                <h6 class="p-2 text-start text-secondary"><span class="text-dark fw-bold">Email : </span>sales@besttourinfo.com.</h6>
                            </div>

                            <div class="col-10 mx-auto my-2 bg-card-bg p-2 container-main text-center">
                                <div>
                                    <img src="img/whats-app-qr.jpg" height="150" width="150" class="container-main" alt="logo not found">
                                </div>
                                <p class="text-center text-success text-small mt-2">Join us on whatsapp</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="m-x">
            <footerMenu></footerMenu>
        </div>

</div>
</template>
  
<script>
import footerMenu from "./footer.vue"
export default {
    components: {
        footerMenu,
    },

data(){
    return {
        isLoading: true,
        loading: false,
        errors:{},
        about:null,
        faq:null,
        value:1,

        formValidate: {
            name: '',
            email: '',
            phone: '',
            msg: ''
        },
    }
    },

methods: {

    hasError(fieldName){
        return (fieldName in this.errors);
    },
},

async created(){
    
}

}

</script>
  
<style scoped>


.m-x{
    width: 100vw;
    margin-left: -250px !important;
}

@media(max-width: 991px){
    .m-x{
        width: 100vw;
        margin-left: 0px !important;
    }
}

@media(max-width: 765px){
    .m-x{
        padding-top: 65px;
    }
}

.px-custom{
    padding-left: 20px !important;
    padding-right: 20px !important;
}

.bg-input{
    background-color: #ffffff;
}
.border-custom-rd{
    background: #cccccc;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-bottom : 0 !important;
}
</style>