<template lang="pug">
  v-footer(padless color="primary lighten-1")
    v-col(class="text-center" cols="12")
      v-btn(
        v-for="icon in icons"
        :key="icon"
        class="mx-4 white--text"
        icon)
          v-icon(size="24px") {{ icon }}
      v-card-text(class="white--text") {{ new Date().getFullYear() }} — <strong>Школа "ЭйдоС"</strong>
</template>

<script>
  export default {
    name: "Footer",
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-instagram',
      ],
    }),
  }
</script>