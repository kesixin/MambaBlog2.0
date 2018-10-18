<template>
    <div>
        <Row>
            <Col sapn="24">
            <Card>
                <p slot="title" style="height:100%;text-align: right">
                    <router-link to="/tags/add">
                        <Button type="primary" icon="android-add-circle">添加标签</Button>
                    </router-link>
                </p>
                <Table  :loading="loading" :data="tableData" :columns="tableColumns" stripe>
                    <div style="margin: 10px;overflow: hidden">
                        <div style="float:right">
                            <Page :total="meta.total" :current="meta.current_page"></Page>
                        </div>
                    </div>
                </Table>
            </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                loading:false,
                tableData:[],
                meta:{
                    current_page:1,
                    total:0,
                    per_page:10
                },
                tableColumns:[
                    {
                        title:'id',
                        key:'id'
                    },
                    {
                        title:'标签名',
                        key:'tag'
                    },
                    {
                        title:'描述',
                        key:'meta_description',
                    },
                    {
                        title:'创建时间',
                        key:'created_at'
                    },
                    {
                        title:'操作',
                        key:'action',
                        align:'center',
                        render:(h,params)=>{
                            return h('div',[
                                h('router-link',{
                                    props:{
                                        to:'/tags/'+ params.row.id +'/edit'
                                    }
                                },[
                                    h('Button',{
                                        props:{
                                            type:'success',
                                            shape:'circle',
                                            icon:'edit'
                                        },
                                        style:{
                                            marginRight:'5px'
                                        }
                                    })
                                ]),
                                h('Button',{
                                    props:{
                                        type:'error',
                                        shape:'circle',
                                        icon:'android-delete'
                                    },
                                    on:{
                                        click:()=>{
                                            this.handleDelete(params)
                                        }
                                    }
                                })
                            ])
                        }
                    }
                ]
            }
        },
        created(){
            this.loadData();
        },
        methods:{
            loadData(){
                this.loading = true;
                var url = 'tags';
                if(this.meta.current_page > 1){
                    let page = '';
                    if(url.indexOf('?') !=-1){
                        page = '&page='
                    }else{
                        page = '?page='
                    }
                    url = url + page + this.meta.current_page;
                    this.$router.push(page + this.meta.current_page)
                }
                this.$http.get(url).then((response)=>{
                    this.loading = false;
                    this.tableData = response.data;
                    this.meta = response.meta;
                })
            },
        }
    }
</script>