<template lang="pug">
v-container
  v-row(justify="center" align="center") 
    v-col.seven-block-left.py-15(cols="10", md="5")
      h2.mb-5 Углубленное изучение
      v-row.ma-1
        img(src="../../assets/img/HomePage/langIcon/mathematics (1).png", alt="mathematics" class="icon__img")
        p Математики
      v-row.ma-1
        img(src="../../assets/img/HomePage/langIcon/united-kingdom (1).png", alt="mathematics" class="icon__img")
        p Английского языка
      v-row.ma-1
        img(src="../../assets/img/HomePage/langIcon/germany (1).png", alt="mathematics" class="icon__img")
        p Немецкого языка
      v-row.ma-1
        img(src="../../assets/img/HomePage/langIcon/france (1).png", alt="mathematics" class="icon__img")
        p Французского языка
    v-col.fife-block-right.text-center(cols="10", md="5") 
      h2.white--text Запишитесь на экскурсию
      v-btn.ma-1(color="#ffff", large, outlined, rounded) Записаться
</template>

<style lang="scss" scoped>

$color-block: linear-gradient(
  rgba(161, 178, 251, 0.589),
  rgba(2, 7, 77, 0.486)
);

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


@mixin comments-seven-block {
  background-size: cover;
  width: 20px;
  background-position: center;
  display: flex;
  flex-direction: column;
  border-radius: 25px 25px;
}

$color-block: linear-gradient(
  rgba(161, 178, 251, 0.589),
  rgba(2, 7, 77, 0.486)
);

$colorBrend: #282f7e;

.seven-block-left {  
@include comments-seven-block;
}

.seven-block-right {
  background: $color-block, url("../../assets/img/HomePage/vipusk.jpg");
  @include comments-seven-block;
}

h2 {
    font-size: 40px;
    font-family: "Montserrat";
    color: $colorBrend;
  }
p {
  color: $colorBrend;
  font-size: 25px;
  font-weight: 400;
  font-family: "Montserrat";
  margin-left: 15px;
}

.icon__img {
  width: 40px;
  height: 40px;
}

.fife-block-right {
  background: $color-block, url("../../assets/img/HomePage/vipusk.jpg");
  @include leadgen-fife-block;
}

@media only screen and (max-width: 945px) {
  h2 {
    font-size: 25px;
  }

  p {
    font-size: 15px;
  }

  .v-btn {
    font-size: 12px;
    max-width: 150px;
  }

  .fife-block-right {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

</style>