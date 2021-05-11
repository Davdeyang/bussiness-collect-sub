<template>
    <div
        class="mine-box"
        :style="{
            backgroudColor: $store.state.common_back_color,
        }"
    >
        <header class="mine-box-header">
            <img :src="userDetail.avatar" alt="" />
            <div class="mine-header-detail">
                <div class="header-name">
                    <span>{{ userDetail.username }}</span>
                    <i :class="userDetail.icon_youjiantou"></i>
                </div>
                <div class="header-num">
                    <i :class="userDetail.icon_jinbi"></i>
                    <span>455</span>
                </div>
            </div>
        </header>

        <!-- <main>
            <div class="video-box-item-bottom">
                <p class="mine-mian-history">浏览记录</p>
                <video
                    class="mine-mian-video"
                    src="../../../assets/video/视频一.mp4"
                    controls
                ></video>
                <span>
                    {{list.content}}
                </span>
            </div>
            <div class="mine-mian-second">
                <van-row>
                    <van-col class="new-box-item-left" span="16">
                        <p class="news-box-title">{{ list.content }}</p>
                        <span class="new-box-company">{{ list.company }}</span>
                        <span class="new-box-date">{{ list.dates }}</span>
                    </van-col>
                    <van-col class="new-box-item-right" span="8">
                        <img :src="list.img" alt="" />
                    </van-col>
                </van-row>
            </div>

        </main> -->

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
        return {
            userDetail: {
                avatar: require("../../../assets/images/head2.jpeg"),
                username: "丽丽",
                icon_youjiantou: "iconfont icon-youjiantou",
                icon_jinbi: "iconfont icon-jinbi",
            },

            list: {
                content: "视频内容",
                company: "中国电信",
                dates: "1天前",
                img: require("../../../assets/images/head2.jpeg"),
            },

        };
    },
};
</script>

<style scoped lang="scss">
.mine-box {
    background: #eee;
    header {
        padding: 50px 40px 10px 40px;
        overflow: hidden;
        background: #ffffff;
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

    main {
        overflow: hidden;
        background: #ffffff;
        margin: 10px 0;

        .video-box-item-bottom {
            border-bottom: 1px solid #eeeeee;
            padding: 10px;
            .mine-mian-history {
                text-align: center;
                margin-bottom: 10px;
                font-size: 16px;
            }

            .mine-mian-video {
                width: 100%;
            }
        }

        .mine-mian-second {
            border-bottom: 1px solid #eeeeee;
            padding: 10px;
            .new-box-item-left {
                .news-box-title {
                    font-size: 16px;
                    margin-bottom: 3px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .new-box-company {
                    color: #999999;
                    margin-right: 5px;
                }
                .new-box-date {
                    color: #999999;
                }
            }

            .new-box-item-right {
                overflow: hidden;
                img {
                    width: 100%;
                    height: 80px;
                }
            }
        }

        .mine-mian-threed {
            .mine-main-img {
                overflow: hidden;
                .mine-main-img-item {
                    float: left;
                    img {
                        width: 30%;
                    }
                }
            }
        }
    }

    footer {
        padding: 5px 0;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: #fcfafa;
    }
}
</style>