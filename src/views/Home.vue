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
import FirstBlock from "../components/Homepage/One.vue"
import TwoBlock from "../components/Homepage/Two.vue"
import ThreeBlock from "../components/Homepage/Three.vue"
import FourBlock from "../components/Homepage/Four.vue"
import SixBlock from "../components/Homepage/Fife.vue"
import SevenBlock from "../components/Homepage/Six.vue"



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