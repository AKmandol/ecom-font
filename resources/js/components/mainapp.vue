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

/* HTML: <div class="loader"></div> */
.loader {
  width: 40px;
  height: 40px;
  position: relative;
  --c:no-repeat linear-gradient(#25b09b 0 0);
  background:
    var(--c) center/100% 10px,
    var(--c) center/10px 100%;
}
.loader:before {
  content:'';
  position: absolute;
  inset: 0;
  background:
    var(--c) 0    0,
    var(--c) 100% 0,
    var(--c) 0    100%,
    var(--c) 100% 100%;
  background-size: 15.5px 15.5px;
  animation: l16 1.5s infinite cubic-bezier(0.3,1,0,1);
}
@keyframes l16 {
   33%  {inset:-10px;transform: rotate(0deg)}
   66%  {inset:-10px;transform: rotate(90deg)}
   100% {inset:0    ;transform: rotate(90deg)}
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


.ivu-tooltip-inner{
    max-width: 400px !important;
}

.card-btn {
  color: #fff;
  background: #045850;
  border: 0.5px solid rgb(0 0 0);
  margin-left: 2px;
  padding: 0;
  height: 40px;
  width: 187px;
}

.card-btn:hover {
  color: rgb(255, 255, 255);
  background: #cf5b02;
  border: .5px solid #ff8a30;
}

</style>
