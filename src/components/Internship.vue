<template>
<div>
  <navigator-bar />
  <search-bar />
  <h3>实习</h3>
  <!-- <div class="container-fluid">
    <div class="row list-body">
      <div class="col-md-2 list-header">公司</div>
      <div class="col-md-2 list-header">学校</div>
      <div class="col-md-2 list-header">发布时间</div>
    </div>
    <div class="row list-body" v-for="list in requestLists" @click="callLink(list.recruitUrl)">
      <div class="col-md-2 list-row">{{ list.companyName }}</div>
      <div class="col-md-2 list-row">{{ list.school }}</div>
      <div class="col-md-2 list-row">{{ formatDate(list.punishTime) }}</div>
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
  </div> -->
</div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import NavigatorBar from '@/components/NavigatorBar'
export default {
  name: 'Intership',
  components: {
    NavigatorBar,
    SearchBar
  },
  data() {
    let params = {
      'workType': 3,
      "city": "",
      "companyName": ""
    };
    this.getInfoByWorkType(params, (lists) => {
      this.requestLists = lists;
    });

    return {
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
      this.getInfoByWorkType(params, (lists) => {
        this.requestLists = lists;
      });
    }
  }
}
</script>

<style>
</style>
