function lightStar() {
	amsSubmit(22585,153538);
}

	// �齱��ȡ�����ܳ�ʼ��
	amsCfg_153538 = {
		'iAMSActivityId' : '22585', // AMS���
		'activityId' : '117216', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
			if ($("#remind_me").prop("checked")) {
				doReg(11119);
			}
			
			var curDay = gCurDate.getDate();
			var $calendarList = $("#calendar_list li span.num");
			var curNum = parseInt($calendarList.eq(curDay - 1).html());
			$calendarList.eq(curDay - 1).html(curNum + 1);
			
			//��������
			LotteryManager.alert("��Ϊ�������1������������ȥ�м���С���Ҳһ�����������ǰɣ�");
			return;
		
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

	// �齱��ȡ�����ܳ�ʼ��
	amsCfg_153543 = {
		'iAMSActivityId' : '22585', // AMS���
		'activityId' : '117216', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
			//�������
			LotteryManager.alert("��ϲ���ɹ��ٻ���С���");
			return;
			
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

	// �齱��ȡ�����ܳ�ʼ��
	amsCfg_153550 = {
		'iAMSActivityId' : '22585', // AMS���
		'activityId' : '117216', // ģ��ʵ����
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

var gLottMsg = "";
	// �齱��ȡ�����ܳ�ʼ��
	amsCfg_153548 = {
		'iAMSActivityId' : '22585', // AMS���
		'activityId' : '117223', // ģ��ʵ����
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
			var gPackMap = {"186842": 3, "186841":4, "186839":2, "186838": 1, "186837":0};
			gLottMsg = callbackObj.sMsg;
			callFlashToRoll(gPackMap[callbackObj.iPackageId]);
			//LotteryManager.alert(callbackObj.sMsg);
		}
	};


	
function selectArea () {
	amsInit(22585, 153568);
}
	//��ѯ�Ƿ�󶨵�����
	amsCfg_153567={
		type : "query",
		success : function(bindedInfo){
			//�Ѱ�ʱ����չ����
			gCurArea = bindedInfo.Farea;
			queryInfo();
		},
		failure : function(){
			//δ��ʱ����չ����
		}
	};
	
	//�ύ�󶨵�����
	amsCfg_153568={
		type : "comit",
		iQueryFlowID:153567,
		service:"x52" 
	};

	//���ã���ѯ�Ƿ��Ѿ���
	milo.ready(function(){
		amsInit(22585, 153567);
		}
	);


function queryLottLog() {
	amsSubmit(22585,153663);
}

			// ���˻񽱼�¼��ʼ��
	amsCfg_153663 = {
		'activityId' : '22585', // AMS���		
		"flowId":"153663",  //���̺�
		"moduleId":"117223",// ģ��ʵ����
		"extParam":{"pageNo":1,"pageSize":10},
		//�ύ�ɹ��Ļص� ����ѡ��
		'success':function(data){	
						//��ȡģ��ӿڶ���
						var giftModule=window['myGiftList_153663'];
						need(["util.jquery","util.template","biz.widget.base"],function($,TemplateManager,widget){
						        //�����һ�ε����������ʾ����������Ⱦҳ��
							    if ($("#tbody_153663").length==0){
									widget.dialog({"content":$("#tpl_dialog_153663").html(),
											width:600,		
											topOffset:-200,											
											"complete":function(){
											    giftModule.renderPanel(data);
											}
									 });
								}else{
							        //����Ƿ�ҳ�������ֱ����Ⱦҳ��
									 giftModule.renderPanel(data);
								}
						});
					}
		
	};

function queryJf() {
	amsSubmit(22585,153569);
}
	
	//�ύ������AME
	amsCfg_153569 = {
		"iActivityId": 22585, //�id	
		"iFlowId":    153569, //����id
		"fFlowSubmitEnd": function(res){
			//alert('��������Ϊ:' + res);
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
		//$('#div_msg_fail_content').html('<strong>�ǳ���Ǹ��ϵͳ��æ�����Ժ����ԣ�</strong>');
		alert('�ǳ���Ǹ��ϵͳ��æ�����Ժ����ԣ�');
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
	if('undefined' == typeof(JSON_x52_QueryInfo) || null == JSON_x52_QueryInfo){//�����쳣
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

