<template>
  <v-container class="ma-0 pa-0">
    <v-app-bar app fixed style="z-index: 1000">
      <a href="/">
        <v-img
          class="mx-2"
          src="@/assets/img/logo.png"
          max-height="50"
          max-width="50"
          style="cursor: pointer">
        </v-img>
      </a>
      <v-toolbar-title>
        <router-link
          class="header-logo-title"
          to="/" 
          tag="span"
          >{{ companyName }}
        </router-link>
      </v-toolbar-title>

    <v-spacer></v-spacer>
    
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        class="header-menu"
        text
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        >{{item.title}}</v-btn>
      </v-toolbar-items>
      
<!-- Mobile menu -->
        <v-btn
          class="hidden-md-and-up"
          text 
          color="#282f7e"
          @click="dialogMenu = true"
          ><v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-dialog
            v-model="dialogMenu"
            max-width="290"
            >
            <v-list style="opacity: 0.85">
              <v-list-item  
                @click="dialogMenu = false"
                v-for="item in menuItems"
                :key="item.title"
                :to="item.path"
                >
                <v-list-item-title class="text-center">
                  <span class="v-list-item-title-text">{{ item.title }}</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>  
          </v-dialog>
  </v-app-bar>
</v-container>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      dialogMenu: false,
      companyName: "HOME PROJECT",
      menuItems: [
        { title: "Home", path: "/" },
        { title: "Admin panel", path: "admin" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

$colorBrend: #282f7e;

.header-logo-title {
  color: $colorBrend;
  cursor: pointer; 
  font-family: 'Montserrat';
  font-weight: 500;
}

.hidden-sm-and-down .header-menu {
  font-weight: 500;
  color: $colorBrend;
  font-family: 'Montserrat';
}

.v-icon:hover {
  transform: rotate(180deg)
}

.header-menu.theme--light.v-btn--active::before {
    opacity: 0
}

.v-list-item-title-text {
  color: $colorBrend;
  font-family: 'Montserrat'; 
  font-weight: 500; 
  font-size: 20px
}

</style>
