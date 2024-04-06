<template>
  <div>
    
    <!-- <nav v-show="this.$route.name != '/home'" class="pt-3 mt-5" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;); height:fit-content; width:100%" aria-label="breadcrumb">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item" aria-current="page">Shop</li>
      <li class="breadcrumb-item active" aria-current="Category-name">Category-name</li>
      </ol>
    </nav> -->

    <div class="container">
      <div class="row justify-content-center gap-1 bg-light-cus rounded">

        <div class="d-flex border-custom-rd justify-content-start aling-items-center rounded p-3">
          <b-icon-box-arrow-in-right class="text-white my-auto mx-2" width="20" height="20" ></b-icon-box-arrow-in-right>
          <div class="ml-2 fs-5 text-white my-auto">All From Category Name One</div>
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

      <div class="row justify-content-center gap-1 bg-light-cus rounded my-4">

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

.card-btn {
  color: #fff;
  background: rgba(28, 0, 54, 0.918);
  border: 0.5px solid rgb(0 0 0);
  margin-left: 2px;
  padding: 0;
  height: 40px;
  width: 187px;
}

.card-btn:hover {
  color: rgb(255, 255, 255);
  background: rgba(100, 5, 252, 0.747);
  border: .5px solid rgb(61, 0, 122);
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