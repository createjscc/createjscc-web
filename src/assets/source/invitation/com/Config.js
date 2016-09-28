
function Config() {}
var cjs=createjs;

Config.tcssWord='act.a20150908Film.';
Config.path='';
Config.shareUrl='';
Config.shareContent='';
Config.shareTitle='';
Config.CANVAS;
Config.eventDispatcher=new cjs.EventDispatcher();
Config.EVENT_LOAD_START='event_load_start';
Config.EVENT_LOAD_PROGRESS='event_load_progress';
Config.EVENT_LOAD_COMPLETE='event_load_complete';
Config.EVENT_MC_PLAY_END='event_mc_play_end';

Config.changeMate=function()
{
    var y = {
        "user-scalable": "no",
        "maximum-scale": "1.0",
        "initial-scale": "1.0"
    }, A = document.getElementsByName("viewport"), B, D;
    if (A.length == 0) {
        B = document.createElement("meta");
        B.name = "viewport";
        B.content = "";
        document.head.appendChild(B);
    } else {
        B = A[0];
    }
    var C = window, p = C.navigator;
    var z = p.userAgent.toLowerCase();

    var F = z.indexOf("mobile") != -1 && z.indexOf("android") != -1;
    //alert(F);
    if (!F) {
        //alert('run here');
        B.content = "initial-scale:1";
        B.content = "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui";
        //alert(B);
        return;
    }
    D = B.content;
    for (var G in y) {
        var E = new RegExp(G);
        if (!E.test(D)) {
            D += (D == "" ? "" : ",") + G + "=" + y[G];
        }
    }
    //D = "user-scalable=no,initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0";
    D = "width=device-width,initial-scale=0.9,minimum-scale=0.9,maximum-scale=0.9,user-scalable=no,minimal-ui";

    B.content = D;

};

Config.isAndroid=function()
{
    var C = window, p = C.navigator;
    var z = p.userAgent.toLowerCase();
    var F = z.indexOf("mobile") != -1 && z.indexOf("android") != -1;
    //console.log(F);
    return F;
}

Config.soundPlay = function(value,loop,vol,st)
{

    if (loop== undefined)
    {
        loop = 0
    }
    if (vol == undefined)
    {
        vol = .5
    }
    if(st==undefined)
    {
        st=1;
    }
    var ppc = new cjs.PlayPropsConfig().set({interrupt: cjs.Sound.INTERRUPT_EARLY, loop: loop, volume: vol,offset:st })
    //console.log('ppc.startTime:',ppc);
    return cjs.Sound.play(value,ppc);
}

//震动;
function Shake(target)
{
    this.target = target;
    this.shakeX = 0;
    this.shakeY = 0;
    this.time = 0;
    this.start = function(x,y,posX,posY)
    {
        this.time = 0;
        var rx = x != null? x:0;
        var ry = y != null? y:0;
        //console.log(this.shakeX);
        this.shakeX = this.target.x;
        this.shakeX = posX;
        this.shakeY = posY;
        this.target.x =  this.shakeX - rx;
        this.target.y =  this.shakeY - ry ;
        this.target.addEventListener("tick",this.enterFrameEvent)
    };
    this.enterFrame =  function()
    {
        this.time++;
        this.target.x += 1.7*(this.shakeX -this.target.x);
        this.target.y += 1.7*(this.shakeY -this.target.y);

        if (this.time >=15)
        {
            this.target.x=this.shakeX;
            this.target.y=this.shakeY;
            this.target.removeEventListener("tick",this.enterFrameEvent)
        }
    };
    this.enterFrameEvent = getProxy(this,this.enterFrame)
}
//震动配套函数;
function getProxy(value,funF)
{
    var f = function(event)
    {
        funF.apply(value,[event])
    };
    return f;
}
//自适应;
Config.resizeArr;
Config.resize=function(arr)
{
    var w,h;
    //console.log('resize:',canvas.width);
    if(!Config.resizeArr)
    {
        Config.resizeArr=[];
        window.onresize=setResize;
    }

    for(var i=0;i<arr.length;i++)
    {
        Config.resizeArr.push(arr[i]);
    }
    setResize();
    function setResize()
    {
        w=document.body.clientWidth;
        h=document.body.clientHeight;
        Config.CANVAS.width=w;
        Config.CANVAS.height=h;

        if(document.body.clientWidth<document.body.clientHeight)
        {
            Core.content.rotation=0;
            Core.content.x=0;
            w=document.body.clientWidth;
            h=document.body.clientHeight;
        }
        else
        {
            h=document.body.clientWidth;
            w=document.body.clientHeight;
            Core.content.rotation=90;
            Core.content.x=h;

        }
        //console.log('setResize');
        var obj;
        for(var i=0;i<Config.resizeArr.length;i++)
        {
            obj=Config.resizeArr[i];
            onResize(obj.obj,obj.type,obj.pos);
        }
    }

    function onResize(obj,type,pos)
    {
        switch (type)
        {
            case 'showAll':
                if(w/h>Core.WIDTH/Core.HEIGHT)
                {
                    if(pos.type=='showAll') {obj.scaleX=obj.scaleY=w/Core.WIDTH;}//显示全部内容,不做任何裁剪,会出现上下或者左右留白;
                    else if(pos.type=='showMain') {obj.scaleX=obj.scaleY=h/Core.HEIGHT;}//不出现任何空白,但是会裁剪去上下或者左右;
                    //console.log('onResize use width============');
                }
                else
                {
                    if(pos.type=='showAll') {obj.scaleX=obj.scaleY=w/Core.WIDTH;}
                    else if(pos.type=='showMain') {obj.scaleX=obj.scaleY=h/Core.HEIGHT;}
                    //console.log('onResize use height============');
                }
                //高度选择 居中,靠顶,靠底;
                if(pos.hType=='top'){}//靠顶
                else if(pos.hType=='middle'){obj.y=(h-(obj.scaleX*Core.HEIGHT))/2;}//居中；
                else if(pos.hType=='bottom'){obj.y=(h-(obj.scaleX*Core.HEIGHT))-pos.y*obj.scaleX;}//靠底；
                obj.x=(w-(obj.scaleX*Core.WIDTH))/2;//宽度居中;
                break;
            case 'topRight':
                obj.scaleX=obj.scaleY=h/Core.HEIGHT;
                obj.x=w-pos.width*obj.scaleX-pos.x;
                obj.y=pos.y;
                break;
            case 'topLeft':
                obj.scaleX=obj.scaleY=h/Core.HEIGHT;
                obj.x=0+pos.x;
                obj.y=pos.y;
                break;
            case 'bottomMiddle':
                obj.scaleX=obj.scaleY=h/Core.HEIGHT;
                obj.x=(w-pos.width*obj.scaleX)/2-pos.x;
                obj.y=h-pos.height*obj.scaleX-pos.y;
                break;
            case 'bottomRight':
                obj.scaleX=obj.scaleY=h/Core.HEIGHT;
                obj.x=w-pos.width*obj.scaleX-pos.x;
                obj.y=h-pos.height*obj.scaleX-pos.y;
                break;
            case 'middle':
                obj.scaleX=obj.scaleY=h/Core.HEIGHT;
                obj.x=(w-pos.width*obj.scaleX)/2-pos.x;
                obj.y=(h-pos.height*obj.scaleX)/2-pos.y;
                break;
            case 'hShow':
                if(w>h)//横屏;
                {
                    console.log('hShow',obj.pos);
                    obj.addChild(pos);
                    if(Core.WIDTH/Core.HEIGHT>h/w)
                    {
                        obj.scaleX=obj.scaleY=w/Core.HEIGHT;
                    }
                    else
                    {
                        obj.scaleX=obj.scaleY=h/Core.WIDTH;
                    }
                    obj.x=(w-(obj.scaleX*Core.HEIGHT))/2;
                    obj.y=(h-(obj.scaleX*Core.WIDTH))/2;
                }
                else//竖屏;
                {
                    obj.removeChildAt(0);
                }
                break;
        }
    }
}
//预加载;
Config.preloading=function(arr)
{
    /*
     ['page0.js','libPage0','imagesPage0','page0',[
     'page0_atlas_'
     ]]
     */
    //判断是否放在服务器上,如果是则加上图片服务器前缀;
    var tmpStr=window.location.href;
    if(tmpStr.indexOf('qq.com/')!=-1) Config.path=Core.OFFICIALPATH;

    var loader;
    // loader.setMaxConnections(5);
    var loadCompleteData=[];
    var mcData=[];
    var currentPage=0;
    var loadNextFileTime;

    Config.eventDispatcher.addEventListener('preLoadingLoadFile',onPreLoadingLoadFile);
    loadFile();
    function loadFile()
    {
        if(loadNextFileTime) clearTimeout(loadNextFileTime);//确认关闭上一次的延迟加载,防止重复加载;
        //console.log('loadNextFileTime:',loadNextFileTime);
        var event = new cjs.Event(Config.EVENT_LOAD_START);
        event.currentPage=currentPage;
        //console.log('loadFile need id:', currentPage);
        Config.eventDispatcher.dispatchEvent(event);
        //console.log('event');
        //loader.close();//取消loader的加载列表,重新加载必要资源;
        //loader.destroy();
        //loader.removeAllEventListeners();
        //loader.removeAll();
        //loader.reset();
        loader=new cjs.LoadQueue(true);
        loader.installPlugin(cjs.Sound);
        if(loader.hasEventListener('fileload')) loader.removeEventListener("fileload", handleFileLoad);
        if(loader.hasEventListener('complete')) loader.removeEventListener("complete", handleComplete);
        if(loader.hasEventListener('progress')) loader.removeEventListener('progress',handlerProgress);
        if(loader.hasEventListener('complete')) loader.removeEventListener("complete", movieJsHandleComplete);
        loader.addEventListener("complete", movieJsHandleComplete);
        //loader.loadFile({src:Config.path+arr[currentPage][0]},true);
        var url=arr[currentPage][0]+'?rnd='+String(Math.random()*100>>0);
        //console.log('loadFile:',url);
        loader.loadFile({src:url},true);
    }

    function onPreLoadingLoadFile(e)
    {
        //console.log('preLoadingLoadFile need id:', e.currentPage);
        if(currentPage== e.currentPage)
        {
            console.log('onPreLoadingLoadFile:','need page same load page');
        }
        else
        {
            currentPage= e.currentPage;
            loadFile();
        }
    }

    function movieJsHandleComplete(e)
    {
        //console.log('movieJsHandleComplete');
        this[arr[currentPage][2]] = this[arr[currentPage][2]]||{};
        ss = ss||{};
        loader.removeAll();
        loader.removeEventListener("complete", movieJsHandleComplete);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.addEventListener('progress',handlerProgress);

        //if(currentPage>=2) return;
        for(var i=0;i<arr[currentPage][4].length;i++)
        {
            //console.log(arr[currentPage][4][i]);
            if(arr[currentPage][4][i].type!='spritesheet')
            {
                arr[currentPage][4][i].src=Config.path+arr[currentPage][4][i].src;
            }
            else
            {
                arr[currentPage][4][i].src=Config.path+arr[currentPage][4][i].src+'?rnd='+String(Math.random()*100>>0);
            }

            //arr[currentPage][4][i].src=Config.path+arr[currentPage][4][i].src+'?rnd='+String(Math.random());
            //alert(arr[currentPage][4][i].src);
            loader.loadFile(arr[currentPage][4][i], true);
            //{id:'walk',src:'sounds/tank_walk.mp3'}
        }
        //console.log('movieJsHandleComplete:','currentPage:',currentPage,'arr[currentPage][1]:',this[arr[currentPage][1]]);
        var tmpArr=this[arr[currentPage][1]].properties.manifest;
        for(var i=0;i<tmpArr.length;i++)
        {
            tmpArr[i].src=Config.path+tmpArr[i].src+'?rnd='+String(Math.random()*100>>0);
        }
        loader.loadManifest(this[arr[currentPage][1]].properties.manifest);

        if(arr[currentPage][4].length==0&&this[arr[currentPage][1]].properties.manifest.length==0)
        {
            //console.log('该场景没有任何图片音乐资源,直接显示完成;');
            handleComplete(loader);
        }

    }
    function handlerProgress(evt)
    {
        var event = new cjs.Event(Config.EVENT_LOAD_PROGRESS);
        event.currentPage=currentPage;
        event.progress=evt.progress;
        Config.eventDispatcher.dispatchEvent(event);
        //console.log(evt.progress);
    }
    function handleFileLoad(evt) {
        //console.log(evt.item);
        /*
         if(currentPage>=2)
         {
         loader.setPaused(true);
         setTimeout(function(){
         loader.setPaused(false);
         },500);
         }
         */
        //if(currentPage>=2) return;
        if (evt.item.type == "image") {
            evt.result.crossOrigin='Anonymous';//图片允许跨域,前提是图片服务器允许当前域名跨域访问;
            this[arr[currentPage][2]][evt.item.id] = evt.result;
        }
    }
    function handleComplete(evt) {
        loader.removeEventListener("fileload", handleFileLoad);
        loader.removeEventListener("complete", handleComplete);
        loader.removeEventListener('progress',handlerProgress);


        var queue = evt.target;
        /*
         for(var i=0;i<arr[currentPage][4].length;i++)
         {
         if(arr[currentPage][4][i].type=='spritesheet')
         {
         ss[arr[currentPage][4][i].id] = queue.getResult(arr[currentPage][4][i].id);
         }
         }
         var exportRoot = new this[arr[currentPage][1]][arr[currentPage][3]]();
         if(exportRoot.getChildAt(0).totalFrames) exportRoot.getChildAt(0).gotoAndStop(0);
         if(exportRoot.getChildAt(0).getChildAt(0).totalFrames) exportRoot.getChildAt(0).getChildAt(0).gotoAndStop(0);
         */
        for(var i=0;i<arr[currentPage][4].length;i++)
        {
            //console.log(arr[currentPage][4][i].type)
            if(arr[currentPage][4][i].type=='sound')
            {
                //ss[arr[currentPage][4][i].id] = queue.getResult(arr[currentPage][4][i].id);
                //cjs.Sound.registerSound(arr[currentPage][4][i].src, arr[currentPage][4][i].id);
                //console.log(arr[currentPage][4][i].src,arr[currentPage][4][i].id);
            }
        }

        //stage.addChild(exportRoot);
        //console.log('handleComplete');
        var event = new cjs.Event(Config.EVENT_LOAD_COMPLETE);
        event.currentPage=currentPage;
        event.queue=queue;
        event.arr=arr[currentPage];
        event.thisFun=this;
        //event.exportRoot=exportRoot;
        Config.eventDispatcher.dispatchEvent(event);
        if(!loadCompleteData[currentPage])
        {
            //mcData[currentPage]=exportRoot;
            loadCompleteData[currentPage]=1;
        }
        //console.log('loadCompleteData:',loadCompleteData);
        currentPage+=1;
        var timeout=100;
        if(currentPage>=2)
        {
            timeout=200;
            //return;
        }
        if(currentPage<arr.length)
        {
            loadNextFileTime=setTimeout(function(){
                //console.log('setTimeout load file currentPage:',currentPage,arr.length);
                loadFile();
            },timeout);
        }
    }
}
//合成mc;
Config.compositionMc=function(id,queue,arr,thisFun)
{
    var exportRoot;
    for(var i=0;i<arr[4].length;i++)
    {
        if(arr[4][i].type=='spritesheet')
        {
            ss[arr[4][i].id] = queue.getResult(arr[4][i].id);
        }
    }
    var exportRoot = new thisFun[arr[1]][arr[3]]();
    //cacheAll(exportRoot);
    //exportRoot.setCache();
    return exportRoot
}
//常规滑动;
Config.scroll=function(mc,arr)
{
    var total=arr.length;
    var scrollMc=mc;
    var mousedownStartY,mcStartY,currentPage=0,scale=window.innerHeight/Core.HEIGHT;
    var mcData=[];
    stage.addChild(mc);
    drawBg();

    //加载完mc在此赋值；
    //赋值的时候可以判断当前的id跟现在所需要的page是不是一致,刚好一致,就说明还没预加载完成,需要对其进行初始化;
    this.setMcData=function(id,queue,arr,thisFun)
    {
        mcData[id]={};

        mcData[id].y=Core.HEIGHT*id;
        mcData[id].type='pageMc';
        mcData[id].id=id;
        mcData[id].queue=queue;
        mcData[id].arr=arr;
        mcData[id].thisFun=thisFun;
        if(id==currentPage)
        {
            //console.log('mcData:',id);
            console.log('init movie id:',currentPage);
            for(var i=0;i<mcData[id].arr[4].length;i++)
            {
                if(mcData[id].arr[4][i].type=='spritesheet')
                {
                    ss[mcData[id].arr[4][i].id] = mcData[id].queue.getResult(mcData[id].arr[4][i].id);
                }
            }
            //console.log(arr[1],arr[3])
            var exportRoot = new mcData[id].thisFun[mcData[id].arr[1]][mcData[id].arr[3]]();
            //var exportRoot = new libPage0.page0();
            mcData[id].exportRoot=exportRoot;
            mcData[id].exportRoot.type='pageMc';
            mcData[id].exportRoot.id=id;
            mcData[id].exportRoot.y=mcData[id].y;
            scrollMc.addChild(mcData[id].exportRoot);
            if(mcData[id].exportRoot.getChildAt(0).totalFrames) mcData[id].exportRoot.getChildAt(0).gotoAndPlay(1);
            if(mcData[id].exportRoot.getChildAt(0).getChildAt(0).totalFrames) mcData[id].exportRoot.getChildAt(0).getChildAt(0).gotoAndPlay(1);

            var event = new cjs.Event("scrollMcInitComplete");
            event.currentPage=currentPage;
            //console.log(event);
            Config.eventDispatcher.dispatchEvent(event);
        }
    }

    function drawBg()
    {
        var shape;
        var colorArr=['#ff0000','#ffff00','#ffffff','#000000','#ff0000','#ffffff','#000000'];
        for(var i=0;i<total;i++)
        {
            shape=new cjs.Shape();
            shape.graphics.beginFill(colorArr[i]).drawRect(0, 0, Core.WIDTH,Core.HEIGHT);
            shape.alpha=0.001;
            shape.y=i*Core.HEIGHT;
            scrollMc.addChild(shape);
        }

        stage.addEventListener('mousedown',onMouseEvent);
        stage.addEventListener('mouseout',onMouseEvent);
        stage.addEventListener('pressmove',onMouseEvent);
        stage.addEventListener('pressup',onMouseEvent);
        //console.log(stage.numChildren);
    }

    function onMouseEvent(e)
    {
        //console.log(e.type);
        switch (e.type)
        {
            case 'mousedown':
                mousedownStartY=e.stageY;
                mcStartY=scrollMc.y;
                break;
            case 'pressmove':
                //console.log(e.stageY);
                pressmoveFun(e.stageY);
                break;
            case 'pressup':
                pressupFun();
                break;
        }
    }

    function pressupFun()
    {
        var pro=(-scrollMc.y/scale)/((total-1)*Core.HEIGHT);
        var add=0.2;
        if(mcStartY>scrollMc.y) add=0.3;
        if(mcStartY<scrollMc.y) add=-0.3;
        var gotoNum=Math.round(add+pro/(1/(total-1)));
        if(gotoNum<0) gotoNum=0;
        if(gotoNum>=total) gotoNum=total-1;
        //console.log('pro:',pro,-gotoNum*Core.HEIGHT,gotoNum);
        currentPage=gotoNum;
        cjs.Tween.get(scrollMc,{override:true}).to({y:-gotoNum*Core.HEIGHT*scale}, 200).call(tweenHandleComplete);
    }

    function tweenHandleComplete(e)
    {
        //console.log(e);
        var event = new cjs.Event("scrollTweenComplete");
        event.currentPage=currentPage;
        //console.log(event);
        Config.eventDispatcher.dispatchEvent(event);
        updatePageVisile();
    }

    function updatePageVisile()
    {
        var mc;
        for(var i=0;i<scrollMc.numChildren;i++)
        {
            mc=scrollMc.getChildAt(i);
            if(mc.type=='pageMc')
            {
                //console.log(mc.type);
                if(mc.id==currentPage)
                {

                }
                else
                {
                    if(mc.parent==scrollMc)
                    {
                        scrollMc.removeChild(mc);
                        console.log('remove mc id:',mc.id);
                    }
                }
            }
        }

        mc=mcData[currentPage].exportRoot;
        if(mc)
        {
            //console.log('mc:',mc);
            if(!mc.parent)
            {
                //console.log('mc play:',mc);
                mc.y=Core.HEIGHT*mc.id;
                //mc.getChildAt(0).gotoAndPlay(0);
                //console.log('mc.getChildAt(0):',mc.totalFrames);
                //console.log('mc.getChildAt(0):',mc.getChildAt(0));
                //console.log('mc.getChildAt(0):',mc.getChildAt(0).totalFrames);
                if(mc.getChildAt(0).totalFrames) mc.getChildAt(0).gotoAndPlay(1);
                if(mc.getChildAt(0).getChildAt(0).totalFrames) mc.getChildAt(0).getChildAt(0).gotoAndPlay(1);
                scrollMc.addChild(mc);
            }
            else
            {
                //console.log('current mc not load complete');

            }
        }
        else
        {
            if(mcData[currentPage].id)
            {
                console.log('init movie id:',currentPage);
                for(var i=0;i<mcData[currentPage].arr[4].length;i++)
                {
                    if(mcData[currentPage].arr[4][i].type=='spritesheet')
                    {
                        ss[mcData[currentPage].arr[4][i].id] = mcData[currentPage].queue.getResult(mcData[currentPage].arr[4][i].id);
                    }
                }
                //console.log(arr[1],arr[3])
                var exportRoot = new mcData[currentPage].thisFun[mcData[currentPage].arr[1]][mcData[currentPage].arr[3]]();
                //var exportRoot = new libPage0.page0();
                mcData[currentPage].exportRoot=exportRoot;
                mcData[currentPage].exportRoot.type='pageMc';
                mcData[currentPage].exportRoot.id=currentPage;
                mcData[currentPage].exportRoot.y=mcData[currentPage].y;
                scrollMc.addChild(mcData[currentPage].exportRoot);
                if(mcData[currentPage].exportRoot.getChildAt(0).totalFrames) mcData[currentPage].exportRoot.getChildAt(0).gotoAndPlay(1);
                if(mcData[currentPage].exportRoot.getChildAt(0).getChildAt(0).totalFrames) mcData[currentPage].exportRoot.getChildAt(0).getChildAt(0).gotoAndPlay(1);

            }
        }

    }

    function pressmoveFun(argY)
    {
        var num=-mousedownStartY+argY;
        //console.log('num:',num);
        //scrollMc.y=mcStartY+num*(window.innerHeight/Core.HEIGHT);
        scrollMc.y=mcStartY+num;
    }

    return this;
}
//发事件;
Config.sendEvent=function(target,type,obj)
{
    var event = new cjs.Event(type);
    //var strTem="";  // 临时变量
    for(value in obj){
        //strTem+=value+'：'+obj[value]+"\n";
        event[value]=obj[value];
    }
    //console.log(event);
    target.dispatchEvent(event);
}
//mc做位图缓存,缓存会假死一会儿,但是后续动画播放会提供很大的流畅度;
function cacheAll(target) {
    if (target.isCache) return;
    target.isCache = true
    var cacheList = [];
    var fut = function (t) {
        var tge = [];
        for (var inp in t) {
            if (inp.indexOf("instance") != -1) {
                tge.push(inp);
            }
        }
        for (var i = 0; i < tge.length; i++) {
            var pg = t[tge[i]]
            var isMovie = pg.__proto__ instanceof cjs.MovieClip
            if (isMovie) {

                fut(pg)
            } else {
                if (pg.__proto__ instanceof cjs.Bitmap || pg.__proto__ instanceof cjs.Sprite) {

                    //console.log(pg)
                    cacheList.push(pg)
                } else {
                    fut(pg)
                }
            }
        }
    }
    fut(target)
    function tocache (value)
    {
        if (value.length >0)
        {
            //value.shift();
            var tp = value.shift();
            //if(value.length!=0) tp=value.shift();
            if(tp.getTransformedBounds().width>=600||tp.getTransformedBounds().height>=600)
            {
                if(Config.isAndroid())
                {
                    //
                    tp.cache(0, 0, tp.getTransformedBounds().width, tp.getTransformedBounds().height);
                    //console.log('tocache 100 timeout:',tp.getTransformedBounds().width,tp.getTransformedBounds().height);
                    setTimeout(tocache,100,value);
                }
                else
                {
                    //
                    setTimeout(tocache,1,value);
                }
            }
            else
            {
                tp.cache(0, 0, tp.getTransformedBounds().width, tp.getTransformedBounds().height);
                //console.log('tocache 100 timeout:',tp.getTransformedBounds().width,tp.getTransformedBounds().height);
                setTimeout(tocache,100,value);
            }
        }
    }
    target.setCache = function() {
        setTimeout(tocache,100,cacheList);
    }
    /*
     target.setCache = function() {
     for (var i = 0; i < cacheList.length; i++) {
     var tp = cacheList[i];
     tp.cache(0, 0, tp.getTransformedBounds().width, tp.getTransformedBounds().height);

     }
     }
     */
    target.clearCache = function()
    {
        for (var i = 0; i < cacheList.length; i++) {
            var tp = cacheList[i];
            tp.uncache()

        }
    }
}

//显示当前fps;
Config.addFps=function(target,num)
{
    var fps,$time,$count = 0;
    fps = new cjs.Text("0","900 25px Arial", "#ffffff");
    target.addChild(fps);
    $time = new Date().getTime();
    setInterval(function(){
        $count++;
        var now = new Date().getTime();
        if( now-$time>1000 ){
            fps.text = "fps:"+ Math.round( $count*10000 / (now-$time))/10+'/'+num;
            $time = now;
            $count = 0;
        }
    },num);
}

//统计代码;
Config.clickBtnPgv=function(arg)
{
    try{
        pgvSendClick({hottag:arg});
    }catch(e){}
}