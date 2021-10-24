<template>
  <div>
    <FirstBlock />
    <TwoBlock />
    <ThreeBlock />
    <FourBlock />
    <!-- <FifeBlock /> -->
    <SixBlock />
    <SevenBlock />
    <EightBlock />
  </div>
</template>


<script>
import FirstBlock from "../components/Homepage/FirstBlock.vue"
import TwoBlock from "../components/Homepage/TwoBlock.vue"
import ThreeBlock from "../components/Homepage/ThreeBlock.vue"
import FourBlock from "../components/Homepage/FourBlock.vue"
// import FifeBlock from "../components/Homepage/FifeBlock.vue"
import SixBlock from "../components/Homepage/SixBlock.vue"
import SevenBlock from "../components/Homepage/SevenBlock.vue"
import EightBlock from '../components/Homepage/EightBlock.vue'



export default {
  name: "Home",
  components: {
    FirstBlock, 
    TwoBlock, 
    ThreeBlock, 
    FourBlock, 
    // FifeBlock,
    SixBlock,
    SevenBlock,
    EightBlock
    },
  data() {
    return {};
  },
};
</script>