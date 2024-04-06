<template>
  <div class="container">

    <div class="row bg-white border mb-5 mt-50px">

        <div class="py-4 bg-light border rounded-0">
          <h4 class="text-center text-dark">Our Branches</h4>
        </div>

        <div class="col-sm-12 col-md-2 d-flex align-items-center justify-content-center mx-auto bg-light border my-3 h-w-700px">
          <div class="d-grid">
            <a class="text-center text-dark hover-gb bg-white p-2 border my-1">Uttra Branch</a>
            <a class="text-center text-dark hover-gb bg-white p-2 border my-1">Gazipur Branch</a>
            <a class="text-center text-dark hover-gb bg-white p-2 border my-1">Saver Branch</a>
            <a class="text-center text-dark hover-gb bg-white p-2 border my-1">Dhanmondhi Branch</a>
            <a class="text-center text-dark hover-gb bg-white p-2 border my-1 active">Main Branch</a>
            <a class="text-center text-dark hover-gb bg-white p-2 border my-1">Framgate Branch</a>
            <a class="text-center text-dark hover-gb bg-white p-2 border my-1">Mohakhali Branch</a>
          </div>
        </div>

        <div class="col-sm-12 col-md-9 mx-auto p-0 bg-white border my-3 h-w-700px position-relative">

          <div class="border bg-light py-3">
            <h4 class="text-center text-primary">Our Location</h4>
          </div>

          <div class="map d-flex align-items-center justify-content-center p-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036944850683!2d90.36710723681577!3d23.747050044427667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1663235252398!5m2!1sen!2sbd" width="100%" height="300" style="border:1px solid gray;" allowfullscreen="" loading="" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div class="row p-0 m-0">
          
            <div class="col-sm-12 col-md-12 col-lg-5 mx-auto my-2 bg-light p-2 border shadow-sm">
              <h6 class="p-2 text-start text-primary"><span class="text-dark">Address : </span>Dhanmondi,Dhaka.</h6>
              <h6 class="p-2 text-start text-primary"><span class="text-dark">Road no : </span>Old 27.</h6>
              <h6 class="p-2 text-start text-primary"><span class="text-dark">House no : </span>228/B.</h6>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5 mx-auto my-2 bg-light p-2 border shadow-sm">
              <h6 class="p-2 text-start text-primary"><span class="text-dark">Phone no : </span>+8801733472747</h6>
              <h6 class="p-2 text-start text-primary"><span class="text-dark">Email : </span>amlankumar47@gmail.com</h6>
            </div>

          </div>

          <div class="col d-flex flex-row gap-3 position-absolute bottom-0 start-50 translate-middle-x mb-lg-4">
              <b-icon-facebook width="30" height="30" class="header-icon text-primary"></b-icon-facebook>
              <b-icon-messenger width="30" height="30" class="header-icon text-primary"></b-icon-messenger>
              <b-icon-instagram width="30" height="30" class="header-icon text-danger"></b-icon-instagram>
              <b-icon-whatsapp width="30" height="30" class="header-icon text-success"></b-icon-whatsapp>
              <b-icon-twitter width="30" height="30" class="header-icon text-primary"></b-icon-twitter>
              <b-icon-youtube width="30" height="30" class="header-icon text-danger"></b-icon-youtube>
          </div>

        </div>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .mt-50px {
  margin-top: 100px;
} 
.h-w-700px {
  min-height: 700px;
}

.hover-gb:hover {
  color: #fff !important;
  background: rgb(146, 95, 0) !important;
}

.active {
  color: #fff !important;
  background: rgb(146, 95, 0) !important;
}
</style>