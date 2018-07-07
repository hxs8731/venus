<template>
<div class="root">
	<navigator-bar :activeId="3"/>
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
              <label>*招聘城市:</label>
              <input type="text" class="form-control" ref="recruit_city" v-model="recruitCity" />
          </div>
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
              <label>*宣讲城市:</label>
              <input type="text" class="form-control" ref="preach_city" v-model="preachCity" />
          </div>
          <div class="form-group">
              <label>*宣讲学校:</label>
              <input type="text" class="form-control" ref="preach_school" v-model="preachSchool" />
          </div>
          <div class="form-group">
              <label>*宣讲教室:</label>
              <input type="text" class="form-control" ref="preach_room" v-model="preachRoom" />
          </div>
          <div class="form-group">
              <label>*宣讲时间:</label>
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
      companyName: "",
      companyDesc: "",
      companyTags: "",
      recruitCity: "",
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
      preachJob: "",
      xjTime: null
    };
  },
  mounted() {
    let user = this.cookieStore.getCookie("username");
    let type = this.cookieStore.getCookie("userType");
    if (user && type >= 2) {
      console.log("check permission pass");
    } else {
      alert("没有权限操作，请联系管理员！");
      this.$router.push('/');
    }
    console.log("checkUserExist type" + user + ", user type = " + type);
  },
  computed: {
    checkInputValue: function() {
      // return "" !== this.companyName && "" !== this.companyDesc;
      let invalide = true;
      invalide &= "" !== this.companyName;
      invalide &= "" !== this.companyDesc;
      if (1 === this.workType) {
        invalide &= "" !== this.recruitCity;
        invalide &= "" !== this.recruitTitle;
        invalide &= "" !== this.recruitUrl;
      } else {
        invalide &= "" !== this.preachCity;
        invalide &= "" !== this.preachSchool;
        invalide &= null !== this.xjTime;
      }
      return invalide;
    }
  },
  methods: {
    clearInput: function() {
      this.companyName = "";
      this.companyDesc = "";
      this.companyTags = "";
      this.recruitCity = "",
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
      this.xjTime = null;
    },
    doDeploy: function() {
      let params = this.generateParams();
      this.http
        .post(this._global.DEPLOY_ACTION, params, {
          headers: {'Content-Type': 'application/json'} // must add content type
        })
        .then(res => {
          console.log(`doDeploy callback ${JSON.stringify(res)}`);
          if (res.data && res.data.success) {
            alert("发布成功！");
          } else {
            alert("发布失败！" + res.data.errMsg);
          }
          this.clearInput();
        })
        .catch(function(error) {
          alert(error);
        });
    },
    customFormatter: function(date) {
      return this.moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    selectXjtime: function(value) {
      this.xjTime = this.customFormatter(value);
      // console.log(`selectXjtime ==> ${this.xjTime}`);
    },
    generateParams: function() {
      let params = {};
      params.userName = this.cookieStore.getCookie("username");
      let recruitInfo = {};
      recruitInfo.companyName = this.companyName;
      recruitInfo.companyDesc = this.companyDesc;
      recruitInfo.companyTags = this.companyTags;
      recruitInfo.workType = this.workType;

      if (1 === this.workType) {
        recruitInfo.title = this.recruitTitle;
        recruitInfo.recruitUrl = this.recruitUrl;
        let workDetail = {
          resumeLink: this.resumeLink,
          jobName: this.jobName,
          jobDisc: this.jobDisc,
          jobRequire: this.jobRequire
        };
        recruitInfo.recruitWork = JSON.stringify(workDetail);
      } else if (2 === this.workType) {
        recruitInfo.recruitCitys = this.preachCity;
        recruitInfo.school = this.preachSchool;
        recruitInfo.teachInsAddress = this.preachRoom;
        recruitInfo.xjTime = this.xjTime;
        recruitInfo.recruitUrl = this.recruitUrl;
        // preachJob: ""
      }
      // params.append("recruit", recruitInfo);
      // console.log("generateParams params = " + params);
      // return params;
      params.recruit = recruitInfo;
      // var qs = require('qs');
      // let qparams = qs.stringify(params);
      // console.log("generateParams qparams = " + qparams);
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
