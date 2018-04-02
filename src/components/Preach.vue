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
			 <input type="text" class="form-control" v-model='school' placeholder="学校" />
			 <input type="text" class="form-control"v-model='city' placeholder="城市" />
			 <button type="submit" class="btn btn-default" @click="getInfoByWorkCityType(2, city, school)">搜索</button>
		 </div>
		</form>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2">公司</div>
				<div class="col-md-2">学校</div>
				<div class="col-md-2">举办时间</div>
				<div class="col-md-2">举办地点</div>
			</div>
			<div class="row" v-for="list in requestLists" @click="callLink(list.recruitUrl)">
				<div class="col-md-2">{{ list.companyName }}</div>
				<div class="col-md-2">{{ list.school }}</div>
				<div class="col-md-2">{{ list.xjTime }}</div>
				<div class="col-md-2">{{ list.teachInsAddress }}</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Preach',
		data () {
			let params = {
				"workType": 2,
				"city": "",
				"companyName": ""
			};

			this.getInfoByWorkCityType(params, (lists) => {
				this.requestLists = lists;
			});
			return {
				requestLists: [],
				school: "",
				city: "",
				companyName: "",
				time: ""
			}
  },
	methods: {
		doQueryList: (workType, city, companyName) => {
      let paramsObj = {
        "workType": workType,
        "city": city,
        "companyName": companyName
      };
      this.getInfoByWorkCityType(params, (lists) => {
        this.requestLists = lists;
      });
    }
	}
}
</script>

<style>
	@import 'http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css'
</style>
