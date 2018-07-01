/***************************************
 * 途趣 power by 一代聪师 start at 2018-03-01
 ***************************************/

var $app = {
	/**
	 * 设置基础域名配置
	 **/
	baseUrl: function() {
		return 'http://bike.e-stronger.com/bike/api/index.php?';
	},
	/**
	 * HTML5本地存储 设置应用本地配置
	 * settings:保存数据
	 * name:保存数据名
	 **/
	setSettings:function(settings, name) {
		settings = settings || {};
		localStorage.setItem(name, JSON.stringify(settings));
	},
	/**
	 * 获取HTML5本地存储的数据
	 * 获取数据：localStorage.getItem(key)
	 * 获取全部数据：localStorage.valueOf()
	 * 删除数据：localStorage.removeItem(key) 
	 * 清空全部数据：localStorage.clear();
	 * 获取本地存储数据数量：localStorage.length
	 * 获取第 N 个数据的 key 键值：localStorage.key(N)
	 **/
	getSettings:function(name) {
		let settingsText = localStorage.getItem(name);
    	return JSON.parse(settingsText);
	},
	/**
	 * 删除应用本地配置
	 **/
	removeSettings:function(name) {
		localStorage.removeItem(name);
	},
	/**
	 * 获取cookie
	 **/
	getCookie:function(name) {
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)){
			return unescape(arr[2]);
		}else{
			return null;
		}
	},
	/**
	 * 有无个人ID判断
	 **/
	idCheck:function(callback1, callback2) {
	  	var user_id = $app.getSettings('user_id');
	  	if(!user_id) { //无 用户ID
	  		console.log('无用户ID, user_id =  null');
	  		callback1();
	  	} else { //有 用户ID
	  		console.log('user_id = ',user_id);
	  		callback2();
	  	}
	},
	/**
	 * url传参  可传中文
	 **/
	getRequest:function(obj) {
		var urlStr = location.search,
			theRequest = '';
		var urlCutA = urlStr.split(obj)[1];
		if(urlCutA) {
			var urlCutB = urlCutA.split('=')[1];
			var urlCutC = urlCutB.split('&')[0]
			if(urlCutC) {
				theRequest = urlCutC;
			} else {
				theRequest = urlCutB;
			}
			theRequest = decodeURI(theRequest);
			return theRequest;
		} else {
			return false;
		}
	},
	
	alert:function(text,callBack){
		easyDialog.open({
			container : {
				content : text,
				yesFn : function(){
					if (typeof callBack === 'function') {
						callBack();
					}
				}
			}
		});
	},
	toast:function(text,num){
		var time='';//自动关闭秒数
		if(!!num){
			time=num;
		}else{
			time=1500;
		}

		easyDialog.open({
			container : {
				content : text
			},
			autoClose : time
		});
	},
	/**
	 * loading 界面
	 * text:自定义文字 选填
	 * text == hide 时为隐藏
	 * app.loading() 填空为显示
	 **/
	loading:function(text) {
		var textNow='';
		var name='show';
		
		if(!!text&&text!='hide'){
			textNow=text;
		}else if(text=='hide'){
			name='hide';
		}else{
			textNow='正在请求';
		}
		
		
		if(name=='show'){
			var screenLoadFill='<div class="fullLoading" id="screenLoadFill">\
				<div class="loadingBody">\
					<img src="img/loading.gif" alt="" />\
					<div class="text">'+textNow+'</div>\
				</div>\
			</div>';
	  		$('body').append(screenLoadFill).css({'overflow':'hidden'});
		}else if(name=='hide'){
			$('#screenLoadFill').remove();
  			$('body').css({'overflow':'visible'});
		}
	},
	
	/**
	 * 点击眼睛查看密码 插件
	 * input class="passwordSee" 必须传入
	 **/
	passwordSee:function() {
		var passwordSee=$('.passwordSee');
		var eye='<i class="eye eye1"></i>';//eye 1闭眼/2开眼
		passwordSee.append(eye);
		passwordSee.on('click','.eye',function(){
			var cc=$(this).hasClass('eye1');
			if(cc){//看眼
				$(this).removeClass('eye1');
				$(this).addClass('eye2');
				$(this).siblings('input').attr('type','text');
			}else{//闭眼
				$(this).removeClass('eye2');
				$(this).addClass('eye1');
				$(this).siblings('input').attr('type','password');
			}
		});
	},
	/***************************************
	 * swiper 按钮点击切换
	 * a 点击对象
	 * b 实例化后的swiper对象
	 * c left 上一页 / right 下一页
	 ***************************************/
	SwiperNext:function(a,b,c){
		$(a).on('click',function(e){
			//阻止冒泡事件
			e.preventDefault();
			if(c=='left'){
				b.swipePrev();
			}else if(c=='right'){
				b.swipeNext();
			}
			
		});
	},
	/***************************************
	 * 选项卡使用
	 * a节点/b序号，b不填时为0
	 ***************************************/
	nearActive:function(a,b){
		var c='';
		if(!b){
			c=0;
		}else{
			c=b;
		}
		a.eq(c).addClass('active').siblings().removeClass('active');
	},
	
	/***************************************
	 * 登录弹框
	 ***************************************/
	loginGoOpen:function(){
		//登录框 DOM
		var htmlK='<div class="modal fade padding0" tabindex="-1"  id="loginDialog" >\
			<div class="modal-dialog dialogBox absolute bgWhite centerFix" style="width: 600px; height: 400px;" >\
				<div class="blank40 titleCanel">\
					<button type="button" class="borderNone padding0 pull-right bgTran"  data-dismiss="modal">&times;</button>\
				</div>\
				<div class="homeDiaWrap f_14">\
					<div class="diaLeft">\
						<div class="row f_18 text-center c333 diaTabsTitle marginB20" id="diaTabsTitle">\
							<div class="col-xs-6 pointer active">快捷登录</div>\
							<div class="col-xs-6 pointer">普通登录</div>\
						</div>\
						<div class="diaTabsInfo">\
							<input type="text" class="text"  placeholder="手机号"/>\
							<div id="loginTabs">\
								<div class="row">\
									<div class="col-xs-8">\
										<input type="text" class="text" placeholder="短信验证码"/>\
									</div>\
									<div class="col-xs-4 codeM">\
										<button type="button" class="btn btn-warning width100  bgWhite cOrange">获取验证码</button>\
									</div>\
								</div>\
								<div class="relative passwordSee" style="display: none;">\
									<input type="password" class="text" placeholder="密码"/>\
								</div>\
							</div>\
							<div class="row">\
								<div class="col-xs-8">\
									<input type="text" class="text" placeholder="图形验证码"/>\
								</div>\
								<div class="col-xs-4 codeM">\
									<img src="img/test/codeM.png" />\
								</div>\
							</div>\
							<div class="checkbox margin0 marginB20">\
								<div class="row">\
									<div class="col-xs-6">\
										<label>\
									    	<input type="checkbox"> 自动登录\
									    </label>\
									</div>\
									<div class="col-xs-6 text-right" id="forgetPassWord" style="display: none;">\
										<a href="#" class="c666">忘记密码</a>\
									</div>\
								</div>\
							</div>\
							<button type="button" class="btn btn-warning width100">登 录</button>\
						</div>\
					</div>\
					<div class="diaRight text-center c333">\
						<div class=" marginB20">其他登录方式</div>\
						<div class="otherLogin f_24 padding10">\
							<i class="marginB20 fa fa-weixin center-block tran3 pointer"></i>\
							<i class="marginB20 fa fa-weibo center-block tran3 pointer"></i>\
							<i class="marginB20 fa fa-qq center-block tran3 pointer"></i>\
						</div>\
						<span class="f_16">还没有账号？</span><a class="cOrange f_18" href="javascript:void(0);" id="nextDialog" data-type="1">注册</a>\
					</div>\
					<div class="blank0"></div>\
				</div>\
			</div>\
		</div>';
		$('body').append(htmlK);//插入节点
		$('#loginDialog').modal('show');//显示弹框
		$app.loginDiaFun();//登录框函数
	},
	
	/***************************************
	 * 登录框函数
	 ***************************************/
	loginDiaFun:function(){
		//点击眼睛查看密码 插件
		$app.passwordSee();
		
		//登录框选项卡
		var diaTabsTitle=$('#diaTabsTitle').children('.col-xs-6');
		diaTabsTitle.on('click',function(){
			var xu=$(this).index();
			$app.nearActive(diaTabsTitle,xu);
			
			//忘记密码
			if(xu==1){
				$('#forgetPassWord').show();
			}else{
				$('#forgetPassWord').hide();
			}
			
			//选项卡切换
			var loginTabs=$('#loginTabs').children('div');
			loginTabs.eq(xu).show().siblings().hide();
			
			var inputText=$('.diaTabsInfo').find('input');
			inputText.val('');//清空文字数据
			
			var eye = $('#loginDialog').find('.passwordSee i');
			if(eye.hasClass('eye2')){//让眼睛闭上
				eye.trigger('click');
			}
		});
		
	
		
		//关闭弹框时候 触发
		$('#loginDialog').on('hide.bs.modal', function () {
			$(this).remove();//删除自己 万物初始
		});
	},
	
	
	/***************************************
	 * 注册弹框
	 ***************************************/
	registerGoOpen:function(){
		//注册框 DOM
		var htmlK='<div class="modal fade padding0" tabindex="-1"  id="registerDialog" >\
			<div class="modal-dialog dialogBox absolute bgWhite centerFix" style="width: 600px; height: 460px;" >\
				<div class="blank40 titleCanel">\
					<button type="button" class="borderNone padding0 pull-right bgTran"  data-dismiss="modal">&times;</button>\
				</div>\
				<div class="homeDiaWrap f_14">\
					<div class="diaLeft">\
						<div class="diaTabsInfo">\
							<div class=" f_18 c333 marginB20 f_bold text-left">注册途趣账号</div>\
							<div class="blank10"></div>\
							<input type="text" class="text"  placeholder="手机号"/>\
							<div class="row">\
								<div class="col-xs-8">\
									<input type="text" class="text" placeholder="短信验证码"/>\
								</div>\
								<div class="col-xs-4 codeM">\
									<button type="button" class="btn btn-warning width100  bgWhite cOrange">获取验证码</button>\
								</div>\
							</div>\
							<div class="relative passwordSee">\
								<input type="password" class="text" placeholder="密码"/>\
							</div>\
							<input type="text" class="text"  placeholder="用户名(选填)"/>\
							<div class="checkbox margin0 marginB20">\
								<label>\
							    	<input type="checkbox" checked> 同意\
							    </label>\
							    <a href="#" class="cOrange">《途趣服务协议》</a>\
							</div>\
							<button type="button" class="btn btn-warning width100">登 录</button>\
						</div>\
					</div>\
					<div class="diaRight text-center c333">\
						<div class=" marginB20">其他登录方式</div>\
						<div class="blank30"></div>\
						<div class="otherLogin f_24 padding10">\
							<i class="marginB20 fa fa-weixin center-block tran3 pointer"></i>\
							<i class="marginB20 fa fa-weibo center-block tran3 pointer"></i>\
							<i class="marginB20 fa fa-qq center-block tran3 pointer"></i>\
						</div>\
						<div class="blank30"></div>\
						<span class="f_16">已有账号？</span><a class="cOrange f_18" href="javascript:void(0);" id="nextDialog" data-type="2">登录</a></div>\
					</div>\
					<div class="blank0"></div>\
				</div>\
			</div>\
		</div>';
		
		$('body').append(htmlK);//插入节点
		$('#registerDialog').modal('show');//显示弹框
		$app.registerDiaFun();//注册框函数
	},
	
	/***************************************
	 * 注册框函数
	 ***************************************/
	registerDiaFun:function(){
		//点击眼睛查看密码 插件
		$app.passwordSee();
		
		//关闭弹框时候 触发
		$('#registerDialog').on('hide.bs.modal', function () {
			$(this).remove();//删除自己 万物初始
		});
	},
	
	
	/***************************************
	 * 注册/登录弹框 切换 处理
	 ***************************************/
	nextDialog:function(){
		$(document).on('click','#nextDialog',function(){
			$('.modal-backdrop').remove();//黑色背景删除
			var type=$(this).data('type');//1注册/2登录
			if(type==1){//切换成 注册框
				$('#loginDialog').remove();
				$('#registerGo').trigger('click');
			}else{//切换成 登录框
				$('#registerDialog').remove();
				$('#loginGo').trigger('click');
			}
		});
	},
	
	/**
	 * 正整数 正则验证
	 **/
	numPlus:function(num){
		return /^\d+$/.test(num);
	},
	
	
	
	
	
	
	
	
	
	/***************************************
	 * 首页侧栏 homeSide 右下角
	 ***************************************/
	homeSide:function(){
		//右边侧栏 固定
		var htmlK='<div id="izl_rmenu" class="izl-rmenu">\
			<div class="izl_btn izl_love"></div>\
			<div class="izl_btn izl_call"></div>\
			<div class="izl_btn izl_info"></div>\
			<div class="izl_btn izl_top"></div>\
		</div>';
		
		$('body').append(htmlK);
		
		$("#izl_rmenu").each(function(){
			$(this).find(".izl_top").click(function(){
				$("html, body").animate({
					"scroll-top":0
				},"fast");
			});
		});
		
		var lastRmenuStatus='';
		var initTop=$(window).scrollTop();
		if(initTop==0){
			lastRmenuStatus=false;
		}else{
			lastRmenuStatus=true;
			$("#izl_rmenu .izl_top").slideDown();
		}
		
		$(window).scroll(function(){
			var _top=$(window).scrollTop();
			if(_top>200){
				$("#izl_rmenu").data("expanded",true);
			}else{
				$("#izl_rmenu").data("expanded",false);
			}
			if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
				lastRmenuStatus=$("#izl_rmenu").data("expanded");
				var izl_top=$("#izl_rmenu .izl_top").find('.izl_top');
				if(lastRmenuStatus){
					$("#izl_rmenu .izl_top").slideDown();
				}else{
					$("#izl_rmenu .izl_top").slideUp();
				}
			}
		});
	}
	
};

//require 自定义模块 最标准的AMD写法
define(['$'], function() {
	return $app;
});