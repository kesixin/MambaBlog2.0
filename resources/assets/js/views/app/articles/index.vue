<template>
    <v-content>
        <v-container id="article">
            <v-layout row wrap>
                <v-flex md4 v-for="article in articles" :key="article.id" class="px-2 py-2">
                    <span class="headline">{{ article.title }}</span>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
    export default{
        data(){
            return {
                articles:[]
            }
        },
        created() {
            console.log("etet");
            this.loadData();
        },
        methods:{
            loadData(){
                var url = "articles";
                this.$http.get(url).then((response) => {
                    this.articles = response.data.data;
                    console.log(this.articles);
                })
            }
        }
    }
</script>

<style lang="less" src="../../../styles/index.less" />