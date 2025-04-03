<script setup>
import { Blog } from '@/models/Blog.js';

defineProps({
  blogProp: {type: Blog, required: true}
})
</script>


<template>
  <div class="d-flex bg-light p-2 my-2 rounded">
    <div class="px-1 ">
      <img class="activity-tile  " :src="blogProp.coverImg" :alt="'a picture for ' + blogProp.creator.name + `'s' post`">
    </div>
    <div class="">
      <div class="border-bottom border-warning mb-2">
        <h3>{{ blogProp.title }}</h3>
      </div>
      <div class="d-flex px-2 justify-content-bottom align-items-baseline gap-2  ">
        <img class=" profile-img" :src="blogProp.creator.picture" alt="">
        <div class="d-flex align-items-baseline justify-content-end">
          <div>
            <span class="fs-4">{{ blogProp.creator.name }}</span>
          </div>
          <div>
            <span>Published: {{ blogProp.createdAt.toLocaleDateString() }}</span>
          </div>
        </div>
      </div>
      <div>
        
        <span></span>
      </div>
      <div>
        <p>{{ blogProp.body }}</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.activity-tile{
  height: 40dvh;
  width: 40dvh;
  object-position: center;
  object-fit: cover;
}
.profile-img {
  height: 2rem;
  aspect-ratio:  1/1;
  border-radius: 100%;
}
</style>