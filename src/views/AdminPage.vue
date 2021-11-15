<template>
  <v-template>
    <SideBar />
    <v-container>
      <v-app-bar color="rgba(0,0,0,0)" flat>
        <v-text-field 
          label="Search..." 
          class="pt-5" 
          filled 
          prepend-inner-icon="mdi-magnify"
          dense 
          solo 
          flat 
          background-color="grey lighten-4" 
          rounded
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon dark>
          <v-icon color="black">far fa-bell</v-icon>
        </v-btn>
        <v-select 
          class="mt-7" 
          :items="items" 
          v-model="select" 
          item-text="state" 
          color="black" 
          solo 
          flat 
          style="max-width: 7%;" item-color="grey darken-2"
        ></v-select>
        <span text color="#878A94">School</span>
        <v-avatar size='30' class="ml-2">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-app-bar>
      <v-row>
        <v-col cols="12" sm="8">
          <v-card class="mx-4 rounded-xl pa-4" color="grey lighten-3" flat>
            <v-row>
              <v-col cols="12" sm="8">
                <v-list-item three-line>
                  <v-list-item-content>
                  <v-list-item-title class="text-h4" mb-1>School</v-list-item-title>
                  <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum distinctio iure animi. Cumque necessitatibus eaque eligendi commodi veritatis. Repellendus blanditiis iusto, eaque doloribus sunt perferendis laborum nobis cumque dicta!</v-list-item-subtitle>
                  <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum distinctio iure animi. Cumque necessitatibus eaque eligendi!</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-card-actions>
                  <v-btn class="px-3" color="black" dark>View detail</v-btn>
                </v-card-actions>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img 
                src="../assets/img/EidosCRM/teacher.png" 
                class="mt-n16" 
                style=" transform: rotateY(180deg)"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
          <v-toolbar flat color="rgba(0,0,0,0)" dense class="mt-n1">
            <v-toolbar-title>Последние новости</v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="grey--text">Смотреть все</span>
          </v-toolbar>
          <v-row class="mt-n5">
            <v-col cols="12" sm="4">
              <v-card class="rounded-xl ml-4" color="grey lighten-3" flat>
                <v-card-title>
                  <span class="text-h6 font-weight-light">Что-то</span>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quia.
                </v-card-text>
                <v-card-actions class="mt-n7">
                  <v-list-item>
                    <div color="grey darken-3">
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/4.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30" color="black">
                        <span class="caption white--text">+1</span>
                      </v-avatar>
                    </div>
                    <v-row align="center" justify="center">
                      <v-icon class="mr-1" small>fas fa-hands-wash</v-icon>
                      <span class="caption">1.5</span>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card class="rounded-xl ml-4" color="grey lighten-3" flat>
                <v-card-title>
                  <span class="text-h6 font-weight-light">Что-то</span>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quia.
                </v-card-text>
                <v-card-actions class="mt-n7">
                  <v-list-item>
                    <div color="grey darken-3">
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/4.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30" color="black">
                        <span class="caption white--text">+1</span>
                      </v-avatar>
                    </div>
                    <v-row align="center" justify="center">
                      <v-icon class="mr-1" small>fas fa-hands-wash</v-icon>
                      <span class="caption">1.5</span>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12" sm="4">
              <v-card class="rounded-xl" color="grey" flat>
                <v-card-title>
                  <span class="text-h6 font-weight-light">Что-то</span>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quia.
                </v-card-text>
                <v-card-actions class="mt-n6">
                  <v-list-item>
                    <div color="grey darken-3">
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30">
                        <img src="https://cdn.vuetifyjs.com/images/lists/4.jpg">
                      </v-avatar>
                      <v-avatar class="ml-n3" size="30" color="black">
                        <span class="caption white--text">+1</span>
                      </v-avatar>
                    </div>
                    <v-row align="center" justify="center">
                      <v-icon class="mr-1" small>fas fa-hands-wash</v-icon>
                      <span class="caption">1.5</span>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-card class="mx-4 rounded-xl pa-6 mt-2" color="grey lighten-3" flat>
            <v-toolbar flat color="rgba(0,0,0,0)" dense class="mt-n5">
              <v-toolbar-title>Analitics</v-toolbar-title>
            
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="text" small dense dark background-color="primary">
              <v-btn value="weekly">
                Weekly
              </v-btn>
              <v-btn value="monthly">
                Monthly
              </v-btn>
            </v-btn-toggle>
            </v-toolbar>
            <v-sparkline :value="value" 
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
            color="black"
            class="mt-n8 mb-n8"

            ></v-sparkline>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4"></v-col>
      </v-row>
    </v-container>
  </v-template>
</template>

<script>
import SideBar from '../components/AdminPage/SideBar.vue'

export default {
  name: 'AdminPage',
  components: {
    SideBar
  },
  data: () => ({
    select: {state: 'EN'},
    items: ['EN', 'ES', 'DZ'],
    text: 'weekly',
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    value: [0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  })
}
</script>

<style>

</style>