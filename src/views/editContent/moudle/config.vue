<template>
  <div>
    <el-form
      :label-position="'left'"
      size="medium"
      ref="form"
      label-width="80px"
      style="width:335px;"
    >
      <el-form-item label="基础信息">
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "moudleSwitch",
  data() {
    return {
      value: ''
    }
  }
};
</script>

<style>
</style>