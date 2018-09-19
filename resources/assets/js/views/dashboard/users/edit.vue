<template>
    <div>
        <Row>
            <Col :span="24">
                <Card>
                    <Row>
                        <Col :span="4" :offset="4">
                            <div class="cover-avatar">
                                <div class="upload-list">
                                    <img :src="form.avatar" alt="">
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>

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
            this.$http.get('users/'+ this.$route.params.id + 'edit').then((response)=>{
                this.form = response.data;
            });
        }
    }
</script>