
Core.FPS = 30;//帧频;
Core.WIDTH = 800;//场景宽;
Core.HEIGHT = 1134;//场景高;
//Core.OFFICIALPATH = 'http://game.gtimg.cn/images/qipai/act/a20151210opening/';//文件分离路径;
Core.OFFICIALPATH = 'http://game.gtimg.cn/images/qipai/act/a20151210opening/';//文件分离路径;
Core.ISCHACE = true;//是否对图片进行位图缓存;

/*
* createjs做loading动画,需要首屏先加载完成loading动画素材
* 再后续预载2-3或者多个场景素材
* 所以需要再增加一个预载参数;
* */
Core.PRELOADNUM = 1;//一开始预载场景个数,可以运用在动画loading上面;
Core.PRELOADNUM2= 2;//动画loading加载完成之后,真正开始预载后续内容;
/*
 * */
Core.spritesheetPath = 'images/';
Core.content;
//Core.prototype.fps=40;
function Core() {
    var target;
    target=this;
    /*
     * str:canvas div name;
     * */
    this.init = function (str) {
        Config.CANVAS = document.getElementById(str);
        stage = new cjs.Stage(Config.CANVAS);
        stage.update();
        cjs.MotionGuidePlugin.install();//允许引导动画;
        cjs.Sound.alternateExtensions = ['mp3'];//允许声音播放;
        cjs.Touch.enable(stage);//锁屏,限制上下左右拖动;
        cjs.Ticker.setFPS(Core.FPS);
        cjs.Ticker.addEventListener('tick', stage);

        content=new cjs.Container();
        stage.addChild(content);
        Core.content=content;

        //Config.eventDispatcher.addEventListener(Config.EVENT_LOAD_START, cjs.proxy(this.onLoadStart,this));
        Config.eventDispatcher.addEventListener(Config.EVENT_LOAD_START, onLoadStart);
        Config.eventDispatcher.addEventListener(Config.EVENT_LOAD_PROGRESS, onLoadProgress);
        Config.eventDispatcher.addEventListener(Config.EVENT_LOAD_COMPLETE, onLoadComplete);
    }
    /*
     * arr=[
     *   {id:'loading',atlas:2,src:[
     *      {src:'sounds/bg.mp3',id:bgSound},
     *      {src:'sounds/p0.mp3',id:bgP0}
     *   ]},
     *   {id:'p0',atlas:2,src:[]},
     *   {}
     * ];
     * */
    this.setSource = function (arr) {
        var data = [];
        for (var i = 0; i < arr.length; i++) {
            data[i] = [];
            data[i][0] = arr[i].id + '.js';
            data[i][1] = 'lib' + arr[i].id.substr(0, 1).toLocaleUpperCase() + arr[i].id.substr(1, arr[i].id.length - 1);
            data[i][2] = 'images' + arr[i].id.substr(0, 1).toLocaleUpperCase() + arr[i].id.substr(1, arr[i].id.length - 1);
            data[i][3] = arr[i].id;
            data[i][4] = [];
            for (var j = 0; j < arr[i].atlas; j++) {
                var tmp = String(j + 1);
                if (tmp == '1') tmp = '';
                data[i][4].push({
                    src: Core.spritesheetPath + arr[i].id + '/' + arr[i].id + '_atlas_' + tmp + '.json',
                    type: 'spritesheet',
                    id: arr[i].id + '_atlas_' + tmp
                });
            }
            for (var k = 0; k < arr[i].src.length; k++) {
                data[i][4].push(arr[i].src[k]);
            }
            data[i][5] = arr[i].childIndex;
        }
        //console.log(data);
        Config.preloading(data);
    }

    this.currentPage = 0;//当前场景索引;
    this.loadNum = 0;//目前加载完成的场景数量;
    this.stage;

    var mcDataArr=[];//存放所有下载资源;
    var tmpId;//保存退场动画的下一个场景id;
    var content;//
    function onLoadStart(e) {
        //console.log('onLoadStart:',e);
    }
    function onLoadProgress (e) {
        //console.log('onLoadProgress:',e);
        var pro;
        if(target.loadNum<Core.PRELOADNUM)//第一次加载的loading;
        {
            pro=((target.loadNum)/(Core.PRELOADNUM))+e.progress*(1/(Core.PRELOADNUM));
            //console.log('mainProgress:', pro);
            target.onLoadProgressHandler(pro);
        }
        else if(target.loadNum<(Core.PRELOADNUM+Core.PRELOADNUM2))
        {
            pro=((target.loadNum-Core.PRELOADNUM)/(Core.PRELOADNUM2))+e.progress*(1/(Core.PRELOADNUM2));
            target.onPageLoadingProgressHandler(pro);
        }
        else//预载loading;
        {
            //console.log('pageProgress:',target.currentPage, e.currentPage, e.progress*100>>0);
            if(target.currentPage== e.currentPage)
            {
                //console.log('pageProgress:',target.currentPage, e.currentPage, e.progress*100>>0);
                target.onPreLoadingProgressHandler(e.progress);
            }
        }
    }
    function onLoadComplete (e) {
        target.loadNum+=1;
        mcDataArr[e.currentPage]={
            currentPage: e.currentPage,
            queue: e.queue,
            arr: e.arr,
            thisFun: e.thisFun,
            mc:undefined
        };
        if(target.loadNum==Core.PRELOADNUM)//首次加载完成,场景个数可以配置;
        {
            //console.log('mainComplete:', target.loadNum);
            target.onLoadCompleteHandler(e);
            Config.changeMate();
        }
        else if(target.loadNum==(Core.PRELOADNUM+Core.PRELOADNUM2))
        {
            target.onPageLoadingCompleteHandler(e);
        }
        else if(target.currentPage== e.currentPage)//如果当前场景预载完成,正是需要显示的场景,则里面显示;
        {
            target.onPreLoadingCompleteHandler(e);

        }
        else//预载完成;
        {

        }
    }

    this.addContainer=function(name,index,resizeObj)
    {
        var container=new cjs.Container;
        container.name=name;
        //stage.addChildAt(container,index);
        content.addChildAt(container,index);
        var obj=resizeObj;
        obj.obj=container;
        //console.log(obj);
        Config.resize([obj]);
    }

    this.getContainer=function(name)
    {
        var container=content.getChildByName(name);
        return container;
    }

    this.getMc=function(i)//获取对应的场景动画内容;
    {
        var mc;
        var arr=mcDataArr[i];
        if(arr==undefined)//当发现需要的mc还没有加载完成时;
        {
            //console.log('');
        }
        else if(arr.mc==undefined)//当mc加载完成,但为组成mc;
        {

            mc=arr.mc=Config.compositionMc(arr.id,arr.queue,arr.arr,arr.thisFun);
            //console.log('getMc:',mc.numChildren,mc.getChildAt(0).totalFrames);
            mc.pageId=i;
            //console.log('mc.pageId:',mc.pageId);
            if(mc.getChildAt(0).totalFrames)
            {
                target.addFrameScript(mc.getChildAt(0),mc.getChildAt(0).totalFrames-1,function(mc)
                {
                    mc.stop();
                    target.onScenesPlayEnd(mc.parent);
                })
            }
        }
        else//当mc加载完成,且已经组成mc;
        {
            mc=arr.mc;
        }
        //console.log(mc);
        return mc
    }

    this.addScenes=function(name,id)//播放场景;
    {
        console.log('addScenes:',id);
        var mc;
        if(this.getContainer(name).numChildren==0)//首个场景,无需退场,开始当前场景进场动作;
        {
            mc=this.getMc(id);
            this.getContainer(name).addChild(mc);
            this.onScenesIn(mc);
        }
        else//有当前场景,当前场景开始退场,退场完成之后开启下个场景的进场动画;
        {
            tmpId=id;
            //console.log('tmpId:',tmpId);
            mc=this.getContainer(name).getChildAt(0);
            //console.log('core addScenes:',mc);
            this.onScenesOut(mc);
        }
    }

    this.onScenesOutComplete=function(name)//当前场景退场完成,需要开启下一个场景进场动画;
    {

        var mc;
        mc=this.getMc(tmpId);
        //console.log('onScenesOutComplete:',mc,tmpId);
        if(mc)//如果下一个场景已经加载完毕,则执行下个场景的开场;
        {
            //退场完成,需要加载展示下个场景;
            //是否移除当前场景;
            //默认情况下,下一个场景进场的时候需要移除当前场景;
            //特殊情况,需要下一个场景叠加在当前场景上面;
            //this.getContainer(name).removeAllChildren();//默认情况下,当前场景移除;
            //this.getContainer(name).addChild(mc);
            this.getContainer(name).addChildAt(mc,mcDataArr[tmpId].arr[5]);
            this.onScenesIn(mc);
        }
        else//如果下一个场景尚未加载完成,则不执行;
        {

        }
    }

    this.addFrameScript=function(mc,frame,fun)//动画特定帧添加代码;
    {
        if(!frame)
        {
            console.log('addFrameScript:frame==undefined');
            return;
        }
        var funStr='frame_'+frame.toString();
        mc[funStr]=function()
        {
            fun(mc);
        }
        mc.timeline.addTween(cjs.Tween.get(mc).wait(frame).call(mc[funStr]).wait(1));
    }
}
var coreP = Core.prototype;
coreP.onLoadProgressHandler=function(pro)//主场景loading进度;
{
    console.log('onLoadProgressHandler:',pro);
}
coreP.onLoadCompleteHandler=function(e)//主场景loading加载完成;
{
    console.log('onLoadCompleteHandler:',e);
}
coreP.onPageLoadingProgressHandler=function(pro)
{}
coreP.onPageLoadingCompleteHandler=function(e)
{}
coreP.onPreLoadingProgressHandler=function(pro)
{}
coreP.onPreLoadingCompleteHandler=function(e)
{}
coreP.onScenesPlayEnd=function(mc)//场景播放完成;
{
    console.log('mc play end frame');
}
coreP.onScenesIn=function(mc)//场景进场;
{

}
coreP.onScenesOut=function(mc)//场景退场;
{

}
