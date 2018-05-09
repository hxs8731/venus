<template>
<div id="app" class="root">
  <router-view />
  <footer class="footer">
    <!-- <ul class="nav navbar-nav－center">
      <li>友情链接</li>
      <li> | </li>
      <li>版权信息</li>
    </ul> -->
    <p class="nav">中国领先的校园招聘平台 © Copyright 2016  |  xxICP备13010980号-4  </p>
    <p class="nav">杭州寻龙信息技术有限公司 All Rights Reserved</p>
  </footer>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css';
 *{
     border: none;
     outline:none;
     box-shadow: none;
}
a:focus {
    border: none;
    outline: none;
    box-shadow: none;
}
 div{border:none}
.root {
  width: 1208px;
  margin: 0px auto;
  min-height: 780px;
}
.footer {
  background-color: #3A3A3B;
  color: #DFDFDF;
  width: 1208px;
  height: 80px;
  margin: 0px auto;
}
.footer .nav {
    padding-top: 10px;
    text-align: center;
}
.row {
    clear: both;
    overflow: hidden; /*解决 float后*/
}
.list-row {
padding: 12px 3%;
line-height: 40px;
}
.list-body {
  height: 60px;
  border-bottom: 1px dotted #BCBCBC;
}
.list-title {
    height: 30px;
}
.gray {
  background-color: #EFEFEF;
}
.content-list {
    margin-top: 20px;
}
.list-title .list-header {
padding: 12px 3%;
height: 30px;
border-bottom: 1px solid #f5f5f5;
font-size: 13px;
font-weight: bold;
color: #888;
word-break:keep-all;       /* 不换行 */

white-space:nowrap;        /* 不换行 */

overflow:hidden;           /* 内容超出宽度时隐藏超出部分的内容 */

text-overflow:ellipsis;    /*溢出时显示省略标记...；需与overflow:hidden;一起使用*/
}
.list-body .list-row {
padding: 12px 2%;
/*border-bottom: 2px dotted #f5f5f5;*/
color: #666;

word-break:keep-all;       /* 不换行 */

white-space:nowrap;        /* 不换行 */

overflow:hidden;           /* 内容超出宽度时隐藏超出部分的内容 */

text-overflow:ellipsis;    /*溢出时显示省略标记...；需与overflow:hidden;一起使用*/
}
.no-data {
    height: 200px;
    text-align: center;
    margin-top: 30px;
}
</style>
