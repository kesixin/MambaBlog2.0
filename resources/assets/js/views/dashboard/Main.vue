<template>
    <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
        <div class="single-page">
            <keep-alive :include="cachePage">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default{}
</script>