<template>
  <div id="app">
    <input v-model.lazy="message"><button v-on:click="calc" v-on:keyup.enter="calc">Посчитать</button>
    <p>Введенное сообщение: {{ message }}</p>

<!--    {{ info }}-->

<!--    <ol id="v-for-object"  :key="info.index">-->
<!--      <li v-for="(value) in info">-->
<!--         {{ value }}-->
<!--      </li>-->
<!--    </ol>-->
    <div v-if="(!info)">
      {{ wait }}
    </div>
    <div v-else-if="info === 'error'">
      Не удалось получить ссылки для этого адреса. Попробуйте другой.
    </div>
    <div id="example-1" v-else-if="(info !== 'invalid')" >

      <ul>
        <li v-for="item in info" :key="item.index" >
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-else>
     Ошибочный или неполный адрес.<br>(Протокол обязателен. Например http://github.com)
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
let url = 'http://localhost:3000?url='

export default {
  name: 'App',
  data () {
    return {
      info: '',
      message: 'http://github.com',
      wait: ''
    }
  },
  methods: {
    calc: function () {
      console.log(this.message)
      this.wait = 'Please wait...'
      this.info = ''
      axios
        .get(url + this.message)
        .then(response => (this.info = response.data))
        .catch(error => console.log(error))

      // this.result = this.num * this.num;
    }
  }
  /*  data () {
    return {
      info: '123' // null
    }
  }, */
  /* mounted () {
    axios
      .get(url)
      .then(response => (this.info = response))
      .catch(error => console.log(error))
  } */
}

// .then(response => console.log(response))

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width:50%;
  margin: 0 auto;
  margin-top: 60px;
}

#example-1 {
  text-align: left;

}
</style>
