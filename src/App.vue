<template>
<div id="app" class="root">
  <router-view />
  <footer class="footer">
    <!-- <ul class="nav navbar-nav－center">
      <li>友情链接</li>
      <li> | </li>
      <li>版权信息</li>
    </ul> -->
    <p class="nav">中国领先的校园求职赋能平台 © Copyright 2018  |  浙ICP备18019378号  </p>
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
 body {
     background: #f1f4f9;
 }
.root {
  margin: 0px auto;
  min-height: 780px;
}
.footer {
  background-color: #0099cc;
  color: #FFF;
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
padding: 10px 2%;
line-height: 40px;
}
.list-body {
  height: 60px;
  border-bottom: 1px dotted #BCBCBC;
}
.list-title {
    /*height: 30px;*/
    background: #bedeea;
    /*background: rgba(255, 255, 255, 0.5);*/
}
.gap-right {
    margin-right: 8px;
}
.gray {
  background-color: #e3f5fc;
}
.content-foot {
  width: 80%;
  margin: 0px auto;
}
.content-list {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    background-color: #FFF;
    border: 8px solid #c9e2ec;
}
.list-title .list-header {
padding: 10px 2%;
/*height: 30px;*/
border-bottom: 1px solid #f5f5f5;
font-size: 14px;
font-weight: bold;
color: #666;
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
/* override boot strap css*/
.btn-primary {
    color: #fff;
    background-color: #0fa9dd;
    border-color: #2e6da4;
}

.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #DFDFDF;
}

.label-primary {
    background-color: #0fa9dd;
}

.pagination>.active>a,
.pagination>.active>a:focus,
.pagination>.active>a:hover,
.pagination>.active>span,
.pagination>.active>span:focus,
.pagination>.active>span:hover {
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #0fa9dd;
    border-color: #0fa9dd;
}

.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 0px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    /*border: 1px solid transparent;*/
    /*border-radius: 4px;*/
    border-radius: 0px;
}
</style>
