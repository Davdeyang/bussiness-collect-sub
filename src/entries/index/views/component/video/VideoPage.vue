<template>
    <div class="video-box">
        <ul class="video-box-list">
            <li
                class="video-box-list-item"
                v-for="(vid, index) in videoList"
                :key="index"
            >
                <video :src="vid.video" autoplay></video>
                <div class="video-box-item-bottom">
                    <span>
                        <i :class="vid.icon"></i>
                    </span>
                    <span class="bottom-">{{ vid.company }}</span>
                    <span>{{ vid.date }}</span>
                    <span>
                        <i :class="vid.icons"></i>
                    </span>
                    <span>{{ vid.looks }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videoList: [
                {
                    video: require("../../../../../assets/video/视频一.mp4"),
                    icon: "iconfont icon-zhongguodianxin",
                    company: "中国电信",
                    date: "45分钟前",
                    icons: "iconfont icon-chakan",
                    looks: 1000,
                },
                {
                   video: require("../../../../../assets/video/视频二.mp4"),
                    icon: "iconfont icon-zhongguodianxin",
                    company: "中国电信",
                    date: "45分钟前",
                    icons: "iconfont icon-chakan",
                    looks: 1000,
                },
                {
                   video: require("../../../../../assets/video/视频一.mp4"),
                    icon: "iconfont icon-zhongguodianxin",
                    company: "中国电信",
                    date: "45分钟前",
                    icons: "iconfont icon-chakan",
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
}
</style>