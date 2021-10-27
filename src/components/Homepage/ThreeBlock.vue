<template lang="pug">
  v-container(class="text-left three-block")
    h2(class="mx-10" ) Наша команда
    v-row(justify="center" class="mt-10" )
      template
        v-col(cols="4" md="2" class="ma-5")
          a(href="")
          v-img(class="leader-foto elevation-1" src="../../assets/img/HomePage/comands/gredinarova.jpg")
          h3(class="mt-3") Грединарова Елена Михйловна
          p Генеральный директор
        v-col(cols="4" md="2" class="ma-5")
          a(href="#")
          v-img(class="leader-foto elevation-1" src="../../assets/img/HomePage/comands/gredinarov.jpg")
          h3(class="mt-3") Грединаров Игорь Леонидович
          p Первый заместитель директора
        v-col(cols="4" md="2" class="ma-5")
          a(href="")
          v-img(class="leader-foto elevation-1" src="../../assets/img/HomePage/comands/gredinarova_yana.jpg")
          h3(class="mt-3") Грединарова Яна Игоревна
          p Директор по развитию
        v-col(cols="4" md="2" class="ma-5")
          a(href="")
          v-img(class="leader-foto elevation-1" src="../../assets/img/HomePage/comands/lejbovich.jpg")
          h3(class="mt-3") Лейбович Елена Викторовна
          p Заместитель директора по индивидуальному сопровождению учеников
    v-row
      v-col(class="text-center mb-10")
        v-btn(color="#282f7e" large outlined rounded class="ma-1") Подробнее о нас
          v-icon(right) mdi-chevron-right
</template>

<script>
export default {
  name: "ThreeBlock",
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>

$colorBrend: #282f7e;

@mixin font-three-block {
  color: $colorBrend;
  font-family: "Montserrat";
}

.three-block {
  max-width: 100%;

}

h2 {
  font-size: 45px;
  @include font-three-block;
}

h3 {
  font-weight: 600;
  font-size: 20px;
  @include font-three-block;
}

p {
  font-size: 20px;
  font-weight: 400;
  @include font-three-block

}

.leader-foto {
  border-radius: 15% 15% 15% 15%;
  width: 200px;

}

@media only screen and (max-width: 945px) {
  h2 {
    font-size: 30px;

  }
  h3 {
    font-size: 15px;
  }
  p {
    font-size: 13px;

  }
}

</style>
