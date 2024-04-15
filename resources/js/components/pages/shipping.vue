<template>
    <div>
  
        <div v-if="isLoading" class="preloader">
            <div class="loader"></div>
        </div>

        <div class="container mt-90 mb-3 px-0">

            <div class="p-3 row bg-light rounded mt-3 py-3 mx-auto shadow">
                    
                <a @click="$router.go(-1)" class="col-md-4 col-sm-12 text-center text-dark text-md-start py-1 my-auto"><b-icon-arrow-bar-left class="d-inline text-primary me-2 my-auto" width="13" height="13"></b-icon-arrow-bar-left>Back to Cart</a>
                <h5 class="text-center text-dark fw-bold col-md-4 col-sm-12 text-center text-md-center py-1 my-auto"><b-icon-info-circle class="d-inline text-secondary me-2 my-auto" width="18" height="18"></b-icon-info-circle>Shipping Information</h5>

                <div class="row p-3">

                    <div class="col-md-8">
                        <div class="row rounded border p-2">

                            <h6 class="text-start text-dark fw-bold mb-3 mt-2"><b-icon-geo class="d-inline text-secondary me-2 my-auto" width="20" height="20"></b-icon-geo> Delivery Address</h6>

                            <div class="py-2 btn border-custom text-dark fw-bold">
                                <b-icon-plus class="d-inline text-secondary me-2 my-auto" width="25" height="25"></b-icon-plus> Add Address
                            </div>

                            <div class="row rounded bg-custom py-3 mx-0 mt-3">
                                <div class="col-md-1 my-auto text-center">
                                    <b-icon-check2-circle class="d-inline text-success me-2 my-auto" width="25" height="25"></b-icon-check2-circle>
                                </div>
                                <div class="col-md-8 my-auto">
                                    <div class="d-grid">
                                        <p class="text-start text-secondary">Flat 2, Floor 1, House Cha 75/2, Matabbar Road, Uttar Badda, Badda.</p>
                                        <p class="text-start text-dark fw-bold">Badda, Dhaka</p>
                                        <p class="text-start text-dark fw-bold">+8801733472747</p>
                                    </div>
                                </div>
                                <div class="col-md-3 my-auto">
                                    <div class="d-flex justify-content-center justify-content-md-end">
                                        <b-icon-trash class="d-inline text-dark mx-2 my-auto bg-light p-1 rounded" width="25" height="25"></b-icon-trash>
                                        <b-icon-pencil-square class="d-inline text-dark mx-2 my-auto bg-light p-1 rounded" width="25" height="25"></b-icon-pencil-square>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="row rounded border p-2 mt-3">

                            <h6 class="text-start text-dark fw-bold mb-3 mt-2"><b-icon-stopwatch class="d-inline text-secondary me-2 my-auto" width="20" height="20"></b-icon-stopwatch> Delivery Time and Date</h6>

                            <div class="row mt-2">
                               
                               <div class="col-lg-4 col-md-12 ms-auto">
                                <Select v-model="data.shippingDate" size="large" prefix="ios-calendar-outline" placeholder="Setect Date">
                                    <span v-for="(day, index) in nextFourDays" :key="index">
                                        <Option :value="day.name ">
                                            <span>{{ day.name }}</span>
                                            <span style="float:right;color:#ccc">{{ day.month }} {{ day.date }}</span>
                                        </Option>  
                                    </span>                              
                                </Select>
                               </div>
                               <div class="col-lg-4 col-md-12 me-auto mt-4 mt-lg-0">
                                <Select v-model="data.shippingTime" size="large" prefix="ios-time-outline" placeholder="Setect Time">
                                    <span  v-for="(slot, index) in timeSlots" :key="index">
                                        <Option :value="slot.start + '-' + slot.end ">{{ slot.start }} - {{ slot.end }}</Option>  
                                    </span>                              
                                </Select>
                               </div>
                                
                                <div class="col-lg-8 col-md-12 mx-auto mt-2">
                                    <div class="row">
                                        <label for="Instruction" class="col-lg-3 col-md-3 col-sm-12 col-form-label fw-bold text-dark">Instruction</label>
                                        <div class="col-lg-9 col-md-9 col-sm-12">
                                            <textarea class="form-control" placeholder="Leave Instruction here (Optinal)" id="Instruction"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 mx-auto text-center mt-2 pb-3">
                                    <a href="#" class="col btn btn-success fw-bold py-2 px-4 mt-3">PROCCED ORDER</a>
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
                        </div>
                    </div>

                    <!-- <ul>
                    <li v-for="(slot, index) in timeSlots" :key="index">
                        {{ slot.start }} - {{ slot.end }}
                    </li>
                    </ul>

                    <ul>
                    <li v-for="(day, index) in nextFourDays" :key="index">
                        {{ day.month }} {{ day.date }} - {{ day.name }}
                    </li>
                    </ul> -->

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

            data:{
                shippingDate: '',
                shippingTime: ''
            },

            today: new Date(),
            daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

            startTime: 10, // Starting hour (in 24-hour format)
            endTime: 18, // Ending hour (in 24-hour format)
            timeSlots: [] // Array to hold the time slots

        }
    },

    methods: {

        generateTimeSlots() {
            const slots = [];
            for (let i = this.startTime; i <= this.endTime - 1; i++) {
                const startHour = i % 12 || 12; // Convert to 12-hour format
                const endHour = (i + 1) % 12 || 12; // Convert to 12-hour format
                const startAMPM = i < 12 ? 'am' : 'pm';
                const endAMPM = (i + 1) < 12 ? 'am' : 'pm';
                const slot = {
                start: `${startHour}:00 ${startAMPM}`,
                end: `${endHour}:00 ${endAMPM}`
                };
                slots.push(slot);
            }
            this.timeSlots = slots;
        },

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

    computed: {
        nextFourDays() {
        const nextFourDays = [];
        for (let i = 1; i <= 4; i++) {
            const nextDay = new Date();
            nextDay.setDate(this.today.getDate() + i);
            const monthName = this.months[nextDay.getMonth()];
            const dayOfWeek = this.daysOfWeek[nextDay.getDay()];
            const dayOfMonth = nextDay.getDate();
            nextFourDays.push({ month: monthName, name: dayOfWeek, date: dayOfMonth });
        }
        return nextFourDays;
        }
    },

    mounted(){
        this.$store.state.left = false;
        this.generateTimeSlots();
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
</style>