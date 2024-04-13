<template>
    <div>

        <div class="container-fluid m-0 p-0">

            <div class="row">
                <div class="col-12"><navmenu></navmenu></div>
            </div>
            
            

            <div class="row m-0 p-0 bg-light-cus">

                <div class="mr-x" :class="this.$store.state.left ? 'left-custom' : 'no-left-cart' " >
                
                    <router-view></router-view>

                </div>
               
                <!-- <div class="mx-auto">
                    <sidebarRight></sidebarRight>
                </div> -->
            
            </div>

            <ModalDetails></ModalDetails>
        </div>

        

    </div>


    
</template>

<script>

    import navmenu from "./pages/nav.vue"
    import ModalDetails from "./pages/modal/modalDetails.vue"

    //import sidebarRight from "./pages/sidebar/sidebarRight.vue"

    export default {
        name: "mainapp",
        components: {
            navmenu,
            ModalDetails,
        },


        data() {
            return {
                menu: this.$store.state.left,
                isLoading: true,

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
        width: 100vw !important;
        margin: 0px !important;
        padding: 0px;
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
    background: #e7e7e7;
}

.mr-x{
    margin:  0px;
    transition: all .3s ease-in-out;
    padding: 0px;
    overflow: hidden;
}

/* .no-left-cart{
    width: calc(100vw - 200px);
} */
.no-left-cart{
    width: 100vw !important;
}

.left-custom{
    width: calc(100vw - 250px);
    margin-left: 250px;
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

/* Loader CSS */
/* HTML: <div class="loader"></div> */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.842);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  width: 65px;
  height: 117px;
  position: fixed;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  background: #ff8001;    
  box-shadow: 0 0 0 50px;
  clip-path: polygon(100% 0, 23% 46%, 46% 44%, 15% 69%, 38% 67%, 0 100%, 76% 57%, 53% 58%, 88% 33%, 60% 37%);;
}
.loader:after {
  animation: l8 1s infinite;
  transform: perspective(300px) translateZ(0px)
}
@keyframes l8 {
  to {transform:perspective(300px) translateZ(180px);opacity:0}
}


/* back-to-shop */
.back-to-shop{
    position: fixed;
    top: 40%;
    left: 0;
}

.back-to-shop-img{
    width: 150px;
    transition: all .5s ease;
}
.back-to-shop-img:hover{
    padding: 2px;
}
</style>
