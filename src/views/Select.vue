<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const options = ref([
{
        label: '北京市',
        value: 1
      },
      {
        label: '上海市',
        value: 2,
        disabled: true
      },
      {
        label: '纽约市',
        value: 3
      },
      {
        label: '旧金山',
        value: 4
      },
      {
        label: '布宜诺斯艾利斯',
        value: 5
      },
      {
        label: '伊斯坦布尔',
        value: 6
      },
      {
        label: '拜占庭',
        value: 7
      },
      {
        label: '君士坦丁堡',
        value: 8
      }
    ])
const selectedValue = ref(1)
watchEffect(() => {
  console.log('selectedValue:', selectedValue.value)
})
function onChange (value: string|number, label: string,  index: number) {
  console.log('value:', value)
  console.log('label:', label)
  console.log('index:', index)
}
function onAntChange (value: string|number, option: any) {
  console.log('value:', value)
  console.log('option:', option)
}
</script>
<template>
  <div>
    <h2 class="mb10">Select 选择器基本使用</h2>
    <Select :options="options" v-model="selectedValue" />
    <h2 class="mt30 mb10">支持清除 (allowClear: true)</h2>
    <Select
      :options="options"
      allowClear
      v-model="selectedValue"
      @change="onChange" />
    <h2 class="mt30 mb10">禁用 (disabled: true)</h2>
    <Select
      :options="options"
      disabled
      v-model="selectedValue" />
    <h2 class="mt30 mb10">宽度设置为160px (width: 160)</h2>
    <Select
      :width="160"
      :height="36"
      :options="options"
      v-model="selectedValue"
      @change="onChange" />
    <h2 class="mt30 mb10">Ant Design Vue 选择器支持清除 (allowClear)</h2>
    <a-select
      :options="options"
      style="width: 120px"
      placeholder="请选择城市"
      :disabled="false"
      allowClear
      v-model:value="selectedValue"
      @change="onAntChange" />
  </div>
</template>