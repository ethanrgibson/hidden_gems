<script setup>
import Quill from '@/components/Quill.vue';



</script>


<!-- TODO import bg image from local storage -->
<template>
  <section class="container-fluid bg-light ">
    <div class="row ">
      <div class="col-12 px-0">
        <div class="title-bg-img shadow d-flex justify-content-end align-items-center px-4 ">
          <div class="text-white-shadow px-5">
            <h1 class="">Hidden gems</h1>
            <span class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, maiores.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="my-3 p-2">
        <div class="border-bottom border-warning">
          <h2>Find Your Next Gem</h2>
        </div>
        <div class="mt-2 fs-4 pb-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum commodi unde porro quae odio aperiam optio quo. Inventore fugit dolore rem quia error corrupti earum blanditiis sequi a dolor.</p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 px-0 campfire-bg shadow">
          <div class="campfire d-flex justify-content-start pt-4 ">
            <div class="text-white-shadow px-5">
              <h1 class="border-bottom border-warning py-2">Come Join the Campfire</h1>
              <RouterLink :to="{name: 'Campfire'}">
                <button class="btn btn-warning">See What Everyone is Saying</button>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="border-bottom border-warning my-3 p-2 text-end ">
            <h2>Explore With Others</h2>
          </div>
        </div>
        <div class="col-md-7 py-3">
          <div class="d-flex align-items-center justify-content-between bg-light shadow p-4">
              <div>
                <img class="img-fluid activity-tile shadow" src="https://images.unsplash.com/photo-1621412847056-259b014ef157?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxjYW1waW5nfGVufDB8MHwwfHx8Mg%3D%3D" alt="">
              </div>
              <div class="text-center">
                <h3>Camping</h3>
              </div>
            </div>
        </div>
        <div class="col-md-7 py-3">
          <div class="d-flex align-items-center justify-content-between bg-light shadow p-4">
            <div class="text-center">
              <h3>Hiking</h3>
            </div>
            <div>
              <img class="img-fluid activity-tile shadow" src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlraW5nfGVufDB8MHwwfHx8Mg%3D%3D" alt="">
            </div>
            </div>
        </div>
        <div class="col-md-7 py-3">
          <div class="d-flex align-items-center justify-content-between bg-light shadow p-4">
              <div>
                <img class="img-fluid activity-tile shadow" src="https://images.unsplash.com/photo-1636138105136-a86084b4e1d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3ZlcmxhbmR8ZW58MHwwfDB8fHwy" alt="">
              </div>
              <div class="text-center">
                <h3>Overland</h3>
              </div>
            </div>
          </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.title-bg-img{
  background-image: url('https://images.unsplash.com/photo-1567018265154-78811ad63787?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  min-height: 75dvh;
  
}
.campfire-bg{
  background-image: url('https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  min-height: 75dvh;
}
.text-white-shadow{
  text-shadow: 1px 1px 5px black;
  color: white;
}
.activity-tile{
  min-height: 40dvh;
  object-position: center;
  object-fit: cover;
}
</style>
