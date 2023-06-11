# 快速上手

## 安装

**With PNPM**

```bash
$ pnpm i vit-space-ui
# or
$ pnpm add vit-space-ui
```

**With Yarn**

```bash
$ yarn add vit-space-ui
```

**With NPM**

```bash
$ npm i vit-space-ui
```

## 使用

**Global**

```ts
import { createApp } from "vue";
import App from "./App.vue";

import VitSpaceUI from "vit-space-ui";
import "vit-space-ui/css";

const app = createApp(App);
app.use(VitSpaceUI);

app.mount("#app");
```

**Local**

```vue
<script setup lang="ts">
import { Button } from "vit-space-ui";
import "vit-space-ui/css";
</script>

<template>
  <Button></Button>
</template>
```
