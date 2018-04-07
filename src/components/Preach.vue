<template>
<div class="center-block">
  <navigator-bar :navInfos="naviLists" />
  <search-bar />
  <h3>校园宣讲会</h3>
  <div class="container-fluid">
    <div class="row list-body">
      <div class="col-md-2 list-header">公司</div>
      <div class="col-md-2 list-header">学校</div>
      <div class="col-md-2 list-header">举办时间</div>
      <div class="col-md-2 list-header">举办地点</div>
    </div>
    <div class="row list-body" v-for="list in requestLists" @click="callLink(list.recruitUrl)">
      <div class="col-md-2 list-row">{{ list.companyName }}</div>
      <div class="col-md-2 list-row">{{ list.school }}</div>
      <div class="col-md-2 list-row">{{ list.xjTime }}</div>
      <div class="col-md-2 list-row">{{ list.teachInsAddress }}</div>
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
  name: 'Preach',
  components: {
    NavigatorBar,
    SearchBar
  },
  data() {
    let params = {
      "workType": 2,
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
          className: "nav-pills"
        },
        {
          text: "校园宣讲会",
          to: "/preach",
          className: "active nav-pills"
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
  methods: {
    doQueryList: (workType, city, companyName) => {
      let paramsObj = {
        "workType": workType,
        "city": city,
        "companyName": companyName
      };
      this.getInfoByWorkCityType(params, (lists) => {
        this.requestLists = lists;
      });
    }
  }
}
</script>

<style>
@import 'http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css'
</style>
