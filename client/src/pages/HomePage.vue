<script setup>


</script>


<!-- TODO import bg image from local storage -->
<template>
  <section class="container-fluid">
    <div class="row ">
      <div class="col-12 px-0">
        <div class="background-img">
          <div class="text-white-shadow">
            <h1 class="">Hidden gems</h1>
            <span class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, maiores.</span>
          </div>
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
