<template>
  <el-card :body-style="{ padding: '10px' }" class="box-card">
    <el-row>
      <el-col :span="6">
        <div class="grid-content">easy_resume</div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="11">
        <div class="grid-content">
          <el-button type="primary" icon="el-icon-notebook-1" @click="getResume">提取数据</el-button>
          <el-button type="primary" icon="el-icon-document-checked" @click="saveResume">保存数据</el-button>
          <el-button type="primary" icon="el-icon-document-checked"  @click="expPdf">导出成PDF文件</el-button>
          <el-button type="primary" icon="el-icon-document-checked"  @click="login">登录</el-button>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>

export default {
  name: 'toolbar',
  data() {
    return {
      sharedState: this.$Store.state
    }
  },
  methods: {
    expPdf() {
      this.getPdf('resumeid', 'resume')
    },
    getResume() {
      const query = this.$Bmob.Query('resume')
      query.get('127712f842').then(res => {
        this.$Store.setResumeAction(JSON.parse(res.content))
        console.log(res)
      }).catch(err => {
        console.log(err)  
      })
    },
    saveResume() {
      const query = this.$Bmob.Query('resume')
      console.log(`userId: ${this.$Store.state.user.username}`)
      query.equalTo('userId', '==', this.$Store.state.user.username)
      query.find().then(todos => {
        todos.set('content', '{haha}')
        todos.saveAll().then(res => {
          console.log(res)
        }).catch(err => {
          console.log(`保存失败: ${err}`)
        })
      })
    },
    login() {
      this.$Bmob.User.login('admin', 'admin').then(res => {
        this.$Store.setUserAction(res)
        // 提取数据
        const query = this.$Bmob.Query('resume')
        query.get('127712f842').then(res => {
          this.$Store.setResumeAction(JSON.parse(res.content))
        }).catch(err => {
          console.log(err)
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.grid-content {
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>