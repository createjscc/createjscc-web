<template>
  <div class="preloadjs sonpages">
    <div class="content">

      <div class="banner">
        <div class="container">
          <br><br> <br><br>
          <h1 class="header center">
            <img class="image" src="../assets/images/sonpages/preloadjs-logo.svg">
          </h1>
          <h6 class="center">PreloadJS是一个用来管理和协调相关资源加载的类库，
            <br><br>它可以方便的帮助你预先加载相关资源。
          </h6>
          <br>
          <div class="row center">
            <a target="_blank" href="https://github.com/CreateJS/PreloadJS/tree/master/lib" class="btn waves-effect waves-light btn-createjs">下载</a>
            <a href="http://www.createjs.cc/src/docs/preloadjs/index.html" class="btn waves-effect waves-light btn-createjs">api文档</a>
            <a target="_blank" href="https://github.com/CreateJS/PreloadJS" class="btn waves-effect waves-light btn-createjs"><i class="fa fa-github icon-2x"></i></a>
          </div> <br><br> <br>
        </div>
      </div>

      <section class="details_info">
        <p class="description">PreloadJS便于预先加载资源：图像、声音、数据、或其他的JS。

          <br>
          <br>它采用xhr2提供真正的进展信息可用时，或回落到标签加载和缓和的进步时，它不是。它允许多个队列，队列的多个连接，暂停，和更多。</p>
        <ul class="feature_bullets">
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>预加载数据和资源</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>通过xhr2报告进展</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>返回标签加载</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>多队列</li>
          <li class="feature_bullets-item">
            <i class="fa fa-check-square-o"></i>杠杆测试解决方案</li>
        </ul>
      </section>

      <section class="thedemo">
        <div class="library_demo_iframe_container">
          <iframe class="library_demo_iframe" src="http://createjs.cc/src/assets/demos/preloadjs/MediaGrid.html" frameborder="0" scrolling="no"></iframe>
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
    title:"PreloadJS的基础使用",
    subtitle:"PreloadJS是一个用来管理和协调相关资源加载的类库，它可以方便的帮助你预先加载相关资源...",
    time:"2015-03-13",
    url:"http://www.gbtags.com/gb/gbtutorials/541.htm"
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
