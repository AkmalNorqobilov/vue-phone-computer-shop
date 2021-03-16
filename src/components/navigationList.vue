<template>
  <div>
    <v-list>
         <v-avatar class="text-center mr-3" left><img src="phones/3.png" alt="rasm"/></v-avatar>
          <v-list-tile class="text-h5 white--text">Admin Panel</v-list-tile>
        <v-divider></v-divider>
      <v-list-item-group mandatory active-class="border">
      
        <v-list-item  class="white--text" @click="$router.push('/administrator')"> 
          <v-list-item-icon> 
            <v-icon>mdi-view-dashboard</v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Dashboard
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    <v-list-group
            v-model="sdklfjir"
            :prepend-icon="icon"
            no-action
            value="Salom"
            color="white"
          > 
            <template v-slot:activator>
              <v-list-item-icon class="white--text"><v-icon>mdi-cart-plus</v-icon></v-list-item-icon>
               <v-list-item-content>
            <v-list-item-title class="white--text" v-text="'Add New'"></v-list-item-title>
          </v-list-item-content>
            </template>
              
        <v-list-item class="white--text" v-for="listGroupItem in listGroupItems " :key="listGroupItem.name" @click="$router.push(`/administrator/${listGroupItem.routerName}`)" > 
          <v-list-item-icon> 
            <v-icon>{{listGroupItem.icon}}</v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{listGroupItem.name}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          </v-list-group>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data:()=>({
    listGroupItems:[
        {name:'Phone', icon:'mdi-cellphone-arrow-down', routerName:'phone'},
        {name:'Laptop', icon:'mdi-laptop-mac', routerName:'laptop'},
        {name:'Device', icon:'mdi-monitor-cellphone-star', routerName:'device'}
    ]
  })
}
</script>