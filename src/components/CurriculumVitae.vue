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
                  <a href="#internshipExp">实习经历</a>
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
                        <a href="####" v-if="!editMode.baseInfo" class=" card-info-edit pull-right padding left right edit"
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
                                            <span class="person-content" v-if="cardDataInfo.sex=='0'">男</span>
                                            <span class="person-content" v-if="cardDataInfo.sex=='1'">女</span>
                                        </div>
                                        <div class="user-phone">
                                            电话：
                                            <span class="person-content">{{cardDataInfo.phone}}</span>
                                        </div>
                                    </div>
                                    <div class="user-info-right">
                                        <!-- <div class="user-college  text-ellipsis">
                                            毕业院校：
                                            <span class="person-content text-ellipsis">{{cardDataInfo.college_name}}</span>
                                        </div>
                                        <div class="user-major text-ellipsis">
                                            专业院系：
                                            <span class="person-content text-ellipsis">{{cardDataInfo.majorName}}</span>
                                        </div> -->
                                        <div class="user-education">
                                            最高学历：
                                            <span class="person-content">{{eduBgItems[cardDataInfo.degree].name}}</span>
                                        </div>
                                        <div class="user-graduate-year">
                                            出生年月：
                                            <!-- <span class="person-content" v-bind="cardDataInfo.graduation_date ? (graduation_year + '年') : ''">{{}}</span> -->
                                        </div>
                                        <div class="user-email text-ellipsis">
                                            邮箱：
                                            <span class="person-content text-ellipsis">{{cardDataInfo.email}}</span>
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
                                                        <input readonly class="form-control dropdown-toggle" data-toggle="dropdown"
                                                              v-model="sexValues[cardDataInfo.sex].name">
                                                        <span class="caret"></span>
                                                        <div class="dropdown-menu" role="menu">
                                                            <ul>
                                                                <li v-for="(sexVal, index) in sexValues"
                                                                    @click="cardDataInfo.sex=index"> {{sexVal.name}}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="user-phone left-item">
                                                    <span class="item-label">电话</span>
                                                    <div class="gender-wrap" style="display: inline-block;">
                                                        <input type="text" class="form-control" v-bind="cardDataInfo.phone"
                                                           v-model="cardDataInfo.phone" name="phone">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="user-info-right">
                                                <div class="user-education right-item">
                                                    <span class="item-label">最高学历</span>
                                                    <div class="education-wrap" style="display: inline-block;">
                                                        <input readonly class="form-control dropdown-toggle" data-toggle="dropdown"
                                                              v-model="eduBgItems[cardDataInfo.degree].name" myrequired>
                                                        <span class="caret"></span>
                                                        <div class="dropdown-menu education-menu" role="menu">
                                                            <ul>
                                                                <li v-for="eduBgItem in eduBgItems" @click="cardDataInfo.degree=eduBgItem.id">{{eduBgItem.name}}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="user-graduate-year right-item form-inline">
                                                    <span class="item-label">出生年月</span>
                                                    <datepicker class="form-control" id="startDate" type="text" placeholder="选择出生年月" language="zh" format="yyyy-MM-dd"></datepicker>
                                                </div>
                                                <div class="user-email right-item">
                                                    <span class="item-label">邮箱</span>
                                                    <div class="gender-wrap" style="display: inline-block;">
                                                        <input type="email" class="form-control" v-model="cardDataInfo.email" name="email">
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
                        <!-- <a href="#" class=" card-info-edit pull-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a> -->
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <ul class="panel-content">
                            <li>
                                <span>意向城市<label> <a href="`"></a>*</label></span>
                                <button v-for="(info, index) in intendedCitys" class="btn btn-default">{{info}}</button>
                                <a href="#" border=0 data-toggle="modal" data-target="#cityModal"><label class="glyphicon glyphicon-plus"></label>选择城市</a>
                                <model-view modelTitle="自定义城市" :singleSelect="false" :modelData="letters" modelId="cityModal" />
                            </li>
                            <li>
                                <span>意向职位<label> <a href="`"></a>*</label></span>
                                <button class="btn btn-default">程序员</button>
                                <button class="btn btn-default">产品经理</button>
                                <button class="btn btn-default">Java开发</button>
                                <a href="#" border=0 data-toggle="modal" data-target="#cityModal"><label class="glyphicon glyphicon-plus"></label>更多岗位</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="panel panel-default" id="educationExp">
                    <div class="panel-heading">
                        教育经历
                        <a href="#" class=" card-info-edit pull-right padding left right edit"
                        data-toggle="modal" data-target="#eduModal" @click="updateFormInfo(educationFormInfo)">
                            <i class="fa fa-pencil"></i> +教育经历
                        </a>
                        <form-model-view :singleSelect="false" :formInfos="educationFormInfo" modelId="eduModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in educationExps">
                            <p class="col-xs-2">{{info.edu_school}}</p>
                            <p class="col-xs-3">{{info.edu_profession}}</p>
                            <p class="col-xs-2">{{info.edu_degree}}</p>
                            <p class="col-xs-3">{{info.edu_startTime}} 至 {{info.edu_endTime}}</p>
                            <p class="col-xs-2"><span data-toggle="modal" data-target="#eduModal" @click="updateFormInfo(educationFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(educationExps, info, index)"><a href="####">删除</a></span></p>
                        </div>
                        <p v-show="educationExps.length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="panel panel-default" id="internshipExp">
                    <div class="panel-heading">
                        实习经历
                        <a href="#" class=" card-info-edit pull-right padding left right edit"
                        data-toggle="modal" data-target="#internshipModal">
                            <i class="fa fa-pencil"></i>+实习经历
                        </a>
                        <form-model-view :singleSelect="false" :formInfos="internshipFormInfo" modelId="internshipModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in internshipExps">
                            <div>
                                <p class="col-xs-4">{{info.internship_company}}</p>
                                <p class="col-xs-2">{{info.internship_postion}}</p>
                                <p class="col-xs-4">{{info.internship_startTime}} 至 {{info.internship_endTime}}</p>
                                <p class="col-xs-2"><span data-toggle="modal" data-target="#internshipModal" @click="updateFormInfo(internshipFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(internshipExps, info, index)"><a href="####">删除</a></span></p>
                            </div>
                            <div>
                                <p class="col-xs-2">工作内容:</p>
                                <p class="col-xs-10">{{info.internship_content}}</p>
                            </div>
                        </div> 
                        <p v-show="internshipExps.length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="panel panel-default" id="projectExp">
                    <div class="panel-heading">
                        项目经历
                        <a href="#" class=" card-info-edit pull-right padding left right edit"
                        data-toggle="modal" data-target="#projectModal">
                            <i class="fa fa-pencil"></i>+项目经历
                        </a>
                        <form-model-view :singleSelect="false" :formInfos="projectFormInfo" modelId="projectModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in projectExps">
                            <div>
                                <p class="col-xs-4">{{info.project_name}}</p>
                                <p class="col-xs-2">{{info.project_position}}</p>
                                <p class="col-xs-4">{{info.project_startTime}} 至 {{info.project_endTime}}</p>
                                <p class="col-xs-2"><span data-toggle="modal" data-target="#projectModal" @click="updateFormInfo(projectFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(projectExps, info, index)"><a href="####">删除</a></span></p>
                            </div>
                            <div>
                                <p class="col-xs-2">项目内容:</p>
                                <p class="col-xs-10">{{info.project_content}}</p>
                            </div>
                        </div>
                        <p v-show="projectExps.length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="panel panel-default" id="honoraryAward">
                    <div class="panel-heading">
                        荣誉奖项
                        <a href="#" class=" card-info-edit pull-right padding left right edit"
                        data-toggle="modal" data-target="#honoraryAwardsModal" @click="updateFormInfo(honoraryAwardsFormInfo)">
                            <i class="fa fa-pencil"></i>+荣誉奖项
                        </a>
                        <form-model-view :singleSelect="false" :formInfos="honoraryAwardsFormInfo" modelId="honoraryAwardsModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in honoraryAwards">
                            <p class="col-xs-4">{{info.award_name}}</p>
                            <p class="col-xs-2">{{info.award_degree}}</p>
                            <p class="col-xs-4">{{info.award_time}}</p>
                            <p class="col-xs-2"><span data-toggle="modal" data-target="#honoraryAwardsModal" @click="updateFormInfo(honoraryAwardsFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(honoraryAwards, info, index)"><a href="####">删除</a></span></p>
                        </div>
                        <p v-show="honoraryAwards.length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="panel panel-default" id="clubExp">
                    <div class="panel-heading">
                        社团经历
                        <a href="#" class=" card-info-edit pull-right padding left right edit"
                        data-toggle="modal" data-target="#clubModal">
                            <i class="fa fa-pencil"></i>+社团经历
                        </a>
                        <form-model-view :singleSelect="false" :formInfos="clubFormInfo" modelId="clubModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in clubExps">
                            <p class="col-xs-4">{{info.club_name}}</p>
                            <p class="col-xs-2">{{info.club_position}}</p>
                            <p class="col-xs-4">{{info.club_startTime}} 至 {{info.club_endTime}}</p>
                            <p class="col-xs-2"><span data-toggle="modal" data-target="#clubModal" @click="updateFormInfo(this.clubFormInfo, info, index)">编辑</span>｜<span @click="deleteListInfo(clubExps, info, index)"><a href="####">删除</a></span></p>
                        </div>
                        <p v-show="clubExps.length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="panel panel-default" id="skills">
                    <div class="panel-heading">
                        技能特长
                        <a href="#" class=" card-info-edit pull-right padding left right edit"
                        data-toggle="modal" data-target="#skillModal">
                            <i class="fa fa-pencil"></i>+技能特长
                        </a>
                        <form-model-view :singleSelect="false" :formInfos="skillFormInfo" modelId="skillModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in skillInfos">
                            <p class="col-xs-4">{{info.skill_name}}</p>
                            <p class="col-xs-5">{{info.skill_degree}}</p>
                            <p class="col-xs-3"><span data-toggle="modal" data-target="#skillModal" @click="updateFormInfo(this.skillFormInfo, info, index)">编辑</span>｜<span @click="deleteListInfo(skillInfos, info, index)"><a href="####">删除</a></span></p>
                        </div>
                        <p v-show="skillInfos.length <= 0">暂无内容</p>

                        <!-- <p>
                            <label v-for="(info, index) in skillInfos" class="label label-gap label-info">{{info.skill_name}}</label>
                        </p>
                        <p v-show="skillInfos.length <= 0">暂无内容</p> -->
                    </div>
                </div>
                <div class="panel panel-default" id="certifications">
                    <div class="panel-heading">
                        获得证书
                        <a href="#" class=" card-info-edit pull-right padding left right edit"
                        data-toggle="modal" data-target="#certificateModal">
                            <i class="fa fa-pencil"></i>+获得证书
                        </a>
                        <form-model-view :singleSelect="false" :formInfos="certificatesFormInfo" modelId="certificateModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <p>
                            <label v-for="(info, index) in certificates" class="label label-gap label-info">{{info.certificate_name}}</label>
                        </p>
                        <p v-show="certificates.length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="panel panel-default" id="additionalInfo">
                    <div class="panel-heading">
                        附加信息
                    </div>
                    <div class="panel-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div class="form-inline">
                            <span v-if="showAddInfoTip" @click="showAddInfoTip = false">{{additionalInfo}}</span>
                            <input v-else type="text" class="form-control" v-model="additionalInfo"/>
                            <button type="button" class="btn btn-primary" :disabled="showAddInfoTip" @click="showAddInfoTip = true" data-dismiss="modal">确定</button>
                        </div>
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
import ModelView from "@/components/ModelView";
import FormModelView from "@/components/FormModelView";
import Datepicker from 'vuejs-datepicker';
export default {
  name: "CurriculumVitae",
  components: {
    NavigatorBar,
    ModelView,
    FormModelView,
    Datepicker
  },
  data() {
    this.getCityByIp(
      {
        // get totalCityInfos
        level: 2,
        order: 0
      },
      res => {
        this.totalCityInfos = res;
        for (let i = 0, len = this.letters.length; i < len; i++) {
          let letterData = this.letters[i];
          letterData.data = res.filter(info => {
            return info.pinyin.startsWith(letterData.letter);
          });
        }
      }
    );
    return {
      isdisabled: true,
      username: "",
      password: "",
      letters: [
        { letter: "A", data: [] },
        { letter: "B", data: [] },
        { letter: "C", data: [] },
        { letter: "D", data: [] },
        { letter: "E", data: [] },
        { letter: "F", data: [] },
        { letter: "G", data: [] },
        { letter: "H", data: [] },
        { letter: "I", data: [] },
        { letter: "J", data: [] },
        { letter: "K", data: [] },
        { letter: "L", data: [] },
        { letter: "M", data: [] },
        { letter: "N", data: [] },
        { letter: "O", data: [] },
        { letter: "P", data: [] },
        { letter: "Q", data: [] },
        { letter: "R", data: [] },
        { letter: "S", data: [] },
        { letter: "T", data: [] },
        { letter: "U", data: [] },
        { letter: "V", data: [] },
        { letter: "W", data: [] },
        { letter: "X", data: [] },
        { letter: "Y", data: [] },
        { letter: "Z", data: [] }
      ],
      editMode: {
        baseInfo: false,
        jobIntention: false,
        educationExp: false,
        internshipExp: false,
        projectExp: false,
        honoraryAward: false,
        clubExp: false,
        skills: false,
        additionalInfo: false
      },
      intendedCitys: ["北京", "杭州", "上海"],
      sexValues: [{ name: "男" }, { name: "女" }],
      eduBgItems: [{ name: "中专", id: 0 }, { name: "大专", id: 1 }, {name: "本科", id: 2}, {name: "研究生", id: 3}, {name: "博士及以上", id: 4}],
      cardDataInfo: {
        avatarUrl: "",
        name: "test",
        sex: 0,
        id: 0,
        degree: 0,
        eduBg: "",
        phone: "111111",
        email: "11111",
        college_name: "1111",
        allCollege: ["清华大学","北京大学","中国人民大学","北京航空航天大学","北京师范大学","中国农业大学","北京理工大学"],
        majorName: "11111",
        graduation_date: "2017-06-28"
      },
      educationFormInfo: {
        infoType: "educationExps",
        index: -1,
        title: "教育经历",
        state: "initial",
        data: [
          {
            label: "学校名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "edu_school"
          },
          {
            label: "专业名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "edu_profession"
          },
          {
            label: "学历",
            form_type: "input",
            type: "text",
            value: "",
            id: "edu_degree"
          },
          {
            label: "是否统招",
            form_type: "radio",
            value: "",
            radioInfos: [
              {
                type: "radio",
                radio_tip: "是",
                name: "isNationalOption"
              },
              {
                type: "radio",
                radio_tip: "否",
                name: "isNationalOption"
              }
            ],
            id: "edu_isNational"
          },
          {
            label: "就读时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                id: "edu_startTime",
                value: "",
                placeholder: "开始时间"
              },
              {
                type: "date",
                id: "edu_endTime",
                value: "",
                placeholder: "结束时间"
              }
            ],
            recursion: "true",
            recursion_key: "datePickers",
            id: "edu_times"
          }
        ]
      },
      //   educationExps: [
      //       {edu_school: "浙江大学", edu_profession: "计算机工程与技术", edu_degree: "研究生", edu_startTime: "2010-9", edu_endTime: "2013-7"},
      //       {edu_school: "浙江工业大学", edu_profession: "计算机工程与技术", edu_degree: "本科", edu_startTime: "2010-9", edu_endTime: "2013-7"}
      //   ],
      educationExps: [],
      internshipFormInfo: {
        infoType: "internshipExps",
        index: -1,
        title: "实习经历",
        state: "initial",
        data: [
          {
            label: "实习公司",
            form_type: "input",
            type: "text",
            value: "",
            id: "internship_company"
          },
          {
            label: "实习岗位",
            form_type: "input",
            type: "text",
            value: "",
            id: "internship_postion"
          },
          {
            label: "实习时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "开始时间",
                id: "internship_startTime"
              },
              {
                type: "date",
                value: "",
                placeholder: "结束时间",
                id: "internship_endTime"
              }
            ],
            recursion: "true",
            recursion_key: "datePickers",
            id: "internship_times"
          },
          {
            label: "工作内容",
            form_type: "input",
            type: "text",
            value: "",
            id: "internship_content"
          }
        ]
      },
      //   internshipExps: [
      //       {internship_company: "阿里巴巴", internship_postion: "测试工程师", internship_times:"2010-9至2013-7", internship_content: "主要是负责测试工作！"},
      //       {internship_company: "湖畔大学", internship_postion: "开发工程师", internship_times:"2010-9至2013-7", internship_content: "主要是负责开发工作！"}
      //   ],
      internshipExps: [],
      projectFormInfo: {
        infoType: "projectExps",
        index: -1,
        title: "项目经历",
        state: "initial",
        data: [
          {
            label: "项目名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "project_name"
          },
          {
            label: "项目角色",
            form_type: "input",
            type: "text",
            value: "",
            id: "project_position"
          },
          {
            label: "工作时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "开始时间",
                id: "project_startTime"
              },
              {
                type: "date",
                value: "",
                placeholder: "结束时间",
                id: "project_endTime"
              }
            ],
            recursion: "true",
            recursion_key: "datePickers",
            id: "project_times"
          },
          {
            label: "项目内容",
            form_type: "input",
            type: "text",
            value: "",
            id: "project_content"
          }
        ]
      },
      //   projectExps: [
      //       {project_name: "项目名称1", project_position: "测试工程师", project_times:"2010-9至2013-7", project_content: "项目内容1"},
      //       {project_name: "项目名称2", project_position: "开发工程师", project_times:"2010-9至2013-7", project_content: "项目内容2"}
      //   ],
      projectExps: [],
      honoraryAwardsFormInfo: {
        infoType: "honoraryAwards",
        index: -1,
        title: "获得奖项",
        state: "initial",
        data: [
          {
            label: "奖项名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "award_name"
          },
          {
            label: "奖项级别",
            form_type: "input",
            type: "text",
            value: "",
            id: "award_degree"
          },
          {
            label: "得奖时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "得奖时间",
                id: "award_time"
              }
            ],
            recursion: "true",
            recursion_key: "datePickers"
          }
        ]
      },
      //   honoraryAwards: [
      //       {award_name: "奖项名称", award_degree: "奖项级别", award_time: "2010-9"},
      //       {award_name: "奖项名称2", award_degree: "奖项级别2", award_time: "2010-9"}
      //   ],
      honoraryAwards: [],
      clubFormInfo: {
        infoType: "clubExps",
        index: -1,
        title: "社团经历",
        state: "initial",
        data: [
          {
            label: "社团名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "club_name"
          },
          {
            label: "负责岗位",
            form_type: "input",
            type: "text",
            value: "",
            id: "club_position"
          },
          {
            label: "参加时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "开始时间",
                id: "club_startTime"
              },
              {
                type: "date",
                value: "",
                placeholder: "结束时间",
                id: "club_endTime"
              }
            ],
            recursion: "true",
            recursion_key: "datePickers",
            id: "club_times"
          }
        ]
      },
    //   clubExps: [
    //     {
    //       club_name: "社团名称",
    //       club_position: "担任位置",
    //       club_times: "2010-9至2013-7"
    //     },
    //     {
    //       club_name: "社团名称2",
    //       club_position: "担任位置2",
    //       club_times: "2010-9至2013-7"
    //     }
    //   ],
      clubExps: [],
      skillFormInfo: {
        infoType: "skillInfos",
        index: -1,
        title: "专业技能",
        state: "initial",
        data: [
          {
            label: "专业技能",
            form_type: "input",
            type: "text",
            value: "",
            id: "skill_name"
          }, {
            label: "精通程度",
            form_type: "radio",
            value: "",
            radioInfos: [
              {
                type: "radio",
                radio_tip: "一般",
                name: "skill_degree"
              },
              {
                type: "radio",
                radio_tip: "良好",
                name: "skill_degree"
              },
              {
                type: "radio",
                radio_tip: "熟练",
                name: "skill_degree"
              },
              {
                type: "radio",
                radio_tip: "精通",
                name: "skill_degree"
              }
            ],
            id: "skill_degree"
          }
        ]
      },
    //   skillInfos: [{skill_name: "专业技能1"}, {skill_name: "专业技能2"}, {skill_name: "专业技能3"}],
      skillInfos: [],
      certificatesFormInfo: {
        infoType: "certificates",
        index: -1,
        title: "获得证书",
        state: "initial",
        data: [
          {
            label: "证书名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "certificate_name"
          },
          {
            label: "获得时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "获得时间",
                id: "certificate_time"
              }
            ],
            recursion: "true",
            recursion_key: "datePickers"
          }
        ]
      },
    //   certificates: [{
    //       certificate_name: "英语六级"
    //   },{
    //       certificate_name: "计算机二级"
    //   }],
      certificates: [],
      additionalInfo: "这里是附加信息",
      showAddInfoTip: false
    };
  },
  // computed: {
  //   checkInputValue: function() {
  //     return "" !== this.username && "" !== this.password;
  //   }
  // },
  methods: {
    doSubmit: function() {},

    changeEditMode: function(item, value) {
      console.log(`changeEditMode: ${item}, ${value}`);
      this.editMode[item] = value;
    },

    updateCardInfo: function() {
      this.changeEditMode('baseInfo', false);
      this.updateUserInfo();
    },

    handlePositive: function(res) {
    //   console.log(`handlePositive ==> ${JSON.stringify(res)}`);
      let infos = res.infos;
      if (!infos) {
        console.log(`Error: handlePositive not got infos. `);
        return;
      }
      let listInfos = eval('this.' + infos.infoType);
      if (listInfos) {
          this.updateListInfos(listInfos, infos.data, infos.index);
      } else {
          console.log(`infoType [ ${infos.infoType} ] not supported ! `);
      }
    //   switch (infos.infoType) {
    //     case "educationExps":
    //       this.updateListInfos(this.educationExps, infos.data, infos.index);
    //       break;
    //     case "internshipExps":
    //       this.updateListInfos(this.internshipExps, infos.data, infos.index);
    //     default:
    //       break;
    //   }
    },

    bindListInfos: function(listInfo, dataArray, newObject, updateObject) {
      // let newObject = needNew ? object || {} : null;

      for (let i = 0, len = dataArray.length; i < len; i++) {
        let data = dataArray[i];
        if (data.recursion && data.recursion_key) {
          // console.log(`bindListInfos in recursion ==============>  start`);
          this.bindListInfos(
            listInfo,
            data[data.recursion_key],
            newObject,
            updateObject
          );
          // console.log(`bindListInfos in recursion ==============> end`);
        }
        let key = data.id;
        let value = data.value;
        // console.log(`bindListInfos => ${key}, ${value}`);
        if (newObject) {
          // let o = {};
          newObject[key] = value;
          // console.log(`bindListInfos => need New object ${JSON.stringify(newObject)}`);
        } else {
          for (var k in updateObject) {
            if (true === updateObject.hasOwnProperty(k)) {
              if (k === key) {
                updateObject[k] = value;
                // console.log(`bindListInfos ==> match the key ${key}, ${value}`);
              }
            }
          }
        }
      }
    },

    updateListInfos: function(listArray, dataArray, index) {
      let needNew = -1 === index;
      let newObject = null;
      let updateObject = null;
      if (-1 === index) {
        newObject = {};
      } else {
        updateObject = listArray[index];
      }
      this.bindListInfos(listArray, dataArray, newObject, updateObject);
      console.log(`updateListInfos => bindListInfos end ${JSON.stringify(newObject)}`);
      if (needNew) {
        listArray.push(newObject);
      }
      console.log(`updateListInfos => end ${JSON.stringify(listArray)}`);
    },

    updateFormInfo: function(formInfos, info, index) {
        if (!info) {
            // do clear form infos;
            this.clearFormInfo(formInfos); // new form info
        } else {
            // fill infos to form;
            this.fillFormInfos(formInfos, info, index); // edit form info;
        }
    },

    clearFormInfo: function(formInfos) {
        if (!formInfos) {
          console.log("clearFormInfo, Error: ---> formInfos is not setted ");
          return;
        }
        let data = formInfos.data;
        for (let len = data.length, i = 0; i < len; i++) {
          let formData = data[i];
          console.log(`${JSON.stringify(formData)}`);
          formData.value = "";
        }
    },

    fillFormInfos: function(formInfos, info, index) {
        if (!formInfos) {
          console.log("fillFormInfos, Error: ---> formInfos is not setted ");
          return;
        }
        formInfos.index = index; // used for update or new compare.
        let data = formInfos.data;
        for (let len = data.length, i = 0; i < len; i++) {
          let formData = data[i];
          let id = formData.id;
          console.log(`fillFormInfos [${i}], ${id}, ${JSON.stringify(formData)}` );
          if (info.hasOwnProperty(id)) {
            formData.value = info[id];
            console.log(`fillFormInfos match id ${id}, formData.value = ${formData.value}`);
          }
        }
    },

    deleteListInfo: function(listInfos, info, index) {
        console.log(`deleteListInfo listInfos ==> ${JSON.stringify(listInfos)}`);
        console.log(`deleteListInfo info ==> ${info}`);
        listInfos.splice(index, 1);
    },

    updateUserInfo: function() {
      let params = {
        name: this.cardDataInfo.name,
        id: this.cardDataInfo.id,
        headImg: "../assets/images/avtar.png",
        sex: this.sexValues[this.cardDataInfo.sex].name,
        telephone: this.cardDataInfo.phone,
        hignEdu: this.eduBgItems[this.cardDataInfo.degree].name
      };
      this.http
        .post(this._global.UPDATE_USER_INFO, params)
        .then(res => {
          console.log(`updateLoginInfo callback ${JSON.stringify(res)}`);
          if (res.data.success) {
            // handle update login info success.
          } else {
            alert(res.data.errMsg);
          }
          // 跳转到主页面；
          // userType: 3 发布权限  2 系统管理员  1 普通用户
        })
        .catch(function(error) {
          alert(error);
        });
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
  /* position: absolute;
  margin-right: -250px; */
  position: fixed;
  margin-right: -250px;
}

/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  /* position:fixed;
  top: 100px; */
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

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
  color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}

@media (min-width: 768px) {
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
.page-main .panel-body ul.panel-content li {
  line-height: 40px;
}
.page-main .panel-body .card-item,
.page-main .panel-body .card-item-edit {
  /* border-bottom: 1px dashed #eeeeee; */
  padding: 10px 20px 20px;
  position: relative;
}

.page-main .panel-body .card-item-edit input,
.page-main .panel-body .card-item-edit .user-info .gender {
  border-radius: 0;
  height: 38px;
  line-height: 38px;
  width: 198px !important;
  padding-left: 12px;
  background-color: #f8f9fa;
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

.page-main .panel-body .card-item-edit .user-info .user-info-left,
.page-main .panel-body .card-item-edit .user-info .user-info-right {
  float: left;
}

.page-main .panel-body .card-item-edit .user-info .user-info-left {
  margin-right: 20px;
}

.page-main .panel-body .card-item-edit .user-info .left-item .item-label,
.page-main .panel-body .card-item-edit .user-info .right-item .item-label {
  width: 60px;
  text-align: center;
  display: inline-block;
}

.page-main .panel-body .card-item-edit .user-info .user-info-left .left-item,
.page-main .panel-body .card-item-edit .user-info .user-info-right .right-item {
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

.page-main
  .panel-body
  .card-item-edit
  .user-info
  .user-education
  .education-menu,
.card-item-edit .user-info .user-graduate-year .dropdown-menu,
.card-item-edit .user-info .user-gender .dropdown-menu {
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

.page-main .panel-body .card-item .user-info .user-info-left,
.page-main .panel-body .card-item .user-info .user-info-right {
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

.page-main .panel-body .card-item .user-info .user-info-left div,
.page-main .panel-body .card-item .user-info .user-info-right div {
  font-size: 14px;
  line-height: 40px;
}

.padding {
  padding-left: 10px;
  padding-right: 10px;
}

.label-gap {
  margin-right: 5px;
}

.clear {
  width: 100%;
  height: 0;
  clear: both;
}
</style>
