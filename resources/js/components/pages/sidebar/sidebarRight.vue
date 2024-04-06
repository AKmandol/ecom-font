<template>
    <div>

        <div class="row sidebarRight2 mx-0 px-0" @click="showRighttBar" :style="menuItem">
            <div class="mx-0 px-0 d-flex align-items-center rounded-0 borderLeft">
                <b-icon-arrow-left-square-fill class="mx-auto arrow" width="25" height="25"></b-icon-arrow-left-square-fill>
            </div>
        </div>

        <Transition name="slideFadeRight">
            <div class="row sidebarRight mx-0 px-0 shadow-sm" v-if="this.$store.state.right">

                    <div class="card mx-0 px-0 col-12 d-flex flex-column rounded-0 borderLeft" style="height:fit-content;">
                        
                            <div class="card-header mx-0 px-0 d-flex align-items-center rounded-0 borderLeft" :style="menuItem">
                                <b-icon-arrow-right-square-fill @click="showRighttBar" class="text-dark closspe-arrow" width="25" height="25"></b-icon-arrow-right-square-fill>
                                <div class="ml-2 fs-5 mx-auto"><b>Filter Item By</b></div>
                            </div>
                
                            <div class="card-body bg-white borderLeft">
                                <label for="customRange" class="form-label card-title"> <b>Price Range</b> [0-20000] </label>
                                <Slider range v-model="price" :marks="marks"></Slider>
                            </div>
                    
                            
                            <div class="card-header mx-0 px-0 mt-5 d-flex justify-content-center border-success rounded-0 borderLeft">
                                <h4 class="text-center py-1 mb-0"><b>Size</b></h4>
                            </div>
                            <div class="card-body bg-white p-0 m-0 table-responsive borderLeft">
                                <table class="table p-0 m-0 table-bordered">
                                    <thead class="p-0 m-0">
                                        <tr class="size_card p-0 m-0 text-center">
                                            <th scope="col">S</th>
                                            <th scope="col">M</th>
                                            <th scope="col">L</th>
                                            <th scope="col">XL</th>
                                            <th scope="col">XXL</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            
                    
                            <div class="card-header mx-0 px-0 mt-5 d-flex justify-content-center border-success rounded-0 borderLeft">
                                <h4 class="text-center py-1 mb-0"><b>Color</b></h4>
                            </div>
                            <div class="card-body bg-white pb-0 mb-0 borderLeft">
                                <div class="gap-1 pb-0 mb-0 d-flex flex-row justify-content-between">
                                    <div class="p-3 btn card bg-dark"></div>
                                    <div class="p-3 btn card bg-white"></div>
                                    <div class="p-3 btn card bg-warning"></div>
                                    <div class="p-3 btn card bg-primary"></div>
                                    <div class="p-3 btn card bg-danger"></div>
                                </div> 
                            </div>
                            
                    
                            <div class="card-header mx-0 px-0 mt-5 d-flex justify-content-center border-success rounded-0 borderLeft">
                                <h4 class="text-center py-1 mb-0"><b>Brand</b></h4>
                            </div>
                            <div class="card-body bg-white p-0 table-responsive borderLeft" style="max-height: 200px;">
                                <table class="table table-hover table-bordered">
                                    <thead>
                                        <tr class="text-center">
                                            <th scope="col">Icon</th>
                                            <th scope="col">Brand Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="text-center">
                                            <td><img src="assets/apple-logo.svg" height="30" width="70" class="img-fluid img" alt="Logo not found"></td>
                                            <td>Apple</td>
                                        </tr>
                                        <tr class="text-center">
                                            <td><img src="assets/sony-logo.svg" height="30" width="70" class="img-fluid img" alt="Logo not found"></td>
                                            <td>Sony</td>
                                        </tr>
                                        <tr class="text-center">
                                            <td><img src="assets/sony-logo.svg" height="30" width="70" class="img-fluid img" alt="Logo not found"></td>
                                            <td>Sony</td>
                                        </tr>
                                        <tr class="text-center">
                                            <td><img src="assets/sony-logo.svg" height="30" width="70" class="img-fluid img" alt="Logo not found"></td>
                                            <td>Sony</td>
                                        </tr>
                                        <tr class="text-center">
                                            <td><img src="assets/sony-logo.svg" height="30" width="70" class="img-fluid img" alt="Logo not found"></td>
                                            <td>Sony</td>
                                        </tr>
                                        <tr class="text-center">
                                            <td><img src="assets/sony-logo.svg" height="30" width="70" class="img-fluid img" alt="Logo not found"></td>
                                            <td>Sony</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                  

                    </div>
            </div>
        </Transition>
        
    </div>
</template>

<script>
export default {

    data() {
            return {
                right : true,
                price: [30,50],
                marks: {
                    0: '0',
                    25: '1K',
                    50: '5K',
                    75: {
                        style: {
                            color: '#ff0000'
                        },
                        label: '10K'
                    },
                    100: {
                        style: {
                            color: '#ff0000'
                        },
                        label: '20K'
                    },
                },

                menuItem: {
                    color: '#000',
                    background:'#fff',
                },
             }  
    },

    methods: {
        showRighttBar(){
            this.$store.dispatch("toggleRight", this.right)
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
            }else{ 
                this.menuItem.background = '#fff';
                this.menuItem.color = '#000';
                
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
.slideFadeRight-enter-from {
  opacity: 0;
  transform: translateX(250px);
}
.slideFadeRight-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slideFadeRight-enter-active {
  transition: all .5s ease;
}

.slideFadeRight-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slideFadeRight-leave-to {
  opacity: 0;
  transform: translateX(250px);
}
.slideFadeRight-leave-active {
  transition: all .5s ease;
}


.bg-cus{
    background: rgb(4,113,102);
}

.borderLeft {
    border-left: 0 !important;
    border-right: 0 !important;
 } 

.sidebarRight2 {
    border-bottom-left-radius: 5px;
    padding: 5px;
    min-width: 60px;
    overflow: hidden;
    position: fixed;
    top: 75px;
    right:0;
    z-index: 800;
    transition: all .3s ease-in-out;
}  

.sidebarRight2:hover {
    cursor: pointer;
    padding: 6px;
}

.sidebarRight2:hover .arrow {
    padding: 1px;
    margin-left: 0 !important;
}

.closspe-arrow:hover {
    padding: 1px;
}

.sidebarRight {
    background: #fff;
    height: 100vh;
    min-width: 250px;
    overflow: hidden;
    position: fixed;
    top: 73px;
    right:0;
    z-index: 900;
    border-left: .5px solid rgb(212, 212, 212);
    border-right: .5px solid rgb(212, 212, 212);
    /* padding-left: .3rem !important;
    border-left: 1px solid rgba(207, 207, 207, 0.829);
    border-radius: 5px; */
}    

.size_card th:hover {
    background-color: rgb(255, 145, 0);
    color: #fff;
}
.row > *  {
    padding-left: 0 !important;
    padding-right: 0 !important;
}
</style>