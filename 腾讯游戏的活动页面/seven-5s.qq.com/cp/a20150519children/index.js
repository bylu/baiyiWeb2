var giftList = {
	'184000' : 0,
	'183999' : 1,
	'184002' : 2,
	'183998' : 3,
	'184003' : 4,
	'183997' : 5,
	'184001' : 6,
	'183996' : 7
};
var alertString = '';
// 百人齐舞[151285]
amsCfg_151285 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		//LotteryManager.alert(callbackObj.sMsg);
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 炫宝儿PK赛[151327]
amsCfg_151327 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		//LotteryManager.alert(callbackObj.sMsg);
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 答题挑战[151328]
amsCfg_151328 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 浪漫热吻[151333]
amsCfg_151333 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 美食大赛[151334]
amsCfg_151334 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 城市寻宝[151335]
amsCfg_151335 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 人间大炮[151351]
amsCfg_151351 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 空中寻宝[151367]
amsCfg_151367 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 欢乐垂钓[151381]
amsCfg_151381 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 社区中骑木马[151382]
amsCfg_151382 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 在社区中跳楼[151383]
amsCfg_151383 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您得到1个糖果。');
	}
};

// 我是大白/暖心大白（7天）[151427]
amsCfg_151427 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您获得“我是大白/暖心大白（7天）”。');
	}
};

// 玛丽无惧/玛丽美眉（7天）[151453]
amsCfg_151453 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('恭喜您获得“玛丽无惧/玛丽美眉（7天）”。');
	}
};

// 糖果抽奖[151454]
amsCfg_151454 = {
	'iAMSActivityId' : '21960', // AMS活动号
	'activityId' : '116614', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(21960,151426);
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
		window.alertString = callbackObj.sMsg;
		callFlashToRoll(window.giftList[callbackObj.iPackageId]);
		//LotteryManager.alert(callbackObj.sMsg);
	}
};

//查询是否绑定的配置
amsCfg_151578={
	type : "query",
	success : function(bindedInfo){
		//已绑定时的扩展处理
		
	},
	failure : function(){
		//未绑定时的扩展处理
	}
};

//提交绑定的配置
amsCfg_151579={
	type : "comit",
	iQueryFlowID:151578,
	service:"x52" 
};

//查询糖果数量
amsCfg_151426 = {
	"iActivityId": 21960, //活动id	
	"iFlowId":    151426, //流程id
	"fFlowSubmitEnd": function(res){
		$('#tangGNums').html('当前剩余糖果：' + res.sOutValue1 + '个');
		return;
	}           
};

//调用，查询是否已经绑定
milo.ready(function(){
	amsInit(21960, 151578);
	amsSubmit(21960,151426);
	}
);


// 赠送一积分
amsCfg_153105 = {
  'iAMSActivityId' : '21960', // AMS活动号
  'activityId' : '116614', // 模块实例号
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

    LotteryManager.alert('您已成功领取本活动的嘉年华勋章，集齐5个可在《2015炫舞时代嘉年华》活动换取奖励，详见活动规则。');
  }
};
