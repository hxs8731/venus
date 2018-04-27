<template>
<div class="center-block">
  <navigator-bar :navInfos="naviLists" />
  <search-bar  :searchProps="searchInfos" @selected-info="handleSelected"/>
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
    <!-- <pagination :currentPage="pagiData.currentPage" :showPage="pagiData.showPages" :allPages="pagiData.allPages"/> -->
    <paginator :pageCount="pageCount" @togglePage="togglePage($event)"></paginator>
  </div>
</div>
</template>
<script>
import SearchBar from '@/components/SearchBar';
import NavigatorBar from '@/components/NavigatorBar';
import Paginator from '@/components/Paginator';
export default {
  name: 'Preach',
  components: {
    NavigatorBar,
    SearchBar,
    Paginator
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
      selectedValue: null,
      requestLists: [],
      school: "",
      city: "",
      companyName: "",
      time: "",
      pageCount: -1,
      pagiData: {
          pageNumber: 1,
          pageSize: 10
      }
    }
  },
  methods: {
      handleSelected: function(selectedValue) {
          this.selectedValue = selectedValue;
          this.doQueryList();
      },

      togglePage: function(indexPage) {
          console.log(indexPage);
          this.pagiData.pageNumber = indexPage;
          this.doQueryList();
      },

      doQueryList: function() {
          let params = {
              workType: 2
          };
          if (this.selectedValue) {
              if (this.selectedValue.showCity.show) {
                  let infos = this.selectedValue.showCity.infos;
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
              if (this.selectedValue.showTime.show) {
                  let startDate = this.selectedValue.showTime.startDate;
                  let endDate = this.selectedValue.showTime.endDate;

                  if (-1 !== startDate && -1 !== endDate) {
                      params.fromXjTime = startDate;
                      params.toXjTime = endDate;
                  }
                  console.log(`handleSelected => params.startDate = ${startDate}`);
                  console.log(`handleSelected => params.endData = ${endDate}`);
              }
              if (this.selectedValue.showSchool.show) {
                  let infos = this.selectedValue.showSchool.infos;
                  let len = infos.length;
                  if (len > 0) {
                      let schoolName = "";
                      for (let i = 0; i < len; i++) {
                          if (i > 0) {
                              schoolName += ","
                          }
                          schoolName += infos[i].name;
                      }
                      params.school = schoolName;
                      console.log(`handleSelected => params.schoolName = ${params.schoolName}`);
                  }
              }
          }
          if (this.pagiData) {
              params.pageNumber = this.pagiData.pageNumber;
              params.pageCount = this.pagiData.pageCount;
          }
          console.log('handleSelected [watch]==>new: %s', JSON.stringify(this.selectedValue));
          this.getInfoByWorkType(params, (lists) => {
            this.requestLists = lists.data;
          });
      }
  }
}
</script>

<style>
</style>
