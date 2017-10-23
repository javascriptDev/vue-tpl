<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
  
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
  
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>
<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Users
                <router-link to="/">
                    首页啊
                </router-link>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import { Container, Header, Main } from 'element-ui'

    export default {
        components: {
            'el-container': Container,
            'el-header': Header,
            'el-main': Main
        }
    }
</script>