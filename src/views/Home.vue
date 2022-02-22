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
    <div>
      <v-btn type="button" @click="openPopup">Открыть окно</v-btn>
      <Popup
          :is-open="isPopupOpen"
          @ok="popupConfirmed"
          @close="isPopupOpen = false"
      >
        Вы действительно хотите освоить правильные подходы к проектированию систем
        во Vue?
        <template #actions="{ confirm }">
          Напишите
          <input :placeholder="$options.CONFIRMATION_TEXT" v-model="confirmation" />
          <v-btn
              type="button"
              class="info"
              @click="confirm"
              :disabled="!isConfirmationCorrect">OK</v-btn>
        </template>
      </Popup>
    </div>
  </div>
</template>


<script>
import FirstBlock from "../components/Homepage/One.vue"
import TwoBlock from "../components/Homepage/Two.vue"
import ThreeBlock from "../components/Homepage/Three.vue"
import FourBlock from "../components/Homepage/Four.vue"
import SixBlock from "../components/Homepage/Fife.vue"
import SevenBlock from "../components/Homepage/Six.vue"
import Slots from "@/components/Homepage/Slots"
import Modal from "@/components/Modal"
import Popup from "@/components/Popup"

export default {
  name: "Home",
  components: {
    Popup,
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
      isPopupOpen: false,
      confirmation: "",
      isModalVisible: false,
    };
  },
  CONFIRMATION_TEXT: "ПОДТВЕРЖДАЮ",
  computed: {
    isConfirmationCorrect() {
      return this.confirmation === this.$options.CONFIRMATION_TEXT;
    },
  },
  methods: {
    openPopup() {
      this.confirmation = "";
      this.isPopupOpen = true;
    },
    popupConfirmed() {
      alert("Confirmed!");
      this.isPopupOpen = false;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>