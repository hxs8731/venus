<template>
<div class="root">
	<navigator-bar :navInfos="naviLists" :loginNavInfos="loginNavLists"/>
  <div class="container-fluid content-list">
      <div class="row list-title">
        <div class="col-md-2 list-header">招聘类型</div>
        <div class="col-md-2 list-header">招聘链接</div>
        <div class="col-md-3 list-header">标题</div>
        <div class="col-md-2 list-header">审核状态</div>
        <div class="col-md-3 list-header">审核操作</div>
      </div>
      <div class="row list-body" v-for="list in requestLists" :class="requestLists.indexOf(list) % 2 === 0 ? 'row list-body' : 'row list-body gray'">
        <div class="col-md-2 list-row">{{ 2 === list.workType ? '校园招聘' : '校园宣讲会' }}</div>
        <div class="col-md-2 list-row">{{ list.recruitUrl }}</div>
        <div class="col-md-3 list-row">{{ list.title }}</div>
        <div class="col-md-2 list-row">{{ 1 === list.showType ? '已通过' : '待审核'}}</div>
        <div class="col-md-3 list-row"><button class="btn btn-primary" @click="verify(list.id, true)">通过</button>&nbsp;&nbsp;<button class="btn btn-primary" @click="verify(list.id, false)">驳回</button></div>
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
      pageCount: -1,
      naviLists: [
        {
          text: "校园招聘",
          to: "/",
          className: "nav-pills",
          id: "campus"
        },
        {
          text: "校园宣讲会",
          to: "/preach",
          className: "nav-pills",
          id: "preach"
        }
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
          className: "active nav-pills",
          id: "verify"
        }
      ]
    };
  },
  computed: {
    checkInputValue: function() {
      return "" !== this.username && "" !== this.password;
    }
  },
  mounted() {
    // GET_RECRUIT_LIST
    this.doQueryList();
  },
  methods: {
    verify: function(id, pass) {
      this.http
        .get(this._global.UPDATE_RECRUIT, {
          params: this.generateParams(id, pass)
        }).then(res => {
          console.log(`doDeploy callback ${JSON.stringify(res)}`);
          if (res.data.success) {
            alert('操作成功！');
          } else {
            alert('操作失败！' + res.data.errorMsg);
          }
          // this.clearInput();
        })
        .catch(function(error) {
          alert(error);
        });
    },
    generateParams: function(ids, pass) {
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
