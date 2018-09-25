<template>
    <div>
        <Row>
            <Col sapn="24">
                <Card>
                    <p slot="title" style="height:100%;text-align: right">
                        <router-link to="/categories/add">
                            <Button type="primary" icon="android-add-circle">添加分类</Button>
                        </router-link>
                    </p>
                    <Table  :loading="loading" :data="tableData" :columns="tableColumns" stripe>
                        <div style="margin: 10px;overflow: hidden">
                            <div style="float:right">

                                2
                            </div>
                        </div>
                    </Table>
                </Card>
            </Col>
        </Row>
    </div>
</template>