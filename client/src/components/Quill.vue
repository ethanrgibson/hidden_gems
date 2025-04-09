<script setup>
import { blogsService } from "@/services/BlogsService.js";
import { logger } from "@/utils/Logger.js";
import  {QuillEditor}  from "@vueup/vue-quill";
import Quill from "quill";
import { onMounted, ref, useTemplateRef, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const testString = ref('')
const blogContent = ref('')

watch(testString, ()=>{
  const hiddenEditor = new Quill('#hidden-editor')
  hiddenEditor.setContents(JSON.parse(testString.value))
  blogContent.value = hiddenEditor.getSemanticHTML()
})
let timer
function updateAndSave() {
  clearTimeout(timer)
  timer = setTimeout(() => {
    logger.log('im working')
    const editorContent = Qeditor.value.getContents()
    const stringyContent = JSON.stringify(editorContent)
    testString.value  = stringyContent
    saveBody()
  }, 1000);
}

async function saveBody(){
  const blogId = route.params.blogId
  const body = blogContent.value
  await blogsService.saveBlog(blogId, body)
  logger.log('SAVING')
}

const Qeditor = useTemplateRef('Qeditor')

async function saveBlog() {
  const editorContent = Qeditor.value.getContents()
  const stringyContent = JSON.stringify(editorContent)
  testString.value  = stringyContent
  // logger.log('html', stringyContent, 'blogcontent', blogContent)
  // logger.log('onUpdate', event)
  // logger.log('saving form', Qeditor.value.getContents())
  // await blogsService.saveBlog(blogId, stringyContent)
}


</script>


<template>

<!-- this is the visualization of the content from the form -->
<div>
  testString
  <div v-html="blogContent"></div>
  <div id="hidden-editor" class="d-none"></div>
</div>

  <form @submit.prevent="saveBody()">

    <QuillEditor ref="Qeditor" @update:content="updateAndSave"
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