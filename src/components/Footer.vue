<template lang="pug">
  v-footer(padless color="primary lighten-1")
    v-col(class="text-center" cols="12")
      v-card-text(class="white--text") {{ new Date().getFullYear() }} — <strong>Pet Project</strong>
</template>

<script>
  export default {
    name: "Footer",
    data: () => ({
    }),
  }
</script>