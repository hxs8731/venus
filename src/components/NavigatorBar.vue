<template>
<div>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <img src="../assets/logo.png" />
      </div>
      <div>
        <ul class="nav navbar-nav">
          <router-link tag="li" :to="list.to" v-for="list in navInfos" :class="list.className"><a>{{list.text}}</a></router-link>
          </li>
        </ul>
      </div>
      <ul class="form-inline form-group nav navbar-nav search_nav">
        <li>
          <label class="sr-only" for="name">名称</label>
          <input type="text" class="form-control" id="name" placeholder="输入网申或企业名称">
          <button type="button" class="btn btn-primary">搜索</button>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span>注册</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>登录</a></li>
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
  }
}
</script>

<style>
@import 'http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css';
.search_nav {
  padding: 10px 20px;
}
</style>
