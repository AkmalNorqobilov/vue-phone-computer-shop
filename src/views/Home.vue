<template>
  <div>
      <v-row justify="center">
        <v-col cols="12">
          <div class="mts">
                    <v-parallax
              height="300"
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
              class="mt-6"
            >
              <v-row align="center">
                <v-col cols="12">
                    <h1 class="text-md-h1">Shopping</h1>
                </v-col>
              </v-row>
            </v-parallax>
          </div>
        </v-col>
        </v-row>      
      <tabs @click="alert(toTop)"/> 
  </div>
</template>

<script>
// @ is an alias to /src
import tabs from '../components/tabs/tabs'
export default {
  name: 'Home',
  components: {
    tabs,
  }
}
</script>
