<template>
  <v-app>
    <v-app-bar
      height="auto"
      app
      color="primary"
      dark
      flat
    >

      <v-app-bar-nav-icon class="hidden-lg-and-up" v-if="!$store.state.isAdmin" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-icon class="white--text text-h3">mdi-cart-plus</v-icon>
        <h1 class="ml-3" >Shopping</h1>        

        <v-spacer></v-spacer>
        <v-btn-toggle  mandatory>
          <v-btn height="40px" @click="$router.push('/')" class="hidden-sm-and-down"  color="primary"> <v-icon left>mdi-home</v-icon> Home</v-btn>
          <v-btn v-if="$store.state.isAdmin" class="hidden-sm-and-down" height="40px" color="primary">Administrator </v-btn>
          <v-btn height="40px" color="primary" class="hidden-sm-and-down">About Us</v-btn>
        </v-btn-toggle>
        <v-menu
          left
          bottom
          >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              right
              id="Colors"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="goAdminPanel()">
              <v-list-item-title >Administrator</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Register()">
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
          
          </v-list>
        </v-menu>
        
      </v-app-bar>

      <v-navigation-drawer @click="drawer = !drawer" app  v-if="!drawer" color="primary">
          <navigationList/>
      </v-navigation-drawer>
      <v-main>
      <router-view></router-view>
      <v-footer app class="mt-5" height="auto" elevation="24" color="grey darken-1">
        <v-row justify="center" align="center">
        </v-row>
       </v-footer>

      </v-main>
    <v-btn v-if="toTop" left style=" z-inde:5; position:fixed; bottom:5%; right:1%; z-index:8;" class="red" fab @scroll="toTop()" href="#"><v-icon>mdi-arrow-up-thick</v-icon></v-btn>
    <v-overlay
      absolute="false"
      opacity=".6"
      :value="overlay"
      z-index="5"
      style="position:fixed;"
      >   
      <v-card elevation="24" class="pa-5 text-center grey darken-1">
        <v-btn block color="secondary" disabled text class="text-h4 mb-4"  dark>Register</v-btn>
        <v-btn-toggle mandatory>
          <v-btn v-if="!goAdmin" @click="register='Signup'" ><v-icon color="blue" left>mdi-account-plus</v-icon> Signup</v-btn>
          <v-btn @click="register='Signin'">  <v-icon color="blue" left>mdi-login</v-icon>Login</v-btn>
          <v-btn @click="overlay= !overlay"> <v-icon color="error">mdi-close-box-multiple</v-icon></v-btn>
        </v-btn-toggle>
        <component :is="register"></component>
      </v-card>
    </v-overlay>
  </v-app>
</template>

<script>
import Signup from './components/register/Signup'
import Signin from './components/register/Signin'
// import HelloWorld from './components/HelloWorld';
import navigationList from './components/navigationList'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Signup,
    Signin,
    navigationList
  },

  data: () => ({
    picker:'',
    drawer: false,
    overlay:false,
    register:'Signup',
    goAdmin:false,
    toTop:false
  }),
  methods:{
    goAdminPanel(){
      this.goAdmin = true;
      if(!this.$store.state.isAdmin){
        this.register = 'Signin'
        return this.overlay = true
      }
    },
    Register(){
      this.goAdmin=false ;
      this.overlay=!this.overlay; 
    },
    toTop(){
      setTimeout(alert('salom sizlarga'), 1000);
    },
    add(){
      this.$store.dispatch('add', 1)
    }
  }

};
</script>
