<template>
  <div>
    <el-form
      :label-position="'left'"
      :inline="true"
      size="medium"
      ref="form"
      label-width="80px"
      style="width:335px;"
    >
      <el-divider content-position="left">简历内容启用</el-divider>
      <el-form-item label="工作经验">
        <el-switch
          v-model="config.experience.value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item label="教育背景">
        <el-switch
          v-model="config.education.value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item label="项目经历">
        <el-switch
          v-model="config.project.value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item label="技能证书">
        <el-switch
          v-model="config.skill.value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script>
import resume from '../../../store/resume'

export default {
  name: "moudleSwitch",
  data() {
    return {
      config: resume.config
    }
  }
};
</script>

<style>
</style>