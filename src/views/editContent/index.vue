<template>
  <div>
    <el-container class="container">
      <el-form
        v-if="tabPage === 1"
        :label-position="'left'"
        size="medium"
        ref="form"
        label-width="80px"
        style="width:335px;"
      >
        <el-form-item label="姓名">
          <el-input v-model="resume.basic.name" clearable></el-input>
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

      <!--工作经验-->
      <div v-if="tabPage === 2">
        <el-button type="primary" icon="el-icon-edit" @click="addList()">添加</el-button>
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
          <el-button type="danger" icon="el-icon-delete" @click="deleteList(index)"></el-button>
        </el-form>
      </div>

      <!--教育背景-->
      <div v-if="tabPage === 3">
        <el-button type="primary" icon="el-icon-edit" @click="addList()">添加</el-button>
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
          <el-button type="danger" icon="el-icon-delete" @click="deleteList(index)"></el-button>
        </el-form>
      </div>
    </el-container>
  </div>
</template>

<script>
import resume from '../../store/resume'

export default {
  name: 'editContent',
  props: ['tabPage'],
  data() {
    return {
      resume
    }
  },
  methods: {
    addList() {
      console.log(typeof resume.education[0].studyDate)
      if (this.tabPage === 3) {
        this.resume.education.push({
          studyDate: '',
          school: '',
          major: ''
        })
      }
      if (this.tabPage === 2) {
        this.resume.experience.push({
          workDate: '',
          company: '',
          workAge: '',
          desc: ''
        })
      }
    },
    deleteList(index) {
      if (this.tabPage === 2) {
        this.resume.experience.splice(index, 1)
      }
      if (this.tabPage === 3) {
        this.resume.education.splice(index, 1)
      }
      
    }
  },
  watch: {
    data(newVal, oldVal) {
      console.log('监听', newVal, oldVal)
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

