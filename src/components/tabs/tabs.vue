<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
      slider-color="red"     
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Phones
        <v-icon>mdi-cellphone</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Laptops
        <v-icon>mdi-laptop</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Other Devices
        <v-icon>mdi-tablet-cellphone</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 2"
        :key="i"
        :value="'tab-' + i"
      >
        <card :msg="tabs[i-1]"/>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  import card from '@/components/card/card.vue'
  export default {
    components:{
      card
    },
    data () {
      return {
        tabs:[this.$store.state.phones, this.$store.state.laptops],
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>