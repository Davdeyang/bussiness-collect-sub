<template>
    <div class="news-Detail-box">
        <h1>{{ listDetail.title }}</h1>
        <ul class="Detail-box-biaoji">
            <li>
                <span>发布人:</span>
                <span>{{ listDetail.auth }}</span>
            </li>
            <li>
                <span>{{ listDetail._audit_date }}</span>
            </li>
            <li>
                <i class="iconfont icon-chakan"></i>
                <span>{{ listDetail.readnum }}</span>
            </li>
        </ul>
        <div
            v-html="
                listDetail.content
                    ? listDetail.content.replace(
                          '/appendix/image',
                          '/api/appendix/image'
                      )
                    : ''
            "
        ></div>
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
        vm.getReadNum();
    },

    methods: {
        // 添加浏览量
        getReadNum() {
            let vm = this;
            let param = {
                rowid: vm.$route.query.item.id,
                readnum: vm.$route.query.item.readnum + 1,
            };
            vm.http.get("/api/comxact/save.jspx?resid=IDKOIBGAHP", param);
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
                console.log(JSON.stringify(vm.listDetail));
                toast.clear();
            }
        },
    },
};
</script>

<style scoped lang="scss">
.news-Detail-box {
    padding: 10px 23px;
    h1 {
        font-size: 22px;
        padding: 5px 0;
    }
    .Detail-box-biaoji {
        margin: 10px 0;
        display: flex;
        li {
            margin-right: 10px;
            span {
                font-size: 14px;
                color: #8b8888ee;
            }
            i {
                font-size: 22px;
                vertical-align: sub;
                margin-right: 3px;
            }
        }
    }
    p {
        img {
            width: 100%;
        }
    }
}
</style>