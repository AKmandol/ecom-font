<template>
    <div>

        <div class="container-fluid m-0 p-0">

            <div class="row">
                <div class="col-12"><navmenu></navmenu></div>
            </div>
            
            

            <div class="row m-0 p-0 bg-white">

                <div class="mx-auto d-none d-lg-block m-0 p-0">
                    <sidebarLeft></sidebarLeft>
                </div>

                <div class="mr-x" :class="this.$store.state.left ? 'left-custom' : 'no-left-cart' " >
                
                    <router-view></router-view>
                   
                </div>
               
                <!-- <div class="mx-auto">
                    <sidebarRight></sidebarRight>
                </div> -->
            
            </div>
            
            <div class="row m-0 p-0">
                <div class="col-12 m-0 p-0"><footerMenu></footerMenu></div>
            </div>

            <ModalDetails></ModalDetails>
        </div>

        

    </div>


    
</template>

<script>

    import navmenu from "./pages/nav.vue"
    import footerMenu from "./pages/footer.vue"
    import ModalDetails from "./pages/modal/modalDetails.vue"

    import sidebarLeft from "./pages/sidebar/sidebarLeft.vue"
    //import sidebarRight from "./pages/sidebar/sidebarRight.vue"

    export default {
        name: "mainapp",
        components: {
            navmenu,
            footerMenu,
            ModalDetails,
            sidebarLeft,
           
        },


        data() {
            return {
                menu: this.$store.state.left,

                mainContent:{
                     
                }
            }
        },

        methods: {
            windowResize(){
                if(this.$store.state.left){
                    this.mainContent.width = '80%';  
                }else{ 
                    this.mainContent.width = '100'
                }
            }
        },

        mounted() {
            //window.addEventListener('resize', this.windowResize);
        },
        created(){
            this.windowResize();
            // console.log('dadadad');
            // console.log(this.$route.name);
        }
    }
</script>

<style>

@media(max-width: 991px){
    .left-custom{
        width: calc(100vw - 10px) !important;
        margin-left: 0px !important;
        margin-right: 0;
        padding: 0;
    }
}

.rounded-left{
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}

.rounded-right{
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
.main-color {
    background: #047166;
}

.text-color {
    color: #047166;
}

.bg-light-cus {
    background: #D6D6D6;
}

.mr-x{
    margin-left:  0;
    margin-right:  0;
    transition: all .3s ease-in-out;
    padding: 0;
}

/* .no-left-cart{
    width: calc(100vw - 200px);
} */
.no-left-cart{
    width: 100vw !important;
}

.left-custom{
    width: calc(100vw - 400px);
    margin-left: 300px;
    padding: 0;
}


/* Scrool Bar */
::-webkit-scrollbar {
  width: 5px;
  height: 80%;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(198, 17, 17, 0.703); 
  display: none;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #9c8200; 
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a4ad00b0; 
}

/* iView notice Position */
.ivu-notice {
    margin-top: 52px !important;
    z-index: 999999 !important;
    left: 40%;
}

.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 2px 12px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all .2s ease-in-out;
}

.ivu-input-number-input{
    text-align: center;
}

</style>
