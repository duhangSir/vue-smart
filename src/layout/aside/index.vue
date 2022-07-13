<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#222d32"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      router
    >
      <Menu v-for="(item, index) in menuList" :key="index" :list="item"></Menu>
    </el-menu>
  </div>
</template>
<script>
import Menu from '@/layout/aside/Menu'
export default {
  name: 'index',
  components: {
    Menu
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    menuList() {
      return this.$store.getters.menu.menus
    },
    isCollapse() {
      return this.$store.getters.isCollapse
    }
  },
  created() {}
}
</script>
<style scoped lang="scss">
.el-menu {
  border-right: none;
}
</style>
