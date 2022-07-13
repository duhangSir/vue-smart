<template>
  <div>
    <div class="search-container">
      <div class="search-form">
        <el-form :inline="true" :model="userForm" class="demo-form-inline">
          <el-form-item label="用户名">
            <el-input
              v-model="userForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="search" icon="el-icon-search"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-button type="primary" icon="el-icon-edit">新增</el-button>
      </div>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column align="center" prop="username" label="用户名">
      </el-table-column>
      <el-table-column align="center" prop="avatar" label="头像">
        <template slot-scope="scope">
          <img class="img" :src="scope.row.avatar" alt="" />
        </template>
      </el-table-column>
      <el-table-column align="center" prop="roles" label="角色">
        <template slot-scope="scope">
          <el-tag
            size="medium"
            v-for="(item, index) in scope.row.roles"
            :key="index"
            >{{ item.name }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column align="center" prop="email" label="邮箱">
      </el-table-column>
      <el-table-column align="center" prop="createTime" label="注册时间">
      </el-table-column>
      <el-table-column align="center" prop="status" label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="300px">
        <el-button type="success" size="mini" plain>编辑</el-button>
        <el-button type="warning" size="mini" plain>分配权限</el-button>
        <el-button type="danger" size="mini" plain>删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="userForm.current"
      :page-sizes="[30, 40, 50, 100]"
      :page-size="userForm.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import users from '@/api/users'
export default {
  name: 'index',
  data() {
    return {
      userForm: {
        current: 1,
        size: 30,
        username: ''
      },
      total: 0,
      tableData: []
    }
  },
  methods: {
    async getTable() {
      const response = await users.getTableList(this.userForm)
      console.log(response)
      this.total = response.total
      this.tableData = response.records
    },
    handleSizeChange(size) {
      this.userForm.size = size
      this.getTable()
    },
    handleCurrentChange(current) {
      this.userForm.current = current
      this.getTable()
    },
    search() {
      if (this.userForm.username === '') return
      this.getTable()
    }
  },
  created() {
    this.getTable()
  }
}
</script>
<style scoped lang="scss">
.img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.search-container {
  display: flex;
}
.search-form {
  display: inline-block;
  margin-right: auto;
}
</style>
