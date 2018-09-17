<template>
    <div ref="scrollCon" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll" class="tags-outer-scroll-con">
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
                <Tag type="dot"
                     v-for="(item,index) in pageTagsList"
                     ref="tagsPageOpened"
                     :key="item.name"
                     :name="item.name"
                     @on-close="closePage"
                     @click.native="linkTo(item)"
                     :color = "item.children?(item.children[0].name===currentPageName?'blue':'default'):(item.name===currentPageName?'blue':'default')"
                >{{ itemTitle(item) }}</Tag>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import Util from '@/libs/util';
    export default{
        name:'tagsPageOpened',
        data(){
            return{
                currentPageName:this.$route.name,
                tagBodyLeft:0
            }
        },
        props:{
            pageTagsList:Array,

        },
        computed:{
            title(){
                return this.$store.state.app.currentTitle;
            },
            tagsList(){
                return this.$store.state.app.pageOpenedList;
            }
        },
        methods:{
            itemTitle(item){
                if(typeof item.title ==='object'){
                    return Util.handleTitle(this,item);
                }else{
                    return item.title;
                }
            },
            handlescroll (e) {
                var type = e.type;
                let delta = 0;
                if (type === 'DOMMouseScroll' || type === 'mousewheel') {
                    delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40;
                }
                let left = 0;
                if (delta > 0) {
                    left = Math.min(0, this.tagBodyLeft + delta);
                } else {
                    if (this.$refs.scrollCon.offsetWidth - 100 < this.$refs.scrollBody.offsetWidth) {
                        if (this.tagBodyLeft < -(this.$refs.scrollBody.offsetWidth - this.$refs.scrollCon.offsetWidth + 100)) {
                            left = this.tagBodyLeft;
                        } else {
                            left = Math.max(this.tagBodyLeft + delta, this.$refs.scrollCon.offsetWidth - this.$refs.scrollBody.offsetWidth - 100);
                        }
                    } else {
                        this.tagBodyLeft = 0;
                    }
                }
                this.tagBodyLeft = left;
            },
            linkTo(item){
                let routerObj = {};
                routerObj.name = item.name;
                if(item.argu){
                    routerObj.params = item.argu;
                }
                if(item.query){
                    routerObj.query = item.query;
                }
                if (this.beforePush(item)) {
                    this.$router.push(routerObj);
                }
            },
            closePage(event,name){
                let pageOpenedList = this.$store.state.app.pageOpenedList;
                let lastPageObj = pageOpenedList[0];
                if(this.currentPageName === name){
                    let len = pageOpenedList.length;
                    for (let i=1;i<len;i++){
                        if(pageOpenedList[i].name === name){

                        }
                    }
                }
            }
        }
    }
</script>