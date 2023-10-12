<template>
  <main>
    <v-card-title style="color: #02295a" class="text-h5 text-md-h4 font-weight-bold mb-1 mb-md-3"
      >Select your plan</v-card-title
    >
    <v-card-subtitle class="text-wrap"
      >You have the option of monthly or yearly billing.</v-card-subtitle
    >
    <v-item-group class="my-7" v-model="plan">
      <v-row>
        <v-col v-for="item in items" cols="12" sm="12" md="4" :key="item.title" class="py-1 px-3">
          <v-item v-slot="{ isSelected, select }" :value="item.title">
            <v-card
              :class="isSelected ? 'bg-indigo-lighten-5 border_active' : ''"
              @click="select"
              variant="outlined"
              class="px-md-4 py-md-5 px-4 py-2 rounded-lg border d-flex d-md-block"
              style="color: #05438e !important"
            >
              <img class="mb-md-6 me-6 me-md-0 d-inline" :src="item.img" alt="" />

              <v-card-item class="pa-0">
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle v-if="duration === 'Monthly'">{{
                  item.priceMonthly
                }}</v-card-subtitle>
                <v-card-subtitle v-if="duration === 'Yearly'">{{
                  item.priceYearly
                }}</v-card-subtitle>
                <p v-if="duration === 'Yearly'" style="color: #02295a" class="text-caption">
                  2 months free
                </p>
              </v-card-item>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>

    <VCard variant="flat" color="#fafbff" class="d-flex c justify-center py-2 rounded-lg">
      <div class="d-flex align-center">
        <VCardSubtitle
          :class="{ active_swich: duration === 'Monthly' }"
          class="me-4 font-weight-bold"
          >Monthly</VCardSubtitle
        >
        <v-switch
          v-model="duration"
          color="#022959"
          inset
          value="0"
          hide-details
          density="compact"
          inline
          true-value="Yearly"
          false-value="Monthly"
        ></v-switch>
        <VCardSubtitle
          :class="{ active_swich: duration === 'Yearly' }"
          class="ml-4 font-weight-bold"
          >Yearly</VCardSubtitle
        >
      </div>
    </VCard>
  </main>
</template>
<script>
import arcade from '@/assets/images/icon-arcade.svg'
import advanced from '@/assets/images/icon-advanced.svg'
import pro from '@/assets/images/icon-pro.svg'

import { mapWritableState } from 'pinia'
import useSubmitStore from '../stores/submit'

export default {
  name: 'AppPlan',
  data() {
    return {
      isActiveSwitch: false,
      items: [
        {
          img: arcade,
          title: 'Arcade',
          priceMonthly: '$9/mo',
          priceYearly: '$90/yr'
        },
        {
          img: advanced,
          title: 'Advanced',
          priceMonthly: '$12/mo',
          priceYearly: '$120/yr'
        },
        {
          img: pro,
          title: 'Pro',
          priceMonthly: '$15/mo',
          priceYearly: '$150/yr'
        }
      ]
    }
  },
  computed: {
    ...mapWritableState(useSubmitStore, ['plan', 'duration'])
  },
  methods: {}
}
</script>

<style scoped>
.border_active {
  border: 1px solid #473dff !important;
}
</style>
