<script setup>
import { Blog } from '@/models/Blog.js';

defineProps({
  blogProp: {type: Blog, required: true}
})
</script>


<template>
  <div>
    <div>
      <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D" :alt="'a picture for ' + blogProp + `'s' post`">
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>