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
            <el-main>
                <router-link to="/user">
                    用户啊 {{User.age}} 
                    {{$lang.title}}
                </router-link>

                <button @click="addAge"> 加一岁</button>
                <div>data: {{JSON.stringify(data)}}</div>
                <input type="" name="" v-model="User.age">
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import { Container, Header, Main } from 'element-ui'
    import { createNamespacedHelpers } from 'vuex'
    import { getUser } from '../services/user'
    const { mapState, mapActions } = createNamespacedHelpers('User')
    
    export default {
        components: {
            'el-container': Container,
            'el-header': Header,
            'el-main': Main
        },
        data () {
            return {
                items: [],
                data: {},
                data2: {}
            }
        },
        async created () {
            let data = await getUser()
            let data2 = await getUser()
            this.data = data
            this.data2 = data2
            console.log(this.$lang)
        },
        computed: {
            ...mapState({
                User: state => state
            })
        },
        methods: {
            ...mapActions([
                'addAge'
            ])
        }
    }
</script>