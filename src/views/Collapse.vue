<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const collapseData = ref([
  {
    key: '1',
    header: 'This is panel header 1',
    text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'
  },
  {
    key: '2',
    header: 'This is panel header 2',
    text: `  A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`
  },
  {
    key: '3',
    header: 'This is panel header 3',
    text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'
  }
])
const activeKey = ref(['1'])
watchEffect(() => {
  console.log('activeKey:', activeKey.value)
})
const key = ref('1')
watchEffect(() => {
  console.log('key:', key.value)
})
function onChange (key: any) {
  console.log('change:', key)
}
</script>
<template>
  <div>
    <h2 class="mb10">Collapse 折叠面板基本使用 (activeKey 传入 number[] | string[]，所有面板可同时展开)</h2>
    <Collapse
      :collapseData="collapseData"
      v-model:activeKey="activeKey"
      @change="onChange" />
    <h2 class="mt30 mb10">'手风琴' (只允许单个内容区域展开，只需 activeKey 传入 number | string 即可)</h2>
    <Collapse
      :collapseData="collapseData"
      v-model:activeKey="key"
      @change="onChange" />
    <h2 class="mt30 mb10">可复制面板内容 (copyable)</h2>
    <Collapse
      lang="template"
      copyable
      :collapseData="collapseData"
      v-model:activeKey="activeKey"
      @change="onChange" />
    <h2 class="mt30 mb10">使用插槽 slot 自定义 header、lang、text 内容</h2>
    <Collapse
      copyable
      :collapseData="collapseData"
      v-model:activeKey="activeKey"
      @change="onChange">
      <template #header="{ header, key }">
        <span v-if="key==='1'" style="color: burlywood;">burlywood color {{ header }} (key = {{ key }})</span>
      </template>
      <template #lang>typescript</template>
      <template #text="{ text, key }">
        <span v-if="key==='1'" style="color: burlywood;">burlywood color {{ text }} (key = {{ key }})</span>
      </template>
    </Collapse>
    <h2 class="mt30 mb10">折叠面板，隐藏箭头图标 (showArrow: false)</h2>
    <Collapse
      :show-arrow="false"
      :collapseData="collapseData"
      v-model:activeKey="activeKey"
      @change="onChange"/>
    <h2 class="mt30 mb10">Ant Design Vue 折叠面板</h2>
    <a-collapse v-model:activeKey="activeKey" @change="onChange">
      <a-collapse-panel
        v-for="(data, index) in collapseData" :key="index"
        :header="data.header">
        <p>{{ data.text }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<style lang="less" scoped>

</style>
