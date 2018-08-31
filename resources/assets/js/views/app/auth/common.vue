<template>
    <v-content class="main-content base_content">
        <v-container grid-list-xl>
            <v-layout align-center justify-center>
                <v-flex md7>
                    <div class="login mu-paper login_wrap mu-paper-round mu-paper-3">
                        <div class="login_con">
                            <router-view transition="slide-x-reverse-transition"></router-view>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>


<style scoped>
    .login_wrap {
        background: white;
        border-radius: 4px;
        padding-bottom: 40px;
        padding-top: 40px;
    }

    .mu-paper-3 {
        box-shadow: 0 6px 20px 5px rgba(40, 120, 255, 0.1), 0 16px 24px 2px rgba(0, 0, 0, 0.05);
    }

    .mu-paper {
        background-color: #ffffff;
        color: rgba(0, 0, 0, 0.87);
    }

    .mu-paper {
        -webkit-transition: all .45s cubic-bezier(.23, 1, .32, 1);
        transition: all .45s cubic-bezier(.23, 1, .32, 1);
        color: rgba(0, 0, 0, .87);
        background-color: #fff;
    }

    .login {
        text-align: center;
        margin-top: 40px;
    }

    .login .login_con {
        width: 280px;
        margin: 0 auto;
    }

</style>
