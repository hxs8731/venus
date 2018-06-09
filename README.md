# venus

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

http://www.feiyujob.com/api/index/getInfoByWorkCityTypeXjTimeRange?worktype=1 // 校招，宣讲会

http://www.feiyujob.com/api/index/getInfoByWorkCityTypePubRange?workType=1&fromPubTime=2018-01-20&toPubTime=2018-04-20 // 收录时间

http://www.feiyujob.com/api/index/getInfoByWorkCityTypePubRange?workType=1&fromPubTime=2018-01-20&toPubTime=2018-04-21&pageNumber=6&pageSize=5 // 时间,page个数


用户登录：
http://www.feiyujob.com/api/user/login?userName=test&password=123456  使用post，密码加密

审核未展示列表：
http://www.feiyujob.com/api/recruit/getRecruitsByType?showType=1&userName=test

  0未审核展示 1 审核展示  要求系统管理员登录

return {"success":false,"data":null,"errCode":"params_error","errMsg":"参数错误","totalElems":null,"totalPages":null}

更新审核状态:
http://www.feiyujob.com/api/recruit/updateRecruitsStatus?ids=1,2&showType=0
id对应的时审核内容的id数组，用","隔开；


/recruit/updateRecruitStatus?ids=1,2&showType=1  要求系统管理员登录

发布工作： 
http://www.feiyujob.com/api/recruit/publishRecruit  使用post

{
"userName":"admin",
"recruit":{
  "companyName":"test",
  "companyDesc":"testdesc",
  "companyTags":"公司标签",
  "title":"我在招聘it",
  "recruitCitys":"北京,上海",
  "school":"北大",
  "teachInsAddress":"地点",
  "recruitUrl":"www.baidu.com",
  "workType":"2",
  "xjTime": "2018-06-18 00:00:00"
  }
}

/recruit/publishRecruit   json格式提交 要求企业用户登录
{"userName":"admin",
"recruit":{
这里自己按照json格式，
companyName
companyDesc
companyTags 公司标签，空格或者逗号分割
indType 行业，暂时未用到
宣讲会字段：
title
recruitCitys
school
teachInsAddress 地点
recruitUrl 官网url
recruitWork 明细
workType 2宣讲会
xjTime 宣讲时间

校园招聘
workType 1 校招
title
职位标题介绍和职位要求投递简历合并成一个文本框或者依然用这几个文本框，字段使用的为一个recruitWork 明细

TODO：
登录接口用post；



