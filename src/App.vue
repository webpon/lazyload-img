<template>
  <div id="app">
    <div>
      <img style="width: 1000px; flex-shrink: 0;" alt="Vue logo" v-lazy="img" />
    </div>
    <div>
      <img style="width: 1000px; flex-shrink: 0;" alt="Vue logo" v-lazy="img" />
    </div>
    <div>
      <img style="width: 1000px; flex-shrink: 0;" alt="Vue logo" v-lazy="img" />
    </div>
    <div>
      <img style="width: 1000px; flex-shrink: 0;" alt="Vue logo" v-lazy="img" />
    </div>
    <div>
      <img style="width: 1000px; flex-shrink: 0;" alt="Vue logo" v-lazy="img" />
    </div>
    <div>
      <img style="width: 1000px; flex-shrink: 0;" alt="Vue logo" v-lazy="img" />
    </div>
    <div>
      <img style="width: 1000px; flex-shrink: 0;" alt="Vue logo" v-lazy="img" />
    </div>
    <div>
      <img style="width: 1000px; flex-shrink: 0;" alt="Vue logo" v-lazy="img" />
    </div>
    <div>
      <img style="width: 1000px; flex-shrink: 0;" alt="Vue logo" v-lazy="img" />
    </div>
    <div>
      <img style="width: 1000px; flex-shrink: 0;" alt="Vue logo" v-lazy="img" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1115%2Fee91b90cj00r2lzak001dc000hs00bsg.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666192041&t=b5979198d5be9246a2589e1a2730a7cf'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
