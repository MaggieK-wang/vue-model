<template>
  <div id="page">
    <div>
      <span>基本信息</span>
      <br />
      <div class="page-name">
        <label for="">姓名</label><el-input></el-input>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page {
  &-name {
    display: flex;
    .el-input {
      width: 100px;
    }
  }
}
</style>
