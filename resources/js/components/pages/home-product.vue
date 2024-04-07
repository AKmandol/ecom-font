<template>
    <div>
        <div class="container-fluid m-x">
           

            <div class="row my-5 main-color">

                <div class="col-lg-5 text-center"> 
                
                    <img src="assets/homeLeft.jpg" class="img-fluid rounded-right" alt="..." />
                    
                </div>

                <div class="col-lg-7 p-3 col-lg-5 my-auto"> 

                    <div id="carouselExampleInterval" class="carousel slide carousel-fade my-auto" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item bg-white rounded-left active">
                                <img src="assets/banner1.png" class="d-block mg-fluid mx-auto p-3" alt="Logo not found">
                            </div>
                            <div class="carousel-item bg-white rounded-left">
                                <img src="assets/banner2.png" class="d-block img-fluid mx-auto p-3" alt="Logo not found">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <!-- <div class="text-center my-3">
                        <a class="btn btn-warning fw-bold" href="#">View All Offer</a>
                    </div> -->
                    

                </div>

            </div>   

          

            <div>
                <Shop></Shop>
            </div>

            <div class="row card my-4" v-if="p">

                <div class="card-header">
                    <h4 class="text-center text-success py-1 mb-0"><b>New Arrivals</b></h4>
                </div>

                <div class="card-body row mx-auto gap-1">

                    <div class="col-md-6 col-lg-3 p-0 mx-auto bg-light mt-3" style="width:280px;">

                        <div class="card-header">
                            <h4 class="text-center py-1 mb-0"><b>Product Name</b></h4>
                        </div>
                        <img src="assets/product/p1.png" class="card-img-top img-thumbnail py-0 my-0" alt="...">

                        <div class="d-flex flex-row aling-items-center justify-content-center">
                            <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-eye width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-eye> <small class="text-dark">View</small></a>
                            <a class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-view-list width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-view-list> <small class="text-dark">Wishlist</small> </a>
                        </div>

                        <div class="card-body">
                            <p class="card-text col-md-12 text-muted text1-truncate mb-0 pb-0">
                                Align terms and descriptions horizontally by using our grid system
                                predefined classes or semantic mixins. For longer terms, you can optionally.
                            </p>
                            <span><a href="#"><kbd>Read More</kbd></a></span>

                            <h5 class="card-title text-danger mt-2 mb-0 pb-0"> <strong class="text-dark">Price: </strong>$50.75</h5>
                        </div>

                        <table class="table pb-0 mb-0 table-bordered">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col">Size</th>
                                        <th scope="col">color</th>
                                        <th scope="col">Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td>
                                            <Select v-model="size" label="Size">
                                                <Option value="M" label="M">
                                                    <span>M</span>
                                                </Option>
                                                <Option value="L" label="L">
                                                    <span>L</span>                  
                                                </Option>
                                                <Option value="XL" label="XL">
                                                    <span>XL</span>
                                                </Option>
                                                <Option value="XXL" label="XXL">
                                                    <span>XXL</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td>
                                            <Select v-model="color" label="color">
                                                <Option value="red" label="red">
                                                    <span>Red</span>
                                                </Option>
                                                <Option value="green" label="green">
                                                    <span>Green</span>
                                                </Option>
                                                <Option value="black" label="black">
                                                    <span>Black</span>
                                                </Option>
                                                <Option value="white" label="white">
                                                    <span>White</span>
                                                </Option>
                                                <Option value="purple" label="purple">
                                                    <span>Purple</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td>
                                            <InputNumber v-model="qty" :min="1" />
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                        <a class="card-footer-cart text-center py-2 d-grid text-dark bg-info mt-0 rounded-bottom">Add to cart</a>

                    </div>

                    <div class="col-md-6 col-lg-3 p-0 mx-auto bg-light mt-3" style="width:280px;">

                        <div class="card-header">
                            <h4 class="text-center py-1 mb-0"><b>Product Name</b></h4>
                        </div>
                        <img src="assets/product/p7.png" class="card-img-top img-thumbnail py-0 my-0" alt="...">

                        <div class="d-flex flex-row aling-items-center justify-content-center">
                            <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-eye width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-eye> <small class="text-dark">View</small></a>
                            <a class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-view-list width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-view-list> <small class="text-dark">Wishlist</small> </a>
                        </div>

                        <div class="card-body">
                            <p class="card-text col-md-12 text-muted text1-truncate mb-0 pb-0">
                                Align terms and descriptions horizontally by using our grid system’s
                                predefined classes or semantic mixins. For longer terms, you can optionally.
                            </p>
                            <span><a href="#"><kbd>Read More</kbd></a></span>

                            <h5 class="card-title text-danger mt-2 mb-0 pb-0"> <strong class="text-dark">Price: </strong>$50.75</h5>
                        </div>

                        <table class="table pb-0 mb-0 table-bordered">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col">Size</th>
                                        <th scope="col">color</th>
                                        <th scope="col">Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td>
                                            <Select v-model="size" label="Size">
                                                <Option value="M" label="M">
                                                    <span>M</span>
                                                </Option>
                                                <Option value="L" label="L">
                                                    <span>L</span>                  
                                                </Option>
                                                <Option value="XL" label="XL">
                                                    <span>XL</span>
                                                </Option>
                                                <Option value="XXL" label="XXL">
                                                    <span>XXL</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td>
                                            <Select v-model="color" label="color">
                                                <Option value="red" label="red">
                                                    <span>Red</span>
                                                </Option>
                                                <Option value="green" label="green">
                                                    <span>Green</span>
                                                </Option>
                                                <Option value="black" label="black">
                                                    <span>Black</span>
                                                </Option>
                                                <Option value="white" label="white">
                                                    <span>White</span>
                                                </Option>
                                                <Option value="purple" label="purple">
                                                    <span>Purple</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td>
                                            <InputNumber v-model="qty" :min="1" />
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                        <a class="card-footer-cart text-center py-2 d-grid text-dark bg-info mt-0 rounded-bottom">Add to cart</a>
                        
                    </div>

                    <div class="col-md-6 col-lg-3 p-0 mx-auto bg-light mt-3" style="width:280px;">

                        <div class="card-header">
                            <h4 class="text-center py-1 mb-0"><b>Product Name</b></h4>
                        </div>
                        <img src="assets/product/p5.png" class="card-img-top img-thumbnail py-0 my-0" alt="...">

                        <div class="d-flex flex-row aling-items-center justify-content-center">
                            <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-eye width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-eye> <small class="text-dark">View</small></a>
                            <a class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-view-list width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-view-list> <small class="text-dark">Wishlist</small> </a>
                        </div>

                        <div class="card-body">
                            <p class="card-text col-md-12 text-muted text1-truncate mb-0 pb-0">
                                Align terms and descriptions horizontally by using our grid system’s
                                predefined classes or semantic mixins. For longer terms, you can optionally.
                            </p>
                            <span><a href="#"><kbd>Read More</kbd></a></span>

                            <h5 class="card-title text-danger mt-2 mb-0 pb-0"> <strong class="text-dark">Price: </strong>$50.75</h5>
                        </div>

                        <table class="table pb-0 mb-0 table-bordered">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col">Size</th>
                                        <th scope="col">color</th>
                                        <th scope="col">Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td>
                                            <Select v-model="size" label="Size">
                                                <Option value="M" label="M">
                                                    <span>M</span>
                                                </Option>
                                                <Option value="L" label="L">
                                                    <span>L</span>                  
                                                </Option>
                                                <Option value="XL" label="XL">
                                                    <span>XL</span>
                                                </Option>
                                                <Option value="XXL" label="XXL">
                                                    <span>XXL</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td>
                                            <Select v-model="color" label="color">
                                                <Option value="red" label="red">
                                                    <span>Red</span>
                                                </Option>
                                                <Option value="green" label="green">
                                                    <span>Green</span>
                                                </Option>
                                                <Option value="black" label="black">
                                                    <span>Black</span>
                                                </Option>
                                                <Option value="white" label="white">
                                                    <span>White</span>
                                                </Option>
                                                <Option value="purple" label="purple">
                                                    <span>Purple</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td>
                                            <InputNumber v-model="qty" :min="1" />
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                        <a class="card-footer-cart text-center py-2 d-grid text-dark bg-info mt-0 rounded-bottom">Add to cart</a>
                        
                    </div>

                    <div class="col-md-6 col-lg-3 p-0 mx-auto bg-light mt-3" style="width:280px;">

                        <div class="card-header">
                            <h4 class="text-center py-1 mb-0"><b>Product Name</b></h4>
                        </div>
                        <img src="assets/product/p2.png" class="card-img-top img-thumbnail py-0 my-0" alt="...">

                        <div class="d-flex flex-row aling-items-center justify-content-center">
                            <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-eye width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-eye> <small class="text-dark">View</small></a>
                            <a class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-view-list width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-view-list> <small class="text-dark">Wishlist</small> </a>
                        </div>

                        <div class="card-body">
                            <p class="card-text col-md-12 text-muted text1-truncate mb-0 pb-0">
                                Align terms and descriptions horizontally by using our grid system’s
                                predefined classes or semantic mixins. For longer terms, you can optionally.
                            </p>
                            <span><a href="#"><kbd>Read More</kbd></a></span>

                            <h5 class="card-title text-danger mt-2 mb-0 pb-0"> <strong class="text-dark">Price: </strong>$50.75</h5>
                        </div>

                        <table class="table pb-0 mb-0 table-bordered">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col">Size</th>
                                        <th scope="col">color</th>
                                        <th scope="col">Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td>
                                            <Select v-model="size" label="Size">
                                                <Option value="M" label="M">
                                                    <span>M</span>
                                                </Option>
                                                <Option value="L" label="L">
                                                    <span>L</span>                  
                                                </Option>
                                                <Option value="XL" label="XL">
                                                    <span>XL</span>
                                                </Option>
                                                <Option value="XXL" label="XXL">
                                                    <span>XXL</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td>
                                            <Select v-model="color" label="color">
                                                <Option value="red" label="red">
                                                    <span>Red</span>
                                                </Option>
                                                <Option value="green" label="green">
                                                    <span>Green</span>
                                                </Option>
                                                <Option value="black" label="black">
                                                    <span>Black</span>
                                                </Option>
                                                <Option value="white" label="white">
                                                    <span>White</span>
                                                </Option>
                                                <Option value="purple" label="purple">
                                                    <span>Purple</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td>
                                            <InputNumber v-model="qty" :min="1" />
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                        <a class="card-footer-cart text-center py-2 d-grid text-dark bg-info mt-0 rounded-bottom">Add to cart</a>
                        
                    </div>


                    <!-- <div class="col-md-6 bg-light">

                        <div class="card-header">
                            <h4 class="text-center py-1 mb-0"><b>Product Name</b></h4>
                        </div>
                        <img src="assets/product/p3.png" class="card-img-top img-thumbnail py-0 my-0" alt="...">

                        <div class="d-flex flex-row aling-items-center justify-content-center">
                            <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-eye width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-eye> <small class="text-dark">View</small></a>
                            <a class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-view-list width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-view-list> <small class="text-dark">Wishlist</small> </a>
                        </div>

                        <div class="card-body">
                            <p class="card-text col-md-12 text-muted text1-truncate mb-0 pb-0">
                                Align terms and descriptions horizontally by using our grid system’s
                                predefined classes or semantic mixins. For longer terms, you can optionally.
                            </p>
                            <span><a href="#"><kbd>Read More</kbd></a></span>

                            <h5 class="card-title text-danger mt-2 mb-0 pb-0"> <strong class="text-dark">Price: </strong>$50.75</h5>
                        </div>

                        <table class="table col-md-12 pb-0 mb-0 table-bordered">
                                <thead>
                                    <tr class="text-center">
                                        <th class="col-md-4" scope="col">Size</th>
                                        <th class="col-md-4" scope="col">color</th>
                                        <th class="col-md-4" scope="col">Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td class="col-md-4">
                                            <Select v-model="size" label="Size">
                                                <Option value="M" label="M">
                                                    <span>M</span>
                                                </Option>
                                                <Option value="L" label="L">
                                                    <span>L</span>                  
                                                </Option>
                                                <Option value="XL" label="XL">
                                                    <span>XL</span>
                                                </Option>
                                                <Option value="XXL" label="XXL">
                                                    <span>XXL</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td class="col-md-4">
                                            <Select v-model="color" label="color">
                                                <Option value="red" label="red">
                                                    <span>Red</span>
                                                </Option>
                                                <Option value="green" label="green">
                                                    <span>Green</span>
                                                </Option>
                                                <Option value="black" label="black">
                                                    <span>Black</span>
                                                </Option>
                                                <Option value="white" label="white">
                                                    <span>White</span>
                                                </Option>
                                                <Option value="purple" label="purple">
                                                    <span>Purple</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td class="col-md-4">
                                            <InputNumber v-model="qty" :min="1" />
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                        <a class="card-footer-cart text-center py-2 col-12 text-dark bg-info mt-0 rounded-bottom">Add to cart</a>
                        
                    </div>

                    <div class="col-md-6 bg-light">

                        <div class="card-header">
                            <h4 class="text-center py-1 mb-0"><b>Product Name</b></h4>
                        </div>
                        <img src="assets/product/p4.png" class="card-img-top img-thumbnail py-0 my-0" alt="...">

                        <div class="d-flex flex-row aling-items-center justify-content-center">
                            <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-eye width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-eye> <small class="text-dark">View</small></a>
                            <a class="border cart-btn text-center py-2 col-6 mx-auto"><b-icon-view-list width="20" height="20" class="cart-icon mx-auto text-success" ></b-icon-view-list> <small class="text-dark">Wishlist</small> </a>
                        </div>

                        <div class="card-body">
                            <p class="card-text col-md-12 text-muted text1-truncate mb-0 pb-0">
                                Align terms and descriptions horizontally by using our grid system’s
                                predefined classes or semantic mixins. For longer terms, you can optionally.
                            </p>
                            <span><a href="#"><kbd>Read More</kbd></a></span>

                            <h5 class="card-title text-danger mt-2 mb-0 pb-0"> <strong class="text-dark">Price: </strong>$50.75</h5>
                        </div>

                        <table class="table col-md-12 pb-0 mb-0 table-bordered">
                                <thead>
                                    <tr class="text-center">
                                        <th class="col-md-4" scope="col">Size</th>
                                        <th class="col-md-4" scope="col">color</th>
                                        <th class="col-md-4" scope="col">Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td class="col-md-4">
                                            <Select v-model="size" label="Size">
                                                <Option value="M" label="M">
                                                    <span>M</span>
                                                </Option>
                                                <Option value="L" label="L">
                                                    <span>L</span>                  
                                                </Option>
                                                <Option value="XL" label="XL">
                                                    <span>XL</span>
                                                </Option>
                                                <Option value="XXL" label="XXL">
                                                    <span>XXL</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td class="col-md-4">
                                            <Select v-model="color" label="color">
                                                <Option value="red" label="red">
                                                    <span>Red</span>
                                                </Option>
                                                <Option value="green" label="green">
                                                    <span>Green</span>
                                                </Option>
                                                <Option value="black" label="black">
                                                    <span>Black</span>
                                                </Option>
                                                <Option value="white" label="white">
                                                    <span>White</span>
                                                </Option>
                                                <Option value="purple" label="purple">
                                                    <span>Purple</span>
                                                </Option>
                                            </Select>
                                        </td>
                                        <td class="col-md-4">
                                            <InputNumber class="InputNumber" v-model="qty" :min="1" />
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                        <a class="card-footer-cart text-center py-2 col-12 text-dark bg-info mt-0 rounded-bottom">Add to cart</a>
                        
                    </div> -->

                </div>

                <!-- <nav aria-label="Page navigation example" class="mt-3">
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link rounded-0 floatleft" href="#">Previous</a></li>
                        <li class="page-item"><a class="pb-0 mb-0 page-link link-dark" href="#">1</a></li>
                        <li class="page-item"><a class="pb-0 mb-0 mx-2 page-link link-dark active" href="#">2</a></li>
                        <li class="page-item"><a class="pb-0 mb-0 page-link link-dark" href="#">3</a></li>
                        <li class="page-item"><a class="page-link rounded-0 floatright" href="#">Next</a></li>
                    </ul>
                </nav> -->

            </div>
            
        </div>
    </div>
</template>

<script>
import Shop from "./shop.vue";    
export default {

    components: {
        Shop
    },

    data() {
        return {
            size: '',
            color: '',
            qty: 1,
            p: false,
            modal: true
        }
    },

    methods: {
        
    }
}
</script>

<style scoped>

.m-x {
    margin-top: 80px ;
}
@media(max-width: 991px){
    .m-x{
        width: 100%;
        padding:  0;
        margin-top: 0px
    }
}

.mt-5rem {
    margin-top: 5rem;
}
.InputNumber {
    overflow: hidden;
}
.main {
    position: relative;
}

.floatleft {
    position: absolute;
    bottom: 0;
    left: 0;
    border: .5px solid rgb(151, 49, 253);
    padding: 4px;
    background: rgb(80, 0, 185);
    color: #fff;
    width: 80px;
    text-align: center;
}

.floatright {
    position: absolute;
    bottom: 0;
    right: 0;
    border: .5px solid rgb(151, 49, 253);
    padding: 4px;
    background: rgb(80, 0, 185);
    color: #fff;
    width: 80px;
    text-align: center;
}

.ivu-input-number-handler-wrap {
    opacity: 1 !important;
}
.cart-btn:hover {
    background-color: rgb(255, 145, 0);
    color: #fff !important;
} 
.cart-btn small:hover {
    color: #fff !important;
} 

.card-footer-cart{
    background-color: rgba(28, 0, 54, 0.918) !important;
    color: rgb(255, 255, 255) !important;
    border: 0.5px solid rgb(0 0 0);
    cursor: pointer;
    font-weight: 600;
}
.card-footer-cart:hover {
    color: rgb(255, 255, 255) !important;
    background: rgba(100, 5, 252, 0.747) !important;
    border: .5px solid rgb(61, 0, 122);
    cursor: pointer;
}

.form-select {
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 1rem;
    font-size: 0.8rem;
    line-height: 1.5;
    color: #212529;
    background-color: #f8fafc;
    background-position: right rem center;
    background-size: 8px 10px;
    background-position: right 0.4rem center;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
}
.form-control {
    line-height: 1.5;
    font-size: 0.8rem;
}

.text1-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>