<template>
  <div v-if="users && user && posts.length > 1">
    <SideBar />
    <v-container>
      <v-app-bar color="rgba(0,0,0,0)" flat >
        <v-text-field
          label="Search..."
          class="pt-5"
          filled
          prepend-inner-icon="mdi-magnify"
          dense
          solo
          flat
          background-color="blue lighten-5"
          rounded
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon dark  @click="ballActive = !ballActive">
          <v-icon color="black">{{ ballActive ?' mdi-bell' :' mdi-bell-off' }} </v-icon>
        </v-btn>
        <v-select
          class="mt-7"
          :items="items"
          v-model="select"
          item-text="state"
          color="black"
          solo
          flat
          style="max-width: 7%;"
          item-color="grey darken-2"
        ></v-select>
        <span text color="#878A94">{{ user.first_name }}</span>
        <v-avatar size='50' class="ml-2">
          <v-img :src='user.avatar'></v-img>
        </v-avatar>
      </v-app-bar>
      <v-row>
        <v-col cols="12" sm="8">
          <v-card class="mx-4 mt-5 rounded-xl pa-4" color="blue lighten-5" flat>
            <v-row>
              <v-col cols="12" sm="8">
                <v-list-item three-line>
                  <v-list-item-content>
                  <v-list-item-title class="text-h4" mb-1>{{this.posts[0].title}}</v-list-item-title>
                  <v-list-item-subtitle v-if="viewDetail">{{this.posts[0].body}}</v-list-item-subtitle>
                    <p v-else>{{this.posts[0].body}}</p>
                  </v-list-item-content>
                </v-list-item>
                <v-card-actions>
                  <v-btn class="px-3" color="primary" dark @click="viewDetail = !viewDetail">View detail</v-btn>
                </v-card-actions>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img
                src="../assets/img/petProject/userAdmin.png"
                class="mt-n16"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
          <v-toolbar flat color="rgba(0,0,0,0)" dense class="mt-5">
            <v-toolbar-title>Last news</v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="grey--text" @click="showAllNews = !showAllNews" style="cursor: pointer;">Show all news</span>
          </v-toolbar>
          <v-row class="mt-n5">
            <v-col
                lazy
                cols="12"
                sm="4"
                v-for="post in newsPostLists"
                :key="post.id">
              <v-card
                  class="rounded-xl ml-4"
                  color="blue lighten-5"
                  flat>
                  <v-card-title>{{post.title.slice(4, 20)}}</v-card-title>
                  <v-card-text>{{itemDates.body}}</v-card-text>
                  <v-card-actions class="mt-n7">
                    <v-list-item>
                      <div color="grey darken-3">
                        <v-avatar class="ml-n2" size="30"  v-for="user in users" :key="user.id">
                          <v-img :src='user.avatar'></v-img>
                        </v-avatar>
                      </div>

                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>


          <v-toolbar flat color="rgba(0,0,0,0)" dense class="mt-5">
            <v-toolbar-title>Qantity of users: {{ users.length }}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card class="mx-4 pa-5 rounded-xl" color="blue lighten-5" flat>
              <v-spacer></v-spacer>
            <v-btn-toggle v-model="btnToggle">
              <v-btn value="weekly" @click="mountlySparkData = false">
                Weekly
              </v-btn>
              <v-btn value="mountly" @click="mountlySparkData = true">
                Monthly
              </v-btn>
            </v-btn-toggle>
            </v-toolbar>
            <v-sparkline
                :value="currentSparkData"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
                color="black"
                class="mt-8 mb-2"
              ></v-sparkline>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" class="mt-5">
          <v-card class="rounded-xl pa-5" color="blue lighten-5" flat>
            <v-app-bar color="rgba(0,0,0,0)" tile>
              <v-icon color="black">mdi-comment-text-multiple-outline</v-icon>
              <strong class="subtitle black--text ml-2">
                Comments <span class="caption"><br>{{ initialComments }}</span>
              </strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" class="ml-2">mdi-chevron-triple-left </v-icon>
            </v-app-bar>

              <v-card color="white" class="rounded-xl pa-1 mt-6" flat>
                <div class="text-center ma-5">
                  <h2>Books</h2>
                  <v-btn class="mt-5" dark color="primary" @click="initialCommentsAdd">Pay</v-btn>
                </div>
              </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SideBar from '../components/SideBar'


export default {
  name: 'AdminPage',
  components: {
    SideBar
  },
  data: () => ({
    mountlySparkData: false,
    itemDates: {
      title: 'Soms',
      text: 'Lorem ipsum set amet doloren'
    },
    showAllNews: false,
    viewDetail: true,
    ballActive: true,
    select: {state: 'EN'},
    items: ['EN', 'ES', 'DZ'],
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    btnToggle: 'weekly',
    valueWeekly: [],
    valueMontly: [],
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    value: 0
  }),
  created() {
    this.getUserProfile()
    this.getPosts()
    this.getUsers()
    this.getWebsocketData()
  },
  computed: {
    ...mapState({
      posts: state => state.posts,
      user: state => state.profile.data,
      users: state => state.users.data
    }),
    newsPostLists() {
      return this.showAllNews ? this.posts.slice(0, 15) : this.posts.slice(0, 3)
    },
    currentSparkData() {
      return this.mountlySparkData ? this.valueMontly : this.valueWeekly
    },
    initialComments() {
      return this.valueWeekly.length + this.value
    }
  },
  methods: {
    ...mapActions(['getUserProfile', 'getPosts', 'getUsers']),
    initialCommentsAdd() {
      this.value++
    },
    getWebsocketData() {
      try {
        this.socket = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr")
        this.socket.onopen = () => {
          this.socket.onmessage = (e) => {
            const parseInData = JSON.parse(e.data)
            const a = parseInData.slice(0,5)
            const b = a[0].q
            this.valueWeekly.length < 55 ?
                this.valueWeekly.push(Number(b.slice(12))) && this.valueMontly.push(Number(b.slice(12))/2+3) :
                this.valueWeekly.splice(1, 40)
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
  }
}
</script>

<style>

</style>