<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <VContainer style="background-color: #eef5ff;" fluid class=" pa-0 d-flex justify-center align-center" :class="{'h-100' : !this.display.smAndDown}">
        <v-sheet class="rounded-xl" :class="{'w-100' :display.smAndDown}">
          <VCard  class="d-block d-md-flex  rounded-xl" variant="flat"  max-width="986" width="100%">
            <AppMain :step="step"/>
            <v-card  :class="{'disctop' : !display.smAndDown , 'mobile' : display.smAndDown }" variant="flat"  class="d-flex flex-column px-md-13 pt-md-10 pb-md-5 ">
              <v-card-item  :class="{'bg-white rounded-lg ':this.display.smAndDown}" >
                <keep-alive>
                  <transition name="fade" mode="out-in">
                    <component  :is='select[step]'>
                  </component>
                  </transition>
                </keep-alive>
              </v-card-item>

              <VSpacer/>

              <VCardActions class="pa-3" v-if="!confirm" :class="{'bg-white' : display.smAndDown}">
                <v-btn class=" text-caption " variant="plain"  v-if=" step !==0  " @click="GoBack">Go Back</v-btn>
                <VSpacer/>
               <v-btn v-if="step !==3"  variant="flat" width="100px" height="40px" type="submit" @click="submit"  color="#05438e" class="text-caption  " >Next Step</v-btn> 
               <v-btn class="text-caption " @click="confirm = true"  width="100px" height="40px" size="large" variant="flat" color="#473dff" v-if="step ===3" >Confirm</v-btn> 
              </VCardActions>
            </v-card>
        </VCard>
        </v-sheet>
        
      </VContainer>
     
   
      
  </template>
  
  <script>
  
  import AppMain from '@/components/AppMain.vue'
  import AppInfo from '@/components/AppInfo.vue'
  import AppPlan from '@/components/AppPlan.vue';
  import AppPick from '@/components/AppPick.vue';
  import AppFinishing from '@/components/AppFinishing.vue';
  import { mapActions ,mapState,mapWritableState } from 'pinia'
  import useSubmitStore from '@/stores/submit' 
  
  
 import { useDisplay } from 'vuetify'
  export default {
  data() {
    return {
      display : useDisplay(),
      
    }
  },
    components:{
      AppMain,
      AppInfo,
      AppPlan,
      AppPick,
      AppFinishing,      
    },
  
    methods:{
      ...mapActions(useSubmitStore,['submit','GoBack']),
    },
  
    computed:{
      ...mapState(useSubmitStore,['step','select']),
      ...mapWritableState(useSubmitStore,['confirm'])
    },
    mounted(){
      console.log(this.$vuetify)
    }
   
  }
  </script>
  
  
  <style scoped>
  .disctop{
    width:600px;
    height:608px !important;
  }

  .mobile{
    background-color:#eef5ff ;
    height: calc(100vh - 172px) !important;
    overflow: visible !important;
  }
  .mobile .v-card-item{
    position: relative;
    top: -50px;
    width: 95%;
    margin: auto;
    padding: 35px 15px;
    
  }
  
  .v-card-title{
    color: var(--Marine-blue);
  }
  .fade-enter-from {
    opacity: 0;
  }
  
  .fade-enter-active {
    transition: all 0.5s linear;
  }
  
  .fade-leave-to {
    transition: all 0s lienar;
    opacity: 0;
  }
  .v-card-title{
    line-height: 2.5rem !important;
  }
  </style>