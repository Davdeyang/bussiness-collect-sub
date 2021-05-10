<template>
    <div class="video-detail-box">
        <video
            :src="'/api/appendix/loads/' + listDetail.video_id + '.jspx'"
            controls
        ></video>
        <div class="video-box-item-bottom">
            <span>{{ listDetail.title }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listDetail: {},
            listId: "",
        };
    },

    created() {
        let vm = this;
        vm.getListDetail();
    },

    methods: {
        // 点击获取列表详情
        getListDetail: async function () {
            let vm = this;
            const toast = vm.$toast.loading({
                message: "加载中...",
                forbidClick: true,
                loadingType: "spinner",
                duration: 200000,
            });

            let param = {
                rowid: vm.$route.query.video.id,
            };

            const res = await vm.http.get(
                "/api/comxact/load.jspx?resid=IDKO1B4X4Z",
                param
            );
            if (!res) {
                return;
            }
            let data = res.data;
            if (data.status) {
                vm.listDetail = data.data;
                toast.clear();
            }
        },
    },
};
</script>

<style scoped lang="scss">
.video-detail-box {
    padding: 10px;
    video {
        width: 100%;
    }
}
</style>