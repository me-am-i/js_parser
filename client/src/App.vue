<template>
  <div id="app">
    <input v-model.lazy="addr"><button v-on:click="request" v-on:keyup.enter="request">Получить список файлов</button>
    <p>Введенный адрес: {{ addr }}</p>
    <div v-if="(!info)">
      {{ wait }}
    </div>
    <div v-else-if="info === 'error'">
      Не удалось получить список файлов для этого адреса. Попробуйте другой.
    </div>
    <div id="list" v-else-if="(info !== 'invalid')" >
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
// let host = 'http://localhost:3000?url='
let host = 'http://185.68.21.38:3000?url='

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
      this.wait = 'Please wait...'
      this.info = ''
      axios
        .get(host + this.addr)
        .then(response => (this.info = response.data))
        .catch(error => console.log(error))
    }
  }
}

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

#list {
  text-align: left;
}
</style>
