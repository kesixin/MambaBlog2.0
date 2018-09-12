<template>
    <div class="main" :class="{'main-hide-text': shrink}">
        <div class="sidebar-menu-con" :style="{width:shrink?'60px':'200px',overflow:shrink?'visible':'auto'}">
            <shrinkable-menu :shrink="shrink" :menu-list="menuList">
                <div slot="top" class="logo-con">
                    <img v-show="!shrink" src="/images/logo.png" alt="">
                </div>
            </shrinkable-menu>
        </div>
        <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
            <div class="single-page">
                <keep-alive :include="cachePage">
                <router-view></router-view>
            </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import shrinkableMenu  from './main-components/shrinkable-menu/shrinkable-menu.vue'

    export default {
        components:{
            shrinkableMenu
        },

        data (){
            return {
                shrink: false
            }
        },
        computed:{
            name(){
                return this.$store.state.user.userinfo.name;
            },
            menuList () {
                return this.$store.state.app.menuList;
            },

        },
        methods:{
            init(){
                this.$store.commit('updateMenulist');
            }

        },
        mounted(){
            this.init();
        }
    }
</script>