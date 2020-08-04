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
        <el-input v-model="sharedState.resume.skill.language"></el-input>
      </el-form-item>
      <el-form-item label="办公技能">
        <el-input v-model="sharedState.resume.skill.office"></el-input>
      </el-form-item>
      <el-form-item label="专业技能">
        <el-input type="textarea" autosize v-model="sharedState.resume.skill.major"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'skill',
  data() {
    return {
      sharedState: this.$Store.state
    }
  }
}
</script>

<style>
</style>