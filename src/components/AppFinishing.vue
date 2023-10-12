<template>
  <main>
    <v-sheet v-if="!confirm">
      <div>
        <v-card-title class="text-h5 text-md-h4 font-weight-bold mb-1 mb-md-3">Finishing up</v-card-title>
        <v-card-subtitle class="text-wrap"
          >Double-check everything looks OK before confirming.</v-card-subtitle
        >
      </div>
      <v-list variant="flat" bg-color="#fafbff" lines="two" select-strategy="leaf">
        <v-list-item class="rounded-lg">
          <v-list-item-title style="color: #02295a" class="font-weight-bold"
            >{{ plan }} ({{ duration }})</v-list-item-title
          >
          <VBtn
            size="x-small"
            @click="step = 1"
            variant="plain"
            :ripple="false"
            class="text-decoration-underline pa-0 text-caption text-subtitle-1"
            >change</VBtn
          >
          <template v-slot:append>
            <v-list-item-title
              style="color: #02295a"
              class="font-weight-bold"
              v-if="duration === 'Monthly'"
              >+${{ pricePlan }}/mo</v-list-item-title
            >
            <v-list-item-title
              style="color: #02295a"
              class="font-weight-bold"
              v-if="duration === 'Yearly'"
              >+${{ pricePlan }}/yr</v-list-item-title
            >
          </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          disabled
          class="rounded-lg"
          v-for="(item, i) in addOns.sort((a, b) => a.id - b.id)"
          :key="i"
        >
          <v-list-item-subtitle class="font-weight-bold">{{ item.title }}</v-list-item-subtitle>
          <template v-slot:append>
            <v-list-item-title v-if="duration === 'Monthly'"
              >+${{ item.price_mo }}/mo</v-list-item-title
            >
            <v-list-item-title v-if="duration === 'Yearly'"
              >+${{ item.price_yr }}/yr</v-list-item-title
            >
          </template>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item disabled>
          <v-list-item-subtitle class="bg-white font-weight-bold"
            >Total (per month)</v-list-item-subtitle
          >
          <template v-slot:append>
            <v-list-item-title
              v-if="duration === 'Monthly'"
              style="color: #473dff"
              class="font-weight-bold"
              >+${{ Total }}/mo</v-list-item-title
            >
            <v-list-item-title
              v-if="duration === 'Yearly'"
              style="color: #473dff"
              class="font-weight-bold"
              >+${{ Total }}/yr</v-list-item-title
            >
          </template>
        </v-list-item>
      </v-list>
    </v-sheet>
    <v-sheet height="500" class="text-center d-flex flex-column align-center justify-center pa-5 pa-md-10" v-if="confirm">
      <img src="../assets/images/icon-thank-you.svg" alt="" />
      <v-card-title class="mt-6 mb-3 font-weight-bold text-h4 " style="color: #02295a" >Thank you!</v-card-title>
      <v-card-subtitle class="text-wrap text_sub"
        >Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.</v-card-subtitle
      >
    </v-sheet>
  </main>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import useNextStepStore from '../stores/submit.js'
export default {
  name: 'AppFinishing',
  computed: {
    ...mapState(useNextStepStore, ['plan', 'duration', 'addOns', 'pricePlan', 'Total', 'confirm']),
    ...mapWritableState(useNextStepStore, ['step'])
  }
}
</script>
<style scoped>
.v-card-title{
line-height: 2.5rem;
}
.text-caption {
  font-size: 14px !important;
}
.v-btn--variant-plain:hover {
  color: #473dff !important;
}
.text_sub{
  text-wrap: balance;
}
</style>
