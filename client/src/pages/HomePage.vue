<script setup>


</script>


<!-- TODO import bg image from local storage -->
<template>
  <section class="container-fluid">
    <div class="row ">
      <div class="col-12 px-0">
        <div class="background-img d-flex justify-content-end align-items-center px-4 ">
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
  </section>
</template>

<style scoped lang="scss">
.background-img{
  background-image: url('https://images.unsplash.com/photo-1567018265154-78811ad63787?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  min-height: 75dvh;
}
.text-white-shadow{
  text-shadow: 1px 1px 5px black;
  color: white;
}
</style>
