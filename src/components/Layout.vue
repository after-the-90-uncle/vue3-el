<style lang="scss" scoped>

.el-container{
    min-height:100%;
    display:flex;
    flex-direction:column;
}
.el-main{
    flex:1;
}
.el-header{
    position: sticky;
    top:0;
    flex-shrink:0;
    padding:0;
    
}
.el-footer{
    flex-shrink:0;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    background-color:#fff;
}
</style>
<template>
    <el-container>
      <el-header>
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
        >
            <el-menu-item index="1">首页</el-menu-item>
            <el-sub-menu index="2">
                <template #title>多级菜单</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
      </el-header>
      <el-main >
        <slot name="main"></slot>
      </el-main>
      <el-footer>中瑞资本</el-footer>
    </el-container>
</template>
<script>
export default {
  name: 'layout',
}
</script>