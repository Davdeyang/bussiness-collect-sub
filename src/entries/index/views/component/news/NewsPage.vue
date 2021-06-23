<template>
    <div class="news-box">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <ul class="news-box-list">
                <li
                    class="news-box-list-item"
                    v-for="(item, index) in newsList"
                    :key="index"
                    @click="handleClickToListDetail(index, item)"
                >
                    <van-row>
                        <van-col class="new-box-item-left" span="16">
                            <p class="news-box-title">{{ item.title }}</p>
                            <span class="new-box-company"
                                >浏览量 {{ item.readnum }}</span
                            >
                            <span class="new-box-date">{{
                                item.publish_time
                            }}</span>
                        </van-col>
                        <van-col class="new-box-item-right" span="8">
                            <img
                                :src="
                                    '/api/appendix/image/' +
                                    item.picture_id +
                                    '.jspx'
                                "
                                alt=""
                            />
                        </van-col>
                    </van-row>
                </li>
            </ul>
        </van-pull-refresh>
    </div>
</template>

<script>
import listDetails from "../../../js/listDetails";
import { Toast } from "vant";
export default {
    data() {
        return {
            // news_list_two: [],
            newsList: [],
            listId: "",
            listDetail: listDetails,
            page: 1,
            rows: 10,
            datax: 1,
            finished: false,
            loading: false,
            refreshing: false,
        };
    },

    created() {
        let vm = this;
        vm.departementCard();
    },
    mounted() {
        let state = JSON.stringify(this.$route.query.id);
        if (state != "") {
            this.roll();
        }
    },

    methods: {
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.departementCard();
        },


        departementCard: async function () {
            let vm = this;
            let param = {
                category: "2SVV7JRO",
                page: 1,
                rows: 10,
            };
            const res = await vm.http.post(
                "api/portal.php?resid=headline.indexlist",
                param
            );
            if (vm.refreshing) {
                vm.newsList = [];
                vm.refreshing = false;
            }
            vm.loading = false;
            let data = res.data;
            vm.newsList = data.data;
        },

        roll() {
            let vm = this;
            let num = 1;
            //滚动加载
            window.onscroll = function () {
                var scrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop; //获取距离顶部的距离
                var windowHeight =
                    document.documentElement.clientHeight ||
                    document.body.clientHeight; //获取可视区域高度
                var scrollHeight =
                    document.documentElement.scrollHeight ||
                    document.body.scrollHeight; //获取滚动条高度

                if (scrollTop + windowHeight == scrollHeight) {
                    vm.type = true;
                    let page = ++num;
                    let param = {
                        category: "2SVV7JRO",
                        page: page,
                        rows: 10,
                    };
                    Toast.loading({
                        message: "加载中...",
                        forbidClick: true,
                        loadingType: "spinner",
                        duration:500,
                    });
                    const res = vm.http
                        .post("api/portal.php?resid=headline.indexlist", param)
                        .then((res) => {
                            vm.type = false;
                            let data = res.data;
                            vm.newsList = vm.newsList.concat(data.data);
                        });
                }
            };
        },

        // 进入详情页面
        handleClickToListDetail(index, item) {
            let vm = this;
            vm.$router.push({
                path: `/newsDetail/${index}`,
                query: {
                    item: item,
                },
            });
        },
    },
};
</script>

<style scoped lang="scss">
.news-box {
    width: 100%;
    height: 100%;

    .news-box-list {
        overflow: hidden;
        .news-box-list-item {
            background: #ffff;
            border-bottom: 1px solid #eee;
            padding: 10px 15px;
            position: relative;
            .new-box-item-left {
                .news-box-title {
                    font-size: 16px;
                    margin-bottom: 3px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .new-box-company {
                    color: #999999;
                    margin-right: 5px;
                    position: absolute;
                    bottom: 0;
                }
                .new-box-date {
                    color: #999999;
                    position: absolute;
                    bottom: 0;
                    left: 80px;
                }
            }

            .new-box-item-right {
                overflow: hidden;
                img {
                    width: 100%;
                    height: 80px;
                }
            }
        }
    }

    .news-box-video {
        background: #ffff;
        padding: 0 10px;
        p {
            padding: 5px 0;
            font-size: 16px;
        }
        video {
            width: 100%;
        }
    }
}
img {
    width: 100%;
}
</style>