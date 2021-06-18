<template>
    <div class="video-box">
        <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <ul class="video-box-list">
                    <li
                        class="video-box-list-item"
                        v-for="(vid, index) in results"
                        :key="index"
                        @click="handleClickToVideoDetail(index, vid)"
                    >
                        <img
                            :src="
                                '/api/appendix/image/' +
                                vid.picture_id +
                                '.jspx'
                            "
                        />
                        <div class="video-box-item-bottom">
                            <span>{{ vid.title }}</span>
                            <span>{{ vid.publish_time }}</span>
                        </div>
                    </li>
                </ul>
            </van-list>
        </van-pull-refresh> -->

        <ul class="video-box-list">
            <li
                class="video-box-list-item"
                v-for="(vid, index) in results"
                :key="index"
                @click="handleClickToVideoDetail(index, vid)"
            >
                <img :src="'/api/appendix/image/' + vid.picture_id + '.jspx'" />
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
            imgSrc: "",
            loading: false,
            finished: false,
            refreshing: false,
        };
    },
    created() {
        this.getVideoList();
    },

    methods: {
        //获取视频列表
        getVideoList: async function () {
            let vm = this;
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
                vm.loading = false;
                data.data.forEach((item) => {
                    if (item._category === "视频") {
                        vm.results.push(item);
                    }
                });
            }
            if (data.data.length === 0) {
                vm.finished = true;
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

        onLoad() {
            setTimeout(() => {
                this.getVideoList();
                this.loading = false;
            }, 500);
        },
        onRefresh() {
            // 清空列表数据
            this.refreshing = false;
            this.finished = false;
            this.loading = false;
            this.results = [];
            this.onLoad();
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
img {
    width: 100%;
}
</style>