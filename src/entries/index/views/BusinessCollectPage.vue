<template>
    <div
        class="business-collect-box"
        :style="{
            backgroundColor: $store.state.layout_back_color,
        }"
    >
        <!--        head-->
        <div
            class="collect-head"
            :style="{
                backgroundColor: $store.state.common_back_color,
            }"
        >
            <div class="head-box-left" @click="handleClickUser">
                <img :src="res.avatar" />
                <p>
                    <span>{{ res.name }}</span>
                    <label v-show="jurisdiction">管理员</label>
                </p>
            </div>
            <div class="head-box-right">
                <div class="make-btn" @click="handleClickMake">制作商机单</div>
            </div>
        </div>
        <!--        content-->
        <div class="content-box">
            <div class="cont-abs">
                <!--                all-->
                <div class="all" @click="handleClickAll">
                    <span :class="$route.query.title ? 'content-hidden' : ''">
                        全部
                    </span>
                    <span
                        :class="
                            $route.query.title === '按条件筛选'
                                ? 'filter-color'
                                : ''
                        "
                        >{{ $route.query.title }}</span
                    >
                    <label
                        :class="
                            $route.query.title === '按条件筛选'
                                ? 'filter-color'
                                : ''
                        "
                    >
                        <i class="iconfont icon-Group"> </i>
                    </label>
                </div>
                <div class="collect-order" @click="handleClickBusiness">
                    <div class="business-opportunity-list">
                        <h4>商机单数</h4>
                        <label>
                            <i class="iconfont icon-youjiantou"></i>
                        </label>
                    </div>
                    <ul>
                        <li>
                            <span
                                :class="
                                    $route.query.title ? 'content-hidden' : ''
                                "
                                >{{ stat.total }}</span
                            >
                            <span>{{ $route.query.totals }}</span>
                            <span>{{ $route.query.overalls }}</span>
                            <label>总单数</label>
                        </li>
                        <li>
                            <span
                                :class="
                                    $route.query.title ? 'content-hidden' : ''
                                "
                                >{{ stat.today }}</span
                            >
                            <span>{{ $route.query.todays }}</span>
                            <span>{{ $route.query.today1 }}</span>
                            <label>今日新增</label>
                        </li>
                        <li>
                            <span
                                :class="
                                    $route.query.title ? 'content-hidden' : ''
                                "
                                >{{ stat.todo }}</span
                            >
                            <span>{{ $route.query.todo2 }}</span>
                            <span>{{ $route.query.todo1 }}</span>
                            <label>待处理</label>
                        </li>
                    </ul>
                </div>
                <!-- tools-->
                <div class="tools-box">
                    <h4>工具</h4>
                    <ul>
                        <li
                            class="tools-box-item"
                            v-for="(tool, index) in tools"
                            :key="index"
                            @click="handleClickToolItem(tool)"
                        >
                            <i
                                class="iconfont"
                                :class="tool.icon"
                                :style="{
                                    color: tool.color,
                                    fontSize: tool.fontSize + 'px',
                                }"
                            >
                            </i>
                            <span>{{ tool.name }}</span>
                        </li>
                    </ul>
                </div>
                <!--                动态-->
                <div class="dynamic-box">
                    <h4>成员动态</h4>
                    <ul>
                        <li v-for="(person, index) in persons" :key="index">
                            <img :src="person.headImg" />
                            <span>{{ person.name }}</span>
                            <label
                                :style="{
                                    color: '#666666',
                                }"
                            >
                                {{ person.text }}
                            </label>
                        </li>
                    </ul>
                </div>
                <!--                统计-->
                <div class="statistics-box" @click="handleClickStatistics">
                    <h4>成员单量统计</h4>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
                <!-- foot-->
                <comp-business-collect-foot
                    :class="jurisdiction === false ? 'content-hidden ' : ''"
                ></comp-business-collect-foot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "BusinessCollectPage",
    components: {
        CompBusinessCollectFoot,
    },
    data() {
        let vm = this;
        return {

        };
    },
    mounted() {
    },

    methods: {},
};
</script>

<style scoped lang="scss">
.business-collect-box {
    height: 100%;
    width: 100%;
}
</style>
