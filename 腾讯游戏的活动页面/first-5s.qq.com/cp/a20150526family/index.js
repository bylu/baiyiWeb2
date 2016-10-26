function lightStar() {
	amsSubmit(22585,153538);
}

	// 抽奖领取主功能初始化
	amsCfg_153538 = {
		'iAMSActivityId' : '22585', // AMS活动号
		'activityId' : '117216', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
			if ($("#remind_me").prop("checked")) {
				doReg(11119);
			}
			
			var curDay = gCurDate.getDate();
			var $calendarList = $("#calendar_list li span.num");
			var curNum = parseInt($calendarList.eq(curDay - 1).html());
			$calendarList.eq(curDay - 1).html(curNum + 1);
			
			//点亮星星
			LotteryManager.alert("您为家族点亮1颗星星啦！快去叫家族小伙伴也一起来点亮星星吧！");
			return;
		
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
		
			//1：实物
			if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
				/*
				 * 0：虚拟游戏物品
				 * 1：实际物品，需要填写个人收货信息
				 * 2：cdkey
				 */
				LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
				return;
			}
			//2：cdkey
			if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
				// 新的处理
				if(callbackObj.sPackageCDkey){
					LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'复制成功。\');">');
					return;
				}else{
					LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'复制成功。\');">');
					return;
				}
				
			}
			
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	// 抽奖领取主功能初始化
	amsCfg_153543 = {
		'iAMSActivityId' : '22585', // AMS活动号
		'activityId' : '117216', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
			//邀请好友
			LotteryManager.alert("恭喜您成功召唤了小伙伴");
			return;
			
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
		
			//1：实物
			if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
				/*
				 * 0：虚拟游戏物品
				 * 1：实际物品，需要填写个人收货信息
				 * 2：cdkey
				 */
				LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
				return;
			}
			//2：cdkey
			if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
				// 新的处理
				if(callbackObj.sPackageCDkey){
					LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'复制成功。\');">');
					return;
				}else{
					LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'复制成功。\');">');
					return;
				}
				
			}
			
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	// 抽奖领取主功能初始化
	amsCfg_153550 = {
		'iAMSActivityId' : '22585', // AMS活动号
		'activityId' : '117216', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
		
			//1：实物
			if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
				/*
				 * 0：虚拟游戏物品
				 * 1：实际物品，需要填写个人收货信息
				 * 2：cdkey
				 */
				LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
				return;
			}
			//2：cdkey
			if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
				// 新的处理
				if(callbackObj.sPackageCDkey){
					LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'复制成功。\');">');
					return;
				}else{
					LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'复制成功。\');">');
					return;
				}
				
			}
			
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

var gLottMsg = "";
	// 抽奖领取主功能初始化
	amsCfg_153548 = {
		'iAMSActivityId' : '22585', // AMS活动号
		'activityId' : '117223', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
		
			//1：实物
			if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
				/*
				 * 0：虚拟游戏物品
				 * 1：实际物品，需要填写个人收货信息
				 * 2：cdkey
				 */
				LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
				return;
			}
			//2：cdkey
			if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
				// 新的处理
				if(callbackObj.sPackageCDkey){
					LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'复制成功。\');">');
					return;
				}else{
					LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'复制成功。\');">');
					return;
				}
				
			}
			var gPackMap = {"186842": 3, "186841":4, "186839":2, "186838": 1, "186837":0};
			gLottMsg = callbackObj.sMsg;
			callFlashToRoll(gPackMap[callbackObj.iPackageId]);
			//LotteryManager.alert(callbackObj.sMsg);
		}
	};


	
function selectArea () {
	amsInit(22585, 153568);
}
	//查询是否绑定的配置
	amsCfg_153567={
		type : "query",
		success : function(bindedInfo){
			//已绑定时的扩展处理
			gCurArea = bindedInfo.Farea;
			queryInfo();
		},
		failure : function(){
			//未绑定时的扩展处理
		}
	};
	
	//提交绑定的配置
	amsCfg_153568={
		type : "comit",
		iQueryFlowID:153567,
		service:"x52" 
	};

	//调用，查询是否已经绑定
	milo.ready(function(){
		amsInit(22585, 153567);
		}
	);


function queryLottLog() {
	amsSubmit(22585,153663);
}

			// 个人获奖记录初始化
	amsCfg_153663 = {
		'activityId' : '22585', // AMS活动号		
		"flowId":"153663",  //流程号
		"moduleId":"117223",// 模块实例号
		"extParam":{"pageNo":1,"pageSize":10},
		//提交成功的回调 （必选）
		'success':function(data){	
						//获取模块接口对象
						var giftModule=window['myGiftList_153663'];
						need(["util.jquery","util.template","biz.widget.base"],function($,TemplateManager,widget){
						        //如果第一次点击，则先显示弹出框，在渲染页面
							    if ($("#tbody_153663").length==0){
									widget.dialog({"content":$("#tpl_dialog_153663").html(),
											width:600,		
											topOffset:-200,											
											"complete":function(){
											    giftModule.renderPanel(data);
											}
									 });
								}else{
							        //如果是翻页的情况，直接渲染页面
									 giftModule.renderPanel(data);
								}
						});
					}
		
	};

function queryJf() {
	amsSubmit(22585,153569);
}
	
	//提交请求至AME
	amsCfg_153569 = {
		"iActivityId": 22585, //活动id	
		"iFlowId":    153569, //流程id
		"fFlowSubmitEnd": function(res){
			//alert('返回数据为:' + res);
			var jf = res.sOutValue1;
			$("#cur_jf").html(jf);
			return;
		}           
	};

function getServerDate()
{
	var currentDate;
	var httpReQuest = $.ajax({
                            type: "HEAD",
                             url: "http://5s.qq.com",
                             async:false
                   });
	if(typeof(httpReQuest) =="undefined"|| !httpReQuest.getResponseHeader("Date"))
	{
		currentDate = new Date();
	}
	else
	{
		currentDate =new Date(httpReQuest.getResponseHeader("Date"));
	}
	return currentDate;
}

function Fail(errInfo)
{
	if('undefined' != typeof(errInfo) && null != errInfo && ""!=errInfo)
	{
		//$('#div_msg_fail_content').html('<strong>'+errInfo+'</strong>');
		alert(errInfo);
	}else{
		//$('#div_msg_fail_content').html('<strong>非常抱歉，系统繁忙，请稍后再试！</strong>');
		alert('非常抱歉，系统繁忙，请稍后再试！');
	}	
	//TGDialogS('div_msg_fail');
	return ;
}

function queryInfo(){
	need("biz.login-min",function(LoginManager){
		LoginManager.checkLogin(function(){
			if (gCurArea == 0) {
				selectArea();
				return;
			}
			var sendData = "?area=" + gCurArea + "&t=" + Math.random();
			var url = "http://apps.game.qq.com/cgi-bin/x52/a20150526family/QueryInfo.cgi" + sendData;
			FloadJS(url, querySucc, Fail);
		},
		function(){LoginManager.login();});
	});
}

function querySucc(){
	if('undefined' == typeof(JSON_x52_QueryInfo) || null == JSON_x52_QueryInfo){//返回异常
        Fail(); 
    }else{
        if(JSON_x52_QueryInfo.iRet == 0){
			//"list":[{"dtDate":"2015-05-28", "iNum":"28"},{"dtDate":"2015-05-30", "iNum":"3"}] 
			var listInfo = JSON_x52_QueryInfo.list;
			var $calendarList = $("#calendar_list li span.num");
			var infoLength = listInfo.length;
			for (var i = 0; i < infoLength; ++i) {
				var info = listInfo[i];
				var date = info["dtDate"];
				var num = info["iNum"];
				var dateArray = date.split("-");
				if (dateArray[0] != "2015") {
					// || dateArray[1] != "06"
					continue;
				}
				var day = parseInt(dateArray[2], 10);
				$calendarList.eq(day - 1).html(num);
			}
        }else if(JSON_x52_QueryInfo.iRet < 0){
            //Fail(JSON_x52_QueryInfo.sMsg);
        }else{
            Fail();
        }
        return;
    }
}

var gCurArea = 0;
var gCurDate = new Date();	
	
$(function() {
	gCurDate = getServerDate();
	queryJf();
});

