vFiveFlowIdArray=[123408,123409,123416,123417,123418,123419,123420,123421,123455,123456,123457,123460,123461];
for(i=0;i<vFiveFlowIdArray.length;i++){
    window["amsCfg_"+vFiveFlowIdArray[i]] = {
        // �齱��ȡ�����ܳ�ʼ��
        'iAMSActivityId' : '15811', // AMS���
        'activityId' : '109798', // ģ��ʵ����
        'onBeginGetGiftEvent' : function(){
            return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
        },
        'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
            var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
            if(packageLen && packageLen.length > 1){
                LotteryManager.alert(callbackObj.sMsg);
                return;
            }
		
            //1��ʵ��
            if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
                /*
				 * 0��������Ϸ��Ʒ
				 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
				 * 2��cdkey
				 */
                LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
                return;
            }
            //2��cdkey
            if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
                // �µĴ���
                if(callbackObj.sPackageCDkey){
                    LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'���Ƴɹ���\');">');
                    return;
                }else{
                    LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'���Ƴɹ���\');">');
                    return;
                }
				
            }
			
            LotteryManager.alert(callbackObj.sMsg);
        }
    };
}
//��ѯ�Ƿ�󶨵�����
amsCfg_123464={
    type : "query",
    success : function(bindedInfo){
    //�Ѱ�ʱ����չ����
			
    },
    failure : function(){
    //δ��ʱ����չ����
    }
};
	
//�ύ�󶨵�����
amsCfg_123465={
    type : "comit",
    iQueryFlowID:123464,
    service:"x52" 
};

//���ã���ѯ�Ƿ��Ѿ���
milo.ready(function(){
    amsInit(15811, 123464);
}
);
/*  |xGv00|26defc89aabaf6f4bf1c878f130c4149 */