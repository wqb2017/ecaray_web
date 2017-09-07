<template>
  <div class="details-index">
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-date"></i> 我的行程</span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="消息中心">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-row>
  
  </div>
</template>

<script>
import Fetch from "@/common/js/fetch"
export default {
  data () {
    return {
      
    }
  },
  created () {
    console.log($);
    console.log(Fetch);
  }
}
</script>