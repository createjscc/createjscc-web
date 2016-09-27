<template>
  <div class="easeljs sonpages">
    <div class="content">

      <div class="banner">
        <div class="container">
          <br><br> <br><br>
          <h1 class="header center">
            <img class="image" src="../assets/images/sonpages/easeljs-logo.svg">
          </h1>
          <h6 class="center">一个JavaScript库,使HTML5 Canvas标签变得更简单。
            <br><br>用于创建游戏，生成艺术作品，和处理其他高级图形化等有着很友好的体验。
          </h6>
          <br>
          <div class="row center">
            <a target="_blank" href="https://github.com/CreateJS/EaselJS/tree/master/lib" class="btn waves-effect waves-light btn-createjs">下载</a>
            <a href="http://www.createjs.cc/src/docs/easeljs/index.html" class="btn waves-effect waves-light btn-createjs">api文档</a>
            <a target="_blank" href="https://github.com/CreateJS/EaselJS" class="btn waves-effect waves-light btn-createjs"><i class="fa fa-github icon-2x"></i></a>
          </div> <br><br> <br>
        </div>
      </div>

      <section class="details_info">
        <p class="description">EaselJS 具有丰富的图形和HTML5画布互动工作提供直接的解决方案。它提供了一个API，开发者熟悉JavaScript，但包含的情感。
          <br>
          <br>它由一个完整的，分层的显示列表，一个核心的交互模型，和辅助类，使工作与画布更容易。</p>
        <ul class="feature_bullets">
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>内容丰富的HTML5</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>画布显示对象</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>对象嵌套</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>支持鼠标键盘事件</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>常见的表示能力方法</li>
        </ul>
      </section>

      <section class="thedemo">
        <div class="library_demo_iframe_container">
          <iframe class="library_demo_iframe" src="http://createjs.cc/src/assets/demos/easeljs/SpriteSheet.html" frameborder="0" scrolling="no"></iframe>
        </div>
        <p class="font-default">这是一个动画例子，更多例子请看
          <a href="#/spritesheet">示例页面</a>。
        </p>
      </section>


      <section class="article section">
        <div class="container">
          <div class="row">
            <h2 class="center title">技术文章推荐</h2>

            <div class="col s12 m4" v-for="(item, index) in arr">
              <div class="card article-card">
                <div class="card-content">
                  <span class="card-title">{{item.title}}</span>
                  <p>{{item.subtitle}}</p>
                </div>
                <div class="card-info">
                  <span class="time">{{item.time}}</span>
                  <a class="pull-right" target="_blank" v-bind:href=item.url>阅读正文</a></div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>

  </div>
</template>


<script>
var arr = new Array();
arr = [{
    title:"EaselJS画布类库基础使用（一）",
    subtitle:"介绍HTML5类库套件createJS之一的EaselJS的基础使用，EaselJS用来帮助简化处理HTML5画布的相关功能...",
    time:"2015-03-13",
    url:"http://www.gbtags.com/gb/share/4775.htm"
  },
  {
    title:"EaselJS画布类库基础使用（二）",
    subtitle:"使用 Bitmap类可以非常方便的处理图片，Bitmap可以用来代表任何形式...",
    time:"2015-03-17",
    url:"http://www.gbtags.com/gb/share/4800.htm"
  },
  {
    title:"EaselJS生成鼠标控制的游戏动画人物",
    subtitle:"本节中将使用SpriteSheet和Sprite生成HTML5游戏中的动画人物形象使用SpriteSheet定义动画帧相关的图片...",
    time:"2015-03-19",
    url:"http://www.gbtags.com/gb/share/4817.htm"
  }]
  export default {
    data () {
      return {
        arr
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="sass" scoped>

@import "../assets/styles/sonPages";

</style>
