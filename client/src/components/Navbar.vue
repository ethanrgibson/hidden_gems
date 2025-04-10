<script setup>
import { Pop } from '@/utils/Pop.js';
import Login from './Login.vue';
import { logger } from '@/utils/Logger.js';
import { ref } from 'vue';
import { blogsService } from '@/services/BlogsService.js';

const editableSearch = ref('')

async function searchBlogs() {
  try {
    await blogsService.searchBlogs(editableSearch.value)
  }
  catch (error) {
    Pop.error(error, 'could not search');
    logger.log('could not search', error)
  }
}
</script>

<template>
  <nav class=" text-light navbar navbar-expand-md bg-dark border-bottom border-warning">
    <div class="container-fluid gap-2">
      <div>
        <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center text-light">
          <img class="navbar-brand logo" alt="logo" src="@/assets/img/logo.svg" height="80" />
          <b class="fs-5"></b>
        </RouterLink>
      </div>
      <!-- collapse button -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink :to="{ name: 'Campfire' }">

            <span type="button" class="nav-link bg-orange text-light ">The Campfire</span>
          </RouterLink>
        </li>
        <li class="nav-item bg-blue">
          <RouterLink :to="{ name: 'Activity', params: { activityName: 'camping' } }">
            <span type="button" class="nav-link text-light">Camping</span>
          </RouterLink>
        </li>
        <li class="nav-item bg-success">
          <RouterLink :to="{ name: 'Activity', params: { activityName: 'hiking' } }">
            <span type="button" class="nav-link text-light">Hiking</span>
          </RouterLink>
        </li>
        <li class="nav-item bg-primary">
          <RouterLink :to="{ name: 'Activity', params: { activityName: 'overlanding' } }">
            <span type="button" class="nav-link text-light">Overland</span>
          </RouterLink>
        </li>
      </ul>
      <form @submit.prevent="searchBlogs()" class="d-flex" role="search">
        <input v-model="editableSearch" class="form-control me-2" type="search" placeholder="Search"
          aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <!-- LOGIN COMPONENT HERE -->
    <div class="ms-auto">

    </div>
    <Login />
  </nav>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.logo {
  filter: invert(55%) sepia(76%) saturate(1433%) hue-rotate(351deg) brightness(101%) contrast(101%);
}
</style>
