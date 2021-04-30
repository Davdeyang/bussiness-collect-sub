import Vue from 'vue'
// @ts-ignore
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		common_back_color:'#3a74c5',             //公共背景色
		form_margin_top:15,                      //表单距上一元素的高度
		insertMiddleIndex:'',
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
