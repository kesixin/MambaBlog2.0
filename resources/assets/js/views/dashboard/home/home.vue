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
        </Row>
    </div>
</template>

<script>
    export default{

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