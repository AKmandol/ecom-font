<template>
    <div>
  
        <div v-if="isLoading" class="preloader">
            <div class="spinner"></div>
        </div>

        <div class="container-fluid mt-80">
            <div class="row">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores recusandae labore corrupti sequi, cum numquam veniam, soluta nemo eius culpa quasi distinctio animi modi pariatur facere ex blanditiis iusto!</p>
            </div>
        </div>
       

        <div>
            <footerMenu></footerMenu>
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
        return {
            isLoading: true,
            loading: false,
            errors:{},
            about:null,
            faq:null,
            value:1,

            formValidate: {
                name: '',
                email: '',
                phone: '',
                msg: ''
            },
        }
    },

    methods: {

        hasError(fieldName){
            return (fieldName in this.errors);
        },
    },

    mounted(){
        this.$store.state.left = false;
    },

    async created(){
        
    }

}

</script>
  
<style scoped>

@media(max-width: 765px){
    .p-x{
        padding-top: 65px;
    }
}

.mt-80{
    margin-top: 80px;
}
</style>