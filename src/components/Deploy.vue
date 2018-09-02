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
            <input type="text" class="form-control" maxlength="50" ref="company_name" v-model="companyName" />
        </div>
        <div class="form-group">
            <label>*公司介绍:</label>
            <textarea type="text" class="form-control" maxlength="3000" ref="company_desc" v-model="companyDesc" />
        </div>
        <div class="form-group">
            <label>公司标签:</label>
            <input type="text" class="form-control" maxlength="50" ref="company_label" v-model="companyTags" />
        </div>
      </div>
      <div v-if="1 === workType" class="form-root">
          <h3 class="header">招聘信息</h3>
          <div class="form-group">
              <label>*招聘城市:</label>
              <input type="text" class="form-control" maxlength="50" ref="recruit_city" v-model="recruitCitys" />
          </div>
          <div class="form-group">
              <label>*招聘标题:</label>
              <input type="text" class="form-control" maxlength="50" ref="recruit_title" v-model="recruitTitle" />
          </div>
          <div class="form-group">
              <label>*招聘官网链接:</label>
              <input type="text" class="form-control" maxlength="50" ref="recruit_link" v-model="recruitUrl" />
          </div>
          <div class="form-group">
              <label>职位描述:</label>
              <tiny-editor @edit-content-change="handleEditContentChanged($event)" ref="recruit_desc" :editId="workType" />
          </div>
      </div>
      <div v-if="2 === workType" class="form-root">
          <h3 class="header">宣讲会信息</h3>
          <div class="form-group">
              <label>*宣讲城市:</label>
              <input type="text" class="form-control" maxlength="50" ref="preach_city" v-model="preachCity" />
          </div>
          <div class="form-group">
              <label>*宣讲学校:</label>
              <input type="text" class="form-control" maxlength="50" ref="preach_school" v-model="preachSchool" />
          </div>
          <div class="form-group">
              <label>*宣讲教室:</label>
              <input type="text" class="form-control" maxlength="50" ref="preach_room" v-model="preachRoom" />
          </div>
          <div class="form-group">
              <label>*宣讲时间:</label>
              <p>
                <datepicker class="form-control" ref="preach_time" @selected="selectXjtime" @closed="datepickerClosedFunction()" placeholder="宣讲时间" language="zh" :format="customFormatter" />
              </p>
              <div v-show="showTimepicker">
                <input type="text" style="width:100px; text-align: center;" v-model="hourVal" ref="hour" /> &nbsp;&nbsp;:&nbsp;&nbsp;
                <input type="text" style="width:100px; text-align: center;" v-model="minuteVal" ref="minute" /> &nbsp;&nbsp;:&nbsp;&nbsp;
                <input type="text" style="width:100px; text-align: center;" v-model="secondVal" ref="second" />
              </div>
          </div>
          <div class="form-group">
              <label>招聘官网:</label>
              <input type="text" class="form-control" maxlength="50" v-model="recruitUrl" />
          </div>
          <div class="form-group">
              <label>宣讲职位说明:</label>
              <!-- <textarea type="text" class="form-control" ref="preach_job" v-model="preachJob" /> -->
                <!-- <tiny-editor :tinymceContent="recruitWork" /> -->
                <tiny-editor @edit-content-change="handleEditContentChanged($event)" ref="preach_desc" :editId="workType" />
          </div>
      </div>
      <div class="form-group">
          <button type="text" @click="doDeploy" :class="checkInputValue() ? 'btn btn-primary' : 'btn btn-disabled'">发布</button>
      </div>
  </div>
</div>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
import Datepicker from "vuejs-datepicker";
import TinyEditor from "@/components/controls/TinyEditor";
export default {
  name: "Deploy",
  components: {
    NavigatorBar,
    Datepicker,
    TinyEditor
  },
  data() {
    return {
      hourVal: "0",
      minuteVal: "0",
      secondVal: "0",
      recruitWork: "",
      companyName: "",
      companyDesc: "",
      companyTags: "",
      recruitCitys: "",
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
      recruitUrl: "",
      preachJob: "",
      showTimepicker: false,
      xjTime: null
    };
  },
  mounted() {
    tinymce.init({});
    let user = this.cookieStore.getCookie("username");
    let type = this.cookieStore.getCookie("userType");
    if (user && type >= 2) {
      console.log("check permission pass");
    } else {
      alert("没有权限操作，请联系管理员！");
      this.$router.push('/');
      return;
    }
    console.log("checkUserExist type" + user + ", user type = " + type);
  },
  // computed: {
  // },
  watch: {
    hourVal: function(val, oldval) {
      console.log(`hourVal change ${val}, ${oldval}`);
      this.hourVal = this.matchValue(val, 0, 24);
      let hour = this.moment(this.xjTime).hours();
      this.xjTime = this.moment(this.xjTime).add(val - hour, 'h').format("YYYY-MM-DD HH:mm:ss");
      console.log(`hourVal change xjTime = ${this.xjTime}, ${hour}`);
      
    },
    minuteVal: function(val, oldval) {
      console.log(`minuteVal change ${val}, ${oldval}`);
      this.minuteVal = this.matchValue(val, 0, 60);
      let minute = this.moment(this.xjTime).minutes();
      this.xjTime = this.moment(this.xjTime).add(val - minute, 'm').format("YYYY-MM-DD HH:mm:ss");
      console.log(`minuteVal change xjTime = ${this.xjTime}, ${minute}`);
    },
    secondVal: function(val, oldval) {
      console.log(`secondVal change ${val}, ${oldval}`);
      this.secondVal = this.matchValue(val, 0, 60);
      let second = this.moment(this.xjTime).seconds();
      this.xjTime = this.moment(this.xjTime).add(val - second, 's').format("YYYY-MM-DD HH:mm:ss");
      console.log(`secondVal change xjTime = ${this.xjTime}, ${second}`);
    }
  },
  methods: {
    matchValue(val, min, max) {
      if (val < min) {
        val = min;
      }
      if (val > max) {
        val = max;
      }
      return val;
    },
    clearInput: function() {
      this.companyName = "";
      this.companyDesc = "";
      this.companyTags = "";
      this.recruitCitys = "",
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
      this.recruitUrl = "";
      this.preachJob = "";
      this.recruitWork = "";
      this.hourVal = "0";
      this.minuteVal = "0";
      this.secondVal = "0";
      this.clearXjTime();
      this.resetTinyEditors();
    },
    resetTinyEditors: function() {
      console.log(`resetTinyEditors ------ ${this.$refs.recruit_desc}, ${this.$refs.preach_desc}`);
      if (this.$refs.recruit_desc) {
        this.$refs.recruit_desc.tinymceContent = "请输入内容";
      }
      if (this.$refs.preach_desc) {
        this.$refs.preach_desc.tinymceContent = "请输入内容";
      }
    },
    clearXjTime: function() {
      this.showTimepicker = false,
      this.xjTime = null;
      if (this.$refs.preach_time) {
        this.$refs.preach_time.clearDate();
      }
      // preach_time
    },
    checkInputValue: function() {
      // return "" !== this.companyName && "" !== this.companyDesc;
      console.log(`start check value!`);
      let invalide = true;
      invalide &= "" !== this.companyName;
      invalide &= "" !== this.companyDesc;
      if (1 === this.workType) {
        invalide &= "" !== this.recruitCitys;
        invalide &= "" !== this.recruitTitle;
        invalide &= "" !== this.recruitUrl;
        console.log(`checkInputValue recruit recruitCitys = ${this.recruitCitys}, recruitTitle = ${this.recruitTitle}, recruitUrl = ${this.recruitUrl}`);
      } else {
        invalide &= "" !== this.preachCity;
        invalide &= "" !== this.preachSchool;
        invalide &= "" !== this.preachRoom;
        invalide &= null !== this.xjTime;
        invalide &= "Invalid date" !== this.xjTime;
        console.log(`checkInputValue xj preachCity = ${this.preachCity}, preachSchool = ${this.preachSchool}, xjTime = ${this.xjTime}, preachRoom = ${this.preachRoom}`);
      }
      console.log(`checkInputValue both companyName = ${this.companyName}, companyDesc = ${this.companyDesc}`);
      console.log(`end check value, invalide = ${invalide} !`);
      return invalide;
    },
    doDeploy: function() {
      if (!this.checkInputValue()) {
        console.log(`disable do nothing`);
        // alert("请填写信息！");
        return;
      }
      let params = this.generateParams();
      this.http
        .post(this._global.DEPLOY_ACTION, params, {
          headers: {'Content-Type': 'application/json'} // must add content type
        })
        .then(res => {
          console.log(`doDeploy callback ${JSON.stringify(res)}`);
          if (res.data && res.data.success) {
            alert("发布成功！");
            this.clearInput();
          } else {
            alert("发布失败！" + res.data.errMsg);
            if ("user_error" === res.data.errCode) {
              this.clearInput();
              this.goHomeLogout();
            }
          }
        })
        .catch(function(error) {
          alert(error);
        });
    },
    customFormatter: function(date) {
      return this.moment(date).format("YYYY-MM-DD");
    },
    selectXjtime: function(value) {
      this.xjTime = this.customFormatter(value);
      console.log(`selectXjtime ==> ${this.xjTime}`);
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
        recruitInfo.recruitCitys = this.recruitCitys;
        // let workDetail = {
        //   resumeLink: this.resumeLink,
        //   jobName: this.jobName,
        //   jobDisc: this.jobDisc,
        //   jobRequire: this.jobRequire
        // };
        // recruitInfo.recruitWork = JSON.stringify(workDetail);
        recruitInfo.recruitWork = this.recruitWork;
      } else if (2 === this.workType) {
        recruitInfo.recruitCitys = this.preachCity;
        recruitInfo.school = this.preachSchool;
        recruitInfo.teachInsAddress = this.preachRoom;
        recruitInfo.xjTime = this.moment(this.xjTime).format("YYYY-MM-DD HH:mm:ss");
        recruitInfo.recruitUrl = this.recruitUrl;
        recruitInfo.recruitWork = this.recruitWork;
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
      this.clearXjTime();
      // this.resetTinyEditors();
    },
    handleEditContentChanged(val) {
      // console.log(`handleEditContentChanged:: ${val}`);
      this.recruitWork = val;
    },
    datepickerClosedFunction() {
      this.hourVal = this.moment(this.xjTime).hours();
      this.minuteVal = this.moment(this.xjTime).minutes();
      this.secondVal = this.moment(this.xjTime).seconds();
      this.showTimepicker = true;
      console.log(`datepickerClosedFunction ==> ${this.hourVal}, ${this.minuteVal}, ${this.secondVal}`)
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
