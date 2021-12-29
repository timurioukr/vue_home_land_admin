<template lang="pug">
  v-parallax(src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg")
    v-row(
      align="center"
      class="text-left"
    )
      v-col(
        cols="12"
      )
        h1(class="text-h4 font-weight-thin mb-4") What was used to create this project?
        v-list
          template(v-for="(item, index) in items")
            v-list-item(v-if="item.action" :key="item.title")
              v-list-item-action
                v-icon {{ item.action }}
              v-list-item-content
                v-list-item-title {{ item.title }}
</template>

<script>

export default {
  name: "Contacts",
  components: {
  },
  data() {
    return {
      inset: true,
      items: [
        {
          action: 'mdi-label',
          title: 'Vue',
        },
        {
          action: 'mdi-label',
          title: 'Vuetify',
        },
        {
          action: 'mdi-label',
          title: 'Vuex',
        },
        {
          action: 'mdi-label',
          title: 'Pug',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>