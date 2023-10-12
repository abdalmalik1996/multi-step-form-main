<template>
    <main>
        <v-card-title  class="text-h5 text-md-h4 font-weight-bold mb-1 mb-md-3"  style="color: #02295a">Personal info</v-card-title>
        <v-card-subtitle class="text-wrap">Please provide your name, email address, and phone number.</v-card-subtitle>
        <v-sheet class="mt-6">
            <v-form ref="form" >
            <div class="font-weight-bold mb-2"  style="color: #05438e !important">Name</div>
          <v-text-field 
            density="compact"
            placeholder="e.g. Stephen King"
            variant="outlined"
            color="#473dff"
            class="text-indigo-darken-4 font-weight-medium"
            v-model="user.name"
            :rules="nameRules"
            type="text"
          ></v-text-field>

          <div class="mt-2 mt-md-3 font-weight-bold mb-2"  style="color: #05438e !important">Email Address</div>
          <v-text-field
            density="compact"
            placeholder="e.g. stephenking@lorem.com"
            variant="outlined"
            color="#473dff"
            class="text-indigo-darken-4 font-weight-medium"
            v-model="user.email"
            :rules="emailRules"
            type="email"
          ></v-text-field>

          <div class="mt-2 mt-md-3 font-weight-bold mb-2"   style="color: #05438e !important">Phone Number</div>
          <v-text-field
            density="compact"
            placeholder="e.g. +1 234 567 890"
            variant="outlined"
            color="#473dff"
            class="text-indigo-darken-4 font-weight-medium"
            v-model="user.phone"
            :rules="phoneRules"
            type="number"
          ></v-text-field>
        </v-form>
            </v-sheet>
    </main>
</template>

<script>

import {mapActions ,mapWritableState} from 'pinia'
import useSubmitStore from '../stores/submit' 
export default{
    name:'AppInfo',
   props:{
    nextStep:Function
   },
    data (){
      return {
      name: '',
      nameRules: [
        value => {
          if (value === '') return 'this field is required'
          if (value?.length > 3) return true
          return 'First name must be at least 3 characters.'
        },
      ],

      emailRules: [
        value => {
          if (value === '') return 'this field is required'
          
          if (/^[1-9.a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
            return 'Must be a valid e-mail.'
        },
      ],

      phoneRules: [
        value => {
          if (value === '') return 'this field is required'

          if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 9 digits.'
        },
      ],

      }
    },
methods:{
  ...mapActions(useSubmitStore,['submit']),
},
computed: {
  ...mapWritableState(useSubmitStore,['rules','user','formRef']),
},
mounted() {
    this.formRef = this.$refs.form
  }


}
</script>

<style scoped>
.v-text-field{
  position: relative;
}
.v-input__details{
  position: absolute;
  top: -72px;
  right: -14px;
}
.v-card-subtitle{
  text-wrap: balance;
}
</style>