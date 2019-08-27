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
    filters: {
      roundDown: function(number) {
        return Math.round(number * 100) / 100
      }
    },
    mounted() {
      this.fetchCurrencies();
    },
    computed: {
      convertedAmount: function () {
        return this.firstCurrency * (this.userAmount / this.secondCurrency);
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
