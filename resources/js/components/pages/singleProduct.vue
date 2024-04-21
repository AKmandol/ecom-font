<template>
    <div> 
        <!-- Modal Start -->
        <div class="container main">
            <div class="row">
                <div class="card bg-white border-0">

                    <div class="position-relative">
                        <h3 class="modal-title fs-3 fw-bold text-dark mt-4 ms-3">Product Details</h3>
                    </div>

                    <div class="card-body p-4">
                        <div class="row my-4">

                            <div class="col-lg-6 col-md-12 col-12 p-0 m-0 rounded hi-500">

                                <div class="text-center main-img hi-440">
                                    <img class="img-fluid" src="assets/product/p6.png" />
                                </div>
                            
                                <div class="d-flex flex-row justify-content-start hi-50">
                                    <div class="small-img">
                                        <img class="img-fluid" src="assets/product/p1.png" />
                                    </div>
                                    <div class="small-img">
                                        <img class="img-fluid" src="assets/product/p2.png" />
                                    </div>
                                    <div class="small-img">
                                        <img class="img-fluid" src="assets/product/p3.png" />
                                    </div>
                                </div>

                            </div>
                            
                            <div class="col-lg-6 col-md-12 col-sm-12 rounded hi-500 mt-md-4 mt-lg-0">

                                <div class="border bg-white rounded mx-lg-3 mx-md-0 p-3">
                                    <h4 class="py-3 text-dark">Product Name</h4>
                                    <div class="d-flex flex-row justify-content-between pb-3">
                                        <h5>Price: <span class="text-danger ml-2">$32</span></h5>
                                        <kbd class="fs-6 fw-bold">20% off</kbd>
                                    </div>

                                    <div class="bg-light border rounded p-4">

                                        <div class="row">

                                            <div class="col-12 py-2">
                                                <div class="aling-middle d-flex"> 
                                                    <h6 class="text-dark fw-bold my-auto mr-2 col-4">Qunantity:</h6> 
                                                    <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
                                                </div>
                                            </div>

                                            <div class="py-2 col-12">
                                                <div class="aling-middle d-flex"> 
                                                    <h6 class="text-dark fw-bold my-auto mr-2 col-4">Size:</h6> 
                                                    <Select v-model="model" placeholder="Select Size" class="col">
                                                        <Option value="M" >
                                                            <span class="text-dark">M</span>
                                                            <span style="float:right;color:#808080; padding: 5px"><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                                                        </Option>
                                                        <Option value="L" >
                                                            <span class="text-dark">L</span>
                                                            <span style="float:right;color:#808080; padding: 5px"><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                                                        </Option>
                                                        <Option value="XL" >
                                                            <span class="text-dark">XL</span>
                                                            <span style="float:right;color:#808080; padding: 5px"><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                                                        </Option>
                                                        <Option value="XXL" >
                                                            <span class="text-dark">XXL</span>
                                                            <span style="float:right;color:#808080; padding: 5px"><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                                                        </Option>
                                            
                                                    </Select>
                                                </div>
                                            </div>

                                            <div class="py-2 col-12">
                                                <div class="aling-middle d-flex"> 
                                                    <h6 class="text-dark fw-bold my-auto mr-2 col-4">Color:</h6> 
                                                    <Select v-model="model" placeholder="Select Color" class="col">
                                                        <Option value="black" >
                                                            <span class="text-dark">Black</span>
                                                            <span style="float:right;background:#000; padding: 5px"></span>
                                                        </Option>
                                                        <Option value="Gray" >
                                                            <span class="text-dark">Gray</span>
                                                            <span style="float:right;background:#808080; padding: 5px"></span>
                                                        </Option>
                                                        <Option value="Red" >
                                                            <span class="text-dark">Red</span>
                                                            <span style="float:right;background:#FF0000; padding: 5px"></span>
                                                        </Option>
                                                        <Option value="Green" >
                                                            <span class="text-dark">Green</span>
                                                            <span style="float:right;background:#008000; padding: 5px"></span>
                                                        </Option>
                                                    </Select>
                                                </div>
                                            </div>  

                                        </div>

                                    </div>

                                    <div class="text-center my-3 overflow-auto" style="height:120px;">
                                        <h4 class="text-dark py-2">Mini Description</h4>
                                        <span class="py-3">
                                            Which disappears once a form field has content will
                                            benefit assistive technology users, a lack of visible 
                                            label text may still be problematic for certain users...
                                        </span>
                                    </div>

                                    <a @click="addToCart" class="d-flex col-6 justify-content-center aling-items-center rounded btn-Modal mx-auto" data-bs-dismiss="modal" aria-label="Close">
                                        <b-icon-cart-check-fill class="text-warning my-auto mr-2" width="25" height="25" ></b-icon-cart-check-fill>
                                        <span class="py-2 fs-5 fw-bold m-0">Add to cart</span>
                                    </a>
                                </div>
                            </div>

                        </div>


                        <div class="row mt-3">

                            <div class="col-lg-12 col-md-12 col-12  p-0 mt-5 bg-white">

                                <h4 class="text-center text-dark pt-4">Full Description</h4>

                                <Tabs class="p-4" type="card">

                                    <TabPane label="General">
                                        <table class="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <th scope="col" class="text-left">Operating System <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">Android 12</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Custom UI <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">Samsung One UI</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Dimensions <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">165.4mm x 76.9mm x 9.3mm</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Weight <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">207g</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">SIM card slots <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">Dual SIM</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Charging Port <span class="text-right">:</span></th>
                                                    <td  class="text-dark text-right">USB Type-C</td>
                                                </tr>
                                                
                                                <tr>
                                                    <th class="text-left">Headphone <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">3.5mm headphone</td>
                                                </tr>                   
                                            </tbody>
                                        </table>
                                    </TabPane>

                                    <TabPane label="Display & Design">
                                        <table class="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <th class="text-left" scope="col">Size <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">6.6 inches (16.76 cm)</td> 
                                                </tr>
                                                
                                                <tr>
                                                    <th class="text-left" scope="col">Resolution <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">1080 x 2408 pixels</td>
                                                </tr>

                                                <tr>
                                                    <th class="text-left" scope="col">Pixel Density <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">400ppi</td>
                                                </tr>

                                                <tr>
                                                    <th class="text-left" scope="col">Touch Screen <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">Yes, Capacitive Touchscreen, Multi-touch</td>
                                                </tr>

                                                <tr>
                                                    <th class="text-left" scope="col">Screen Protection <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">Corning Gorilla Glass v5</td>
                                                </tr>

                                                <tr>
                                                    <th class="text-left" scope="col">Design <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">Notch Display</td>
                                                </tr>

                                                <tr>
                                                    <th class="text-left" scope="col">Colour Options <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">Aqua Green, Midnight Blue, Stardust Brown</td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </TabPane>

                                    <TabPane label="Hardware">
                                        <table class="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <th scope="col" class="text-left">Operating System <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">Android 12</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Custom UI <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">Samsung One UI</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Dimensions <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">165.4mm x 76.9mm x 9.3mm</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Weight <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">207g</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">SIM card slots <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">Dual SIM</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Charging Port <span class="text-right">:</span></th>
                                                    <td  class="text-dark text-right">USB Type-C</td>
                                                </tr>
                                                
                                                <tr>
                                                    <th class="text-left">Headphone <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">3.5mm headphone</td>
                                                </tr>                   
                                            </tbody>
                                        </table>
                                    </TabPane>

                                    <TabPane label="Software">
                                        <table class="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <th class="text-left" scope="col">Size <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">6.6 inches (16.76 cm)</td> 
                                                </tr>
                                                
                                                <tr>
                                                    <th class="text-left" scope="col">Resolution <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">1080 x 2408 pixels</td>
                                                </tr>

                                                <tr>
                                                    <th class="text-left" scope="col">Pixel Density <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">400ppi</td>
                                                </tr>

                                                <tr>
                                                    <th class="text-left" scope="col">Touch Screen <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">Yes, Capacitive Touchscreen, Multi-touch</td>
                                                </tr>

                                                <tr>
                                                    <th class="text-left" scope="col">Screen Protection <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">Corning Gorilla Glass v5</td>
                                                </tr>

                                                <tr>
                                                    <th class="text-left" scope="col">Design <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">Notch Display</td>
                                                </tr>

                                                <tr>
                                                    <th class="text-left" scope="col">Colour Options <span class="text-right">:</span></th>
                                                    <td class="text-primary text-right">Aqua Green, Midnight Blue, Stardust Brown</td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </TabPane>
                                    
                                    <TabPane label="Camera">
                                        <table class="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <th scope="col" class="text-left">Operating System <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">Android 12</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Custom UI <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">Samsung One UI</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Dimensions <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">165.4mm x 76.9mm x 9.3mm</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Weight <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">207g</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">SIM card slots <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">Dual SIM</td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" class="text-left">Charging Port <span class="text-right">:</span></th>
                                                    <td  class="text-dark text-right">USB Type-C</td>
                                                </tr>
                                                
                                                <tr>
                                                    <th class="text-left">Headphone <span class="text-right">:</span></th>
                                                    <td class="text-dark text-right">3.5mm headphone</td>
                                                </tr>                   
                                            </tbody>
                                        </table>
                                    </TabPane>

                                </Tabs>

                            </div>

                            <!-- <div class="col-lg-4 bg-dark p-0 my-0 hi-500"></div>
                            <div class="col-lg-8 bg-primary p-0 m-0 hi-500"></div> -->

                        </div>

                    </div>

                </div>
            </div>
        </div>    
          
        <footerMenu></footerMenu>

    </div>
</template>

<script>
import footerMenu from "./footer.vue"
export default {

    components: {
        footerMenu,
    },

    data(){
        return{
            loading: true,
            value: 1,
            item: 1,
        }
    },

    methods: {

        itemPlus(){
            this.item++;
        },

        itemMinus(){
            if( this.item > 1){
                this.item--;
            }
        },

        addToCart(){
            this.successMsg('Item Added to Cart');
            this.$store.dispatch("openSideCart", this.RightCartSlide)
        },
    },
    async created(){
        setTimeout(() => {
            this.loading = false;
        }, 500);
    }

}
</script>

<style scoped>

.main{
    margin-top: 80px;
    margin-bottom: 30px;
}

 
   
  
.btn-Modal {
color: #fff;
background: rgba(28, 0, 54, 0.918);
border: 0.5px solid rgb(151, 151, 151);
}
.btn-Modal:hover {
color: rgb(255, 255, 255);
background: rgba(100, 5, 252, 0.747);
border: .5px solid rgb(61, 0, 122);
}
.hi-500 {
height: 500px; 
}
.hi-440 {
height: 460px;
}
.hi-50 {
height: 50px;
}

.main-img {
cursor: pointer; 
border: 5px solid rgb(218, 218, 218);
overflow: hidden;
background: #fff;
border-radius: 8px;
}

.main-img:hover {
border: 5px solid rgb(187, 186, 186);
}

.main-img img {
transition: transform 2s;
}
.main-img img:hover {
cursor: grab; 
transform: scale(1.5);
}
.small-img { 
cursor: pointer; 
height: 45px;
width: 45px;
margin-top: 5px;
margin-right: 8px;
padding: 5px;
border: 1px solid rgb(187, 186, 186);
border-radius: 8px;
}

</style>