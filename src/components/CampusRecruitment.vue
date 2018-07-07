<template>
<div>
  <navigator-bar :activeId="0" @search-nav="handleNavbarSearch"/>
  <search-bar :searchProps="searchInfos" @selected-info="handleSelected"/>
  <div class="container-fluid content-list">
    <div class="row list-title">
      <div class="col-md-1 list-header">&nbsp;</div>
      <div class="col-md-2 list-header">城市</div>
      <div class="col-md-4 list-header">招聘会</div>
      <div class="col-md-2 list-header">收录时间</div>
      <div class="col-md-3 list-header">网申入口</div>
    </div>
    <div class="row list-body" v-for="list in requestLists" :class="requestLists.indexOf(list) % 2 === 0 ? 'row list-body' : 'row list-body gray'">
      <div class="col-md-1 list-row">&nbsp;</div>
      <div class="col-md-2 list-row"><span class="label label-primary">{{ list.recruitCitys }}</span></div>
      <div class="col-md-4 list-row" @click="callLink(list.recruitUrl)"><a :title="list.companyName" href="#">{{ list.companyName }}</a></div>
      <div class="col-md-2 list-row">{{ formatDate(list.gmtCreate)}}</div>
      <div class="col-md-3 list-row"><button class="btn btn-primary" @click="callLink(list.recruitUrl)">网申</button></div>
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
  name: 'CampusRecruitment',
  components: {
    NavigatorBar,
    SearchBar,
    Paginator
  },
  data() {
    let params = {
      workType: 1,
      pageSize: 10
    };
    this.updateListData(params);

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
      selectedValue: null,
      requestLists: [],
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
              workType: 1
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
                      params.fromPubTime = startDate;
                      params.toPubTime = endDate;
                  }
                  console.log(`handleSelected => params.startDate = ${startDate}`);
                  console.log(`handleSelected => params.endData = ${endDate}`);
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
          this.getInfoByWorkType(params, (lists) => {
            this.requestLists = lists.data;
            // console.log("updateListData ==> " + JSON.stringify(this.requestLists));
            this.pageCount = lists.totalPages; // update pagecount
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
