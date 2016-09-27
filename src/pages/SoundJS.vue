<template>
  <div class="soundjs sonpages">
    <div class="content">

      <div class="banner">
        <div class="container">
          <br><br> <br><br>
          <h1 class="header center">
            <img class="image" src="../assets/images/sonpages/soundjs-logo.svg">
          </h1>
          <h6 class="center">SoundJS提供了简单而强大的API来处理音频。
            <br><br>通过插件来执行实际的音频实现，简单直接的处理声音。
          </h6>
          <br>
          <div class="row center">
            <a target="_blank" href="https://github.com/CreateJS/SoundJS/tree/master/lib" class="btn waves-effect waves-light btn-createjs">下载</a>
            <a href="http://www.createjs.cc/src/docs/soundjs/index.html" class="btn waves-effect waves-light btn-createjs">api文档</a>
            <a target="_blank" href="https://github.com/CreateJS/SoundJS" class="btn waves-effect waves-light btn-createjs"><i class="fa fa-github icon-2x"></i></a>
          </div> <br><br> <br>
        </div>
      </div>

      <section class="details_info">
        <p class="description">SoundJS摘要HTML5的声音实现，使添加一致的跨浏览器的声音到您的游戏或丰富的经验更容易。
          <br>
          <br>您可以查询的功能，然后指定和优先级什么样的接口，插件和功能是利用特定的设备或浏览器。</p>
        <ul class="feature_bullets">
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>检测功能</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>优先考虑回退</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>减少不明确的工作</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>支持 Edge 案例</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>杠杆测试解决方案</li>
        </ul>
      </section>

      <section class="thedemo">
        <div class="library_demo_iframe_container">
          <iframe class="library_demo_iframe" src="http://createjs.cc/src/assets/demos/soundjs/02_PlayOnClick.html" frameborder="0" scrolling="no"></iframe>
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
    title:"SoundJS的基础使用",
    subtitle:"SoundJS提供了简单而强大的API来处理音频，大多数情况下这个类库都静态方式使用（无需创建实例）...",
    time:"2015-03-13",
    url:"http://www.gbtags.com/gb/gbtutorials/543.htm"
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
