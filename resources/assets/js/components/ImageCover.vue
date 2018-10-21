<template>
    <div>
        <div>
            <Row>
                <Col span="12">
                <input type="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="previewModel" id="fileinput" class="fileinput" />
                <label class="filelabe" for="fileinput"><Icon type="image"></Icon>&nbsp;上传封面图片</label>
                </Col>
                <Col span="3">
                <img :src="image" @click="previewImage" style="width:100px;-webkit-box-shadow: 0 0 30px #ccc;box-shadow: 0 0 30px #ccc;cursor: pointer;">
                </Col>
            </Row>
        </div>
        <Modal title="裁剪图片" ok-text="裁剪" :loading="true" :mask-closable="false" @on-ok="handelCut" v-model="innerVisible">
            <Row :gutter="10">
                <Col span="14" class="image-editor-con">
                <div class="cropper">
                    <img id="image-cover" alt="">
                </div>
                </Col>
                <Col span="10" class="image-editor-con">
                <Row type="flex" justify="center" align="middle" class="image-editor-con-preview-con">
                    <div id="preview"></div>
                </Row>
                </Col>
            </Row>
        </Modal>
        <Modal title="View Image" v-model="page_image_view">
            <img :src="image" v-if="page_image_view" style="width: 100%">
        </Modal>
    </div>

</template>

<script>
    import Cropper from 'cropperjs'

    export default {
        name: "ImageCover",
        props: {
            image: {
                default() {
                    return ''
                },
                type: String
            },
            action: {
                type: String,
                default: 'upload/image'
            },
            params: {
                default() {
                    return ''
                },
                type: String
            }
        },
        mounted () {
            let img = document.getElementById('image-cover');
            this.cropper = new Cropper(img, {
                dragMode: 'move',
                preview: '#preview',
                restore: false,
                center: false,
                highlight: false,
                cropBoxMovable: false,
                toggleDragModeOnDblclick: false
            });
        },
        data() {
            return {
                cropper: {},
                innerVisible: false,
                page_image_view: false
            }
        },
        methods: {
            previewModel(e) {
                let file = e.target.files[0];
                let reader = new FileReader();
                reader.onload = () => {
                    this.cropper.replace(reader.result);
                    reader.onload = null;
                };

                reader.readAsDataURL(file);
                this.innerVisible = true;
            },
            handelCut() {
                let vm = this;
                vm.cropper.getCroppedCanvas().toBlob(function (blob) {
                    var formData = new FormData();

                    formData.append('image', blob);
                    if (vm.params) {
                        formData.append('type', vm.params);
                    }

                    vm.$http.post(vm.action, formData).then((response) => {
                        vm.$emit('successUpload', response)
                        vm.innerVisible = false;
                    })
                });
            },
            previewImage() {
                this.page_image_view = true
            }
        }

    }
</script>

