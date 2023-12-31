import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/less/global.less";

import VitSpaceUI from "../packages";
// import { dateFormat, requestAnimationFrame, cancelAnimationFrame, rafTimeout, cancelRaf, throttle, debounce, add, downloadFile } from '../packages'
// import VitSpaceUI from '../dist/vit-space-ui.js'
// import '../dist/style.css'

const app = createApp(App);
// window.rafTimeout = rafTimeout // 挂载到window上，全局可用，无需引入

app.use(router);
app.use(VitSpaceUI);

app.mount("#app");
