<template>
<div class = "root">
	<navigator-bar :navInfos="naviLists"/>
	<form class="form_content">
        <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" name="username" />
        </div>
        <div class="form-group">
            <label>密码</label>
            <input type="password" class="form-control" name="email" />
        </div>
        <div class="form-group">
            <button type="submit" name="submit" class="btn btn-primary">登录</button>
        </div>
    </form>
</div>
</template>

<script>
import NavigatorBar from '@/components/NavigatorBar';
export default {
  name: 'Loging',
  components: {
    NavigatorBar
  },
  data () {
    return {
		naviLists: [{
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
  }
}
}
</script>

<style>
.form_content {
	width: 40%;
	margin: 50px auto;
}
</style>
