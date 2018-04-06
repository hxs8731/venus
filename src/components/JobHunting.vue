<template>
	<div>
	<navigator-bar :navInfos="naviLists" />
  <search-bar />
		<h1>求职学院</h1>
	</div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import NavigatorBar from '@/components/NavigatorBar'
export default {
  name: 'JobHunting',
	components: {
    NavigatorBar,
    SearchBar
  },
  data () {
    return {
		naviLists: [
			{text: "校园招聘", to: "/", className:"nav-pills"},
			{text: "校园宣讲会", to: "/preach", className:"nav-pills"},
			{text: "实习", to: "/internship", className:"nav-pills"},
			{text: "求职学院", to: "/jobhunting", className:"active nav-pills"}
		],
    }
  }
}
</script>

<style>
@import 'http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css'
</style>
