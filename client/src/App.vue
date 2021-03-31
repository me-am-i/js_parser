<template>
  <div id="app">
    <input v-model.lazy="addr"><button v-on:click="request" v-on:keyup.enter="request">Получить список файлов</button>
    <p>Введенный адрес: {{ addr }}</p>

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
      Не удалось получить список файлов для этого адреса. Попробуйте другой.
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
let url = 'http://185.68.21.38:3000?url='

export default {
  name: 'App',
  data () {
    return {
      info: '',
      addr: 'http://github.com',
      wait: ''
    }
  },
  methods: {
    request: function () {
      console.log(this.message)
      this.wait = 'Please wait...'
      this.info = ''
      axios
        .get(url + this.addr)
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
