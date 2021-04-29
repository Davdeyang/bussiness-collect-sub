import Vue from 'vue'
// @ts-ignore
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		common_back_color:'#3a74c5',             //公共背景色
		form_margin_top:15,                      //表单距上一元素的高度
		form_padding_left_right:12,              //表单距离两边的宽度
		layout_back_color:'#eff2f7',             //页面背景色
		insertPopup:false,                       //弹窗状态
		isInsertMiddleKey:false,                 //是否向中间插入的key
		insertMiddleIndex:'',
		pic_current_url:'/api/appendix/image/',  //图片路径前缀
		agentConfig:{},
		userList:[],							 //用户列表
		departementList :[],					 //部门列表
		errorText:'',
		data:[],								 //收集单结果
		list:false,								 //列表状态
		managerScope:[],                         //管理范围
		templateList:[],                         //负责人列表
		managerGroup:{},                         //负责人详情
		subManagerGroup:{},                      //下级负责人详情
		active:0,								 //列表切换状态

	},
	mutations:{
		setCommonBackColor(state,data){
			state.common_back_color = data;
		},
		SetFormMarginTop(state,data){
			state.form_margin_top = data;
		},
		SetFormPaddingLeftRight(state,data){
			state.form_padding_left_right = data;
		},
		SetLayoutBackColor(state,data){
			state.layout_back_color = data;
		},
		SetInsertPopup(state,data){
			state.insertPopup = data;
		},
		SetIsInsertMiddleKey(state,data){
			state.isInsertMiddleKey = data;
		},
		SetInsertMiddleIndex(state,data){
			state.insertMiddleIndex = data;
		},
		SetAgentConfig(state,data){
			state.agentConfig = data;
		},
		SetPicCurrentUrl(state,data){
			state.pic_current_url = data;
		},
		SetUserList(state,data){
			state.userList = data;
		},
		SetDepartementList(state,data){
			state.departementList = data
		},
		SetData(state,data){
			state.data = data;
		},
		SetErrorText(state,data){
			state.errorText = data
		},
		setList(state,data){
			state.list = data;
		},
		setManagerScope(state,data){
			state.managerScope = data;
		},
		setTemplateList(state,data){
			state.templateList = data;
		},
		setManagerGroup(state,data){
			state.managerGroup = data;
		},
		setActive(state,data){
			state.active = data;
		},
		setSubManagerGroup(state,data){
			state.subManagerGroup = data;
		},
	},

	getters:{
		gourpManager:state => {
			return state.managerGroup
		},

		subManagerGroup:state => {
			return state.subManagerGroup
		}
	}
})
