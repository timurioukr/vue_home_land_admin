<template lang="pug">
  v-form
    v-container
      v-row
        v-col(
            cols="12"
            sm="6"
            md="3"
            )
          v-text-field(
            :label="name"
            )
          p {{isActive}}
</template>

<script>
export default {
  props: {
    name: String,
    isActive: Boolean
  },
}
</script>


<!--<template lang="pug">-->
<!--  div-->
<!--    v-form-->
<!--      v-container-->
<!--        v-row-->
<!--          v-col(-->
<!--            cols="12"-->
<!--            sm="6"-->
<!--            md="3"-->
<!--          )-->
<!--            v-text-field(-->
<!--              :label="name1"-->
<!--            )-->
<!--            v-text-field(-->
<!--              :label="name2"-->
<!--            )-->

<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  props: {-->
<!--    name1: String,-->
<!--    name2: String,-->
<!--  }-->
<!--}-->
<!--</script>-->