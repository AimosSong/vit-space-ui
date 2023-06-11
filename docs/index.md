---
layout: home

title: VitSpace UI
titleTemplate: VitSpace UI Components Library

hero:
  name: Vit Space UI
  text: VitSpace UI 组件库
  tagline: 基于 Vue3 + TS + Vite 开发
  image:
    src: /logo-with-shadow.png
    alt: VitSpace UI
  actions:
    - theme: brand
      text: Get Started
      link: /guide/features
    - theme: alt
      text: View on GitHub
      link: https://github.com/AimosSong/vit-space-ui
    - theme: alt
      text: View on NPM
      link: https://www.npmjs.com/package/vit-space-ui
---

<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchVersion } from './.vitepress/utils/fetchVersion'

onMounted(() => {
  fetchVersion()
})
</script>
