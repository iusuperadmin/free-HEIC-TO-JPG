<template>
  <div id="app">
    <Uploader />
  </div>
</template>

<script>
import Uploader from './components/Uploader.vue'

export default {
  name: 'App',
  components: {
    Uploader
  }
}
</script>
<style scoped>

  #app{ 
    margin: 200px;
  }

</style>