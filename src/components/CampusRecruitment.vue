<template>
<div>
  <navigator-bar :navInfos="naviLists" />
  <search-bar />
  <h1>校园招聘</h1>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">城市</div>
      <div class="col-md-3">招聘会</div>
      <div class="col-md-3">发布时间</div>
    </div>
    <div class="row" v-for="list in requestLists" @click="callLink(list.recruitUrl)">
      <div class="col-md-3 list-group-item"><span class="label label-primary">{{ list.recruitCitys }}</span></div>
      <div class="col-md-3 list-group-item">{{ list.companyName }}</div>
      <div class="col-md-3 list-group-item">{{ formatDate(list.punishTime)}}</div>
    </div>
    <ul class="pagination">
      <li><a href="#">&laquo;</a></li>
      <li class="active"><a href="#">1</a></li>
      <li class="disabled"><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">&raquo;</a></li>
    </ul>
  </div>
</div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import NavigatorBar from '@/components/NavigatorBar'
export default {
  name: 'CampusRecruitment',
  components: {
    NavigatorBar,
    SearchBar
  },
  data() {
    let params = {
      'workType': 1,
      "city": "",
      "companyName": ""
    };
    this.getInfoByWorkCityType(params, (lists) => {
      this.requestLists = lists;
    });
    return {
      naviLists: [{
          text: "校园招聘",
          to: "/",
          className: "active nav-pills"
        },
        {
          text: "校园宣讲会",
          to: "/preach",
          className: "nav-pills"
        },
        {
          text: "实习",
          to: "/internship",
          className: "nav-pills"
        },
        {
          text: "求职学院",
          to: "/jobhunting",
          className: "nav-pills"
        }
      ],
      requestLists: [],
      school: "",
      city: "",
      companyName: "",
      time: ""
    }
  },

  mounted: function() {},
  created: function() {
    //this.getInfoByWorkCityType(1);
  },
  methods: {
    doQueryList: (workType, city, companyName) => {
      let paramsObj = {
        "workType": workType,
        "city": city,
        "companyName": companyName
      };
      this.getInfoByWorkCityType(paramsObj, (lists) => {
        this.requestLists = lists;
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
