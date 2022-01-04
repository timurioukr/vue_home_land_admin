<template lang="pug">
v-container.four-block
  v-row.ma-10(class="four-text")
    v-col(cols="12", md="6")
      h2.mb-5 My advantage:
      p &#128073 quality of work
      p &#128073 speed in execution
      p &#128073 understanding of the tasks
    v-col(cols="12", md="6")
      v-carousel(
        hide-delimiters,
        style="max-width: 1300px; border-radius: 15px 15px"
      )
        v-carousel-item(
          v-for="(item, i) in items",
          :key="i",
          :src="require(`@/assets/img/petProject/${item.name}.svg`)"
        )
</template>

<script>
export default {
  name: "FourBlock",
  data() {
    return {
      items: [
        {
          name: "undraw_folder_re_j0i0",
        },
        {
          name: "undraw_product_teardown_re_m1pc",
        },
        {
          name: "undraw_teacher_re_sico",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

@mixin font-four-block {
  color: #282f7e;
  font-family: "Montserrat";
}

.four-block {
  background: rgb(240, 240, 255);
  max-width: 100%;
}

h2 {
  font-size: 45px;
  @include font-four-block;
}

h3 {
  font-weight: 600;
  font-size: 20px;
  @include font-four-block;
}

p {
  font-size: 20px;
  font-weight: 400;
  @include font-four-block;
}

.icon__img {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}

@media only screen and (max-width: 945px) {
  h2 { 
    font-size: 30px;
    padding-left: 1px;
  }
  p {
    font-size: 15px;
  }
  .v-btn {
    font-size: 12px;
    width: 300px;
  }
  .four-text {
    margin: 0 !important;
  }

}
</style>
