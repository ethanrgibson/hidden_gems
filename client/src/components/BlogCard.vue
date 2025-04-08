<script setup>
import { Blog } from '@/models/Blog.js';



defineProps({
  blogProp: { type: Blog, required: true }
})


</script>


<template>
  <RouterLink :to="{ name: 'Active Blog', params: { blogId: blogProp.id } }">

    <div class="d-flex bg-light p-2 my-2 rounded ">
      <div class="px-1 ">
        <img class="activity-tile  " :src="blogProp.coverImg"
          :alt="'a picture for ' + blogProp.creator.name + `'s' post`">
      </div>
      <div class="w-100">
        <div class="border-bottom border-5 border-warning mb-2">
          <h3>{{ blogProp.title }}</h3>
        </div>
        <div class="d-flex px-2 justify-content-bottom align-items-baseline gap-2  ">
          <img class=" profile-img" :src="blogProp.creator.picture" alt="">
          <div class="d-flex pt-2 flex-fill align-items-baseline justify-content-between">
            <span class="fs-4">{{ blogProp.creator.name }}</span>
            <span class="text-gray">Published: {{ blogProp.createdAt.toLocaleDateString() }}</span>
          </div>
        </div>
        <div class="pt-3 ">
          <p><i>{{ blogProp.body }}</i></p>
        </div>
        <div class="d-flex justify-content-end">
          <p>{{ blogProp.createLike }}</p>
          <i class=" fs-4 mdi mdi-campfire"></i>
        </div>
      </div>
    </div>
  </RouterLink>
</template>


<style lang="scss" scoped>
.activity-tile {
  height: 40dvh;
  width: 40dvh;
  object-position: center;
  object-fit: cover;
}

.profile-img {
  height: 2rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
}

a {
  text-decoration: none;
}
</style>