import Vue from 'vue'
import Router from 'vue-router'
import store from './vuex/index.js'
const storage = window.localStorage;
Vue.use(Router);

const vm = new Vue({
	store
});

const router = new Router({
	// base:"/headline",
	routes: [
		{
			path: '/',
			redirect: '/collect/page',
		},
		{
			path: '/video/page',
			component: (resolve) => require(['@/entries/index/views/VideosPage.vue'], resolve),
			meta: {
				title: "视频"
			},
		},
		{
			path: '/mine/page',
			component: (resolve) => require(['@/entries/index/views/MinePage.vue'], resolve),
			meta: {
				title: "我的"
			},
		},
		{
			path: '/collect/page',
			component: (resolve) => require(['@/entries/index/views/BusinessCollectPage.vue'], resolve),
			meta: {
				title: "首页"
			},
		},
		{
			path: '/newsDetail/:id',
			component: (resolve) => require(['@/entries/index/views/component/newsDetail/NewsDetailPage.vue'], resolve),
			meta: {
				title: "列表详情"
			},
		},
		{
			path: '/videoDetail/:id',
			component: (resolve) => require(['@/entries/index/views/component/videoDetail/VideoDetailPage.vue'], resolve),
			meta: {
				title: "视频详情"
			},
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
