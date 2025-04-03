<script setup>


</script>


<!-- TODO import bg image from local storage -->
<template>
  <div class="text-center">
    <h1>Blog Name</h1>
  </div>
  <div>
    account name
  </div>
  <hr>
  <div class="container">

    <div col-6 class="text-center">
      <div class="text-center">
        <i class=" fs-2 mdi mdi-arrow-left-bold-box"></i>
        <img class="main-blog-img"
          src="https://images.unsplash.com/photo-1525811902-f2342640856e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="camp">
        <span class=" fs-2 mdi mdi-arrow-right-bold-box"></span>
      </div>
    </div>
    <div class="container justify-content-end">
      <div col-3>
        <button class=" justify-content-end btn btn-orange ms-5">camp button</button>

      </div>

    </div>

  </div>


  <div class="container ">
    <div col-7 class="text-center ">
      <p class="text-center my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda sequi unde
        voluptate aut non suscipit minus ipsa id! Animi quibusdam magni quis facilis voluptatum. Quisquam, porro atque
        similique eum vitae optio nam labore maiores, temporibus architecto molestiae quibusdam asperiores. Vero
        reiciendis hic placeat ea quidem possimus, cupiditate eaque debitis consectetur facere perspiciatis quis id
        consequuntur labore ipsam maxime magni repellendus aspernatur dolore quia enim porro ab illo. Itaque harum
        placeat rem sapiente autem, omnis deserunt ipsam adipisci rerum laudantium quod quisquam amet facilis
        perferendis veniam praesentium corrupti! Officiis ullam neque, facilis voluptatibus beatae nam, nesciunt
        consequuntur ducimus ipsa earum reiciendis ea saepe amet tenetur! Optio doloremque nam ex, consequatur ipsum
        laboriosam, modi magnam, quasi soluta aut iusto reiciendis impedit harum dolorum non magni! Asperiores ad vero
        odit commodi veritatis suscipit debitis ipsam laborum cum, perspiciatis unde esse placeat distinctio, nulla
        repellat porro nobis exercitationem neque quasi cumque inventore? Alias aliquam, blanditiis architecto totam
        consectetur reprehenderit! Modi debitis sequi earum, quisquam expedita enim numquam. Sit, consequatur cum.
        Quaerat error odio modi harum cumque eveniet possimus esse? Itaque eveniet omnis officia maxime accusamus, a
        delectus animi hic nostrum debitis quae qui assumenda est nisi rerum quidem asperiores. Aliquid itaque libero
        fuga porro temporibus, delectus voluptate nihil sapiente laudantium a enim quam eligendi doloremque nemo non
        minima aperiam voluptatibus, eos, est quibusdam placeat maiores. Vero provident quod tempore facere repellat
        nobis sunt voluptates odio minus? Facilis unde quibusdam exercitationem soluta quasi, sit nobis illum tempore
        quas optio blanditiis eaque, dolores necessitatibus, aliquid porro odio illo adipisci! Obcaecati nesciunt,
        aliquam quasi possimus iusto ullam non unde ratione? Minima odio blanditiis corrupti suscipit optio culpa neque
        perspiciatis praesentium, amet, qui excepturi dolor quo, sequi asperiores illum. Harum veniam quas molestias,
        dolore sit earum quo nulla iure nemo fugit illum. Aliquam repudiandae ratione similique nam, laudantium labore
        facere corporis non modi accusamus aperiam voluptatem. Iusto perspiciatis ex odit a suscipit magnam tempore
        deserunt mollitia libero repellat nulla sequi, voluptatum velit enim expedita natus veritatis minus ea
        asperiores sit! Aperiam neque eaque sapiente aliquam est, itaque obcaecati voluptas culpa ab tenetur suscipit,
        ipsum repellendus soluta. Culpa dolorum explicabo, voluptatum consequatur sequi sint eveniet iste laborum
        debitis nostrum aperiam recusandae doloribus odio vel, in quaerat, ea sit obcaecati dicta delectus corrupti
        temporibus magnam! Quisquam perspiciatis quidem doloribus in dolorem est! Quas, reiciendis et eos minus minima
        eligendi amet nostrum tempore deleniti, impedit quaerat voluptatum dolores nobis esse sapiente cupiditate rem
        doloremque! Illum, itaque, voluptatibus iste consectetur excepturi doloribus dolore iusto distinctio nostrum
        totam quia fugit sequi dolor accusamus expedita adipisci rerum tempora. Magnam cumque itaque provident ex,
        repellendus excepturi aliquam hic eveniet expedita quibusdam facere architecto, id dolores eius, illum
        doloribus! Ipsa, porro nostrum odio facere amet magnam reiciendis tempora, distinctio vero sapiente obcaecati
        qui sit tenetur dolores aut, numquam maxime assumenda soluta beatae. Fugit, optio ducimus iste veritatis
        excepturi laudantium nobis totam quidem cupiditate commodi officiis maiores pariatur placeat, dolor
        exercitationem, eligendi molestiae? Quae at dignissimos inventore? Ab incidunt, illum et pariatur dolor numquam
        earum beatae excepturi deleniti harum reiciendis culpa ratione nulla tempora? Accusantium corrupti dolorem,
        nesciunt modi impedit numquam odio laboriosam ad minus autem eos non corporis ullam quis itaque necessitatibus
        delectus dicta quidem tenetur iusto ducimus eveniet ut. Voluptatum qui vel iure.</p>
    </div>
    <div class="col-12">
      <div class="my-3 p-2">
        <div class="border-bottom border-warning">
          <h2>Find Your Next Gem</h2>
        </div>
        <div class="mt-2 fs-4 pb-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum commodi unde porro quae odio aperiam
            optio quo. Inventore fugit dolore rem quia error corrupti earum blanditiis sequi a dolor.</p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 px-0 campfire-bg">
        <div class="campfire d-flex justify-content-start pt-4 ">
          <div class="text-white-shadow px-5">
            <h1 class="py-2">Come Join the Campfire</h1>
            <RouterLink :to="{ name: 'Campfire' }">
              <button class="btn btn-warning">See What Everyone is Saying</button>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="border-bottom border-warning my-3 p-2 text-end">
          <h2>Explore With Others</h2>
        </div>
      </div>
      <div class="col-md-7 py-3">
        <div class="d-flex align-items-center justify-content-between bg-light shadow p-4">
          <div>
            <img class="img-fluid activity-tile"
              src="https://images.unsplash.com/photo-1621412847056-259b014ef157?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxjYW1waW5nfGVufDB8MHwwfHx8Mg%3D%3D"
              alt="">
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
            <img class="img-fluid activity-tile"
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlraW5nfGVufDB8MHwwfHx8Mg%3D%3D"
              alt="">
          </div>
        </div>
      </div>
      <div class="col-md-7 py-3">
        <div class="d-flex align-items-center justify-content-between bg-light shadow p-4">
          <div>
            <img class="img-fluid activity-tile"
              src="https://images.unsplash.com/photo-1636138105136-a86084b4e1d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3ZlcmxhbmR8ZW58MHwwfDB8fHwy"
              alt="">
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
.title-bg-img {
  background-image: url('https://images.unsplash.com/photo-1567018265154-78811ad63787?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  min-height: 75dvh;
}

.campfire-bg {
  background-image: url('https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  min-height: 75dvh;
}

.text-white-shadow {
  text-shadow: 1px 1px 5px black;
  color: white;
  <<<<<<< HEAD
}

.activity-tile {
  min-height: 40dvh;
  object-position: center;
  object-fit: cover;
  =======>>>>>>>b266c76 (that shit right here)
}

.activity-tile {
  min-height: 40dvh;
  object-position: center;
  object-fit: cover;
}
</style>
<style scoped lang="scss"></style>
