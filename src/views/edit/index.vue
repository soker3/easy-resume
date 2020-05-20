<template>
    <el-card :body-style="{ padding: '0px 0px 10px 0px' }" class="box-card" style="width:500px;">
    <el-tabs :tab-position="tabPosition">
      <!-- 基本信息 -->
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 简历设置</span>
        <editContent :tab-page="0"/>
      </el-tab-pane>

      <!-- 基本信息 -->
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 基本信息</span>
        <editContent :tab-page="1"/>
      </el-tab-pane>

      <!-- 工作经历 -->
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 工作经历</span>
        <editContent :tab-page="2"/>
      </el-tab-pane>

      <!-- 教育背景 -->
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 教育背景</span>
        <editContent :tab-page="3"/>
      </el-tab-pane>

      <!-- 项目经历 -->
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 项目经历</span>
        <editContent :tab-page="4"/>
      </el-tab-pane>

      <!-- 技能证书 -->
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 技能证书</span>
        <editContent :tab-page="5"/>
      </el-tab-pane>

    </el-tabs>
    </el-card>
</template>

<script>
import editContent from '../editContent'

export default {
  components: {
    editContent
  },
  data() {
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style scoped>
</style>

