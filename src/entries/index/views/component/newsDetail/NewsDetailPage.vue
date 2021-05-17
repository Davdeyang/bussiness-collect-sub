<template>
    <div class="news-Detail-box">
        <h1>{{ listDetail.title }}</h1>
        <div
            v-html="
                listDetail.content ? 
                listDetail.content.replace(
                    '/appendix/image',
                    '/api/appendix/image'
                )
                :
                ''
            "
        >
            <!-- <img src="/upload/image/1620293001384096603.jpg" title=\"1620293001384096603.jpg\" alt=\"微信图片_20210414134633.jpg\"/> -->
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
        vm.getReadNum()
    },

    methods: {
        // 添加浏览量
        getReadNum() {
            let vm = this;
            let param = {
                rowid: vm.$route.query.item.id,
                readnum: vm.$route.query.item.readnum + 1,
            };
            vm.http
                .get("/api/comxact/save.jspx?resid=IDKOIBGAHP", param)
        },

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
                rowid: vm.$route.query.item.id,
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
.news-Detail-box {
    padding: 10px 15px;
    h1 {
        font-size: 18px;
        padding: 5px 0;
    }

    p {
        img {
            width: 100%;
        }
    }
}
</style>