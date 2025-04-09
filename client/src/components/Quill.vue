<script setup>
import { blogsService } from "@/services/BlogsService.js";
import { logger } from "@/utils/Logger.js";
import { Pop } from "@/utils/Pop.js";
import { QuillEditor } from "@vueup/vue-quill";
// import Quill from "quill";
import { ref, useTemplateRef, } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

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
  timer = setTimeout(() => {
    logger.log('im working')
    const editorContent = Qeditor.value.getContents()
    const stringyContent = JSON.stringify(editorContent)
<<<<<<< HEAD
    testString.value = stringyContent
    saveBody(stringyContent)
  }, 10000);
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
=======
    testString.value  = stringyContent
    saveBody(stringyContent)
  }, 1000);
}

async function saveBody(body){
  const blogId = route.params.blogId
  await blogsService.saveBlog(blogId, body)
  logger.log('SAVING')
>>>>>>> 0eaef24 (active blog no display watcher)
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


</script>


<template>

<<<<<<< HEAD
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
</div> -->
>>>>>>> 0eaef24 (active blog no display watcher)

  <form>

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

<<<<<<< HEAD
=======
    <QuillEditor ref="Qeditor" @update:content="updateAndSave()"
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
>>>>>>> 0eaef24 (active blog no display watcher)
  </form>
  <button @click="saveBody()" class="btn btn-warning">SAVE</button>
</template>


<style lang="scss" scoped></style>