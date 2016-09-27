
<template>
  <div class="wxheader">
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="6">
          <h1 class="logo"><router-link to="/">CreateJS中文网</router-link></h1>
        </el-col>
        <el-col :span="18">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><a href="http://createjs.cc/wenda">问答社区</a></el-menu-item>
            <el-dropdown text="强力资源" type="text" :icon-separate="false">
              <el-dropdown-item>文章区</el-dropdown-item>
              <el-dropdown-item>视频区</el-dropdown-item>
              <el-dropdown-item>常见问题</el-dropdown-item>
              <el-dropdown-item>大牛养成记</el-dropdown-item>
            </el-dropdown>
            <el-menu-item index="8"><router-link to="/demos">案例</router-link></el-menu-item>
            <el-menu-item index="7"><router-link to="/tools">协作工具</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/preloadjs">PreloadJS</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/soundjs">SoundJS</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/tweenjs">TweenJS</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to="/easeljs">EaselJS</router-link></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-menu a{
  color: #4c6575;
}
.wxheader{
  position: relative;
  z-index: 4;
  border-top: 2px solid #ff9800;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
}
.logo{
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}
.logo a{
  color: #333;
  text-decoration: none;
}
.el-menu{
  background-color: #fff;
}
.el-menu--horizontal .el-menu-item{
  float: right;
}
.el-menu--horizontal .el-dropdown{
  float: right;
  line-height: 60px;
  color: #333;
}
.el-menu .el-button-text{
  color: #333;
}
.el-menu .el-button-text:active{
  background: #fff;
}
.el-menu--horizontal>.el-menu-item:hover{
  border-bottom:3px solid #ff9800
}
.el-menu-item.is-active{
  color: #ff9800;
}
.el-menu a{
  display: block;
}
</style>
