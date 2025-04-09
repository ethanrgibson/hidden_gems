<script setup>
import Quill from '@/components/Quill.vue';
import { blogsService } from '@/services/BlogsService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

<<<<<<< HEAD
onMounted(() => {
  getActiveBlogById()
})

async function getActiveBlogById() {
=======
onMounted(()=>{
  getActiveBlogById()
})

async function getActiveBlogById(){
>>>>>>> 35bd451 (active blog no display watcher)
  try {
    const blogId = route.params.blogId
    await blogsService.getBlogById(blogId)
  }
<<<<<<< HEAD
  catch (error) {
=======
  catch (error){
>>>>>>> 35bd451 (active blog no display watcher)
    Pop.error(error);
  }
}
</script>


<template>
  <div class="bg-light yeet">
    <Quill />

  </div>
</template>


<style lang="scss" scoped>
.yeet {
  height: 60dvh;
}
</style>