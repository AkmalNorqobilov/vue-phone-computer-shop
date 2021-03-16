<template>
     <v-row justify="center" align="center" class="mt-10">         
        <h1 class="mx-5 mt-5 py-5 text-center">Create a new Product</h1>
        <v-col cols="12">
            <v-form v-model="valid">
                <v-row justify="space-around">
                    <v-col cols="12" md="6" lg="6" xl="6">
                        <v-text-field
                            color="blue"
                            counter
                            label="Product Name"
                            prepend-icon="mdi-monitor-cellphone-star"
                            :rules="[required('Product name')]"
                        ></v-text-field>
                        <v-text-field
                            :rules="[required('Product name')]"
                            color="blue"
                            counter
                            prepend-icon="mdi-cash-100"
                            label="Product Price "
                        ></v-text-field>
                        <v-textarea
                            :rules="[required('Product name')]"
                            color="blue"
                            counter
                            prepend-icon="mdi-text"
                            contextmenu="sdkfljwoeirewlrkj"
                            label="Product Title"
                            rows="5"
                        ></v-textarea>
                        <v-file-input type="file"  ref="fileInput"   @change="chooseFile" filled prepend-icon="mdi-camera" label="Choose File"></v-file-input>
                    </v-col>
                    <v-col cols="12" md="3" lg="3" xl="3">
                        <v-text-field 
                        counter
                        :rules="[required('name')]"
                        prepend-icon="mdi-memory"
                        label="name"
                        ></v-text-field>
                        <v-text-field 
                        counter
                        :rules="[required('name')]"
                        prepend-icon="mdi-memory"
                        label="name"
                        ></v-text-field>
                        <v-text-field 
                        counter
                        :rules="[required('name')]"
                        prepend-icon="mdi-memory"
                        label="name"
                        ></v-text-field>
                        <v-text-field 
                        counter
                        :rules="[required('name')]"
                        prepend-icon="mdi-memory"
                        label="name"
                        ></v-text-field>
                        <v-text-field 
                        counter
                        :rules="[required('name')]"
                        prepend-icon="mdi-memory"
                        label="name"
                        ></v-text-field>

                    </v-col>
                </v-row>    
                <v-row justify="center" align="center">
                    <v-col cols="4">
                        <v-btn  @click="sendInfo()"  large :disabled="!valid" color="success" outlined class="mx-10" block>Submit</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
      </v-row>
</template>
<script>
import {news} from '../newAddValidate'
export default {
    mixins:[news],
    name:'createLaptop',
    data:()=>({
        valid:false
    })
}
</script>