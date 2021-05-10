<template>
    <div id="index">
        <transition name="component-fade" mode="out-in">
            <router-view :key="key"></router-view>
        </transition>
    </div>
</template>

<script>
	const storage = window.localStorage;
    export default {
        name: 'index',
        components: {

        },
        data(){
            return{
                transitionName:''
            }
        },
        created () {
			let vm = this;
        },
        mounted(){
            let vm = this;
            vm.getConfig();
        },
        computed:{
            key(){
                return this.$route.fullPath + Math.random();
            }
        },
        methods:{
            getConfig: async function () {
                let vm = this;
                let params = {};
                const res = await vm.http.post(vm.api.config, params);
                if (!res) {
                    return;
                }
                let config = res.data.data;
                vm.$store.commit('SetAgentConfig',res.data.datax);
                //vm.getAgentConfig(res.data.datax);
                /**
                 * config配置
                 */
                wx.config({
                    beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: config.appId, // 必填，企业微信的corpID
                    timestamp: config.timestamp, // 必填，生成签名的时间戳
                    nonceStr: config.nonceStr, // 必填，生成签名的随机串
                    signature: config.signature, // 必填，签名，见 附录-JS-SDK使用权限签名算法
                    jsApiList: ["hideOptionMenu", "onCloseWindow",'selectEnterpriseContact'], // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
                });
                /**
                 * 微信ready方法
                 */
                wx.ready(function () {
                    // wx.showAllNonBaseMenuItem();
                    wx.onCloseWindow(function () {
                        return confirm("确定要放弃当前页面的修改？");
                    });
                    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/minix";
    #index{
        @include set-width-height(100%,100%);
    }
</style>
