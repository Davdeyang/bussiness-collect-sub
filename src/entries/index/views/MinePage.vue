<template>
    <div class="mine-box">
        <div class="mine-box-header">
            <img src="../../../assets/images/head2.jpeg" alt="" />
            <div class="mine-header-detail">
                <div class="header-name">
                    <span>丽丽</span>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
                <div class="header-num">
                    <i class="iconfont icon-jinbi"></i>
                    <span>455</span>
                </div>
            </div>
        </div>

        <div>
            
        </div>

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
    .mine-box-header {
        padding: 50px 40px 0px 40px;
        img {
            width: 70px;
            border-radius: 50%;
            float: left;
        }

        .mine-header-detail {
            margin-top: 10px;
            margin-left: 88px;

            .header-name {
                margin-left: 15px;
                margin-bottom: 5px;
                span {
                    font-size: 17px;
                    margin-right: 5px;
                }
                i {
                    font-size: 12px;
                }
            }

            .header-num {
                padding: 3px 10px;
                display: inline-block;
                background: #e4e4e4;
                border-radius: 9px;
                i {
                    color: red;
                    font-size: 20px;
                    margin-right: 5px;
                }
            }
        }
    }
    footer {
        padding: 5px 0;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: #ffffff;
    }
}
</style>