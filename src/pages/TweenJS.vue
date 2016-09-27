<template>
  <div class="tweenjs sonpages">
    <div class="content">
      <div class="banner">
        <div class="container">
          <br><br> <br><br>
          <h1 class="header center">
            <img class="image" src="../assets/images/sonpages/tweenjs-logo.svg">
          </h1>
          <h6 class="center">TweenJS类库主要用来调整和动画HTML5和Javascript属性，

            <br><br>提供了简单并且强大的tweening接口。
          </h6>
          <br>
          <div class="row center">
            <a target="_blank" href="https://github.com/CreateJS/TweenJS/tree/master/lib" class="btn waves-effect waves-light btn-createjs">下载</a>
            <a href="http://www.createjs.cc/src/docs/tweenjs/index.html" class="btn waves-effect waves-light btn-createjs">api文档</a>
            <a target="_blank" href="https://github.com/CreateJS/TweenJS" class="btn waves-effect waves-light btn-createjs"><i class="fa fa-github icon-2x"></i></a>
          </div> <br><br> <br>
        </div>
      </div>

      <section class="details_info">
        <p class="description">TweenJS是使用JavaScript中的一个简单的补间动画库。它的开发与EaselJS库很好的整合，但不依赖于或特定于它。 它支持数字对象的属性和CSS样式属性赋值。
          <br>
          <br>API很简单但很强大，因此很容易通过链接命令创建复杂的项目。</p>
        <ul class="feature_bullets">
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>应用缓和与延迟</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>数字或非数字</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>多序列的Tweens</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>支持的CSS属性</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>常见的显示功能方法</li>
        </ul>
      </section>

      <section class="thedemo">
        <div class="library_demo_iframe_container">
          <iframe class="library_demo_iframe" src="http://createjs.cc/src/assets/demos/tweenjs/Tween_Circles.html" frameborder="0" scrolling="no"></iframe>
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
    title:"动画库tween.js--常用的运动算法",
    subtitle:"介绍动画库tween.js--常用的运动算法...",
    time:"2015-03-13",
    url:"http://www.gbtags.com/gb/share/4775.htm"
  },
  {
    title:"TweenJS画布类库基础使用（二）",
    subtitle:"使用 Bitmap类可以非常方便的处理图片，Bitmap可以用来代表任何形式...",
    time:"2015-03-17",
    url:"http://www.gbtags.com/gb/share/4800.htm"
  },
  {
    title:"TweenJS生成鼠标控制的游戏动画人物",
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

@import "../assets/styles/sonPages"

</style>
