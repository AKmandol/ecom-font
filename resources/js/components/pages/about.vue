<template>
    <div>
  
        <div v-if="isLoading" class="preloader">
            <div class="spinner"></div>
        </div>
       
        <div class="container-fluid m-x main bg-dark mb-5 position-relative mt-50">
  
            <div class="row">
                <h1 class="text-center text-dark fw-bold display-2">About Us</h1>
                <div class="col-md-10 col-sm-11 mx-auto bg-white shadow border-bottom rounded position-absolute top-100 start-50 translate-middle">
                    <div class="row text-center p-2">
                        <router-link to="/faq" class="bg-white px-3 py-2 border shadow rounded col-md-3 col-sm-12">
                            <b-icon-grid-fill class="d-inline nav-icon" width="15" height="15"></b-icon-grid-fill>
                            <span class="d-inline ml-2 text-dark fw-bold mr-2">FAQ</span>
                        </router-link>
                        <span class="text-secondary my-auto mx-auto col-auto"><b-icon-arrow-bar-left class="d-inline nav-icon" width="25" height="25"></b-icon-arrow-bar-left></span>
                        <router-link to="/about" class="main-color px-3 py-2 border shadow rounded col-md-3 col-sm-12">
                            <b-icon-trophy class="d-inline text-white" width="15" height="15"></b-icon-trophy>
                            <span class="d-inline text-light fw-bold ml-2">About Us</span>
                        </router-link>
                        <span class="text-secondary my-auto mx-auto col-auto"><b-icon-arrow-bar-left class="d-inline nav-icon" width="25" height="25"></b-icon-arrow-bar-left></span>
                        <router-link to="/contact" class="bg-white px-3 py-2 border shadow rounded col-md-3 col-sm-12">
                            <b-icon-telephone class="d-inline nav-icon" width="15" height="15"></b-icon-telephone>
                            <span class="d-inline text-dark fw-bold ml-2">Contact Us</span>
                        </router-link>
                    </div>
                </div>
            </div>
  
        </div>
       
  
        <div class="m-x my-4">
            <div class="container">
                <div class="row mx-auto">

                    <div class="my-2 rounded px-custom py-3">
                        <h6 class="text-dark fw-bold text-start">Q. How does the site work? </h6>
                        <p class="text-dark mt-3 text-start"> You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on Place order. You let us know your address, select a delivery time – and voila, you are done.  A representative will then deliver your order right to your home or office. </p>
                    </div>

                    <div class="my-2 rounded px-custom py-3">
                        <h6 class="text-dark fw-bold text-start">Q. How does the site work? </h6>
                        <p class="text-dark mt-3 text-start"> You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on Place order. You let us know your address, select a delivery time – and voila, you are done.  A representative will then deliver your order right to your home or office. </p>
                    </div>

                    <div class="my-2 rounded px-custom py-3">
                        <h6 class="text-dark fw-bold text-start">Q. How does the site work? </h6>
                        <p class="text-dark mt-3 text-start"> You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on Place order. You let us know your address, select a delivery time – and voila, you are done.  A representative will then deliver your order right to your home or office. </p>
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
        about:null,
        faq:null,
        value:1,
        }
    },

methods: {

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

.main {
    height: 200px;
    padding: 200px 0;
    background-image: url("/assets/bg/faq.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.px-custom{
    padding-left: 20px !important;
    padding-right: 20px !important;
}
</style>