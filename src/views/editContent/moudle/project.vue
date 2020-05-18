<template>
  <div>
    <el-form
      :label-position="'left'"
      size="medium"
      ref="form"
      label-width="85px"
      style="width:335px"
      v-for="(item, index) in resume.project"
      :key="index"
    >
      <el-divider style="height: 20px" content-position="left">项目经验{{index + 1}}</el-divider>
      <el-form-item label="项目时间">
        <el-date-picker
          v-model="item.projectDate"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="width:255px"
          value-format="yyyy.MM"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="项目名称">
        <el-input v-model="item.projectName"></el-input>
      </el-form-item>
      <el-form-item label="相关技术栈">
        <el-input v-model="item.tecStack"></el-input>
      </el-form-item>
      <el-form-item label="项目角色">
        <el-input v-model="item.projectRole"></el-input>
      </el-form-item>
      <el-form-item label="项目职责">
        <el-input v-model="item.projectDute"></el-input>
      </el-form-item>
      <el-form-item label="项目描述">
        <el-input type="textarea" autosize v-model="item.projectDesc"></el-input>
      </el-form-item>
     <el-form-item>
        <div style="float: right">
          <el-button type="primary" icon="el-icon-edit" @click="addList()" circle />
          <el-button type="danger" icon="el-icon-delete" @click="deleteList(index)" circle />
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import resume from  '../../../store/resume'

export default {
  name: 'project',
  data() {
    return {
      resume
    }
  },
  methods: {
    addList() {
      this.resume.project.push({
        projectDate: '',
        projectName: '',
        tecStack: '',
        projectRole: '',
        projectDute: '',
        projectDesc: ''
      })
    },
    deleteList(index) {
      this.resume.project.splice(index, 1)
    }
  }
}
</script>

<style>
</style>