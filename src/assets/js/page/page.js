import stock from './standard_operate/stock.js'
import clean from './standard_operate/clean.js'
import waste from './standard_operate/waste.js'
import dinner from './standard_operate/dinner.js'
import sample from './standard_operate/sample.js'
import book from './standard_operate/book.js'
import additive from './standard_operate/additive.js'
import licence_warning from './system_warning/licence_warning.js'
import health_warning from './system_warning/health_warning.js'
import equipment_warning from './system_warning/equipment_warning.js'
import equipment_abnormal from './system_warning/equipment_abnormal.js'
import offline_time from './system_warning/offline_time.js'
import special_warning from './system_warning/special_warning.js'
import risk_warning from './system_warning/risk_warning.js'
import food_vendors from './food_vendors/food_vendors.js'
import risk_classification from './risk_classification/risk_classification.js'
import risk_restautrant from './risk_classification/risk_restautrant.js'
import unlicensed from './unlicensed/unlicensed.js'
import circulation_supervision from './circulation_supervision/circulation_supervision.js'
import restautrant_supervision from './circulation_supervision/restautrant_supervision.js'
import special_check from './special_check/special_check.js'
import major_events from './major_events/major_events.js'
import major_events_branch from './major_events/major_events_branch.js'
import major_events_office from './major_events/major_events_office.js'
import major_person from './major_events/major_person.js'
import major_form from './major_events/major_form.js'
import daily_check from './daily_check/daily_check.js'
import food_vendors_register from './food_vendors_register/food_vendors_register.js'
import food_vendors_check from './check/food_vendors_check.js'
import circulation_check from './check/circulation_check.js'
import fankui from './check/fankui.js'
import restautant_check from './daily_check/restautant_check.js'

import notice from './notice/Notice.js'
import quantitative_grade from './quantitative_grade/quantitative_grade.js'
import quantitative_grade_edit from './quantitative_grade/quantitative_grade_edit.js'
import circulation_register from './register/circulation_register.js'
import restautrant_grid from './register/restautrant_grid.js'
import circulation_grid from './register/circulation_grid.js'
import restautrant_register from './register/restautrant_register.js'
import daily_document from './daily_check/daily_document.js'
import vendors_document from './food_vendors/vendors_document.js'
import restantant_document from './daily_check/restautant_document.js'
import circulation_document from './circulation_supervision/circulation_document.js'
import send_receipt_order from './daily_check/send_receipt_order.js'
import seal_up_order from './daily_check/seal_up_order.js'
import seal_up_delay_order from './daily_check/seal_up_delay_order.js'
import scene_check_record_order from './daily_check/scene_check_record_order.js'
import notice_correct_order from './daily_check/notice_correct_order.js'
import food_supervision_inspection_order from './food_vendors/food_supervision_inspection_order.js'
import food_circulation_inspection_order from './circulation_supervision/food_circulation_inspection_order.js'
import pre_assessment_form from './major_events/pre_assessment_order.js'
import recipe_review_form from './major_events/recipe_review_order.js'
import menu_page_form from './major_events/menu_page.js'
import notice_of_form from './major_events/notice_of_order.js'
import basic_information_form from './major_events/basic_information.js'
import rectification_review_form from './major_events/rectification_review_form.js'
import letter_of_commitment_word from './major_events/letter_of_commitment.js'
import inspection_record_sheet_form from './major_events/inspection_record_sheet.js'
import sample_record_form from './major_events/sample_record.js'
import registration_rapid_form from './major_events/registration_rapid.js'
import emergency_response_form from './major_events/emergency_response.js'
import other_attachments_form from './major_events/other_attachments.js'
import information_notification_record_form from './major_events/information_notification_record.js'
import summary_all_form from './major_events/summary_all.js'
import enclosure_all_word from './major_events/enclosure_all.js'
import notes_page_form from './major_events/notes_page.js'
import major_person_list from './major_events/major_person_form.js'

import diaoli from './system_warning/diaoli.js'
import chenjian from './system_warning/chenjian.js'
/**
 * 重大活动表单路由
 */
import kitchen from './kitchen/kitchen.js'
export default{
	/**
	 * 系统预警模块
	 */
	licence_warning,
	//许可证预警
	health_warning,
	//健康证预警
	equipment_warning,
	//设备预警
	equipment_abnormal,
	//设备异常处理日志
	offline_time,
	//离线时间配置
	special_warning,
	//专项逾期未开展预警
	risk_warning,
	//风险分级逾期未评定预警
	//调离
	diaoli,
	//晨检
	chenjian,
	/**
	 * 规范经营模块
	 */
	//原料索证视图
	stock,
	//清洗消毒
	clean,
	//废弃物记录
	waste,
	//食品留样
	dinner,
	//聚餐备案
	sample,
	//图片台账
	book,
	//添加剂备案
	additive,
	/**
	 * 食品摊贩备案模块
	 */
	food_vendors,
	/**
	 * 食品摊信息登记
	 */
	food_vendors_register,
	//食品摊贩检查
	food_vendors_check,
	//食品摊贩文书
	vendors_document,
	//流通检查文书
	circulation_document,
	/**
	 * 流通风险等级模块
	 */
	risk_classification,
	//餐饮风险分级
	risk_restautrant,
	/**
	 * 无证备案模块
	 */
	unlicensed,
	/**
	 * 督查检查模块
	 */
	circulation_supervision,
	//餐饮督察
	restautrant_supervision,
	/**
	 * 专项检查模块
	 */
	special_check,
	/**
	 * 重大活动模块
	 */
	//市局
	major_events,
	//分局
	major_events_branch,
	//监管所
	major_events_office,
	//重大活动表单
	major_form,
	//重大活动-监管员
	major_person,
	//事前评估表
	pre_assessment_form,
	//食谱审查记录表
	recipe_review_form,
	//菜单页
	menu_page_form,
	//责令改正通知书
	notice_of_form,
	//基本情况登记表
	basic_information_form,
	//整改情况复查表
	rectification_review_form,
	//承诺书
	letter_of_commitment_word,
	//巡查记录单
	inspection_record_sheet_form,
	//留样记录核查表
	sample_record_form,
	//现场快速检测登记表
	registration_rapid_form,
	//应急处置情况登记表
	emergency_response_form,
	//其他附件
	other_attachments_form,
	//信息通报记录
	information_notification_record_form,
	//总结
	summary_all_form,
	//附件
	enclosure_all_word,
	//记事页
	notes_page_form,
	/**
	 * 日常执法检查
	 */
	daily_check,
	//餐饮日常检查
	restautant_check,
	//文书处理
	daily_document,
	//送达回执
	send_receipt_order,
	//查封（扣押）决定书
	seal_up_order,
	//查封（扣押）延期通知书
	seal_up_delay_order,
	//现场检查笔录
	scene_check_record_order,
	//责令改正通知书
	notice_correct_order,
	//食品摊贩监督检查要点表
	food_supervision_inspection_order,
	//食品流通监督检查要点表
	food_circulation_inspection_order,
	
	//保障人员
	major_person_list,
	/**
	 * 通知公告
	 */
	notice,
	/**
	 * 量化分级
	 */
	quantitative_grade,
	//详情
	quantitative_grade_edit,
	/**
	 * 流通登记
	 */
	circulation_register,
	/**
	 * 餐饮登记
	 */
	restautrant_register,
	/**
	 * 监管网格（流通）
	 */
	circulation_grid,
	/**
	 * 监管网格（流通）
	 */
	restautrant_grid,
	/**
	 * 食品流通检查
	 */
	circulation_check,
	//餐饮文书
	restantant_document,
	//明厨亮灶
	kitchen,
	fankui
}
