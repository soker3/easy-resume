<template>
  <div>
    <el-container class="container">
      <basic  v-if="tabPage === 1" />
      <!--工作经验-->
      <experience v-if="tabPage === 2"/>
      <!--教育背景-->
      <education v-if="tabPage === 3"/>

    </el-container>
  </div>
</template>

<script>
import resume from '../../store/resume'
import basic from './moudle/basic'
import experience from './moudle/experience' 
import education from './moudle/education'

export default {
  name: 'editContent',
  props: ['tabPage'],
  components: {
    basic,
    experience,
    education
  },
  data() {
    return {
      resume
    }
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

