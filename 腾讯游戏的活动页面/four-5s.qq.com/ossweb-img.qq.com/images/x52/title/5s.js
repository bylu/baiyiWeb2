(function(o){if(window.attachEvent){window.attachEvent("onload",o);}else{window.addEventListener("load",o,false);};})(function(){
	var d=document,
	m=d.createElement("div"),
	r=String(new Date()).split(":")[1],
	l=function(u,y){
		var s=d.createElement(y);
		if(y=="script"){s.src=u;s.type="text/javascript";s.setAttribute("charset","gb2312");}
		else{s.href=u;s.rel="stylesheet";s.type="text/css";};
		d.getElementsByTagName("head")[0].appendChild(s);
	};
	//以下修改ost.css为各自产品的css地址
	l("http://ossweb-img.qq.com/images/x52/title/5s.css?v="+r,"link");
	m.className="ost ost_bg";
	m.style.cssText="position:absolute;top:-500px;";
	m.innerHTML=['<ul class="ost_b">',
	//以下修改各自链接，及指定按钮统计代码（广告修改gg.js）
		'<li class="ost_tg ost_bg"><a href="http://game.qq.com/" target="_blank" class="ost_blnk" onclick="pgvSendClick({hottag:\'act.title.logo\'});">腾讯游戏</a></li>',
		'<li class="ost_gg"><a id="ost_gg" target="_blank" class="ost_blnk" onclick="pgvSendClick({hottag:\'act.title.gg\'});"><img src="http://ossweb-img.qq.com/images/x52/title/ost_gg.jpg" width="230" height="40"/>精彩活动</a></li>',
		'<li class="ost_i">',
			'<p class="ost_t ost_bg"><a href="http://5s.qq.com/index.shtml" target="_blank" class="ost_lnk" onclick="pgvSendClick({hottag:\'act.title.back\'});">返回官网首页</a></p>',
			'<p class="ost_gl">',
				'<a href="http://5s.qq.com/webgame/index.shtml" target="_blank" class="ost_lnk ost_ldc" onclick="pgvSendClick({hottag:\'act.title.start\'});">开始游戏</a>',
				'<a href="http://5s.qq.com/vip/index.shtml" target="_blank" class="ost_lnk ost_ldc" onclick="pgvSendClick({hottag:\'act.title.purple\'});">1元紫钻</a>',
			'</p>',
		'</li>',
	'</ul>'].join("");
	d.body.appendChild(m);
	d.body.style.paddingTop="42px";
	l("http://ossweb-img.qq.com/images/x52/title/gg.js?v="+r,"script");
});/*  |xGv00|6fe81f1852a388fb8ebd64319bf1cafc */