<template>
  <div>
  <form @submit.prevent="onSubmit" enctype="multipart/form-data">
    
      <div class="fields">
        <label>Uploader</label>
        <input type="file" ref="file" v-on:change="onSelect">
      </div>
      <div class="fields">
        <button>Submit</button>
      </div>
  </form>
    <div>
      <h5>{{message}}</h5>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'Uploader',
  data(){ 
    return {
      file: "",
      message: "Waiting..."
    }
  },
  props: {
    msg: String
  },
  methods: {

    async onSubmit(){
      const formData = new FormData();
      formData.append("file", this.file);

      try{
        await Axios.post('/upload', formData);
        this.message = "Uploaded successfully!";
      }
      catch(err){
        console.log(err);
        this.message = "Something went wrong!";
      }

    },

    onSelect(){
      const file = this.$refs.file.files[0];
      this.file = file;
    }

  }
}
</script>