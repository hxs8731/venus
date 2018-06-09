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
          <li class="nav-pills" @click="callLink(_global.EDUCATION_URL)"><a href="#">求职学院</a></li>
          <router-link tag="li" :to="list.to" :key="list.id" v-if="userType >= 2 && userName" v-for="list in loginNavInfos" :class="list.className"><a>{{list.text}}</a></router-link>
        </ul>
      </div>
      <ul class="form-inline form-group nav navbar-nav search_nav">
        <li>
          <label class="sr-only" for="name">名称</label>
          <input type="text" class="form-control" v-model="companyName" ref="input1" placeholder="输入网申或企业名称">
          <button type="button" class="btn btn-primary" @click="doSearchCompany">搜索</button>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right" v-if="userName">
        <li><a @click="loginOut" href="#"><label class="glyphicon glyphicon-log-out"></label><span class="left-tip">注销</span></a></li>
        <li><a href="#"><span class="glyphicon glyphicon-user"></span><span class="left-tip">当前用户： {{userName}}</span></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right" v-else>
        <li><a @click="callLink(_global.REGISTER_URL)" href="#"><label class="glyphicon glyphicon-user"></label><span class="left-tip">注册</span></a></li>
        <li><router-link tag="a" to="/Loging" key="Loging"><span class="glyphicon glyphicon-log-in"></span><span class="left-tip">登录</span></router-link></li>
      </ul>
    </div>
  </nav>
</div>
</template>
<script>
export default {
  name: "NavigatorBar",
  props: ["navInfos", "loginNavInfos", "activeId"],
  data() {
    return {
      companyName: "",
      userName: null,
      userType: 1
    };
  },
  mounted() {
    let user = this.cookieStore.getCookie("username");
    let type = this.cookieStore.getCookie("userType");
    console.log("checkUserExist type" + user + ", user type = " + type);
    this.userName = user;
    this.userType = type;
  },
  watch: {
    companyName: function(val, oldval) {
      //  console.log(this.$refs.input1.value);
      this.$emit("search-nav", this.$refs.input1.value);
    }
  },
  methods: {
    doSearchCompany: function() {
      this.$emit("search-nav", this.$refs.input1.value);
    },
    loginOut: function(){
      this.cookieStore.clearCookie("username");
      this.userName = null;
      this.$router.push('/');
    }
  }
};
</script>

<style>
/* navbar */
.navbar-default {
  background-color: #0099cc;
  border: none;
}
/* title */
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
}
/* link */
.navbar-default .navbar-nav > li > a {
  color: #fff;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #0fa9dd; /*navigator focus bg color*/
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #d5d5d5;
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
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #ccc;
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
  margin-top: 22px;
}
ul.nav li a {
  font-size: 16px;
}
ul.nav li.nav-pills {
  margin: 0 15px;
}
ul.nav li.active a {
  color: #fefefe;
}
ul.nav li.active a:hover {
  color: #fefefe;
}
ul.nav li.active {
  background: transparent;
}
.left-tip {
  padding-left: 5px;
}
.navbar {
  margin-bottom: 0px;
  border-radius: 0px; /*modify radius background*/
}
.search_nav {
  padding: 10px 20px;
}
</style>
