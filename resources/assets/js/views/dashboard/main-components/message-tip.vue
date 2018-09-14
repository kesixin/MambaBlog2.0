<template>
    <div class="message-con">
        <Tooltip :content="value > 0 ?'有'+value+'条未读消息' : '无未读消息'" placement="bottom">
            <Badge :count="value" dot>
                <Icon type="ios-bell" :size="22"></Icon>
            </Badge>
        </Tooltip>
    </div>
</template>

<script>
    export default{
        name:'messageTip',
        props:{
            value:{
                type:Number,
                default:0
            }
        },
        methods:{
            showMessage(){
                this.$Message.error('功能暂未开发');
            }

        }
    }
</script>