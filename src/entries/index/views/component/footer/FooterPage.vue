<template>
    <van-row>
        <van-col
            span="8"
            class="footer-item"
            v-for="(item, index) in footer"
            :key="index"
            :class="$route.path === item.url ? 'active-color' : ''"
            @click="handleClickActive(index)"
        >
            <span>
                <i :class="item.icon" />
            </span>
            <p>{{ item.titile }}</p>
        </van-col>
    </van-row>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
            footer: [
                {
                    icon: "iconfont icon-huabanfuben",
                    titile: "首页",
                    url:"/collect/page"
                },
                {
                    icon: "iconfont icon-bofang",
                    titile: "视频",
                    url:"/video/page"
                },
                {
                    icon: "iconfont icon-wode",
                    titile: "我的",
                    url:"/mine/page"
                },
            ],
        };
    },

    methods: {
        handleClickActive(param) {
            let vm = this;
            switch (param) {
                case 0:
                    vm.$router.push("/");
                    break;
                case 1:
                    vm.$router.push("/video/page");
                    break;
                case 2:
                    vm.$router.push("/mine/page");
                    break;
            }
        },
    },
};
</script>

<style scoped lang="scss">
.footer-item {
    text-align: center;
}

.active-color {
    color: rgb(238, 73, 69);
}
</style>