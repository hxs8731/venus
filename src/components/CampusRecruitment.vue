<template>
<div>
  <navigator-bar :navInfos="naviLists" />
  <search-bar :searchProps="searchInfos" @selected-info="handleSelected"/>
  <div class="container-fluid">
    <div class="row list-body">
      <div class="col-md-1 list-header">&nbsp;</div>
      <div class="col-md-2 list-header">城市</div>
      <div class="col-md-4 list-header">招聘会</div>
      <div class="col-md-2 list-header">收录时间</div>
      <div class="col-md-3 list-header">网申入口</div>
    </div>
    <div class="row list-body" v-for="list in requestLists">
      <div class="col-md-1 list-row">&nbsp;</div>
      <div class="col-md-2 list-row"><span class="label label-primary">{{ list.recruitCitys }}</span></div>
      <div class="col-md-4 list-row" @click="callLink(list.recruitUrl)"><a href="#">{{ list.companyName }}</a></div>
      <div class="col-md-2 list-row">{{ formatDate(list.gmtCreate)}}</div>
      <div class="col-md-3 list-row"><button class="btn btn-primary" @click="callLink(list.recruitUrl)">网申</button></div>
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
  name: 'CampusRecruitment',
  components: {
    NavigatorBar,
    SearchBar,
    Paginator
  },
  data() {
    let params = {
      'workType': 1
    };
    this.getInfoByWorkType(params, (lists) => {
      this.requestLists = lists.data;
      console.log(`getInfoByWorkType response ${lists.totalElems}, ${lists.totalPages}`);
      this.pageCount = lists.totalPages;
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
              show: false, // not show school
              single: false,
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
              workType: 1
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
                      params.fromPubTime = startDate;
                      params.toPubTime = endDate;
                  }
                  console.log(`handleSelected => params.startDate = ${startDate}`);
                  console.log(`handleSelected => params.endData = ${endDate}`);
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

/*.logo-color {
   background-color: #FFF0F5
 }*/
</style>
