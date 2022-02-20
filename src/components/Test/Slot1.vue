<template>
  <div class="test-slot">
    <slot name="slotOne"></slot>
    <h1>--------------</h1>
    <slot name="slotTwo"></slot>
  </div>
</template>

<script>
export default {
  name: "Slot1"
}
</script>

<style scoped>
.test-slot {
  background-color: indianred;
  width: 300px;
}
</style>