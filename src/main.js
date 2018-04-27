// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import moment from 'moment';
import $ from 'jquery';
import _global from './common/Global';
// import bootstrap from 'bootstrap';
Vue.config.productionTip = false;
Vue.prototype.http = axios;
Vue.prototype._global = _global;
Vue.prototype.moment = moment;
Vue.prototype.formatDate = function(option) {
  // let TimeNow = option;
  let date = new Date(option);
  let fmt = 'yyyy-MM-dd';
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  // 遍历这个对象
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      // console.log(`${k}`)
      //   console.log(RegExp.$1)
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
    }
  }
  return fmt;
}

Vue.prototype.padLeftZero = function(str) {
  return ('00' + str).substr(str.length);
}

Vue.prototype.callLink = function(linkUrl, newWindow) {
  if (undefined === newWindow) {
    newWindow = true; // default new window
  }
  if (newWindow) {
    window.open(linkUrl);
  } else {
    window.location.href = linkUrl;
  }
};
Vue.prototype.getRequestUrl = function(workType) {
  if (this._global.TEST_MODE) {
    return this._global.TEST_URL;
  }
  let uri;
  switch (workType) {
    case this._global.WORK_TYPE_CAMPUS:
      uri = this._global.COMPANY_CITY_URI;
      break;
    case this._global.WORK_TYPE_PREACH:
      uri = this._global.XJ_TIME_RANGE_URI;
      break;
    default:
      uri = this._global.COMPANY_CITY_URI;
  }
  return uri;
};
Vue.prototype.getSchoolByParams = function(options, response) {
  this.http.get(this._global.SCHOOL_BY_CITY_ID_URI, {
    params: options
  }).then((res) => {
    // console.log('GET ＝>>>>>>> getCityByIp start res = ' + JSON.stringify(res));
    if (res.data) {
        if (response) {
          response(res.data.data);
        }
    } else if (res.data.errCode) {
      console.log(res.data.errCode + "," + JSON.stringify(res.data.errMsg));
    }
  }).catch((error) => {
    console.log("error" + JSON.stringify(error));
  });
};
Vue.prototype.getCityByIp = function(options, response) {
  this.http.get(this._global.CITY_BY_IP_URI, {
    params: options
  }).then((res) => {
    // console.log('GET ＝>>>>>>> getCityByIp start res = ' + JSON.stringify(res));
    if (res.data) {
        if (response) {
          response(res.data.data);
        }
    } else if (res.data.errCode) {
      console.log(res.data.errCode + "," + JSON.stringify(res.data.errMsg));
    }
  }).catch((error) => {
    console.log("error" + JSON.stringify(error));
  });
};
Vue.prototype.getInfoByWorkType = function(options, response) {
  this.http.get(this.getRequestUrl(options.workType), {
    params: options
  }).then((res) => {
    if (this._global.TEST_MODE) {
      console.log('GET ＝>>>>>>> requestLists in test mode');
      response(this._global.TEST_RESULT.data.data);
      return;
    }
    if (res.data) {
      if (res.data.success) {
        // console.log('GET ＝>>>>>>> requestLists start res = ' + JSON.stringify(res));
        // console.log('GET ＝>>>>>>> requestLists start res data = ' + JSON.stringify(res.data.data));
        if (response) {
          response(res.data);
        }
      } else if (res.data.errCode) {
        console.log(res.data.errCode + "," + JSON.stringify(res.data.errMsg));
      }
    }
  }).catch((error) => {
    console.log("error" + JSON.stringify(error) + ",  " + this.getRequestUrl());
  });
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
