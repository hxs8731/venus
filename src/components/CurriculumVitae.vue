<template>
<div>
    <navigator-bar/>
    <div id="wrapper" class="toggled">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
              <li class="sidebar-brand">
                  <a href="#baseInfo">
                      简历信息
                  </a>
              </li>
              <li>
                  <a href="#jobIntention">求职意向</a>
              </li>
              <li>
                  <a href="#educationExp">教育经历</a>
              </li>
              <li>
                  <a href="#intershipExp">实习经历</a>
              </li>
              <li>
                  <a href="#projectExp">项目经验</a>
              </li>
              <li>
                  <a href="#honoraryAward">荣誉奖项</a>
              </li>
              <li>
                  <a href="#clubExp">社团经历</a>
              </li>
              <li>
                  <a href="#skills">技能特长</a>
              </li>
              <li>
                  <a href="#additionalInfo">附加信息</a>
              </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="page-main">
                <div class="panel panel-default" id="baseInfo">
                    <div class="panel-heading">
                        基本信息
                        <a href="#" v-if="!editMode.baseInfo" class=" card-info-edit pull-right padding left right edit"
                        @click="changeEditMode('baseInfo', !editMode.baseInfo)">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div class="card_info">
                            <div class="card-item headphoto" v-if="!editMode.baseInfo">
                                <div class="user-img">
                                    <img src="../assets/images/avtar.png" width="100" height="100" />
                                    <p class="text-success" data-toggle="modal" data-target="#headModal">上传头像</p>
                                </div>
                                <div class="user-info">
                                    <div class="user-info-left">
                                        <div class="user-name">
                                            姓名：
                                            <span>{{cardDataInfo.name}}</span>
                                        </div>
                                        <div class="user-gender">
                                            性别：
                                            <span class="person-content" v-if="cardDataInfo.sex=='1'">男</span>
                                            <span class="person-content" v-if="cardDataInfo.sex=='2'">女</span>
                                        </div>
                                        <div class="user-phone">
                                            电话：
                                            <span class="person-content">{{cardDataInfo.phone}}</span>
                                        </div>
                                        <div class="user-email text-ellipsis">
                                            邮箱：
                                            <span class="person-content text-ellipsis">{{cardDataInfo.email}}</span>
                                        </div>
                                    </div>
                                    <div class="user-info-right">
                                        <div class="user-college  text-ellipsis">
                                            毕业院校：
                                            <span class="person-content text-ellipsis">{{cardDataInfo.college_name}}</span>
                                        </div>
                                        <div class="user-major text-ellipsis">
                                            专业院系：
                                            <span class="person-content text-ellipsis">{{cardDataInfo.majorName}}</span>
                                        </div>
                                        <div class="user-education">
                                            最高学历：
                                            <span class="person-content">{{eduBgItems[cardDataInfo.degree].name}}</span>
                                        </div>
                                        <div class="user-graduate-year">
                                            毕业年份：
                                            <!-- <span class="person-content" v-bind="cardDataInfo.graduation_date ? (graduation_year + '年') : ''">{{}}</span> -->
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                            <!-- 编辑界面 -->
                            <form name="updateBaseForm" role="form" v-else novalidate>
                              <!-- <h5>基本信息的编辑页面</h5> -->
                                <div class="form-horizontal animated fadeIn">
                                    <div class="card-item-edit">
                                        <div class="user-img">
                                            <img src="../assets/images/avtar.png" width="100" height="100" />
                                        </div>
                                        <div class="user-info">
                                            <div class="user-info-left">
                                                <div class="user-name left-item">
                                                    <span class="item-label">姓名</span>
                                                    <div class="gender-wrap" style="display: inline-block;">
                                                      <input type="text" class="form-control" id="form_name" v-model="cardDataInfo.name" />
                                                    </div>
                                                </div>
                                                <div class="user-gender left-item">
                                                    <span class="item-label">性别</span>
                                                    <div class="gender-wrap" style="display: inline-block;">
                                                        <input readonly class="form-control dropdown-toggle" data-toggle="dropdown">
                                                    </div>
                                                </div>
                                                <div class="user-phone left-item">
                                                    <span class="item-label">电话</span>
                                                    <div class="gender-wrap" style="display: inline-block;">
                                                        <input type="text" class="form-control" v-bind="cardDataInfo.phone"
                                                           v-model="cardDataInfo.phone" name="phone">
                                                    </div>
                                                </div>
                                                <div class="user-email left-item">
                                                    <span class="item-label">邮箱</span>
                                                    <div class="gender-wrap" style="display: inline-block;">
                                                        <input type="email" class="form-control" v-model="cardDataInfo.email" name="email">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="user-info-right">
                                                <div class="user-college right-item">
                                                    <span class="item-label">毕业院校</span>
                                                    <div class="gender-wrap" style="display: inline-block;">
                                                        <input class="form-control typeahead"
                                                               id="college_search"
                                                               type="text"
                                                               autocomplete="off"
                                                               v-model="cardDataInfo.college_name">
                                                    </div>
                                                </div>
                                                <div class="user-major right-item">
                                                    <span class="item-label">专业院系</span>
                                                    <div class="major-wrap" style="display: inline-block; position: relative;">
                                                        <input readonly class="form-control dropdown-toggle" autocomplete="off" v-model="cardDataInfo.majorName">
                                                    </div>
                                                </div>
                                                <div class="user-education right-item">
                                                    <span class="item-label">最高学历</span>
                                                    <div class="education-wrap" style="display: inline-block;">
                                                        <input readonly class="form-control dropdown-toggle">
                                                    </div>
                                                </div>
                                                <div class="user-graduate-year right-item" style="display: inline-block;">
                                                    <span class="item-label">毕业年份</span>
                                                    <div class="gender-wrap" style="display: inline-block;">
                                                        <input readonly class="form-control dropdown-toggle">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="user-handle pull-right">
                                            <a href="javascript:void(0)" type="submit" class="btn btn-success save add_save"
                                               @click="updateCardInfo();">保存</a>
                                            <a href="javascript:void(0)" type="submit" class="btn btn-default cancel add_cancel"
                                               @click="changeEditMode('baseInfo', false)">取消</a>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default" id="jobIntention">
                    <div class="panel-heading">
                        求职意向
                        <!-- <a href="#" v-if="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a> -->
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <ul class="panel-content">
                            <li>
                                <span>意向城市<label> <a href="`"></a>*</label></span>
                                <button class="btn btn-default">杭州</button>
                                <button class="btn btn-default">上海</button>
                                <button class="btn btn-default">北京</button>
                                <a href="#" @click="toggleMore(showCity), blur()" border=0 data-toggle="modal" data-target="#cityModal"><label class="glyphicon glyphicon-plus"></label>更多城市</a>
                            </li>
                            <li>
                                <span>意向职位<label> <a href="`"></a>*</label></span>
                                <button class="btn btn-default">程序员</button>
                                <button class="btn btn-default">产品经理</button>
                                <button class="btn btn-default">Java开发</button>
                                <a href="#" @click="toggleMore(showCity), blur()" border=0 data-toggle="modal" data-target="#cityModal"><label class="glyphicon glyphicon-plus"></label>更多岗位</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="panel panel-default" id="educationExp">
                    <div class="panel-heading">
                        教育经历
                        <a href="#" v-if="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i> +教育经历
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in educationExps">
                            <p class="col-xs-2">{{info.edu_school}}</p>
                            <p class="col-xs-3">{{info.edu_profession}}</p>
                            <p class="col-xs-2">{{info.edu_degree}}</p>
                            <p class="col-xs-3">{{info.edu_times}}</p>
                            <p class="col-xs-2"><span>编辑</span>｜<span>删除</span></p>
                        </div> 
                    </div>
                </div>
                <div class="panel panel-default" id="intershipExp">
                    <div class="panel-heading">
                        实习经历
                        <a href="#" v-if="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i>+实习经历
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in intershipExps">
                            <div>
                                <p class="col-xs-4">{{info.intership_company}}</p>
                                <p class="col-xs-4">{{info.intership_postion}}</p>
                                <p class="col-xs-4">{{info.intership_times}}</p>
                            </div>
                            <div>
                                <p class="col-xs-2">工作内容</p>
                                <p class="col-xs-10">{{info.intership_content}}</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="panel panel-default" id="projectExp">
                    <div class="panel-heading">
                        项目经历
                        <a href="#" v-if="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i>+项目经历
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in projectExps">
                            <div>
                                <p class="col-xs-4">{{info.project_name}}</p>
                                <p class="col-xs-4">{{info.project_position}}</p>
                                <p class="col-xs-4">{{info.project_times}}</p>
                            </div>  
                            <div>
                                <p class="col-xs-2">项目内容</p>
                                <p class="col-xs-10">{{info.project_content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default" id="honoraryAward">
                    <div class="panel-heading">
                        荣誉奖项
                        <a href="#" v-if="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i>+荣誉奖项
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in honoraryAwards">
                            <p class="col-xs-4">{{info.award_name}}</p>
                            <p class="col-xs-4">{{info.award_degree}}</p>
                            <p class="col-xs-4">{{info.award_time}}</p>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default" id="clubExp">
                    <div class="panel-heading">
                        社团经历
                        <a href="#" v-if="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i>+社团经历
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">

                        <div v-for="(info, index) in clubExps">
                            <p class="col-xs-4">{{info.club_name}}</p>
                            <p class="col-xs-4">{{info.club_position}}</p>
                            <p class="col-xs-4">{{info.club_times}}</p>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default" id="skills">
                    <div class="panel-heading">
                        技能特长
                        <a href="#" v-if="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i>+技能特长
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <p>
                            <label v-for="(info, index) in skills" class="label label-default">{{info}}</label>
                        </p>
                    </div>
                </div>
                <div class="panel panel-default" id="certifications">
                    <div class="panel-heading">
                        获得证书
                        <a href="#" v-if="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i>+获得证书
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <p>
                            <label v-for="(info, index) in certificates" class="label label-default">{{info}}s</label>
                        </p>
                    </div>
                </div>
                <div class="panel panel-default" id="additionalInfo">
                    <div class="panel-heading">
                        附加信息
                        <a href="#" v-if="!isEdit" class=" card-info-edit pull-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i>+附加信息
                        </a>
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        {{additionalInfo}}
                    </div>
                </div>
                <button class="btn btn-primary">保存</button><button class="btn btn-primary">预览</button><button class="btn btn-primary">简历打分</button><button class="btn btn-primary">导出</button>
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
      password: "",
      editMode: {
        baseInfo: false,
        jobIntention: false,
        educationExp: false,
        intershipExp: false,
        projectExp: false,
        honoraryAward: false,
        clubExp: false,
        skills: false,
        additionalInfo: false
      },
      eduBgItems: [
        {name: "高中"},
        {name: "大学"}
      ],
      cardDataInfo: {
        avatarUrl: "",
        name: "test",
        sex: 1,
        sexValues: [
            {name: "男"},
            {name: "女"}
        ],
        allCollege: "",
        phone: "111111",
        email: "11111",
        college_name: "1111",
        majorName: "11111",
        degree: 0,
        graduation_date: "2017-06-28"
      },
      educationExps: [
          {edu_school: "浙江大学", edu_profession: "计算机工程与技术", edu_degree: "研究生", edu_times: "2010-9至2013-7"},
          {edu_school: "浙江工业大学", edu_profession: "计算机工程与技术", edu_degree: "本科", edu_times: "2010-9至2013-7"}
      ],
      intershipExps: [
          {intership_company: "阿里巴巴", intership_postion: "测试工程师", intership_times:"2010-9至2013-7", intership_content: "主要是负责测试工作！"},
          {intership_company: "湖畔大学", intership_postion: "开发工程师", intership_times:"2010-9至2013-7", intership_content: "主要是负责开发工作！"}
      ],
      projectExps: [
          {project_name: "项目名称1", project_position: "测试工程师", project_times:"2010-9至2013-7", project_content: "项目内容1"},
          {project_name: "项目名称2", project_position: "开发工程师", project_times:"2010-9至2013-7", project_content: "项目内容2"}
      ],
      honoraryAwards: [
          {award_name: "奖项名称", award_degree: "奖项级别", award_time: "2010-9"},
          {award_name: "奖项名称2", award_degree: "奖项级别2", award_time: "2010-9"}
      ],
      clubExps: [
          {club_name: "社团名称", club_position: "担任位置", club_times: "2010-9至2013-7"},
          {club_name: "社团名称2", club_position: "担任位置2", club_times: "2010-9至2013-7"}
      ],
      skills: [
          "专业技能1", "专业技能2", "专业技能3"
      ],
      certificates: [
          "证书1", "证书2", "证书3"
      ],
      additionals: "这里是附加信息"
    };
  },
  computed: {
    checkInputValue: function() {
      return "" !== this.username && "" !== this.password;
    }
  },
  methods: {
    doSubmit: function() {

    },

    changeEditMode: function(item, value) {
      console.log(`changeEditMode: ${item}, ${value}`);
      this.editMode[item] = value;
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
.page-main .panel-body ul.panel-content li{
    line-height: 40px;
}
.page-main .panel-body .card-item, .page-main .panel-body .card-item-edit {
    /* border-bottom: 1px dashed #eeeeee; */
    padding: 10px 20px 20px;
    position: relative;
}

.page-main .panel-body .card-item-edit input, .page-main .panel-body .card-item-edit .user-info .gender {
    border-radius: 0;
    height: 38px;
    line-height: 38px;
    width: 198px !important;
    padding-left: 12px;
    background-color: #F8F9FA;
    display: inline-block;
}

.page-main .panel-body .card-item-edit .user-img {
    height: 136px;
    width: 136px;
    text-align: center;
    position: relative;
}

.page-main .panel-body .card-item-edit .user-img img {
    width: 100%;
    height: 100%;
}

.page-main .panel-body .card-item-edit .user-info {
    float: left;
    width: 100%;
    margin-top: -136px;
    padding-left: 176px;
}

.page-main .panel-body .card-item-edit .user-info .user-info-left, .page-main .panel-body .card-item-edit .user-info .user-info-right {
    float: left;
}

.page-main .panel-body .card-item-edit .user-info .user-info-left {
    margin-right: 20px;
}

.page-main .panel-body .card-item-edit .user-info .left-item .item-label, .page-main .panel-body .card-item-edit .user-info .right-item .item-label {
    width: 60px;
    text-align: center;
    display: inline-block;
}

.page-main .panel-body .card-item-edit .user-info .user-info-left .left-item, .page-main .panel-body .card-item-edit .user-info .user-info-right .right-item {
    font-size: 14px;
    height: 38px;
    margin-bottom: 16px;
    line-height: 38px;
    margin-right: 12px;
}

.page-main .panel-body .card-item-edit .user-info .user-gender .dropdown-menu {
    height: auto !important;
    width: 198px !important;
    right: auto;
}

.page-main .panel-body .card-item-edit .user-info .user-education .education-menu, .card-item-edit .user-info .user-graduate-year .dropdown-menu, .card-item-edit .user-info .user-gender .dropdown-menu {
    top: auto !important;
    left: auto !important;
}

.page-main .panel-body .card-item-edit .user-handle {
    margin-top: 2px;
    margin-right: 42px;
}

.page-main .panel-body .card-item-edit .user-handle a {
    border-radius: 2px;
    height: 32px;
    width: 68px;
    line-height: 32px;
    margin-left: 12px;
    padding: 0;
}

.page-main .panel-body .card-item-edit .user-handle .cancel {
    background-color: #eeeeee;
}

.page-main .panel-body .card-item-edit .user-graduate-year .date-drop {
    width: 280px;
    font-size: 12px;
    overflow: hidden;
    padding: 0;
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
