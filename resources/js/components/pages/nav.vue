<template>
    <div>
    
        <nav class="navbar navbar-expand-lg header-main" :style="headerStyles">
            <div class="container">
               
                <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="offcanvas offcanvas-start sidebar" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                
                    <div class="offcanvas-header justify-content-between border-bottom">
                        
                        <img :src="headerStyles.img" height="50" class="m-0 p-0 d-lg-none  " alt="Logo not found">
                        <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                    </div>

                    <div class="offcanvas-body d-flex justify-content-center align-items-center d-none d-lg-block">

                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">

                            <!-- <div class="nav-item col-lg-1 col-sm-12 d-flex justify-content-center p-sm-2 p-2 p-lg-0 align-items-center">

                                <button :style="headerStylesBtn" @click="toggleLeftBar" data-bs-dismiss="offcanvas" aria-label="Close"> <b-icon-list class="nav-nemu-cart" width="27" height="27" :style="headerStylesBtn" ></b-icon-list> </button>

                            </div> -->

                            <div class="nav-item col-lg-3 col-sm-12 d-flex justify-content-center p-2 p-lg-0 align-items-center m-0">
                                <router-link class="nav-link" to="/">
                                    <img :src="headerStyles.img" height="50" class="m-0 p-0" alt="Logo not found">
                                </router-link>
                            </div>

                            <div class="nav-item col-lg-6 col-md-12 d-flex align-items-center justify-content-md-start justify-content-lg-center p-2 p-lg-0">
                                <form role="search" class="col-12 mx-auto">
                                    <input type="search" class="form-control" placeholder="Search for Product ..." aria-label="Search">
                                </form>
                            </div>


                            <div class="nav-item col-lg-1 col-md-12 d-flex  align-items-center justify-content-center p-2 p-lg-0 m-0">
                                
                                <a class="text-dark fw-blod text-uppercase position-relative nav-link" @click="toggleCart">
                                    <b-icon-cart-plus width="22" height="22" class="mr-2 nav-cart" :style="headerStyles"></b-icon-cart-plus>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"> {{count}} <span class="visually-hidden">unread messages</span></span> 
                                </a>
                                <cart> </cart>

                            </div>


                            <div class="nav-item col-lg-1 col-md-12 d-flex align-items-center justify-content-center justify-content-lg-end p-2 p-lg-0 m-0">
                                <a class="p-0" href="/user-login">
                                    <img src="img/man.webp"  class="text-dark border p-1 rounded-circle text-dark bg-seconary" width="35" height="35" />
                                </a>
                            </div>
                            <!-- <div class="nav-item col-lg-1 col-md-12 d-flex align-items-center justify-content-center justify-content-lg-end p-2 p-lg-0 m-0">
                                <router-link class="bg-success rounded-circle p-1" to="/user-login"><b-icon-person width="22" height="22" class="mr-2 nav-cart" :style="headerStyles"></b-icon-person></router-link>
                            </div> -->

                            <!-- <div class="nav-item col-lg-1 col-sm-12 d-flex justify-content-center justify-content-lg-end p-2 p-lg-0 align-items-center">

                                <button @click="toggleRightBar" :style="headerStylesBtn"> <b-icon-sort-up class="nav-nemu-cart" width="27" height="27" :style="headerStylesBtn" ></b-icon-sort-up> </button>

                            </div> -->

                        </ul>


                    </div>

                    <div class="offcanvas-body d-lg-none d-sm-block m-0 p-0">

                        <ul class="navbar-nav justify-content-center flex-grow-1">


                            <Menu accordion active-name="2-3" :open-names="['2']" class="menu-main">

                                <Submenu class="submenu" name="0">
                                    <template class="menu-submenu-title" #title>
                                        <img src="assets/product/p2.png" height="30" width="30" class="rounded mr-2" alt="Logo not found">
                                        Phone
                                    </template>
                                    <MenuItem class="py-1 my-0" name="1-1">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p7.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            Apple
                                        </router-link>
                                    </MenuItem>
                                    <MenuItem class="py-1 my-0" name="1-2">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p8.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            One Plus
                                        </router-link>    
                                    </MenuItem>
                                </Submenu>

                                <Submenu class="submenu" name="1">
                                    <template class="menu-submenu-title" #title>
                                        <img src="assets/product/p9.png" height="30" width="30" class="rounded mr-2" alt="Logo not found">
                                        Food
                                    </template>
                                    <MenuItem class="py-1 my-0" name="1-1">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p1.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            Cake
                                        </router-link>
                                    </MenuItem>
                                    <MenuItem class="py-1 my-0" name="1-2">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p2.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            Chips
                                        </router-link>    
                                    </MenuItem>
                                    <MenuItem class="py-1 my-0" name="1-3">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p3.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            Drinks
                                        </router-link>
                                    </MenuItem>
                                </Submenu>

                                <Submenu class="submenu" name="4">
                                    <template class="menu-submenu-title" #title>
                                        <img src="assets/product/p3.png" height="30" width="30" class="rounded mr-2" alt="Logo not found">
                                        Watch
                                    </template>
                                    <MenuItem class="py-1 my-0" name="4-1">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p6.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            Analoge
                                        </router-link>  
                                    </MenuItem>
                                    <MenuItem class="py-1 my-0" name="4-2">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p4.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            Smart
                                        </router-link>  
                                    </MenuItem>
                                </Submenu>

                                <Submenu class="submenu" name="2">
                                    <template class="menu-submenu-title" #title>
                                        <img src="assets/product/p4.png" height="30" width="30" class="rounded mr-2" alt="Logo not found">
                                        Beauty
                                    </template>
                                    <MenuItem class="py-1 my-0" name="2-1">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p8.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            Face
                                        </router-link>
                                    </MenuItem>
                                    <MenuItem class="py-1 my-0" name="2-2">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p7.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            Body
                                        </router-link>
                                    </MenuItem>
                                    <MenuItem class="py-1 my-0" name="2-3">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p5.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            Hair
                                        </router-link>
                                    </MenuItem>
                                    <MenuItem class="py-1 my-0" name="2-4">
                                        <router-link :to="{name: '/shop'}" class="text-dark">
                                            <img src="assets/product/p9.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                            Skin
                                        </router-link>
                                    </MenuItem>
                                </Submenu>

                                <Submenu class="submenu" name="3">
                                    <template class="menu-submenu-title" #title>
                                        <img src="assets/product/p5.png" height="30" width="30" class="rounded mr-2" alt="Logo not found">
                                        Dress
                                    </template>
                                    <MenuGroup title="Men">
                                        <MenuItem class="py-1 my-0" name="3-1">
                                            <router-link :to="{name: '/shop'}" class="text-dark">
                                                <img src="assets/product/p6.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                                Pant
                                        </router-link>
                                        </MenuItem>
                                        <MenuItem class="py-1 my-0" name="3-2">
                                            <router-link :to="{name: '/shop'}" class="text-dark">
                                                <img src="assets/product/p7.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                                Shirt
                                        </router-link>
                                        </MenuItem>
                                        <MenuItem class="py-1 my-0" name="3-3">
                                            <router-link :to="{name: '/shop'}" class="text-dark">
                                                <img src="assets/product/p8.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                                T-shirt
                                        </router-link>
                                        </MenuItem>
                                    </MenuGroup>
                                    <MenuGroup title="Women">
                                        <MenuItem class="py-1 my-0" name="3-4">
                                            <router-link :to="{name: '/shop'}" class="text-dark">
                                                <img src="assets/product/p9.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                                Sari
                                        </router-link>
                                        </MenuItem>
                                        <MenuItem class="py-1 my-0" name="3-5">
                                            <router-link :to="{name: '/shop'}" class="text-dark">
                                                <img src="assets/product/p10.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                                T-shirt
                                        </router-link>
                                        </MenuItem>
                                        <MenuItem class="py-1 my-0" name="3-6">
                                            <router-link :to="{name: '/shop'}" class="text-dark">
                                                <img src="assets/product/p1.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                                Pant
                                        </router-link>
                                        </MenuItem>
                                        <MenuItem class="py-1 my-0" name="3-7">
                                            <router-link :to="{name: '/shop'}" class="text-dark">
                                                <img src="assets/product/p3.png" height="25" width="25" class="rounded mr-2" alt="Logo not found">
                                                Sun Glass
                                        </router-link>
                                        </MenuItem>
                                    </MenuGroup>
                                </Submenu>

                            </Menu>

                        </ul>


                    </div>

                </div>
            </div>
        </nav>

        <a class="cart" @click="toggleCart">
            <div class="item d-flex justify-content-center flex-column">
                <b-icon-basket2 class="text mx-auto text-warning" width="25" height="25"></b-icon-basket2> 
                <p class="align-middle fw-bold text-white"> <small>10 item</small> </p>
            </div>
            <div class="d-flex justify-content-center flex-row py-1">
                <b-icon-currency-dollar class="text-warning" width="15" height="15"></b-icon-currency-dollar> 
                <h6 class="align-middle fw-bold text-light"> 200 </h6>
            </div>
        </a>

    </div>

    
</template>

<script>

 
import cart from './../pages/sidebar/sideCart.vue';

export default {
    name: "navmenu",

    components: {
    cart

    },

    data() {
        return {  
            count: 0,
            left: true,
            right: true,
            headerStyles: {
                color: '#000',
                background:'#fff',
                img: '/img/logo_dark.png',
            },
            
            headerStylesBtn: {
                color: '#000',
                borderRadius: '5px'
            },
            
        }
    },

    

    methods:{

        handleScroll() {
            // Calculate scroll position
            const scrollPosition = window.scrollY || window.pageYOffset;
            // Define the threshold where you want to change the background
            const threshold = 100;
            // Update the header background based on the scroll position
            if(scrollPosition > threshold){
                this.headerStyles.background = '#047166'; // Change to desired background color/image
                this.headerStyles.color = '#fff'; // Change to desired background color/image
                this.headerStyles.img = '/img/logo_white.png'; // Change to desired background color/image
                this.headerStylesBtn.color = '#fff'; // Change to desired background color/image
                this.headerStylesBtn.background = '#047166'; // Change to desired background color/image
            }else{ 
                this.headerStyles.background = '#fff';
                this.headerStyles.color = '#000';
                this.headerStyles.img = '/img/logo_dark.png';
                this.headerStylesBtn.color = '#000';
                this.headerStylesBtn.background = '#fff';
            }
        },

        toggleCart() {
            this.$store.dispatch("toggleSideCart", this.RightCartSlide)
        },

        toggleLeftBar() {
            this.$store.dispatch("toggleLeft", this.left)
        },

        toggleRightBar() {
            this.$store.dispatch("toggleRight", this.right)
        },


       
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },

    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },

}


</script>

<style scoped>

.menu-main{
    overflow-y: scroll;
    padding-bottom: 40px;
    background: transparent !important;
    width: 100% !important;
    position: static;
}

.submenu {
    background: rgba(196, 194, 194, 0.164);
    padding: 0 !important;
    margin: 3px 0;
    color: rgb(255, 255, 255);
    font-weight: 600;
}

.ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 5px 0px !important;
   
}

.ivu-menu .ivu-menu-item a{
    color: #000000 !important;
    font-weight: 500;
}


.nav-cart:hover {
    padding: 1px !important;
    background: #00000018 !important;
    border-radius: 5px !important;
}

.nav-nemu-cart:hover {
    padding: 2px !important;
    background: #00000018 !important;
    border-radius: 5px !important;
}

.cart{
    position: fixed;
    width: 80px;
    top: 40%;
    right: 0%;
    background: #3b3b3bbd;
    border-radius: 5px;
    z-index: 800;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.337), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item{
    background: #05635ab9;
    color: #013f39;
    border-radius: 5px;
    padding: 8px 18px;
    border-bottom: 1px solid #fff;
}

@media(max-width: 991px){
    .sidebar{
        background-color: #014b43;
        backdrop-filter: blur(2px);
    }
    .dropdown-item span{
        color: red;
    }
}

.header-main{
    padding: 5px 0;
    box-shadow: .5px .5px #03695f45;
    position: fixed;
    z-index: 10005;
}

.main-color{
    background: #047166;
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