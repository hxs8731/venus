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
				<router-link tag="li" id="nav1" to="/preach"><a>校园宣讲会</a></router-link>
				<router-link tag="li" id="nav2" to="/internship"><a>实习</a></router-link>
				<router-link tag="li" id="nav3" to="/jobhunting" class="active"><a>求职学院</a></router-link>
			</ul>
		</div>
		<ul class="nav navbar-nav navbar-right"> 
		        	<li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li> 
			<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li> 
		</ul>
		</div>
	</nav>
		<p>求职学院</p>
	</div>
</template>
<script>
export default {
  name: 'JobHunting',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import 'http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css'
</style>