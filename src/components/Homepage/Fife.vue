<template lang="pug">
v-row.justify-space-around.align-center.ma-10
  v-col(cols="12", md="5")
    h2 Lorem ipsum
  v-col(cols="11", md="3")
    v-dialog(v-model="dialog1", width="500px")
      template(v-slot:activator="{ on, attrs }")
        v-card.mb-6(v-bind="attrs", v-on="on")
          v-img.six-block-img-1
            span.title-span.white--text.p Lorem
              v-icon.white--text.ml-5(large) mdi-chevron-up
      v-card
        v-card-title
          span.mt-5 Lorem ipsum
        v-card-text This lorem text
        v-card-actions
          v-spacer
          v-btn(color="silver", text, @click="dialog1 = false") Закрыть
</template>

<script>
export default {
  name: "SixBlock",
  data() {
    return {
      dialog1: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin font-six-block {
  color: #282f7e;
  font-family: "Montserrat";
}

@mixin img-six-block {
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

.six-block-img-1 {
  background: linear-gradient(rgb(0, 14, 88), rgba(2, 81, 200, 0.92)),
    url("../../assets/img/petProject/kod.jpg");
  @include img-six-block;
}

.six-block-img-2 {
  background: linear-gradient(rgb(199, 218, 248), rgba(2, 22, 200, 0.918)),
    url("../../assets/img/logo.png");
  @include img-six-block;
}

.six-block-img-3 {
  background: linear-gradient(rgb(199, 218, 248), rgba(2, 22, 200, 0.918)),
    url("../../assets/img/logo.png");
  @include img-six-block;
}

.six-block-img-4 {
  background: linear-gradient(rgb(199, 218, 248), rgba(2, 22, 200, 0.918)),
    url("../../assets/img/logo.png");
  @include img-six-block;
}

.title-span {
  display: flex;
  width: fit-content;
  margin: 25px 15px;
  border-radius: 5px;
  padding: 0.5%;
  font-size: 30px;
  font-weight: 400;
  font-family: "Montserrat";
}

h2 {
  font-size: 45px;
  @include font-six-block;
}

p {
  font-size: 20px;
  font-weight: 400;
  @include font-six-block;
}

.text-six-block {
  max-width: 1000px;
}

@media only screen and (max-width: 945px) {
  h2 {
    font-size: 25px;
  }
  p {
    font-size: 15px;
    width: 300px;
  }
  .title-span {
    font-size: 25px;
  }
  
}
</style>
