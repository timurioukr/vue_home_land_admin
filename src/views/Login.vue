<template lang="pug">
  v-container(
    fluid
    fill-height
    )
    v-layout(
      align-center
      justify-center
      )
      v-flex(
        xs12
        sm8
        md4
        )
        v-card(class="elevation-12")
          v-toolbar(
            color="primary"
            dark
            flat
            )
            v-toolbar-title Login form
          v-card-text
            v-form
              v-text-field(
                label="Login"
                name="login"
                prepend-icon="person"
                type="text"
                v-model="body.email"
                )
              v-text-field(
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                v-model="body.password"
                )
          v-card-actions
            v-spacer
            v-btn(color="primary" :loading="isLoading" @click="loginUser") Login
</template>


<script>
import { mapActions, mapState } from 'vuex'



export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
      body: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    ...mapActions(['getTemplate', 'setSelectedMacros', 'registrationTemplate'] ),
    loginUser(this.body) {
      this.isLoading = true
    }
  }
};
</script>

