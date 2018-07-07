<template>
<div>
    <navigator-bar/>
<div id="wrapper" class="toggled">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        简历信息
                    </a>
                </li>
                <li>
                    <a href="#">求职意向</a>
                </li>
                <li>
                    <a href="#">教育经历</a>
                </li>
                <li>
                    <a href="#">实习经历</a>
                </li>
                <li>
                    <a href="#">项目经验</a>
                </li>
                <li>
                    <a href="#">荣誉奖项</a>
                </li>
                <li>
                    <a href="#">社团经历</a>
                </li>
                <li>
                    <a href="#">技能特长</a>
                </li>
                <li>
                    <a href="#">附加信息</a>
                </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="page-main">
                <div class="panel panel-default" id="card_info" ng-controller="cardInfoCtrl" ng-cloak>
                    <div class="panel-heading">
                        基本信息
                        <a href="#" ng-show="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        ng-click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div class="card_info">
                            <div class="card-item headphoto">
                                <div class="user-img">
                                    <!-- <img ng-src="{{cardInfo.avatarUrl}}"> -->
                                    <p class="text-success" data-toggle="modal" data-target="#headModal">上传头像</p>
                                </div>
                                <div class="user-info">
                                    <div class="user-info-left">
                                        <div class="user-name">
                                            姓名：
                                            <span ng-bind="cardInfo.name"></span>
                                        </div>
                                        <div class="user-gender">
                                            性别：
                                            <span class="person-content" ng-show="cardInfo.sex=='1'">男</span>
                                            <span class="person-content" ng-show="cardInfo.sex=='2'">女</span>
                                        </div>
                                        <div class="user-phone">
                                            电话：
                                            <span class="person-content" ng-bind="cardInfo.phone"></span>
                                        </div>
                                        <div class="user-email text-ellipsis">
                                            邮箱：
                                            <span class="person-content text-ellipsis" ng-bind="cardInfo.email"></span>
                                        </div>
                                    </div>
                                    <div class="user-info-right">
                                        <div class="user-college  text-ellipsis">
                                            毕业院校：
                                            <span class="person-content text-ellipsis" ng-bind="cardInfo.college_name"></span>
                                        </div>
                                        <div class="user-major text-ellipsis">
                                            专业院系：
                                            <span class="person-content text-ellipsis" ng-bind="cardInfo.majorName"></span>
                                        </div>
                                        <div class="user-education">
                                            最高学历：
                                            <span class="person-content" ng-bind="eduBgItems[cardInfo.degree].name"></span>
                                        </div>
                                        <div class="user-graduate-year">
                                            毕业年份：
                                            <span class="person-content" ng-bind="cardInfo.graduation_date ? (graduation_year + '年') : ''"></span>
                                        </div>
                                    </div>
                                    <!-- <div class="clear"></div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default" id="card_info" ng-controller="cardInfoCtrl" ng-cloak>
                    <div class="panel-heading">
                        求职意向
                        <a href="#" ng-show="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        ng-click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                    </div>
                </div>
                <div class="panel panel-default" id="card_info" ng-controller="cardInfoCtrl" ng-cloak>
                    <div class="panel-heading">
                        教育经历
                        <a href="#" ng-show="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        ng-click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                    </div>
                </div>
                <div class="panel panel-default" id="card_info" ng-controller="cardInfoCtrl" ng-cloak>
                    <div class="panel-heading">
                        实习经历
                        <a href="#" ng-show="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        ng-click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                    </div>
                </div>
                <div class="panel panel-default" id="card_info" ng-controller="cardInfoCtrl" ng-cloak>
                    <div class="panel-heading">
                        项目经历
                        <a href="#" ng-show="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        ng-click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                    </div>
                </div>
                <div class="panel panel-default" id="card_info" ng-controller="cardInfoCtrl" ng-cloak>
                    <div class="panel-heading">
                        荣誉奖项
                        <a href="#" ng-show="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        ng-click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                    </div>
                </div>
                <div class="panel panel-default" id="card_info" ng-controller="cardInfoCtrl" ng-cloak>
                    <div class="panel-heading">
                        社团经历
                        <a href="#" ng-show="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        ng-click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                    </div>
                </div>
                <div class="panel panel-default" id="card_info" ng-controller="cardInfoCtrl" ng-cloak>
                    <div class="panel-heading">
                        技能特长
                        <a href="#" ng-show="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        ng-click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                    </div>
                </div>
                <div class="panel panel-default" id="card_info" ng-controller="cardInfoCtrl" ng-cloak>
                    <div class="panel-heading">
                        获得证书
                        <a href="#" ng-show="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        ng-click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                    </div>
                </div>
                <button >保存</button><button >预览</button><button >简历打分</button><button >导出</button>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->
</div>
</template>

<script>
import "../assets/bootstrap.min.js";
import NavigatorBar from "@/components/NavigatorBar";
export default {
  name: "CurriculumVitae",
  components: {
    NavigatorBar
  },
  data() {
    return {
      isdisabled: true,
      username: "",
      password: ""
    };
  },
  computed: {
    checkInputValue: function() {
      return "" !== this.username && "" !== this.password;
    }
  },
  methods: {
    doSubmit: function() {
      if (this.checkInputValue) {
        let params = new URLSearchParams();
        params.append('userName', this.username);
        params.append('password', this.password);
        this.http.post(this._global.USER_LOGIN_ACTION, params).then((res) => {
          console.log(`doSubmit callback ${JSON.stringify(res)}`);
          if (res.data.success) {
            let type = res.data.data.userType;
            this.cookieStore.setCookie('username', this.username, 1);
            this.cookieStore.setCookie('userType', type, 1);
            if (3 === type) {
              this.$router.push('/deploy');
            } else if (2 === type) {
              this.$router.push('/verify');
            } else {
              this.$router.push('/');
            }
          } else {
            alert(res.data.errMsg);
          }
          // 跳转到主页面；
          // userType: 3 发布权限  2 系统管理员  1 普通用户
        }).catch(function (error) {
        　　alert(error);
        });
      } else {
        console.log("input value is empty.");
      }
    }
  }
};
</script>

<style>
/*!
 * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)
 */

@media (max-width: 1120px) {
    body {
        overflow-x: scroll;
        min-width: 1120px;
    }
}

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  /* position: fixed; */
  position: absolute;
  left: 250px;
  width: 0;
  /* width: 250px;  */
  height: 520px;
  margin-left: -250px;
  overflow-y: auto;
  background: #c9e2ec;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}


/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #999999;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav li a:active, .sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav>.sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav>.sidebar-brand a {
  color: #999999;
}

.sidebar-nav>.sidebar-brand a:hover {
  color: #fff;
  background: none;
}

@media(min-width:768px) {
  #wrapper {
    padding-left: 0;
  }
  #wrapper.toggled {
    padding-left: 250px;
  }
  #sidebar-wrapper {
    /* width: 0; */
    width: 250px;
  }
  #wrapper.toggled #sidebar-wrapper {
    width: 250px;
  }
  #page-content-wrapper {
    padding: 20px;
    position: relative;
  }
  #wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }
}

/* main card */

.page-main {
    min-height: 500px;
    width: 900px;
    position: relative;
    padding: 0 20px;
}

.page-main .panel-body .card-item .user-info {
    position: absolute;
    width: 100%;
    top: 0;
    padding-left: 176px;
    height: 136px;
}

.page-main .panel-body .card-item, .page-main .panel-body .card-item-edit {
    /* border-bottom: 1px dashed #eeeeee; */
    padding: 10px 20px 20px;
    position: relative;
}

.page-main .panel-body .card-item .user-img {
    height: 136px;
    width: 136px;
    /* background-color: red; */
    text-align: center;
    position: relative;
    z-index: 100;
}

.page-main .panel-body .card-item .user-info .user-info-left, .page-main .panel-body .card-item .user-info .user-info-right {
    float: left;
    height: 100%;
    margin-top: -12px;
    width: 220px;
    /* display: flex; */
    /* -webkit-flex-direction: column; */
    /* -moz-flex-direction: column; */
    /* -ms-flex-direction: column; */
    /* -o-flex-direction: column; */
    /* flex-direction: column; */
    /* align-content: space-between; */
    /* -webkit-align-content: space-between; */
    /* -moz-align-content: space-between; */
    /* -ms-align-content: space-between; */
    /* -o-align-content: space-between; */
    /* -webkit-justify-content: space-between; */
    /* -moz-justify-content: space-between; */
    /* -ms-justify-content: space-between; */
    /* -o-justify-content: space-between; */
    /* justify-content: space-between; */
}

.panel-heading {
    padding: 0px 0px 0px 20px;
    height: 50px;
    line-height: 50px;
    border: none;
    background: #fcfcfc;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#f9f9f9));
    background: -moz-linear-gradient(top, #ffffff, #f9f9f9);
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
}

.page-main .panel-body .card-item .user-info .user-info-left div, .page-main .panel-body .card-item .user-info .user-info-right div {
    font-size: 14px;
    line-height: 40px;
}

.clear {
    width: 100%;
    height: 0;
    clear: both;
}
</style>
