<script setup lang="ts">
import { ref } from "vue";
const installData = ref([
  {
    header: "Install",
    text: `pnpm i vit-space-ui
# or
yarn add vit-space-ui
# or
npm i vit-space-ui`,
  },
]);
const collapseData = ref([
  {
    header: "以上九个 API 使用时直接引入即可:",
    text: `<script setup lang="ts">
\import { dateFormat, requestAnimationFrame, cancelAnimationFrame, rafTimeout, cancelRaf, throttle, debounce, add, downloadFile } from 'vit-space-ui'

<\/script>`,
  },
]);
const activeKey = ref(0);
</script>
<template>
  <div class="home">
    <h1>Vit Space UI</h1>
    <p class="u-tip mb10 mt10">该组件库采用 Vue3 + TS + Vite3 + Less 实现！</p>
    <p class="u-tip">开箱即用！</p>
    <h2 class="mt30 mb10">主要有以下三种使用方式：</h2>
    <Collapse
      lang="bash"
      :fontSize="16"
      :collapseData="installData"
      v-model:activeKey="activeKey"
      copyable
    />
    <ul class="m-list">
      <li class="u-tip mb10 mt10">全局引入所有组件</li>
      <li class="u-tip mb10">按需引入部分组件</li>
      <li class="u-tip mb10">
        git clone
        <a href="https://github.com/AimosSong/vit-space-ui" target="_blank"
          >vit-space-ui</a
        >
        到本地后，从 packages 下单独拷贝单文件组件 (SFC) 到项目内使用
      </li>
    </ul>
    <h2 class="mt30">Vit Space UI 还提供了八个常用工具函数 ：</h2>
    <ul class="m-list">
      <li class="u-tip mb10 mt10">dateFormat: 简单易用的日期格式化函数！</li>
      <li class="u-tip mb10">
        requestAnimationFrame: 针对不同浏览器进行兼容处理！
      </li>
      <li class="u-tip mb10">
        cancelAnimationFrame: 针对不同浏览器进行兼容处理！
      </li>
      <li class="u-tip mb10">
        rafTimeout: 使用 requestAnimationFrame 实现的定时器函数，等效替代
        (setTimeout 和 setInterval)！
      </li>
      <li class="u-tip mb10">cancelRaf: 用于取消 rafTimeout 函数！</li>
      <li class="u-tip mb10">throttle: 使用 rafTimeout 实现的节流函数！</li>
      <li class="u-tip mb10">debounce: 使用 rafTimeout 实现的防抖函数！</li>
      <li class="u-tip mb10">add: 消除js加减精度问题的加法函数！</li>
      <li class="u-tip mb10">
        downloadFile:
        下载文件并自定义文件名，未传文件名时，从文件地址中自动获取文件名称！
      </li>
    </ul>
    <Collapse
      lang="vue3"
      :fontSize="16"
      :collapseData="collapseData"
      v-model:activeKey="activeKey"
      copyable
    />
  </div>
</template>
<style lang="less">
.u-head {
  font-size: 16px;
}
.u-text {
  font-size: 16px;
}
</style>
