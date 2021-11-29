<template>
  <v-app>
    <v-main>
      <Header />
        <router-view></router-view>
      <Footer />
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
