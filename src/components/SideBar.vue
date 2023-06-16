<template>
  <el-row class="tac full-height font">
    <el-col class="full-height">
        <el-row>
            <el-col><img id="logo" alt="Vue logo" src="../assets/logo.png"></el-col>
            <el-col><h1 class="logo-text">Vue 2</h1></el-col>
        </el-row>
        
        <el-menu
        :router="true"
        default-active="2"
        class="el-menu-vertical-demo full-height">
            <el-submenu v-for="item in menuItems" :key="item.index" :index="item.index">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{ item.label }}</span>
                </template>
                <el-menu-item v-for="child in item.children" :key="child.index" :index="child.index">
                    <span>{{ child.label }}</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </el-col>
</el-row>
</template>

<script>
export default {
    data() {
        return {
            menuItems: []
        }
    },
    created() {
        this.menuItems = [
				{
					label: 'Project Start',
                    index: 'projectgen',
                    icon: 'el-icon-video-play',
					children: [
						{ index: 'projectgen', label: 'Start' },
                        { index: 'projectfile', label: 'File' },
                        { index: 'projectproc', label: 'Process' },
					]
				},
                {
					label: 'Element',
                    index: 'alldirective',
                    icon: 'el-icon-s-grid',
					children: [
                        { index: 'alldirective', label: 'Directive' },
                        { index: 'allcomponent', label: 'Component' },
                        { index: 'allrouter', label: 'Router' },
                        { index: 'allvuex', label: 'Vuex' },
					]
                }
        ]
    },
    methods: {
      handleMenuClick(child) {
        this.$router.push({ name: child.target }).catch(() => {});
      }
    }
}
</script>

<style>
.font {
    font-size: 150%;
}

.full-height {
    height: 100%;
}

.el-menu-vertical-demo {
    text-align: left;
}

.logo-text {
    margin: 0px;
}

#logo {
    max-width: 70px;
    max-height: 70px;
}

</style>