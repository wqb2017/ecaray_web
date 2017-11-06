/*
 * @Author: wangqibiao
 * @Date: 2017-11-06 15:44:27
 * @Last Modified by: wangqibiao
 * @Last Modified time: 2017-11-06 19:25:10
 */
<template>
  <div id="table">
    <el-table :data="tableListData.data" border :height="table_h">
      <slot></slot>
    </el-table>
    <el-row class="pagination-body" id="pagination">
      <el-pagination :page-sizes="[10, 20, 50, 100]" layout="total, sizes, prev, pager, next, jumper" @size-change="_sizeChange" @current-change="_pageChange" :current-page="tableListData.page_index" :page-size="tableListData.page_size" :total="tableListData.total_count">
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    tableListData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      table_h: 0,//table高度
      table_top: 0,//table距离浏览器头部高度
      pagination_h: 60,//分页高度
    };
  },
  mounted() {
    this.$nextTick(function (params) {
      this._setTableHeight();
      this._winResize();
    });
  },
  methods: {
    //设置table高度
    _setTableHeight() {
      let table = $("#table");
      //判断是否存在table
      if (table.offset()) {
        let client_height = +(document.documentElement.clientHeight || document.body.clientHeight);
        this.table_top = +table.offset().top;
        //table的高度=可视窗口的高度减去table距离浏览器上面的高度-分页高度
        this.table_h = client_height - this.table_top - this.pagination_h;
      }
    },
    //窗口改变
    _winResize() {
      window.addEventListener("resize", () => {
        this.table_h = 0;
        this._setTableHeight();
      });
    },
    //操作分页回调
    _refresh() {
      this.$emit('paginationChange', this.tableListData);
    },
    // 点击分页回调
    _pageChange(val) {
      this.tableListData.page_index = val;
      this._refresh();
    },
    // 更改每页条数回调
    _sizeChange(val) {
      this.tableListData.page_size = val;
      this._refresh();
    },
  }
};
</script>
<style lang="scss" scoped>
#table {
  .pagination-body {
    height: 60px;
    padding-top: 12px;
  }
}
</style>


