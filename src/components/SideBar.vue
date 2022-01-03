<template>
  <nav>
    <v-navigation-drawer lighten-1 app width="100">
      <div class="text-center mt-5">
        <v-list-item class="px-7">
          <v-list-item-avatar>
            <v-img :src='avatar'></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <p style="font-size: 10px">{{email}}</p>
      </div>
      <v-list flat class="mt-5">
        <v-list-item-group v-model="selectedItem" color="white">
          <v-list-item v-for="(item, i) in items" 
            :key="i" 
            active-class="border" 
            :ripple="false" 
            class="ml-2 my-3">
            <b></b>
            <b></b>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon> 
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div style="position: absolute; bottom: 20px; left: 20px; ">
        <v-btn text @click="logOut">
          <v-icon color="rgb(47, 68, 158)">mdi-logout-variant</v-icon>
        </v-btn>
      
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import '../plugins/auth/user.service'
import {router} from "@/Router";

export default {
  props: ['email', 'avatar'],
  name: 'SideBar',
  data: () => ({

    selectedItem: 0,
    drawer: null,
    items: [
      {icon: 'mdi-home '},
      {icon: 'mdi-ballot-outline'},
      {icon: 'mdi-bluetooth'},
    ]
  }),
  methods: {
    logOut() {
      localStorage.removeItem('user');
      router.push('/')
    }
  },
}
</script>

<style>

.theme--light.v-icon {
    color: rgb(47, 68, 158);
}

.border {
  background: rgba(64, 136, 251, 0.904);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  text-decoration: none;
}


</style>