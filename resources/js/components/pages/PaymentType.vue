<template>
    <div>
  
        <div v-if="isLoading" class="preloader">
            <div class="loader"></div>
        </div>

        <div class="container mt-90 mb-3 px-0">

            <div class="p-3 row bg-light rounded mt-3 py-3 mx-auto shadow">
                    
                <a @click="$router.go(-1)" class="col-md-4 col-sm-12 text-center text-dark text-md-start py-1 my-auto"><b-icon-arrow-bar-left class="d-inline text-primary me-2 my-auto" width="13" height="13"></b-icon-arrow-bar-left>Back to Shipping</a>
                <h5 class="text-center text-dark fw-bold col-md-4 col-sm-12 text-center text-md-center py-1 my-auto"><b-icon-cash class="d-inline text-warning me-2 my-auto" width="25" height="25"></b-icon-cash>Select Payment Method</h5>

                <div class="row p-3">

                    <div class="col-md-8">
                        <div class="row rounded border p-2 bg-white">

                            <div class="accordion accordion-flush" id="accordionPayment">

                                <div class="row justify-content-start mt-3">
                                    <h2 class="accordion-header col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cash" aria-expanded="false" aria-controls="cash">
                                            <img src="assets/payment/cash.png" height="70" alt="">
                                        </button>
                                    </h2>
                                    <h2 class="accordion-header col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bekash" aria-expanded="false" aria-controls="bekash">
                                            <img src="assets/payment/bekash.png" height="70" alt="">
                                        </button>
                                    </h2>

                                    <h2 class="accordion-header col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rocket" aria-expanded="false" aria-controls="rocket">
                                            <img src="assets/payment/rocket.png" height="70" alt="">
                                        </button>
                                    </h2>

                                    <h2 class="accordion-header col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nagad" aria-expanded="false" aria-controls="nagad">
                                            <img src="assets/payment/nagad.png" height="70" alt="">
                                        </button>
                                    </h2>

                                    
                                    <h2 class="accordion-header col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#master" aria-expanded="false" aria-controls="master">
                                            <img src="assets/payment/master.png" height="70" alt="">
                                        </button>
                                    </h2>
                                </div>

                                <div class="accordion-item">
                                    <div id="cash" class="accordion-collapse collapse show" data-bs-parent="#accordionPayment">
                                    <div class="accordion-body">
                                        <p class="text-dark">You can pay in cash to our courier when you receive the goods at your doorstep.</p>

                                        <div class="bg-custom rounded p-3 mt-2 d-flex">
                                            <b-icon-info-square class="d-inline text-success me-3 my-auto" width="25" height="25"></b-icon-info-square>
                                            <p>Cash Payment Fee of ৳ 10 applies only to Cash on Delivery payment method. There is no extra fee when using other payment methods.</p>
                                        </div>

                                        <div class="col-12 mt-4">
                                            <button type="submit" class="card-btn btn rounded-2 col-md-4 col-sm-6 py-2 text-white fw-bold">Pay Now</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div id="bekash" class="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                                        <div class="accordion-body">
                                            <div class="row">


                                                <ul class="list-unstyled">

                                                    <li class="py-1">1&#41; Users paying with Bkash for the first time: Enter Bkash Wallet Number and OTP for successful account saving.</li>
                                                    <li class="py-1">2&#41; For all subsequent users: Enter PIN to make payment </li>
                                                    <li class="py-1">Disclaimer: you will be redirected back to Checkout for first transaction to complete payment</li>
                                                    <li class="py-1">Please Note</li>
                                                    <li class="py-1"> 1. You have an activated Bkash account </li>
                                                    <li class="py-1"> 2. Ensure you have sufficient balance in your Bkash account to cover the total cost of the order</li>
                                                    <li class="py-1"> 3. Ensure you are able to receive your OTP &#40;one-time-password&#41; on your mobile and have Bkash PIN</li>
                                                    <li class="py-1"> ***Please note that one Bkash account can only be saved in one only account.*** </li>

                                                </ul>


                                                <div class="col-12 mt-4">
                                                    <button type="submit" class="card-btn btn rounded-2 col-md-4 col-sm-6 py-2 text-white fw-bold">Pay Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div id="rocket" class="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                                        <div class="accordion-body">
                                            <div class="row">


                                                <ul class="list-unstyled">

                                                    <li class="py-1">1. You have an activated Rocket Mobile Banking account</li>
                                                    <li class="py-1">2. Ensure that you are able to receive a security code on your registered mobile number</li>
                                                    <li class="py-1">3. You have sufficient balance in your account</li>
                                                     
                                                </ul>


                                                <div class="col-12 mt-4">
                                                    <button type="submit" class="card-btn btn rounded-2 col-md-4 col-sm-6 py-2 text-white fw-bold">Pay Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div id="nagad" class="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                                        <div class="accordion-body">
                                            <div class="row">


                                                <ul class="list-unstyled">

                                                    <li class="py-1">1&#41; Users paying with Nagad for the first time: Enter Nagad Wallet Number and OTP for successful account saving.</li>
                                                    <li class="py-1">2&#41; For all subsequent users: Enter PIN to make payment </li>
                                                    <li class="py-1">Disclaimer: you will be redirected back to Checkout for first transaction to complete payment</li>
                                                    <li class="py-1">Please Note</li>
                                                    <li class="py-1"> 1. You have an activated Nagad account </li>
                                                    <li class="py-1"> 2. Ensure you have sufficient balance in your Nagad account to cover the total cost of the order</li>
                                                    <li class="py-1"> 3. Ensure you are able to receive your OTP &#40;one-time-password&#41; on your mobile and have Nagad PIN</li>
                                                    <li class="py-1"> ***Please note that one Nagad account can only be saved in one only account.*** </li>
                                                
                                                </ul>


                                                <div class="col-12 mt-4">
                                                    <button type="submit" class="card-btn btn rounded-2 col-md-4 col-sm-6 py-2 text-white fw-bold">Pay Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                     <div id="master" class="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                                        <div class="accordion-body">
                                            <form class="row g-3">
                                                <div class="col-md-9">
                                                    <label for="Card" class="form-label text-info"><span class="text-danger">* </span>Card Number</label>
                                                    <input type="text" class="form-control bg-white" id="Card" placeholder="Card Number">
                                                </div>
                                                <div class="col-md-9">
                                                    <label for="Name" class="form-label text-info"><span class="text-danger">* </span>Name On Card</label>
                                                    <input type="text" class="form-control bg-white" id="Name" placeholder="Name On Card">
                                                </div>
                                                
                                                <div class="col-md-5">
                                                    <label for="date" class="form-label text-info"><span class="text-danger">* </span>Expiration date</label>
                                                    <input type="text" v-model="this.data.expiration_date" class="form-control bg-white" @input="formatInput" id="date" placeholder="MM/YY">
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="CVV" class="form-label text-info"><span class="text-danger">* </span>CVV <Tooltip theme="light" content="The CVV is the 3 digit number on the back of your card." placement="top"> <b-icon-info-circle class="d-inline text-dark ms-2 my-auto" width="13" height="13"></b-icon-info-circle> </Tooltip> </label>
                                                    <input type="text" v-model="this.data.cvv" class="form-control bg-white" id="CVV" @input="limitInput" placeholder="CVV">
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                                    <label class="form-check-label text-info" for="gridCheck">
                                                        Save Card
                                                    </label>
                                                    </div>
                                                </div>
                                                <p v-if="!isValidFormat && this.data.expiration_date != '' " style="color: red;">Please enter a valid format: xx/xx</p>

                                                <div class="col-12">
                                                    <button type="submit" class="card-btn btn rounded-2 col-md-4 col-sm-6 py-2 text-white fw-bold">Pay Now</button>
                                                </div>

                                            </form>
                                        </div>
                                     </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="col-md-4 mt-3 mt-md-0">
                        <div class="row bg-white rounded mb-3 ms-md-auto p-3">

                            <h6 class="text-start text-dark fw-bold mb-2">Order Summary</h6>

                            <div class="d-flex justify-content-between py-1">
                                <p class="text-secondary">Subtotal (3 items)</p>
                                <p class="text-dark">৳ 3,784</p>
                            </div>

                            <div class="d-flex justify-content-between py-1">
                                <h5 class="text-dark fw-bold">Total</h5>
                                <h5 class="text-danger fw-bold">৳ 138</h5> 
                            </div>

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
            isLoading: true,
            isValidFormat: true,
            data:{
                expiration_date:'',
                cvv:''
            }
        }
    },

    methods: {
        limitInput() {
            let cleanedValue = this.data.cvv.replace(/\D/g, ''); // Remove non-numeric characters
            if (cleanedValue.length > 4) {
                cleanedValue = cleanedValue.slice(0, 4); // Limit to 4 digits
            }
            this.data.cvv = cleanedValue; // Update the CVV value in your component's data
        },

        formatInput() {
            // Remove any non-numeric characters
            let cleanedValue = this.data.expiration_date.replace(/\D/g, '');

            // Insert a slash after the first two characters if necessary
            if (cleanedValue.length > 2) {
                cleanedValue = cleanedValue.substring(0, 2) + '/' + cleanedValue.substring(2);
            }

            // Update the input value
            this.data.expiration_date = cleanedValue.substring(0, 5);
        }

    },

    computed: {
        
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

.border-custom{
    border: .3px solid rgb(211, 211, 211);
}

.bg-custom{
    background: #128d181a;
}

.accordion-header{
    border-radius: 4px;
    border-radius: 4px;
}

.accordion-button{
    border-radius: 4px;
    margin-bottom: 5px;
    border: .5px dashed #cfcfcf;
    -webkit-box-shadow: 5px 5px 40px 31px rgba(230,230,230,0.66);
    -moz-box-shadow: 5px 5px 40px 31px rgba(230,230,230,0.66);
    box-shadow: 5px 5px 40px 31px rgba(230,230,230,0.66);
}

.accordion-item{
    margin-top: 10px;
    border-radius: 8px;
    background: #f5fff11f;
    border: 0;
}

.bg-btn{
    background: #F57224;
}
</style>