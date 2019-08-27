import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: {},
      firstCurrency: 0,
      secondCurrency: 1,
      userAmount: null,
      convertedAmount: null
    },
    mounted() {
      this.fetchCurrencies();
    },
    methods: {
      fetchCurrencies: function() {
        fetch('https://api.exchangeratesapi.io/latest')
        .then(res => res.json()).then(data => this.currencies = data.rates)
      },
      convertCurrency: function() {
        this.convertedAmount = this.firstCurrency * this.userAmount;
      }
    }
  });
})
