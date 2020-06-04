<template>
  <el-card :body-style="{ padding: '10px' }" class="box-card">
    <el-row>
      <el-col :span="6">
        <div class="grid-content">easy_resume</div>
      </el-col>
      <el-col :span="11">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content">
          <el-button type="primary" icon="el-icon-notebook-1">提取数据</el-button>
          <el-button type="primary" icon="el-icon-document-checked">保存数据</el-button>
          <el-button type="primary" icon="el-icon-document-checked"  @click="expPdf()">导出成PDF文件</el-button>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>

export default {
  name: 'toolbar',
  methods: {
    expPdf() {
      this.getPdf('resumeid', 'resume')
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