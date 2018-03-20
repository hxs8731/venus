<template>
	<div>
		<nav class="navbar navbar-default" role="navigation">
			<div class="container-fluid">
			<div class="navbar-header">
				<img src="../assets/logo.png" />
			</div>
			<div>
				<ul class="nav navbar-nav">
					<router-link tag="li" id="nav0" to="/"><a>校园招聘</a></router-link></li>
					<router-link tag="li" id="nav1" to="/preach" class="active"><a>校园宣讲会</a></router-link>
					<router-link tag="li" id="nav2" to="/internship"><a>实习</a></router-link>
					<router-link tag="li" id="nav3" to="/jobhunting"><a>求职学院</a></router-link>
				</ul>
			</div>
			<ul class="nav navbar-nav navbar-right"> 
			        	<li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li> 
				<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li> 
			</ul>
			</div>
		</nav>
		<div class="container-fluid">
			<form class="navbar-form navbar-left">
			        <div class="form-group">
			          	<input type="text" class="form-control" placeholder="根据学校名称搜索宣讲会">
			        </div>
			        <div class="form-group">
			        	
			        </div>
			        <button type="submit" class="btn btn-default">搜索</button>
			 </form>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2">公司</div>
				<div class="col-md-2">学校</div>
				<div class="col-md-2">举办时间</div>
				<div class="col-md-2">举办地点</div>
				<div class="col-md-2">发布时间</div>
			</div>
			<div class="row" v-for="list in lists">
				<div class="col-md-2">{{ list.company }}</div>
				<div class="col-md-2">{{ list.university }}</div>
				<div class="col-md-2">{{ list.begin_time }}</div>
				<div class="col-md-2">{{ list.address }}</div>
				<div class="col-md-2">{{ list.publish_time }}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'Preach',
  data () {
    return {
      lists: [
      	{company: "浙江朝晖过滤技术有限公司", university: "浙江工业大学", begin_time: "2018-03-12", address:"屏风校区－广B304", publish_time: "2018-03-12 15:08", company_url: "http://www.career.zju.edu.cn/ejob/zczphxxlogin.do?pkValue=18041", university_url: "http://www.zjut.edu.cn"},
      	{company: "公司1", university: "浙江大学", begin_time: "2018-03-12", address:"屏风校区－广B304", publish_time: "2018-03-12 15:08", company_url: "http://www.career.zju.edu.cn/ejob/zczphxxlogin.do?pkValue=18041", university_url: "http://www.zjut.edu.cn"},
      	{company: "公司2", university: "重庆大学", begin_time: "2018-03-12", address:"屏风校区－广B304", publish_time: "2018-03-12 15:08", company_url: "http://www.career.zju.edu.cn/ejob/zczphxxlogin.do?pkValue=18041", university_url: "http://www.zjut.edu.cn"},
      	{company: "公司3", university: "浙江工商大学", begin_time: "2018-03-12", address:"屏风校区－广B304", publish_time: "2018-03-12 15:08", company_url: "http://www.career.zju.edu.cn/ejob/zczphxxlogin.do?pkValue=18041", university_url: "http://www.zjut.edu.cn"},
      	{company: "公司4", university: "四川大学", begin_time: "2018-03-12", address:"屏风校区－广B304", publish_time: "2018-03-12 15:08", company_url: "http://www.career.zju.edu.cn/ejob/zczphxxlogin.do?pkValue=18041", university_url: "http://www.zjut.edu.cn"}
      ]
    }
  }
}
</script>

<style>
@import 'http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css'
</style>