<template>
  <div>
    
    <!-- <nav v-show="this.$route.name != '/home'" class="pt-3 mt-5" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;); height:fit-content; width:100%" aria-label="breadcrumb">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item" aria-current="page">Shop</li>
      <li class="breadcrumb-item active" aria-current="Category-name">Category-name</li>
      </ol>
    </nav> -->

    <!-- <div class="container">
      <div class="row justify-content-center gap-1 border shadow rounded">

        <div class="d-flex border-custom-rd justify-content-start aling-items-center rounded p-3">
          <b-icon-box-arrow-in-right class="text-white my-auto mx-2" width="20" height="20" ></b-icon-box-arrow-in-right>
          <div class="ml-2 fs-5 text-white my-auto">All From Category Name One</div>
          <b-icon-arrow-repeat class="text-white my-auto ms-auto mx-2" width="20" height="20" ></b-icon-arrow-repeat>
        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>



        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>
        
      </div>

      <div class="row justify-content-center gap-1 border shadow rounded my-4">

        <div class="d-flex border-custom-rd justify-content-start aling-items-center rounded p-3">
          <b-icon-box-arrow-in-right class="text-white my-auto mx-2" width="20" height="20" ></b-icon-box-arrow-in-right>
          <div class="ml-2 fs-5 text-white my-auto">All From Category Name Two</div>
          <b-icon-arrow-repeat class="text-white my-auto ms-auto mx-2" width="20" height="20" ></b-icon-arrow-repeat>
        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p6.png"  alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name1</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p2.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p3.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p4.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p5.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>



        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p2.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p3.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p7.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p10.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside size="small" :min="1"/>
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="size" label="Select Size" size="small">
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
            </div>
            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
              <Select v-model="color" label="Select Color" size="small">
                <Option value="Red" label="Red">
                    <span>Red</span>
                </Option>
                <Option value="Black" label="Black">
                    <span>Black</span>
                </Option>
                <Option value="White" label="White">
                    <span>White</span>
                </Option>
            </Select>
            </div>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        
      </div>
    </div> -->

    <div class="container m-0 p-0">
      <div class="row justify-content-center border bg-light rounded gap-1">

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p2.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p3.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p4.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p5.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p6.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>



        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p7.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p8.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p9.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p10.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p1.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>

        <div class="col-md-2 rounded card-main my-3 d-flex flex-column">

          <img class="card-image rounded" src="assets/product/p2.png"   alt="...">
          <div class="mini-detais">
            <h5 class="text-center text-dark h-40px">Product Name</h5>
            <h6 class="text-center text-danger h-20px">$404</h6>
            <button class="card-btn btn rounded-2 col-12 fw-bold" @click="sideCartOpen">Add to cart</button>
          </div>

          <div class="card-overlay rounded d-flex flex-column align-items-center justify-content-between">
            <div class="text-light">
              <kbd>Add details</kbd>
            </div>

            <div class="text-dark text-center col-8">
              <p class="text-sm text-white fw-semibold">Qty</p>
              <InputNumber v-model="qty" controls-outside class="w-100" :min="1"/>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Size</p>
              <Select v-model="model" placeholder="Select Size" class="col">
                  <Option value="M" >
                      <span class="text-dark">M</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:38, <Span class="text-dark ml-1">L</Span>:27.5, <Span class="text-dark">S</Span>:8.5</span>
                  </Option>
                  <Option value="L" >
                      <span class="text-dark">L</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:40.5, <Span class="text-dark ml-1">L</Span>:28, <Span class="text-dark">S</Span>:8.75</span>
                  </Option>
                  <Option value="XL" >
                      <span class="text-dark">XL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:43, <Span class="text-dark ml-1">L</Span>:29, <Span class="text-dark">S</Span>:9</span>
                  </Option>
                  <Option value="XXL" >
                      <span class="text-dark">XXL</span>
                      <span style="float:right;color:#808080; padding: 5px; font-size:10px; "><Span class="text-dark">C</Span>:45, <Span class="text-dark ml-1">L</Span>:30, <Span class="text-dark">S</Span>:9.25</span>
                  </Option>
      
              </Select>
            </div>
            <div class="text-dark col-8">
              <p class="text-sm text-white fw-semibold">Color</p>
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

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn view-cart-btn py-1 text-white rounded-2 col-12">View full details <span class="text-warning ml-1"> >> </span> </button>
          </div>

        </div>


        <div class="text-center my-2">
                    <Page :total="20" />
                </div>
        
      </div>
    </div>
   
  </div>
</template>

<script>
  
export default {

  data(){
    return {
      RightCartSlide: false,
      size: [],
      color: [],
      qty: 1
    };

  },

  methods: {
    sideCartOpen () {
        this.successMsg('Item Added to Cart');
        this.$store.dispatch("openSideCart", this.RightCartSlide)
        //this.RightCartSlide = !this.RightCartSlide;
    },

  },

  computed:{
    // console: () => console,
    // window: () => window,
  },

  created(){
   // console.log(this.$route.name);
  }

}
</script>

<style scoped>
.border-custom-rd{
    background: #034e46;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}
.ivu-icon {
  color: #000 !important;
  font-size:16px !important;
}

.card-main {
  position: relative;
  height: 300px;
  width: 200px;
  border: 4px solid rgb(223 223 223);
  background: #fff;
}
.card-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 200px;
  height: 200px;
}

.view-cart-btn {
  background: #000;
  border: .5px solid #fff;
  padding: 3px;
}

.view-cart-btn:hover {
  background: rgb(58, 0, 151);
  border: 1px solid rgb(227, 200, 255);
}

.mini-detais {
  position: absolute;
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
}

.h-40px {
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.h-20px {
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-overlay {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 187px;
  height: 247px;
  background: rgba(15, 10, 0, 0.74);
  opacity: 0;
  transition: opacity 1s;
}

.card-overlay:hover {
  opacity: 1;
}

</style>