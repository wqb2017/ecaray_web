<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker v-model="value3" type="datetimerange" placeholder="选择时间范围">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value4: ''
    };
  }
};
</script>