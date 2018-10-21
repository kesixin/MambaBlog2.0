<template>
    <div>
        <Row>
            <Col>
            <Card>
                <Form :model="form" ref="form" :rules="ruleValidate" label-position="right" :label-width="100">
                    <FormItem label="链接名" prop="name">
                        <Input v-model="form.name" size="large" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="链接" prop="link">
                        <Input v-model="form.link" size="large" placeholder="Enter something..." type="textarea" :autosize="{minRows:2,maxRows:5}"></Input>
                    </FormItem>

                    <Row>
                        <Col :span="12">
                            <FormItem label="logo" prop="meta_description">
                                <image-cover action="upload/image" :image="form.image" @successUpload="handleImageSuccess"></image-cover>
                            </FormItem>
                        </Col>
                    </Row>

                    <FormItem label="是否开启" prop="status">
                        <i-switch v-model="form.status" size="large" :true-value="1" :false-value="0">
                            <span slot="open">是</span>
                            <span slot="false">否</span>
                        </i-switch>
                    </FormItem>

                    <FormItem>
                        <Button type="success" @click="onSubmit('form')" long>添加</Button>
                    </FormItem>
                </Form>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>

    import ImageCover from '@/components/ImageCover'

    export default {
        components:{
            ImageCover
        },
        data() {
            return {
                form:{
                    image:''
                }
            }
        },
        methods:{
            onSubmit(name){

            },
            handleImageSuccess(response){
                this.form.image = response.relative_url
            }
        }
    }

</script>