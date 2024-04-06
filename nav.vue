<template>
    <div class="stickyTop">
        <nav class="text-dark navbar-expand-lg bg-light shadow-sm">
            <div class="container-fluid">

                <button class="navbar-toggler d-md-block d-lg-none py-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <b-icon-list class="text-dark text-center" width="40" height="40"></b-icon-list>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <div class="nav-item col-lg-2 d-lg-block d-md-none col-sm-12 d-flex justify-content-center align-items-center">
                        <router-link class="nav-link" to="/">
                            <img src="assets/logo.png" height="40" width="170" alt="Logo not found">
                        </router-link>
                    </div>
                    
                    <div class="nav-item col-lg-1 col-md-12 d-flex  align-items-center justify-content-between m-0 p-0">
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>  
                        <router-link :to="{name: '/home'}" class="text-dark fw-blod text-uppercase d-inline-flex nav-link">
                            <b-icon-house-door width="22" height="22" animation="fade" ></b-icon-house-door>
                        </router-link>
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>
                    </div>

                    <div class="nav-item col-lg-1 col-md-12 d-flex  align-items-center justify-content-between m-0 p-0">
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>
                        <router-link :to="{name: '/shop'}" class="text-dark fw-blod text-uppercase nav-link">
                            <b-icon-bag-plus width="22" height="22" animation="fade" ></b-icon-bag-plus>
                        </router-link>
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>
                    </div>     

                    <div class="nav-item col-lg-4 col-md-12 d-flex align-items-center justify-content-center m-0 px-3">
                        <form role="search" class="col-lg-12 col-md-6 mx-auto mb-md-2 mb-sm-2">
                        <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
                        </form>
                    </div>

                    <div class="nav-item col-lg-1 col-md-12 d-flex  align-items-center justify-content-between justify-content-md-evenly justify-content-md-evenly m-0 p-0">
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>

                        <a>বাংলা</a>
                        <div class="d-grid align-items-center justify-content-center">
                            <div class="vr m-0 p-0 mx-auto" ></div>
                            <div class="text-center"><small>or</small></div>
                            <div class="vr m-0 p-0 mx-auto"></div>
                        </div>
                        <a>ENG</a>

                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>
                    </div>

                    <div class="nav-item col-lg-1 col-md-12 d-flex  align-items-center justify-content-between m-0 p-0">
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>
                        
                        <cart></cart>
                            
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>
                    </div>

                    <div class="nav-item col-lg-1 col-md-12 d-flex  align-items-center justify-content-between m-0 p-0">
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>  
                        <router-link :to="{name: '/location'}" class="text-dark fw-blod text-uppercase d-inline-flex nav-link">
                            <b-icon-geo-alt width="22" height="22" animation="fade" ></b-icon-geo-alt>
                        </router-link>
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>
                    </div>
                    
                    <div class="nav-item col-lg-1 col-md-12 d-flex align-items-center justify-content-between m-0 p-0">
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>
                        <UserLogin></UserLogin>
                        <div class="vr m-0 p-0" style="min-height: 52px;"></div>
                    </div>
                    
                    
                </div>

            </div>
        </nav>
    </div>

    
</template>

<script>
import cart from './sideCart.vue';
import  UserLogin from './modal/loginModal.vue';

export default {
    name: "navmenu",

    components: {
    cart,
    UserLogin,
    },

    data() {
        return {
            
        }
    },

    mounted() {
        
    }
}


</script>
<style scoped>
.ivu-drawer-content {
    top: 50px !important;
}
.demo-drawer-footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
}

nav {
    z-index: 900;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
} 
.router-link-active {
    color: rgb(1, 151, 58) !important; 
}
</style>