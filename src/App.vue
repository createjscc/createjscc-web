<template>
  <div id="app">

    <WXHeader></WXHeader>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

    <WXFooter></WXFooter>
  </div>
</template>

<script>
import WXHeader from './components/WXHeader.vue'
import WXFooter from './components/WXFooter.vue'

export default {
  components: {
    WXHeader,
    WXFooter
  }
}
</script>

<style>
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  position: relative;
}
body:before {
    z-index: -1;
    position: absolute;
    content: "";
    width: 104px;
    height: 27px;
    top: 180px;
    left: 50%;
    margin-left: -72px;
    background: url(./assets/images/loading.gif) no-repeat
}
*{
  padding: 0;
  margin: 0;
}
.el-menu-item.is-active a{
  color: #ff9800;
}
.container, .page-container {
    width: 1140px;
    margin: 0 auto;
}
.cases .el-tabs__header{
  text-align: center;
}
.cases .el-tabs__header .el-tabs__item{
  display: inline-block;
  float: none;
}
.cases .el-tabs__active-bar{
  display: none;
}
.cases .el-tabs{
  display: block;
}
.cases .el-tabs__item.is-active{
  color: #ff9800;
}
</style>
