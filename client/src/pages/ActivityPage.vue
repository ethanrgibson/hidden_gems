<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import { blogsService } from '@/services/BlogsService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';


onMounted(() => {
  getAllBlogs()
})


const route = useRoute()

const campingBlogs = computed(() => {
  return AppState.blogs.filter(blog => blog.category == 'camping')
})
const hikingBlogs = computed(() => {
  return AppState.blogs.filter(blog => blog.category == 'hiking')
})
const overLandingBlogs = computed(() => {
  return AppState.blogs.filter(blog => blog.category == 'overlanding')
})

async function getAllBlogs() {
  try {
    await blogsService.getAllBlogs()
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <section>
    <div v-if="route.params.activityName == 'camping'">
      Waht's up campers?
      <div>
        <div v-for="b in campingBlogs" :key="b.id" class="col-md-12">
          <BlogCard v-if="b.isPublished" :blogProp="b" />
        </div>
      </div>
    </div>
    <div v-if="route.params.activityName == 'hiking'">
      Whats up hikers?
      <div>
        <div v-for="b in hikingBlogs" :key="b.id" class="col-md-12">
          <BlogCard v-if="b.isPublished" :blogProp="b" />
        </div>
      </div>
    </div>
    <div v-if="route.params.activityName == 'overlanding'">
      <div class="container-fluid">
        <div class="row justify-content-center cover-img">
          <div class="col-md-12">
            <div class="d-flex justify-content-end align-items-center p-3">
              <div class="text-white px-5">
                <div class="text-overlay">
                  <h1>All Things Overlanding</h1>
                  <div class="text-end">
                    <span>See What's Popular...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-light">
        <div class="row">
          <div class="col-12">
            <div class="my-3 p-2">
              <div class="border-bottom border-warning">
                <h2>Explore Top Blogs</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="b in overLandingBlogs" :key="b.id" class="col-md-12">
        <BlogCard v-if="b.isPublished" :blogProp="b" />
      </div>
    </div>


  </section>
</template>



<style lang="scss" scoped>
.cover-img {
  background-image: url('https://images.unsplash.com/photo-1625834509314-3b12c6153624?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  min-height: 75dvh;
}

.text-overlay {

  text-shadow: 1px 1px 4px black;

}
</style>