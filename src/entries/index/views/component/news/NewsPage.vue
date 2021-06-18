<template>
    <div class="news-box">
        <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
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
                                <p>{{ item.digest }}</p>
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
            </van-list>
        </van-pull-refresh> -->

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
                        <!-- <p>{{ item.digest }}</p> -->
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
    </div>
</template>

<script>
import listDetails from "../../../js/listDetails";
export default {
    data() {
        return {
            newsList: [],
            listId: "",
            listDetail: listDetails,
            loading: false,
            finished: false,
            refreshing: false,
        };
    },

    mounted() {
        let vm = this;
        vm.getNewsList();
    },

    methods: {
        // 获取新闻列表
        getNewsList: async function () {
            let vm = this;

            const toast = vm.$toast.loading({
                message: "加载中...",
                forbidClick: true,
                loadingType: "spinner",
                duration: 200000,
            });

            let param = {
                 sign: vm.$route.params.sign,
            };

            const res = await vm.http.get(
                // "/api/selectact/query.jspx?resid=IDKO29N4TY",
                "api/portal.php?resid=headline.indexlist",
                param
            );
            if (!res) {
                return;
            }
            let data = res.data;
            if (data.status) {
                data.data.forEach((item) => {
                    if (item._category === "新闻") {
                        vm.newsList.push(item);
                        vm.listId = item.id;
                    }
                });
                // alert(JSON.stringify(vm.newsList))
                toast.clear();
            }
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

        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                    this.newsList = [];
                    this.refreshing = false;
                }

                for (let i = 0; i < 0; i++) {
                    this.newsList.push(this.newsList.length + 1);
                }
                this.loading = false;

                if (this.newsList.length >= 10) {
                    this.finished = true;
                }
            }, 1000);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
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