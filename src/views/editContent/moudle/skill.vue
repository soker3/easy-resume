<template>
  <div>
    <el-form
      :label-position="'left'"
      size="medium"
      ref="form"
      label-width="85px"
      style="width:335px"
    >
      <el-divider style="height: 20px" content-position="left">技能证书</el-divider>

      <el-form-item label="语言技能">
        <el-input v-model="resume.skill.language"></el-input>
      </el-form-item>
      <el-form-item label="办公技能">
        <el-input v-model="resume.skill.office"></el-input>
      </el-form-item>
      <el-form-item label="专业技能">
        <el-input v-model="resume.skill.major"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import resume from  '../../../store/resume'

export default {
  name: 'skill',
  data() {
    return {
      resume
    }
  }
}
</script>

<style>
</style>