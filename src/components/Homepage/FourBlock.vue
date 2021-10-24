<template lang="pug">
v-container.four-block
  v-row.ma-10
    v-col(cols="11", md="12")
      h2.mb-5 Почему выбирают «ЭйдоС»:
      p &#128073 Уникальные технологии образования
      p &#128073 Эксклюзивный подход к Ребенку
      p &#128073 Комфортные условия обучения
      p &#128073 И еще много чего...
  v-row.ma-1(justify="center")
    template
      v-carousel.elevation-15(
        hide-delimiters,
        style="max-width: 1300px; border-radius: 15px 15px"
      )
        v-carousel-item(
          v-for="(item, i) in items",
          :key="i",
          :src="require(`@/assets/img/HomePage/carousel/${item.name}`)"
        ) 
  v-row
    v-col.mt-10.mb-5.text-center
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
  font-size: 2.5vw;
  @include font-four-block;
}

h3 {
  font-weight: 600;
  font-size: 1vw;
  @include font-four-block;
}

p {
  font-size: 1vw;
  font-weight: 400;
  @include font-four-block;
}

@media only screen and (max-width: 945px) {
  h2 { 
    font-size: 30px;
    padding-left: 1px;
  }
  p {
    font-size: 18px;
  }
  .v-btn {
    font-size: 12px;
    width: 300px;
  }
}


</style>
