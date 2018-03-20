<template>
	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid">
		<div class="navbar-header">
			<img src="../assets/logo.png" />
		</div>
		<div>
			<!--<ul class="nav navbar-nav">
				<router-link tag="li" id="nav0" to="/" v-bind:class="'nav0' === activeId ? 'active': ''"><a>校园招聘</a></router-link></li>
				<router-link tag="li" id="nav1" to="/preach" v-bind:class="'nav1' === activeId ? 'active': ''"><a>校园宣讲会</a></router-link>
				<router-link tag="li" id="nav2" to="/internship" v-bind:class="'nav2' === activeId ? 'active': ''"><a>实习</a></router-link>
				<router-link tag="li" id="nav3" to="/jobhunting" v-bind:class="'nav3' === activeId ? 'active': ''"><a>求职学院</a></router-link>
			</ul>-->
			<ul class="nav navbar-nav">
				<router-link tag="li" :id="list.id" :to="list.to" v-for="list in naviLists" :class="list.className"><a>{{list.text}}</a></router-link></li>
			</ul>

		</div>
		<ul class="nav navbar-nav navbar-right"> 
		        	<li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li> 
			<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li> 
		</ul>
		</div>
	</nav>
</template>
<script>
export default {
  name: 'Navigator',
  data () {
    return {
      naviLists: [
      	{id: "CampusRecruitment"+ "_id", text: "校园招聘", to: "/", className:"active"},
      	{id: "Preach"+ "_id", text: "校园宣讲会", to: "/preach", className:""},
      	{id: "Intership"+ "_id", text: "实习", to: "/internship", className:""},
      	{id: "JobHunting"+ "_id", text: "求职学院", to: "/jobhunting", className:""}
      ],
      activeId:"Intership_id"
    }
  },
  mounted: function(){
  	this.activeId = "CampusRecruitment";
  },
  methods: {
       setActive: function(id){
       	this.activeId = id;
       }  
  }
}
</script>

<style>
@import 'http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css'

</style>