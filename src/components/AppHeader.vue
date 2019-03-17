<template>
    <el-menu :default-active="activeIndex"  mode="horizontal"
            :router="true" class="menu">
        <el-menu-item index="index">首页</el-menu-item>
        <el-menu-item index="about">关于</el-menu-item>
        <el-menu-item index="register" class="menu-item-right">注册</el-menu-item>
        <el-menu-item index="login" class="menu-item-right">登录</el-menu-item>
       
    </el-menu>
</template>

<script>
    export default {
        
        name: "appHeader",
        data: function() {
            return {
                activeIndex: "index"
            }
        },
        methods: {
            selectMenu: function(key,keypath) {
                
            }
        }
    }
</script>

<style scoped>
    .menu {
        padding-left: 80px;
        padding-right: 50px;
    }

    .menu-item-right {
        float: right;
    }
</style>