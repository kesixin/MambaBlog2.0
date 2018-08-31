<template>
    <div>
        <div class="main">
            <h3>注册</h3>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                        label="用户名"
                        v-model="form.name"
                        :rules="nameRules"
                        required
                ></v-text-field>
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
                <v-text-field
                        label="确认密码"
                        v-model="form.password_confirmation"
                        :rules="passwordConfirmationRule"
                        required
                        type="password"
                ></v-text-field>
                <v-btn block @click="submit" color="primary" dark>注册</v-btn>
            </v-form>
            <div class="jump_link">
                <router-link to="/login">
                    <span class="register">已有账号?</span>
                </router-link>
                <router-link to="/forgetpassword">
                    <span class="forget">找回密码</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                valid:true,
                form: {
                    name: '',
                    password: '',
                    password_confirmation: ''
                },
                nameRules: [
                    v => !!v || '请输入昵称',
                    v => v.length <= 10 || '名称必须少于8个字符',
                    v => v.length >= 3 || '名称必须大于3个字符'
                ],
                emailRule: [
                    v => !!v || '请输入邮箱',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '邮箱格式不正确'
                ],
                passwordRule: [
                    v => !!v || '请输入密码',
                    v => v.length <= 16 || '密码必须少于16个字符',
                    v => v.length >= 6 || '密码必须大于6个字符'
                ],
                passwordConfirmationRule: [
                    v => !!v || '请输入确认密码',
                    v => v == this.form.password || '两次密码不一致',
                ]
            }
        },
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    this.$http.post('register', this.form).then((response) => {
                        this.$router.push({
                            path: '/register_success',
                            query: {email: this.form.email}
                        })
                    })
                }
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
    .login .main .send_suc_box{
        width: 310px;
        margin: 0 auto;
    }
    .login .main .send_suc_box .text{
        color: #797D85;
        font-size: 14px;
        line-height: 23px;
        padding-top: 50px;
    }
    .login .main .send_suc_box .back{
        font-size: 14px;
        text-align: center;
        margin-top: 26px;
        line-height: 20px;
        color: #2878FF;
        cursor: pointer;
    }
</style>