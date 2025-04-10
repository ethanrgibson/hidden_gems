<script setup>
import { AppState } from '@/AppState.js';
import { blogsService } from '@/services/BlogsService.js';
import { likeService } from '@/services/LikeService.js';
import { logger } from '@/utils/Logger.js';
import Quill from "quill";
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()

const router = useRouter()

const blog = computed(() => AppState.blog)

const account = computed(() => AppState.account)

const blogContent = ref('')
// need to get watch to convert the body back into html and then display it as raw html. 
watch(blog, () => {
  const hiddenEditor = new Quill('#hidden-editor')
  hiddenEditor.setContents(JSON.parse(blog.value.body))
  blogContent.value = hiddenEditor.getSemanticHTML().replaceAll('&nbsp;', ' ')
})
const likerProfiles = computed(() => AppState.likerProfiles)



onMounted(() => {
  getBlogById()
  getLikesByBlogId()
})

async function getBlogById() {
  try {
    const blogId = route.params.blogId
    await blogsService.getBlogById(blogId)
    logger.log(`Getting blog with the id of`, blogId)
  } catch (error) {
    Pop.error(error, `could not get blog`)
    logger.error(`couldn't get blog`, error)
  }
}
async function deleteBlog() {
  try {
    const confirmed = await Pop.confirm('Deleting blog', 'are you sure you would like to delete this blog?', 'yes', 'no')
    if (!confirmed) {
      return
    }
    const blogId = route.params.blogId
    await blogsService.deleteBlog(blogId)
    router.push({ name: 'Campfire', })
  }
  catch (error) {
    Pop.error(error);
  }
}
async function publishBlog() {
  try {
    const confirmed = await Pop.confirm('Publishing Blog', 'Are you sure you want to publish? this will post your blog to the Campfire for all to see', 'yes', 'no')
    if (!confirmed) {
      return
    } const blogId = route.params.blogId
    await blogsService.publishBlog(blogId)
  }
  catch (error) {
    Pop.error(error);
  }
}

async function createLike() {
  try {
    const likeData = { type: 'Blog', otherId: route.params.blogId }
    logger.log(`likeData`, likeData)
    await likeService.createLike(likeData)
  } catch (error) {
    Pop.error(error, `no likes yet`)
    logger.error(`COULD NOT CRATE LIKE `)
  }
}

async function getLikesByBlogId() {
  try {
    const blogId = route.params.blogId
    await likeService.getLikesByBlogId(blogId)
  } catch (error) {
    Pop.error(error, `Could not get liker`)
    logger.error(`could not  get likers by id`, error)
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
          <span class="mt-5 fs-4  text-center">
            {{ blog.creator.name }}
          </span>
          <img class="creator-img" :src="blog.creator.picture" alt="">
          <div class=" text-end fs-1 p-3 text-danger">
            <span>0</span>
            <i class="mdi mdi-campfire"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="container p-2">
    <div class="row">
      <div class="col-12">
        <span v-if="account?.id == blog?.creatorId">
          <RouterLink :to="{ name: 'Edit Blog', params: { blogId: route.params.blogId } }">
            <button class="shadow justify-content-end btn btn-orange ms-1">Edit</button>
          </RouterLink>
          <button @click="publishBlog()" class="shadow justify-content-end btn btn-orange ms-1">Publish</button>
          <button @click="deleteBlog()" class="shadow justify-content-end btn btn-orange ms-1">Delete</button>
        </span>
      </div>
    </div>
  </div>
  <div v-if="blog" class="container">
    <div class="">
      <div class="text-center">
        <i class="  fs-2 mdi mdi-arrow-left-bold-box"></i>
        <img class=" shadow main-image-here my-3" :src="blog.coverImg" alt="camp">
        <span class=" fs-2 mdi mdi-arrow-right-bold-box"></span>
      </div>
    </div>
  </div>





  <section class="container">
    <div class="row">
      <div class="col-12">
        <div id="hidden-editor" class="d-none"></div>
        <div v-if="blog" class=" p-2 mb-2 shadow bg-light text-bg">
          <div class="text-break" v-html="blogContent"></div>
        </div>
      </div>
    </div>
    <div>
      <!--NOTE JUSTIN YOUR STUFF IS HERE::: v-if="account" @click="createLike()" -->
      <button class="btn btn-orange rounded-pill" v-if="account">like
        me</button>

    </div>
  </section>
  <!-- <Map(Components /> -->


</template>



<style lang="scss" scoped>
.main-image-here {
  height: 35dvh;

}

.creator-img {
  height: 3rem;
  border-radius: 50%;
}
</style>