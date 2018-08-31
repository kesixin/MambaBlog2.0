<template>
    <v-toolbar style="box-shadow: 0 3px 8px -4px rgba(0,0,0,0.15);background-color: #fff;z-index:999;height: 64px;">
        <v-container style="padding: 0;height: 100%;">
            <router-link to="/" class="uk-navbar-brand">
                <img src="/images/logo.png" class="avatar">
            </router-link>

            <div class="uk-navbar-flip uk-hidden-small">
                <div class="uk-navbar-content">
                    <router-link to="/login">
                        <v-btn class="white--text" color="indigo">登录</v-btn>
                    </router-link>
                </div>
                <div class="uk-navbar-content">
                    <router-link to="/register">
                        <v-btn depressed class="white--text" color="pink">注册</v-btn>
                    </router-link>
                </div>
            </div>
        </v-container>
    </v-toolbar>
</template>

<script>
    export default{

    }
</script>

<style scoped>
    .uk-navbar-brand{
        font-size: 20px;
        color: #525255;
        text-decoration: none;
        box-sizing: border-box;
        display: block;
        height:100%;
        padding:0 15px;
        float: left;
        position: relative;
    }

    .uk-navbar-flip {
        float: right;
        height:100%;
        padding: 0.9em 1.5em;
    }
    .uk-navbar-content{
        box-sizing: border-box;
        height: 100%;
        float: left;
        position: relative;
        font-size: 14px;
    }
    .uk-navbar-content:before, .uk-navbar-brand:before, .uk-navbar-toggle:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
</style>
