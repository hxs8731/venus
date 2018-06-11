<template>
<div class="center-block">
  <navigator-bar :navInfos="naviLists" :loginNavInfos="loginNavLists" @search-nav="handleNavbarSearch"/>
  <search-bar  :searchProps="searchInfos" @selected-info="handleSelected"/>
  <div class="container-fluid content-list">
    <div class="row list-title">
      <div class="col-md-2 list-header">城市</div>
      <div class="col-md-3 list-header">公司</div>
      <div class="col-md-2 list-header">学校</div>
      <div class="col-md-2 list-header">举办时间</div>
      <div class="col-md-2 list-header">举办地点</div>
      <div class="col-md-1 list-header">订阅</div>
    </div>
    <div class="row list-body" v-for="list in requestLists" :class="requestLists.indexOf(list) % 2 === 0 ? 'row list-body' : 'row list-body gray'">
      <div class="col-md-2 list-row" :title="list.recruitCitys"><span class="label label-primary">{{ list.recruitCitys }}</span></div>
      <div class="col-md-3 list-row" :title="list.companyName"><span class="gap-right label label-success" v-if="list.companyTags && '' !== list.companyTags">{{list.companyTags}}</span>{{ list.companyName }}</div>
      <div class="col-md-2 list-row" @click="callLink(list.recruitUrl)"><a href="#" :title="list.school">{{ list.school }}</a></div>
      <div class="col-md-2 list-row">{{ list.xjTime }}</div>
      <div class="col-md-2 list-row" :title="list.teachInsAddress">{{ list.teachInsAddress }}</div>
      <div class="col-md-1 list-row"><button class="btn btn-primary" @click="callLink(list.recruitUrl)">订阅</button></div>
    </div>
</div>
    <!-- <pagination :currentPage="pagiData.currentPage" :showPage="pagiData.showPages" :allPages="pagiData.allPages"/> -->
    <div class="content-foot">
        <div v-if="this.pageCount <= 0" class="no-data">没有数据</div>
        <paginator v-else :pageCount="pageCount" @togglePage="togglePage($event)"></paginator>
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
    this.updateListData(params);
    // this.getInfoByWorkType(params, (lists) => {
    //   this.requestLists = lists.data;
    // });
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
          }
        //   ,
        //   {
        //     text: "实习",
        //     to: "/internship",
        //     className: "nav-pills",
        //     id: "internship"
        //   },
        //   {
        //     text: "求职学院",
        //     to: "/jobhunting",
        //     className: "nav-pills",
        //     id: "jobhunting"
        //   }
        ],
      loginNavLists: [
        {
          text: "发布信息",
          to: "/deploy",
          className: "nav-pills",
          id: "deploy"
        },
        {
          text: "审核信息",
          to: "/verify",
          className: "nav-pills",
          id: "verify"
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
          pageNumber: 0,
          pageSize: 10
      },
      navSearchInfo: null
    }
  },
  methods: {
      handleSelected: function(selectedValue) {
          this.selectedValue = selectedValue;
          this.doQueryList();
      },

      handleNavbarSearch: function(value) {
          // search company
          this.pagiData.pageNumber = -1;
          this.navSearchInfo = value;
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
          let searchMode = 0; // normal mode
          if (this.navSearchInfo) {
              let value = this.navSearchInfo;
              value = value.replace('\s+', '');
              if(value.length > 0) {
                  params.companyName = this.navSearchInfo;
                  searchMode = 1; // company mode
              }
          }
          if (this.selectedValue && searchMode == 0) { // normal mode
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
                  } else if (-1 === startDate) {
                      params.fromXjTime = this.formatDate(new Date());
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
              if (this.pagiData.pageNumber >= 0) {
                  params.pageNumber = this.pagiData.pageNumber;
              }
              params.pageSize = this.pagiData.pageSize;
          }
          console.log('handleSelected [watch]==>new: %s, params: %s', JSON.stringify(this.selectedValue), JSON.stringify(params));
          this.updateListData(params);
      },
      updateListData: function(params) {
          params.pageSize = 10;
          this.getInfoByWorkType(params, (lists) => {
            this.requestLists = lists.data;
            this.pageCount = lists.totalPages; // update pagecount
            console.log(`updateListData ${JSON.stringify(lists.data)}, ${lists.totalPages}`);
          });
      }
  }
}
</script>

<style>
</style>
