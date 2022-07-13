<template>
  <div class="header-container">
    <div class="header-icon">
      <span
        v-if="!isCollapse"
        class="el-icon-s-fold icon collbad"
        @click="size"
      ></span>
      <span v-else class="el-icon-s-unfold icon collbad" @click="size"></span>
      <div
        @click="jumpTags(item.path)"
        class="header-title"
        :class="{ active: $route.path === item.path }"
        v-for="(item, index) in tagsView"
        :key="index"
      >
        {{ item.title
        }}<span
          :class="{ removeActive: $route.path === item.path }"
          class="removeTags"
          v-if="index !== 0"
          @click.stop="removeTags(index, item.path)"
          >x</span
        >
      </div>
    </div>
    <el-avatar :src="nav.avatar"></el-avatar>
    <el-dropdown class="dropdown" @command="handleCommand">
      <span class="el-dropdown-link">
        {{ nav.username }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">个人设置</el-dropdown-item>
        <el-dropdown-item command="logout">安全退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    nav() {
      return this.$store.getters.userInfo
    },
    tagsView() {
      return this.$store.getters.tagsview
    }
  },
  methods: {
    async handleCommand(command) {
      console.log(command)
      if (command === 'logout') {
        await this.$store.dispatch('user/logout')
        await this.$router.push('/login')
      }
    },
    jumpTags(path) {
      this.$router.push(path)
    },
    size() {
      this.isCollapse = !this.isCollapse
      this.$store.dispatch('collapse/setisCollapse', this.isCollapse)
    },
    removeTags(index, path) {
      const obj = {
        index,
        path,
        nowPath: this.$route.path
      }
      this.$store.dispatch('tagsview/removeTasView', obj)
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (!to.meta.title) {
          to.meta.title = '控制台'
        }
        const obj = {
          title: to.meta.title,
          path: to.path
        }
        this.$store.dispatch('tagsview/addTagsView', obj)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.header-container {
  display: flex;
  height: 60px;
  align-items: center;
  .dropdown {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
  }
}
.collbad {
  cursor: pointer;
}
.header-icon {
  margin-right: auto;
  display: flex;
  .icon {
    color: #fff;
    margin-right: auto;
    font-size: 30px;
  }
  .removeTags {
    padding: 0 4px;
    &:hover {
      background-color: red;
      color: #fff;
      border-radius: 50%;
      background-color: #e6a23c;
    }
  }
  .removeActive {
    &:hover {
      background: rgba($color: #dad8d8, $alpha: 0.4);
    }
  }
  .header-title {
    background-color: #fff;
    cursor: pointer;
    height: 28px;
    line-height: 28px;
    border-radius: 5px;
    padding: 0 10px;
    color: #e6a23c;
    font-size: 12px;
    box-shadow: -1px 0px 1px rgba(236, 135, 3, 0.89);
    margin-left: 10px;
  }
  .active {
    background-color: #e6a23c;
    color: #fff;
  }
}
</style>
