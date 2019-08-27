import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: {},
      firstCurrency: 0,
      secondCurrency: 0,
      userAmount: null,
    },
    mounted() {
      this.fetchCurrencies();
    },
    computed: {
      convertedAmount: function () {
        return this.firstCurrency * this.userAmount;
      }
    },
    methods: {
      fetchCurrencies: function() {
        fetch('https://api.exchangeratesapi.io/latest')
        .then(res => res.json()).then(data => this.currencies = data.rates)
      },
    }
  });
})
