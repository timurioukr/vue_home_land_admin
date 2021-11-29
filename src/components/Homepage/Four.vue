<template lang="pug">
v-container.four-block
  v-row.ma-10(class="four-text")
    v-col(cols="12", md="6")
      h2.mb-5 Почему выбирают «ЭйдоС»:
      p &#128073 Уникальные технологии образования
      p &#128073 Эксклюзивный подход к Ребенку
      p &#128073 Комфортные условия обучения
      p &#128073 И еще много чего...
      h3.mb-5 Углубленное изучение
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
    v-col(cols="12", md="6")
      v-carousel(
        hide-delimiters,
        style="max-width: 1300px; border-radius: 15px 15px"
      )
        v-carousel-item(
          v-for="(item, i) in items",
          :key="i",
          :src="require(`@/assets/img/HomePage/carousel/${item.name}`)"
        ) 
  v-row
    v-col.mt-10.mb-10.text-center
      v-btn.ma-1(color="#282f7e", large, outlined, rounded) Отправить заявку на экскурсию
        v-icon(right) mdi-chevron-right
</template>

<script>
export default {
  name: "FourBlock",
  data() {
    return {
      items: [
        {
          name: "1.jpg",
        },
        {
          name: "2.jpg",
        },
        {
          name: "3.jpg",
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
