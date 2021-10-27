<template lang="pug">
v-container(class="ma-10")
  v-row
    v-col(cols="12", md="6")
      h2.text-left Образовательные технологии
      p.text-left Учителя нашей Школы используют инновационные педагогические технологии в работе с Учениками. Об этом вы можете узнать от своих Детей, которые уже учатся у нас или при поступлении в нашу Школу. При этом, базовые технологии образования, успешность и результативность которых подтвердилась многолетним опытом работы с учащимися, является своеобразным фундаментом при формировании учебных программ. Предлагаем вам подробно ознакомиться с теориями, концепциями, технологиями и программами, которые наши педагоги используют во время работы.
    v-row
      v-col(cols="6", md="6")
        v-dialog(v-model="dialog1", width="500px")
          template(v-slot:activator="{ on, attrs }")
            v-card(v-bind="attrs", v-on="on")
              v-img.six-block-img-1
                span.title-span.white--text.p TRIZ
                  v-icon.white--text.ml-5(large) mdi-cog-outline
          v-card
            v-card-title
              span.mt-5 ТРИЗ (Теория Решения Изобретательских Задач)
            v-card-text ТРИЗ - Теория Решения Изобретательских Задач, создана советским инженером, писателем-фантастом Генрихом Сауловичем Альтшуллером и его учениками. Теория основывается на объективных законах Развития технических ( искусственных) систем. Альтшуллер говорил, что любой инженер со средним интеллектом может стать Изобретателем. И : Творчество можно развивать, как любой вид человеческой деятельности. А также, говорил, что ТРИЗ не вместо головы, а Для. Изучая инструменты ТРИЗ в образовании, мы формируем у учеников и педагогов Системное, творческое и критическое мышление, необходимое для Решения нестандартных задач ( таких, которые будут в Жизни и про которые мы ещё не знаем), то есть растим Решателей. ТРИЗ в школьном образовании. Начну со слов Генриха Сауловича Альтшуллера , основателя ТРИЗ: «Творчество можно развивать, как и любой вид человеческой деятельности.» «ТРИЗ для головы, а не вместо.» Цель ТРИЗ в образовании: развитие креативности , системного мышления и критического мышления для формирования качеств Творческой Личности ( по Г.С. Альтшуллеру), в том числе владение приёмами решений и умения решать задачи, то есть, качества Решателя.
            v-card-actions
              v-spacer
              v-btn(color="silver", text, @click="dialog1 = false") Закрыть
      
        v-dialog(v-model="dialog2", width="500px")
          template(v-slot:activator="{ on, attrs }")
            v-card(v-bind="attrs", v-on="on")
              v-img.six-block-img-2
                span.title-span.white--text.p ЭЙДЕТИКА
                  v-icon.white--text.ml-5(large) mdi-brain
          v-card
            v-card-title
              span.mt-5 ЭЙДЕТИКА - (философский термин «эйдос» в переводе с древнегреческого обозначает «образ», «картина», «идея») 
            v-card-text Это уникальная методика, направленная на развитие образного мышления, воображения, внимания и памяти. Научное изучение способности человека к запоминанию ярких образов началось в начале XX века венским врачом В. Урбанчичем. Более детально понятие "эйдетизма" было представлено немецким профессором Эриком Йеншеном и его последователями. Выдающийся отечественный психолог Л.С.Выготский создал лабораторию по изучению эйдетизма у детей, подтвердил выводы Йенша и написал ряд статей на эту тему. Его самый главный вывод: для детей до 12 лет эйдетизм является естественной и  закономерной стадией нормального детского развития.
            v-card-actions
              v-spacer
              v-btn(color="silver", text, @click="dialog2 = false") Закрыть
      v-col(cols="6", md="6")  
        v-dialog(v-model="dialog3", width="500px")
          template(v-slot:activator="{ on, attrs }")
            v-card(v-bind="attrs", v-on="on")
              v-img.six-block-img-3
                span.title-span.white--text.p ФСП
                  v-icon.white--text.ml-5(large) mdi-ruler-square-compass
          v-card
            v-card-title
              span.mt-5 ФСП (Функционально-Системный Подход)
            v-card-text Функционально-системный подход – это метод познания и способ описания искусственных и природных объектов, предметов и явлений окружающего мира. Используя функционально-системный анализ, мы пришли к системно-генетическому подходу в обучении. Он отличается от всех технологий развития мышления тем, что отвечает на вопрос «Как развивать мышление?» То есть, дает средство (инструмент) развития мышления. Парадоксально, но факт: П.Я.Гальперин не знал ТРИЗ, но в его работах есть мысли, созвучные ТРИЗ-педагогике.
            v-card-actions
              v-spacer
              v-btn(color="silver", text, @click="dialog3 = false") Закрыть

        v-dialog(v-model="dialog4", width="500px")
          template(v-slot:activator="{ on, attrs }")
            v-card(v-bind="attrs", v-on="on")
              v-img.six-block-img-4
                span.title-span.white--text.p ОТИ
                  v-icon.white--text.ml-5(large) mdi-school
          v-card
            v-card-title
              span.mt-5 ОТИ (Образовательная Технология "ИнтеллекТ")
            v-card-text ОТИ это новейшая образовательная технология Московской Ломоносовской школы, которую сегодня используют самые передовые образовательные учреждения – она способствует развитию у детей 4-х основных образовательных навыков (говорение, слушание, письмо и речь) и 4-х основных психологических процессов (внимание, память, мышление, воображение). Школа "ЭйдоС" второй на Украине приобрела и внедрила эту технологию. Цель Образовательной Технологии «ИнтеллекТ»: Развитие интеллектуальных способностей учеников для повышения эффективности учебной деятельности.
            v-card-actions
              v-spacer
              v-btn(color="silver", text, @click="dialog4 = false") Закрыть
</template>

<script>
export default {
  name: "SixBlock",
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
    };
  },
};
</script>

<style lang="scss" scoped>

@mixin font-six-block {
  color: #282f7e;
  font-family: "Montserrat";
}

@mixin img-six-block {
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

.six-block-img-1 {
  background: linear-gradient(rgb(2, 101, 126), rgba(35, 105, 255, 0.918)),
    url("../../assets/img/logo.png");
  @include img-six-block;
}

.six-block-img-2 {
  background: linear-gradient(rgb(2, 25, 126), rgba(123, 84, 251, 0.918)),
    url("../../assets/img/logo.png");
  @include img-six-block;
}

.six-block-img-3 {
  background: linear-gradient(rgb(50, 2, 126), rgba(128, 186, 253, 0.918)),
    url("../../assets/img/logo.png");
  @include img-six-block;
}

.six-block-img-4 {
  background: linear-gradient(rgb(100, 84, 68), rgba(197, 180, 102, 0.918)),
    url("../../assets/img/logo.png");
  @include img-six-block;
}

.title-span {
  display: flex;
  width: fit-content;
  margin: 25px 15px;
  border-radius: 5px;
  padding: 0.5%;
  font-size: 30px;
  font-weight: 400;
  font-family: "Montserrat";
}

h2 {
  font-size: 45px;
  @include font-six-block;
}

p {
  font-size: 20px;
  font-weight: 400;
  @include font-six-block;
}

.text-six-block {
  max-width: 1000px;
}

@media only screen and (max-width: 945px) {
  h2 {
    font-size: 25px;
  }
  p {
    font-size: 15px;
    width: 300px;
  }
  .title-span {
    font-size: 25px;
  }
}
</style>
