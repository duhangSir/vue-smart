<template>
  <div>
    <template v-if="list && list.component">
      <el-menu-item :index="list.path">
        <i :class="'el-icon-' + list.icon"></i>
        <span slot="title">{{
          list.label
        }}</span>
      </el-menu-item>
    </template>
    <template v-if="list && list.children.length > 0 && !list.path">
      <el-submenu :index="list.path">
        <template slot="title">
          <i :class="'el-icon-' + list.icon"></i>
          <span>{{ list.label }}</span>
        </template>
        <Menu
          v-for="(item, index) in list.children"
          :key="index"
          :list="item"
        ></Menu>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import Menu from '@/layout/aside/Menu'
export default {
  name: 'Menu',
  components: { Menu },
  props: {
    list: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  methods: {
    bread(name) {
      console.log(name)
    }
  }
}
</script>
<style scoped lang="scss"></style>
