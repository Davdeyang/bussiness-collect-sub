<template>
    <div class="video-box">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <ul class="video-box-list">
                <li
                    class="video-box-list-item"
                    v-for="(vid, index) in results"
                    :key="index"
                    @click="handleClickToVideoDetail(index, vid)"
                >
                    <img
                        :src="'/api/appendix/image/' + vid.picture_id + '.jspx'"
                    />
                    <div class="video-box-item-bottom">
                        <span>{{ vid.title }}</span>
                        <span>{{ vid.publish_time }}</span>
                    </div>
                </li>
            </ul>
        </van-pull-refresh>
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
        //下拉刷新
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.departementCard();
        },

        //获取视频列表
        departementCard: async function () {
            let vm = this;
            let param = {
                page: 1,
                rows: 10,
            };
            const res = await vm.http.post(
                "api/portal.php?resid=headline.indexlist&category=2SX3D0G0",
                param
            );
            if (vm.refreshing) {
                vm.results = [];
                vm.refreshing = false;
            }
            vm.loading = false;
            vm.results = res.data.data;
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
                        category: "2SX3D0G0",
                        page: page,
                        rows: 10,
                    };
                    Toast.loading({
                        message: "加载中...",
                        forbidClick: true,
                        loadingType: "spinner",
                        duration: 500,
                    });
                    const res = vm.http
                        .post("api/portal.php?resid=headline.indexlist", param)
                        .then((res) => {
                            vm.type = false;
                            let data = res.data;
                            vm.results = vm.results.concat(data.data);
                        });
                }
            };
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
img {
    width: 100%;
}
</style>