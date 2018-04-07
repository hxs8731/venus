<template>
  <div>
    <ul class="searchbar" v-if="showCity.show">
      <li v-if="showCity.show">
        <span>城市: </span>
        <button v-for="city in cityList.list" class="btn btn-default" @click="selectInfo(selectedCity, city, showCity.single)"> {{ city }} </button>
        <span v-if="showCity.more" @click="toggleMore(cityList)">  更多</span>
      </li>
      <li v-if="showSchool.show">
        <span>学校: </span>
        <button v-for="school in schoolList.list" class="btn btn-default" @click="selectInfo(selectedSchool, school, showSchool.single)"> {{ school }} </button>
        <span v-if="showSchool.more" @click="toggleMore(schoolList)">  更多</span>
      </li>
      <li v-if="showTime.show"  class="form-inline">
        <span>时间: </span>
        <button v-for="time in timeList.list" class="btn btn-default" @click="selectInfo(selectedTime, time, showTime.single)"> {{ time }} </button>
        <datepicker class="form-control" id="startDate" type="text" placeholder="开始时间"></datepicker>
        <datepicker class="form-control" id="endDate" type="text" placeholder="结束时间"></datepicker>
        <span v-if="showTime.more" @click="toggleMore(timeList)">  更多</span>
      </li>
    </ul>
    <ul>
      <li v-if="showCity.show">当前选择的城市是: <span v-for="city in selectedCity"> {{ city }} </span></li>
      <li v-if="showSchool.show">当前选择的学校是: <span v-for="school in selectedSchool"> {{ school }} </span></li>
      <li v-if="showTime.show">当前选择的时间段是: <span v-for="time in selectedTime"> {{ time }} </span></li>
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
    data () {
      this.dateDefault();
      return {
        selectedCity: [],
        selectedSchool: [],
        selectedTime: [],
        cityList: {
          main: ["杭州", "北京", "上海"],
          total: ["杭州", "北京", "上海", "南京", "深圳", "武汉", "成都", "台北"],
          list: ["杭州", "北京", "上海"],
          moreMode: false
        },
        schoolList: {
          main: ["北京大学", "清华大学", "浙江大学"],
          total: ["北京大学", "清华大学", "浙江大学", "武汉大学", "浙江工业大学", "西安电子科技大学", "哈尔滨工业大学"],
          list: ["北京大学", "清华大学", "浙江大学"],
          moreMode: false
        },
        timeList: {
          main: ["本周", "下周", "下个月"],
          total: ["本周", "下周", "下个月"],
          list: ["本周", "下周", "下个月"],
          moreMode: false
        },
        showCity: {show: true, single: true, more: true},
        showSchool: {show: true, single: false, more: true},
        showTime: {show: true, single: true, more: false}
      }
    },
    mounted: {

    },
    methods: {
      selectInfo: function(array, info, single) {
        console.log("select city info = " + info);
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
      toggleMore: function(array) {
        // array.
        array.moreMode = !array.moreMode;
        console.log("toggleMore mode = " + array.moreMode);
        for (let str in array.total) {
          console.log("toggleMore total str = " + str);
        }
        for (let str in array.main) {
          console.log("toggleMore main str = " + str);
        }
        if (array.moreMode) {
          array.list = array.total;
        } else {
          array.list = array.main;
        }
        for (let str in array.list) {
          console.log("toggleMore str = " + str);
        }
      }
    }
  }
</script>
<style>
@import 'http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css';
@import "../assets/css/bootstrap-datetimepicker.min.css";
#startDate, #endDate{
  border: none;
}
.searchbar li {
  margin-bottom: 5px;
}
.searchbar .btn{
  margin-right: 5px;
}
</style>
