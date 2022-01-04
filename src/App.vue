<template>
  <v-app>
    <v-main>
      <Header  v-if="this.$route.fullPath !== '/404'" />
        <router-view></router-view>
      <Footer v-if="this.$route.fullPath !== '/404'" />
    </v-main>
  </v-app>

</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
  }
</style>
