<template>
  <div>
    <el-form
      :label-position="'left'"
      size="medium"
      ref="form"
      label-width="80px"
      style="width:335px;"
    >
      <el-form-item label="姓名">
        <el-input v-model="resume.basic.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-input v-model="resume.basic.imageSrc" placeholder="http://" clearable></el-input>
      </el-form-item>
      <el-form-item label="求职意向">
        <el-input v-model="resume.basic.purpose" clearable></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-date-picker
          v-model="resume.basic.brithday"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input v-model="resume.basic.nativePlace" clearable></el-input>
      </el-form-item>
      <el-form-item label="政治面貌">
        <el-input v-model="resume.basic.politicsStatus" clearable></el-input>
      </el-form-item>
      <el-form-item label="民族">
        <el-input v-model="resume.basic.nation" clearable></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="resume.basic.phone" clearable></el-input>
      </el-form-item>
      <el-form-item label="e-mail">
        <el-input v-model="resume.basic.eMail" clearable></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import resume from '../../../store/resume'

export default {
  name: "basic",
  data() {
    return {
      resume
    }
  }
}
</script>

<style>
</style>