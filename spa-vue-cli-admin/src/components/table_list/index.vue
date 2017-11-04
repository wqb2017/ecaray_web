<template>
  <div id="table">
    <el-table :data="tableListData.data">
      <slot></slot>
    </el-table>
    <el-row class="pagination-body">
      <el-pagination :page-sizes="[10, 20, 50, 100]" :page-size="tableListData.page_size" layout="total, sizes, prev, pager, next, jumper" :total="tableListData.page_total">
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    tableListData: {
      // type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
#table {
  .pagination-body {
    padding: 10px 0;
  }
}
</style>


