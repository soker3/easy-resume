<template>
  <el-card :body-style="{ padding: '0px' }" class="box-card">
    <el-container>
      <!-- 左边栏 -->
      <el-aside width="300px">
        <!-- 头像 -->
        <div class="header">
          <el-image :src="resume.basic.imageSrc" fit="fill" style="width: 200px; height: 200px"></el-image>
        </div>

        <!-- 基本信息 -->
        <div class="name">
          <el-row style="height:50px;">
            <font class="title">{{resume.basic.name}}</font>
          </el-row>
          <el-row style="height:50px;">
            <font class="title">求职意向：{{resume.basic.purpose}}</font>
          </el-row>
        </div>

        <!-- 其他基本信息 -->
        <div class="basic">
          <table>
            <tr>
              <td width="35px" style="font-size:23px">
                <i class="el-icon-orange"></i>
              </td>
              <td width="80px">出生日期:</td>
              <td>{{ resume.basic.brithday }}</td>
            </tr>
            <tr>
              <td style="font-size:23px">
                <i class="el-icon-location-outline"></i>
              </td>
              <td>籍<span style="margin: 18px" />贯:</td>
              <td>{{ resume.basic.nativePlace }}</td>
            </tr>
            <tr>
              <td style="font-size:23px">
                <i class="el-icon-star-off"></i>
              </td>
              <td>政治面貌:</td>
              <td>{{ resume.basic.politicsStatus }}</td>
            </tr>
            <tr>
              <td style="font-size:23px">
                <i class="el-icon-user"></i>
              </td>
              <td>
                民<span style="margin: 18px" />族:
              </td>
              <td>{{ resume.basic.nation }}</td>
            </tr>
            <tr>
              <td style="font-size:23px">
                <i class="el-icon-phone-outline"></i>
              </td>
              <td colspan="2">{{ resume.basic.phone }}</td>
            </tr>
            <tr>
              <td style="font-size:23px">
                <i class="el-icon-chat-square"></i>
              </td>
              <td colspan="2">{{ resume.basic.eMail }}</td>
            </tr>
          </table>
        </div>
      </el-aside>

      <!-- 主要内容 -->
      <el-main>
        <!-- 教育背景 -->
        <div>
          <el-divider content-position="left" v-if="resume.education">教育背景</el-divider>
          <table
            class="table-content"
            style="border: 1px;text-align: left"
            width="560px"
            v-for="(item, index) in resume.education"
            :key="index"
          >
            <tr>
              <td width="200px">{{ item.studyDateView }}</td>
              <td width="150px">{{ item.school }}</td>
              <td style="text-align: right">{{ item.major }}</td>
            </tr>
          </table>
        </div>
        <!-- 工作经历 -->
        <div>
          <el-divider content-position="left">工作经验</el-divider>
          <table
            class="table-content"
            style="border: 1px;text-align: left"
            width="560px"
            v-for="(item, index) in resume.experience"
            :key="index"
          >
            <tr>
              <td colspan="2">{{ item.workDateView }}</td>
            </tr>
            <tr>
              <td colspan="2"><strong>工作单位:</strong>{{ item.company }} | <strong>职位:</strong>{{item.post}}</td>
            </tr>
            <tr>
              <td class="td-label"><strong>工作描述：</strong></td>
              <td>{{ item.desc }}</td>
            </tr>
            <tr height="80px"></tr>
          </table>
        </div>
        <!-- 项目经历 -->
        <div>
          <el-divider content-position="left" v-if="resume.project.length > 0">项目经历 </el-divider>
          <table
            class="table-content"
            style="border: 1px;text-align: left"
            width="560px"
            v-for="(item, index) in resume.project"
            :key="index"
          >
            <tr>
              <td class="td-contenet" colspan="2">{{ item.projectDateView }}</td>
            </tr>
            <tr>
              <td class="td-contenet" colspan="2">{{ item.projectName }}</td>
            </tr>
            <tr>
              <td class="td-label"><strong> 相关技术栈： </strong> </td>
              <td>{{ item.tecStack }}</td>
            </tr>
            <tr>
              <td class="td-label"><strong> 项目角色： </strong> </td>
              <td>{{ item.projectRole }}</td>
            </tr>
            <tr>
              <td class="td-label"><strong> 项目职责： </strong> </td>
              <td>{{ item.projectDute }}</td>
            </tr>
            <tr>
              <td class="td-label"><strong>项目描述：</strong></td>
              <td>{{ item.projectDesc }}</td>
            </tr>
            <tr height="20px"></tr>
          </table>
        </div>
        <!-- 项目经历 -->
        <div>
          <el-divider content-position="left" v-if="Object.keys(resume.skill).length > 0">职业技能</el-divider>
          <table
            class="table-content"
            style="border: 1px;text-align: left"
            width="560px"
          >
            <tr>
              <td class="td-label"><strong> 语言技能：</strong></td>
              <td class="td-contenet">{{ resume.skill.language }}</td>
            </tr>
            <tr>
              <td class="td-label"><strong> 办公技能：</strong></td>
              <td class="td-contenet">{{ resume.skill.office }}</td>
            </tr>
            <tr>
              <td class="td-label"><strong> 专业技能：</strong></td>
              <td class="td-contenet">{{ resume.skill.major }}</td>
            </tr>
            <tr height="20px"></tr>
          </table>
        </div>
      </el-main>
    </el-container>
  </el-card>
</template>

<script>
import resume from '../../store/resume'

export default {
  name: 'preview',
  data() {
    return {
      resume
    }
  },
  watch: {
    'resume.education': {
      handler: function(newVal) {
        newVal.forEach((item, index) => {
          // 格式化日期
          if (item.studyDate instanceof Array) {
            this.resume.education[index].studyDateView = item.studyDate.join(' - ') 
          }
          
        })
      },
      deep: true
    },
    'resume.experience': {
      handler: function(newVal) {
        newVal.forEach((item, index) => {
          // 格式化日期
          console.log(item)
          if (item.workDate instanceof Array) {
            this.resume.experience[index].workDateView = item.workDate.join(' - ') 
          }
          
        })
      },
      deep: true
    },
    'resume.project': {
      handler: function(newVal) {
        newVal.forEach((item, index) => {
          // 格式化日期
          if (item.projectDate instanceof Array) {
            this.resume.project[index].projectDateView = item.projectDate.join(' - ') 
          }
        })
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.header {
  padding: 50px 0px;
  height: 200px;
  text-align: center;
}
.name {
  padding-top: 20px;
  height: 100px;
  background-color: #2398db;
  text-align: center;
}
.basic {
  height: 600px;
  font-size: 17px;
  padding: 30px 30px 30px 30px;
  text-align: left;
}
.title {
  font-size: 18px;
  color: #ffffff;
}
table {
  line-height: 50px;
}
.table-content {
  line-height: 30px;
  border-bottom: 1000px;
  table-layout: fixed;
}
.basic td {
  white-space: nowrap;
}
.content {
  line-height: 30px;
}
.el-aside {
  background-color: #e1e4e7;
  color: #333;
}
.el-main {
  background-color: #ffffff;
  color: #333;
}
.el-image {
  border-radius: 100px;
}
.td-label {
  padding-top:10px;
  width: 100px;
}
.td-contenet {
  padding-top:10px;
}
</style>