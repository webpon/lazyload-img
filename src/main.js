import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzhangzifan.com%2Fuploads%2F2017%2F12%2Flazy-load-img.png&refer=http%3A%2F%2Fzhangzifan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666192087&t=74c20555dc45224c558563c6e3ec2bcc',
  // 延迟显示，用于测试，实际开发不需要
  throttleWait: 1000
  })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
