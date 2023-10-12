<template>
  <main>
    <div>
      <v-card-title  class="text-h5 text-md-h4 font-weight-bold mb-1 mb-md-3 ">Pick add-ons</v-card-title>
      <v-card-subtitle class="text-wrap"
        >Add-ons help enhance your gaming experience.</v-card-subtitle
      >
    </div>
    <v-item-group multiple v-model="addOns">
      <v-item v-for="item in items" :key="item" v-slot="{ isSelected, toggle }" :value="item">
        <v-card
          :class="isSelected ? 'bg-indigo-lighten-5 select_active' : ''"
          @click="toggle"
          variant="outlined"
          class="rounded-lg border mt-3"
        >
          <template v-slot:title>
            <v-card-title class="text-body-1 font-weight-bold" style="color: #02295a">{{
              item.title
            }}</v-card-title>
          </template>
          <template v-slot:subtitle> 
            <v-card-subtitle class="text-caption text-md-body-2 ">
              {{ item.subtitle }}
            </v-card-subtitle>
          </template>
          <template v-slot:prepend>
            <v-checkbox-btn
              color="#473dff"
              base-color="blue"
              :model-value="isSelected"
            ></v-checkbox-btn>
          </template>
          <template v-slot:append>
            <v-list-item-title v-if="duration === 'Monthly'" style="color: #473dff"
              >+${{ item.price_mo }}/mo</v-list-item-title
            >
            <v-list-item-title v-if="duration === 'Yearly'" style="color: #473dff"
              >+${{ item.price_yr }}/yr</v-list-item-title
            >
          </template>
        </v-card>
      </v-item>
    </v-item-group>
  </main>
</template>

<script>
import { mapWritableState, mapState } from 'pinia'
import useNextStepStore from '../stores/submit.js'

export default {
  name: 'AppPick',
  data() {
    return {
      items: [
        {
          id: 0,
          title: 'Online service',
          subtitle: 'Access to multiplayer games',
          price_mo: '1',
          price_yr: '10'
        },
        {
          id: 1,
          title: 'Larger storage',
          subtitle: 'Extra 1TB of cloud save',
          price_mo: '2',
          price_yr: '20'
        },
        {
          id: 2,
          title: 'Customizable Profile',
          subtitle: 'Custom theme on your profile',
          price_mo: '2',
          price_yr: '20'
        }
      ]
    }
  },

  computed: {
    ...mapWritableState(useNextStepStore, ['addOns']),
    ...mapState(useNextStepStore, ['duration'])
  },
  methods: {
    selectItem() {
      console.log(this.selectedItem)
    }
  }
}
</script>

<style scoped>
.select_active {
  border: 1px solid #473dff !important;
}



</style>
