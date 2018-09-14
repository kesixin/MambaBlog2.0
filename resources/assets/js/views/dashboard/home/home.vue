<template>
    <div class="home-main">
        <Row :gutter="10">
            <Col :md="24" :lg="8">
                <Row class-name="home-page-row1" :gutter="10">
                    <Col :md="12" :lg="24" :style="{marginBottom: '10px'}">
                    <Card>
                        <Row type="flex" class="user-infor">
                            <Col span="8">
                            <Row class-name="made-child-con-middle" type="flex" align="middle">
                                <img class="avator-img" :src="avatar" />
                            </Row>
                            </Col>
                            <Col span="16" style="padding-left:6px;">
                            <Row class-name="made-child-con-middle" type="flex" align="middle">
                                <div>
                                    <b class="card-user-infor-name">{{ name }}</b>
                                </div>
                            </Row>
                            </Col>
                        </Row>
                        <div class="line-gray"></div>
                        <Row class="margin-top-8">
                            <Col span="24"><p class="notwrap">{{ user_description }}</p></Col>
                        </Row>
                    </Card>
                    </Col>
                </Row>
            </Col>

            <Col :md="24" :lg="16">
            <Row :gutter="5">
                <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                <infor-card
                        id-name="user_created_count"
                        iconType="android-person-add"
                        color="#2d8cf0"
                        intro-text="今日新增用户数"
                ></infor-card>
                </Col>
                <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                <infor-card
                        id-name="visit_count"
                        iconType="ios-book"
                        color="#64d572"
                        :iconSize="50"
                        intro-text="今日新增文章数"
                ></infor-card>
                </Col>
                <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                <infor-card
                        id-name="collection_count"
                        iconType="ios-eye"
                        color="#ffd572"
                        intro-text="今日文章流量量"
                ></infor-card>
                </Col>
                <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                <infor-card
                        id-name="transfer_count"
                        iconType="chatboxes"
                        color="#f25e43"
                        intro-text="今日新增文章评论数"
                ></infor-card>
                </Col>
            </Row>
            </Col>
        </Row>
    </div>
</template>

<script>
    import inforCard from './components/inforCard.vue';

    export default{
        name:"home",
        components:{
            inforCard
        },
        computed:{
            name() {
                console.log(this.$store.state.user.userinfo.name);
                return this.$store.state.user.userinfo.nickname ? this.$store.state.user.userinfo.nickname : this.$store.state.user.userinfo.name;
            },
            avatar() {
                return this.$store.state.user.userinfo.avatar;
            },
            user_description() {
                return  this.$store.state.user.userinfo.description;
            }
        }
    }
</script>

<style lang="less">
    @import "./home.less";
</style>