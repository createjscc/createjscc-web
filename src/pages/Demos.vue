
<template>
  <div class="demos">
    <div class="content">
      <div class="banner banner_bg-createjs">
        <div class="container">
          <br><br>
          <h1 class="header center">
            <i class="el-icon-star-on"></i> 项目案例
          </h1>
          <h6 class="center">
              这里列表出所有使用 CreateJS 的项目案例。
            <br><br>
          </h6>
          <br>
        </div>
      </div>

      <!-- 项目demo -->
      <div class="cases mycard-main demos-main">
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
                       <p class="subtitle2">{{item.subtitle}}</p>
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
                       <p class="subtitle2">{{item.subtitle}}</p>
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
                       <p class="subtitle2">{{item.subtitle}}</p>
                     </div>
                     <div class="card-reveal">
                       <span class="card-title grey-text text-darken-4">
                         <a target="_blank" v-bind:href=item.url>{{item.title}}</a>
                           <i class="fa fa-close pull-right"></i>
                        </span>
                       <p>{{item.subtitle}}</p>
                       <p class="author">作者：{{item.author}}</p>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
var foreign = new Array();
foreign = [{
    title:"成为王牌特工",
    subtitle:"你有什么需要成为王牌特工？在这个互动世界中完成任务，以赚取你的方式。",
    image:"../src/assets/images/cases/foreign/kingsmanknight.jpg",
    url:"http://www.kingsmanmovie.com/becomeakingsman/code"
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
    url:"http://nike.lidyana.com/"
  },
  {
    title:"MARTIN H WEFAIL",
    subtitle:"一个投资组合的网站，和奇异的互动体验马丁休斯，网页设计师的星星。",
    image:"../src/assets/images/cases/foreign/martinh.jpg",
    url:"http://kingsmanmovie.com/becomeakingsman/code"
  },
  {
    title:"梦想和达成",
    subtitle:"通过阅读关于Bose公司所完成的每一个发展和里程碑的阅读，纪念Bose的历史。",
    image:"../src/assets/images/cases/foreign/bose-dreamandreach.jpg",
    url:"http://dreamandreach.bose.com/en_US/explore"
  },
  {
    title:"雅达利游戏",
    subtitle:"为了纪念第四十周年和Atari的微软Windows8和IE10的推出，gskinner.com CreateJS和重塑电子游戏的历史。",
    image:"../src/assets/images/cases/foreign/atariarcade.jpg",
    url:"http://atari.com/arcade"
  },
  {
    title:"Noiseboard",
    subtitle:"一声板，为您的一天。可怕的可视化使用easeljs。",
    image:"../src/assets/images/cases/foreign/noiseboard.jpg",
    url:"http://noiseboard.com.au/"
  },
  {
    title:"节日装饰",
    subtitle:"庆祝这个节日的节日，用灯光、蜡烛、礼物和更多的装饰来装饰你的家！最好在块Allstate的假期回家装饰。",
    image:"../src/assets/images/cases/foreign/holidaydecorator.jpg",
    url:"http://holidaydecorator.allstateonline.com/"
  },
  {
    title:"Ion Drift",
    subtitle:"一款游戏，能够在不到一天，击中目标帧率甚至最低的设备建立CreateJS版。",
    image:"../src/assets/images/cases/foreign/b10b-epsilon.jpg",
    url:"http://b10b.com/iondrift/epsilon/html5-createjs/"
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
  },
  {
    title:"寺库豪车推广",
    subtitle:"由北京180china 广告有限公司技术部开发的H5落地页推广。",
    image:"../src/assets/images/cases/chinas/sk.jpg",
    url:"http://h5.180network.com.cn/sk_s2/?from=groupmessage&isappinstalled=0"
  }]

var source = new Array();
source = [
  {
    title:"～一起来气味王国玩吧～",
    subtitle:"很好玩的",
    image:"../src/assets/source/invitation/index.jpg",
    url:"../src/assets/source/invitation/invitation.html",
    author:"杨杨电脑店"
  }]

  export default {
    data () {
      return {
        activeName: "first",
        foreign,
        chinas,
        source
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/styles/sonPages";

</style>
