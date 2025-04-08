<script setup>
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';
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
    editableBlogData.value = {
      title: '',
      coverImg: '',
      body: 'Have fun and remember to save often',
      category: 'camping',}
    Modal.getOrCreateInstance('#blogModal').hide()
  }
  catch (error){
    Pop.error(error, 'could not create blog');
    logger.error('could not create blog', error)
  }
}
</script>


<template>
<div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-dark text-light">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="blogModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
      </form>
      </div>
    </div>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>