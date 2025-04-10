<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import ExploreTopBlogsComponent from '@/components/ExploreTopBlogsComponent.vue';
import { blogPicturesService } from '@/services/BlogPicturesService.js';
import { blogsService } from '@/services/BlogsService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()


watch(route, () => {
  getAllBlogs()
  getFeaturedPictures()
}, { immediate: true })

const blogs = computed(() => AppState.blogs)
const featuredPictures = computed(() => AppState.blogPictures)


async function getAllBlogs() {

  const activityName = route.params.activityName

  try {
    await blogsService.getBlogByCategory(activityName)
  }
  catch (error) {
    Pop.error(error);
  }
}

async function getFeaturedPictures() {
  try {
    await blogPicturesService.getFeaturedPictures()
  }
  catch (error) {
    Pop.error(error);
  }

}

</script>


<template>
  <section>
    <div v-if="route.params.activityName == 'camping'">
      <div class="container-fluid">
        <div class="row justify-content-center camping-cover-img">
          <div class="col-md-12">
            <div class="d-flex justify-content-end align-items-center p-3">
              <div class="text-white px-5">
                <div class="text-overlay">
                  <h1>All Things Camping</h1>
                  <div class="text-end">
                    <span>See What's Going On...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExploreTopBlogsComponent />
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div v-for="b in blogs" :key="b.id" class="col-md-9">
            <BlogCard :blogProp="b" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="route.params.activityName == 'hiking'">
      <div class="container-fluid">
        <div class="row justify-content-center hiking-cover-img">
          <div class="col-md-12">
            <div class="d-flex justify-content-end align-items-center p-3">
              <div class="text-white px-5">
                <div class="text-overlay">
                  <h1>All Things Hiking</h1>
                  <div class="text-end">
                    <span>See What's Going On...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExploreTopBlogsComponent />
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div v-for="b in blogs" :key="b.id" class="col-md-9">
            <BlogCard :blogProp="b" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="route.params.activityName == 'overlanding'">
      <div class="container-fluid">
        <div class="row justify-content-center overlanding-cover-img">
          <div class="col-md-12">
            <div class="d-flex justify-content-end align-items-center p-3">
              <div class="text-white px-5">
                <div class="text-overlay">
                  <h1>All Things Overlanding</h1>
                  <div class="text-end">
                    <span>See What's Going On...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExploreTopBlogsComponent />
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div v-for="b in blogs" :key="b.id" class="col-md-9">
            <BlogCard :blogProp="b" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container-fluid bg-light">
    <div class="row">
      <div class="col-12">
        <div class="my-3 p-2">
          <div class="border-bottom border-warning">
            <p class="fs-2">Featured Pictures</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div class="container">
      <div class="row">
        <div v-for="picture in featuredPictures" :key="picture.id" class="col-md-4 p-0">
          <div class="my-2">
            <img :src="picture.imgUrl" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TODO get the mapbox loaded in here -->
</template>



<style lang="scss" scoped>
.overlanding-cover-img {
  background-image: url('https://images.unsplash.com/photo-1625834509314-3b12c6153624?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  min-height: 75dvh;
}

.hiking-cover-img {
  background-image: url('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  min-height: 75dvh;
}

.camping-cover-img {
  background-image: url('https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  min-height: 75dvh;
}

.text-overlay {

  text-shadow: 1px 1px 4px black;

}
</style>