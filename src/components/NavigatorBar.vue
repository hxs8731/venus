<template>
<div class="center-block">
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <img src="../assets/logo.png" />
      </div>
      <div>
        <ul class="nav navbar-nav">
          <router-link tag="li" :to="list.to" :key="list.id" v-for="list in navInfos" :class="list.className"><a>{{list.text}}</a></router-link>
          </li>
        </ul>
      </div>
      <ul class="form-inline form-group nav navbar-nav search_nav">
        <li>
          <label class="sr-only" for="name">名称</label>
          <input type="text" class="form-control" ref="input1" placeholder="输入网申或企业名称">
          <button type="button" class="btn btn-primary" @click="doSearchCompany">搜索</button>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><label class="glyphicon glyphicon-user"></label><span class="left-tip">注册</span></a></li>
        <!--<li><a href="/Loging"><span class="glyphicon glyphicon-log-in"></span>登录</a></li>-->
        <li><router-link tag="a" to="/Loging" key="Loging"><span class="glyphicon glyphicon-log-in"></span><span class="left-tip">登录</span></router-link></li>
      </ul>
    </div>
  </nav>
</div>
</template>
<script>
export default {
  name: 'NavigatorBar',
  props: ['navInfos'],
  data() {
    return {
      activeId: ""
    }
  },
  methods: {
      doSearchCompany: function() {
          this.$emit("search-nav", this.$refs.input1.value);
      }
  }
}
</script>

<style>
ul.nav {
  margin-top: 22px
}
.left-tip {
    padding-left:5px;
}
.navbar {
    margin-bottom: 0px;
}
.search_nav {
  padding: 10px 20px;
}
</style>
