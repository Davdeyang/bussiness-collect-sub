<template>
    <div class="mine-box">
        我的页面

        <footer>
            <mine-footer></mine-footer>
        </footer>
    </div>
</template>

<script>
import footer from "../views/component/footer/FooterPage.vue";

export default {
    components: {
        "mine-footer": footer,
    },
    data() {
        return {};
    },
};
</script>

<style scoped lang="scss">
.mine-box {
    
    footer {
        padding: 5px 0;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: #ffffff;
    }
}
</style>