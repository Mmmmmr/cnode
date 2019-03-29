import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.filter('tabFormatter', function(value){
  if(value.top){
    return '置顶'
  }else if(value.tab === 'share'){
    return '分享'
  }else if(value.good){
    return '精华'
  }else if(value.tab === 'ask'){
    return '问答'
  }else{
    return '招聘'
  }
})

Vue.filter('formatDate', function(data){
  if(!data){
    return ''
  }
  var newData = new Date(data)
  var time = new Date().getTime() - new Date().getTime()
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
})