<script setup lang="ts">
import { ref } from 'vue'
import { rafTimeout } from '../../packages'

const center = ref(true)
const footer = ref(false)
const loading = ref(false)
const visible = ref(false)
const title = ref('Dialog Title')
const content = ref('Content of the modal ...')
function showDialog (info: string) {
  footer.value = false
  center.value = true
  content.value = info
  visible.value = true
}
function showFooterDialog (info: string) {
  footer.value = true
  center.value = true
  content.value = info
  visible.value = true
}
function showCenterDialog (info: string) {
  center.value = true
  content.value = info
  visible.value = true
}
function showFixDialog (info: string) {
  center.value = false
  content.value = info
  visible.value = true
}
function onClose () { // 关闭回调
  visible.value = false
}
function onCancel () { // “取消”按钮回调
  visible.value = false
}
function onConfirm () { // “确定”按钮回调
  loading.value = true // 开启加载状态
  rafTimeout(() => {
    visible.value = false
    loading.value = false
  }, 500)
}
</script>
<template>
  <div>
    <h2 class="mb10">Dialog 对话框基本使用</h2>
    <Button type="primary" class="mr30" @click="showDialog('Some descriptions ...')">默认对话框</Button>
    <Button type="primary" class="mr30" @click="showFooterDialog('Some descriptions ...')">有底部按钮的对话框</Button>
    <Button type="primary" class="mr30" @click="showCenterDialog('Some descriptions ...')">水平垂直居中对话框</Button>
    <Button type="primary" class="mr30" @click="showFixDialog('Some descriptions ...')">高度固定对话框</Button>
    <Dialog
      :title="title"
      :content="content"
      :footer="footer"
      switchFullscreen
      @close="onClose"
      @cancel="onCancel"
      @ok="onConfirm"
      :center="center"
      :loading="loading"
      :visible="visible">
      <template #title>
        <p class="u-title">Title</p>
      </template>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </Dialog>
  </div>
</template>
<style lang="less" scoped>
.u-title {
  font-size: 16px;
}
</style>
