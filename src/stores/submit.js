import { defineStore } from 'pinia'

export default defineStore('nextStep', {
  state: () => ({
    step: 0,
    select: ['AppInfo', 'AppPlan', 'AppPick', 'AppFinishing',],
    user: {
      name: '',
      email: '',
      phone: ''
    },
    formRef: null,
    plan: 'Arcade',
    duration: 'Monthly',
    addOns: [],
    confirm:false,
  }),
  actions: {
    submit() {
      if(this.step == 0 ) {
              this.formRef.validate()
              if (this.formRef.isValid){
                  this.nextStep()
              }
      } else {
        this.nextStep()

      }
    
    },
    nextStep() {
      if (this.step <= 2) {
        this.step += 1
      }
    },
    GoBack() {
      if (this.step !== 0) {
        this.step -= 1
      }
    }
  },
  getters: {
    pricePlan: (state) => {
      if (state.plan === 'Arcade') {
        if (state.duration === 'Monthly') {
          return 9
        }
        return 90
      }
      if (state.plan === 'Advanced') {
        if (state.duration === 'Monthly') {
          return 12
        }
        return 120
      }
      if (state.plan === 'Pro') {
        if (state.duration === 'Monthly') {
          return 15
        }
        return 150
      }
    },
    pricAddOns: (state) => {
        let price = 0
        state.addOns.forEach(addon => {
            price = price + Number(addon.price_mo)
        })
        
       return price
    },
    Total: (getters) =>{
        return  getters.pricePlan + getters.pricAddOns 
    }
  }
})
