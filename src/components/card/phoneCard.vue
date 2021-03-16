<template>
    <v-row justify="center">
        <v-col cols="12" sm="4" md="3"  class=""  v-for="s in $store.state.phones" :key="s.id">
            <v-card class="text-center">
                <v-card-media src="src" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                    <div>
                        <img width="100%" height="200px" :src="s.image"/>
                        <div>{{ss[0].name}}</div>
                    </div>                    
                </v-card-title>
                
                    <v-card-actions class="pa-4">
                        {{s.title}}
                    </v-card-actions>
                <v-card-actions>
                    <v-row justify="around-space">
                    <v-col cols="6"><v-btn block flat color="primary">text</v-btn></v-col>
                    <v-col cols="6"><v-btn block flat color="primary">text</v-btn></v-col>

                    </v-row>
                    {{}}
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () =>( {
        ss:[
            {id:10, name:'Iphone', image:'images/eyeemfiltered1596519972007.jpg', title:"Lorem ipsum dolor sit amet  dolorem? Doloribus deleniti nam eaque eos beatae, consectetur quasi", aboutPhone:{
                marka:'Iphone x',
                ram:16,
                memory:128,
                cameraPx:256000,
                howMany:10        
                }
            }
        ]
     }),
}
</script>