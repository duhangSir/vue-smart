<template>
  <el-container>
    <el-aside :width="isCollapse ? '50px' : '200px'">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from '@/layout/aside/index.vue'
import Header from '@/layout/header/index.vue'
import Main from '@/layout/main/index.vue'
export default {
  name: 'index',
  data() {
    return {}
  },
  components: {
    Aside,
    Header,
    Main
  },
  methods: {
    async getUserInfo() {
      const response = await this.$store.dispatch('menu/getUserInfo')
      console.log(response)
    },
    async getNav() {
      const response = await this.$store.dispatch('menu/getNav')
      console.log(response)
    }
  },
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse
    }
  },
  created() {
    this.getUserInfo()
    this.getNav()
  }
}
</script>
<style scoped lang="scss">
.el-header {
  height: 100vh;
  background-color: #18bc9c;
  color: #333;
}

.el-aside {
  background-color: #222d32;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: calc(100vh - 60px);
}
</style>
