<template lang="pug">
div.block-first
  v-row.pa-0.ma-0
    v-col.block-first-content(cols="12", md="12")
      v-img.mb-4.block-first-logo(src="../../assets/img/logo.png")
      h2 Школа «ЭйдоС» 
      p Частный комплекс непрерывного образования
      v-btn.mt-5(color="#282f7e", large, rounded style="max-width: 350px; color: rgb(255, 255, 255);") Отправить заявку на экскурсию    
</template>

<script>
export default {
  name: "FirstBlock",
  data() {
    return {
      dialog: false,
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>

$colorBrend: #282f7e;


.block-first {
  background: linear-gradient(
      rgba(161, 178, 251, 0.589),
      rgba(255, 255, 255, 0.678)
    ),
    url("../../assets/img/HomePage/koridor.jpg");
  background-size: cover;
  height: 900px;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &-logo {
  width: 250px;
  }
  &-content {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  }
}
h2 {
  font-size: 85px;
  color: $colorBrend;
  font-family: "Montserrat";
}
p {
  font-size: 30px;
  font-weight: 400;
  color: $colorBrend;
  font-family: "Montserrat";
  width: 600px;
}
@media only screen and (max-width: 1000px) {
  .block-first-logo {
  width: 100px;
  height: 100px;
  }
  .block-first {
    height: 500px;
  }
  h2 {
    font-size: 30px;
  }
  p {
    width: 300px;
    font-size: 20px;
  }
  .v-btn {
    width: 225px;
    font-size: 10px;
  }
}
</style>