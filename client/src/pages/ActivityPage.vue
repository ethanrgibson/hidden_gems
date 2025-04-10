<script setup>
import { useRoute } from 'vue-router';



const route = useRoute()

</script>


<template>
  <section>
    <div v-if="route.params.activityName == 'camping'">
      Waht's up campers?
    </div>
    <div v-if="route.params.activityName == 'hiking'">
      Whats up hikers?
    </div>
    <div v-if="route.params.activityName == 'overlanding'">
      Whats up overlanders?
    </div>
  </section>
</template>



<style lang="scss" scoped></style>