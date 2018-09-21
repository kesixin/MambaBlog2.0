<template>
    <div>
        <Row>
            <Col :span="24">
                <Card>
                    <Row>
                        <Col :span="4" :offset="4">
                            <div class="cover-avatar">
                                <div class="upload-list">
                                    <img :src="form.avatar" class="avatar">
                                    <div class="upload-list-cover">
                                        <Icon type="ios-eye-outline"></Icon>
                                    </div>
                                </div>
                                <input type="file" accept="image/png,image/jpeg,image/gif,image/jpg" @change="previewModel" id="fileinput" class="fileinput" />
                                <label for="fileinput" class="filelabe"><Icon type="iamge"></Icon>修改头像</label>
                                <Modal title="头像" v-model="visible">
                                    <img src="form.avatar" v-if="visible" style="width: 100%">
                                </Modal>
                                <Modal title="裁剪头像" ok-text="裁剪" :loading="true" :mask-closable="false" @on-ok="handleCut" v-model="cut_avatar">
                                    <Row :gutter="10">
                                        <Col span="14" class="image-editor-con">
                                        <div class="cropper">
                                            <img id="cropimg" alt="">
                                        </div>
                                        </Col>
                                        <Col span="10" class="image-editor-con">
                                        <Row type="flex" justify="center" align="middle" class="image-editor-con-preview-con">
                                            <div id="preview"></div>
                                        </Row>
                                        </Col>
                                    </Row>
                                </Modal>
                            </div>
                        </Col>
                        <Col :span="10" :offset="1">
                            <Form :model="form" label-position="right" :label-width="100">
                                <FormItem label="用户名">
                                    <Input v-model="form.name" size="large" disabled placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem label="邮箱">
                                    <Input v-model="form.email" size="large" disabled placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem label="昵称">
                                    <Input v-model="form.nickname" size="large" placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem label="Website">
                                    <Input v-model="form.website" size="large" placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem label="微博名">
                                    <Input v-model="form.weibo_name" size="large" placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem label="微博主页">
                                    <Input v-model="form.weibo_link" size="large" placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem label="GitHub">
                                    <Input v-model="form.github_name" size="large" placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem label="个人描述">
                                    <Input v-model="form.description" size="large" placeholder="Enter something..." type="textarea" :autosize="{minRows:2,maxRows:5}"></Input>
                                </FormItem>
                                <FormItem>
                                    <Button type="success" @click="onSubmit" long>更新个人信息</Button>
                                </FormItem>
                            </Form>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>

    import Cropper from 'cropperjs'

    export default{
        data () {
            return {
                form:{},
                visible:false,
                cut_avatar:false,
                cropper:{},
            }
        },
        created(){
            this.$http.get('users/'+ this.$route.params.id + '/edit').then((response)=>{

                this.form = response.data;
            });
        },
        mounted(){
            let img = document.getElementById('cropimg');
            this.cropper = new Cropper(img,{
                dragMode:'move',
                preview: '#preview',
                restore:false,
                center:false,
                highlight:false,
                cropBoxMovable:false,
                toggleDragModeOnDblclick:false
            });
        },
        methods:{
            previewModel(e){
                let file = e.target.files[0];
                let reader = new FileReader();
                reader.onload = () =>{
                    this.cropper.replace(reader.result);
                    reader.onload = null;
                };

                reader.readAsDataURL(file);
                this.cut_avatar = true;
            },
            handleCut() {
                let vm = this;
                vm.cropper.getCroppedCanvas().toBlob(function (blob) {
                    var formData = new FormData();
                    formData.append('image',blob);
                    vm.$http.post('users/' + vm.$route.params.id + '/avatar',formData).then((response)=>{
                        vm.form.avatar = response.relative_url;
                        if(vm.$route.params.id == vm.$store.state.user.userinfo.id){
                            vm.$store.commit('modifyAvatar',response.relative_url);
                        }

                        vm.cut_avatar = false;
                    })
                })
            },
            onSubmit() {
                this.$http.put('users/'+this.$route.params.id,this.form).then((response)=>{
                    this.$Notice.success({
                       title:'编辑成功'
                    });

                    if(this.$route.params.id == this.$store.state.user.userinfo.id){
                        this.$store.commit('SET_USERINFO',response.data);
                    }

                    this.$router.push('/users')
                })
            }
        }
    }
</script>

<style lang="less">
    .cover-avatar{
        text-align: center;
    }
    .upload-list{
        display: inline-block;
        text-align: center;
        width:150px;
        height:150px;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 50%;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
        margin-bottom: 20px;
    }
    .cover-avatar .upload-list .avatar{
        width: 100%;
        height: 100%;
        transition: transform .6s ease-in, -webkit-transform .6s ease-in;
    }
    .cover-avatar .upload-list:hover .avatar{
        transform: rotateZ(360deg);
    }
    .upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .upload-list:hover .upload-list-cover{
        display: block;
    }
    .upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
        position: absolute;
        top:63px;
        left:63px
    }
</style>