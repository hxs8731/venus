<template>
  <div>
    <nav class="navbar navbar-default logo-color" role="navigation">
      <div class="container-fluid">
       <div class="navbar-header">
        <img src="../assets/logo.png" />
      </div>
      <div>
        <ul class="nav navbar-nav">
         <router-link tag="li" id="nav0" to="/" class="active"><a>校园招聘</a></router-link></li>
         <router-link tag="li" id="nav1" to="/preach"><a>校园宣讲会</a></router-link>
         <router-link tag="li" id="nav2" to="/internship"><a>实习</a></router-link>
         <router-link tag="li" id="nav3" to="/jobhunting"><a>求职学院</a></router-link>
       </ul>
     </div>
     <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li>
    </ul>
  </div>
</nav>
<div class="container-fluid">
 <form class="navbar-form navbar-left">
  <div class="form-group">
   <input type="text" class="form-control" v-model='companyName' placeholder="公司" />
   <input type="text" class="form-control"v-model='city' placeholder="城市" />
   <button type="submit" class="btn btn-default" @click="getInfoByWorkCityType(1, city, companyName)">搜索</button>
 </div>
</form>
</div>

<div class="container-fluid">
 <div class="row">
  <div class="col-md-2">城市</div>
  <div class="col-md-2">招聘会</div>
  <div class="col-md-2">时间</div>
</div>

<div class="row" @click="callLink(list.recruitUrl)" v-for="list in requestLists" >
  <div class="col-md-2">{{ list.recruitCitys }}</div>
  <div class="col-md-2">{{ list.companyName }}</div>
  <div class="col-md-2">{{  formatDate(list.punishTime)}}</div>
</div>
</div>
</div>
</template>
<script>
  export default {
    name: 'CampusRecruitment',
    data () {
      var relUrl  = "/api/index/getInfoByWorkCityTypeQualificationCompanyNameSchool";
      this.http.get(relUrl, {
        params: { 'workType': 1,
          "city": "",
          "companyName": ""
        }
      })
      .then((res) => {
        console.log('GET ＝>>>>>>> requestLists start res = ' + JSON.stringify(res.data.data));
        if (res.data) {
          if (res.data.success){
            this.requestLists = res.data.data;
          } else if(res.data.errCode) {
            console.log(res.data.errCode  + "," + JSON.stringify(es.data.errMsg));
          }
        }
      }).catch((error) => {
        console.log(JSON.stringify(error));
      });
    return {
      requestLists: [],
      companyName: "",
      city: ""
    }
  },

  mounted: function () {
  },
  created: function () {
    //this.getInfoByWorkCityType(1);
  },
  methods: {
    getInfoByWorkCityType: (workType, city, companyName) => {
      // var relUrl  = "/api/index/getInfoByWorkCityType?workType=1&pageNumber=0&pageSize=10";
      console.log("getInfoByWorkCityType 11");
      var relUrl  = "/api/index/getInfoByWorkCityTypeQualificationCompanyNameSchool";
      var pcity = city || "";
      var pcompany = companyName || "";
      let paramsObj = {
        "workType": workType,
        "city": pcity,
        "companyName": pcompany
      };
      this.http.get(relUrl, {
        params: paramsObj
      })
      .then((res) => {
        console.log('GET ＝>>>>>>> requestLists start res = ' + JSON.stringify(res.data.data));
        if (res.data) {
          if (res.data.success){
            console.log("getInfoByWorkCityType 555555");
            this.requestLists = res.data.data;
            console.log("getInfoByWorkCityType 2222");
          } else if(res.data.errCode) {
            console.log(res.data.errCode  + "," + JSON.stringify(es.data.errMsg));
          }
        }
      }).catch((error) => {
        console.log(JSON.stringify(error));
      });
    }
  }
}
</script>

<style>
  ul.nav {
   margin-top: 22px
 }
 /*.logo-color {
   background-color: #FFF0F5
 }*/
</style>
