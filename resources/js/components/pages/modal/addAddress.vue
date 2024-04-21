<template>

    <div>
         
        <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">

                <div class="modal-header">
                    <h1 class="modal-title fs-5 fw-bold text-dark" id="exampleModalLabel"><b-icon-geo class="d-inline text-success me-2 my-auto" width="18" height="18"></b-icon-geo>Add Address Details</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body p-3">
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <select class="form-select bg-white" id="city" aria-label="Floating label select example" v-model="selectedCity" @change="updateAreas">
                                    <option disabled value="">Select City</option>
                                    <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
                                </select>
                                <label class="text-dark" for="city">City <span class="text-danger">*</span> </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <select class="form-select bg-white" id="area" aria-label="Floating label select example" v-model="selectedArea">
                                    <option disabled value="">Select Area</option>
                                    <option v-for="area in filteredAreas" :key="area.id" :value="area.id">{{ area.name }}</option>
                                </select>
                                <label class="text-dark" for="area">Area <span class="text-danger">*</span> </label>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control bg-white" id="house" placeholder=" ">
                                <label class="text-dark" for="house">House No <span class="text-danger">*</span> </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control bg-white" id="floor" placeholder=" ">
                                <label class="text-dark" for="floor">Floor No <span class="text-danger">*</span> </label>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control bg-white" id="sector" placeholder=" ">
                                <label class="text-dark" for="sector">Block/Sector <span class="text-danger">*</span> </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control bg-white" id="flat" placeholder=" ">
                                <label class="text-dark" for="flat">Flat No <span class="text-danger">*</span> </label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control bg-white" id="Street" placeholder=" ">
                                <label class="text-dark" for="Street">Road/Street <span class="text-danger">*</span> </label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control bg-white" id="name" placeholder=" ">
                                <label class="text-dark" for="name">Name <span class="text-danger">*</span> </label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-floating">
                                <input type="text" class="form-control bg-white" id="phone" placeholder=" ">
                                <label class="text-dark" for="phone">Phone <span class="text-danger">*</span> </label>
                            </div>
                        </div>
                         
                    </div>
                     
                </div>

                <div class="p-3 d-flex justify-content-center">
                    <button type="button" class="card-btn btn rounded-2">Save Address</button>
                </div>
                
                </div>
            </div>
        </div>

    </div>

</template>

<script>

export default {
  data() {
    return {

      cities: [
        { id: 1, name: 'Dhaka' },
        { id: 2, name: 'Chittagong' },
        // Add more cities here
      ],

      areas: [
        { id: 1, cityId: 1, name: 'Gulshan' },
        { id: 2, cityId: 1, name: 'Dhanmondi' },
        { id: 3, cityId: 2, name: 'Agrabad' },
        { id: 4, cityId: 2, name: 'Halishahar' },
        // Add more areas here
      ],

      selectedCity: '',
      selectedArea: ''

    };
  }, 

  computed: {

    filteredAreas() {
      return this.areas.filter(area => area.cityId === parseInt(this.selectedCity));
    }

  },

  methods: {
    updateAreas() {
      this.selectedArea = ''; // Reset selected area when city changes
    }
  }

}

</script>

<style scoped>
 
</style>