<template>
    <div>
        <div class="main">
            <h3>登录</h3>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                        label="邮箱"
                        v-model="form.email"
                        :rules="emailRule"
                        required
                ></v-text-field>
                <v-text-field
                        label="密码"
                        v-model="form.password"
                        :rules="passwordRule"
                        required
                        type="password"
                ></v-text-field>
                <v-btn block @click="submit" color="primary" dark>登录</v-btn>
            </v-form>
            <div class="jump_link">
                <router-link to="/register">
                    <span class="register">注册</span>
                </router-link>

                <router-link to="/forgetpassword">
                    <span class="forget">找回密码</span>
                </router-link>
            </div>
            <div class="wx_login">
                <div class="wx_btn">第三方登陆</div>
            </div>
            <div class="text-xs-center">
                <v-btn fab dark small style="background: #00adb5;" @click="socialiteQQ">
                    <v-icon dark style="padding-top: 6px;">fab fa-qq</v-icon>
                </v-btn>

                <v-btn fab dark small style="background: #f75b5b;" @click="socialiteWeibo">
                    <v-icon dark style="padding-top: 6px;">fab fa-weibo</v-icon>
                </v-btn>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                valid:true,
                form: {},
                emailRule: [
                    v => !!v || '请输入邮箱',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '邮箱格式不正确'
                ],
                passwordRule: [
                    v => !!v || '请输入密码',
                ]
            }
        },
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    this.$http.post('login', this.form).then((response) => {
                        if (typeof(response.code) != 'undefined' && response.code == 0) {
                            this.$router.push({
                                path: '/register_success',
                                query: {email: this.form.email}
                            })
                        }
                        console.log(response);
                        this.$store.commit('SET_USERINFO', response.data.user);
                        this.$store.commit('SET_TOKEN', response.data.token);
                        this.$store.commit('getNotificationCount');

                        let redirect = this.$route.query.redirect;
                        if (redirect) {
                            this.$router.push(redirect);
                        } else {
                            this.$router.push('/');
                        }
                    })
                }
            },
            socialiteQQ() {
                window.location = '/auth/qq';
            },
            socialiteWeibo() {
                window.location = '/auth/weibo';
            }
        }
    }
</script>

<style scoped>
    .login .login_con h3{
        margin: 5px 0 22px 0;
        font-size: 20px;
        line-height: 34px;
        color: #0E1726;
    }
    .login h3 {
        font-size: 20px;
        line-height: 20px;
        color: #222222;
        text-align: center;
    }
    .login .login_con .jump_link{
        height: 17px;
        line-height: 17px;
        font-size: 12px;
        margin-top: 16px;
    }
    .login .login_con .jump_link .register {
        float: left;
        color: #2878FF;
        cursor: pointer;
    }
    .login .login_con .jump_link .forget{
        float: right;
        cursor: pointer;
        color: #9FA2A8;
    }
    .login .wx_login {
        border-top: 1px solid #C9C9C9;
        margin-top: 40px;
        position: relative;
    }
    .login .wx_login .wx_btn{
        font-size: 12px;
        color: #888888;
        margin: 0 auto;
        position: relative;
        top: -10px;
        left: 0;
        height: 14px;
        width: 100px;
        background: white;
        padding: 0 20px 0 20px;
        cursor: pointer;
    }
</style>