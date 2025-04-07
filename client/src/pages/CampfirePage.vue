<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';

onMounted(()=> {
  getAllBlogs()
})

const blogs = computed(()=> {
  if (filterCategory.value == 'all') {
    return AppState.blogs
  }
  return AppState.blogs.filter(blog => blog.category == filterCategory.value )

})


async function getAllBlogs() {
  try {
    await blogsService.getAllBlogs()
  }
  catch (error){
    Pop.error(error,"could not get blogs");
    logger.error('could not get blogs', error)
  }
}

const filterCategory = ref('all')


</script>


<template>
  <section class="container-fluid ">
    <div class="row campfire-bg">
      <div class="col-12">
          <div class="">
            
          </div>
      </div>
    </div>
      <div class="row">
        <div class="col-12 d-flex">
          <div class="col-4 d-flex flex-column flex-grow-1">
            <div>
                <label for="category"></label>
                <select v-model="filterCategory" name="category" id="category">
                  <option value="all">All</option>
                  <option value="camping">Camping</option>
                  <option value="hiking">Hiking</option>
                  <option value="overlanding">Overland</option>
                </select>
            </div>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div v-for="b in blogs" :key="b.id" class="col-12">
                <BlogCard :blogProp="b"/>
              </div>

            </div>
          </div>
          <!-- NOTE copying our Code Emperor Jake's style of using the first character -->
        </div>
        </div>
  </section>
</template>


<style lang="scss" scoped>
.campfire-bg{
  background-image: url('https://images.unsplash.com/photo-1627490601633-1b45a55e13b6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  min-height: 75dvh;
}

</style>