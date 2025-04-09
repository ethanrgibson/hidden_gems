<script setup>
import { AppState } from './AppState.js';
import ModalComponent from './components/ModalComponent.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView/>
  </main>
  <footer class=" text-center">
    <section class="container-fluid">
      <div class="row bg-success">
        <div class="col-12 py-4 bg-success">
          <div class="row">
            <div class="col-3">
              <a href="">Camping</a>
            </div>
            <div class="col-3">
              <a href="">Hiking</a>
            </div>
            <div class="col-3">
              <a href="">Overland</a>
            </div>
            <div class="col-3">
              <a href="">About</a>
            </div>
          </div>
          <div class="col-12">
            <img class="logo" src="@/assets/img/logo.svg" height="90" alt="">
          </div>
        </div>
      </div>
    </section>
  </footer>
  <ModalComponent/>
</template>

<style lang="scss">
a{
  color: black;
}
.logo{
  filter: invert(55%) sepia(76%) saturate(1433%) hue-rotate(351deg) brightness(101%) contrast(101%);
}

</style>
