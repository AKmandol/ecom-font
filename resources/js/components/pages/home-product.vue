<template>
    <div>
        <div v-if="isLoading" class="preloader">
            <div class="loader"></div>
        </div>

        <div class="container-fluid m-x">
           

            <div class="row main-bg">

                <!-- <div class="col-lg-5 text-center"> 
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
                </div> -->

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

        <div class="container my-4">
            <div class="row">
                <h5 class="text-dark text-start mb-2 px-0 fw-bold"><b-icon-arrows-move class="d-inline text-danger me-2 my-auto" width="22" height="22"></b-icon-arrows-move>Categories</h5>
                
                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p1.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Half Sleeve T-Shirt</p>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p2.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Full Sleeve T-Shirt</p>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p3.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Polo T-Shirt</p>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p4.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Underwear</p>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p5.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Panjabi</p>
                </div>
                


                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p6.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Half Sleeve T-Shirt</p>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p7.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Full Sleeve T-Shirt</p>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p8.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Polo T-Shirt</p>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p9.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Underwear</p>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p10.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Panjabi</p>
                </div>

                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p1.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Half Sleeve T-Shirt</p>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 bg-white border category">
                    <a href="#"><img src="assets/product/p2.png" class="img-fluid" alt=""></a>
                    <p class="text-dark">Full Sleeve T-Shirt</p>
                </div>
            
                <div class="text-center mt-4">
                    <Page :total="30" />
                </div>
                
                
            </div>
        </div>

        <div class="container my-4">
            <div class="row">
                <h5 class="text-dark text-start mb-2 px-0 fw-bold"><b-icon-trophy class="d-inline text-danger me-2 my-auto" width="22" height="22"></b-icon-trophy>New Arrival</h5>
                
                <div class="col-lg-2 col-md-6">
                    <a href="/single-product">
                        <div class="arrival-main">
                            <img src="assets/product/p1.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Polo T-shirt</P>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <a href="#">
                        <div class="arrival-main">
                            <img src="assets/product/p2.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Underwear</P>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <a href="#">
                        <div class="arrival-main">
                            <img src="assets/product/p3.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Panjabi</P>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <a href="#">
                        <div class="arrival-main">
                            <img src="assets/product/p4.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Full Sleeve T-Shirt</P>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <a href="#">
                        <div class="arrival-main">
                            <img src="assets/product/p5.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Half Sleeve T-Shirt</P>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <a href="#">
                        <div class="arrival-main">
                            <img src="assets/product/p6.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Polo T-shirt</P>
                        </div>
                    </a>
                </div>




                <div class="col-lg-2 col-md-6">
                    <a href="#">
                        <div class="arrival-main">
                            <img src="assets/product/p7.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Polo T-shirt</P>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <a href="#">
                        <div class="arrival-main">
                            <img src="assets/product/p8.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Underwear</P>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <a href="#">
                        <div class="arrival-main">
                            <img src="assets/product/p9.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Panjabi</P>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <a href="#">
                        <div class="arrival-main">
                            <img src="assets/product/p10.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Full Sleeve T-Shirt</P>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <a href="#"> 
                        <div class="arrival-main">
                            <img src="assets/product/p1.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Half Sleeve T-Shirt</P>
                        </div>
                    </a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <a href="#">
                        <div class="arrival-main">
                            <img src="assets/product/p2.png" class="img-fluid" alt="">
                            <P class="arrival-p position-absolute top-0 start-50 translate-middle-x">Polo T-shirt</P>
                        </div>
                    </a>
                </div>
                
                <div class="text-center mt-4">
                    <Page :total="40" />
                </div>

            </div>
        </div>

        <div class="container my-4">
            <div class="row">
                <h5 class="text-dark fw-bold text-start mb-4 px-0"><b-icon-arrow-through-heart-fill class="d-inline text-danger me-2 my-auto" width="22" height="22"></b-icon-arrow-through-heart-fill>Just For You</h5>
                
                <Shop></Shop>
                
            </div>
        </div>

        <div>
            
        </div>

        <div class="mx-auto d-none d-lg-block m-0 p-0">
            <sidebarLeft></sidebarLeft>
        </div>


        <div class="mr-x" :class="this.$store.state.left ? 'left-custom' : 'no-left-cart' ">
            <div class="col-12 m-0 p-0"><footerMenu></footerMenu></div>
        </div>


    </div>
</template>

<script>
import Shop from "./shop.vue";    
import footerMenu from "./footer.vue"
import sidebarLeft from "./sidebar/sidebarLeft.vue"

export default {

    components: {
        Shop,
        footerMenu,
        sidebarLeft
    },

    data() {
        return {
            isLoading: true,
            size: '',
            color: '',
            qty: 1,
            p: false,
            modal: true
        }
    },

    methods: {
        
    },

    mounted(){
        this.$store.state.left = true;
    },

    created(){
        setTimeout(() => {
            this.isLoading = false;
        }, 500);    
    }
}
</script>

<style scoped>

.main-bg{
    background-image: url("/assets/bg/banner.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size:cover;
    padding: 240px 400px;
}

.mr-x{
    margin-left:  0;
    margin-right:  0;
    transition: all .3s ease-in-out;
    padding: 0;
}

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



.text1-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.category{
    transition: all .3s;
    display: flex;
    align-items: center;
}

.category img{
    width: 70px;
    padding: 13px;
}

.category p{
    font-size: 12px;
    white-space: nowrap;
    font-weight: 600;
    justify-content: center;
}

.category:hover{
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2)  !important;
    transform: scale(1.01);
    cursor: pointer; 
}

.arrival-main{
    /* background: #D9DCDF; */
    --s: 50px;
    --c: #ffffff;
    --_s: calc(2 * var(--s)) calc(2 * var(--s));
    --_g: 35.36% 35.36% at;
    --_c: #e4dede00 66%, #e7e7e7 68% 70%, #0000 72%;
    background: radial-gradient(var(--_g) 100% 25%, var(--_c)) var(--s) var(--s) /var(--_s),
    radial-gradient(var(--_g) 0 75%, var(--_c)) var(--s) var(--s) / var(--_s),
    radial-gradient(var(--_g) 100% 25%, var(--_c)) 0 0 / var(--_s),
    radial-gradient(var(--_g) 0 75%, var(--_c)) 0 0 / var(--_s),
    repeating-conic-gradient(var(--c) 0 25%, #0000 0 50%) 0 0 / var(--_s),
    radial-gradient(var(--_c)) 0 calc(var(--s) / 2) / var(--s) var(--s) var(--c);
    /* background-attachment: fixed; */
    
    position: relative;
    margin: 10px 0px ;
    border-radius: 10px;
    transition: all .3s;
}

.arrival-main img{
    padding: 30px;
}

.arrival-main:hover{
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2)  !important;
    transform: scale(1.01);
    border:.5px solid #b6b6b6;
}

.arrival-p{
    color: #212529;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    background: rgb(238, 238, 238);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 4px 15px;
    border-bottom: .5px solid #b6b6b6;
    border-left: .5px solid #b6b6b6;
    border-right: .5px solid #b6b6b6;
}
</style>