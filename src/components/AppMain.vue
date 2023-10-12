<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
    <v-sheet class="me-md-2 pa-0 pa-md-5"  >
      <VCard variant="flat" :class="{'disctop' : !display.smAndDown , 'mobile' : display.smAndDown }">
        <v-list class="bg-transparent mt-md-6 ml-4 d-flex d-md-block" lines="two"> 
      <v-list-item
        v-for="(item, i) in items"  :key="i" >
        <template v-slot:prepend >
          <span :class="{'stepActive' : step === i}" class="me-md-5 pa-2 bo rounded-circle text-white font-weight-bold text-center" style="border: 1px solid white;width: 40px; height: 40px;">{{ i + 1 }}</span>
        </template>
        <v-list-item-subtitle  class="d-md-block d-none mb-1 text-button text-white">Step {{ i + 1 }}</v-list-item-subtitle>
        <v-list-item-title  class=" d-md-block d-none text-white font-weight-bold text-button" v-text="item"></v-list-item-title>
    </v-list-item>
    </v-list>
      </VCard>

        </v-sheet>
</template>

<script >
 import { useDisplay } from 'vuetify'
  export default {
    name:'AppMain',
    data: () => ({
      items: ['Your info','Select plan','Add-ons','Summary'],
      display : useDisplay(),
    }),
    props:{
    step: Number
  },
  mounted() {
    console.log(this.display.md)
  },
 
  }

</script>


<style scoped>
.stepActive{

  color: var(--Marine-blue) !important;
  /* background-color: var(--Light-blue) !important; */
  background-color: #bfe2fd !important;
  border: none !important;
}

.disctop{
width: 274px;
height:568px;
background-image: url("../assets/images/bg-sidebar-desktop.svg");


}
.mobile{
width: 100%;
height: 172px;
background-image: url("../assets/images/bg-sidebar-mobile.svg");
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: start;
padding-top: 20px;
}
</style>