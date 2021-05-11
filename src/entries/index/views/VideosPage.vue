<template>
    <div class="video-boxs">
        <van-search
            v-model="title"
            shape="round"
            background="#3a74c5"
            placeholder="请输入搜索关键词"
            @search="getNewsList()"
        />

        <section v-if="searchList.length <= 0">
            <van-tabs v-model="active" color="#3a74c5">
                <van-tab title="视频">
                    <mine-video></mine-video>
                </van-tab>
                <van-tab title="新闻">
                    <mine-news></mine-news>
                </van-tab>
                <van-tab title="一线">
                </van-tab>
            </van-tabs>
        </section>
        <section v-else-if="searchList.length > 0">
            <ul class="video-box-list">
                <li
                    class="video-box-list-item"
                    v-for="(vid, index) in searchList"
                    :key="index"
                    @click="handleClickToVideoDetail(index, vid)"
                >
                    <video
                        :src="'/api/appendix/preview/' + vid.video_id +'.jspx'"
                        controls
                    ></video>
                    <div class="video-box-item-bottom">
                        <span>{{ vid.title }}</span>
                        <span>{{ vid.publish_time }}</span>
                    </div>
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
    components: {
        "mine-news": news,
        "mine-video": video,
        "mine-footer": footer,
    },
    data() {
        return {
            active: 0,
            title: "",
            searchList: [],
        };
    },

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
                title: vm.title,
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
                    if (item._category === "视频") {
                        vm.searchList.push(item);
                    }
                });
                toast.clear();
            }
        },

        handleClickToVideoDetail(index, vid) {
            let vm = this;
            vm.$router.push({
                path: `/videoDetail/${index}`,
                query: {
                    video: vid,
                },
            });
        },
    },
};
</script>

<style scoped lang="scss">
.video-boxs {
    background: #ffffff;

    .video-box-list {
        overflow: hidden;
        .video-box-list-item {
            margin-top: 10px;
            padding: 10px;
            video {
                width: 100%;
                height: 200px;
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