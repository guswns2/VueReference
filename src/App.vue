<template>
  <div id="app">
    <el-container class="full-height">
      <el-aside id="sidebar">
        <SideBar></SideBar>
      </el-aside>
      <el-main >
        <router-view id="main"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
  height: 96vh;
  font-size: 150%;
}

.full-height {
  height: 100%;
}

#main {
  width: 950px;
  margin: auto;
}
#sidebar {
  min-width: 330px;
}
</style>
