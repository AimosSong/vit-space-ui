import DefaultTheme from "vitepress/theme";
import "./global.less"; // global less
// import VitSpaceUI from 'vit-space-ui'
// import 'vit-space-ui/css'
import VitSpaceUI from "../../../dist/vit-space-ui";
import "../../../dist/style.css";

export default {
    extends: DefaultTheme, // or ...DefaultTheme
    enhanceApp({ app }) {
        app.use(VitSpaceUI);
    },
};
