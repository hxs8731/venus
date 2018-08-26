<template>
<div>
    <navigator-bar/>
    <div id="wrapper" class="toggled">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
              <li>
                  <a href="#baseInfo">简历信息</a>
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
                <div class="card card-default" id="baseInfo">
                    <div class="card-heading">
                        基本信息
                        <a href="####" v-if="!editMode.baseInfo" class=" card-info-edit float-right padding left right edit"
                        @click="changeEditMode('baseInfo', !editMode.baseInfo)">
                            <i class="fa fa-pencil"></i> 编辑
                        </a>
                    </div>
                    <div class="card-body" style="padding-top: 30px;padding-bottom: 30px;">
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
                                            <span class="person-content" v-else>女</span>
                                        </div>
                                        <div class="user-telephone">
                                            电话：
                                            <span class="person-content">{{cardDataInfo.telephone}}</span>
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
                                            <span class="person-content">{{eduLevelArray[cardDataInfo.hignEdu].name}}</span>
                                        </div>
                                        <div class="user-graduate-year">
                                            出生年月：
                                            <span class="person-content">{{formatDate(cardDataInfo.birthday)}}</span>
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
                              <!-- <h5>基本信息的编辑页面</h5> -->
                                <div v-else class="form-horizontal animated fadeIn">
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
                                                      <select class="custom-select" v-model="cardDataInfo.sex">
                                                        <option v-for="(sexVal, index) in sexValues" v-bind:value="index">{{sexVal.name}}</option>
                                                      </select>


                                                        <!-- <input readonly class="form-control dropdown-toggle" data-toggle="dropdown"
                                                              v-model="sexValues[cardDataInfo.sex].name">
                                                        <span class="caret"></span>
                                                        <div class="dropdown-menu" role="menu">
                                                            <ul>
                                                                <li v-for="(sexVal, index) in sexValues"
                                                                    @click="cardDataInfo.sex=index"> {{sexVal.name}}</li>
                                                            </ul>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="user-telephone left-item">
                                                    <span class="item-label">电话</span>
                                                    <div class="gender-wrap" style="display: inline-block;">
                                                        <input type="text" class="form-control" v-bind="cardDataInfo.telephone"
                                                           v-model="cardDataInfo.telephone" name="telephone">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="user-info-right">
                                                <div class="user-education right-item">
                                                    <span class="item-label">最高学历</span>
                                                    <div class="education-wrap" style="display: inline-block;">
                                                        <select class="custom-select" v-model="cardDataInfo.hignEdu">
                                                          <option v-for="eduBgItem in eduLevelArray" v-bind:value="eduBgItem.id">{{eduBgItem.name}}</option>
                                                        </select>

                                                        <!-- <input readonly class="form-control dropdown-toggle" data-toggle="dropdown"
                                                              v-model="eduLevelArray[cardDataInfo.degree].name" myrequired>
                                                        <span class="caret"></span>
                                                        <div class="dropdown-menu education-menu" role="menu">
                                                            <ul>
                                                                <li v-for="eduBgItem in eduLevelArray" @click="cardDataInfo.degree=eduBgItem.id">{{eduBgItem.name}}</li>
                                                            </ul>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="user-graduate-year right-item form-inline">
                                                    <span class="item-label">出生年月</span>
                                                    <datepicker class="form-control" id="startDate" v-model="cardDataInfo.birthday" type="text" placeholder="选择出生年月" language="zh" format="yyyy-MM-dd"></datepicker>
                                                </div>
                                                <div class="user-email right-item">
                                                    <span class="item-label">邮箱</span>
                                                    <div class="gender-wrap" style="display: inline-block;">
                                                        <input type="email" class="form-control" v-model="cardDataInfo.email" name="email">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="user-handle float-right">
                                            <button href="javascript:void(0)" class="btn btn-success save add_save"
                                               @click="updateCardInfo();">保存</button>
                                            <button href="javascript:void(0)" class="btn btn-default cancel add_cancel"
                                               @click="changeEditMode('baseInfo', false)">取消</button>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="card card-default" id="jobIntention">
                    <div class="card-heading">
                        求职意向
                        <!-- <a href="#" class=" card-info-edit float-right padding left right edit"
                        @click="editCardInfo();">
                            <i class="fa fa-pencil"></i> 编辑
                        </a> -->
                    </div>
                    <div class="card-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <ul class="card-content">
                            <li>
                                <span>意向城市<label> <a href="`"></a>*</label></span>
                                <button v-for="info in mainCityInfos" :class="resumeIntent && resumeIntent.cityName && resumeIntent.cityName.split(',').indexOf(info.city) >= 0 ? 'btn btn-primary' : 'btn btn-default' " @click="toggleResumeCity(info.city)"> {{ info.city }} </button>
                                <!-- <span v-if="!resumeIntent.cityName">暂无意向城市</span>
                                <button v-else v-for="(info, index) in resumeIntent.cityName.split(',')" class="btn btn-default">{{info}}</button>
                                <a href="#" border=0 data-toggle="modal" data-target="#cityModal"><label class="glyphicon glyphicon-plus"></label>选择城市</a>
                                <model-view modelTitle="自定义城市" :singleSelect="false" :selectedInfos="resumeIntent.cityName.split(',')" @modal-selected="selectInfoFromModal($event)" :modelData="letters" modelId="cityModal" /> -->
                            </li>
                            <li>
                                <span>意向职位<label> <a href="`"></a>*</label></span>
                                <span v-if="!resumeIntent.intentPosition">暂无意向职位</span>
                                <button v-else v-for="(info, index) in resumeIntent.intentPosition.replace(/，/g, ',').split(',')" class="btn btn-default">{{ info }}</button>
                                <a href="#" border=0 data-toggle="modal" data-target="#intentModal"><label class="glyphicon glyphicon-plus"></label>更多岗位</a>
                                <form-model-view :formInfos="intentFormInfo" modelId="intentModal" @modal-positive="handlePositive($event)" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card card-default" id="educationExp">
                    <div class="card-heading">
                        教育经历
                        <a href="#" class=" card-info-edit float-right padding left right edit"
                        data-toggle="modal" data-target="#eduModal" @click="updateFormInfo(educationFormInfo)">
                            <i class="fa fa-pencil"></i> +教育经历
                        </a>
                        <form-model-view :formInfos="educationFormInfo" modelId="eduModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="card-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div class="row cv-item cv-item-border" v-for="(info, index) in userEduInfos">
                            <p class="col-2">{{info.schooName}}</p>
                            <p class="col-3">{{info.professional}}</p>
                            <p class="col-2">{{eduLevelArray[info.eduLevel].name}}</p>
                            <p class="col-3">{{formatDate(info.startDate)}} 至 {{formatDate(info.endDate)}}</p>
                            <p class="col-2"><span data-toggle="modal" data-target="#eduModal" @click="updateFormInfo(educationFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(educationFormInfo.deleteType, userEduInfos, info, index)"><a href="####">删除</a></span></p>
                        </div>
                        <p v-show="userEduInfos.length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="card card-default" id="internshipExp">
                    <div class="card-heading">
                        实习经历
                        <a href="#" class=" card-info-edit float-right padding left right edit"
                        data-toggle="modal" data-target="#internshipModal">
                            <i class="fa fa-pencil"></i>+实习经历
                        </a>
                        <form-model-view :formInfos="internshipFormInfo" modelId="internshipModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="card-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in practiceInfos">
                            <div class="row cv-item" v-show="3 === info.workType">
                                <p class="col-4">{{info.company}}</p>
                                <p class="col-2">{{info.jobName}}</p>
                                <p class="col-4">{{formatDate(info.startDate)}} 至 {{formatDate(info.endDate)}}</p>
                                <p class="col-2"><span data-toggle="modal" data-target="#internshipModal" @click="updateFormInfo(internshipFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(internshipFormInfo.deleteType, practiceInfos, info, index)"><a href="####">删除</a></span></p>
                            </div>
                            <div class="row cv-item cv-item-border" v-show="3 === info.workType">
                                <p class="col-2">工作内容:</p>
                                <p class="col-10">{{info.content}}</p>
                            </div>
                        </div> 
                        <p v-show="filterInfos(practiceInfos, 3, 'workType').length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="card card-default" id="projectExp">
                    <div class="card-heading">
                        项目经历
                        <a href="#" class=" card-info-edit float-right padding left right edit"
                        data-toggle="modal" data-target="#projectModal">
                            <i class="fa fa-pencil"></i>+项目经历
                        </a>
                        <form-model-view :formInfos="projectFormInfo" modelId="projectModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="card-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-for="(info, index) in practiceInfos">
                            <div class="row cv-item" v-show="4 === info.workType">
                                <p class="col-4">{{info.company}}</p>
                                <p class="col-2">{{info.jobName}}</p>
                                <p class="col-4">{{formatDate(info.startDate)}} 至 {{formatDate(info.endDate)}}</p>
                                <p class="col-2"><span data-toggle="modal" data-target="#projectModal" @click="updateFormInfo(projectFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(projectFormInfo.deleteType, practiceInfos, info, index)"><a href="####">删除</a></span></p>
                            </div>
                            <div class="row cv-item cv-item-border" v-show="4 === info.workType">
                                <p class="col-2">项目内容:</p>
                                <p class="col-10">{{info.content}}</p>
                            </div>
                        </div>
                        <p v-show="filterInfos(practiceInfos, 4, 'workType').length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="card card-default" id="clubExp">
                    <div class="card-heading">
                        社团经历
                        <a href="#" class=" card-info-edit float-right padding left right edit"
                        data-toggle="modal" data-target="#clubModal">
                            <i class="fa fa-pencil"></i>+社团经历
                        </a>
                        <form-model-view :formInfos="clubFormInfo" modelId="clubModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="card-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div class="row cv-item cv-item-border" v-for="(info, index) in schoolWorks">
                            <p class="col-2">{{info.name}}</p>
                            <p class="col-4">{{info.job}}</p>
                            <p class="col-4">{{formatDate(info.startDate)}} 至 {{formatDate(info.endDate)}}</p>
                            <p class="col-2"><span data-toggle="modal" data-target="#clubModal" @click="updateFormInfo(this.clubFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(clubFormInfo.modifyApi, schoolWorks, info, index)"><a href="####">删除</a></span></p>
                        </div>
                        <p v-show="schoolWorks.length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="card card-default" id="honoraryAward">
                    <div class="card-heading">
                        荣誉奖项
                        <a href="#" class=" card-info-edit float-right padding left right edit"
                        data-toggle="modal" data-target="#honoraryAwardsModal" @click="updateFormInfo(honoraryAwardsFormInfo)">
                            <i class="fa fa-pencil"></i>+荣誉奖项
                        </a>
                        <form-model-view :formInfos="honoraryAwardsFormInfo" modelId="honoraryAwardsModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="card-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div class="row cv-item cv-item-border" v-for="(info, index) in awardInfos">
                            <p class="col-2">{{info.name}}</p>
                            <div class="progress col-3">
                              <div class="progress-bar bg-info" role="progressbar" v-bind:style="{width: (info.level + 1) / awardLevelArray.length * 100 + '%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                {{awardLevelArray[info.level].name}}
                              </div>
                            </div>
                            <!-- <p class="col-2">{{awardLevelArray[info.level].name}}</p> -->
                            <p class="col-3">{{formatDate(info.awardDate)}}</p>
                            <p class="col-2"><span data-toggle="modal" data-target="#honoraryAwardsModal" @click="updateFormInfo(honoraryAwardsFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(honoraryAwardsFormInfo.deleteType, awardInfos, info, index)"><a href="####">删除</a></span></p>
                        </div>
                        <p v-show="awardInfos.length <= 0">暂无内容</p>
                    </div>
                </div>
                <div class="card card-default" id="skills">
                    <div class="card-heading">
                        技能特长
                        <a href="#" class=" card-info-edit float-right padding left right edit"
                        data-toggle="modal" data-target="#skillModal">
                            <i class="fa fa-pencil"></i>+技能特长
                        </a>
                        <form-model-view :formInfos="skillFormInfo" modelId="skillModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="card-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-if="filterInfos(skillInfos, 1, 'skillType').length >= 1" v-for="(info, index) in skillInfos">
                            <div v-if="1 === info.skillType" class="row cv-item cv-item-border">
                              <p class="col-2">{{info.name}}</p>
                              <div class="progress col-3">
                                <div class="progress-bar bg-info" role="progressbar" v-bind:style="{width: (info.level + 1) / skillLevelArray.length * 100 + '%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                  {{skillLevelArray[info.level].name}}
                                </div>
                              </div>
                              <p class="col-3"></p>
                              <!-- <p class="col-5">{{skillLevelArray[info.level].name}}</p> -->
                              <p class="col-3"><span data-toggle="modal" data-target="#skillModal" @click="updateFormInfo(this.skillFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(skillFormInfo.deleteType, skillInfos, info, index)"><a href="####">删除</a></span></p>
                            </div>
                        </div>
                        <p v-show="filterInfos(skillInfos, 1, 'skillType').length < 1">暂无内容</p>
                    </div>
                </div>
                <div class="card card-default" id="certifications">
                    <div class="card-heading">
                        获得证书
                        <a href="#" class=" card-info-edit float-right padding left right edit"
                        data-toggle="modal" data-target="#certificateModal">
                            <i class="fa fa-pencil"></i>+获得证书
                        </a>
                        <form-model-view :formInfos="certificatesFormInfo" modelId="certificateModal" @modal-positive="handlePositive($event)" />
                    </div>
                    <div class="card-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div v-if="filterInfos(skillInfos, 2, 'skillType').length >= 1" v-for="(info, index) in skillInfos">
                            <div v-if="2 === info.skillType" class="row cv-item cv-item-border">
                              <p class="col-4">{{info.name}}</p>
                              <p class="col-5">{{formatDate(info.startDate)}}</p>
                              <p class="col-3"><span data-toggle="modal" data-target="#certificateModal" @click="updateFormInfo(certificatesFormInfo, info, index)"><a href="####">编辑</a></span>｜<span @click="deleteListInfo(certificatesFormInfo.deleteType, skillInfos, info, index)"><a href="####">删除</a></span></p>
                          </div>
                        </div>
                        <p v-show="filterInfos(skillInfos, 2, 'skillType').length < 1">暂无内容</p>
                    </div>
                </div>
                <div class="card card-default" id="additionalInfo">
                    <div class="card-heading">
                        附加信息
                        <a href="#additionalInfo" class=" card-info-edit float-right padding left right edit"
                        @click="addAttachInfo()">
                            <i class="fa fa-pencil"></i>+附加信息
                        </a>
                    </div>
                    <div class="card-body" style="padding-top: 30px;padding-bottom: 30px;">
                        <div class="form-inline" v-for="(info, index) in attachInfos">
                            <span v-if="showAddInfoTip" @click="showAddInfoTip = false">{{info.content}}</span>
                            <input v-else type="text" class="form-control" v-model="info.content"/>
                            <button type="button" class="btn btn-primary" :disabled="showAddInfoTip" @click="updateAttachInfos()">确定</button>
                        </div>
                    </div>
                </div>
                <!-- <button class="btn btn-primary">保存</button><button class="btn btn-primary">预览</button><button class="btn btn-primary">简历打分</button><button class="btn btn-primary">导出</button> -->
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
    // this.getCitysByOrder(
    //   {
    //     // get totalCityInfos
    //     level: 2,
    //     order: 0
    //   }, (res) => {
    //     // this.totalCityInfos = res;
    //     for (let i = 0, len = this.letters.length; i < len; i++) {
    //       let letterData = this.letters[i];
    //       letterData.data = res.filter(info => {
    //         return info.pinyin.startsWith(letterData.letter);
    //       });
    //     }
    //   }
    // );
    this.getCitysByOrder({
      level: 2,
      order: 1
    }, (res) => {
      this.mainCityInfos = res;
        console.log('GET ＝>>>>>>> searchbar getCitysByOrder main start res = ' + JSON.stringify(res));
    });
    this.getUserInfos();
    this.getResumeAllInfos();
    this.sawardLevelArray = [{ name: "初级", id: 0 }, { name: "中级", id: 1 }, {name: "高级", id: 2}, {name: "特级", id: 3}];
    this.seduLevelArray = [{ name: "未知", id: 0 }, { name: "专科", id: 1 }, {name: "本科", id: 2}, {name: "研究生", id: 3}, {name: "博士", id: 4}];
    this.sskillLevelArray = [{ name: "一般", id: 0 }, { name: "良好", id: 1 }, {name: "熟练", id: 2}, {name: "精通", id: 3}];
    this.scertificateLevelArray = [{ name: "一般", id: 0 }, { name: "良好", id: 1 }, {name: "优秀", id: 2}];
    var self = this;
    return {
      isdisabled: true,
      username: "",
      password: "",
      userId: null,
      awardLevelArray: [{ name: "初级", id: 0 }, { name: "中级", id: 1 }, {name: "高级", id: 2}, {name: "特级", id: 3}],
      eduLevelArray: [{ name: "未知", id: 0 }, { name: "专科", id: 1 }, {name: "本科", id: 2}, {name: "研究生", id: 3}, {name: "博士", id: 4}],
      skillLevelArray: [{ name: "一般", id: 0 }, { name: "良好", id: 1 }, {name: "熟练", id: 2}, {name: "精通", id: 3}],
      certificateLevelArray: [{ name: "一般", id: 0 }, { name: "良好", id: 1 }, {name: "优秀", id: 2}],
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
      resumeIntent: {
        "userId":2,
        "cityName":"北京,上海",
        "intentPosition":null
        // ,
        // "id":1,
        // "resumeId":null,
        // "recruitName":null,
        // "gmtCreate":1532362210000,
        // "gmtModified":1532362210000
      },
      intendedCitys: ["北京", "杭州", "上海"],
      mainCityInfos: [],
      sexValues: [{ name: "男" }, { name: "女" }],
      cardDataInfo: {
        avatarUrl: "",
        name: "test",
        sex: 0,
        id: 0,
        hignEdu: 0,
        eduBg: "",
        telephone: "111111",
        birthday: "string",
        email: "11111",
        college_name: "1111",
        allCollege: ["清华大学","北京大学","中国人民大学","北京航空航天大学","北京师范大学","中国农业大学","北京理工大学"],
        majorName: "11111",
        graduation_date: "2017-06-28",
        age: 0,
        address: "string"
      },
      intentFormInfo: {
        infoType: "resumeIntent",
        modifyApi: "modifyResumeIntent",
        index: -1,
        title: "意向岗位",
        state: "initial",
        notList: true,
        data: [
          {
            label: "意向岗位",
            form_type: "input",
            type: "text",
            value: "",
            id: "intentPosition"
          }
        ]
      },
      educationFormInfo: {
        infoType: "userEduInfos",
        modifyApi: "modifyUserEdus",
        deleteType: this._global.DELETE_RESUME_TYPE.EDU,
        index: -1,
        title: "教育经历",
        state: "initial",
        data: [
          {
            label: "学校名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "schooName"
          },
          {
            label: "专业名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "professional"
          },
          {
            label: "学历",
            form_type: "select",
            form_data: this.seduLevelArray,
            type: "select",
            value: /*userEduInfos.eduLevel || */0,
            id: "eduLevel"
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
                id: "startDate",
                value: "",
                placeholder: "开始时间"
              },
              {
                type: "date",
                id: "endDate",
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
      //   userEduInfos: [
      //       {schooName: "浙江大学", professional: "计算机工程与技术", eduLevel: "研究生", startDate: "2010-9", endDate: "2013-7"},
      //       {schooName: "浙江工业大学", professional: "计算机工程与技术", eduLevel: "本科", startDate: "2010-9", endDate: "2013-7"}
      //   ],
      userEduInfos: [],
      internshipFormInfo: {
        infoType: "practiceInfos",
        index: -1,
        title: "实习经历",
        state: "initial",
        modifyApi: "modifyPractices",
        deleteType: this._global.DELETE_RESUME_TYPE.PRACTICE,
        data: [
          {
            label: "实习公司",
            form_type: "input",
            type: "text",
            value: "",
            id: "company"
          },
          {
            label: "实习岗位",
            form_type: "input",
            type: "text",
            value: "",
            id: "jobName"
          },
          {
            label: "实习时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "开始时间",
                id: "startDate"
              },
              {
                type: "date",
                value: "",
                placeholder: "结束时间",
                id: "endDate"
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
            id: "content"
          },
          {
            value: 3,
            id: "workType",
            invisible: true
          }
        ]
      },
      //   practiceInfos: [
      //       {company: "阿里巴巴", jobName: "测试工程师", internship_times:"2010-9至2013-7", content: "主要是负责测试工作！"},
      //       {company: "湖畔大学", jobName: "开发工程师", internship_times:"2010-9至2013-7", content: "主要是负责开发工作！"}
      //   ],
      practiceInfos: [],
      projectFormInfo: {
        infoType: "practiceInfos",
        index: -1,
        title: "项目经历",
        state: "initial",
        modifyApi: "modifyPractices",
        deleteType: this._global.DELETE_RESUME_TYPE.PRACTICE,
        data: [
          {
            label: "项目名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "company"
          },
          {
            label: "项目角色",
            form_type: "input",
            type: "text",
            value: "",
            id: "jobName"
          },
          {
            label: "工作时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "开始时间",
                id: "startDate"
              },
              {
                type: "date",
                value: "",
                placeholder: "结束时间",
                id: "endDate"
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
            id: "content"
          },
          {
            value: 4,
            id: "workType",
            invisible: true
          }
        ]
      },
      //   practiceInfos: [
      //       {company: "项目名称1", jobName: "测试工程师", project_times:"2010-9至2013-7", content: "项目内容1"},
      //       {company: "项目名称2", jobName: "开发工程师", project_times:"2010-9至2013-7", content: "项目内容2"}
      //   ],
      // practiceInfos: [],
      honoraryAwardsFormInfo: {
        infoType: "awardInfos",
        index: -1,
        title: "获得奖项",
        state: "initial",
        modifyApi: "modifyAwards",
        deleteType: this._global.DELETE_RESUME_TYPE.AWARDS,
        data: [
          {
            label: "奖项名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "name"
          },
          {
            label: "奖项级别",
            form_type: "select",
            value: 0,
            form_data: this.awardLevelArray,
            id: "level"
          },
          {
            label: "得奖时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "得奖时间",
                id: "awardDate"
              }
            ],
            recursion: "true",
            recursion_key: "datePickers"
          }
        ]
      },
      //   awardInfos: [
      //       {name: "奖项名称", level: "奖项级别", awardDate: "2010-9"},
      //       {name: "奖项名称2", level: "奖项级别2", awardDate: "2010-9"}
      //   ],
      awardInfos: [],
      clubFormInfo: {
        infoType: "schoolWorks",
        index: -1,
        title: "社团经历",
        state: "initial",
        modifyApi: "modifySchoolWorks",
        deleteType: this._global.DELETE_RESUME_TYPE.SCHOOLWORK,
        data: [
          {
            label: "社团名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "name"
          },
          {
            label: "负责岗位",
            form_type: "input",
            type: "text",
            value: "",
            id: "job"
          },
          {
            label: "参加时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "开始时间",
                id: "startDate"
              },
              {
                type: "date",
                value: "",
                placeholder: "结束时间",
                id: "endDate"
              }
            ],
            recursion: "true",
            recursion_key: "datePickers",
            id: "club_times"
          }
        ]
      },
      schoolWorks: [],
      skillFormInfo: {
        infoType: "skillInfos",
        index: -1,
        title: "专业技能",
        state: "initial",
        modifyApi: "modifySkills",
        deleteType: this._global.DELETE_RESUME_TYPE.SKILL,
        data: [
          {
            label: "专业技能",
            form_type: "input",
            type: "text",
            value: "",
            id: "name"
          }, {
            label: "精通程度",
            form_type: "select",
            form_data: this.sskillLevelArray,
            value: 0,
            id: "level"
          },
          {
            label: "获得时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "获得时间",
                id: "startDate"
              }
            ],
            recursion: "true",
            recursion_key: "datePickers"
          },
          {
            value: 1,
            id: "skillType",
            invisible: true
          } 
        ]
      },
    //   skillInfos: [{name: "专业技能1"}, {name: "专业技能2"}, {name: "专业技能3"}],
      skillInfos: [],
      certificatesFormInfo: {
        infoType: "skillInfos",
        index: -1,
        modifyApi: "modifySkills",
        deleteType: this._global.DELETE_RESUME_TYPE.SKILL,
        title: "获得证书",
        state: "initial",
        data: [
          // {
          //   label: "证书名称",
          //   form_type: "input",
          //   type: "text",
          //   value: "",
          //   id: "certificate_name"
          // },
          // {
          //   label: "获得时间",
          //   form_type: "date",
          //   datePickers: [
          //     {
          //       type: "date",
          //       value: "",
          //       placeholder: "获得时间",
          //       id: "startDate"
          //     }
          //   ],
          //   recursion: "true",
          //   recursion_key: "datePickers"
          // },
          {
            label: "证书名称",
            form_type: "input",
            type: "text",
            value: "",
            id: "name"
          }, {
            label: "级别",
            form_type: "radio",
            radioItems: [{ name: "一般", id: 0 }, { name: "良好", id: 1 }, {name: "优秀", id: 2}],
            value: "",
            radioInfos: [
              {
                type: "radio",
                radio_tip: "一般",
                name: "level"
              },
              {
                type: "radio",
                radio_tip: "良好",
                name: "level"
              },
              {
                type: "radio",
                radio_tip: "优秀",
                name: "level"
              }
            ],
            id: "level"
          },
          {
            label: "获得时间",
            form_type: "date",
            datePickers: [
              {
                type: "date",
                value: "",
                placeholder: "获得时间",
                id: "startDate"
              }
            ],
            recursion: "true",
            recursion_key: "datePickers"
          },
          {
            value: 2,
            id: "skillType",
            invisible: true
          }
        ]
      },
    //   certificates: [{
    //       name: "英语六级", startDate: "2010-8-1"
    //   },{
    //       name: "计算机二级", startDate: "2010-7-1"
    //   }],
      certificates: [],
      additionalInfo: "这里是附加信息",
      attachInfos: [],
      showAddInfoTip: false
    };
  },
  // computed: {
  //   filterInfos: function(infos, value, key) {
  //     console.log(`filterWorkType ${infos}, ${value}, ${key}`);
  //     if (!infos || infos.length <= 0) {
  //       console.log(`filterWorkType empty array`);
  //       return [];
  //     }
  //     return infos.filter(function (info) {
  //       console.log(`filterWorkType ${info[key]}, ${value}, ${key} !!`);
  //       return info[key].match(value);
  //     });
  //   }
  // },
  methods: {
    filterInfos: function(infos, value, key) {
      // console.log(`filterWorkType ${infos}, ${value}, ${key}`);
      if (!infos || infos.length <= 0) {
        console.log(`filterWorkType empty array`);
        return [];
      }
      return infos.filter(function (info) {
        // console.log(`filterWorkType ${info[key]}, ${value}, ${key} !!`);
        return info[key] === value;
      });
    },
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
          if (infos.notList) {
            // just set value to listInfos
            let dataArray = infos.data;
            for (let i = 0, len = dataArray.length; i < len; i++) {
              let data = dataArray[i];
              let key = data.id;
              let value = data.value;
              console.log(`set value to listInfos => ${key}, ${value}`);
              listInfos[key] = value;
            }
          } else {
            // update list.
            this.updateListInfos(listInfos, infos.data, infos.index);
          }
          this.updateResumeInfo(infos.modifyApi, listInfos);
      } else {
          console.log(`infoType [ ${infos.infoType} ] not supported ! `);
      }
    //   switch (infos.infoType) {
    //     case "userEduInfos":
    //       this.updateListInfos(this.userEduInfos, infos.data, infos.index);
    //       break;
    //     case "practiceInfos":
    //       this.updateListInfos(this.practiceInfos, infos.data, infos.index);
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
        console.log(`bindListInfos => ${key}, ${value}, ${JSON.stringify(data)}`);
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

    deleteListInfo: function(deleteType, listInfos, info, index) {
      // console.log(`deleteListInfo listInfos ==> ${JSON.stringify(listInfos)}`);
      // console.log(`deleteListInfo info ==> ${JSON.stringify(info)}`);
      listInfos.splice(index, 1);
      console.log(`deleteListInfo info = ${JSON.stringify(info)}`);
      this.deleteResumeInfo(deleteType, info.id);
    },

    deleteResumeInfo: function(type, id) {
      console.log(`deleteResumeInfo id = ${id}, type = ${type}`);
      let params = new URLSearchParams();
      params.append("type", type);
      params.append("id", id);
      this.http.post(this._global.DELETE_RESUME_API, params)
        .then(res => {
          console.log(`deleteResumeInfo callback ${JSON.stringify(res)}`);
          if (res.data.success) {
            // handle update login info success.
          } else {
            alert(`errMsg = ` + res.data.errMsg);
          }
        })
        .catch(function(error) {
          alert(`catch error: ` + error);
        });
    },

    updateHighEdu(index) {
      this.cardDataInfo.hignEdu = index;
    },

    updateUserInfo: function() {
      let params = new URLSearchParams();
      params.append("name", this.cardDataInfo.name);
      params.append("id", this.cardDataInfo.id);
      params.append("headImg", "../assets/images/avtar.png");
      params.append("sex", this.cardDataInfo.sex);

      params.append("telephone", this.cardDataInfo.telephone);
      params.append("hignEdu", this.cardDataInfo.hignEdu);
      params.append("birthday", this.formatDate(this.cardDataInfo.birthday));
      params.append("age", this.cardDataInfo.age);
      params.append("address", this.cardDataInfo.address);
      params.append("email", this.cardDataInfo.email);
      // let params = {
      //   name: this.cardDataInfo.name,
      //   id: this.cardDataInfo.id,
      //   headImg: "../assets/images/avtar.png",
      //   sex: this.cardDataInfo.sex,
      //   telephone: this.cardDataInfo.telephone,
      //   hignEdu: this.cardDataInfo.degree,
      //   birthday: this.cardDataInfo.birthday,
      //   age: this.cardDataInfo.age,
      //   address: this.cardDataInfo.address
      // };
      this.http
        .post(this._global.UPDATE_USER_INFO, params
        /*, {
          headers: {'Content-Type': 'application/json'} // must add content type
        }*/)
        .then(res => {
          console.log(`updateLoginInfo callback ${JSON.stringify(res)}`);
          if (res.data.success) {
            // handle update login info success.
          } else {
            alert(res.data.errMsg);
          }
        })
        .catch(function(error) {
          alert(error);
        });
    },
    updateResumeInfo: function(modifyApi, info) {
      if (!modifyApi) {
        console.log(` not support this api type.`);
        return;
      }
      let uri = this._global.MODIFY_RESUME_API[modifyApi];
      console.log(`updateResumeInfo ${modifyApi}, ${JSON.stringify(info), this.isArray(info)}`);
      let params = {};
      let headerConfig;
      if (this.isArray(info)) {
        params.list = info;
        headerConfig = {
          headers: {'Content-Type': 'application/json'} // must add content type
        };
      } else {
        params = new URLSearchParams();
        for (var k in info) {
          params.append(k, info[k]);
        }
      }
      this.http
        .post(uri, params, headerConfig)
        .then()
        .catch(function(error) {
          alert(error);
        });
    },
    addAttachInfo: function() {
      if (this.attachInfos.length <= 0) {
        this.attachInfos.push({content: ""});
      } else {
        alert(`只允许添加一条附加信息！`);
      }
    },

    updateAttachInfos: function() {
      this.showAddInfoTip = true;
      this.updateResumeInfo("modifyAttachs", this.attachInfos);
    },
    getUserInfos: function() {
      this.http.get(this._global.GET_USER_INFO)
          .then(res => {
            console.log(`getUserInfos callback ${JSON.stringify(res)}`);
            let result = res.data.data;
            for (var k in result) {
              if ("sex" === k) {
                result[k] = result[k] === 1 ? 1 : 0; // only 0 & 1
              }

              this.cardDataInfo[k] = result[k];
            }
          })
          .catch(function(error) {
            alert(error);
            this.goHomeLogout();
          });
    },
    getResumeAllInfos: function() {
      this.http
        .get(this._global.GET_RESUME_ALL
        /*, null, {
          headers: {'Content-Type': 'application/json'} // must add content type
        }*/)
        .then(res => {
          console.log(`getResumeAllInfos callback ${JSON.stringify(res)}`);
          if (res.data.success) {
            // handle update login info success.
            let result = res.data.data;
            for (var k in result) {
              console.log(`getResumeAllInfos => ${k}, ${JSON.stringify(result[k])}`);
              this[k] = result[k]; // fill resume info to list.
              if ("resumeIntent" === k && !result[k]) {
                console.log(`resume intent is null, initial it ${k}, ${result[k]}`);
                // initial it.
                this[k] = {};
                // this[k].cityName = "";
                // this[k].intentPosition = "";
                // console.log(`resume intent ${JSON.stringify(this[k])}`);
              }
            }
          } else {
            alert(res.data.errMsg);
            this.goHomeLogout();
          }
        })
        .catch(function(error) {
          alert(error);
        });
    },
    // selectInfoFromModal: function(options) { // 只能传一个参数；
    //   console.log("selectInfoFromModal select city info = " + JSON.stringify(options));
    //   if (options && options.infos) {
    //       console.log("selectInfoFromModal ====>>>> select city infos = " + options.infos.toString());
    //       this.resumeIntent.cityName = options.infos.toString();
    //       this.updateResumeInfo("modifyResumeIntent", this.resumeIntent);
    //   }
    // },
    toggleResumeCity: function(city) {
        // this.deleteResumeInfo(1, 11);
        // return;
        let citys;
        if (!this.resumeIntent.cityName) {
          citys = [];
        } else {
          citys = this.resumeIntent.cityName.split(",");
        }
        console.log(`toggleResumeCity ${city}, ${this.resumeIntent.cityName}, ${citys}`);
        let index = citys.indexOf(city);
        if (index < 0) {
          citys.push(city);
        } else {
          citys.splice(index, 1);
        }
        this.resumeIntent.cityName = citys.toString();
        console.log(`toggleResumeCity after toggle ${city}, ${this.resumeIntent.cityName}`);
        this.updateResumeInfo("modifyResumeIntent", this.resumeIntent);
    },
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
  background: #FFF;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  /* position: absolute; */
  top: 135px;
  left: 264px;
  width: 0;
  /* width: 250px;  */
  height: 405px;
  margin-left: -250px;
  overflow-y: auto;
  background: #c9e2ec;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  background: #f7fafc;
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
  color: #2d3132;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #656363;
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
.card-default {
  margin-bottom: 15px;
}
.cv-item {
  /* border-bottom: #dadada dotted 0.05em; */
  font-size: 13px;
}

.cv-item-border {
  border-bottom: #dadada dotted 0.05em;
}
.page-main {
  min-height: 500px;
  width: 900px;
  position: relative;
  padding: 0 20px;
}

.page-main .card-body .card-item .user-info {
  position: absolute;
  width: 100%;
  top: 0;
  padding-left: 176px;
  height: 136px;
}
.page-main .card-body ul.card-content li {
  line-height: 40px;
}
.page-main .card-body .card-item,
.page-main .card-body .card-item-edit {
  /* border-bottom: 1px dashed #eeeeee; */
  padding: 10px 20px 20px;
  position: relative;
}

.page-main .card-body .card-item-edit input,
.page-main .card-body .card-item-edit .user-info .gender {
  /* border-radius: 0; */
  height: 38px;
  line-height: 38px;
  width: 198px !important;
  padding-left: 12px;
  background-color: #f8f9fa;
  display: inline-block;
}

.page-main .card-body .card-item-edit .user-img {
  height: 136px;
  width: 136px;
  text-align: center;
  position: relative;
}

.page-main .card-body .card-item-edit .user-img img {
  width: 100%;
  height: 100%;
}

.page-main .card-body .card-item-edit .user-info {
  float: left;
  width: 100%;
  margin-top: -136px;
  padding-left: 176px;
}

.page-main .card-body .card-item-edit .user-info .user-info-left,
.page-main .card-body .card-item-edit .user-info .user-info-right {
  float: left;
}

.page-main .card-body .card-item-edit .user-info .user-info-left {
  margin-right: 20px;
}

.page-main .card-body .card-item-edit .user-info .left-item .item-label,
.page-main .card-body .card-item-edit .user-info .right-item .item-label {
  width: 60px;
  text-align: center;
  display: inline-block;
}

.page-main .card-body .card-item-edit .user-info .user-info-left .left-item,
.page-main .card-body .card-item-edit .user-info .user-info-right .right-item {
  font-size: 14px;
  height: 38px;
  margin-bottom: 16px;
  line-height: 38px;
  margin-right: 12px;
}

.page-main .card-body .card-item-edit .user-info .user-gender .dropdown-menu {
  height: auto !important;
  width: 198px !important;
  right: auto;
}

.page-main
  .card-body
  .card-item-edit
  .user-info
  .user-education
  .education-menu,
.card-item-edit .user-info .user-graduate-year .dropdown-menu,
.card-item-edit .user-info .user-gender .dropdown-menu {
  top: auto !important;
  left: auto !important;
}

.page-main .card-body .card-item-edit .user-handle {
  margin-top: 2px;
  margin-right: 42px;
}

.page-main .card-body .card-item-edit .user-handle a {
  border-radius: 2px;
  height: 32px;
  width: 68px;
  line-height: 32px;
  margin-left: 12px;
  padding: 0;
}

.page-main .card-body .card-item-edit .user-handle .cancel {
  background-color: #eeeeee;
}

.page-main .card-body .card-item-edit .user-graduate-year .date-drop {
  width: 280px;
  font-size: 12px;
  overflow: hidden;
  padding: 0;
}

.page-main .card-body .card-item .user-img {
  height: 136px;
  width: 136px;
  /* background-color: red; */
  text-align: center;
  position: relative;
  z-index: 100;
}

.page-main .card-body .card-item .user-info .user-info-left,
.page-main .card-body .card-item .user-info .user-info-right {
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

.card-heading {
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

.page-main .card-body .card-item .user-info .user-info-left div,
.page-main .card-body .card-item .user-info .user-info-right div {
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

.cv-item p {
    margin-top: 1.0rem; /*solve p content vertical middle*/
}

.progress {
  padding-left: 0px;
  padding-right: 0px;
  margin-top: 1.0rem;
  margin-left: 1.0rem;
  margin-right: 1.0rem;
}

</style>
