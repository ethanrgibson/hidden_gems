<script setup>
import { logger } from "@/utils/Logger.js";
import  {QuillEditor}  from "@vueup/vue-quill";


async function saveBlog() {
  logger.log('saving form')
  
}
</script>


<template>
  <form @submit.prevent="saveBlog()">
    <QuillEditor
        theme="snow"
        :toolbar="[
          [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header levels
          [{ font: [] }], // Font family
          [{ size: ['small', false, 'large', 'huge'] }], // Font size
          ['bold', 'italic', 'underline', 'strike'], // Formatting buttons
          [{ list: 'ordered' }, { list: 'bullet' }], // Lists
          [{ indent: '-1' }, { indent: '+1' }], // Indentation
          [{ align: [] }], // Alignment options
          ['clean'] // Clear formatting
        ]"
      />
      <button type="submit" class="btn btn-warning">Save</button>
  </form>
</template>


<style lang="scss" scoped>

</style>