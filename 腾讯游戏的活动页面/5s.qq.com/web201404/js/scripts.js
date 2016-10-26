(function(){
	var PAGENAME = (function(){
			var bodyId = document.getElementsByTagName('body')[0].getAttribute('id');
		    if(bodyId){
			    return bodyId;
		    }else{
			    var url =  window.location.href.split('/');
			    return url[url.length-1].split('.')[0];
		    }
		})();
	window.X52 = {
		init: function(){},
		fn:{},
		global:{
			fn:{}
		},
		self:{
			fn:{}
		}
	};

	// ����slogan��ά��
	X52.fn.setFlotage = function(){
		var winScroll = 0, flotage = g('flotage')||null;
		if(!flotage){
			var html = '';
			html += '<a class="totop" href="#top">���ض���</a>';
			html += '<a class="qcode" href="/down.shtml#app" target="_blank">��ά��</a>';
			html += '<a class="game" href="/webgame/index.shtml"target="_blank">������Ϸ</a>';
			html += '<a class="event" href="#" title-TGAD="525,7010" target="_blank">���ܻ</a>';
			html += '<a class="gift" href="#" title-TGAD="525,7011" target="_blank">�������</a>';
			html += '<div class="ft"></div>';
			flotage = document.createElement('div');
			flotage.className = 'flotage';
			flotage.innerHTML = html;
			document.getElementsByTagName('body')[0].appendChild(flotage);
		}
		//������ʾ����
		/*milo.addEvent(window, "scroll", function(){
			winScroll = document.documentElement.scrollTop || document.body.scrollTop;
			if (winScroll > 200 && flotage) {
				flotage.style.display = 'block';
			} else {
				flotage.style.display = 'none';
			}
		});*/
	};

	// IMG resize
	X52.fn.imgResize = function(id,nWidth){
		var imgs = g(id).getElementsByTagName('img');
		for(var i=0;i<imgs.length;i++){
			var oWidth = imgs[i].offsetWidth,
				oHeight = imgs[i].offsetHeight;
			if(oWidth > nWidth){
				imgs[i].style.width = nWidth + "px";
				imgs[i].style.height = nWidth * oHeight / oWidth + "px";
			}
		}
	};

	// flash insert
	X52.fn.flashInsert = function(flashName,id,width,height){
		need("biz.flashManager",function(flashManager){
			var flashvars = {},
				params = {
					menu:'false',
					scale:'noScale',
					allowfullscreen:'true',
					allowScriptAccess:'always',
					salign:'T',
					wmode:'transparent'
				};
			flashManager.embedSWF(flashName,id,width,height,flashvars,params);
		});
	};

	// �û���¼̬
	X52.fn.userLogin = function(){
		need("biz.login-min",function(LoginManager){
			milo.addEvent(g("dologin"), "click", function() {
				LoginManager.login();
				return false;
			});
			milo.addEvent(g("dologout"), "click", function() {
				LoginManager.logout();
				return false;
			});
			milo.ready(function() {
				LoginManager.checkLogin(function(){
					LoginManager.getNickName(function(loginInfo){
						if(loginInfo.isLogin){
							g("login_nickname_span").innerHTML = loginInfo.nickName;
						}
					});
				});
			});
		});
	};

	// ����û��Ƿ��¼
	X52.fn.checkLogin = function(){
		need("biz.login-min",function(LoginManager){
			LoginManager.checkLogin(function(){
                                return false;
			},function(){
				LoginManager.login();
			});
		});
	};
        //ͳ��qq��½�û�
        X52.fn.tongji = function(){
		need("biz.login-min",function(LoginManager){
			LoginManager.checkLogin(function(){
			       loadScript("http://pingjs.qq.com/ping_tcss_ied.js",function(){
                                   pgvSendClick({hottag:'index.qquser.'+milo.cookie.get('ptui_loginuin')});
                                   pgvSendClick({hottag:'index.qquser.login'});
                               })
                           return false;
			},function(){
                             loadScript("http://pingjs.qq.com/ping_tcss_ied.js",function(){
                                pgvSendClick({hottag:'index.qquser.nologin'});
                             })
			});
		});
	};
       
	// ������ʾ
	X52.fn.showDialog = function(id){
		need("biz.dialog-min",function(Dialog){
			Dialog.show({id:id,bgcolor:'#000'});
		});
	};
        
        //�𵰹Ҽ�
	X52.global.fn.goldenEgg = function(){
		var html = '';
		html += '<div id="myFlash">��������flash�Ҽ�</div>';
		goldenEgg = document.createElement('div');
		goldenEgg.className = 'goldenEgg';
		goldenEgg.innerHTML = html;
		document.getElementsByTagName('body')[0].appendChild(goldenEgg);
		X52.fn.flashInsert("http://ossweb-img.qq.com/images/x52/goldenEgg/goldenEgg.swf", "myFlash", "200", "200", "9.0.0");
	};
        
        //�����߲�����
        X52.self.fn.swfLink=function(){
            var html = '';
	    html += '<div id="swfLink">�����߲�����flash</div>';
	    swfLink= document.createElement('div');
	    swfLink.className = 'swfLink';
	    swfLink.innerHTML = html;
	    document.getElementById('head').appendChild(swfLink);
	    X52.fn.flashInsert("http://ossweb-img.qq.com/images/x52/goldenEgg/index.swf", "swfLink", "200", "200", "9.0.0");
        }
 
	// �����ر�
	X52.fn.closeDialog = function(){
		need("biz.dialog-min",function(Dialog){
			Dialog.hide();
		});
	};


	// �����˵���ʾ
	X52.global.fn.setNav = function(){
		milo.addEvent(window,'load',function(){
			milo.addEvent(g("nav"), "mouseover", function(){g("nav").className="nav pr nav-on";g("navShadow").style.display="block"});
			milo.addEvent(g("nav"), "mouseout", function(){g("nav").className="nav pr";g("navShadow").style.display=""});
		});
	};

	// �������
	X52.global.fn.setAds = function(){
		need("biz.tgAds",function(TGAds){
			TGAds.init();
		});
	};

	X52.global.fn.loadAD = function(el,cl,id){
		var ad = cl+','+id;
		el.setAttribute('data-TGAD',ad);
		need("biz.tgAds",function(TGAds){
			TGAds.init(el);
		});
	};
	window.loadAD =  X52.global.fn.loadAD;

	// delayLoad
	X52.global.fn.delayLoad = function(){
		need(["biz.delayLoad"]);
	};

	// iframe����
	X52.global.fn.setLib = function(el,url){
		el.innerHTML = '<iframe src="'+ url +'" frameborder="0" allowtransparency="true" height="100%" width="100%" scrolling="no"></iframe>'
	};window.loadIframe = X52.global.fn.setLib;

	// ͳ��
	X52.global.fn.countStat = function(){
		milo.addEvent(window,'load',function(){
			loadScript("http://tajs.qq.com/stats?sId=34195462",function(){
				loadScript("http://pingjs.qq.com/ping_tcss_ied.js",function(){pgvMain()}
				);
			});
		});
	};

	// ��ҳ�ֲ����
	X52.self.fn.setGGbox = function(){
		loadScript("/web201404/js/showtgad.js",function(){
			TGAdsShow("ggBox",{channelID:["525"],creatroll:true,groupID:6});
		});
		loadScript('http://ossweb-img.qq.com/images/js/jquery/jquery-1.9.0.min.js',function(){
			var Rotation=function($div1,$div2){
				this.$list1=$div1.children();
				this.$list2=$div2.children();
				this.timeOut=null;
				//��ʼ��
				this._start();
			}
			Rotation.prototype={
				_init:function(){
					this.$list1.hide()
							.eq(0).show().css("z-index","1").addClass("show")
					this.$list2.eq(0).addClass('hover');
				},
				_start:function(){
					var _this=this;
					_this._init();
					_this._startTimeOut();
					_this._addClickEvent(_this.$list2);
					_this.$list1.hover(function(){
						_this._stopTimeOut();
					},function(){
						_this._startTimeOut();
					});
				},
				_addClickEvent:function($div){
					var _this=this;
					$div.hover(function(){
						_this._stopTimeOut();
						_this.$list1.stop(true,true);
						_this._doNext($(this).index());
					});
				},
				_doNext:function(index){
					var _this=this;
					var num=_this.$list2.siblings(".hover").index();
					_this.$list2.eq(index).addClass("hover")
							.siblings().removeClass("hover");
					if(num!=index){
						_this.$list1.eq(index).show().addClass("show").end()
								.eq(num).removeClass("show").fadeOut(900,function(){
									_this.$list1.eq(index).css("z-index","1").end()
											.eq(num).css("z-index","0");
								});
					}
				},
				_startTimeOut:function(){
					var _this=this;
					var indexNum=_this.$list2.siblings(".hover").index();
					timeOut=setInterval(function(){
						indexNum++;
						_this._doNext(indexNum%(_this.$list1.length));
					},3000);
				},
				_stopTimeOut:function(){
					clearInterval(timeOut);
				}
			}

			new Rotation($(".pic-content"),$(".pic-btns"));
		})
	};

	// ��ҳ�����л�
	X52.self.fn.tabNews = function(){
		need("biz.tabs",function(tabs){
			tabs.init("news","tab-panel",{
				currCls: "curr",
				disCls: "db"
			});
		});
	};


	// �������ؽű�
	X52.self.fn.xfLib = function(){
		include(["http://x.soso.com/js/xf/xfcodec.js","http://x.soso.com/js/xf/xflib2.0.js"]);
	};

	// ��ֽ����
	X52.self.fn.setWallpaper = function(){
		/* wallpaper */
		var _iActId=242,
			_iTypeId,
			_page,
			_list_t,
			video_info=[],
			firstBox = g("paperNewest"),
			listBox = g("paperList"),
			pageBox = g("pages");
		//var list_t = JSON_workList_inc.iTotalPages;
		function getImg(_url){var _img=decodeURIComponent(_url);var temp=_img.split("thumb_")[1]; temp=temp?temp:"";return (_img.split("thumb_")[0]+temp);}
		function getURL(){
			var a=new String(window.location.href).split('iTypeId=')[1]
			if(a != undefined){
				var b=a.split('&')[0];
				if(b!=undefined){
					_iTypeId=b;
					var c=new String(window.location.href).split('page=')[1];
					_page=c?c:1;
				}else{
					_iTypeId=0;
					_page=1;
				}
			}else{
				_iTypeId=0;
				_page=1;
			}
			getList(_iTypeId);
		}
		function getList(a) {
			var u=new String(window.location.href).split('shtml')[0];
			window.location.href=u+"shtml#iTypeId="+a+"&page="+_page;
			loadScript("http://apps.game.qq.com/cgi-bin/ishow/ver2.0/workList_inc.cgi?iActId="+_iActId+"&sDataType=JSON&iTypeId="+_iTypeId+"&page="+(_page-1), setList, "");
		}
		function setList() {
			_list_t=JSON_workList_inc.iTotalPages;
			var _detail=_first = "";
			var _list = JSON_workList_inc.List;
			_first='<img src="' +getImg(decodeURIComponent(_list[0].sProdImgNo_5)) + '" width="428" height="285" alt="'+decodeURIComponent(_list[0].sProdName)+'" /></div><p class="mt15 tac"><a title="����鿴��ͼ" href="'+getImg(decodeURIComponent(_list[0].sProdImgNo_2))+'" class="wp-btn ib sp" target="_blank">1024&times;768 </a><a title="����鿴��ͼ" href="'+getImg(decodeURIComponent(_list[0].sProdImgNo_3))+'" class="wp-btn ib sp" target="_blank">1280&times;960 </a><a title="����鿴��ͼ" href="'+getImg(decodeURIComponent(_list[0].sProdImgNo_4))+'" class="wp-btn ib sp" target="_blank">1600&times;1200 </a></p>';
			firstBox.innerHTML = _first;
			for (i = 1; i < _list.length; i++) {
				_con = '<li class="fl"><img src="' +getImg(decodeURIComponent(_list[i].sProdImgNo_1)) + '" width="210" height="115" alt="'+decodeURIComponent(_list[i].sProdName)+'" /><p class="tac"><a title="����鿴��ͼ" href="'+getImg(decodeURIComponent(_list[i].sProdImgNo_2))+'" target="_blank">1024&times;768</a><a title="����鿴��ͼ" href="'+getImg(decodeURIComponent(_list[i].sProdImgNo_3))+'" target="_blank" class="highline">1280&times;960</a><a title="����鿴��ͼ" href="'+getImg(decodeURIComponent(_list[i].sProdImgNo_4))+'" target="_blank">1600&times;1200</a></p></li>';
				_detail += _con;
			}
			listBox.innerHTML = _detail;
			setPage();
		}
		function setPage() {
			var page_t="";
			if(page_t!=1){pageBox.style.display="block";}else{pageBox.style.display="none";};
			if(_page<=1){g("pagePrev").style.display="none";}else{g("pagePrev").style.display="inline";};
			if(_page>=_list_t){g("pageNext").style.display="none";}else{g("pageNext").style.display="inline";};
		}
		milo.addEvent(g("pagePrev"), "click",function(){if(_page>1){_page=parseInt(_page)-1;getList(_iTypeId);};});
		milo.addEvent(g("pageNext"), "click",function(){if(_page<_list_t){_page=parseInt(_page)+1;getList(_iTypeId);};});
		milo.addEvent(window, "load",getURL);
	};

	// ��Ƶ����չʾ
	X52.self.fn.setVideoScroll = function(){
		loadScript('http://ossweb-img.qq.com/images/js/comm/ScrollPic.min.js',function(){
			var scroll=new ScrollPic({
				conId:'rollbox',//��������ID
				leftId:'m_right',//���ͷID
				rightId:'m_left',//�Ҽ�ͷID
				frameWidth:370,//��ʾ����
				pageWidth:125,//��ҳ���
				position:'left'//���ŷ��� leftΪ����upΪ����,����Ϊupʱ������Ϸ�ҳ�߶�pageHeightֵ
			});
			var a = g("rollbox").getElementsByTagName('a'),
				i = a.length;

			for(;i--;){
				a[i].onclick = function(){
					var vid = this.getAttribute('rel');
					need('biz.tvp', function(VideoManager){
						VideoManager.play(vid, 'video', {width:426,height:283,miniskin:1,autoplay:1});
					});
				};
			}
			a[0].click();
		});


	}
	
	//���λ�ֲ�
	X52.self.fn.bannerRoll=function(){
		loadScript('http://ossweb-img.qq.com/images/js/comm/ScrollPic.min.js',function(){
			/*var scroll=new ScrollPic({
				conId:'banner_box',//��������ID
				leftId:'pre_btn',//���ͷID
				rightId:'next_btn',//�Ҽ�ͷID
				frameWidth:'432',//��ʾ����
				pageWidth:'146',//��ҳ���
				autoPlay:true,//�Զ�����
				position:'left',//���ŷ��� leftΪ����upΪ����,����Ϊupʱ������Ϸ�ҳ�߶�pageHeightֵ
				autoPlayTime:'3',//�Զ����ż��ʱ��(��)
				speed:'30',
				dotListId:""//�Ƿ���Ҫ��ҳ
			});*/
			var mallScroll=new ScrollPic({
				conId:'mall-box',//��������ID
				leftId:'mall-pre',//���ͷID
				rightId:'mall-next',//�Ҽ�ͷID
				frameWidth:'200',//��ʾ����
				pageWidth:'200',//��ҳ���
				autoPlay:false,//�Զ�����
				position:'left',//���ŷ��� leftΪ����upΪ����,����Ϊupʱ������Ϸ�ҳ�߶�pageHeightֵ
				autoPlayTime:'',//�Զ����ż��ʱ��(��)
				speed:'20',
				dotListId:""//�Ƿ���Ҫ��ҳ
			});
		});
	}
	
	// cdkey
	X52.self.fn.cdkCheckLogin = function(){
		if(typeof(LoginManager) == 'undefined'){loadScript('http://ossweb-img.qq.com/images/js/login/loginmanagerv2.js')}
		LoginManager.checkLogin(function(){
			g("login_qq_span").innerHTML = LoginManager.getUserUin();
			LoginManager.getNickName(function(loginInfo){
				if(loginInfo.isLogin){
					g("login_nickname_span").innerHTML = loginInfo.nickName;
				}
			});
		});

		milo.addEvent(g('cdkBox'),'click',function(){
			LoginManager.checkLogin(function(){
				return false;
			},function(){
				CDKEYManager.login();
			});
		});
	}

	X52.self.fn.cdkTransfer = function(){
		milo.addEvent(g('submitBtn'),"click",function(){
			if(document.getElementById("cdkey").value == ""){
				alert("������CDK��");
				return;
			}
			if(document.getElementById("verifyCode").value == ""){
				alert("��������֤�룡");
				return;
			}
			if(document.getElementById("roleContentId").value == ""){
				alert("��ѡ���ɫ��");
				return;
			}
			CDKEYManager.submit({
				onLoadSuccessEvent:function(result){
					if(result.ret == 0){
						alert("�һ��ɹ�");
					}
				}
			});
		});
	}

	// �淨ģʽ�л�
	X52.self.fn.changePlaymode = function(){
		var total=6,curr=1,
			showItem=function(a){
				g("item"+curr).className="dn";
				curr=a=="prev"?curr-1:a=="next"?curr+1:a;
				curr=curr>total?1:curr==0?total:curr;
				g("item"+curr).className="db";
				if(window.location.hash){
					window.location.hash = '#'+curr;
				}
			},
			itemInit=function (){
				var tar = parseInt(document.location.href.split("#")[1]);
				curr=tar>0?tar:1;
				showItem(curr);
			};
		itemInit();
		milo.addEvent(g("m_left"), "click", function(){showItem("prev")});
		milo.addEvent(g("m_right"), "click", function(){showItem("next")});
	};

	// �����б�TAB
	X52.self.fn.setNewsTab = function(){
		var obj=g("newsMenu").getElementsByTagName("a"),localUrl=window.location.href.split("/list")[0];
		if(obj&&localUrl){for(i=0;i<obj.length;i++){if(obj[i].href.split("/list")[0]==localUrl){obj[i].parentNode.className=obj[i].parentNode.className + " curr";break;}}};
	};

	// ����ý��hover
	X52.self.fn.cooperate = function(){
		if(g('cooperate')){
			milo.addEvent(g('cooperate'),'mouseenter',function(){this.className="curr";});
			milo.addEvent(g('cooperate'),'mouseleave',function(){this.className="";});
		}
	};

	// ����flash������
	X52.self.fn.flashDialog = function(){
		if(milo.cookie.get('hasShowFlashDialog') != '1'){
			var html = '';
			html += '<a href="javascript:X52.fn.closeDialog();" class="btn-close">�رմ���</a>';
			html += '<div id="flash-content"></div>';
			dialog = document.createElement('div');
			dialog.id='dialog-flash';
			dialog.className = 'dn';
			dialog.innerHTML = html;
			document.getElementsByTagName('body')[0].appendChild(dialog);
			X52.fn.flashInsert('http://ossweb-img.qq.com/images/x52/web201404/swf/newdomain.swf','flash-content',1000,500);
			X52.fn.showDialog('dialog-flash');
		}
		milo.cookie.set("hasShowFlashDialog","1",8640000);
	};

	// �������浯����
	X52.self.fn.popDialog = function(){
		var html = '';
		html += '<a href="javascript:X52.fn.closeDialog();" class="btn-close">�رմ���</a>';
		html += '<div id="flash-content"><a href="#" target="_blank" onclick="'+'pgvSendClick({hottag:'+'main.popDialog.guide'+'});" data-TGAD="525,5547"></a></div>';
		dialog = document.createElement('div');
		dialog.id='dialog-flash';
		dialog.className = 'dn';
		dialog.innerHTML = html;
		document.getElementsByTagName('body')[0].appendChild(dialog);
		X52.fn.showDialog('dialog-flash');
	};
        
	X52.init = function(){
		X52.global.fn.setNav();
		X52.fn.setFlotage();
                //X52.global.fn.goldenEgg();
                //X52.self.fn.swfLink();
		X52.self.fn.bannerRoll();
		X52.global.fn.delayLoad();
		X52.global.fn.setAds();
		X52.global.fn.countStat();
		X52.self.fn.cooperate();
                X52.fn.tongji();
		if(PAGENAME == '' || PAGENAME == 'index' ){
			X52.self.fn.setGGbox();
			X52.self.fn.tabNews();
			//�������浯����
			//X52.self.fn.flashDialog();
			X52.self.fn.popDialog();
			//flash��ť����
			/*X52.fn.flashInsert('http://ossweb-img.qq.com/images/x52/web201404/download.swf','btn-dl','260','490');
			window.gotoPage = function(n){
				switch(n){
					case 0:
						window.open('/webgame/index.shtml');
						break;
					case 1:
						window.open('http://x52.qq.com/comm-htdocs/pay/new_index.htm?t=x52');
						break;
					case 2:
						window.open('/down.shtml#plugin');
						break;
					case 10:
						X52.fn.closeDialog();
						break;
				}
			}*/
		};
		if(PAGENAME == 'down'){
			X52.self.fn.xfLib();
		};
		if(PAGENAME == 'wallpaper'){
			X52.self.fn.setWallpaper();
		};
		if(PAGENAME == 'cdkey'){
			X52.self.fn.cdkCheckLogin();
			X52.self.fn.cdkTransfer();
		};
		if(PAGENAME == 'playmode-intro'){
			X52.self.fn.changePlaymode();
		};
		if(PAGENAME == 'sjdown'){
			X52.self.fn.setMsgDownload();
		};
	};
	X52.init();
})();
function gotoPage(){
	window.open('http://5s.qq.com/act/a20141203adventure/index.htm');
};
/*  |xGv00|4fc7b5218b280ee0044b94b54f22b37e */