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
        v-card(class="elevation-2")
          v-card-text
            v-form(@submit.prevent="handleSubmit")
              v-text-field(
                :class="{ 'is-invalid': submitted && !username }"
                label="Username"
                name="username"
                prepend-icon="person"
                type="text"
                v-model="username"
                )
              div(v-show="submitted && !username" class="invalid-feedback")
                p Username is required
              v-text-field(
                :class="{ 'is-invalid': submitted && !password }"
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                v-model="password"
                )
              div(v-show="submitted && !password" class="invalid-feedback")
                p Password is required
          v-card-actions
            v-spacer
            svg(xmlns="http://www.w3.org/2000/svg" version="1.1")
              defs
                filter(id="gooey")
                  feGaussianBlur(in="SourceGraphic" stdDeviation="5" result="blur")
                  feColorMatrix(in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic")
                  feComposite(in="SourceGraphic" in2="highContrastGraphic" operator="atop")
            v-btn(id="gooey-button" :ripple="false" :loading="isLoading" @click="handleSubmit") Login
              span.bubbles
                span.bubble
                span.bubble
                span.bubble
                span.bubble
                span.bubble
                span.bubble
                span.bubble
                span.bubble
                span.bubble


</template>

<script>
import { router } from "../Router/index";
import { userService } from "@/plugins/auth";

export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
      username: "eve.holt@reqres.in",
      password: "cityslicka",
      submitted: false,
      loading: false,
      returnUrl: "",
      error: ""

    };
  },
  created() {
    userService.logout();
    this.returnUrl = this.$route.query.returnUrl || "/";
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (!(username && password)) {
        return;
      }
      this.isLoading = true
      userService.login(username, password)
          .then(router.push(this.returnUrl),
          error => {
            router.push('/login')
            this.error = error;
            this.isLoading = false
          }
      );
    }
  }
};
</script>

<style lang="sass">

.invalid-feedback
  color: indianred

.is-invalid>.v-input__control>.v-input__slot
  background-color: rgba(255, 0, 0, 0.07)

.v-card
  border-radius: 12px !important

$prime: #1976d2
$second: #ffff

svg
  position: absolute
  top: -400px
  left: -4500px

#gooey-button
  padding: 1px
  font-size: 12px
  border: none
  color: $second
  filter: url('#gooey')
  position: relative
  background-color: $prime

  &:focus
    outline: none

  .bubbles
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0

    .bubble
      background-color: $prime
      border-radius: 100%
      position: absolute
      top: 0
      left: 0
      display: block
      z-index: -1

      @for $bubble from 1 through 10
        &:nth-child(#{$bubble})
          $size: 20px
          left: (random(30) + 10)+px
          width: $size
          height: $size
          animation: move-#{$bubble} #{3 + $bubble*0.02}s infinite
          animation-delay: #{$bubble*0.2}s

@for $bubble from 1 through 10
  @keyframes move-#{$bubble}
    0%
      transform: translate(0, 0)
    99%
      transform: translate(0, -(random(80) + 50)+px)
    100%
      transform: translate(0, 0)
      opacity: 0

</style>

