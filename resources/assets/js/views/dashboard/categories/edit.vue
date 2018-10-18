<template>
    <div>
        <Row>
            <Col :span="24">
                <Card>
                    <Form :model="form" ref="form" :rules="ruleValidate" label-position="right" :label-width="100">
                        <FormItem label="分类名" prop="name">
                            <Input v-model="form.name" size="large" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="描述" prop="description">
                            <Input v-model="form.description" size="large" placeholder="Enter something..." type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="success" @click="onSubmit('form')" long>编辑分类</Button>
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
                    name:[
                        {required:true, message:'分类名不能为空'}
                    ],
                    description: [
                        {required: true, message: '分类描述不能为空'}
                    ]
                }
            }
        },
        created() {
            this.$http.get('categories/'+this.$route.params.id + '/edit').then((response)=>{
                this.form = response.data;
            })
        },
        methods:{
            onSubmit(name){
                this.$refs[name].validate((valid)=>{
                    if(valid){
                        this.$http.put('categories/'+ this.$route.params.id,this.form).then((response)=>{
                            this.$Notice.success({
                                title:'编辑分类成功'
                            })
                            this.$router.push('/categories');
                        });
                    }else{
                        this.$Message.error('请完善表单信息!');
                    }
                })
            }
        }
    }
</script>