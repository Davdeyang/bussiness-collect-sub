const icon1 = require('../images/icon-01.png');
const icon2 = require('../images/icon-02.png');
const icon3 = require('../images/icon-03.png');
const icon4 = require('../images/icon-04.png');
const icon5 = require('../images/icon-05.png');
const icon6 = require('../images/icon-06.png');
const icon7 = require('../images/icon-07.png');
const icon8 = require('../images/icon-08.png');
const icon9 = require('../images/icon-09.png');
const icon10 = require('../images/icon-10.png');
const icon11 = require('../images/icon-11.png');
const icon12 = require('../images/icon-12.png');
const icon13 = require('../images/icon-13.png');
const icon14 = require('../images/Home_icon_fengxianfenji.png');
const icon15 = require('../images/Home_icon_wuzhengbeian.png');
const icon16 = require('../images/Home_icon_tongzhi.png');

const icon17 = require('../images/icom1.png');
const icon18 = require('../images/Home_-Unchecked.png');
const icon19 = require('../images/icom3.png');
const icon20 = require('../images/backlog_-Unchecked.png');
const icon21 = require('../images/icom2.png');
const icon22 = require('../images/nearby_-Unchecked.png');
const icon23 = require('../images/icom4.png');
const icon24 = require('../images/My-Center_-Unchecked.png');
const icon25 = require('../images/icon-22.png');
const icon27 = require('../images/icon-27.png');
const icon28 = require('../images/icon-28.png');
const icon29 = require('../images/icon-29.png');



const icon_1 = require('../images/icon-1.png'); //监管网格
const icon_2 = require('../images/icon-2.png'); //餐饮检查
const icon_3 = require('../images/icon-3.png'); //信息登记
const icon_4 = require('../images/icon-4.png'); //督察检查
const icon_5 = require('../images/icon-5.png'); //异常处理日志
const icon_6 = require('../images/icon-6.png'); //风险预警
const icon_7 = require('../images/icon-7.png'); //许可证预警
const icon_8 = require('../images/icon-8.png'); //摊贩备案
const icon_9 = require('../images/icon-9.png'); //原料索证
const icon_10 = require('../images/icon-10.png'); //摊贩登记
const icon_11 = require('../images/icon-11.png'); //专项检查
const icon_12 = require('../images/icon-12.png'); //流通检查
const icon_13 = require('../images/icon-13.png'); //摊贩检查
const icon_14 = require('../images/icon-14.png'); //专项预警
const icon_15 = require('../images/icon-15.png'); //明厨亮灶
const icon_16 = require('../images/icon-16.png'); //添加剂备案
const icon_17 = require('../images/icon-17.png'); //健康证预警
const icon_18 = require('../images/icon-18.png'); //清洗消毒
const icon_19 = require('../images/icon-19.png'); //图片台账
const icon_20 = require('../images/icon-20.png'); //废弃物记录
const icon_21 = require('../images/icon-21.png'); //聚餐记录
const icon_22 = require('../images/icon-22.png'); //设备预警
const icon_23 = require('../images/icon-23.png'); //无证备案
const icon_24 = require('../images/icon-24.png'); //风险分级
const icon_25 = require('../images/icon-25.png'); //量化分级
const icon_26 = require('../images/icon-26.png'); //食品留样
const storage = window.localStorage;
let url = '';
// if(JSON.parse(storage.getItem('baseInfo')).role_type === 'X2LWMTQJG') {
//    url = '/page/major_person/';
// }else{
//    url = '/page/major_events/';
// }
export default {
	icon17,
	icon18,
	icon19,
	icon20,
	icon21,
	icon22,
	icon23,
	icon24,
	// pdf,
	inspectList:[
		{
			icon:icon_1,
			title:'监管网格',
		},
		{
			icon:icon_2,
			title:'日常检查',
		},
		{
			icon:icon_3,
			title:'信息登记',
		},
		{
			icon:icon_4,
			title:'监督检查',
		},
		{
			icon:icon_5,
			title:'设备处理',
		},
		{
			icon:icon_6,
			title:'设备管理',
		},
		{
			icon:icon_7,
			title:'视频监控',
		},
		{
			icon:icon_25,
			title:'量化分级',
		},
		{
			icon:icon_9,
			title:'食品摊贩',
		},
	],
	forms:[
		{
			name:'问题严重程度 ',
			key:'programseverity',
			_key:'_programseverity',
			type: 'select',
			value: '',
			_value:'',
			rows: '1',
			required: true,
			showPicker:false,
			enumops:'X2IVS9V20',
			options: [],
			disabled:false,
			tab:0,
		},
		{
			name:'是否立案 ',
			key:'isfiling',
			_key:'_isfiling',
			type: 'select',
			value: '',
			_value:'',
			rows: '1',
			required: true,
			showPicker:false,
			enumops:'X2HSRHCHF',
			options: [],
			disabled:false,
			tab:0,
		},
		{
		    name:'问题描述',
			key:'checkcontent',
			type:'text',
			value:'',
			rows:'3',
		    required:false,
		    show_word_limit:true,
			disabled:false,
			tab:0,
		},
		{
			name:'整改日期',
			key:'rectdate',
			_key:'_rectdate',
			value:'',
		    type:'date',
		    rows: '1',
			required:false,
			showCalendar:false,
			isDateChange:true,
			disabled:false,
			tab:0,
		},
		{
			name:'整改情况 ',
			key:'rectsituation',
			_key:'_rectsituation',
			type: 'select',
			value: '',
			_value:'',
			rows: '1',
			required: false,
			showPicker:false,
			enumops:'X2HST1H0Q',
			options: [],
			disabled:false,
			tab:0,
		},
		{
			name:'整改提醒周期 ',
			key:'rectremindercycle',
			_key:'_rectremindercycle',
			type: 'select',
			value: '',
			_value:'',
			rows: '1',
			required: false,
			showPicker:false,
			enumops:'X2IYLODRR',
			options: [],
			disabled:false,
			tab:0,
		},
		{
			name:'整改提醒日期',
			key:'rectdate',
			_key:'_rectdate',
			value:'',
		    type:'date',
		    rows: '1',
			required:false,
			showCalendar:false,
			isDateChange:true,
			disabled:false,
			tab:0,
		},
		{
		    name: '整改提醒时间点',
		    key:"recthour",
			_key:"rectminutes",
		    type:'time',
		    value:'',
		    _value:'',
		    row:'1',
		    required:false,
		    showPickerTime:false,
		    tab:0,
		    timeValue:'',
		},
		{
		    name:'整改到位（情况说明）',
			key:'rectnotestr',
			type:'text',
			value:'',
			rows:'3',
		    required:false,
		    show_word_limit:true,
			disabled:false,
			tab:0,
		}
	],
	itemList:[
		{
			name:'快捷业务',
			children:[
				{
					icon:icon_2,
					title:'餐饮检查',
					url:'/page/restautant_check/'
				},
				{
					icon:icon_12,
					title:'流通检查',
					url:'/page/circulation_check/'
				},
				{
					icon:icon_13,
					title:'摊贩检查',
					url:'/page/food_vendors_check/'
				},
			]
		},
		{
			name:'预警功能',
			children: [
				{
					icon:icon_7,
					title:'许可证预警',
					url:'/page/licence_warning/'
				},
				{
					icon:icon_17,
					title:'健康证预警',
					url:'/page/health_warning/'
				},
				{
					icon:icon_22,
					title:'设备预警',
					url:'/page/equipment_warning/'
				},
				{
					icon:icon_5,
					title:'异常处理日志',
					url:'/page/equipment_abnormal/'
				},
				// {
				// 	icon:icon_14,
				// 	title:'离线时间配置',
				// 	url:'/page/offline_time/'
				// },
				{
					icon:icon_14,
					title:'专项预警',
					url:'/page/special_warning/'
				},
				{
					icon:icon_6,
					title:'风险预警',
					url:'/page/risk_warning/'
				},
			]
		},
		{
			name: '食品餐饮环节',
			children: [
				{
					icon:icon_2,
					title:'餐饮检查',
					url:'/page/restautant_check/'
				},
				{
					icon:icon_1,
					title:'监管网格',
					url:'/restautrant_grid/'
				},
				{
					icon:icon_3,
					title:'信息登记',
					url:'/page/restautrant_register/'
				},
				{
					icon:icon_4,
					title:'督察检查',
					url:'/page/restautrant_supervision/'
				},
				{
					icon:icon_25,
					title:'量化分级',
					url:'/page/quantitative_grade/'
				},
				{
					icon:icon_24,
					title:'风险分级',
					url:'/page/risk_restautrant/'
				},
				{
					icon:icon_11,
					title:'专项检查',
					url:'/page/special_check/'
				},
				{
					icon:icon_23,
					title:'无证备案',
					url:'/page/unlicensed/'
				},
				{
					icon:icon_15,
					title:'明厨亮灶',
					url:'/page/kitchen/'
				},
			]
		},
		{
			name:'食品流通环节',
			children:[
				{
					icon:icon_12,
					title:'流通检查',
					url:'/page/circulation_check/'
				},
				{
					icon:icon_1,
					title:'监管网格',
					url:'/regulatory_grid/'
				},
				{
					icon:icon_3,
					title:'信息登记',
					url:'/page/circulation_register/'
				},
				{
					icon:icon_4,
					title:'督察检查',
					url:'/page/circulation_supervision/'
				},
				{
					icon:icon_24,
					title:'风险分级',
					url:'/page/risk_classification/'
				},
			]
		},
		{
			name:'食品摊贩环节',
			children:[
				{
					icon:icon_13,
					title:'摊贩检查',
					url:'/page/food_vendors_check/'
				},
				{
					icon:icon_8,
					title:'摊贩备案',
					url:'/page/food_vendors/'
				},
				{
					icon:icon_10,
					title:'摊贩登记',
					url:'/page/food_vendors_register/'
				},
			]
		},
		{
			name:'规范经营-政府',
			children:[
				{
					icon:icon_9,
					title:'原料索证',
					url:'/page/stock/'
				},
				{
					icon:icon_18,
					title:'清洗消毒',
					url:'/page/clean/'
				},
				{
					icon:icon_20,
					title:'废弃物记录',
					url:'/page/waste/'
				},
				{
					icon:icon_26,
					title:'食品留样',
					url:'/page/dinner/'
				},
				{
					icon:icon_21,
					title:'聚餐记录',
					url:'/page/sample/'
				},
				{
					icon:icon_19,
					title:'图片台账',
					url:'/page/book/'
				},
				{
					icon:icon_16,
					title:'添加剂备案',
					url:'/page/additive/'
				},
			]
		},
		{
			name: '重大活动',
			children: [
				{
					icon:icon12,
					title:'重大活动',
					url:'/page/major_events/'
				},
			]
		},
		{
			name: '内部办公',
			children: [
				{
					icon:icon28,
					title:'通知公告',
					url:'/page/notice/'
				},
			]
		}
	],
	operateList:[
		{
			icon:icon_9,
			title:'原料索证',
			url:'/page/stock/'
		},
		{
			icon:icon_18,
			title:'清洗消毒',
			url:'/page/clean/'
		},
		{
			icon:icon_20,
			title:'废弃物记录',
			url:'/page/waste/'
		},
		{
			icon:icon_26,
			title:'食品留样',
			url:'/page/dinner/'
		},
		{
			icon:icon_21,
			title:'聚餐记录',
			url:'/page/sample/'
		},
		{
			icon:icon_19,
			title:'图片台账',
			url:'/page/book/'
		},
		{
			icon:icon_16,
			title:'添加剂备案',
			url:'/page/additive/'
		},
	],
	operateList1:[
		{
			icon:icon_7,
			title:'许可证预警',
			url:'/page/licence_warning/'
		},
		{
			icon:icon_17,
			title:'健康证预警',
			url:'/page/health_warning/'
		},
		{
			icon:icon_22,
			title:'设备预警',
			url:'/page/equipment_warning/'
		},
		{
			icon:icon_5,
			title:'设备异常处理日志',
			url:'/page/equipment_abnormal/'
		},
		{
			icon:icon5,
			title:'离线时间配置',
			url:'/page/offline_time/'
		},
		{
			icon:icon7,
			title:'专项逾期未开展预警',
			url:'/page/special_warning/'
		},
		{
			icon:icon_6,
			title:'风险分级逾期未评定预警',
			url:'/page/risk_warning/'
		},
	],
	homeList:[
		{
			icon:icon6,
			title:'流通环节',
			url:'/circulation/'
		},
		{
			icon:icon25,
			title:'餐饮环节',
			url:'/restaurant/'
		},
		{
			icon:icon27,
			title:'食品摊贩',
			url:'/peddler/'
		},
		// {
		// 	icon:icon9,
		// 	title:'重大活动',
		// 	url:'/page/major_events/'
		// }
		{
			icon:icon28,
			title:'通知公告',
			url:'/page/notice/'
		},
		{
			icon:icon29,
			title:'规范经营-政府',
			url:'/standard_operate/'
		},
		// {
		// 	icon:icon_9,
		// 	title:'打印',
		// 	url:'/system_warning/'
		// },
	],
	menuList1:[
		{
			icon:icon_1,
			title:'监管网格',
			url:'/restautrant_grid/'
		},
		{
			icon:icon_3,
			title:'信息登记',
			url:'/page/restautrant_register/'
		},
		{
			icon:icon_4,
			title:'督察检查',
			url:'/page/restautrant_supervision/'
		},
		{
			icon:icon_25,
			title:'量化分级',
			url:'/page/quantitative_grade/'
		},
		{
			icon:icon_24,
			title:'风险分级',
			url:'/page/risk_restautrant/'
		},
		{
			icon:icon_11,
			title:'专项检查',
			url:'/page/special_check/'
		},
		{
			icon:icon_23,
			title:'无证备案',
			url:'/page/unlicensed/'
		},
		{
			icon:icon_15,
			title:'明厨亮灶',
			url:'/page/kitchen/'
		},
	],
	menuList:[
		{
			icon:icon_1,
			title:'监管网格',
			url:'/regulatory_grid/'
		},
		{
			icon:icon_3,
			title:'信息登记',
			url:'/page/circulation_register/'
		},
		{
			icon:icon_4,
			title:'督察检查',
			url:'/page/circulation_supervision/'
		},
		{
			icon:icon_24,
			title:'风险分级',
			url:'/page/risk_classification/'
		},
	],
	menuList2:[
		{
			icon:icon_8,
			title:'摊贩备案',
			url:'/page/food_vendors/'
		},
		{
			icon:icon_13,
			title:'摊贩检查',
			url:'/page/food_vendors_check/'
		},
		{
			icon:icon_10,
			title:'摊贩登记',
			url:'/page/food_vendors_register/'
		},
	]
}