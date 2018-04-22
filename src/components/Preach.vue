<template>
<div class="center-block">
  <navigator-bar :navInfos="naviLists" />
  <search-bar  :searchProps="searchInfos" @selected-info="handleSelected"/>
  <h3>校园宣讲会</h3>
  <div class="container-fluid">
    <div class="row list-body">
      <div class="col-md-3 list-header">公司</div>
      <div class="col-md-2 list-header">学校</div>
      <div class="col-md-3 list-header">举办时间</div>
      <div class="col-md-3 list-header">举办地点</div>
      <div class="col-md-1 list-header">订阅</div>
    </div>
    <div class="row list-body" v-for="list in requestLists" @click="callLink(list.recruitUrl)">
      <div class="col-md-3 list-row">{{ list.companyName }}</div>
      <div class="col-md-2 list-row">{{ list.school }}</div>
      <div class="col-md-3 list-row">{{ list.xjTime }}</div>
      <div class="col-md-3 list-row">{{ list.teachInsAddress }}</div>
      <div class="col-md-1 list-row">订阅</div>
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
      "workType": 2
    };

    this.getInfoByWorkType(params, (lists) => {
      this.requestLists = lists.data;
    });
    return {
        searchInfos: {
            showCity: {
                show: true,
                single: true,
                showMore: false,
                infos: []
            },
            showSchool: {
                show: true,
                single: true,
                showMore: false,
                infos: []
            },
            showTime: {
                show: true,
                single: true,
                showMore: false,
                infos: [],
                startDate: -1,
                endDate: -1
            }
        },
        naviLists: [{
            text: "校园招聘",
            to: "/",
            className: "nav-pills",
            id: "campus"
          },
          {
            text: "校园宣讲会",
            to: "/preach",
            className: "active nav-pills",
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
      handleSelected: function(selectedValue) {
          let params = {
              workType: 2
          };
          if (selectedValue.showCity.show) {
              let infos = selectedValue.showCity.infos;
              let len = infos.length;
              if (len > 0) {
                  let cityStr = "";
                  for (let i = 0; i < len; i++) {
                      if (i > 0) {
                          cityStr += ","
                      }
                      cityStr += infos[i].city;
                  }
                  params.city = cityStr;
                  console.log(`handleSelected => params.city = ${params.city}`);
              }
          }
          this.getInfoByWorkType(params, (lists) => {
            this.requestLists = lists;
          });
          if (selectedValue.showTime.show) {
              let startDate = "2018-03-20";
              let endDate = "2018-04-20";
            //   this.showTime.startDate = "2018-03-20";
            //   this.showTime.endDate = "2018-04-20";
              params.fromPubTime = startDate;
              params.toPubTime = endDate;
              console.log(`handleSelected => params.startDate = ${startDate}`);
              console.log(`handleSelected => params.endData = ${endData}`);
          }
          console.log('handleSelected [watch]==>new: %s, old: %s', JSON.stringify(selectedValue));
      }
  }
}
</script>

<style>
</style>
