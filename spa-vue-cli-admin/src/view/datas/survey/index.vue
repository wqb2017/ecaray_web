/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:20:33
 * @Last Modified by: wangqibiao
 * @Last Modified time: 2017-11-06 11:46:13
 */
<template>
  <div id="survey">
    <el-form :inline="true" :model="formData">
      <el-form-item label="审批人">
        <el-input v-model="formData.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formData.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="_submit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row>
      <tableList :tableListData="tableListData" @paginationChange="_paginationChange">
        <el-table-column prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120">
        </el-table-column>
      </tableList>
    </el-row>
  </div>
</template>
<script>
import tableList from "@/components/tableList";
import { dataSurveyList } from "@/api/datas";
export default {
  data() {
    return {
      formData: {
        user: "",
        region: "",
      },
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
      this._list();
    },
    _paginationChange() {
      // this._list();
    },
    _list() {
      dataSurveyList().then(res => {
        this.tableListData = res;
      });
    },
    _submit() {

    }
  }
};
</script>
