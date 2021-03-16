<template>
    <div class="ml-5 mts text-center">
        <h1 class="mx-5 mt-5 py-5 text-center">Create a new Product</h1>
            
            <v-row justify="space-between" align="center">
                <v-col cols="12" md="3" class="ml-10" xl="3" lg="3">
                    <v-btn color="success" to="/administrator/laptop/create">Create new Laptop</v-btn>
                </v-col>
                <v-col cols="12" md="5" class="ml-10 pl-10" xl="5" lg="5">
                    <v-btn-toggle>
                    <v-btn @click="sortAsc()" color="blue"><v-icon left>mdi-sort-descending</v-icon> ASC</v-btn>
                    <v-btn @click="sortDesc()" color="blue"><v-icon left>mdi-sort-ascending</v-icon> DESC</v-btn>
                <v-btn  elevation="5" color="blue"><v-icon left>mdi-pencil</v-icon>Yangi qo'shish</v-btn>
            </v-btn-toggle>
                </v-col>
            </v-row>
        
        <v-row justify="center" align="center">
            <v-col cols="10">
                <v-simple-table  class="pb-5 text-center" translate="yes" >
                    <template v-slot:default>
                        <thead>
                            <tr style="font-weight:bold;" class="blue">
                                <td>Name</td>
                                <td>Price</td>
                                <td>image</td>
                                <td>RAM</td>
                                <td>MEMORY</td>
                                <td>Pixel of Camera</td>
                                <td>number of product</td>
                                <td>View</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(laptop, index) in $store.state.laptops" dark :key="index"   :class="laptop.aboutLaptop.howMany>0?``:`red lighten-4`">
                                <td>{{laptop.name}}</td>
                                <td>{{laptop.price}} so'm </td>
                                <td>{{laptop.image}}</td>
                                <td>{{laptop.aboutLaptop.ram}} GB </td>
                                <td>{{laptop.aboutLaptop.memory}} GB </td>
                                <td>{{laptop.aboutLaptop.cameraPx}} px </td>
                                <td>{{laptop.aboutLaptop.howMany}} ta </td>
                                <td style="width:50px;"> <v-btn @click="$router.push('/administrator/laptop/view/1')" class="blue--text"  color="transparent" elevation="0"> <v-icon>mdi-eye</v-icon> </v-btn> </td>
                                <td style="width:50px;"> <v-btn  class="green--text" @click="$router.push('/administrator/laptop/update/1')"  color="transparent" elevation="0"> <v-icon>
                                    mdi-database-edit</v-icon> </v-btn> </td>
                                <td style="width:50px;"> <v-btn class="red--text"  color="transparent" elevation="0"> <v-icon>mdi-trash-can</v-icon> </v-btn> </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
      </div>
</template>

<script>
import axios from 'axios';

export default {
    // mixins:[news],
data:()=>({
        laptops:this.$store.state.laptops,
        valid:false,
        newProduct:{
        productName:'',
        productPrice:null,
        productTitle:'',
        file:'',
        aboutPhone:{
            marka:'',
            ram:null,
            memory:null,
            cameraPx:null,
            howMany:null

        }
        }
    }),
    methods:{
        chooseFile(e){
            this.file= e;
console.log(this.file);
        },
        sendInfo(){
            const fd = new FormData();
            console.log(this.newProduct)
            fd.append('productImage', this.file, this.file.name)
            //   axios.post('http://localhost:5000/products', fd)
            axios.post('http://localhost:5000/products', fd, {}, {
                onUploadProgress: uploadEvent=>{
                    console.log('upload progress ' + Math.round(uploadEvent.loaded/uploadEvent.total*1)+ '%');
                }
            })
        },
        sortAsc(){
            this.laptops.sort((a, b)=>{
                if(a.price>b.price)
                {
                    let t = a;
                    a=b;
                    b=t;
                }
            })
        }
    },
    
}
</script>