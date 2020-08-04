<template>
  <div>
    <el-container class="container">
      <!-- -->
      <config v-if="tabPage === 0"/>
      <!-- 基础信息-->
      <basic  v-if="tabPage === 1" />
      <!-- 工作经验 -->
      <experience v-if="tabPage === 2"/>
      <!-- 教育背景 -->
      <education v-if="tabPage === 3"/>
      <!-- 项目经验 -->
      <project v-if="tabPage === 4" />
       <!-- 技能证书 -->
      <skill v-if="tabPage === 5" />
    </el-container>
  </div>
</template>

<script>
import config from './moudle/config'
import basic from './moudle/basic'
import experience from './moudle/experience' 
import education from './moudle/education'
import project from './moudle/project'
import skill from './moudle/skill'


export default {
  name: 'editContent',
  props: ['tabPage'],
  components: {
    basic,
    experience,
    education,
    project,
    skill,
    config
  }
}
</script>

<style scoped>
.container {
  width: 350px;
  padding-top: 15px;
  padding-left: 15px;
}
</style>

