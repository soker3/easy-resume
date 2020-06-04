<template>
  <div class="content" >
    <el-container>
      <el-header>
        <toolbar/>
      </el-header>
      <el-container>
        <el-aside width="550px"><edit/></el-aside>
        <el-main><preview/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import edit from '../edit'
import preview from '../preview'
import toolbar from '../toolbar'

export default {
  name: 'Home',
  components: {
    edit,
    preview,
    toolbar
  }
}
</script>

<style scoped>
.el-header {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: left;
    padding: 0 20px 10px 10px;

  }
  
  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: left;
    padding: 20px 10px 10px 10px;
  }
  
  .el-main {
    color: #333;
    text-align: center;
  }
  .content {
    width:1500px; 
    margin:0 auto
  }
</style>

