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
            <el-button type="primary" @click="login" v-show="privateState.isLoginShow" style="margin-left: 10px;">登录</el-button>
            <el-button type="primary" @click="register" v-show="privateState.isRegisterShow">注册</el-button>
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
        isRegisterShow: false,
      },
      sharedState: this.$Store.state
    }
  },
  methods: {
    /*
    * 下拉菜单的控制
    */
    dropDown(command) {
      if (command == 'expPdf')  this.expPdf()
      if (command == 'getResume')  this.getResume()
      if (command == 'saveResume')  this.saveResume()
      if (command == 'login') {
        this.privateState.isInputShow = true
        this.privateState.isLoginShow = true
        this.privateState.isRegisterShow = false
      }
      if (command == 'register') {
        this.privateState.isInputShow = true
        this.privateState.isRegisterShow = true
        this.privateState.isLoginShow = false
      }

    },
    /*
    * 导出功能
    */
    expPdf() {
      this.getPdf('resumeid', 'resume')
    },
    /*
    * 提取数据
    */
    getResume() {
      // 从session中获取用户id
      let username = sessionStorage.getItem('username')
      if (!username) {
        this.$message({
            showClose: true,
            message: '未找到用户信息，请先登录',
            type: 'error'
        })
        return 
      }
      const query = this.$Bmob.Query('resume')
      query.equalTo('userId', '==', username)
      query.find().then(res => {
        this.$Store.setResumeAction(JSON.parse(res[0].content))
        this.$message({
            showClose: true,
            message: '提取成功！',
            type: 'success'
        })
      }).catch(err => {
        this.$message({
            showClose: true,
            message: '提取失败！',
            type: 'error'
        })
        console.log(err)  
      })
    },
    /*
    * 保存数据
    */
    saveResume() {
      // 从session中获取用户id
      let username = sessionStorage.getItem('username')
      if (!username) {
        this.$message({
            showClose: true,
            message: '未找到用户信息，请先登录',
            type: 'error'
        })
        return 
      }
      const query = this.$Bmob.Query('resume')
      query.equalTo('userId', '==', username)
      query.find().then(todos => {
        todos.set('content', JSON.stringify(this.sharedState.resume))
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
    /*
    * 登录
    */
    login() {
      this.$Bmob.User.login(this.privateState.userName, this.privateState.password).then(res => {
        // 存入session
        sessionStorage.setItem('userOjbectId', res.objectId )
        sessionStorage.setItem('userSessionToken', res.sessionToken )
        sessionStorage.setItem('username', res.username )
        this.$message({
            showClose: true,
            message: '登录成功！',
            type: 'success'
        })
        // 获取数据
        this.getResume()
        // 隐藏登录/注册窗口
        this.privateState.userName = ''
        this.privateState.password = ''
        this.privateState.isLoginShow = false
        this.privateState.isRegisterShow =  false
      }).catch(err => {
        console.log(err, '失败')
        this.$message({
          showClose: true,
          message: `登录失败！${err.error}`,
          type: 'error'
        })
      })
    },
    /*
    * 注册
    */
    register() {
      let params = {
          username: this.privateState.userName,
          password: this.privateState.password,
          email: `${this.privateState.userName}@bmob.cn`,
          phone: '13711166567'
      }
      this.$Bmob.User.register(params).then(res => {
        console.log(res, '注册成功')
        this.$message({
          showClose: true,
          message: `注册成功！`,
          type: 'success'
        })
        console.log('', 'name:' + res.username)
        console.log(res)
        // 存入session
        sessionStorage.setItem('userOjbectId', res.objectId )
        sessionStorage.setItem('userSessionToken', res.sessionToken )
        sessionStorage.setItem('username', this.privateState.userName )
        // 在模板表新增一条记录
        const query = this.$Bmob.Query('resume')
        query.set("userId", this.privateState.userName)
        query.set('content', JSON.stringify(this.sharedState.defaultResume))
        query.save().then(res => {
          console.log(res, '新增成功')
        }).catch(err => {
          console.log(err, '新增失败')
        })
        // 隐藏登录/注册窗口
        this.privateState.userName = ''
        this.privateState.password = ''
        this.privateState.isLoginShow = false
        this.privateState.isRegisterShow =  false
      }).catch(err => {
        console.log(err, '注册失败')
        this.$message({
          showClose: true,
          message: `注册失败！${err.error}`,
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