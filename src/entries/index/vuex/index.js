import Vue from 'vue'
// @ts-ignore
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		common_back_color:'#3a74c5',             //公共背景色
		form_margin_top:15,                      //表单距上一元素的高度
		insertMiddleIndex:'',
		pic_current_url:'/api/appendix/image/',  //图片路径前缀
		read_num:0                                //阅读量
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
		SetPicCurrentUrl(state,data){
			state.pic_current_url = data;
		},
		setReadNum(state,num){
			state.read_num = state.read_num + num;
		}
	},

	getters:{
		gourpManager:state => {
			return state.managerGroup 
		},

		subManagerGroup:state => {
			return state.subManagerGroup
		},
	}
})
