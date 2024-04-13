<template>
    <div>

      <div v-if="isLoading" class="preloader">
          <div class="loader"></div>
      </div>

      <section>
        <div class="container-fluid m-x bg-x">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-sm-12 col-md-8 col-lg-6 col-xl-5 mt-5">

                <div class="text-center mb-4">
                  <img src="/img/logo_white.png" class="" height="70" alt="">
                </div>

                <div class="card bg-card shadow">
  
                  <h3 class="fw-bold mb-2 text-dark fw-bold p-3 text-center rounded-two bg-white">Register Your Account</h3>
  
                  <div class="card-body p-2 p-md-5 text-center">
  
                    <div class="my-md-2">
  
                      <p class="text-light"><span class="text-danger">* </span> Please Enter All Information Correctly <span class="text-danger"> *</span></p>
  
                      <div class="form-floating mb-3 mt-5">
                        <input type="text" v-model="data.name" name="name" class="form-control rounded" id="floatingInput" placeholder="Md Jahid Hasan">
                        <label for="floatingInput" max="20" class="text-dark">Full Name <span class="text-danger">*</span></label>
                        <div class="text-danger text-start mt-2" v-if="errors['name']">
                          {{errors['name'][0]}}
                        </div>
                      </div>
  
                      <div class="form-floating mb-3">
                        <input type="email" v-model="data.email" name="email" class="form-control rounded" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput" class="text-dark">Email address <span class="text-danger">*</span></label>
                        <div class="text-danger text-start mt-2" v-if="errors['email']">
                          {{errors['email'][0]}}
                        </div>
                      </div>
  
                      <div class="form-floating mb-3">
                        <input type="text" v-model="data.mobile" name="mobile" class="form-control rounded" id="floatingInput" placeholder="+8801733454648">
                        <label for="floatingInput" class="text-dark">Mobile Number<span class="text-danger">*</span></label>
                        <div class="text-danger text-start mt-2" v-if="errors['mobile']">
                          {{errors['mobile'][0]}}
                        </div>
                      </div>
  
                      <div class="form-floating mb-4">
                        <input type="text" v-model="data.password" name="password" class="form-control rounded" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword" class="text-dark">Choose a Password<span class="text-danger">*</span></label>
                        <div class="text-danger text-start mt-2" v-if="errors['password']">
                          {{errors['password'][0]}}
                        </div>
                      </div>
  
                      <button @click="register" class="btn btn-success btn-lg px-5 fw-bold" type="submit">
                        <span v-if="this.loading2">Confirm</span>
                        <span v-else>Please Wait...</span>
                      </button>

                      <p class="pt-3 pb-0 small text-light">Already have account?<a class="text-primary mx-2" @click.prevent="loginUser">Click here</a></p> 
  
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Subscriber  Modal -->
      <Modal v-model="confirmationModal"  :mask-closable="false"  class="vertical-modal" width="500" footer-hide>
          <div class="p-3 text-center">
            <p class="text text-white p-3">We have sent you a confirmation code to this <span class="text-primary fw-bold">{{ data.email }}</span> email address. Please verify your email address and continue register. </p>
            <div class="form-floating m-3">
              <input type="text" v-model="data.confirmation_code_match" name="confirmation_code_match" class="form-control form-control-sm" id="confirmation_code_match" placeholder="Enter Confirmation Code">
              <label for="confirmation_code_match" max="20" class="text-dark">Enter Confirmation Code<span class="text-danger">*</span></label>
              <div class="text-danger text-start mt-2" v-if="errors['confirmation_code_match']">
                {{errors['confirmation_code_match'][0]}}
              </div>
            </div>
  
            <button @click.prevent="confirm" class="btn btn-primary px-5 fw-bold mt-3" type="submit">
              <span v-if="this.loading">Register</span>
              <span v-else>Saving Account</span>
            </button>
  
          </div>
      </Modal>
  
      <div>
          <div class="col-12 m-0 p-0">
            <footerMenu></footerMenu>
          </div>
      </div>

      <div class="back-to-shop">
          <router-link to="/">
              <img src="img/back-to-shopping.png" class="back-to-shop-img" alt="">
          </router-link>
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
        return{
          isLoading: true,
          data:{
            confirmation_code: '',
            confirmation_code_match: '',
            name:'',
            email:'',
            mobile:'',
            password:''
          },
          errors:[],
          loading: true,
          loading2: true,
          confirmationModal: false,
        }
      },
  
      methods:{
  
        async confirm(){
          this.loading = false;
          const res = await this.callApi("post", "/api/registerAccountConfirm", this.data);
            if(res.status === 200){
                this.successMsg("Your Account Has Been Registered");
                this.confirmationModal = false;
                this.errors= {};
                this.loading = true;
                window.location = '/user-login';
            }else {
                if(res.status === 401){
                    this.loading = true;
                    this.errorMsg(res.data.msg);
                }else if (res.status === 422) {
                    this.loading = true;
                    for(let i in res.data.errors){
                    this.errors = res.data.errors
                  }
                }
                else {
                  this.loading = true;
                  this.errorMsg('Something went wrong! Reload the Page and try again');
                }
            }
        },
        
        async register(){
          this.loading2 = false;
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          let result = "";
          for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
          }
          this.data.confirmation_code = result;
  
          const res = await this.callApi("post", "/api/registerAccount", this.data);
            if(res.status === 200){
                this.confirmationModal = true;
                this.loading2 = true;
                this.errors= {};
            }else {
                if(res.status === 401){
                    this.errorMsg(res.data.msg);
                    this.loading2 = true;
                }else if (res.status === 422) {
                    for(let i in res.data.errors){
                    this.errors = res.data.errors
                  }
                  this.loading2 = true;
                }
                else {
                  this.loading2 = true;
                  this.errorMsg('Something went wrong! Reload the Page and try again');
                }
            }
          },

        async loginUser(){
          this.$router.push('/user-login');
        } 
  
  
      },
      
      mounted(){
        this.$store.state.left = false;
      },
      
      created(){
        setTimeout(() => {
            this.isLoading = false;
        }, 500);    
      }
  }
  </script>
  
  <style scoped>

  .bg-card {
    background-repeat: no-repeat;
    background-position: center center;
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.703), rgba(0, 0, 0, 0.741)), url("/assets/regiserBack.webp");
    border: 3px solid #047166;
    position: relative;
    border-radius: 15px;
  }
  .bg-x {
    background-repeat: no-repeat;
    background-position: center center;
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.703), rgba(0, 0, 0, 0.741)), url("/assets/regiserBack.webp");
    width: 100vw;
  }
  
  .rounded-two{
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  
  </style>