<template>
    <div>
  
        <div v-if="isLoading" class="preloader">
            <div class="loader"></div>
        </div>

        <div class="container mt-90 mb-3 px-0">

            <div class="p-3 row bg-light rounded mt-3 py-3 mx-auto shadow">
                    
                <a @click="$router.go(-1)" class="col-md-4 col-sm-12 text-center text-dark text-md-start py-1 my-auto"><b-icon-arrow-bar-left class="d-inline text-primary me-2 my-auto" width="13" height="13"></b-icon-arrow-bar-left>Back to Shopping</a>
                <h5 class="text-center text-dark fw-bold col-md-4 col-sm-12 text-center text-md-center py-1 my-auto"><b-icon-basket class="d-inline text-warning me-2 my-auto" width="18" height="18"></b-icon-basket>Cart Items</h5>
                <a href="" class="col-md-4 col-sm-12 text-center text-dark text-md-end py-1 my-auto"><b-icon-trash class="d-inline text-danger me-2 my-auto" width="13" height="13"></b-icon-trash>Delete All</a>

                <div class="row p-3">

                    <div class="col-md-8">
                        <div class="row rounded bg-white p-2">

                            <div class="col-lg-1 col-md-4 col-sm-12 my-auto text-center text-md-start bg-light rounded">
                                <b-icon-trash class="d-inline text-danger me-2 my-2" width="18" height="18"></b-icon-trash>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-12 my-auto text-center bg-light rounded">
                                <img src="assets/product/p1.png" alt="" height="70px">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 my-auto bg-light rounded">
                                <h6 class="text-dark text-center">10PCS Transparent Stainless Steel Strong Self Adhesive Hooks Key Storage Hanger Yao Store</h6>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-12 my-auto">
                                <div class="d-grid">
                                    <h6 class="text-danger text-center">৳ 150</h6>
                                    <p class="text-dark text-center"> <del>৳ 251</del></p>
                                    <p class="text-dark text-center">- 20%</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-8 col-sm-12 my-auto hidden">
                                <div class="d-grid">
                                    <a>
                                        <div class="d-flex my-1 col">
                                            <p class="text-dark justify-content-start fw-bold me-2"> Qty: </p> 
                                            <b-icon-dash-circle class="btn2-hover text-dark mx-2 my-auto d-inline" @click="itemMinus" width="15" height="15"></b-icon-dash-circle>
                                            <p class="text-dark mx-auto ml-2 rounded px-4 shadow-sm"> {{item}} </p> 
                                            <b-icon-plus-circle class="btn2-hover text-success mx-2 my-auto d-inline" @click="itemPlus" width="15" height="15"></b-icon-plus-circle>
                                        </div>
                                    </a>
                                    <a>
                                        <select class="form-select form-select-sm my-1 col">
                                            <option selected>Choose Size</option>
                                            <option value="1">M</option>
                                            <option value="2">L</option>
                                            <option value="3">XL</option>
                                            <option value="4">XXL</option>
                                        </select>
                                    </a>
                                    <a>
                                        <select class="form-select form-select-sm my-1 col">
                                            <option selected>Choose Color</option>
                                            <option value="1">Red</option>
                                            <option value="2">Black</option>
                                            <option value="3">White</option>
                                            <option value="4">Green</option>
                                        </select>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-md-4 mt-3 mt-md-0">
                        <div class="row bg-white rounded mb-3 ms-md-auto p-2">

                            <h6 class="text-start text-dark fw-bold mb-2">Order Summary</h6>

                            <div class="d-flex justify-content-between py-1">
                                <p class="text-secondary">Subtotal (3 items)</p>
                                <p class="text-dark">৳ 3,784</p>
                            </div>

                            <div class="d-flex justify-content-between py-1">
                                <p class="text-secondary">Shipping Fee</p>
                                <p class="text-dark">৳ 207</p>
                            </div>

                            <div class="d-flex justify-content-between py-1">
                                <p class="text-secondary">Discount</p>
                                <p class="text-dark">-৳ 138</p>
                            </div>

                            <div class="input-group py-2">
                                <input type="text" class="form-control form-control-sm" placeholder="Enter Cuppon Code">
                                <button class="btn btn-sm btn-warning fw-bold">Apply</button>
                            </div>

                            <div class="d-flex justify-content-between py-1">
                                <h5 class="text-dark fw-bold">Total</h5>
                                <h5 class="text-danger fw-bold">৳ 138</h5>
                            </div>

                            <router-link to="shipping" class="col btn btn-success fw-bold py-2 mt-3">PROCEED CHECKOUT</router-link>

                        </div>
                    </div>

                </div>

            </div>

        </div>
       

        <div>
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
            item: 1,
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

        itemPlus(){
            this.item++;
        },

        itemMinus(){
            if( this.item > 1){
                this.item--;
            }
        },
    },

    mounted(){
        this.$store.state.left = false;
    },

    async created(){
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    }

}

</script>
  
<style scoped>

.mt-90{
    margin-top: 90px;
}

.hidden{
    overflow-x: scroll;
}

</style>