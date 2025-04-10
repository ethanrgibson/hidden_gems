<script setup>
import { blogsService } from "@/services/BlogsService.js";
import { logger } from "@/utils/Logger.js";
import { Pop } from "@/utils/Pop.js";
import { QuillEditor } from "@vueup/vue-quill";
// import Quill from "quill";
import { ref, useTemplateRef, } from "vue";
import { useRoute, useRouter } from "vue-router";

// import { useRoute, useRouter } from "vue-router";


const route = useRoute()
const router = useRouter()



const testString = ref('')
// const blogContent = ref('')

// watch(testString, ()=>{
//   const hiddenEditor = new Quill('#hidden-editor')
//   hiddenEditor.setContents(JSON.parse(testString.value))
//   blogContent.value = hiddenEditor.getSemanticHTML()
// })
let timer
function updateAndSave() {
  clearTimeout(timer)
  timer = setTimeout(saveQuillChanges, 30000);
}
async function saveQuillChanges() {
  logger.log('im working')
  const editorContent = Qeditor.value.getContents()
  const stringyContent = JSON.stringify(editorContent)
  testString.value = stringyContent
  await saveBody(stringyContent)
}

async function saveBody(body) {
  try {
    const blogId = route.params.blogId
    await blogsService.saveBlog(blogId, body)
    logger.log('SAVING')
    Pop.success('Blog Saved')

  }
  catch (error) {
    Pop.error(error, 'Could Not Save Blog');
  }

  timer = setTimeout(() => {
    logger.log('im working')
    const editorContent = Qeditor.value.getContents()
    const stringyContent = JSON.stringify(editorContent)
    testString.value = stringyContent
    saveBody(stringyContent)
  }, 1000);
}

async function saveBody(body) {
  const blogId = route.params.blogId
  await blogsService.saveBlog(blogId, body)
  logger.log('SAVING');
  (active blog no display watcher)
}

const Qeditor = useTemplateRef('Qeditor')

// async function saveBlog() {
//   const editorContent = Qeditor.value.getContents()
//   const stringyContent = JSON.stringify(editorContent)
//   testString.value  = stringyContent
//   // logger.log('html', stringyContent, 'blogcontent', blogContent)
//   // logger.log('onUpdate', event)
//   // logger.log('saving form', Qeditor.value.getContents())
//   // await blogsService.saveBlog(blogId, stringyContent)
// }

async function saveAndExit() {
  try {
    await saveQuillChanges()
    router.push({ name: 'Active Blog', params: { blogId: route.params.blogId } })
  }
  catch (error) {
    Pop.error(error, 'Could Not Save Blog');
  }
}

</script>


<template>

  <!-- this is the visualization of the content from the form -->
  <!-- <div>
 this is the visualization of the content from the form -->
  <!-- <div>
  testString
  <div v-html="blogContent"></div>
  <div id="hidden-editor" class="d-none"></div>
</div>  -->
  =======
  <!-- this is the visualization of the content from the form -->
  <!-- <div>
  testString
  <div v-html="blogContent"></div>
  <div id="hidden-editor" class="d-none"></div>
</div>  -->
  =======
  <!-- this is the visualization of the content from the form -->
  <!-- <div>
  testString
  <div v-html="blogContent"></div>
  <div id="hidden-editor" class="d-none"></div>
</div>  -->
  =======
  <!-- this is the visualization of the content from the form -->
  <!-- <div>
  testString
  <div v-html="blogContent"></div>
  <div id="hidden-editor" class="d-none"></div>
</div>  -->

  <form @submit.prevent="saveBody()">

    <QuillEditor ref="Qeditor" @update:content="updateAndSave()" theme="snow" :toolbar="[
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header levels
      [{ font: [] }], // Font family
      [{ size: ['small', false, 'large', 'huge'] }], // Font size
      ['bold', 'italic', 'underline', 'strike'], // Formatting buttons
      [{ list: 'ordered' }, { list: 'bullet' }], // Lists
      [{ indent: '-1' }, { indent: '+1' }], // Indentation
      [{ align: [] }], // Alignment options
      ['clean'] // Clear formatting
    ]" />
    <button type="submit" class="btn btn-warning">Save</button>
  </form>
  <button @click="saveQuillChanges()" class="btn btn-warning">SAVE</button>
  <button @click="saveAndExit()" class="btn btn-warning">Save and exit editor</button>
</template>


<style lang="scss" scoped></style>