<template>
  <div>
    <h1>Hello Vue!</h1>
    <formData
        v-for='user in users'
        :name='user.name'
        :description='user.description'
        :is-active='user.isActive'
        :key='user.name'
    />
    <v-btn @click="sendLog" >SEND</v-btn>
  </div>
</template>

<script>
import formData from '../../src/components/form'

export default {
  data () {
    return {
      users: [
        {name: 'Alex', description: 'This is admin', isActive: true},
        {name: 'Jack', description: 'This is manager', isActive: false},
        {name: 'John', description: 'This is client', isActive: false}
      ]
    }
  },
  components: {
    formData
  },
  methods: {
    sendLog() {
      console.log(formData)
    }
  }
}
</script>




<!--<template>-->
<!--  <div>-->
<!--    <h1>Hello Vue!</h1>-->
<!--    <formData-->
<!--        :name2='"1551"'-->
<!--        :name1='"sdsdd"'-->
<!--    />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import formData from '../../src/components/form'-->

<!--export default {-->
<!--  data () {-->
<!--    return {-->
<!--      users: [-->
<!--        {name: 'Alex', description: 'This is admin', isActive: true},-->
<!--        {name: 'Jack', description: 'This is manager', isActive: false},-->
<!--        {name: 'John', description: 'This is client', isActive: false}-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  components: {-->
<!--    formData-->
<!--  }-->
<!--}-->
<!--</script>-->