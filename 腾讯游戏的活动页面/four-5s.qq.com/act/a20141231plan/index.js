vFiveFlowIdArray=[123408,123409,123416,123417,123418,123419,123420,123421,123455,123456,123457,123460,123461];
for(i=0;i<vFiveFlowIdArray.length;i++){
    window["amsCfg_"+vFiveFlowIdArray[i]] = {
        // 抽奖领取主功能初始化
        'iAMSActivityId' : '15811', // AMS活动号
        'activityId' : '109798', // 模块实例号
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
}
//查询是否绑定的配置
amsCfg_123464={
    type : "query",
    success : function(bindedInfo){
    //已绑定时的扩展处理
			
    },
    failure : function(){
    //未绑定时的扩展处理
    }
};
	
//提交绑定的配置
amsCfg_123465={
    type : "comit",
    iQueryFlowID:123464,
    service:"x52" 
};

//调用，查询是否已经绑定
milo.ready(function(){
    amsInit(15811, 123464);
}
);
/*  |xGv00|26defc89aabaf6f4bf1c878f130c4149 */