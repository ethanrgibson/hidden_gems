<script setup>
import { Blog } from '@/models/Blog.js';

defineProps({
  blogProp: {type: Blog, required: true}
})
</script>


<template>
  <div>
    <div>
      <img class="activity-tile" :src="blogProp.coverImg" :alt="'a picture for ' + blogProp.creator.name + `'s' post`">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.activity-tile{
  max-height: 40dvh;
  object-position: center;
  object-fit: cover;
}
</style>