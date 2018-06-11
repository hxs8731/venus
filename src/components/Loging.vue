<template>
<div class="root">
	<navigator-bar :navInfos="naviLists"/>
	<div class="form_content">
      <div class="form-group">
          <label>用户名</label>
          <input type="text" class="form-control" ref="login_user_name" v-model="username" />
      </div>
      <div class="form-group">
          <label>密码</label>
          <input type="password" class="form-control" ref="login_password" v-model="password" />
      </div>
      <div class="form-group">
          <button type="submit" @click="doSubmit" :class="checkInputValue ? 'btn btn-primary' : 'btn btn-disabled'">登录</button>
      </div>
  </div>
</div>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
export default {
  name: "Loging",
  components: {
    NavigatorBar
  },
  data() {
    return {
      isdisabled: true,
      username: "",
      password: "",
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
      ]
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
.form_content {
  width: 40%;
  margin: 50px auto;
}
</style>
