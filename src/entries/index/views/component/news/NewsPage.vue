<template>
    <div class="news-box">
        <ul class="news-box-list">
            <li
                class="news-box-list-item"
                v-for="(item, index) in newsList"
                :key="index"
            >
                <van-row>
                    <van-col class="new-box-item-left" span="16">
                        <p class="news-box-title">{{ item.title }}</p>
                        <span class="new-box-company">{{ item.company }}</span>
                        <span class="new-box-date">{{ item.date }}</span>
                    </van-col>
                    <van-col class="new-box-item-right" span="8">
                        <img :src="item.img" alt="" />
                    </van-col>
                </van-row>
            </li>
        </ul>
        <div class="news-box-video">
            <p>
                {{video_title.title}}
            </p>
            <video autoplay :src="video_title.video"></video>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newsList: [
                {
                    title: "中国电信与中国建研院签署战略合作协议",
                    company: "中国电信",
                    date: "1天前",
                },
                {
                    title:
                        "不要眼眶一红，就觉得人间不值得，散伙是人间常态，你我怎能例外。",
                    company: "中国电信",
                    date: "1天前",
                    img: require("../../../../../assets/images/head2.jpeg"),
                },
                {
                    title: "一个嗯，一个哦，毁了我想说的所有话",
                    company: "中国电信",
                    date: "1天前",
                    img: require("../../../../../assets/images/head3.jpeg"),
                },
            ],
            video_title: {
                title: "服了肯定撒荆防颗粒sad接口发了肯定积分卡萨地方撒大连科技方式拉拉裤京东方",
                video: require("../../../../../assets/video/视频一.mp4"),
            },
        };
    },
};
</script>

<style scoped lang="scss">
.news-box {
    width: 100%;
    height: 100%;

    .news-box-list {
        overflow: hidden;
        .news-box-list-item {
            background: #ffff;
            border-bottom: 1px solid #eee;
            padding: 10px 15px;

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
                    width: 81px;
                }
            }
        }
    }

    .news-box-video {
        background: #ffff;
        padding: 0 10px;
        p{
            padding: 5px 0;
            font-size: 16px;
        }
        video {
            width: 100%;
        }
    }
}
</style>