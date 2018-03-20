<template>
	<div>
		<nav class="navbar navbar-default" role="navigation">
			<div class="container-fluid">
			<div class="navbar-header">
				<img src="../assets/logo.png" />
			</div>
			<div>
				<ul class="nav navbar-nav">
					<router-link tag="li" id="nav0" to="/" class="active"><a>校园招聘</a></router-link></li>
					<router-link tag="li" id="nav1" to="/preach"><a>校园宣讲会</a></router-link>
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
			          		<input type="text" class="form-control" placeholder="根据学校名称搜索实习机会" />
			          	<input type="text" name="date" class="form-control date" id="myDate"/><span class="add-on"><i class="icon-th"></i></span>
			        	</div>
			 </form>
		</div>
		
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2">城市</div>
				<div class="col-md-2">招聘会</div>
				<div class="col-md-2">时间</div>
			</div>

			<div class="row" v-for="list in lists">
				<div class="col-md-2">{{ list.city }}</div>
				<div class="col-md-2">{{ list.name }}</div>
				<div class="col-md-2">{{ list.date }}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'CampusRecruitment',
  data () {
    return {
      lists: [
      	{city: "北京", name: "北京联通2018春季招聘会", date: "2018-03-12"},
      	{city: "天津", name: "天津2018春季招聘会", date: "2018-03-12"},
      	{city: "上海", name: "肯德基2018招聘会", date: "2018-03-12"},
      	{city: "杭州", name: "西湖2018春季招聘会", date: "2018-03-12"},
      	{city: "宁波", name: "宁波2018春季招聘会", date: "2018-03-12"},
      ]
    }
  },
  // components: {
  //   "vue-datetime-picker": require("vue-datetime-picker")
  // },
  // methods: {
  //   formatDatetime: function(datetime) {
  //     if (datetime === null) {
  //       return "[null]";
  //     } else {
  //       return datetime.format("YYYY-MM-DD HH:mm:ss");
  //     }
  //   },
  //   formatDate: function(date) {
  //     if (date === null) {
  //       return "[null]";
  //     } else {
  //       return date.format("YYYY-MM-DD");
  //     }
  //   },
  //   formatTime: function(time) {
  //     if (time === null) {
  //       return "[null]";
  //     } else {
  //       return time.format("HH:mm:ss");
  //     }
  //   },
  //   onStartDatetimeChanged: function(newStart) {
  //     var endPicker = this.$.endPicker.control;
  //     endPicker.minDate(newStart);
  //   },
  //   onEndDatetimeChanged: function(newEnd) {
  //     var startPicker = this.$.startPicker.control;
  //     startPicker.maxDate(newEnd);
  //   }
  // },
  mounted: function () {
    // `this` 指向 vm 实例
    // alert("vue created " + $("#myDate").getId());
    // let el =  $("#myDate");
    // let el2 = document.getelementbyid("myDate").
    // alert(el.attr("type"));
    // alert(el.attr("name"));
    // alert(el2);
    // alert(el2.datetimepicker );
    $("#myDate").datetimepicker({//选择年月日
　　　　　　format: 'yyyy-mm-dd',
　　　　　　language: 'zh-CN',
　　　　　　weekStart: 1,
　　　　　　todayBtn: 1,//显示‘今日’按钮
　　　　　　autoclose: 1,
　　　　　　todayHighlight: 1,
　　　　　　startView: 2,
　　　　　　minView: 2,  //Number, String. 默认值：0, 'hour'，日期时间选择器所能够提供的最精确的时间选择视图。

　　　　　　clearBtn:true,//清除按钮

　　　　　　forceParse: 0
　　　　});
  }
}
</script>

<style>
@import "../assets/bootstrap-datetimepicker.min.css";
@import 'http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css';
ul.nav {
	margin-top: 22px
}
</style>