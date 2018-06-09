<template>
<div class="root">
	<navigator-bar :navInfos="naviLists" :loginNavInfos="loginNavLists"/>
  <div class="form_content">
      <p>
        <button @click="switchWorkType(1)" :class="1===workType ? 'active' : 'default'">发布招聘会</button>
        <button @click="switchWorkType(2)" :class="2===workType ? 'active' : 'default'">发布宣讲会</button>
        <!-- <li>发布实习</li> -->
      </p>
      <div class="form-root">
        <h3 class="header">公司信息</h3>
        <div class="form-group">
            <label>*公司名称:</label>
            <input type="text" class="form-control" ref="company_name" v-model="companyName" />
        </div>
        <div class="form-group">
            <label>*公司介绍:</label>
            <textarea type="text" class="form-control" ref="company_desc" v-model="companyDesc" />
        </div>
        <div class="form-group">
            <label>公司标签:</label>
            <input type="text" class="form-control" ref="company_label" v-model="companyTags" />
        </div>
      </div>
      <div v-if="1 === workType" class="form-root">
          <h3 class="header">招聘信息</h3>
          <div class="form-group">
              <label>*招聘标题:</label>
              <input type="text" class="form-control" ref="recruit_title" v-model="recruitTitle" />
          </div>
          <div class="form-group">
              <label>*招聘官网链接:</label>
              <input type="text" class="form-control" ref="recruit_link" v-model="recruitUrl" />
          </div>
          <div class="form-group">
              <label>招聘职位:</label>
              <input type="text" class="form-control" ref="recruit_work_name" v-model="jobName" />
              <label>职位介绍:</label>
              <textarea type="text" class="form-control" ref="recruit_work_disc" v-model="jobDisc" />
              <label>职位要求:</label>
              <textarea type="text" class="form-control" ref="recruit_work_require" v-model="jobRequire" />
          </div>
          <div class="form-group">
              <label>投递简历地址:</label>
              <input type="text" class="form-control" ref="resume_link" v-model="resumeLink" />
          </div>
      </div>
      <div v-if="2 === workType" class="form-root">
          <h3 class="header">宣讲会信息</h3>
          <div class="form-group">
              <label>宣讲城市:</label>
              <input type="text" class="form-control" ref="preach_city" v-model="preachCity" />
          </div>
          <div class="form-group">
              <label>宣讲学校:</label>
              <input type="text" class="form-control" ref="preach_school" v-model="preachSchool" />
          </div>
          <div class="form-group">
              <label>宣讲教室:</label>
              <input type="text" class="form-control" ref="preach_room" v-model="preachRoom" />
          </div>
          <div class="form-group">
              <label>宣讲时间:</label>
              <p><datepicker class="form-control" type="text" @selected="selectXjtime" placeholder="宣讲时间" language="zh" :format="customFormatter" /></p>
          </div>
          <div class="form-group">
              <label>招聘官网:</label>
              <input type="text" class="form-control" ref="preach_time" v-model="rearuitUrl" />
          </div>
          <div class="form-group">
              <label>宣讲职位说明:</label>
              <textarea type="text" class="form-control" ref="preach_job" v-model="preachJob" />
          </div>
      </div>
      <div class="form-group">
          <button type="submit" @click="doDeploy" :class="checkInputValue ? 'btn btn-primary' : 'btn btn-disabled'">发布</button>
      </div>
  </div>
</div>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
import Datepicker from "vuejs-datepicker";
export default {
  name: "Deploy",
  components: {
    NavigatorBar,
    Datepicker
  },
  data() {
    return {
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
          className: "active nav-pills",
          id: "deploy"
        },
        {
          text: "审核信息",
          to: "/verify",
          className: "nav-pills",
          id: "verify"
        }
      ],
      companyName: "",
      companyDesc: "",
      companyTags: "",
      recruitTitle: "",
      recruitUrl: "",
      resumeLink: "",
      jobName: "",
      jobDisc: "",
      jobRequire: "",
      workType: 1,
      preachCity: "",
      preachSchool: "",
      preachRoom: "",
      preachTime: "",
      rearuitUrl: "",
      preachJob: ""
    };
  },
  computed: {
    checkInputValue: function() {
      return "" !== this.companyName && "" !== this.companyDesc;
    }
  },
  methods: {
    clearInput: function() {
      this.companyName = "";
      this.companyDesc = "";
      this.companyTags = "";
      this.recruitTitle = "";
      this.recruitUrl = "";
      this.resumeLink = "";
      this.jobName = "";
      this.jobDisc = "";
      this.jobRequire = "";
      this.preachCity = "";
      this.preachSchool = "";
      this.preachRoom = "";
      this.preachTime = "";
      this.rearuitUrl = "";
      this.preachJob = "";
    },
    doDeploy: function() {
      let params = this.generateParams();
      this.http
        .post(this._global.DEPLOY_ACTION, params)
        .then(res => {
          console.log(`doDeploy callback ${JSON.stringify(res)}`);
          this.clearInput();
        })
        .catch(function(error) {
          alert(error);
        });
    },
    customFormatter: function(date) {
      return this.moment(date).format("YYYY-MM-DD hh:mm:ss");
    },
    selectXjtime: function(value) {
      this.xjTime = value;
    },
    generateParams: function() {
      // {
      // "userName":"admin",
      // "recruit":{
      //   "companyName":"test",
      //   "companyDesc":"testdesc",
      //   "companyTags":"公司标签",
      //   "title":"我在招聘it",
      //   "recruitCitys":"北京,上海",
      //   "school":"北大",
      //   "teachInsAddress":"地点",
      //   "recruitUrl":"www.baidu.com",
      //   "workType":"2",
      //   "xjTime": "2018-06-18 00:00:00"
      //   }

      // }
      let params = new URLSearchParams();
      params.append("userName", this.cookieStore.getCookie("username"));
      let recruitInfo = {};
      recruitInfo.companyName = this.companyName;
      recruitInfo.companyDesc = this.companyDesc;
      recruitInfo.companyTags = this.companyTags;
      recruitInfo.workType = this.workType;

      if (2 === this.workType) {
        recruitInfo.title = this.recruitTitle;
        recruitInfo.recruitUrl = this.recruitUrl;
        let workDetail = {
          resumeLink: this.resumeLink,
          jobName: this.jobName,
          jobDisc: this.jobDisc,
          jobRequire: this.jobRequire
        };
        recruitInfo.recruitWork = workDetail;
      } else if (1 === this.workType) {
        recruitInfo.recruitCitys = this.preachCity;
        recruitInfo.school = this.preachSchool;
        recruitInfo.teachInsAddress = this.preachRoom;
        recruitInfo.xjTime = this.xjTime;
        recruitInfo.recruitUrl = this.recruitUrl;
        // preachJob: ""
      }
      params.append("recruit", recruitInfo);
      return params;
    },
    switchWorkType: function(type) {
      this.workType = type;
    }
  }
};
</script>

<style>
.form_content {
  width: 50%;
  margin: 50px auto;
}
.active {
  background: #abe2f8;
}
.default {
  background: #e3f5fc;
}
.form-root { 
  border: 1px dotted #cccccc;
  padding: 15px;
  margin-bottom: 5px;
}
.form-root .header {
  color: #666666;
}
</style>
