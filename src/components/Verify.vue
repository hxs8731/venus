<template>
<div class="root">
	<navigator-bar :activeId="4"/>
  <div class="container-fluid content-list">
      <div class="row list-title">
        <div class="col-md-2 list-header">招聘类型</div>
        <div class="col-md-2 list-header">招聘链接</div>
        <div class="col-md-3 list-header">公司名称</div>
        <div class="col-md-2 list-header">审核状态</div>
        <div class="col-md-3 list-header">审核操作</div>
      </div>
      <div class="row list-body" v-for="list in requestLists" :class="requestLists.indexOf(list) % 2 === 0 ? 'row list-body' : 'row list-body gray'">
        <div class="col-md-2 list-row">{{ 1 === list.workType ? '校园招聘' : '校园宣讲会' }}</div>
        <div class="col-md-2 list-row">{{ list.recruitUrl }}</div>
        <div class="col-md-3 list-row">{{ list.companyName }}</div>
        <div class="col-md-2 list-row">{{ 1 === list.showType ? '已通过' : '待审核'}}</div>
        <div class="col-md-3 list-row">
          <button class="btn btn-primary" @click="verify(list.id, true)">通过</button>&nbsp;&nbsp;
          <button class="btn btn-primary" @click="verify(list.id, false)">删除</button>&nbsp;&nbsp;
          <button class="btn btn-primary" @click="verify(list.id, true, _global.ORDER_TYPE.HOT)">设为热门</button>
        </div>
      </div>
  </div>
  <div class="content-foot">
      <div v-if="this.pageCount <= 0" class="no-data">没有数据</div>
      <paginator v-else :pageCount="pageCount" @togglePage="togglePage($event)"></paginator>
  </div>
</div>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
import Paginator from '@/components/Paginator';
export default {
  name: "Deploy",
  components: {
    NavigatorBar,
    Paginator
  },
  data() {
    return {
      isdisabled: true,
      requestLists: [],
      pagiData: {
          pageNumber: 0,
          pageSize: 10
      },
      pageCount: -1
    };
  },
  computed: {
    checkInputValue: function() {
      return "" !== this.username && "" !== this.password;
    }
  },
  mounted() {
    let user = this.cookieStore.getCookie("username");
    let type = this.cookieStore.getCookie("userType");
    if (user && type >= 2) {
      console.log("check permission pass");
    } else {
      alert("没有权限操作，请联系管理员！");
      this.$router.push('/');
      return;
    }
    // GET_RECRUIT_LIST
    this.doQueryList();
  },
  methods: {
    verify: function(id, pass, type) {
      this.http
        .get(this._global.UPDATE_RECRUIT, {
          params: this.generateParams(id, pass, type)
        }).then(res => {
          console.log(`doDeploy callback ${JSON.stringify(res)}`);
          if (res.data.success) {
            this.doQueryList();
            alert('操作成功！');
          } else {
            alert('操作失败！' + res.data.errorMsg);
              if ("user_error" === res.data.errCode) {
                this.goHomeLogout();
              }
          }
          // this.clearInput();
        })
        .catch(function(error) {
          alert(error);
        });
    },
    generateParams: function(ids, pass, type) {
      // let params = new URLSearchParams();
      // params.append("userName", this.cookieStore.getCookie("username"));
      // // ids=1,2&showType=0
      // params.append("ids", ids);
      // params.append("showType", pass ? 1 : 0);
      // return params;
      let params = {};
      params.userName = this.cookieStore.getCookie("username");
      params.ids = ids;
      params.showType = pass ? 1 : 0;
      if (type || 0 === type) {
        params.orderType = type
      }
      return params;
    },
    doQueryList: function() {
      this.http
      .get(this._global.GET_RECRUIT_LIST, {
        params: {
          userName: this.cookieStore.getCookie("username"),
          showType: 0,
          pageNumber: this.pagiData.pageNumber
        }
      })
      .then(res => {
        console.log("GET_RECRUIT_LIST res." + JSON.stringify(res));
        if (res.data && res.data.success) {
          this.requestLists = res.data.data;
          this.pageCount = res.data.totalPages; // update pagecount
        }
      }).catch((error) => {
        console.log("error" + JSON.stringify(error));
      });
    },
    togglePage: function(indexPage) {
          console.log(indexPage);
          this.pagiData.pageNumber = indexPage;
          this.doQueryList();
      }
  }
};
</script>

<style>
.form_content {
  width: 40%;
  margin: 50px auto;
}
</style>
