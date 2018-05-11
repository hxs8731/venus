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
          <li class="nav-pills" @click="callLink(_global.EDUCATION_URL)"><a href="#">求职学院</a></li>
        </ul>
      </div>
      <ul class="form-inline form-group nav navbar-nav search_nav">
        <li>
          <label class="sr-only" for="name">名称</label>
          <input type="text" class="form-control" v-model="companyName" ref="input1" placeholder="输入网申或企业名称">
          <button type="button" class="btn btn-primary" @click="doSearchCompany">搜索</button>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a @click="callLink(_global.REGISTER_URL)" href="#"><label class="glyphicon glyphicon-user"></label><span class="left-tip">注册</span></a></li>
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
      activeId: "",
      companyName: ""
    }
  },
  watch:{
    companyName: function(val,oldval){
    //  console.log(this.$refs.input1.value);
     this.$emit("search-nav", this.$refs.input1.value)
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
/* navbar */
.navbar-default {
background-color: #F8F8F8;
border: none;
}
/* title */
.navbar-default .navbar-brand {
color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
color: #5E5E5E;
}
/* link */
.navbar-default .navbar-nav > li > a {
color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
color: #333;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
color: #555;
background-color: #E7E7E7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
color: #555;
background-color: #D5D5D5;
}
/* caret */
.navbar-default .navbar-nav > .dropdown > a .caret {
border-top-color: #777;
border-bottom-color: #777;
}
.navbar-default .navbar-nav > .dropdown > a:hover .caret,
.navbar-default .navbar-nav > .dropdown > a:focus .caret {
border-top-color: #333;
border-bottom-color: #333;
}
.navbar-default .navbar-nav > .open > a .caret,
.navbar-default .navbar-nav > .open > a:hover .caret,
.navbar-default .navbar-nav > .open > a:focus .caret {
border-top-color: #555;
border-bottom-color: #555;
}
/* mobile version */
.navbar-default .navbar-toggle {
border-color: #DDD;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
background-color: #DDD;
}
.navbar-default .navbar-toggle .icon-bar {
background-color: #CCC;
}
@media (max-width: 767px) {
.navbar-default .navbar-nav .open .dropdown-menu > li > a {
color: #777;
}
.navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
.navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
color: #333;
}
}
ul.nav {
  margin-top: 22px
}
ul.nav li a{
  font-size: 16px;
}
ul.nav li.active a{
  color: #FEFEFE;
}
ul.nav li.active a:hover{
  color: #FEFEFE;
}
ul.nav li.active {
    background: #337ab7;
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
