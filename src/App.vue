<template>
<div id="app" class="root">
  <router-view />
  <footer class="footer navbar-fixed-bottom">
    <ul class="nav navbar-nav">
      <li>友情链接</li>
      <li> | </li>
      <li>版权信息</li>
    </ul>
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
.root {
  background-color: #FCFCFE;
  width: 1024px;
  margin: 0px auto;
  min-height: 780px;
}
.footer {
  background-color: #FCFCFE;
  width: 1024px;
  margin: 0px auto;
}
.list-row {
height: 40px;
padding: 12px 3%;
line-height: 29px;
}
.list-body {
  height: 29px;
}
.list-body .list-header {
border-bottom: 1px solid #f5f5f5;
font-size: 13px;
font-weight: bold;
color: #888;
}
.list-body .list-row {
padding: 12px 2%;
/*border-bottom: 2px dotted #f5f5f5;*/
color: #666;
}
</style>
