<template>
    <div class="video-box">
        <van-search
            v-model="value"
            shape="round"
            background="#ee4945"
            placeholder="请输入搜索关键词"
        />
        <section>
            <van-tabs v-model="active">
                <van-tab title="新闻">
                    <mine-news></mine-news>
                </van-tab>
                <van-tab title="视频">
                    <mine-video></mine-video>
                </van-tab>
                 <van-tab title="一线">
                    <mine-video></mine-video>
                </van-tab>
            </van-tabs>
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
            value: "你大爷的",
            videoList: [
                {
                    video: require("../../../assets/video/视频一.mp4"),
                    icon: "iconfont icon-zhongguodianxin",
                    company: "中国电信",
                    date: "45分钟前",
                    icons: "iconfont icon-chakan",
                    looks: 1000,
                },
                {
                    video: require("../../../assets/video/视频二.mp4"),
                    icon: "iconfont icon-youjiantou",
                    company: "中国电信",
                    date: "45分钟前",
                    icons: "iconfont icon-youjiantou",
                    looks: 1000,
                },
                {
                    video: require("../../../assets/video/视频一.mp4"),
                    icon: "iconfont icon-youjiantou",
                    company: "中国电信",
                    date: "45分钟前",
                    icons: "iconfont icon-youjiantou",
                    looks: 1000,
                },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
.video-box {
    width: 100%;
    height: 100%;
    background: #ffffff;

    .video-box-list {
        overflow: hidden;
        .video-box-list-item {
            margin-top: 10px;
            video {
                width: 100%;
            }
        }
    }

    footer {
        padding: 5px 0;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: #ffffff;
    }
}
</style>