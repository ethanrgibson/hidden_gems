<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
}

watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}, { immediate: true })

</script>

<template >
  <nav class=" text-light navbar navbar-expand-md bg-dark border-bottom border-warning">
    <div class="container-fluid gap-2">
      <div>
        <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center text-light">
          <img class="navbar-brand logo" alt="logo" src="@/assets/img/logo.svg" height="80"/>
          <b class="fs-5"></b>
        </RouterLink>
      </div>
      <!-- collapse button -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <span type="button" class="nav-link bg-orange text-light ">The Campfire</span>
        </li>
        <li class="nav-item bg-blue">
          <span type="button" class="nav-link text-light">Camping</span>
        </li>
        <li class="nav-item bg-success">
          <span type="button" class="nav-link text-light" >Hiking</span>
        </li>
        <li class="nav-item bg-primary">
          <span type="button" class="nav-link text-light" >Overland</span>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input  class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
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
.logo{
  filter: invert(55%) sepia(76%) saturate(1433%) hue-rotate(351deg) brightness(101%) contrast(101%);
 
}
</style>
