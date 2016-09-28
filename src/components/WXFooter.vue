
<template>
  <div class="footer">
    <div class="container">
      <div class="footer-main">
        <p class="footer-main-title">CreateJS中文网</p>
        <p class="footer-main-about">CreateJS中文网致力于CreateJS在中国的推广，整个站点汇聚了createjs相关的技术文章、视频教程、中文API、框架以及优秀的项目资源等内容。</p>
        <p class="footer-main-link">
          <a href="http://createjs.cc/say.html">建议反馈</a>
          <a href="">关于我们</a>
          <a href="">加入贡献小组</a>
        </p>
      </div>
      <div class="footer-social">
        <a class="forGithub" target="_blank" href="https://github.com/createjscc/createjscc-web">该站点已开源<i class="fa fa-github fa-2x"></i></a><br>
        <a href="http://www.miitbeian.gov.cn/">粤ICP备15104739号-2</a>
      </div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="sass" scoped>
.footer{
  padding-bottom: 35px;
  background-color: #324057;
  color: #a4aebd;
  width: 100%;
  z-index: 1000;
  min-width: 1160px;
}
.footer .footer-main {
    padding-top: 40px;
    display: inline-block;
    .footer-main-title{
      font-size: 22px;
    }
    .footer-main-about{
      padding-top: 6px;
      max-width: 400px;
      color: #768193;
      font-size: 14px;
    }
    .footer-main-link{
      padding-top: 6px;
      a{
        color: #768193;
        font-size: 12px;
        margin-right: 10px;
      }
    }
}
.footer .footer-social {
    float: right;
    padding-top: 130px;
    text-align: right;
}
.footer .footer-social a{
  margin-left: 20px;
  line-height: 26px;
  color: #a4aebd;
}
.footer .footer-social .forGithub i{
  margin-left: 5px;
}
.footer .footer-social a i{
  font-size: 20px;
}
</style>
