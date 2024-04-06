
export default {

  data(){
    return {
       
    }
  },  

  methods: {

    successMsg (title) {
        this.$Notice.success({
            title: title,
        });
    },

    errorMsg (title) {
        this.$Notice.error({
            title: title,
        });
    },

    infoMsg(title) {
        this.$Notice.info({
            title: title,
            desc: desc,
            top: 300,
            duration: 3
        });
    },
      
  },

  

}
