<template>
    <v-toolbar style="box-shadow: 0 3px 8px -4px rgba(0,0,0,0.15);background-color: #fff;z-index:999;">
        <v-container style="padding: 0;height: 100%;">
            <router-link to="/" class="uk-navbar-brand">
                <img src="/images/logo.png" class="avatar">


            </router-link>
        </v-container>
    </v-toolbar>
</template>


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
</style>
