<template>
<div>
  <navigator-bar :navInfos="naviLists" />
  <search-bar :searchProps="searchInfos" @selected-info="handleSelected"/>
  <div class="container-fluid">
    <div class="row list-body">
      <div class="col-md-2 list-header">城市</div>
      <div class="col-md-4 list-header">招聘会</div>
      <div class="col-md-2 list-header">收录时间</div>
      <div class="col-md-4 list-header">网申入口</div>
    </div>
    <div class="row list-body" v-for="list in requestLists">
      <div class="col-md-2 list-row"><span class="label label-primary">{{ list.recruitCitys }}</span></div>
      <div class="col-md-4 list-row" @click="callLink(list.recruitUrl)">{{ list.companyName }}</div>
      <div class="col-md-2 list-row">{{ formatDate(list.gmtCreate)}}</div>
      <div class="col-md-4 list-row"><button class="btn btn-primary" @click="callLink(list.recruitUrl)">网申</button></div>
    </div>
    <ul class="pagination">
      <li><a href="#">&laquo;</a></li>
      <li class="active"><a href="#">1</a></li>
      <li><a href="#">2</a></li>
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
      'workType': 1
    };
    this.getInfoByWorkType(params, (lists) => {
      this.requestLists = lists;
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
      requestLists: [],
      school: "",
      city: "",
      companyName: "",
      time: ""
    }
  },
  methods: {
    //   doQueryList: (workType, city, companyName) => {
    //       let paramsObj = {
    //         "workType": workType,
    //         "city": city,
    //         "companyName": companyName
    //       };
    //       this.getInfoByWorkType(paramsObj, (lists) => {
    //         this.requestLists = lists;
    //       });
    //   },
      handleSelected: function(selectedValue) {
          let params = {
              workType: 1
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
  },
  _handleSearchCity: function(selctedCityInfo) {
      console.log(`handleSearchCity ${JSON.stringify(selctedCityInfo)}`);
  }
}
</script>

<style>

/*.logo-color {
   background-color: #FFF0F5
 }*/
</style>
