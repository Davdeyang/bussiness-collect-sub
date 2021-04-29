<template>
    <div
            class="page-list-box"
            :style="{
                backgroundColor:$store.state.layout_back_color
            }"
    >
        <h4 class="title">商机推广</h4>
        <ul
                class="collect-list-box"
                :style="{
                    backgroundColor:$store.state.layout_back_color
                }"
        >
            <li
                    v-for="(item,index) in pageList"
                    :key="index"
                    @click.stop="handleClickCollect(index)">
                <label
                        class="green_mark markPrint"
                        :style="{
                                backgroundColor:'green'
                        }"
                        v-if="item.status === 'QY01'"
                >
                    已启用
                </label>
                <label
                        class="green_mark markPrint"
                        :style="{
                                backgroundColor:'#cccccc'
                        }"
                        v-if="item.status === 'QY02'"
                >
                    已禁用
                </label>
                <van-image
                        v-if="item.quick_pic"
                        width="100%"
                        height="150"
                        lazy-load
                        :src="$store.state.pic_current_url + item.quick_pic + '.jspx'"
                />
                <!--                <img v-if="item.quick_pic"  v-lazy="item.quick_pic"  >-->
                <div v-else class="emptyImg">空白背景</div>
                <h3>{{item.name}}</h3>
                <div class="mask" v-show="activeIndex === index">
                    <span @click.stop="handleClickCollectWatch(item)"><van-icon name="eye-o" />生成海报</span>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
let toast = null;
import poster from "../../js/poster.js";
export default {
    name: "PageList",
    components:{

    },
    data(){
        return{
            poster:poster,
            page:1,
            pageList:[],
            activeIndex:null
        }
    },
    created() {
        let vm = this;
        toast = vm.$toast.loading({
            message: '数据加载中...',
            forbidClick: true,
            loadingType: 'spinner',
            duration:200000
        });
        vm.getCollectConfigList();
    },
    mounted() {
        let vm = this;
        /**
         * body事件
         */
        document.body.addEventListener('click',function(){
            vm.activeIndex = null;
        })
    },
    methods:{
        /**
         * 获取设置的主题列表
         */
        getCollectConfigList: async function() {
            let vm = this;
            let params = {
            }
            const res = await vm.http.get('/api/portal.php?resid=activity.available',params);
            if(!res){
                return
            }
            let data = res.data;
            if(data.status) {
                vm.pageList = data.data;
                toast.clear()
            }
        },
        /**
         * 查看模板
         */
        handleClickCollectWatch(item){
            let vm = this;
            //vm.poster.banner.img = item.poster_bg;
            vm.$router.push(`/poster/page/${JSON.parse(item.style).theme}/${item.id}/3`);
        },
        /**
         * 点击模板
         */
        handleClickCollect(index){
            let vm = this;
            vm.activeIndex = index;
        },
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
.page-list-box{
    height: 100%;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    overflow-y: scroll;
    .title{
        color: #525157;
        font-size: 16px;
        font-weight: bold;
    }
    .collect-list-box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 10px;
        li{
            width: 30%;
            height: 190px;
            margin-bottom: 10px;
            -moz-box-shadow:0px 2px 7px -1px #C4C4C4;
            -webkit-box-shadow:0px 2px 7px -1px #C4C4C4;
            box-shadow:0px 2px 7px -1px #C4C4C4;
            border-radius: 3px;
            position: relative;
            overflow: hidden;
            margin-right: 5%;
            img{
                width: 100%;
                height: 150px;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
            }
            h3{
                color: rgba(0,0,0,0.8);
                font-size: 12px;
                text-align: center;
            }
        }
        li:nth-child(3n+3) {
            margin-right: 0;
        }
    }
    .emptyImg{
        width: 100%;
        height: 150px;
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .new-build-box{
        padding: 10px 0 20px;
        .btn{
            width: 150px;
            padding: 40px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
            label{
                margin-top: 10px;
            }
        }
    }
}
.mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in;
    span{
        color: #FFFFFF;
        margin-bottom: 30px;
        font-size: 14px;
        display: flex;
        align-items: center;
        i{
            margin-right: 5px;
            font-size: 18px;
        }
    }
    span:last-of-type{
        margin-bottom: 0;
    }
}
.markPrint {
    position: absolute;
    top: 10px;
    right: -35px;
    width: 100px;
    height: 15px;
    line-height: 15px;
    color: #ffffff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    font-size: 11px;
    text-align: center;
    z-index: 99;
}
</style>
