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
// ��������[151285]
amsCfg_151285 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		//LotteryManager.alert(callbackObj.sMsg);
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// �ű���PK��[151327]
amsCfg_151327 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		//LotteryManager.alert(callbackObj.sMsg);
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// ������ս[151328]
amsCfg_151328 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// ��������[151333]
amsCfg_151333 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// ��ʳ����[151334]
amsCfg_151334 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// ����Ѱ��[151335]
amsCfg_151335 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// �˼����[151351]
amsCfg_151351 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// ����Ѱ��[151367]
amsCfg_151367 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// ���ִ���[151381]
amsCfg_151381 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// ��������ľ��[151382]
amsCfg_151382 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// ����������¥[151383]
amsCfg_151383 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ���õ�1���ǹ���');
	}
};

// ���Ǵ��/ů�Ĵ�ף�7�죩[151427]
amsCfg_151427 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ����á����Ǵ��/ů�Ĵ�ף�7�죩����');
	}
};

// �����޾�/������ü��7�죩[151453]
amsCfg_151453 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		
		LotteryManager.alert('��ϲ����á������޾�/������ü��7�죩����');
	}
};

// �ǹ��齱[151454]
amsCfg_151454 = {
	'iAMSActivityId' : '21960', // AMS���
	'activityId' : '116614', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(21960,151426);
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
		window.alertString = callbackObj.sMsg;
		callFlashToRoll(window.giftList[callbackObj.iPackageId]);
		//LotteryManager.alert(callbackObj.sMsg);
	}
};

//��ѯ�Ƿ�󶨵�����
amsCfg_151578={
	type : "query",
	success : function(bindedInfo){
		//�Ѱ�ʱ����չ����
		
	},
	failure : function(){
		//δ��ʱ����չ����
	}
};

//�ύ�󶨵�����
amsCfg_151579={
	type : "comit",
	iQueryFlowID:151578,
	service:"x52" 
};

//��ѯ�ǹ�����
amsCfg_151426 = {
	"iActivityId": 21960, //�id	
	"iFlowId":    151426, //����id
	"fFlowSubmitEnd": function(res){
		$('#tangGNums').html('��ǰʣ���ǹ���' + res.sOutValue1 + '��');
		return;
	}           
};

//���ã���ѯ�Ƿ��Ѿ���
milo.ready(function(){
	amsInit(21960, 151578);
	amsSubmit(21960,151426);
	}
);


// ����һ����
amsCfg_153105 = {
  'iAMSActivityId' : '21960', // AMS���
  'activityId' : '116614', // ģ��ʵ����
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

    LotteryManager.alert('���ѳɹ���ȡ����ļ��껪ѫ�£�����5�����ڡ�2015����ʱ�����껪�����ȡ��������������');
  }
};
