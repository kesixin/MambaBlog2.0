<template>
    <div>
        <Row>
            <Col :span="24">
            <Card>
                <Form :model="form" ref="form" :rules="ruleValidate" label-position="right" :label-width="100">
                    <FormItem label="标签名" prop="tag">
                        <Input v-model="form.tag" size="large" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="描述" prop="meta_description">
                        <Input v-model="form.meta_description" size="large" placeholder="Enter something..." type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="success" @click="onSubmit('form')" long>编辑标签</Button>
                    </FormItem>
                </Form>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form :{},
                ruleValidate:{
                    tag:[
                        {required:true, message:'标签名不能为空'}
                    ],
                    meta_description: [
                        {required: true, message: '标签描述不能为空'}
                    ]
                }
            }
        },
        created(){
            this.$http.get('tags/' + this.$route.params.id + '/edit').then((response) => {
                this.form = response.data;
            })
        },
        methods: {
            onSubmit(name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$http.put('tags/' + this.$route.params.id, this.form).then((response) => {
                            this.$Notice.success({
                                title: '编辑分类成功'
                            })
                            this.$router.push('/tags');
                        });
                    } else {
                        this.$Message.error('请完善表单信息');
                    }
                });
            }
        }
    }
</script>