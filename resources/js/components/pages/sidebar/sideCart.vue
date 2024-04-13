<template>
    <div>
        
        <Drawer 
            v-model="this.$store.state.RightCartSlide"
            width="300"
            scrollable
            :closable="false"
            :mask="false"
            :styles="styles"
        >

            <div class="drawer-header my-4 borderX">
                <h5 class="col-12 py-3 text-center fw-bold fs-3 text-white">Cart Item</h5>
            </div>


            <div v-if="item1" class="d-flex flex-row aling-items-center py-2 px-3 mb-2 bg-light border justify-content-center">

                <div class="my-auto justify-content-start" style="width:10%">
                    <b-icon-plus @click="count++" class="text-dark count-plus" width="15" height="15"></b-icon-plus>
                    <p class="ml-1">{{count}}</p>
                    <b-icon-dash @click="count++" class="text-dark count-minus" width="15" height="15"></b-icon-dash>
                </div>


                <div class="my-auto text-center" style="width:15%">
                    <img src="assets/product/p2.png" height="40" width="40" class="border" alt="Logo not found">
                </div>


                <div class="my-auto text-center" style="width:50%">
                    <span class="text-gray">Cake</span>
                </div>


                <div class="my-auto text-center" style="width:20%">
                    <span class="text-dark">$32</span>
                </div>


                <div class="my-auto justify-content-end" style="width:5%">
                    <b-icon-x @click="item1=false" class="text-danger border rounded btn-hover" width="20" height="20"></b-icon-x>
                </div>

            </div>

            <div v-if="item2" class="d-flex flex-row aling-items-center py-2 px-3 mb-2 bg-light border justify-content-center">

                <div class="my-auto justify-content-start" style="width:10%">
                    <b-icon-plus @click="count++" class="text-dark count-plus" width="15" height="15"></b-icon-plus>
                    <p class="ml-1">{{count}}</p>
                    <b-icon-dash @click="count++" class="text-dark count-minus" width="15" height="15"></b-icon-dash>
                </div>


                <div class="my-auto text-center" style="width:15%">
                    <img src="assets/product/p3.png" height="40" width="40" class="border" alt="Logo not found">
                </div>


                <div class="my-auto text-center" style="width:50%">
                    <span class="text-gray">Mobile</span>
                </div>


                <div class="my-auto text-center" style="width:20%">
                    <span class="text-dark">$32</span>
                </div>


                <div class="my-auto justify-content-end" style="width:5%">
                    <b-icon-x @click="item2=false" class="text-danger border rounded btn-hover" width="20" height="20"></b-icon-x>
                </div>

            </div>

            <div v-if="item3" class="d-flex flex-row aling-items-center py-2 px-3 mb-2 bg-light border justify-content-center">

                <div class="my-auto justify-content-start" style="width:10%">
                    <b-icon-plus @click="count++" class="text-dark count-plus" width="15" height="15"></b-icon-plus>
                    <p class="ml-1">{{count}}</p>
                    <b-icon-dash @click="count++" class="text-dark count-minus" width="15" height="15"></b-icon-dash>
                </div>


                <div class="my-auto text-center" style="width:15%">
                    <img src="assets/product/p4.png" height="40" width="40" class="border" alt="Logo not found">
                </div>


                <div class="my-auto text-center" style="width:50%">
                    <span class="text-gray">T-Shirt</span>
                </div>


                <div class="my-auto text-center" style="width:20%">
                    <span class="text-dark">$32</span>
                </div>


                <div class="my-auto justify-content-end" style="width:5%">
                    <b-icon-x @click="item3=false" class="text-danger border rounded btn-hover" width="20" height="20"></b-icon-x>
                </div>

            </div>

            <div v-if="item4" class="d-flex flex-row aling-items-center py-2 px-3 mb-2 bg-light border justify-content-center">

                <div class="my-auto justify-content-start" style="width:10%">
                    <b-icon-plus @click="count++" class="text-dark count-plus" width="15" height="15"></b-icon-plus>
                    <p class="ml-1">{{count}}</p>
                    <b-icon-dash @click="count++" class="text-dark count-minus" width="15" height="15"></b-icon-dash>
                </div>


                <div class="my-auto text-center" style="width:15%">
                    <img src="assets/product/p7.png" height="40" width="40" class="border" alt="Logo not found">
                </div>


                <div class="my-auto text-center" style="width:50%">
                    <span class="text-gray">New Lamp got change after one</span>
                </div>


                <div class="my-auto text-center" style="width:20%">
                    <span class="text-dark">$32</span>
                </div>


                <div class="my-auto justify-content-end" style="width:5%">
                    <b-icon-x @click="item4=false" class="text-danger border rounded btn-hover" width="20" height="20"></b-icon-x>
                </div>

            </div>

            <hr class="mt-5">
            <div class="py-2 d-flex justify-content-end">
                <h6 class="text-right fs-6 fw-600"> <kbd>Total Amount:</kbd> <span class="text-danger fw-600">$120/=</span></h6>
            </div>

            <div class="drawer-icon" @click="sideCartClose">
                <b-icon-x-square @click="RightCartSlide = false" class="text-danger" width="20" height="20"></b-icon-x-square>
            </div>

            <div class="drawer-footer my-auto">
                <router-link class="text-white" to="/order-details">
                    <button class="btn btn-success main-color col-12 mx-auto text-center fw-bold fs-5" @click="sideCart">
                        <b-icon-cart-check-fill class="text-warning d-inline mr-2" width="25" height="25" ></b-icon-cart-check-fill>
                        Place Order
                    </button>
                </router-link>
            </div>

        </Drawer>

    </div>
</template>

<script>
    //import { mapMutations,mapState } from "vuex";
    export default {
        data () {
            return {
                RightCartSlide: false,
                cartIcon: true,
                count: 0,
                item1: true,
                item2: true,
                item3: true,
                item4: true,

                styles: {
                    height: '100vh',
                    overflowY: 'scroll',
                    position: 'static',
                    background: 'rgba(255, 255, 255, 0.89)',
                    margin: '50px 0px 0px 7px',
                    padding: '0',
                    
                },
            }
        },

        methods: {
            sideCartClose(){
                this.$store.dispatch("closeSideCart", this.RightCartSlideClose)
            },

            sideCart(){
                this.$store.dispatch("closeSideCart", this.RightCartSlideClose)
            }
        },

        computed: {
            //...mapState(['RightCartSlide']),
        }
    }
</script>

<style scoped>

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */

.btn-hover:hover{
    border: .5px solid red !important;
    cursor: pointer;
}

.count-plus:hover{
    border: .5px solid rgb(21, 186, 3) !important;
    cursor: pointer;
}

.count-minus:hover{
    border: .5px solid rgb(186, 43, 3) !important;
    cursor: pointer;
}

.borderX {
    /* border-left: 10px solid rgba(57, 226, 0, 0.671);
    border-right: 10px solid rgba(57, 226, 0, 0.671); */
    background: #047166;
}
.ivu-icon-ios-close {
    color: red !important;
}

.drawer-footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
}

.drawer-icon{
    display: flex;
    overflow: hidden;
    position: absolute;
    border-left: 4px solid rgba(0, 109, 51, 0.671);
    border-radius: 5px 0 0 5px;
    top: 50%;
    left: -37px;
    z-index: 100;
    padding: 10px 10px;
    text-align: center !important;
    background: rgb(255, 255, 255) !important;
}

</style>
