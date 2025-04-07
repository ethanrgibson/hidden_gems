<script setup>
import { AppState } from '@/AppState.js';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const blog = computed(() => AppState.blog)

onMounted(() => {
  getBlogById()
})

async function getBlogById() {
  try {
    const blogId = route.params.blogId
    await blogsService.getBlogById(blogId)
    logger.log(`no blogs man`)
  } catch (error) {
    Pop.error(error, `get no blogs`)
    logger.error(`couldn't get blogs`, error)
  }
}

</script>


<template>
  <div v-if="blog" class="container">
    <div class="row">
      <div class="col-12 ">
        <div class="text-center p-1">
          <h1 class="fw-bold">{{ blog.title }}</h1>
        </div>
        <div class="text-center">
          <span class="mt-5  text-center">
            {{ blog.creator.name }}
          </span>

          <div class=" text-end fs-1 p-3 text-danger">
            <i class="mdi mdi-campfire"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="container p-2">
    <div class="row d-flex">
      <div class="col-12">

        <div col-12 class="">
          <span>
            <button class="shadow justify-content-end btn btn-orange ms-1">Edit</button>
            <button class="shadow justify-content-end btn btn-orange ms-1">save</button>
            <button class="shadow justify-content-end btn btn-orange ms-1">Publish</button>
            <button class="shadow justify-content-end btn btn-orange ms-1">Delete</button>
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="">
      <div class="text-center">
        <i class="  fs-2 mdi mdi-arrow-left-bold-box"></i>
        <img class=" shadow main-image-here my-3" :src="blog.coverImg" alt="camp">
        <span class=" fs-2 mdi mdi-arrow-right-bold-box"></span>
      </div>
    </div>
  </div>






  <div class="container text-shadow bg-light text-bg">
    <div class="text-center">
      <p class="text-center my-5  text-shadow p-3 text-bg">
        {{ blog.body }}
      </p>
    </div>
  </div>
  <!-- <MapComponents /> -->
</template>



<style lang="scss" scoped>
.main-image-here {
  height: 35rem;
}
</style>