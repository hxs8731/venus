<template>
<div>
  <ul class="searchbar" v-if="showCity.show">
    <li v-if="showCity.show">
      <span>城市: </span>
      <button v-for="info in mainCityInfos" class="btn btn-default" @click="selectInfo(selectedCityInfos, info, showCity.single)"> {{ info.city }} </button>
      <button v-for="info in selectedCityInfos" v-if="mainCityInfos.indexOf(info) < 0" class="btn btn-primary" @click="selectInfo(selectedCityInfos, info, showCity.single)">{{ info.city }}</button>
      <span @click="toggleMore(showCity)">更多城市</span>

    </li>
    <li v-if="showCity.showMore">
      <span>自定义城市: </span>
      <p v-for="letterData in letters">
          <span>{{ letterData.letter }}</span>
          <button v-for="info in letterData.data" class="btn btn-default" @click="selectInfo(selectedCityInfos, info, showCity.single)"> {{ info.city }} </button>
      </p>
    </li>
    <li v-if="showSchool.show">
      <span>学校: </span>
      <button v-for="info in mainSchoolInfos" class="btn btn-default" @click="selectInfo(selectedSchoolInfos, info.school, showSchool.single)"> {{ info.school }} </button>
      <span v-if="showSchool.more" @click="toggleMore(schoolList)">  更多</span>
    </li>

    <li v-if="!showTime.showMore" class="form-inline">
      <span>时间: </span>
      <button v-for="info in mainTimeInfos" class="btn btn-default" @click="selectInfo(selectedTime, info, showTime.single)"> {{ info.text }} </button>
      <span v-if="showTime.showMain" @click="changeTimeMode(true, showTime)">  自定义时间</span>
    </li>
    <li v-if="showTime.showMore" class="form-inline">
      <span>时间: </span>
      <datepicker class="form-control" id="startDate" type="text" placeholder="开始时间" language="zh" format="yyyy-MM-dd"></datepicker>
      <datepicker class="form-control" id="endDate" type="text" placeholder="结束时间" language="zh" format="yyyy-MM-dd"></datepicker>
      <span v-if="showTime.showMore" @click="changeTimeMode(false, showTime)">  普通时间段</span>
    </li>
  </ul>
  <ul>
    <li v-if="showCity.show">当前选择的城市是: <span v-for="info in selectedCityInfos"> {{ info.city }} </span></li>
    <li v-if="showSchool.show">当前选择的学校是: <span v-for="school in selectedSchoolInfos"> {{ info.school }} </span></li>
    <li v-if="showTime.show">当前选择的时间段是: <span v-for="time in selectedTime"> {{ info.time }} </span></li>
  </ul>
</div>
</template>
</ul>
<script>
import "../assets/bootstrap-datetimepicker.js";
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'SearchBar',
  components: {
    Datepicker,
    Datepicker
  },
  props: ['searchProps'],
  data() {
    //   this.dateDefault();
    this.getCityByIp({
      level: 2,
      order: 1
    }, (res) => {
      this.mainCityInfos = res;
    //   console.log('GET ＝>>>>>>> searchbar getCityByIp main start res = ' + JSON.stringify(res) + ", searchProps = " + searchProps);
    });
    this.getCityByIp({ // get totalCityInfos
      level: 2,
      order: 0
    }, (res) => {
      console.log('GET ＝>>>>>>> searchbar getCityByIp total start res = ' + JSON.stringify(res));
      this.totalCityInfos = res;
      for (let i = 0, len = this.letters.length; i < len; i++) {
          let letterData = this.letters[i];
          console.log(`letter data is ${letterData}, ${this.letters}`);
          letterData.data = res.filter((info) => {
             return info.pinyin.startsWith(letterData.letter);
            //  console.log(`filter letter => ${letterData.letter}, ${info.pinyin}`);
          });
          console.log(`letter data is setted ${letterData.data}`);
      }
    });
    return {
      selectedCityInfos: [],
      selectedSchoolInfos: [],
      selectedTime: [],
      // cityList: {
      //   main: ["杭州", "北京", "上海"],
      //   total: ["杭州", "北京", "上海", "南京", "深圳", "武汉", "成都", "台北"],
      //   list: ["杭州", "北京", "上海"],
      //   moreMode: false
      // },
      // schoolList: {
      //   main: ["北京大学", "清华大学", "浙江大学"],
      //   total: ["北京大学", "清华大学", "浙江大学", "武汉大学", "浙江工业大学", "西安电子科技大学", "哈尔滨工业大学"],
      //   list: ["北京大学", "清华大学", "浙江大学"],
      //   moreMode: false
      // },
      // timeList: {
      //   main: ["本周", "下周", "下个月"],
      //   total: ["本周", "下周", "下个月"],
      //   list: ["本周", "下周", "下个月"],
      //   moreMode: false
      // },
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
      selectedCityInfosInfo: {
        id: -1,
        parentId: -1,
        province: "",
        level: -1,
        city: "",
        county: "",
        ipsSeg: null,
        gmtCreate: null,
        gmtModified: -1,
        pinyin: "",
        defOrder: -1
      },
      letters: [{
          letter: "A",
          data: []
        },
        {
          letter: "B",
          data: []
        },
        {
          letter: "C",
          data: []
        },
        {
          letter: "D",
          data: []
        },
        {
          letter: "E",
          data: []
        },
        {
          letter: "F",
          data: []
        },
        {
          letter: "G",
          data: []
        },
        {
          letter: "H",
          data: []
        },
        {
          letter: "I",
          data: []
        },
        {
          letter: "J",
          data: []
        },
        {
          letter: "K",
          data: []
        },
        {
          letter: "L",
          data: []
        },
        {
          letter: "M",
          data: []
        },
        {
          letter: "N",
          data: []
        },
        {
          letter: "O",
          data: []
        },
        {
          letter: "P",
          data: []
        },
        {
          letter: "Q",
          data: []
        },
        {
          letter: "R",
          data: []
        },
        {
          letter: "S",
          data: []
        },
        {
          letter: "T",
          data: []
        },
        {
          letter: "U",
          data: []
        },
        {
          letter: "V",
          data: []
        },
        {
          letter: "W",
          data: []
        },
        {
          letter: "X",
          data: []
        },
        {
          letter: "Y",
          data: []
        },
        {
          letter: "Z",
          data: []
        }
      ],
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
        showMore: this.searchProps.showTime.showMore
      }
    }
  },
  methods: {
    selectInfo: function(array, info, single) {
      console.log("select city info = " + JSON.stringify(info));
      if (single) {
        array.splice(0);
      }
      let index = array.indexOf(info);
      if (index >= 0) {
        array.splice(index, 1); // if selected, toggle it
      } else {
        array.splice(0, 0, info);
      }
    },
    toggleMore: function(showObj) {
      showObj.showMore = !showObj.showMore;
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
    }
  }
}
</script>
<style>
#startDate,
#endDate {
  border: none;
}

.searchbar li {
  margin-bottom: 5px;
}

.searchbar .btn {
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
