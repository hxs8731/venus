<template>
<div class="center-block searchbar">
  <ul v-if="showCity.show">
    <li v-if="showCity.show">
      <span class="left-tip">城市: </span>
      <button v-for="info in mainCityInfos" :class="selectedCityInfos.indexOf(info) < 0 ? 'btn btn-default' : 'btn btn-primary' " @click="selectInfo(selectedCityInfos, info, showCity.single)"> {{ info.city }} </button>
      <button v-for="info in selectedCityInfos" v-if="mainCityInfos.indexOf(info) < 0" class="btn btn-primary" @click="selectInfo(selectedCityInfos, info, showCity.single)">{{ info.city }}</button>
      <a href="#" @click="toggleMore(showCity), blur()" border=0 data-toggle="modal" data-target="#cityModal"><label class="glyphicon glyphicon-plus"></label>更多城市</a>
      <model-view modelTitle="自定义城市" :singleSelect="showCity.single" :modelData="letters" :selectedInfos="selectedCityInfos" modelId="cityModal" @modal-selected="selectInfoFromModal($event)" />
    </li>

    <li v-if="showSchool.show && mainSchoolInfos.length > 0">
      <span class="left-tip">学校: </span>
      <button v-for="info in mainSchoolInfos" :class="selectedSchoolInfos.indexOf(info) < 0 ? 'btn btn-default' : 'btn btn-primary' " @click="selectInfo(selectedSchoolInfos, info, showSchool.single)"> {{ info.name }} </button>
      <!-- <span v-if="showSchool.more" @click="toggleMore(schoolList)">  更多</span> -->
    </li>

    <li v-if="!showTime.showMore" class="form-inline">
      <span class="left-tip">时间: </span>
      <button v-for="timeInfo in mainTimeInfos" :class="selectedTimeInfos.indexOf(timeInfo) < 0 ? 'btn btn-default' : 'btn btn-primary' " @click="selectInfo(selectedTimeInfos, timeInfo, showTime.single)"> {{ timeInfo.text }} </button>
      <a href="#" @click="changeTimeMode(true, showTime)"><span class="glyphicon glyphicon-th"></span>自定义时间</a>
    </li>
    <li v-if="showTime.showMore" class="form-inline">
      <span class="left-tip">时间: </span>
      <datepicker class="form-control" id="startDate" type="text" @selected="selectStartDate" placeholder="开始时间" language="zh" format="yyyy-MM-dd"></datepicker>
      <datepicker class="form-control" id="endDate" type="text" @selected="selectEndDate" placeholder="结束时间" language="zh" format="yyyy-MM-dd"></datepicker>
      <a href="#" @click="changeTimeMode(false, showTime)"><span class="glyphicon glyphicon-th-large"></span>普通时间段</a>
    </li>
  </ul>
</div>
</template>
</ul>
<script>
import "../assets/bootstrap.min.js";
import Datepicker from 'vuejs-datepicker';
import ModelView from '@/components/ModelView';
export default {
  name: 'SearchBar',
  components: {
    Datepicker,
    ModelView
  },
  props: ['searchProps', 'searchCity'],
  data() {
    this.getCityByIp({
      level: 2,
      order: 1
    }, (res) => {
      this.mainCityInfos = res;
        // console.log('GET ＝>>>>>>> searchbar getCityByIp main start res = ' + JSON.stringify(res));
    });
    this.getCityByIp({ // get totalCityInfos
      level: 2,
      order: 0
    }, (res) => {
      this.totalCityInfos = res;
      for (let i = 0, len = this.letters.length; i < len; i++) {
        let letterData = this.letters[i];
        letterData.data = res.filter((info) => {
          return info.pinyin.startsWith(letterData.letter);
        });
      }
    });

    return {
      selectedCityInfos: this.searchProps.showCity.infos,
      selectedSchoolInfos: this.searchProps.showSchool.infos,
      selectedTimeInfos: this.searchProps.showTime.infos,
      mainCityInfos: [],
      totalCityInfos: [],
      mainSchoolInfos: [],
      totalSchoolInfos: [],
      mainTimeInfos: [{
          text: "本周",
          startDate: "",
          endDate: ""
        },
        {
          text: "下周",
          startDate: "",
          endDate: ""
        },
        {
          text: "下个月",
          startDate: "",
          endDate: ""
        }
      ],
      startQueryDate: "",
      endQueryDate: "",
      letters:[{letter:"A",data:[]},{letter:"B",data:[]},{letter:"C",data:[]},{letter:"D",data:[]},{letter:"E",data:[]},{letter:"F",data:[]},{letter:"G",data:[]},{letter:"H",data:[]},{letter:"I",data:[]},{letter:"J",data:[]},{letter:"K",data:[]},{letter:"L",data:[]},{letter:"M",data:[]},{letter:"N",data:[]},{letter:"O",data:[]},{letter:"P",data:[]},{letter:"Q",data:[]},{letter:"R",data:[]},{letter:"S",data:[]},{letter:"T",data:[]},{letter:"U",data:[]},{letter:"V",data:[]},{letter:"W",data:[]},{letter:"X",data:[]},{letter:"Y",data:[]},{letter:"Z",data:[]}],
      showCity: {
        show: this.searchProps.showCity.show,
        single: this.searchProps.showCity.single,
        showMore: this.searchProps.showCity.showMore
      },
      showSchool: {
        show: this.searchProps.showSchool.show,
        single: this.searchProps.showSchool.single,
        showMore: this.searchProps.showSchool.showMore
      },
      showTime: {
        show: this.searchProps.showTime.show,
        single: this.searchProps.showTime.single,
        showMore: this.searchProps.showTime.showMore,
        startDate: this.searchProps.showTime.startDate,
        endDate: this.searchProps.showTime.endDate,
    },
    showModal: false
    }
  },
  methods: {
    selectInfoFromModal: function(options) { // 只能传一个参数；
        console.log("selectInfoFromModal select city info = " + JSON.stringify(options));
        if (options) {
            this.selectInfo(options.infos, options.info, options.single);
        }
    },
    selectInfo: function(array, info, single) {
        console.log("select city info = " + JSON.stringify(info) + ", array = " + JSON.stringify(array) + ", single = " + single);
      let index = array.indexOf(info);
      //   console.log(`${index}`);
      let unselected = false;
      if (index >= 0) {
        unselected = true;
        array.splice(index, 1); // if selected, toggle it
      } else {
        if (single) {
          array.splice(0);
        }
        array.splice(0, 0, info);
      }
    //   let infos = this.searchProps.showCity.infos;
      //   console.log(`array.splice ${JSON.stringify(array)}, ${JSON.stringify(infos)}`);
      if (info.city) { // select or unselect city info.
        // collopse city panel
        this.showCity.showMore = false;
        if (this.showSchool.show) {
            if (array.length <= 0) {
                this.mainSchoolInfos = []; // clear main school info
            } else {
                // do query school info
                this.getSchoolByParams({
                    cityName: info.city
                }, (res) => {
                    this.mainSchoolInfos = res;
                    //   this.initialTimeInfo();
                    console.log('GET ＝>>>>>>> searchbar getCityByIp main start res = ' + JSON.stringify(res));
                });
            }
        }
      }
      if (info.text) { // select or unselect time info.
        let parseTime = this.parseMainTime(info.text);
        this.searchProps.showTime.startDate = unselected ? -1 : parseTime.start;
        this.searchProps.showTime.endDate = unselected ? -1 : parseTime.end;
        console.log(`selectInfo ${this.showTime.startDate}, ${this.showTime.endDate}, ${this.searchProps.showTime.startDate}, ${this.searchProps.showTime.endDate}`);
      }
      this.$emit("selected-info", this.searchProps);
    },
    toggleMore: function(showObj) {
      showObj.showMore = !showObj.showMore;
    },
    selectStartDate: function(value) {
        console.log(`selectStartDate ===> ${this.formatDate(value)}`);
        this.searchProps.showTime.startDate = this.formatDate(value);
        // this.showTime.startDate = this.formatDate(value);
        this.$emit("selected-info", this.searchProps);
    },
    selectEndDate: function(value) {
        console.log(`selectEndDate ===> ${this.formatDate(value)}`);
        this.searchProps.showTime.endDate = this.formatDate(value);
        // this.showTime.endDate = this.formatDate(value);
        this.$emit("selected-info", this.searchProps);
    },
    clearSelectDate: function(value) {
        this.searchProps.showTime.startDate = -1;
        this.searchProps.showTime.endDate = -1;
    },
    parseMainTime: function(timeStr) {
        let result = {};
        var weekOfday = this.moment().format('E'); //计算今天是这周第几天
        if ("本周" === timeStr) {
            result.start = this.moment().subtract(weekOfday - 1, 'days').format('YYYY-MM-DD');
            result.end = this.moment().add(7 - weekOfday, 'days').format('YYYY-MM-DD');
        } else if ("下周" === timeStr) {
            result.start = this.moment().add(7 - weekOfday + 1, 'days').format('YYYY-MM-DD');
            result.end = this.moment().add(7 - weekOfday + 7, 'days').format('YYYY-MM-DD');
        } else if ("下个月" === timeStr) {
            result.start = this.moment().endOf('month').add(1, 'days').format('YYYY-MM-DD');
            result.end = this.moment().endOf('month').add(1, 'month').format('YYYY-MM-DD');
        } else if ("上周" === timeStr) {
            result.start = this.moment().subtract(weekOfday - 1 + 7, 'days').format('YYYY-MM-DD');
            result.end = this.moment().subtract(weekOfday - 1 + 1, 'days').format('YYYY-MM-DD');
        } else if ("上个月" === timeStr) {
            result.start = this.moment().startOf('month').subtract(1, 'month').format('YYYY-MM-DD');
            result.end = this.moment().endOf('month').subtract(1, 'month').format('YYYY-MM-DD');
        }
        return result;
    },

    changeTimeMode: function(isMain, showTime) {
      if (isMain) {
        // it's time main mode, change to custom time range
        showTime.showMore = true;
        showTime.showMain = false;
      } else {
        // it's custom time range, switch to main mode.
        showTime.showMore = false;
        showTime.showMain = true;
      }
      this.clearSelectDate();
    }
  }
}
</script>
<style>
#startDate,
#endDate {
  border: none;
}
.searchbar {
  background: #FCFCFC;
  padding: 10px 20px;
  margin-top: 20px;
  width: 80%;
  /*border: 1px dotted #BCBCBC;*/
}
.searchbar li {
  margin: 10px 0px;
  list-style: none;
  /*border-bottom: 1px dotted #B2DFEE;*/
}
.searchbar .left-tip {
    padding-right: 10px;
}
.searchbar .btn {
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
