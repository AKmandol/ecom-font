<template>
    <div>
        <div class="bg-footer container-fluid pt-3 w-100">
            <div class="container">
                <footer class="mx-auto">
                    <div class="row">

                        <div class="col-sm-12 col-lg-3 col-md-6 text-center py-3">
                            <h5 class="mb-4 text-white fw-bold font"><b>Company Overview</b></h5>

                            <div class="d-flex flex-column justify-content-center">
                                
                                <p class="mb-0 pb-0 text-light">
                                    <kbd class="fw-bold">Shop Today</kbd> was establish at 2003.
                                    Our motive was to make online market available in all
                                    over Bangladesh. We are the most <b>reliable</b> and <b>secure</b>
                                    E-commerce company in the country.
                                </p>
                                <div class="d-flex flex-row justify-content-center gap-3 mt-1">
                                    <b-icon-facebook width="24" height="24" class="header-icon text-primary"></b-icon-facebook>
                                    <b-icon-instagram width="24" height="24" class="header-icon text-danger"></b-icon-instagram>
                                    <b-icon-whatsapp width="24" height="24" class="header-icon text-success"></b-icon-whatsapp>
                                    <b-icon-twitter width="24" height="24" class="header-icon text-primary"></b-icon-twitter>
                                    <b-icon-youtube width="24" height="24" class="header-icon text-danger"></b-icon-youtube>
                                </div>
                            </div>
                            
                        </div>

                        <div class="col-sm-12 col-lg-3 col-md-6 text-center py-3">
                            <h5 class="mb-4 text-white fw-bold font"><b>Usefull Links</b></h5>
                            <ul class="nav d-grid gap-1">
                                <li class="nav-item mb-2"><router-link to="/contact" class="nav-link p-0 text-dark"> Contact Us </router-link></li>
                                <li class="nav-item mb-2"><router-link to="/about" class="nav-link p-0 text-dark"> About Us </router-link></li>
                                <li class="nav-item mb-2"><router-link to="/faq" class="nav-link p-0 text-dark"> Pricing </router-link></li>
                                <li class="nav-item mb-2"><router-link to="/" class="nav-link p-0 text-dark"> Coupon </router-link></li>
                            </ul>
                        </div>

                        <div class="col-sm-12 col-lg-3 col-md-6 text-center py-3">
                            <h5 class="mb-4 text-white fw-bold font"><b>Quick Links</b></h5>
                            <ul class="nav d-grid gap-1">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-dark"> Home </a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-dark"> Shop </a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-dark"> Offer Product </a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-dark"> New Product</a></li>
                            </ul>
                        </div>

                        <div class="col-sm-12 col-lg-3 col-md-6 text-center py-3 text-dark">
                            <h5 class="mb-4 text-white fw-bold font"><b>We accept</b></h5>
                            <p class="text-light"><b class="text-primary">Safe</b> and <b class="text-primary">Secure</b> Payment</p>
                            <div class="text-center">
                                <img src="assets/payments.png" class="img p-2 my-2" width="250" alt="Logo not found">
                            </div>
                        </div>

                        <div class="text-center text-white mt-3 py-3">
                            <p>&copy; 2024 Shop Today, Inc. All rights reserved.</p>
                        </div>

                    </div>
                </footer>
            </div>
        </div>

        <BackTop class="top" :bottom="100">
                <div class="back-to-top">
                    <b-icon-arrow-up-square width="30" height="30" class="header-icon text-secondary"></b-icon-arrow-up-square>
                </div>
        </BackTop>

        <div class="chat">
            <b-icon-messenger width="50" height="50" class="header-icon rounded-circle p-1 bg-white text-primary"></b-icon-messenger>
        </div>

    </div>
</template>

<script>
export default {
    name: "footerMenu",
}
</script>

<style scoped>

.font{
    font-family: 'Play', sans-serif !important;
    font-weight: 700 !important;
    font-size: 20px;
}
.bg-footer { 
    border-top: 1px solid #d8eaff;
    background: #022924;
    background-image: url("/assets/bg.png");
    background-position: center; /* Center the image */
    background-repeat: repeat; /* Do not repeat the image */
    padding: 0;
    margin: 0;
}

.nav-link{
    color: #d3d3d3 !important;
}

.chat {
    position: fixed;
    right: 20px;
    bottom: 80px;
    z-index: 90;
    cursor: pointer;
}

.top {
    z-index: 90;
    right: 20px !important;
    bottom: 20px !important;
}
.back-to-top {
    background:rgb(255, 255, 255);
    border-radius: 5px;
}

.header-icon:hover {
    cursor: pointer;
}
</style>