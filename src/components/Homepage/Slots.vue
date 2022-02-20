<template>
  <div>
    <Slot1>
      <h1 slot="slotOne">Slots test</h1>
      <p slot="slotTwo">Lorem ipsum set amet dolorem</p>
    </Slot1>
  </div>
</template>

<script>
import Slot1 from "../Test/Slot1"
export default {
  components: {
    Slot1
  },
  name: "Slots"
}
</script>

<style scoped>

</style>