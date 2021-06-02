<template>
    <div
        class="business-collect-box"
        :style="{
            backgroundColor: $store.state.layout_back_color,
        }"
    >
        <!--head-->
        <header>
            <van-search
                v-model="search"
                shape="round"
                background="#3a74c5"
                placeholder="请输入搜索关键词"
                @search="getNewsList()"
            />
        </header>
        <section v-if="searchList.length <= 0">
            <van-tabs v-model="active" color="#3a74c5">
                <van-tab title="新闻">
                    <mine-news></mine-news>
                </van-tab>
                <van-tab title="视频">
                    <mine-video></mine-video>
                </van-tab>
                <van-tab title="一线"></van-tab>
                <van-tab title="媒体"></van-tab>
                <!-- <van-tab title="公告"></van-tab> -->
            </van-tabs>
        </section>
        <section v-else-if="searchList.length > 0">
            <ul class="news-box-list">
                <li
                    class="news-box-list-item"
                    v-for="(item, index) in searchList"
                    :key="index"
                    @click="handleClickToListDetail(index, item)"
                >
                    <van-row>
                        <van-col class="new-box-item-left" span="16">
                            <p class="news-box-title">{{ item.title }}</p>
                            <p>{{ item.digest }}</p>
                            <span class="new-box-company"
                                >阅读量 {{ item.readnum }}</span
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
        </section>

        <footer>
            <mine-footer></mine-footer>
        </footer>
    </div>
</template>

<script>
import news from "../views/component/news/NewsPage.vue";
import video from "../views/component/video/VideoPage.vue";
import footer from "../views/component/footer/FooterPage.vue";
export default {
    name: "news",
    components: {
        "mine-news": news,
        "mine-video": video,
        "mine-footer": footer,
    },
    data() {
        return {
            active: 0,
            search: "",
            searchList: [],
        };
    },
    mounted() {},

    methods: {
        getNewsList: async function () {
            let vm = this;
            const toast = vm.$toast.loading({
                message: "加载中...",
                forbidClick: true,
                loadingType: "spinner",
                duration: 200000,
            });

            let param = {
                title: vm.search,
            };

            const res = await vm.http.get(
                "/api/selectact/query.jspx?resid=IDKO29N4TY",
                param
            );
            if (!res) {
                return;
            }
            let data = res.data;
            if (data.status) {
                data.data.forEach((item) => {
                    if (item._category === "新闻") {
                        vm.searchList.push(item);
                    }
                });
                toast.clear();
            }
        },

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
.business-collect-box {
    height: 100%;
    width: 100%;
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

    footer {
        padding: 5px 0;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: #fcfafa;
    }
}
</style>
