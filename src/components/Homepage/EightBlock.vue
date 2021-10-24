<template lang="pug">
div.mt-15
  v-col(cols="12", md="6")
    h2.text-left.mb-5 Лучшие условия в городе
  v-row.mt-7.ma-5(align="center", justify="center" class="align-self-start")
    v-col(cols="6", md="4" align="center")
      v-img(src="../../assets/img/HomePage/langIcon/house.png" class="icon__img")
      p Охраняемая территория
    v-col(cols="6", md="4" align="center" class="align-self-start")
      v-img(src="../../assets/img/HomePage/langIcon/security-shield.png" class="icon__img")
      p Охрана и видеонаблюдение
    v-col(cols="6", md="4" align="center" class="align-self-start")
      v-img(src="../../assets/img/HomePage/langIcon/hot-soup.png" class="icon__img")
      p Комплексное питание
    v-col(cols="6", md="4" align="center" class="align-self-start")
      v-img(src="../../assets/img/HomePage/langIcon/homework.png" class="icon__img")
      p Выполнение д/з в Школе
    v-col(cols="6", md="4" align="center" class="align-self-start")
      v-img(src="../../assets/img/HomePage/langIcon/rocket.png" class="icon__img")
      p Уникальные факультативы
    v-col(cols="6", md="4" align="center" class="align-self-start")
      v-img(src="../../assets/img/HomePage/langIcon/home-button.png" class="icon__img")
      p График - полупансион

</template>

<script>
export default {
  name: "EightBlock",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

@mixin font-six-block {
  color: #282f7e;
  font-family: "Montserrat";
}

h2 {
  font-size: 35px;
  @include font-six-block;
}

p {
  font-size: 30px;
  font-weight: 500;
  @include font-six-block;
}

.icon__img {
  width: 80px;
  height: 80px;
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

@media only screen and (max-width: 945px) {
  h2 {
    font-size: 25px;
  }

  p {
    font-size: 15px;
  }
}




</style>
