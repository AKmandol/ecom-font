<template>
  <div>
    <!-- Complaint modal -->
    <Modal v-model="this.$store.state.complaintModal" width="500" footer-hide>

        <div class="mb-4">
            <h6 style="color:rgb(63, 63, 63);text-align:left">
                <Icon type="ios-information-circle-outline" size="20" color="black" class="mr-2"></Icon>
                <span>Register a Complaint</span>
            </h6>
        </div>

        <div style="border:0">
            <Upload
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>Click or drag files here to upload</p>
                </div>
            </Upload>

            <div class="form-floating">
                <textarea class="form-control" placeholder="Write Description here" id="floatingTextarea2" style="height: 100px"></textarea>
                <label for="floatingTextarea2">Description <span class="text-muted">(Optional)</span> </label>
            </div>

        </div>

        <div class="mt-4">
            <Button type="primary" size="large" long :loading="complaint_modal_loading" @click="compalint">
                <span v-if="!complaint_modal_loading">Submit</span>
                <span v-else>Loading...</span>
            </Button>
        </div>

    </Modal>
  </div>
</template>

<script>
export default {
    data(){
        return{
            complaint_modal_loading: false,
        }
    },

    methods:{
        compalint(){
            this.complaint_modal_loading = true;
            setTimeout(() => {
                this.successMsg('Compalin registered');
                this.$store.state.complaintModal = false;
            }, 400);

        },
    }
}
</script>

<style>

</style>