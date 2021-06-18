<template>
    <div class="video-detail-box">
        <video
            v-if="listDetail.video_id"
            :src="'/api/appendix/preview/' + listDetail.video_id + '.jspx'"
            controls
        ></video>
        <div class="prism-player" id="player-con"></div>
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
            console.log(JSON.stringify(data));
            if (data.status) {
                vm.listDetail = data.data;
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
        height: 200px;
    }
}
</style>