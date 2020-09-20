<template>
  <el-card :body-style="{ padding: '10px' }" class="box-card">
    <el-row>
      <el-col :span="17">
        <!-- 登陆/注册窗口-->
        <div class="grid-content" >
          <el-form :inline="true" v-show="privateState.isLoginShow || privateState.isRegisterShow">
            <el-form-item label="用户名" style="margin-bottom: 0px;">
              <el-input size="medium" v-model="privateState.userName" placeholder="请输入用户名" style="width:200px;" ></el-input>
            </el-form-item>
            <el-form-item label="密码" style="margin-bottom: 0px;"> 
              <el-input size="medium" v-model="privateState.password" placeholder="请输入密码" style="width:200px;" show-password></el-input>
            </el-form-item>
            <el-button type="primary" @click="login" v-show="privateState.isLoginShow" style="margin-left: 10px;">登陆</el-button>
            <el-button type="primary" @click="login" v-show="privateState.isRegisterShow">注册</el-button>
          </el-form>        
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content">
          <el-dropdown  trigger="click" @command="dropDown">
            <span>
              <el-avatar :size="privateState.size" :src="sharedState.resume.basic.imageSrc" :key="sharedState.resume.basic.imageSrc"></el-avatar>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">  
              <el-dropdown-item icon="el-icon-document-checked" command="expPdf" >导出PDF</el-dropdown-item>
              <el-dropdown-item icon="el-icon-download" command="getResume" divided>提取数据</el-dropdown-item>
              <el-dropdown-item icon="el-icon-upload" command="saveResume">保存数据</el-dropdown-item>
              <el-dropdown-item icon="el-icon-user" divided command="register">注册</el-dropdown-item>
              <el-dropdown-item icon="el-icon-user-solid" command="login">登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
      privateState: {
        size: 'medium',
        userName: '',
        password: '',
        isLoginShow: false,
        isRegisterShow: false
      },
      sharedState: this.$Store.state
    }
  },
  methods: {
    dropDown(command) {
      if (command == 'expPdf')  this.expPdf()
      if (command == 'getResume')  this.getResume()
      if (command == 'saveResume')  this.saveResume()
      if (command == 'login') {
        this.privateState.isLoginShow = true
        this.privateState.isRegisterShow = false
      }
      if (command == 'register') {
        this.privateState.isRegisterShow = true
        this.privateState.isLoginShow = false
      }

    },
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
      query.equalTo('userId', '==', this.$Store.state.user.username)
      query.find().then(todos => {
        todos.set('content', JSON.stringify(this.$Store.state.resume))
        todos.saveAll().then(res => {
          console.log(res,'成功')
          this.$message({
            showClose: true,
            message: '保存成功！',
            type: 'success'
          })
        }).catch(err => {
          console.log(err.error)
          this.$message({
            showClose: true,
            message: `保存失败！${err.error}`,
            type: 'error'
          })
        })
      })
    },
    login() {
      this.$Bmob.User.login(this.privateState.userName, this.privateState.password).then(res => {
        this.$Store.setUserAction(res)
        // 提取数据
        const query = this.$Bmob.Query('resume')
        query.get('127712f842').then(res => {
          this.$Store.setResumeAction(JSON.parse(res.content))
          this.$message({
            showClose: true,
            message: '登录成功！',
            type: 'success'
          })
        }).catch(err => {
          this.$message({
            showClose: true,
            message: `提取简历信息失败`,
            type: 'success'
          })
          console.log(err, '失败')
        })
      }).catch(err => {
        console.log(err, '失败')
        this.$message({
          showClose: true,
          message: `登录失败！${err.error}`,
          type: 'error'
        })
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
.el-input {
  display: inline-block;
}
</style>