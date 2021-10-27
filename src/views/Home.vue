<template>
  <div>
    <FirstBlock />
    <TwoBlock />
    <ThreeBlock />
    <FourBlock />
    <SixBlock />
    <SevenBlock />
  </div>
</template>


<script>
import FirstBlock from "../components/Homepage/OneBlock.vue"
import TwoBlock from "../components/Homepage/TwoBlock.vue"
import ThreeBlock from "../components/Homepage/ThreeBlock.vue"
import FourBlock from "../components/Homepage/FourBlock.vue"
import SixBlock from "../components/Homepage/FifeBlock.vue"
import SevenBlock from "../components/Homepage/SixBlock.vue"



export default {
  name: "Home",
  components: {
    FirstBlock, 
    TwoBlock, 
    ThreeBlock, 
    FourBlock, 
    SixBlock,
    SevenBlock,
    },
  data() {
    return {};
  },
};
</script>