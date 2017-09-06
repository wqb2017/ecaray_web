<template>
  <el-rate v-model="value5" disabled show-text text-color="#ff9900" text-template="{value}">
  </el-rate>
</template>


<script>
export default {
  data() {
    return {
      value5: 3.7
    }
  }
}
</script>