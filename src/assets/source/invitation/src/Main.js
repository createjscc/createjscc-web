
function Main()
{
    this.Core_constructor();

    Core.FPS=30;
    Core.WIDTH=800;
    Core.HEIGHT=960;
    Core.ISCHACE=false;
    Core.PRELOADNUM=1;
    Core.PRELOADNUM2=2;

    var target=this;
    this.init('canvasStage');
    this.addContainer('content',0,{type:'showAll',pos:{type:'showMain',hType:'middle',x:0,y:0}});
    this.addContainer('clickContent',1,{type:'showAll',pos:{type:'showMain',hType:'top',x:0,y:0}});
    this.addContainer('soundContent',2,{type:'bottomRight',pos:{x:10,y:10,width:45,height:45}});
    this.addContainer('loadingContent',3,{type:'showAll',pos:{type:'showMain',hType:'middle',x:0,y:0}});
    this.addContainer('shareContent',4,{type:'topRight',pos:{x:0,y:0,width:800,height:960}});
    Config.eventDispatcher.addEventListener('keyboradSoundControl',keyboradSoundControl);
    addClickShape();
    var loadingPage= 0,keyboradSound,bgSound;
    this.transitionMc;
    this.dataArr=
        [
            {id:'loading',childIndex:0,atlas:1,src:[
                {src:'sounds/keyboard.mp3',id:'keyboard'}
            ]},
            {id:'library',childIndex:0,atlas:1,src:[
                {src:'sounds/bg.mp3',id:'bgSound'}

            ]},
            {id:'p0',childIndex:1,atlas:3,src:[

            ]},
            {id:'p1_0',childIndex:1,atlas:1,src:[

            ]},
            {id:'p1_1',childIndex:1,atlas:1,src:[

            ]},
            {id:'p2',childIndex:1,atlas:2,src:[

            ]},
            {id:'p4',childIndex:0,atlas:1,src:[

            ]},
            {id:'p3',childIndex:0,atlas:1,src:[

            ]}
            /*,
             {id:'p2',atlas:0,src:[

             ]},
             {id:'p3',atlas:0,src:[

             ]},
             {id:'p4',atlas:0,src:[

             ]},
             {id:'p5',atlas:0,src:[

             ]}*/
        ];
    this.setSource(this.dataArr);

    this.onPlayEnd=function (mc)//场景播放完成,此处可添加过场交互操作;
    {
        //this.clickShapeEnabled(true);
        console.log('onPlayEnd:',mc.pageId,mc.getChildAt(0).totalFrames);
        var timeArr=[0,0,2000,0,2000,50,50,500];
        if(mc.pageId==2||mc.pageId==4||mc.pageId==5||mc.pageId==6||mc.pageId==7)
        {
            setTimeout(function(){
                target.loadingAndTransitionsComplete();//不马上开启下个场景,开启场景过度动画;
                setTimeout(function(){
                    if(mc.pageId!=7) target.getContainer('content').removeChild(mc);//退场完成之后需要对当前场景进行处理,是直接移除,还是播放一段时间之后再移除;
                },800);
            },timeArr[mc.pageId]);
        }
        else if(mc.pageId==3)
        {
            setTimeout(function(){
                target.getContainer('content').removeChild(mc);//退场完成之后需要对当前场景进行处理,是直接移除,还是播放一段时间之后再移除;
            },800);

            target.currentPage+=1;
            target.addScenes('content',target.currentPage);
            target.onScenesOutComplete('content');//退场完成必须通知调用该函数;
        }
    }

    function keyboradSoundControl(e)
    {
        if(Config.isAndroid()) return;
        console.log('keyboradSoundControl:', e.play, e.playId);
        if(e.play)
        {
            if(!keyboradSound)
            {
                keyboradSound=Config.soundPlay('keyboard',-1,0.5);
            }
            else
            {
                keyboradSound.play();
            }
        }
        else
        {
            keyboradSound.stop();
        }
    }

    function addClickShape()
    {
        var s=new cjs.Shape();
        s.graphics.f("#FFFFFF").drawRect(0,0,Core.WIDTH,Core.HEIGHT+100);
        s.alpha=0.02;
        target.getContainer('clickContent').addChild(s);
    }
    this.clickShapeEnabled=function (arg)
    {
        //console.log('clickShapeEnabled:',arg);
        if(arg)
        {
            target.getContainer('clickContent').addEventListener('click',onMouseEvent);
        }
        else
        {
            target.getContainer('clickContent').removeEventListener('click',onMouseEvent);
        }
    }

    this.addLoading=function ()
    {
        var smallLoading=new libLibrary.PRELOADING();
        smallLoading.x=Core.WIDTH/2;
        smallLoading.y=Core.HEIGHT/2;
        target.getContainer('loadingContent').addChild(smallLoading);
    }
    this.loadingEnabled=function (arg)
    {
        if(arg)
        {
            if(!target.getContainer('loadingContent').visible) target.getContainer('loadingContent').visible=arg;
        }
        else
        {
            if(target.getContainer('loadingContent').visible) target.getContainer('loadingContent').visible=arg;
        }
    }

    this.addSound=function()
    {
        var soundBtn=new libLibrary.SOUNDBTN();
        var bgSoundPos=0;
        target.getContainer('soundContent').addChild(soundBtn);
        soundBtn.addEventListener('click',function(e){
            console.log(e.currentTarget.currentFrame);
            if(e.currentTarget.currentFrame==0)
            {
                if(bgSound)
                {
                    bgSoundPos=bgSound.position;
                    bgSound.stop();
                }
                e.currentTarget.gotoAndStop(1);
            }
            else
            {
                bgSound=Config.soundPlay('bgSound',-1,0.5,bgSoundPos);
                e.currentTarget.gotoAndStop(0);
            }
        });

    }

    this.addShare=function()
    {
        var share=new libLibrary.SHARESP();
        target.getContainer('shareContent').addChild(share);
        var mc=target.getContainer('shareContent').getChildAt(0);
        target.addFrameScript(mc,mc.totalFrames-1,function()
        {
            //console.log(mc.currentFrame,mc);
            setTimeout(function(){
                //console.log(mc.share_mc);
                //mc.share_mc.gotoAndPlay(0);
            },200);
        });
        this.shareEnabled(false);
    }

    this.shareEnabled=function(arg)
    {

        var mc=target.getContainer('shareContent').getChildAt(0);
        mc.name='shareClose_mc';
        if(arg)
        {
            target.getContainer('shareContent').visible=true;
            target.getContainer('shareContent').alpha=1;
            mc.gotoAndPlay(1);
            mc.addEventListener('click',onClick);
        }
        else
        {
            cjs.Tween.removeTweens(target.getContainer('shareContent'));
            cjs.Tween.get(target.getContainer('shareContent'), {override:true}).to({alpha:0}, 500).call(handleComplete);
            function handleComplete() {
                //Tween complete
                target.getContainer('shareContent').visible=false;
                mc.gotoAndStop(0);
            }
            mc.removeEventListener('click',onClick);
        }
    }

    function onMouseEvent(e)
    {
        target.currentPage+=1;
        target.addScenes('content',target.currentPage);
        //console.log(e);
    }

    this.loadingInit=function()
    {
        divLoadComplete();
        this.currentPage=0;
        this.addScenes('content',this.currentPage);
        //this.getMc(0);
        //keyboradSound=Config.soundPlay('keyboard',-1,0.5);
    }

    this.pageInit=function()
    {
        this.getMc(1);//组成类库动画;
        //this.addLoading();
        this.addShare();
        this.loadingAndTransitionsComplete();

    }

    this.loadingAndTransitionsComplete=function()
    {
        target.getMc(0).getChildAt(0).gotoAndStop(loadingPage);
        var waitFrame=[99,84,124,79,84,63];
        console.log('loadingAndTransitionsComplete:',loadingPage);
        //console.log('loadingAndTransitionsComplete:',target.getMc(0).getChildAt(0).currentFrame);
        setTimeout(function(){
            var mc=target.getMc(0).getChildAt(0).getChildAt(0);
            target.getContainer('content').addChild(mc.parent.parent);
            if(loadingPage!=0)
            {
                mc.gotoAndPlay(0);
            }
            else
            {
                mc.gotoAndStop(waitFrame[loadingPage]);
                mc.start_mc.name='start_mc';
                //console.log('loadingAndTransitionsComplete:',mc.start_mc);
                mc.start_mc.addEventListener('click',onClick);
            }
            //console.log(mc);
            //console.log(mc.word_mc,mc.word_mc.currentFrame,mc.word_mc.totalFrames);

            if(loadingPage<=5)
            {
                if(mc.word_mc)
                {
                    if(mc.word_mc.currentFrame==mc.word_mc.totalFrames-1)//文字显示完成;
                    {
                        cjs.Tween.removeTweens(mc);//停止tween缓动,否则会影响时间轴控制;
                    }
                    else//文字尚未显示完成;
                    {
                        target.addFrameScript(mc.word_mc,mc.word_mc.totalFrames-1,function()
                        {

                        });
                    }
                    //console.log('word_mc play complete target.currentPage:',target.currentPage);
                }

                target.addFrameScript(mc,waitFrame[loadingPage]-1,function(){
                    mc.stop();
                    var tmp=target.getMc(loadingPage+1);
                    if(tmp)
                    {
                        mc.play();
                    }
                    else
                    {
                        target.currentPage=loadingPage+1;
                        target.transitionMc=mc;
                    }

                    console.log('wait to load stage:',target.currentPage,loadingPage,tmp);
                });

                target.addFrameScript(mc,waitFrame[loadingPage],function(){
                    mc.stop();
                    mc.start_mc.name='start_mc';
                    //console.log('loadingAndTransitionsComplete:',mc.start_mc);
                    mc.start_mc.addEventListener('click',onClick);
                })
            }
            else
            {

            }

            target.addFrameScript(mc,mc.totalFrames-1,function(){
                //console.log('mc play complete');
                if(loadingPage!=0)
                {
                    //mc.play();
                    if(loadingPage==1)
                    {
                        target.currentPage=2;
                        //target.currentPage=7;
                        //loadingPage=7-2;
                    }
                    else
                    {
                        target.currentPage+=1;
                    }
                    target.addScenes('content',target.currentPage);
                    target.onScenesOutComplete('content');//退场完成必须通知调用该函数;
                }
                mc.stop();
                if(loadingPage<=5) target.getContainer('content').removeChild(mc.parent.parent);
                loadingPage+=1;
                //console.log('mc play complete:',loadingPage);
                switch (loadingPage)
                {
                    case 1:
                        bgSound=Config.soundPlay('bgSound',-1,0.5);
                        target.addSound();

                        target.loadingAndTransitionsComplete();
                        break;
                    case 2:

                        break;
                    case 6:
                        //target.loadingAndTransitionsComplete();
                        break;
                    case 7:
                        //console.log('page end==================');
                        //console.log(mc.share_mc);
                        //console.log(mc.home_mc);
                        //mc.alpha=0.5
                        mc.share_mc.name='share_mc';
                        mc.home_mc.name='home_mc';
                        mc.share_mc.addEventListener('click',onClick);
                        mc.home_mc.addEventListener('click',onClick);
                        break;
                }
            });
        },500);
    }

    function onClick(e)
    {
        var mc= e.currentTarget;
        switch (mc.name)
        {
            case 'start_mc':

                //target.shareEnabled(true);
                //return;
                sendClick('page'+loadingPage);
                mc.parent.play();
                //target.currentPage=2;
                //target.addScenes('content',target.currentPage);
                //target.onScenesOutComplete('content');//退场完成必须通知调用该函数;
                mc.removeEventListener('click',onClick);
                break;
            case 'shareClose_mc':
                target.shareEnabled(false);
                break;
            case 'share_mc':
                sendClick('share');
                target.shareEnabled(true);
                break;
            case 'home_mc':
                goHome();
                break;
        }
    }

    function loadingAndTransitionsPro(pro)
    {
        //console.log(target.getMc(0).getChildAt(0))
        var mc=target.getMc(0).getChildAt(0).getChildAt(0);
        //console.log(mc.getChildAt(0).totalFrames);
        mc.frameId=mc.currentFrame;
        cjs.Tween.get(mc, {override:true}).to({frameId:(pro*100>>0)-1},800).addEventListener("change", handleChange);
        function handleChange(e) {
            //console.log('handleChange:',mc.frameId);
            mc.gotoAndStop(mc.frameId>>0);
        }
    }

    this.pageProgress=function(pro)
    {
        loadingAndTransitionsPro(pro);
    }

}
cjs.extend(Main,Core);
var mainP=Main.prototype;
mainP.onLoadProgressHandler=function(pro)//主页loading进度;
{
    console.log('Main onLoadProgressHandler:', pro);
    divLoadProgress(pro*100>>0);
}
mainP.onLoadCompleteHandler=function(e)//主页loading加载完成;
{
    console.log('Main onLoadCompleteHandler');
    this.loadingInit(e);
}
mainP.onPageLoadingProgressHandler=function(pro)
{
    console.log('onPageLoadingProgressHandler:',pro);
    this.pageProgress(pro);
}
mainP.onPageLoadingCompleteHandler=function(e)
{
    console.log('onPageLoadingCompleteHandler');
    this.pageInit();
}
mainP.onPreLoadingProgressHandler=function(pro)//预加载loading,需要下个场景,该场景正在下载,需要显示loading;
{
    this.loadingEnabled(true);
    console.log('onPreLoadingProgressHandler:',pro);
}
mainP.onPreLoadingCompleteHandler=function(e)//预载该场景完成,需要立刻显示;
{
    console.log('onPreLoadingCompleteHandler: play');
    this.loadingEnabled(false);
    this.transitionMc.play();
    this.onScenesOutComplete('content');//退场完成必须通知调用该函数;
}
mainP.onScenesPlayEnd=function(mc)//场景播放完成;
{
    //console.log('onScenesPlayEnd',mc.totalFrames);
    this.onPlayEnd(mc);
}
mainP.onScenesIn=function(mc)//场景进场;
{
    //mc.getChildAt(0).gotoAndPlay(1);
    //this.clickShapeEnabled(true);
}
mainP.onScenesOut=function(mc)//场景退场;
{
    //cjs.Tween.get(mc).to({alpha:0}, 800).call(handleComplete);
    var target=this;
    target.clickShapeEnabled(false);

    //在该函数体内最后执行;
    handleComplete();
    function handleComplete() {
        //Tween complete
        console.log('onScenesOut:',mc.pageId);
        /*
        if(mc.pageId==2||mc.pageId==4||mc.pageId==5||mc.pageId==6)
        {
            setTimeout(function(){
                target.getContainer('content').removeChild(mc);//退场完成之后需要对当前场景进行处理,是直接移除,还是播放一段时间之后再移除;
            },800);
            target.loadingAndTransitionsComplete();//不马上开启下个场景,开启场景过度动画;
        }
        else if(mc.pageId==3)
        {
            setTimeout(function(){
                target.getContainer('content').removeChild(mc);//退场完成之后需要对当前场景进行处理,是直接移除,还是播放一段时间之后再移除;
            },800);
            target.onScenesOutComplete('content');//退场完成必须通知调用该函数;
        }
        */
    }
}

cjs.promote(Main,'Core');

function cjsStart()
{
    var main=new Main();
}