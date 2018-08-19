// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import moment from 'moment';
import $ from 'jquery';
import _global from './common/Global';
import { getCookie, setCookie, clearCookie } from './common/Cookie';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';
library.add(solid);
library.add(regular);
library.add(brands);
library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

// import bootstrap from 'bootstrap';
Vue.config.productionTip = false;

Vue.prototype._global = _global;
Vue.prototype.moment = moment;
Vue.prototype.cookieStore = {
  getCookie, setCookie, clearCookie
};
Vue.prototype.http = axios;

// axios.interceptors.request.use(
//   config => {
//     const token = this.cookieStore.getCookie('session'); //获取Cookie
//     config.data = JSON.stringify(config.data);
//     config.headers = {
//       'Content-Type':'application/x-www-form-urlencoded' //设置跨域头部
//     };
//     if (token) {
//       config.params = {'token': token} //后台接收的参数，后面我们将说明后台如何接收
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );
// // http response 拦截器
// axios.interceptors.response.use(
//   response => {
// //response.data.errCode是我接口返回的值，如果值为2，说明Cookie丢失，然后跳转到登录页，这里根据大家自己的情况来设定
//     if(response.data.errCode == 2) {
//       router.push({
//         path: '/login',
//         query: {redirect: router.currentRoute.fullPath} //从哪个页面跳转
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error.response.data)
//   });
 
// export default axios;

Vue.prototype.formatDate = function (option) {
  return this.moment(option).format('YYYY-MM-DD');
};

Vue.prototype.callLink = function (linkUrl, newWindow) {
  if (undefined === newWindow) {
    newWindow = true; // default new window
  }
  if (newWindow) {
    window.open(linkUrl);
  } else {
    window.location.href = linkUrl;
  }
};
/**
 * 判断一个对象是否是数组，参数不是对象或者不是数组，返回false
 *
 * @param {Object} arg 需要测试是否为数组的对象
 * @return {Boolean} 传入参数是数组返回true，否则返回false
 */
Vue.prototype.isArray = function(arg) {
  if (typeof arg === 'object') {
      return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return false;
}
Vue.prototype.goHomeLogout = function() {
  this.$router.push("/");
  this.cookieStore.clearCookie("username");
};
Vue.prototype.linkToCV = function () {
  router.push('/curriculumVitae');
};
Vue.prototype.getRequestUrl = function (workType) {
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

Vue.prototype.getSchoolByParams = function (options, response) {
  this.http.get(this._global.TEST_MODE ? this._global.TEST_URL : this._global.SCHOOL_BY_CITY_ID_URI, {
    params: options
  }, {
    headers: {'Content-Type': 'application/json'} // must add content type
  }).then((res) => {
    // console.log('GET ＝>>>>>>> getCitysByOrder start res = ' + JSON.stringify(res));
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

Vue.prototype.getCitysByOrder = function (options, response) {

  this.http.get(this._global.TEST_MODE ? this._global.TEST_URL : this._global.GET_CITYS_BY_ORDER, {params: options})
    .then((res) => {
    // console.log('GET ＝>>>>>>> getCitysByOrder start res = ' + JSON.stringify(res) + ", " + this._global.TEST_MODE);
    if (this._global.TEST_MODE) {
      console.log('GET ＝>>>>>>> getCitysByOrder in test mode');
      response(options.order === 1 ? this._global.TEST_CITY_INFOS.data : this._global.TEST_TOTAL_INFOS.data);
      return;
    }
    if (res.data) {
      if (response) {
        response(res.data.data);
      }
    } else if (res.data.errCode) {
      console.log(res.data.errCode + "," + JSON.stringify(res.data.errMsg));
    }
  }).catch((error) => {
    console.log("error" + error);
  });
};
// Vue.prototype.generateParam = function(jsonParam) {
//   console.log(`Vue generateParam ==> start generateParam ${JSON.stringify(jsonParam)}`);
//   if (typeof jsonParam !== 'object') {
//     console.error(`param is not json object.`);
//     return null;
//   }
//   let params = new URLSearchParams();
//   for (let k in jsonParam) {
//     params.append(k, jsonParam[k]);
//     console.log(`Vue generateParam parse ==>  ${k}, ${jsonParam[k]}`);
//   }
//   return params;
// }
Vue.prototype.getInfoByWorkType = function (options, response) {
  this.http.post(this.getRequestUrl(options.workType), {
    params: options
  }, {
    headers: {'Content-Type': 'application/json'} // must add content type
  }).then((res) => {
    if (this._global.TEST_MODE) {
      console.log('GET ＝>>>>>>> getInfoByWorkType in test mode');
      response(this._global.TEST_RESULT.data);
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
