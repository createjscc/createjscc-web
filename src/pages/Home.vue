<template>
  <div class="home">
    <!-- 海报 -->
    <div class="banner">
      <div class="container">
        <div class="text">
          <p>CreateJS是基于HTML5开发的一套模块化的库和工具。<br>
            基于这些库，可以非常快捷地开发出基于HTML5的游戏、动画和交互应用。</p>
          <a class="btn waves-effect waves-light orange z-depth-2" href="">快速入门</a>
        </div>
      </div>
    </div>

    <!-- 公告 -->
    <div class="notices">
      <div class="container">
        <div class="notices-box">
          <el-row :gutter="20">
            <el-col :span="5"><div class="grid-content bg-purple">CreateJS交流群：320648191</div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple">CreateJS官网：<a target="_blank" href="http://createjs.com">createjs.com</a></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><a target="_blank" href="http://www.ajexoop.com/wordpress/">createjs 技术博客</a></div></el-col>
            <a href="https://github.com/CreateJS" target="_blank" class="github"><i class="fa fa-github fa-2x"></i></a>
          </el-row>
        </div>
      </div>
    </div>

    <!-- 菜单 -->
    <div class="carnavs">
      <div class="container">
        <el-row>
          <el-col :span="6" v-for="(course, index) in arr">
            <el-card :body-style="{ padding: '0px' }">
              <img v-bind:src=course.image class="image">
              <div style="padding: 14px; padding-top:4px">
                <div class="bottom clearfix">
                  <p class="time">{{course.details}}</p>
                  <div class="btns">
                    <a v-bind:href=course.url1><el-button :plain="true" type="success">API</el-button></a>
                    <router-link v-bind:to=course.url2><el-button :plain="true" type="success">资源</el-button></router-link>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 使用工作流 -->
    <div class="uses">
      <div class="container">
        <el-row>
          <el-col :span="4">
            <img src="../assets/images/flashcc-icon-color.png" alt="">
          </el-col>
          <el-col :span="12" :offset="2">
            <p>
               在 Adobe Animate 使用HTML5标签元素的功能，创建接口，动画，和资源库，并可以直接导出可读性强的，高效的 CreateJS 代码。
            </p>
            <p>
               ZOë是一个AIR应用出口SWF动画作为EaselJS spritesheets用于画布和CSS。保持帧标签、重用相似帧及更多功能!
            </p>
            <p>
              我们提供更多的方法来提高您的工作流，请访问我们的
              <a href="">协作工具</a>。
            </p>
          </el-col>
          <el-col :span="4" :offset="2">
            <img src="../assets/images/zoe-icon-color.svg" alt="">
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 项目demo -->
    <div class="cases">
      <div class="container">

        <el-tabs :active-name="activeName">
          <el-tab-pane label="国外项目" name="first">
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
                       <a><i class="fa fa-ellipsis-v pull-right"></i></a>
                     </span>
                     <p>{{item.subtitle}}</p>
                   </div>
                   <div class="card-reveal">
                     <span class="card-title grey-text text-darken-4">
                       <a target="_blank" v-bind:href=item.url>{{item.title}}</a>
                         <i class="fa fa-close pull-right"></i>
                      </span>
                     <p>{{item.subtitle}}</p>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="国内项目">
            <div class="row">
              <div class="col s12">
                <div class="col s4" v-for="(item, index) in chinas">
                  <div class="card">
                   <div class="card-image waves-effect waves-block waves-light">
                     <a target="_blank" v-bind:href=item.url><img class="activator" v-bind:src=item.image></a>
                   </div>
                   <div class="card-content">
                     <span class="card-title activator grey-text text-darken-4">
                       <a target="_blank" v-bind:href=item.url>{{item.title}}</a>
                       <a><i class="fa fa-ellipsis-v pull-right"></i></a>
                     </span>
                     <p>{{item.subtitle}}</p>
                   </div>
                   <div class="card-reveal">
                     <span class="card-title grey-text text-darken-4">
                       <a target="_blank" v-bind:href=item.url>{{item.title}}</a>
                         <i class="fa fa-close pull-right"></i>
                      </span>
                     <p>{{item.subtitle}}</p>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="开源项目">
            <div class="row">
              <div class="col s12">
                <div class="col s4" v-for="(item, index) in source">
                  <div class="card">
                   <div class="card-image waves-effect waves-block waves-light">
                     <a target="_blank" v-bind:href=item.url><img class="activator" v-bind:src=item.image></a>
                   </div>
                   <div class="card-content">
                     <span class="card-title activator grey-text text-darken-4">
                       <a target="_blank" v-bind:href=item.url>{{item.title}}</a>
                       <a><i class="fa fa-ellipsis-v pull-right"></i></a>
                     </span>
                     <p>{{item.subtitle}}</p>
                   </div>
                   <div class="card-reveal">
                     <span class="card-title grey-text text-darken-4">
                       <a target="_blank" v-bind:href=item.url>{{item.title}}</a>
                         <i class="fa fa-close pull-right"></i>
                      </span>
                     <p>{{item.subtitle}}</p>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      <div class="more-btn center">
        <router-link to="/demos"><el-button :plain="true" type="success">更多案例</el-button></router-link>
      </div>
      </div>
    </div>

    <!-- 推荐文章 -->
    <div class="updates">
      <div class="container">
        <h3 class="center">推荐文章</h3>
        <div class="articles">
          <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-content">
                  <span class="card-title">新手写createjs时容易遇到的坑（持续更新）</span>
                    <p>createjs作为刚出来的东西，坑是非常多的，下面我来讲下常见的坑和解决方法...</p>
                </div>
                <div class="card-action">
                  <span class="time">2016年3月21日</span>
                  <a class="pull-right" target="_blank" href="http://www.ajexoop.com/wordpress/2016/03/%E6%96%B0%E6%89%8B%E5%86%99createjs%E6%97%B6%E5%AE%B9%E6%98%93%E9%81%87%E5%88%B0%E7%9A%84%E5%9D%91%EF%BC%88%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0%EF%BC%89.html">阅读本文</a>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="card">
                <div class="card-content">
                  <span class="card-title">createjs进阶—更好的利用flash cc进行项目实战</span>
                    <p>本人一直认为createjs的成功之处就在于使用flashcc进行开发不仅非常方便，而且非常迅速。动画师自己可以替换资源来看动画做出来的效果...</p>
                </div>
                <div class="card-action">
                  <span class="time">2016年3月22日</span>
                  <a class="pull-right" target="_blank" href="http://www.ajexoop.com/wordpress/2016/03/createjs%E8%BF%9B%E9%98%B6-%E6%9B%B4%E5%A5%BD%E7%9A%84%E5%88%A9%E7%94%A8flash-cc%E8%BF%9B%E8%A1%8C%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98.html">阅读本文</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 加入讨论 -->
    <div class="community">
      <div class="container">
        <h3 class="center">加入讨论</h3>
        <div class="community-box">
          <a target="_blank" href="https://github.com/CreateJS"><el-button :plain="true" type="primary">ISSUES</el-button></a>
          <a target="_blank" href="http://stackoverflow.com/questions/tagged/createjs"><el-button :plain="true" type="primary">QUESTIONS</el-button></a>
          <a target="_blank" href="https://www.reddit.com/r/CreateJS"><el-button :plain="true" type="primary">DISCUSSION</el-button></a>
          <a target="_blank" href="https://segmentfault.com/t/createjs"><el-button :plain="true" type="primary">SegmentFault</el-button></a>
          <a target="_blank" href="http://createjs.cc/wenda"><el-button :plain="true" type="primary">提问问题</el-button></a>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="sass" scoped>
.banner{
  background: transparent url("../assets/images/bg_banner.jpg") no-repeat center;
  background-color: #090b1a;
  background-size: cover;
  height: 640px;
  position: relative;
  text-align: center;
  min-width: 1160px;
}
@import "../assets/styles/Home";
</style>

<script>

var arr = new Array();
arr =[{
    image:"../src/assets/images/easeljs-logo.svg",
    title:"EaselJS",
    details:"EaselJS提供了一套完整的，层次化的显示列表的互动方式 来更简单的处理HTML5画布。",
    url1:"http://www.createjs.cc/src/docs/easeljs/",
    url2:"/easeljs"
  },
  {
    image:"../src/assets/images/tweenjs-logo.svg",
    title:"TweenJS",
    details:"TweenJS类库主要用来调整和动画HTML5和Javascript属性。提供了简单并且强大的tweening接口。",
    url1:"http://www.createjs.cc/src/docs/tweenjs/",
    url2:"/tweenjs"
  },
  {
    image:"../src/assets/images/soundjs-logo.svg",
    title:"SoundJS",
    details:"SoundJS提供了简单而强大的API来处理音频。通过插件来执行实际的音频实现，无需学习平台相关的知识，简单直接的处理声音。",
    url1:"http://www.createjs.cc/src/docs/soundjs/",
    url2:"/soundjs"
  },
  {
    image:"../src/assets/images/preloadjs-logo.svg",
    title:"PreloadJS",
    details:"PreloadJS是一个用来管理和协调相关资源加载的类库，它可以方便的帮助你预先加载相关资源，例如：图片、文件、音频、数据等等。",
    url1:"http://www.createjs.cc/src/docs/preloadjs/",
    url2:"/preloadjs"
  }
]

var foreign = new Array();
foreign = [{
    title:"成为王牌特工",
    subtitle:"你有什么需要成为王牌特工？在这个互动世界中完成任务，以赚取你的方式。",
    image:"../src/assets/images/cases/foreign/kingsmanknight.jpg",
    url:"http://kingsmanmovie.com/becomeakingsman/code"
  },
  {
    title:"野花",
    subtitle:"你想通过发送一个独特的野花在情人节表达。",
    image:"../src/assets/images/cases/foreign/wildflower.jpg",
    url:"http://wildflower.resn.co.nz/"
  },
  {
    title:"耐克GEC kendini",
    subtitle:"一个互动的、好玩的视频体验促进女子2015夏季风格。游客可以购物，分享和获得灵感及这个反应的网站。",
    image:"../src/assets/images/cases/foreign/nikelidyana.jpg",
    url:"http://kingsmanmovie.com/becomeakingsman/code"
  }]

var chinas = new Array();
chinas = [{
    title:"让想象绽放",
    subtitle:"腾讯互动娱乐2015年度发布会。",
    image:"../src/assets/images/cases/chinas/txhdyl.jpg",
    url:"http://up.qq.com/2015/imagination/"
  },
  {
    title:"you are fired 单词游戏",
    subtitle:"酷语时代教育科技有限公司产品-全球说app里的记单词游戏，多种学习语言，多种学习玩法。",
    image:"../src/assets/images/cases/chinas/dcyx.jpg",
    url:"http://game.200h.com/youarefired/"
  },
  {
    title:"战斗吧梦梦",
    subtitle:"由杭州电魂网络科技股份有限公司旗下电魂梦平台推出的一款HTML5小游戏。",
    image:"../src/assets/images/cases/chinas/zdbmm.jpg",
    url:"http://action.17m3.com/17m3/mobile/h5game/20151110/zhandoumm/"
  }]

var source = new Array();
source = [
  {
    title:"耐克GEC kendini",
    subtitle:"一个互动的、好玩的视频体验促进女子2015夏季风格。游客可以购物，分享和获得灵感及这个反应的网站。",
    image:"../src/assets/images/cases/foreign/nikelidyana.jpg",
    url:"http://kingsmanmovie.com/becomeakingsman/code"
  }]
console.log(arr)
export default {
  data () {
    return {
      arr,
      activeName: "first",
      foreign,
      chinas,
      source
    }
  },
  methods: {

  }
}
</script>
