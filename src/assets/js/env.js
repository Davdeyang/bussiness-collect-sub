import http   from '../../entries/index/http.js';
import api     from '../../api/apiBase.js'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
const _this = new Vue

class ENV {
	constructor () {
	    
	}
	/**
	 * 登录前获取系统环境数据
	 * @param {Function} callback
	 */
	preinit (callback) {
		let vm = this;
		vm.clear();
		vm.getPlains(callback)
	}
	
	// getPlains: async function(callback) {
	//     let vm = this;
	//     let params = {}
	//     const response = await http.get(api.PLAINS,params);
	//     if(!response){
	//         return
	//     }
	//     if(response.status == true) {
	//    	sput('SYSTEM_ENV', response.data);
	//    	if(callback) {
	//    		callback(response.data);
	//    	}
	//    } else {
	//    	//vstoast('加载环境数据出错！');
	// 	Toast.fail('加载环境数据出错!');
	//    	console.error(JSON.stringify(response));
	//    	if(callback) {
	//    		callback(false, response.message);
	//    	}
	//    }
	// }
	
	sget (key) {
		var value = '';
		if(!value) {
			return null;
		}
		try {
			return JSON.parse(value);
		} catch(err) {
			return value;
		}
	}
	
	senv () {
		let vm = this;
		var data = vm.sget('SYSTEM_ENV');
		if(!data) {
			//console.error('环境数据还未初始化，请调用env.preinit()方法初始化。');
			Toast.fail('环境数据还未初始化，请调用env.preinit()方法初始化。');
		}
		return data;
	}
	
	/**
	 * 登录后获取用户环境数据
	 * @param {Function} callback
	 */
	init (callback) {
		let vm = this;
		vm.initUser(function(arg1) {
			if(arg1 === false && callback != null) { // 用户加载失败
				callback(false);
				return false;
			}
			vm.getLoads();
		});
	}
	
	// getLoads: async function() {
	//     let vm = this;
	//     let params = {}
	//     const res = await http.get(api.LOADS,params);
	//     if(!res){
	//         return
	//     }
	//     if(res.status == true) {
	//     	sput('USER_ENV', res.data);
	//     } else {
	//     	Toast.fail('加载用户环境数据出错');
	//     }
	//     if(callback != null) {
	//     	callback(res.status);
	//     }
	// }
	
	uenv () {
		let vm = this;
		var data = vm.sget('USER_ENV');
		if(!data) {
			//console.error('环境数据还未初始化，请调用env.init()方法初始化。');
			Toast.fail('环境数据还未初始化，请调用env.init()方法初始化。');
		}
		return data;
	}
	
	// initUser: async function(callback) {
	//     let vm = this;
	//     let params = {}
	//     const res = await http.get(api.CURRENT_USER,params);
	//     if(!res){
	//         return
	//     }
	//    	if(response.status) {
	//    		lsput('CUSER', response.data);
	//    		if(callback) {
	//    			callback(response.data);
	//    		}
	//    	} else {
	//    		//vstoast('加载用户信息失败！');
	//    		Toast.fail('加载用户信息失败!');
	//    		console.error(JSON.stringify(response));
	//    		if(callback) {
	//    			callback(false, response.message);
	//    		}
	//    	}
	// }
	
	cuser () {
		var user = lsget('CUSER');
		if(user) {
			return user;
		} else {
			//console.error('用户信息还未初始化，请调用env.initUser()方法初始化。');
			Toast.fail('用户信息还未初始化，请调用env.initUser()方法初始化。!');
			return {};
		}
	}
	
	clear () {
		sremove('USER_ENV');
		lsremove('CUSER');
		lsremove(vsphost()); // 清除存储的cookie
		lsremove(vshost()); // 清除存储的cookie
		vshost(false);
	
		if(window.plus) {
			plus.navigator.removeAllCookie();
		}
	}
}

export default new ENV()