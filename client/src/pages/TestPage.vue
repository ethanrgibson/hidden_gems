<script setup>

import Quill from '@/components/Quill.vue';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const editableBlogData = ref({
  title: '',
  coverImg: '',
  body: 'Have fun and remember to save often',
  category: 'camping',
})


async function createBlog() {
  try {
    const blogData = editableBlogData.value
    await blogsService.createBlog(blogData)
  }
  catch (error){
    Pop.error(error, 'could not create blog');
    logger.error('could not create blog', error)
  }
}
</script>


<template>
  <form @submit.prevent="createBlog()">
    <div class="mb-3">
      <label for="blogTitle">Blog Title</label>
      <input v-model="editableBlogData.title" id="blogTitle" name="title" type="text" required maxlength="50" minlength="3"
        placeholder="Title...">
    </div>
    
    <div class="mb-3">
      <label for="blogImgUrl">blog Image URL</label>
      <input v-model="editableBlogData.coverImg" id="blogImgUrl" name="imgUrl" type="url" required maxlength="500"
        placeholder="Image URL...">
    </div>
    <div class="d-flex justify-content-between">
      <div class="mb-3">
        <label for="blogCategory">Category</label>
        <select v-model="editableBlogData.category" name="blogCategory" id="category">
          <option value="camping">Camping</option>
          <option value="hiking">Hiking</option>
          <option value="overlanding">Overland</option>
        </select>
      </div>
    </div>
    <div class="">
      <button class="btn btn-outline-danger me-2" type="reset">
        Reset Form
      </button>
      <button class="btn btn-outline-dark" type="submit">
        Submit
      </button>
    </div>
  </form>






  
  <div class="bg-light">
    <Quill />
  </div>
</template>


<style lang="scss" scoped>

</style>