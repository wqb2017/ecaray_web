/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:20:57
 * @Last Modified by:   wangqibiao
 * @Last Modified time: 2017-11-02 20:20:57
 */
<template>
  <div id="workbench">
    <el-table :data="listData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { workbenchList } from "@/api/datas";
export default {
  data() {
    return {
      listData: []
    };
  },
  created() {
    this._pageInit();
  },
  methods: {
    _pageInit() {
      workbenchList().then(res => {
        this.listData = res.data;
      });
    }
  }
};
</script>

