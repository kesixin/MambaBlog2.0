<template>
    <div ref="scrollCon" class="tags-outer-scroll-con">
        <div class="close-all-tag-con">
            <Dropdown transfer>
                <Button size="small" type="primary">
                    标签选项
                    <Icon type="arrow-down-b"></Icon>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem name="clearAll">关闭所有</DropdownItem>
                    <DropdownItem name="clearOthers">关闭其他</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div ref="scrollBody" class="tags-inner-scroll-body" :style="{left:tagBodyLeft+'px'}">
            <transition-group name="taglist-moving-animation">
                <Tag></Tag>
            </transition-group>
        </div>
    </div>
</template>

<script>

    export default{
        name:'tagsPageOpened',
        data(){
            return{
                tagBodyLeft:0
            }
        }
    }
</script>