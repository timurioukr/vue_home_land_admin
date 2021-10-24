<template lang="pug">
v-container.my-15.pa-0.ma-0
  v-row.ma-12.pa-0.text-center(justify="center") 
    v-col.fife-block-left.ma-5(cols="12", md="5")
      h2.white--text Задайте интересующие вопросы
      v-btn.ma-1(color="#ffff", large, outlined, rounded) Задать
    v-col.fife-block-right.ma-5(cols="12", md="5")
      h2.white--text Или запишитесь на экскурсию
      v-btn.ma-1(color="#ffff", large, outlined, rounded) Записаться
</template>

<style lang="scss" scoped>
@mixin leadgen-fife-block {
  background-size: cover;
  height: 250px;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px 25px;
}

h2 {
  font-size: 25px;
  font-family: "Montserrat";
}

$color-block: linear-gradient(
  rgba(161, 178, 251, 0.589),
  rgba(2, 7, 77, 0.486)
);

.fife-block-left {
  background: $color-block, url("../../assets/img/HomePage/koridor.jpg");
  @include leadgen-fife-block;
}

.fife-block-right {
  background: $color-block, url("../../assets/img/HomePage/vipusk.jpg");
  @include leadgen-fife-block;
}

@media only screen and (max-width: 945px) {
  h2 {
    font-size: 20px;
  }
  .v-btn {
    font-size: 12px;
    max-width: 150px;
  }
}

</style>