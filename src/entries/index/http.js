'use strict';

import axios from 'axios'
import qs from 'qs'   //qs组件来避开ajax信使请求，并兼容Android。
import Vue from 'vue'
import router from './router'
import cookie from "../../assets/js/cookie";
let Base64 = require('js-base64').Base64;
import { Toast } from 'vant';
Vue.use(Toast);
let vm = new Vue({
    router
});
// console.log(router)
/**
 * http请求拦截器
 */
axios.interceptors.request.use(config => {
    //config.headers['Cookie'] = 'JSESSIONID=ED6A20048D8C07ABD6556B90EE823EDE';
    return config
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    return response
}, error => {

});

function checkStatus (response) {
	if(
		response.data 
		&& !Array.isArray(response.data)
		&& !response.data.status){
		if(response.data.code === 'S002') {
			vm.$router.push('/login/');
			vm.$toast.fail('登录失效，请您重新登录！');
			// vm.$notify({ type: 'danger', message: '登录失效，请您重新登录！' })
			return
		}else if( window.location.href.includes('order')){
            //
        }else{
            Toast.fail(response.data.message);
        }
		return
	}else{
		return response
	}
}

function checkCode (res) {
   return res
}

export default {
    post (url, data) {
        return axios({
            method: 'post',
            baseURL: '/',
            url,
            data: JSON.stringify(data),
            //dataType:(data.dataType||'json'),
            timeout: 100000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                "Content-Type": "application/json",
            },
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    },
    get (url, params) {
        return axios({
            method: 'get',
            baseURL: '/',
            url,
            params, // get 请求时带的参数
            timeout: 100000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                "Content-Type": "application/json",
            },
            //dataType:(param.dataType||'json'),
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    },
	upload (url, params) {
        return axios({
            method: 'post',
            baseURL: '/',
            url,
            params, // get 请求时带的参数
            timeout: 100000,
            headers: {
               'Content-Type': 'multipart/form-data'
            },
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    },
}
