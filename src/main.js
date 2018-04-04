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
};
Vue.prototype.callLink = function(linkUrl, newWindow){
  window.open("http://" + linkUrl);
};
Vue.prototype.TEST_RESULT = {
	"data": {
		"success": true,
		"data": [{
			"id": 2,
			"companyName": "腾讯",
			"recruitWork": "我们的qq遍布全国，我们的微信遍布全国，大人小孩都会用，还有游戏，小孩子肯定要玩",
			"recruitCitys": "深圳,北京",
			"qualifications": 4,
			"school": null,
			"teachInsAddress": null,
			"workType": 1,
			"orderType": 2,
			"recruitUrl": "http://www.qq.com",
			"viewCount": null,
			"clickCount": null,
			"collectCount": null,
			"punishTime": 1515936716000,
			"gmtCreate": 1515936720000,
			"gmtModified": 1515936723000,
			"comanyImg": null,
			"xjTime": null
		}, {
			"id": 1,
			"companyName": "阿里巴巴",
			"recruitWork": "我们公司是阿里巴巴，我们是很厉害的，你可能听说过，也可能没听说过，但是我告诉你，就来就牛逼的飞上天了",
			"recruitCitys": "杭州,北京,南京",
			"qualifications": 5,
			"school": null,
			"teachInsAddress": null,
			"workType": 1,
			"orderType": 1,
			"recruitUrl": "http://www.baidu.com",
			"viewCount": null,
			"clickCount": null,
			"collectCount": null,
			"punishTime": 1515936583000,
			"gmtCreate": 1515936587000,
			"gmtModified": 1515936592000,
			"comanyImg": null,
			"xjTime": null
		}, {
			"id": 3,
			"companyName": "百度",
			"recruitWork": "我们是百度，搜索在国内是霸主，我们也卖药什么的，也买广告",
			"recruitCitys": "北京",
			"qualifications": 3,
			"school": null,
			"teachInsAddress": null,
			"workType": 1,
			"orderType": 3,
			"recruitUrl": "http://www.baidu.com",
			"viewCount": null,
			"clickCount": null,
			"collectCount": null,
			"punishTime": 1515936800000,
			"gmtCreate": 1515936802000,
			"gmtModified": 1515936805000,
			"comanyImg": null,
			"xjTime": null
		}],
		"errCode": null,
		"errMsg": null,
		"totalElems": 3,
		"totalPages": 1
	},
	"status": 200,
	"statusText": "OK",
	"headers": {
		"date": "Sat, 31 Mar 2018 05:54:48 GMT",
		"content-encoding": "gzip",
		"server": "nginx/1.12.2",
		"x-powered-by": "Express",
		"vary": "Accept-Encoding",
		"content-type": "application/json;charset=UTF-8",
		"transfer-encoding": "chunked",
		"connection": "close"
	},
	"config": {
		"transformRequest": {},
		"transformResponse": {},
		"timeout": 0,
		"xsrfCookieName": "XSRF-TOKEN",
		"xsrfHeaderName": "X-XSRF-TOKEN",
		"maxContentLength": -1,
		"headers": {
			"Accept": "application/json, text/plain, */*"
		},
		"method": "get",
		"url": "/api/index/getInfoByWorkCityType?workType=1&pageNumber=0&pageSize=10"
	},
	"request": {}
};
Vue.prototype.REL_URL = "/api/index/getInfoByWorkCityTypeQualificationCompanyNameSchool";
Vue.prototype.TEST_URL = "https://yesno.wtf/api";
Vue.prototype.TEST_MODE = true; // false;
Vue.prototype.getRequestUrl = function() {
  return this.TEST_MODE ? this.TEST_URL : this.REL_URL;
};
Vue.prototype.getInfoByWorkCityType = function(options, response){
  this.http.get(this.getRequestUrl(), {
    params: options
  }).then((res) => {
    if (this.TEST_MODE) {
      console.log('GET ＝>>>>>>> requestLists in test mode');
      response(this.TEST_RESULT.data.data);
      return;
    }
    if (res.data) {
      if (res.data.success){
        console.log('GET ＝>>>>>>> requestLists start res = ' + JSON.stringify(res.data.data));
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
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
