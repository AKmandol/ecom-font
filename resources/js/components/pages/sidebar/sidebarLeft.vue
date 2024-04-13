<template>
    <div>
        <div class="row mx-0 px-0 sidebarLeft2" @click="toggleLeftBar" :style="menuItem">
            <div class="d-flex mx-0 px-0 align-items-center rounded-0 borderRight">
                <b-icon-arrow-right-square-fill class="mx-auto arrow" width="25" height="25"></b-icon-arrow-right-square-fill>  
            </div>
        </div>

        <Transition name="slideFadeLeft">
            <div class="row mx-0 px-0 d-grid gap-2 sidebarLeft border rounded" v-if="this.$store.state.left">

                <div class="card rounded-0 mx-0 px-0 col-12 d-flex flex-column border-0" style="height:fit-content;">

                    <div class="d-flex mx-0 px-0 justify-content-between align-items-center rounded-0 card-header bg-cus borderRight" :style="menuItem">
                        <div class="ml-2 fs-5"><b>Category Menu</b></div>
                        <b-icon-arrow-left-square-fill @click="toggleLeftBar" class="text-dark closspe-arrow" width="25" height="25" animation="fade" ></b-icon-arrow-left-square-fill>  
                    </div>

                    <div class="card-body m-0 p-0">
                    
                        <Menu accordion active-name="2-3" :open-names="['2']" class="man-height w-100">

                            <Submenu name="0" :style="menuItem">
                                <template :style="menuTitle" #title>
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

                            <Submenu name="1" :style="menuItem">
                                <template :style="menuTitle" #title>
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
                            
                            <Submenu name="4" :style="menuItem">
                                <template :style="menuTitle" #title>
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

                            <Submenu name="2" :style="menuItem">
                                <template :style="menuTitle" #title>
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

                            <Submenu name="3" :style="menuItem">
                                <template :style="menuTitle" #title>
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

                    </div>

                </div>

                <div class="py-2 d-flex com">
                            
                    <div class="col-6 d-flex align-items-center justify-content-center border-end">
                        <router-link to="/faq" class="text-dark"><b-icon-question-lg class="text-warning p-1 d-inline" width="27" height="27"></b-icon-question-lg>About Us</router-link>       
                    </div>
                    <div class="col-6 d-flex align-items-center justify-content-center border-start">
                        <a  @click="this.$store.state.complaintModal = true" class="text-dark"><b-icon-chat-fill class="text-danger p-1 d-inline" width="27" height="27"></b-icon-chat-fill>Complaint</a> 
                    </div>

                </div>


            </div>
        </Transition>

        <!-- Complaint modal -->
        <ComplaintModal></ComplaintModal>

    </div>
</template>

<script>
    import ComplaintModal from './../modal/comlaint.vue';
    export default {

        components: {
        ComplaintModal
        },

        data(){
            return {
                left: true,
                complaint_modal_loading: false,

                menuItem: {
                    color: '#000',
                    background:'#fff',
                    margin: '3px 0'
                },

                menuTitle: {
                    color: '#000',
                },
            }
        },

        methods:{

            toggleLeftBar() {
                this.$store.dispatch("toggleLeft", this.left)
            },

            compalint(){
                this.complaint_modal_loading = true;
                setTimeout(() => {
                    this.successMsg('Compalin registered');
                    this.complaintModal = false;
                }, 400);

            },

            handleScroll() {
                // Calculate scroll position
                const scrollPosition = window.scrollY || window.pageYOffset;
                // Define the threshold where you want to change the background
                const threshold = 100;
                // Update the header background based on the scroll position
                if(scrollPosition > threshold){
                    this.menuItem.background = '#047166'; // Change to desired background color/image
                    this.menuItem.color = '#fff'; // Change to desired background color/image
                    this.menuTitle.color = '#fff'; // Change to desired background color/image
                }else{ 
                    this.menuItem.background = '#fff';
                    this.menuItem.color = '#000';
                    this.menuTitle.color = '#fff';
                }
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

<style>
    /* transtion */ 
    .slideFadeLeft-enter-from {
        opacity: 0;
        transform: translateX(-250px);
    }
    .slideFadeLeft-enter-to {
        opacity: 1;
        transform: translateX(0);
    }
    .slideFadeLeft-enter-active {
        transition: all .5s ease;
    }

    .slideFadeLeft-leave-from {
        opacity: 1;
        transform: translateX(0);
    }
    .slideFadeLeft-leave-to {
        opacity: 0;
        transform: translateX(-250px);
    }
    .slideFadeLeft-leave-active {
        transition: all .5s ease;
    }


    .bg-cus{
        background: rgb(4,113,102);
    }
    
    .borderRight {
        border-right: 0 !important;
        border-left: 0 !important;
        border-top: 0 !important;
    }   

    .sidebarLeft2 {
        padding: 5px;
        width: 60px;
        overflow: hidden;
        position: fixed;
        top: 73px;
        left: 0;
        z-index: 800;
        border-bottom-right-radius: 5px;
        transition: all .2s ease-in-out;
        border-right: 1px solid #bbbbbb;
        border-bottom: 1px solid #bbbbbb;
    }

    .sidebarLeft2:hover {
        cursor: pointer;
        padding: 6px;
    }

    .sidebarLeft2:hover .arrow {
        padding: 1px;
        margin-right: 0 !important;
    }

    .closspe-arrow:hover {
        padding: 1px;
    }

    .sidebarLeft {
        background: #fff;
        min-width: 250px;
        overflow: hidden;
        position: fixed;
        top: 73px;
        left:0;
        z-index: 900;
        border-right: .5px solid rgb(212, 212, 212);
        height: 100vh;
        overflow: scroll;
        /* transition: all 1s all ease-in-out; */
    }

    .com {
        height: max-content;
        position: absolute;
        bottom: 70px;
        left: 0;
        right: 0;
    }

    .man-height{
        max-height: 450px;
        overflow-y: scroll;
        padding-bottom: 40px;
    }

    /* .submenu {
        background: #53918a;
        padding: 0 !important;
        margin: 3px 0;
        color: black;
    } */

    .ivu-menu{
        background: #ffffff;
        overflow: scroll
    }

    .ivu-menu-submenu ul{
        background: #E7E7E7;
    }

    .bg-card{
        background: rgb(214, 214, 214);
    }

    .ivu-menu-vertical .ivu-menu-submenu-title {
        padding: 5px 0px !important;
    }

    .ivu-menu-vertical.ivu-menu-light:after {
        display: none;
    }
    .ivu-menu-item-active .ivu-menu-item-selected{
        color: #000 !important;
        background: rgba(15, 182, 24, 0.137) !important;
    }

    .ivu-menu-submenu-title::before {
        background: red !important;
    }

</style>