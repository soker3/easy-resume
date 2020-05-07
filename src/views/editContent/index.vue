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

        <el-form-item label="求职意向" >
          <el-input  v-model="resume.basic.purpose" clearable></el-input>
        </el-form-item>
        <el-form-item label="出生年月" >
          <el-date-picker v-model="resume.basic.brithday" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="籍贯" >
          <el-input  v-model="resume.basic.nativePlace" clearable></el-input>
        </el-form-item>
        <el-form-item label="政治面貌" >
          <el-input  v-model="resume.basic.politicsStatus" clearable></el-input>
        </el-form-item>
        <el-form-item label="民族" >
          <el-input  v-model="resume.basic.nation" clearable></el-input>
        </el-form-item>
         <el-form-item label="联系方式" >
          <el-input  v-model="resume.basic.phone" clearable></el-input>
        </el-form-item>
         <el-form-item label="e-mail" >
          <el-input  v-model="resume.basic.eMail" clearable></el-input>
        </el-form-item>
      </el-form>

      <!--工作信息-->
      <el-form
        v-if="tabPage === 2"
        :label-position="'left'"
        size="medium"
        ref="form"
        label-width="80px"
        style="width:335px;"
      >
        <el-form-item label="工作单位" >
          <el-input  v-model="resume.basic.name"></el-input>
        </el-form-item>
        <el-form-item label="工作年限" >
          <el-input  v-model="resume.basic.name"></el-input>
        </el-form-item>
      </el-form>

      <!--工作经验-->
      <div v-if="tabPage === 3">
        <el-button type="primary" icon="el-icon-edit" @click="addList">添加</el-button>
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
              value-format="yyyy-MM"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="工作单位" >
            <el-input v-model="item.company"></el-input>
          </el-form-item>
          <el-form-item label="职务" >
            <el-input v-model="item.post"></el-input>
          </el-form-item>
          <el-form-item label="工作描述" >
            <el-input type="textarea" autosize v-model="item.desc"></el-input>
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
      this.resume.experience.push({
        workDate: '',
        company: '',
        workAge: '',
        desc: ''      })
    },
    deleteList(index) {
      this.resume.experience.splice(index, 1)
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

