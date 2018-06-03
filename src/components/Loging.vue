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
        // ,
        // {
        //   text: "实习",
        //   to: "/internship",
        //   className: "nav-pills",
        //   id: "internship"
        // },
        // {
        //   text: "求职学院",
        //   to: "/jobhunting",
        //   className: "nav-pills",
        //   id: "jobhunting"
        // }
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
        let options = {
          username: this.username,
          password: this.password
        }
        this.http.get(this._global.USER_LOGIN_ACTION, {
          params: options
        }).then((res) => {
          console.log(`doSubmit callback ${JSON.stringify(res)}`);
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
