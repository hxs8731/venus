// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.http = axios;
Vue.prototype.formatDate = function(option) {
 return option;
}
Vue.prototype.callLink = function(linkUrl, newWindow){
  window.open("http://" + linkUrl);
}
Vue.prototype.getInfoByWorkCityType = (options, response) => {
  var relUrl  = "/api/index/getInfoByWorkCityTypeQualificationCompanyNameSchool";
  // var demoUri = "https://yesno.wtf/api";
  this.http.get(relUrl, {
    params: options
  }).then((res) => {
    console.log('GET ＝>>>>>>> requestLists start res = ' + JSON.stringify(res.data.data));
    if (res.data) {
      if (res.data.success){
        if (response) {
          response(res.data.data);
        }
      } else if(res.data.errCode) {
        console.log(res.data.errCode  + "," + JSON.stringify(res.data.errMsg));
      }
    }
  }).catch((error) => {
    console.log(JSON.stringify(error));
  });
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
