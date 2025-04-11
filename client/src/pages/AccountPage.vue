<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { Pop } from '@/utils/Pop.js';
import { logger } from '@/utils/Logger.js';
import { blogsService } from '@/services/BlogsService.js';

const account = computed(() => AppState.account)

onMounted

async function getMyBlogs() {
  try {
    await blogsService.getMyBlogs()
  }
  catch (error) {
    Pop.error(error);
    logger.error()
  }
}
</script>

<template>
  <section class="container">
    <div v-if="account" class="row py-4 mt-4 justify-content-center">
      <div class="col-9">
        <div class="d-flex my-3 justify-content-center justify-content-md-start gap-3 align-items-center">
          <div>
            <img class=" account-image" :src="account.picture" alt="" />
          </div>
          <div>
            <h3>{{ account.name }}</h3>
            <p> events ~ tickets</p>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="py-3">
          <h3>Your Active Blogs</h3>
        </div>
        <div class="row">
          <div class=" col-md-4  mb-3 text-dark-4">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="">

                <div class=" mt-1 mb-3">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="py-3">
          <h3>Unpublished Blogs</h3>
        </div>
        <div class="row">
          <div class=" col-md-4  mb-3 text-dark-4">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}

.account-image {
  height: 7rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
}
</style>
