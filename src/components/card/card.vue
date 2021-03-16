<template>
<div>

  <v-row justify="center">
   <v-col v-for="ms in msg" :key="ms.id" md="4" class="hidden-md-only" sm="6">
    <v-card

     class="mx-auto"
     max-width="344"
     elevation="24"
    >
    <div>    
     <v-img
       :src="ms.image"
       :height="ms.height"
        width="100%"
        contain
></v-img>

    </div>
     <v-card-title>
        <v-row>
          <v-col cols="12" md="6" class="text-center">{{ms.name}} </v-col>
          <v-col cols="12" md="6" class="text-center">{{ms.price}} So'm </v-col>
        </v-row>

     </v-card-title>

     <v-card-subtitle>
        <v-divider color="red lighten-5"></v-divider>
        <div class="text-center text-md">
          {{ms.title}}
        </div>
     </v-card-subtitle>

     <v-card-actions>
        <v-row justify="center">
        <v-col cols="12">
          <v-btn-toggle  multiple v-model="value">
            <v-btn @click="ms.celled = minus(ms.celled, ms.price)" class="blue lighten-3" ><v-icon>mdi-minus</v-icon></v-btn>
            <v-text-field
              class="text-center"
              name="name"
              v-model="ms.celled"
              type="number"
              :rules="[numberRules]"
              
              id="id"
            ></v-text-field>
            <v-btn @click="ms.celled=plus(ms.celled, ms.aboutPhone.howMany, ms.price)" color="blue lighten-3"><v-icon>mdi-plus</v-icon></v-btn>
            <v-btn
              color="purple"
              text
              outlined
              @click="()=>{ overFlowPhone(ms.id); overlayChange()}"
            >
              Batafsil
            </v-btn>

          </v-btn-toggle>
        </v-col>
        </v-row>
     </v-card-actions>
   </v-card>
   </v-col>
  </v-row>
  <v-overlay v-if="overlay" opacity=".9">
  <v-row justify="around-space" align="center" class="text-center">
    <v-col  md="8" sm="6" xs="6" >
      <v-card
     class="mx-auto"
     max-width="500"
    >
     <img
       :src="onePhone.image"
       height="60%"
       width="100%"
      />

     <v-card-title class="text-center">
        <v-row>
          <v-col cols="5" md="6" class=" text-center"> {{onePhone.name}} </v-col>
          <v-col cols="7" md="6" class="text-center"> {{onePhone.price}} So'm </v-col>
        </v-row>
     </v-card-title>

     <v-card-subtitle class="hidden-xs-only">
        
        <v-divider color="red lighten-5"></v-divider>
        <div class="text-center text-md">
          {{onePhone.title}}
          {{onePhone.id}}
        </div>
     </v-card-subtitle>

     <v-card-actions>
       <v-btn
         text
         class="close-overlay blue darken-5 white--text"
         fab
         @click="overlay = !overlay"
       >
        <v-icon>mdi-close</v-icon>
       </v-btn>
       
       <v-btn-toggle  multiple v-model="onePhone.called">
            <v-btn @click="onePhone.celled = minus(onePhone.celled, onePhone.price)" class="blue lighten-3" ><v-icon>mdi-minus</v-icon></v-btn>
            <v-text-field
              class="text-center"
              name="name"
              v-model="onePhone.celled"
              type="number"
              :rules="[numberRules]"
              
              id="id"
            ></v-text-field>
            <v-btn @click="onePhone.celled=plus(onePhone.celled, onePhone.aboutPhone.howMany, onePhone.price)" color="blue lighten-3"><v-icon>mdi-plus</v-icon></v-btn>
            <v-btn
              :disabled="onePhone.celled>0?false:true"
              color="purple"
              text
              outlined
              @click="()=>{ bought(); onePhone.alert=true; }"
            >
              Sotib Olish
            </v-btn>

          </v-btn-toggle>
          
      
          <v-alert
            v-if="onePhone.alert"
            dark
            type="success"
            border="top"
            transition="scale-transition"
            dismissible
            close-icon="mdi-close"
            elevation="24"
            class="alert text-center"
          >
            Haridingiz uchun rahmat!!!
          </v-alert>
     </v-card-actions>
   </v-card>
    </v-col>
    <v-col md="4" sm="6" xs="6">
      <v-simple-table class="pb-5" dense>
        <template v-slot:default="">
            <tbody>
              <tr v-for="(one, value, index) in onePhone.aboutPhone" :key="index">
                <td>{{value}}</td>
                <td>{{one}}{{properties(value)}}</td>
                
              </tr>
            </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
  </v-overlay>
 </div>
</template>
<script>
  export default {
    data: () => ({
      show: false,
      overlay:false,
      onePhone:null,
      numbers:0,
      Alert:false,
      numberRules: v => v && v>0 ||`noldan katta son kiriting!!!`
    }),
    props:{
      msg:Array
    },
    methods:{
      overlayChange(){
        this.overlay = true;
      },
      overFlowPhone(_id){
        this.onePhone = this.msg.find(({id}) => {
          return id === _id
        })
      },
      minus(value){
        value = (value>0)?value-1: 0
        // 
        return value;
      },
      plus(value, b){
        value = (value<b)?value+1:b;
        // 
        return value;
      },
      properties(value){
        if(value==='ram'|| value === 'memory'){
          return ' GB'
        }else if(value === 'cameraPx')
        return ' Pixel'
        else if (value === 'howMany')
        return ' ta'
        else return ''
      },
      bought(){
      this.$store.dispatch('add', this.onePhone)
    }

    }
  }
</script>