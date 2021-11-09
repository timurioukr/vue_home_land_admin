<template>
  <nav>
    <v-navigation-drawer lighten-1 app width="100">
      <div class="text-center mt-5">
        <v-btn fab color="white" x-large>
          <v-icon color="black">fa fa-user-tie</v-icon>
        </v-btn>
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
        <v-btn text>
          <v-icon color="rgb(47, 68, 158)">fas fa-sign-out-alt</v-icon>
        </v-btn>
      
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
      {icon: 'fas fa-home'},
      {icon: 'fas fa-th-large'},
      {icon: 'fas fa-calendar'},
      {icon: 'fas fa-archive'},
      {icon: 'fas fa-cog'},
    ]
  })
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

/* .border b:nth-child(1) {
  position: absolute;
  top: -20px;
  height: 20px;
  width: 83%;
  background: white;
  display: none;
}

.border b:nth-child(1)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 20px;
  background: rgba(64, 136, 251, 0.904);;
}

.border b:nth-child(2) {
  position: absolute;
  bottom: -20px;
  height: 20px;
  width: 83%;
  background: none;
}

.border b:nth-child(2)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-right-radius: 20px;
  background: rgba(64, 136, 251, 0.904);
}

.border b:nth-child(1),
.border b:nth-child(2) {
  display: block;
} */


</style>