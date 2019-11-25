<template>
  <div class="container">
    <div style="width: 400px;" class="border-1">
      <el-steps :active="active" finish-status="success" simple style="background-color: white;margin-top: 20px;">
        <el-step title="预定您的行程"></el-step>
        <el-step title="确认并支付"></el-step>
      </el-steps>
    </div>
    <el-col :span="10"
  </div>
</template>

<script>
  export default {
    name: "reserveview",
    data() {
      return {
        active: 1
      };
    },
    methods: {

    },
  }
</script>

<style scoped>

</style>
