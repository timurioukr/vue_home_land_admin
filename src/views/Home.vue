<template>
  <div>
    <FirstBlock />
    <TwoBlock />
    <ThreeBlock />
    <FourBlock />
    <SixBlock />
    <SevenBlock />
    <Slots />
    <v-btn
        type="button"
        class="info"
        @click="showModal"
    >
      Open Modal!
    </v-btn>

    <Modal
        v-show="isModalVisible"
        @close="closeModal"
    >
      <template v-slot:header>
        This is a new modal header.
      </template>

      <template v-slot:body>
        This is a new modal body.
      </template>

      <template v-slot:footer>
        This is a new modal footer.
      </template>
    </Modal>
  </div>
</template>


<script>
import FirstBlock from "../components/Homepage/One.vue"
import TwoBlock from "../components/Homepage/Two.vue"
import ThreeBlock from "../components/Homepage/Three.vue"
import FourBlock from "../components/Homepage/Four.vue"
import SixBlock from "../components/Homepage/Fife.vue"
import SevenBlock from "../components/Homepage/Six.vue"
import Slots from "@/components/Homepage/Slots";
import Modal from "@/components/Modal";

export default {
  name: "Home",
  components: {
    Modal,
    Slots,
    FirstBlock, 
    TwoBlock, 
    ThreeBlock, 
    FourBlock, 
    SixBlock,
    SevenBlock,
    },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>