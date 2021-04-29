import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/index.js'
import '../../assets/scss/common.scss'
import http   from './http.js';
import api     from '../../api/apiBase.js'
import cookie  from '../../assets/js/cookie.js'
import VueLazyLoad from 'vue-lazyload'     //图片懒加载
import vcolorpicker from 'vcolorpicker'
/**
 * vant(有赞)移动端组件引入
 */
import { 
	Button,
	Cell,
	CellGroup,
	Icon,
	Image as VanImage,
	Col,
	Row,
	Popup,
	Toast,
	Calendar,
	Cascader,
	Checkbox, 
	CheckboxGroup,
	DatetimePicker,
	Field,
	Form,
	PasswordInput,
	NumberKeyboard,
	Picker,
	RadioGroup,
	Radio,
	Search,
	Slider,
	Stepper,
	Switch,
	Uploader,
	ActionSheet,
	Dialog,
	DropdownMenu,
	DropdownItem,
	Loading,
	Notify,
	Overlay,
	PullRefresh,
	SwipeCell,
	Circle,
	Collapse,
	CollapseItem,
	Tabbar,
	TabbarItem,
	Swipe,
	SwipeItem,
	Lazyload,
	Grid,
	GridItem,
	NavBar,
	Skeleton,
	NoticeBar,
	List,
	Tab,
	Tabs,
	TreeSelect,
	ImagePreview
} from 'vant';
// 引入全部样式
import 'vant/lib/index.less';

Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(Calendar);
Vue.use(Cascader);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(DatetimePicker);
Vue.use(Field);
Vue.use(Form);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Picker);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Search);
Vue.use(Slider);
Vue.use(Stepper);
Vue.use(Switch);
Vue.use(Uploader);
Vue.use(ActionSheet);
Vue.use(Dialog);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Loading);
Vue.use(Notify);
Vue.use(Overlay);
Vue.use(PullRefresh);
Vue.use(SwipeCell);
Vue.use(Circle);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Skeleton);
Vue.use(NoticeBar);
Vue.use(List);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(TreeSelect);
Vue.use(ImagePreview);
Vue.use(vcolorpicker);
/**
 * 全局配置common方法
 */
Object.assign(Vue.prototype,{
    http,          //ajax封装的请求
    api,           //接口地址全局封装
    cookie,        //cookie
});
 /**
  * 懒加载使用
  */
Vue.use(VueLazyLoad,{
    error:'',      //加载失败的图
    loading:''     //加载中的默认图
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#index');
