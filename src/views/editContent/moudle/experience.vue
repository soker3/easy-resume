<template>
  <div>
    <el-form
      :label-position="'left'"
      size="medium"
      ref="form"
      label-width="80px"
      style="width:335px"
      v-for="(item, index) in resume.experience"
      :key="index"
    >
      <el-divider style="height: 20px" content-position="left">工作经验{{index + 1}}</el-divider>
      <el-form-item label="工作日期">
        <el-date-picker
          v-model="item.workDate"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="width:255px"
          value-format="yyyy.MM"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="工作单位">
        <el-input v-model="item.company"></el-input>
      </el-form-item>
      <el-form-item label="职务">
        <el-input v-model="item.post"></el-input>
      </el-form-item>
      <el-form-item label="工作描述">
        <el-input type="textarea" autosize v-model="item.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <div style="float: right">
          <el-button type="primary" icon="el-icon-edit" @click="addList()" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="deleteList(index)" circle></el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import resume from "../../../store/resume";

export default {
  name: "experience",
  data() {
    return {
      resume
    }
  },
  methods: {
    addList() {
      this.resume.experience.push({
        workDate: '',
        company: '',
        post: '',
        desc: ''
      })
    },
    deleteList(index) {
      if (this.resume.experience.length > 1)  {
        this.resume.experience.splice(index, 1)
      }
    }
  }
}
</script>

<style>
</style>