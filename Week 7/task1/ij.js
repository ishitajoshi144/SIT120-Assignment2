Vue.component('component', {
    template: '<div><p>${Alert}</p><button @click="ish">enter</button></div>',
    delimiters: ['${','}'],
    data: function(){
      return {
        Alert: 'ish'
      }
    },
    methods: {
      ish: function() {
        alert('this is ish here');
      }
    }
  });

  new Vue({
    el:'#ell',
    template: `<component/>`
  });