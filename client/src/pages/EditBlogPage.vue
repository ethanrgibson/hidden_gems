<script setup>
import { AppState } from '@/AppState.js';
import Quill from '@/components/Quill.vue';
import { blogsService } from '@/services/BlogsService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

onMounted(() => {
  getActiveBlogById()
})
const blog = computed(() => AppState.blog)
async function getActiveBlogById() {
  try {
    const blogId = route.params.blogId
    await blogsService.getBlogById(blogId)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div>
    <h3>{{ blog.title }}</h3>
  </div>
  <div class="bg-light yeet">
    <Quill />

  </div>
</template>


<style lang="scss" scoped>
.yeet {
  height: 60dvh;
}
</style>