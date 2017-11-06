/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:20:57
 * @Last Modified by: wangqibiao
 * @Last Modified time: 2017-11-06 10:50:45
 */
<template>
  <div id="workbench">
    <tableList :tableListData="tableListData">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </tableList>
  </div>
</template>
<script>
import { workbenchList } from "@/api/datas";
import tableList from "@/components/tableList";
export default {
  data() {
    return {
      tableListData: {}
    };
  },
  created() {
    this._pageInit();
  },
  components: {
    tableList
  },
  methods: {
    _pageInit() {
      workbenchList().then(res => {
        this.tableListData = res;
      });
    }
  }
};
</script>

