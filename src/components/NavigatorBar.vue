<template>
<div class="mx-auto">
  <nav class="navbar navbar-expand-lg navbar-primary nav-bgColor">
    <a href="#"><img src="../assets/logo.png" /></a>
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li v-for="info in naviLists" :key="info.id" @click="clickNavlink(info)" :class='activeId === info.position ? "active nav-item" : "nav-item"' ><a class="nav-link" href="#">{{info.title}}</a></li>
        <li v-if="userType >= 2 && userName" v-for="info in loginNavLists" :key="info.id" @click="clickNavlink(info)" :class='activeId === info.position ? "active nav-item" : "nav-item"' ><a class="nav-link" href="#">{{info.title}}</a></li>
      </ul>
      <form class="form-inline my-2 my-lg-0" style="margin-right: 30px">
        <label class="sr-only" for="name">名称</label>
        <input class="form-control mr-sm-2" type="search" v-model="companyName" ref="input1" placeholder="输入网申或企业名称">
        <button type="button" class="btn btn-primary" @click="doSearchCompany">搜索</button>
      </form>
      <ul class="nav nav-item my-2 my-lg-0" v-if="userName">
        <li v-show="'development' === prodMode"><a @click="inputCV" href="#"><font-awesome-icon icon="file-alt" /><span class="left-tip">录入简历</span></a></li>
        <li><a @click="loginOut" href="#"><font-awesome-icon icon="sign-out-alt" /><span class="left-tip">注销</span></a></li>
        <li><a href="#"><font-awesome-icon icon="stream" /><span class="left-tip">当前用户： {{userName}}</span></a></li>
      </ul>
      <ul class="nav nav-item my-2 my-lg-0" v-else>
        <li><a @click="callLink(_global.REGISTER_URL)" href="#"><font-awesome-icon icon="unlock-alt" /><span class="left-tip">注册</span></a></li>
        <li><router-link tag="a" to="/Loging" key="Loging"><font-awesome-icon icon="sign-in-alt" /><span class="left-tip">登录</span></router-link></li>
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
      userType: 1,
      prodMode: null,
      naviLists: [{
          title: "校园招聘",
          to: "/",
          id: "campus",
          position: 0
        },
        {
          title: "校园宣讲会",
          to: "/preach",
          id: "preach",
          position: 1
        },
        {
          title: "求职学院",
          to: this._global.EDUCATION_URL,
          id: "jobhunting",
          position: 2
        }
      ],
      loginNavLists: [
        {
          title: "发布信息",
          to: "/deploy",
          id: "deploy",
          position: 3
        },
        {
          title: "审核信息",
          to: "/verify",
          id: "verify",
          position: 4
        }
      ]
    };
  },
  mounted() {
    let user = this.cookieStore.getCookie("username");
    let type = this.cookieStore.getCookie("userType");
    console.log("checkUserExist type" + user + ", user type = " + type);
    console.log(`isProdMode11 = ${process.env.NODE_ENV}`);
    this.prodMode = process.env.NODE_ENV;
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
    inputCV: function() {
      this.$router.push('/curriculumVitae');
    },
    loginOut: function(){
      this.cookieStore.clearCookie("username");
      this.userName = null;
      this.$router.push('/');
    },
    clickNavlink: function(info) {
      if (info.to.startsWith('/')) {
        this.$router.push(info.to);
      } else {
        this.callLink(info.to);
      }
    }
  }
};
</script>

<style>
.nav-bgColor {
  background-color: #0099cc;
}
/* navbar */
.navbar-default {
  background-color: #0099cc;
  border: none;
}
.nav li a{
  color: #FFFFFF;
  list-style: none;
  margin-left: 10px;
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
.navbar-default .nav-item > li > a {
  color: #fff;
}
.navbar-default .nav-item > li > a:hover,
.navbar-default .nav-item > li > a:focus {
  color: #333;
}
.navbar-default .nav-item > .active > a,
.navbar-default .nav-item > .active > a:hover,
.navbar-default .nav-item > .active > a:focus {
  color: #fff;
  background-color: #0fa9dd; /*navigator focus bg color*/
}
.navbar-default .nav-item > .open > a,
.navbar-default .nav-item > .open > a:hover,
.navbar-default .nav-item > .open > a:focus {
  color: #555;
  background-color: #d5d5d5;
}
/* caret */
.navbar-default .nav-item > .dropdown > a .caret {
  border-top-color: #777;
  border-bottom-color: #777;
}
.navbar-default .nav-item > .dropdown > a:hover .caret,
.navbar-default .nav-item > .dropdown > a:focus .caret {
  border-top-color: #333;
  border-bottom-color: #333;
}
.navbar-default .nav-item > .open > a .caret,
.navbar-default .nav-item > .open > a:hover .caret,
.navbar-default .nav-item > .open > a:focus .caret {
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
  .navbar-default .nav-item .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .nav-item .open .dropdown-menu > li > a:hover,
  .navbar-default .nav-item .open .dropdown-menu > li > a:focus {
    color: #333;
  }
}
ul.navbar-nav {
  margin-top: 22px;
}
ul.navbar-nav li a {
  font-size: 16px;
}

ul.navbar-right li a {
  font-size: 12px;
}

ul.navbar-nav li.nav-item {
  margin: 0 15px;
}
ul.navbar-nav li.nav-item a {
  color: #fefefe;
}
ul.navbar-nav li.active a:hover {
  color: #fefefe;
}
ul.navbar-nav li.active {
  background: #0fa9dd;
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
