<template>
    <div class="video-box">
        <ul class="video-box-list">
            <li
                class="video-box-list-item"
                v-for="(vid, index) in results"
                :key="index"
                @click="handleClickToVideoDetail(index, vid)"
            >
                <video
                    :src="'/api/appendix/preview/' + vid.video_id + '.jspx'"
                    controls
                ></video>
                <div class="video-box-item-bottom">
                    <span>{{ vid.title }}</span>
                    <span>{{ vid.publish_time }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            results: [],
        };
    },

    mounted() {
        let vm = this;
        vm.getVideoList();
    },

    methods: {
        getVideoList: async function () {
            let vm = this;
            const toast = vm.$toast.loading({
                message: "加载中...",
                forbidClick: true,
                loadingType: "spinner",
                duration: 200000,
            });

            let param = {};

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
                        vm.results.push(item);
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
.video-box {
    background: #ffffff;
    .video-box-list {
        overflow: hidden;
        .video-box-list-item {
            margin-top: 10px;
            padding: 0 10px;
            .video-box-item-bottom {
                span {
                    margin: 0 10px;
                }
            }
            video {
                width: 100%;
                height: 200px;
            }
        }
    }
}
</style>