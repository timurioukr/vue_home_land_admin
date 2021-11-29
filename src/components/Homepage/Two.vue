<template lang="pug">
.home-two.pa-15.text-center
  v-row(align="center", justify="center")
    template
      v-col(cols="12", md="3")
        v-hover(v-slot="{ hover }")
          v-card(
            :elevation="hover ? 12 : 2",
            :class="{ 'on-hover': hover }",
            to="/school"
          )
            v-img(
              src="../../assets/img/HomePage/buttons/school.jpg",
              height="225px"
            )
              span.title-span.white--text.p {{ $t('Школа')}}
      v-col(cols="12", md="3")
        v-hover(v-slot="{ hover }")
          v-card(
            :elevation="hover ? 12 : 2",
            :class="{ 'on-hover': hover }",
            to="/kinderg"
          )
            v-img(
              src="../../assets/img/HomePage/buttons/kindergarten.jpg",
              height="225px"
            )
              span.title-span.white--text.p {{ $t('Сад')}}
      v-col(cols="12", md="3")
        v-hover(v-slot="{ hover }")
          v-card(
            :elevation="hover ? 12 : 2",
            :class="{ 'on-hover': hover }",
            to="/centr"
          )
            v-img(
              src="../../assets/img/HomePage/buttons/centr.jpg",
              height="225px"
            )
              span.title-span.white--text.p {{ $t('Центр')}}
      v-col(cols="12", md="3")
        v-hover(v-slot="{ hover }")
          v-card(
            :elevation="hover ? 12 : 2",
            :class="{ 'on-hover': hover }",
            to="/externat"
          )
            v-img(
              src="../../assets/img/HomePage/buttons/dist.jpg",
              height="225px"
            )
              span.title-span.white--text.p {{ $t('Экстернат')}}
</template>

<script>
export default {
  name: "TwoBlock",
  data() {
    return {};
  },
};
</script>

<style scoped>
.title-span {
  background: #282f7ebb;
  display: flex;
  width: fit-content;
  margin: 165px 15px;
  border-radius: 5px;
  padding: 0.5%;
  font-size: 30px;
  font-weight: 400;
  font-family: "Montserrat";
}

.v-card {
  transition: opacity 0.4s ease-in-out;
  cursor: pointer;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}
</style>
