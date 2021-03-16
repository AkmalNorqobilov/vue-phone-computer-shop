<template>
      <v-overlay
      absolute="false"
      opacity=".6"
      :value="overlay"
      z-index="5"
      style="position:fixed;"
      >   
      <v-card elevation="24" class="pa-5 text-center grey darken-1">
              <v-form v-model="valid">
        <v-text-field 
        prepend-icon="mdi-account"
            label="Username" 
            name="Username"
            v-model="name" 
            :rules="[required('Name'), minLength('Name', 10), maxLength('Name',50)]" 
            counter="50" 
        ></v-text-field>

        
        <v-text-field
            prepend-icon="mdi-email"
            name="Email"
            label="Email"
            v-model="email"
            counter="true"
            type="email"
            :rules="[required('Email'), emailRules]"
        ></v-text-field>

        <v-text-field
            name="Password"
            label="Password"
            v-model="password"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show2 = !show2"
            counter="true"
            :type="show2 ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="[required('Password'), minLength('Password', 6), maxLength('Password', 30)]"
        ></v-text-field>
        <v-text-field
            prepend-icon="mdi-lock-reset"
            name="ConfirmPassword"
            label="Confirm Password"
            v-model="confirmPassword"
            type="password"
            :rules="[required('Confirm Password'), comparePassword]"
        ></v-text-field>
        <v-btn  outlined color="success" :disabled="!valid">Signup</v-btn>
    </v-form>

      </v-card>
    </v-overlay>
 
</template>

<script>
import {register} from './register'
export default {
    data: ()=>({
       
        confirmPassword: "",
    }),
    mixins:[register],
    methods: {
        comparePassword(){
            return this.password===this.confirmPassword || `Parol bilan to'g'ri bo'lsin!!!`
        }
        
    }
}
</script>