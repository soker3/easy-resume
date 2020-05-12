<template>
  <div>
    <el-form
      :label-position="'left'"
      size="medium"
      ref="form"
      label-width="80px"
      style="width:335px"
      v-for="(item, index) in resume.education"
      :key="index"
    >
      <el-divider style="height: 20px" content-position="left">教育背景{{index + 1}}</el-divider>
      <el-form-item label="起止日期">
        <el-date-picker
          v-model="item.studyDate"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="width:255px"
          value-format="yyyy.MM"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="毕业院校">
        <el-input v-model="item.school"></el-input>
      </el-form-item>
      <el-form-item label="专业">
        <el-input v-model="item.major"></el-input>
      </el-form-item>
      <el-button type="primary" icon="el-icon-edit" @click="addList()">添加</el-button>
      <el-button type="danger" icon="el-icon-delete" @click="deleteList(index)"></el-button>
    </el-form>
  </div>
</template>

<script>
import resume from "../../../store/resume";

export default {
  name: "education",
  data() {
    return {
      resume
    };
  },
  methods: {
    addList() {
      this.resume.education.push({
        studyDate: "",
        studyDateView: "",
        school: "",
        major: ""
      });
    },
    deleteList(index) {
      this.resume.education.splice(index, 1);
    }
  }
};
</script>

<style>
</style>