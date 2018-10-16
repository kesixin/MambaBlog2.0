<template>
    <div>
        <Row>
            <Col :span="24">
                <Card>
                    <Table :loading="loading" :data="tableData" :columns="tableColumns" stripe></Table>
                        <div style="margin:10px;overflow: hidden;">
                            <div style="float:right;">
                                <Page :total="meta.total" :current="meta.current_page" @on-change="handleCurrentChange"></Page>
                            </div>
                        </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default{
        data (){
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
                        title:'头像',
                        key:'avatar',
                        render:(h,params)=>{
                            return h('Avatar',{
                                props:{
                                    src:params.row.avatar
                                }
                            })
                        }
                    },
                    {
                        title:'用户名',
                        key:'name'
                    },
                    {
                        title:'邮箱',
                        key:'email',
                    },
                    {
                        title:'状态',
                        key:'status',
                        render:(h,params)=>{
                            return h('span',[
                                h('Icon',{
                                    props:{
                                        type:'record'
                                    },
                                    style:{
                                        color: params.row.status == 1 ? 'rgb(142, 180, 203)' : '    color: rgb(191, 83, 41)'
                                    }
                                })
                            ])

                        }
                    },
                    {
                        title:'创建时间',
                        key:'created_at'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('router-link',{
                                    props: {
                                        to: '/users/' + params.row.id + '/edit'
                                    },
                                }, [
                                    h('Button', {
                                        props: {
                                            type: 'success',
                                            shape: 'circle',
                                            icon: 'edit'
                                        },
                                        style: {
                                            marginRight: '5px'
                                        },
                                    }),
                                ]),

                                h('Button', {
                                    props: {
                                        type: 'error',
                                        shape: 'circle',
                                        icon: 'android-delete'
                                    },
                                    on: {
                                        click: () => {
                                            this.handleStatus(params)
                                        }
                                    }
                                }),
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
            loadData() {
                this.loading = true;
                var url = 'users';
                if(this.meta.current_page>1){
                    let page = '';
                    if(url.indexOf('?')!=-1){
                        page="&page=";
                    }else{
                        page="?page="
                    }
                    url = url + page + this.meta.current_page;
                    this.$router.push(page + this.meta.current_page);
                }
                this.$http.get(url).then((response)=>{
                    console.log(response);
                    this.loading = false;
                    this.tableData = response.data;
                    this.meta = response.meta;
                })
            },
            handleCurrentChange(val){
                console.log(val);
                this.meta.current_page = val;
                this.loadData();
            },
            handleStatus(data){
                this.$Modal.confirm({
                    title: '改变该用户的状态?',
                    content: '该动作可能会影响一些数据，请三思!',
                    okText: '是,改变它!',
                    cancelText: '取消',
                    loading: true,
                    onOk:()=>{
                        this.$http.put('users/'+data.row.id+'/status').then((response)=>{
                            this.$Modal.remove();
                            this.$Message.success('修改成功');
                            this.tableData[data.index].status = ! data.row.status
                        })
                    }
                })
            }
        }
    }
</script>