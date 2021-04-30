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
                v-model="value"
                shape="round"
                background="#ee4945"
                placeholder="请输入搜索关键词"
            />
        </header>
        <section>
            <van-tabs v-model="active">
                <van-tab title="新闻">
                    <mine-news></mine-news>
                </van-tab>
                <van-tab title="视频">
                    <mine-video></mine-video>
                </van-tab>
                <van-tab title="一线">一线</van-tab>
                <van-tab title="媒体">媒体</van-tab>
                <van-tab title="公告">公告</van-tab>
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
    name: "news",
    components: {
        "mine-news": news,
        "mine-video": video,
        "mine-footer": footer,
    },
    data() {
        return {
            active: 0,
            value:"他大爷的"
        };
    },
    mounted() {},
};
</script>

<style scoped lang="scss">
.business-collect-box {
    height: 100%;
    width: 100%;
    footer {
        padding: 5px 0;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: #ffffff;
    }
}
</style>
