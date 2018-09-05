<template>
    <v-content>
        <v-container id="article">
            <v-layout row wrap>
                <v-flex md4 v-for="article in articles" :key="article.id" class="px-2 py-2">
                    <router-link :to="'/articles/'+article.slug">
                        <v-card class="article-list">
                            <v-card-media class="white--text" height="200px" :src="article.page_image">
                                <v-container fill-height fluid>
                                    <v-layout fill-height>
                                        <v-flex xs12 align-end flexbox>
                                            <span class="headline">{{article.title}}</span>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-media>
                            <v-card-title>
                                <p class="grey--text text-sm-left" style="width:100%">
                                    <span>{{ article.published_time }}</span>
                                    <span style="float:right;margin-left: 10px;"><v-icon size="10px">fas fa-eye</v-icon>&nbsp;&nbsp;{{ article.visitors }}</span>
                                    <span style="float:right;"><v-icon size="10px">fas fa-user</v-icon>&nbsp;&nbsp;{{ article.user.nickname ? article.user.nickname : article.user.name }}</span>
                                </p>
                            </v-card-title>
                            <div class="extra content">
                                {{ article.meta_description }}
                            </div>
                        </v-card>
                    </router-link>
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

<style lang="less">
    @import "styles/index.less";
</style>