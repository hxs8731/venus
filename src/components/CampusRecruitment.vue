<template>
<div>
  <navigator-bar :navInfos="naviLists" />
  <search-bar :searchProps="searchInfos"/>
  <h3>招聘信息</h3>
  <div class="container-fluid">
    <div class="row list-body">
      <div class="col-md-2 list-header">城市</div>
      <div class="col-md-4 list-header">招聘会</div>
      <div class="col-md-2 list-header">收录时间</div>
      <div class="col-md-4 list-header">网申入口</div>
    </div>
    <div class="row list-body" v-for="list in requestLists" @click="callLink(list.recruitUrl)">
      <div class="col-md-2 list-row"><span class="label label-primary">{{ list.recruitCitys }}</span></div>
      <div class="col-md-4 list-row">{{ list.companyName }}</div>
      <div class="col-md-2 list-row">{{ formatDate(list.gmtCreate)}}</div>
      <div class="col-md-4 list-row"><button class="btn btn-primary">网申</button></div>
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
    this.getInfoByWorkType(params, (lists) => {
      this.requestLists = lists;
    });

    return {
      searchInfos: {
          showCity: {
              show: true,
              single: true,
              showMore: false
          },
          showSchool: {
              show: false, // not show school
              single: false,
              showMore: false
          },
          showTime: {
              show: true,
              single: true,
              showMore: false
          }
      },
      naviLists: [{
          text: "校园招聘",
          to: "/",
          className: "active nav-pills",
          id: "campus"
        },
        {
          text: "校园宣讲会",
          to: "/preach",
          className: "nav-pills",
          id: "preach"
        },
        {
          text: "实习",
          to: "/internship",
          className: "nav-pills",
          id: "internship"
        },
        {
          text: "求职学院",
          to: "/jobhunting",
          className: "nav-pills",
          id: "jobhunting"
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
      this.getInfoByWorkType(paramsObj, (lists) => {
        this.requestLists = lists;
      });
    }
  }
}
</script>

<style>

/*.logo-color {
   background-color: #FFF0F5
 }*/
</style>
