<script setup>
import Wysimark from "@wysimark/vue";
import { ref } from "vue";
export default {
  name: "App",
  components: { Wysimark },
  setup() {
    const markdown = ref < String > ("# Hello World\n\nLorem ipsum dolar...");
    return {
      markdown,
    };
  },
};
</script>


<template>
  <wysimark v-model="markdown" :height="320" />
</template>


<style lang="scss" scoped></style>