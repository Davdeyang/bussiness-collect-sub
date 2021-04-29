import Vue from 'vue'
import Router from 'vue-router'
import store from './vuex/index.js'
const storage = window.localStorage;
Vue.use(Router);

const vm = new Vue({
	store
});

const router = new Router({
	base:"/bc",
	routes: [
		{
			path: '/',
			redirect: '/collect/page',
		},
	]
});
/**
 * 当路由开始跳转时
 *
 */
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
});
/**
 * 当路由跳转结束后
 */
router.afterEach(() => {
});
export default router;
