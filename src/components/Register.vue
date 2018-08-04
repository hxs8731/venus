<template>
<div class="root">
	<navigator-bar/>
	<div class="container">
    <div class="col-md-6 col-md-offset-3">
        <form action="/api/api/user/register" class="" method="post">
            <div class="form-group has-feedback">
                <label for="username">登录用户名<font color="red">*</font></label>
                <div class="input-group">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                    <input id="username" name="userName" class="form-control" placeholder="请输入登录用户名" maxlength="20"
                           type="text">
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class=" glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="name">真实姓名<font color="red">*</font></label>
                <div class="input-group">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                    <input id="name" name="name" class="form-control" placeholder="请输入真实姓名" maxlength="20"
                           type="text">
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class=" glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="headImg">头像地址</label>
                <div class="input-group">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                    <input id="headImg" name="headImg" value="null" class="form-control" placeholder="请输入头像地址" maxlength="20"
                           type="text">
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class=" glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <div class="input-group">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                    <label for="sex">性别<font color="red">*</font>：</label>
                    <input id="1" checked name="#var.check" type="radio"  value='1'/><label>男</label>
			              <input id="2" name="#var.check"  type="radio" value='2'/><label>女</label>
			              <input id="0" name="#var.check" type="radio" value='0'/><label>未知</label>
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class=" glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="email-btn">邮箱<font color="red">*</font></label>
                <div class="input-group">
                    <!-- <span class="input-group-addon">@</span> -->
                    <input class="form-control" type="email" placeholder="jane.doe@example.com" name="email"
                           tips="请输入你常用的电子邮箱作为你的账号" value="" errortips="邮箱格式不正确">
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class="glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="password">密码<font color="red">*</font></label>
                <div class="input-group">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                    <input id="password" name="password" class="form-control" placeholder="请输入密码" maxlength="20"
                           type="password">
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class="glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="telephone">电话<font color="red">*</font></label>
                <div class="input-group">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                    <input id="telephone" name="telephone" class="form-control" placeholder="请输入电话" maxlength="20"
                           type="text">
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class=" glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="age">年龄<font color="red">*</font></label>
                <div class="input-group">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                    <input id="age" name="age" class="form-control" placeholder="请输入年龄" maxlength="20"
                           type="text">
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class=" glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <div class="input-group">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                    <label for="sex">企业标志：</label>
                    <input id="0" name="#var.check1" type="radio" value='0'/><label>非企业用户</label>
                    <input id="1" name="#var.check1" type="radio"  value='1'/><label>企业用户员</label>
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class=" glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <div class="input-group">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                    <label for="sex">用户类型：</label>
                    <input id="1" name="#var.check2" type="radio" value='1'/><label>普通用户</label>
                    <input id="2" name="#var.check2" type="radio"  value='2'/><label>企业用户</label>
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class=" glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="birthday">生日</label>
                <div class="input-group">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                    <input id="birthday" name="birthday" class="form-control" placeholder="请输入生日" maxlength="20"
                           type="text">
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class=" glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>
            <div class="row">
                <div class="col-xs-7">
                    <div class="form-group has-feedback">
                        <label for="idcode-btn">验证码</label>
                        <div class="input-group">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-qrcode"></span></span>
                            <input id="idcode-btn" class="form-control" placeholder="请输入验证码" maxlength="4" type="text">
                        </div>
                        <!-- <span style="color:red;display: none;" class="tips"></span>
                        <span style="display: none;" class="glyphicon glyphicon-remove form-control-feedback"></span>
                        <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span> -->
                    </div>
                </div>
                <div class="col-xs-3" style="padding-top: 20px; padding-bottom: 20px;" @click="refreshCode">
                    <s-identify :identifyCode="identifyCode" />
                    <span style="padding-top: 20px">点击图片刷新</span>
                </div>
            </div>
            <div class="form-group">
                <input class="form-control btn btn-success" id="submit" value="立即注册"
                       type="submit">
            </div>
            <div class="form-group">
                <input value="重置" id="reset" class="form-control btn btn-danger" type="reset">
            </div>
        </form>
    </div>
  </div>
</div>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
import SIdentify from '@/components/controls/identify';
import "../assets/js/register.js";
export default {
  name: "Register",
  components: {
    NavigatorBar,
    SIdentify
  },
  data() {
    return {
      isdisabled: true,
      username: "",
      password: "",
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  computed: {
    checkInputValue: function() {
      return "" !== this.username && "" !== this.password;
    }
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  }
};
</script>

<style>
.form_content {
  width: 40%;
  margin: 50px auto;
}
.container {
  margin-top: 30px;
}
</style>
