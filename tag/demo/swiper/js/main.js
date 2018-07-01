/********************
* Power by 一代聪师
* Start 2018-03-01
* requireJS 总配置
*********************/
require.config({
	//基础路径
	baseUrl:'./js',
	//模块路径
	paths:{
		'css':'./css.min',//css依赖库
		'$':'./jquery.min',
		'bootstrap':'./bootstrap.min',
		'easydialog':'../easydialog/easydialog.min',//弹框组件
		
		//日历组件
		'moment':'../daterangepicker/moment.min',
		'daterangepicker':'../daterangepicker/daterangepicker',
		
		//滑动组件
		'swiper':'../swiper/idangerous.swiper.min',
		
		//放大镜
		'jqzoom':'../jqzoom/jqzoom.2.2',
		
		'app':'./app'//AMD封装函数
		
	},
	
	//依赖关系
	shim:{
		'app':{//AMD模块配置
			'deps':['$','bootstrap','easydialog']
		},
		'swiper':{//幻灯片
			'deps':['$','css!../swiper/idangerous.swiper.css']
		},
		'bootstrap':{
			'deps':['$']
		},
		'daterangepicker':{//日历依赖
			'deps':['moment','css!../daterangepicker/daterangepickerHome.css']
		},
		'easydialog':{//弹框依赖
			'deps':['css!../easydialog/easydialog.css']
		},
		'jqzoom':{
			'deps':['$','css!../jqzoom/jqzoom.2.2.css']
		}
	}
});
