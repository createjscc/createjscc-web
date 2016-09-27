
<template>
  <div class="tools">
    <div class="content">
      <div class="banner banner_bg-createjs">
        <div class="container">
          <br><br>
          <h1 class="header center">
            <i class="el-icon-setting"></i> 协助工具
          </h1>
          <h6 class="center">
              这里列表出所有协助创建 CreateJS 相关的工具软件。
            <br><br>
          </h6>
          <br>
        </div>
      </div>

    <div class="mycard-main tools-main">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <div class="col s4" v-for="(item, index) in foreign">
              <div class="card">
               <div class="card-image waves-effect waves-block waves-light">
                 <a target="_blank" v-bind:href=item.url><img class="activator" v-bind:src=item.image></a>
               </div>
               <div class="card-content">
                 <span class="card-title activator grey-text text-darken-4">
                   <a target="_blank" v-bind:href=item.url>{{item.title}}</a>
                 </span>
                 <p class="subtitle">{{item.subtitle}}</p>
                 <p class="card-btn">
                   <a v-bind:href=item.url1><el-button :plain="true" type="success">官方介绍</el-button></a>
                   <a v-bind:href=item.url2><el-button :plain="true" type="success">点击下载</el-button></a>
                 </p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>

  </div>
</template>

<script>
var foreign = new Array();
foreign = [{
    title:"Adobe Animate",
    subtitle:"在 Adobe Animate 使用HTML5标签元素的功能，创建接口，动画，和资源库，并可以直接导出可读性强的，高效的 CreateJS 代码。",
    image:"../src/assets/images/flashcc-icon-color.png",
    url1:"https://helpx.adobe.com/animate/using/creating-publishing-html5-canvas-document.html",
    url2:""
  },
  {
    title:"Zoë",
    subtitle:"ZOë是一个AIR应用出口SWF动画作为EaselJS spritesheets用于画布和CSS。保持帧标签、重用相似帧及更多功能!",
    image:"../src/assets/images/zoe-icon-color.svg",
    url1:"http://www.createjs.com/zoe",
    url2:""
  },
  {
    title:"Animate AdHelper",
    subtitle:"一个方便的辅助工具,开发人员面临解决一些常见的挑战在构建与Adobe动画广告。",
    image:"../src/assets/images/banner_ads-icon.svg",
    url1:"http://createjs.com/html5ads/",
    url2:"https://github.com/CreateJS/html5ads/"
  },
  {
    title:"Microsoft Edge Virtual Machines",
    subtitle:"免费虚拟机来帮助测试微软边缘以及旧版本IE的Mac,Linux和Windows。",
    image:"../src/assets/images/tool-edge.svg",
    url1:"https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/",
    url2:"https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/"
  },
  {
    title:"TexturePacker",
    subtitle:"TexturePacker GUI和命令行工具创建雪碧图。",
    image:"../src/assets/images/texturepacker.png",
    url1:"https://www.codeandweb.com/texturepacker",
    url2:""
  },
  {
    title:"NanoFL",
    subtitle:"设计动画图片、影片剪辑和游戏。与JavaScript添加交互性。发布到CreateJS",
    image:"../src/assets/images/tool-nanoFL.png",
    url1:"http://nanofl.com/",
    url2:""
  }

]

  export default {
    data () {
      return {
        foreign
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/styles/sonPages";

</style>
