<template lang="pug">
.home-two.pa-15.text-center
  v-row(align="center", justify="center")
    template
      v-col(cols="12", md="3")
        v-hover(v-slot="{ hover }")
          v-card(
            :elevation="hover ? 12 : 2",
            :class="{ 'on-hover': hover }",
          )
            v-img(
              src="../../assets/img/petProject/vue.png",
              height="225px"
            )
      v-col(cols="12", md="3")
        v-hover(v-slot="{ hover }")
          v-card(
            :elevation="hover ? 12 : 2",
            :class="{ 'on-hover': hover }",
          )
            v-img(
              src="../../assets/img/petProject/vuetify.png",
              height="225px"
            )
      v-col(cols="12", md="3")
        v-hover(v-slot="{ hover }")
          v-card(
            :elevation="hover ? 12 : 2",
            :class="{ 'on-hover': hover }",
          )
            v-img(
              src="../../assets/img/petProject/vuex.png",
              height="225px"
            )
      v-col(cols="12", md="3")
        v-hover(v-slot="{ hover }")
          v-card(
            :elevation="hover ? 12 : 2",
            :class="{ 'on-hover': hover }",
          )
            v-img(
              src="../../assets/img/petProject/vue118.jpg",
              height="225px"
            )
      v-col(cols="12", md="3")
        v-hover(v-slot="{ hover }")
          v-card(
            :elevation="hover ? 12 : 2",
            :class="{ 'on-hover': hover }",
          )
            v-img(
              src="../../assets/img/petProject/vueauth.jpg",
              height="225px"
            )
      v-col(cols="12", md="3")
        v-hover(v-slot="{ hover }")
          v-card(
            :elevation="hover ? 12 : 2",
            :class="{ 'on-hover': hover }",
          )
            v-img(
              src="../../assets/img/petProject/vuerouter.jpg",
              height="225px"
            )
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

.v-card {
  transition: opacity 0.4s ease-in-out;
  cursor: pointer;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}
</style>
