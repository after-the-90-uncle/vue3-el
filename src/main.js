import { createApp } from "vue";
import store from "./store";
import routes from "./routes";
import App from "./App";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import api from "./api";
const app = createApp(App).use(routes).use(store);
app.use(ElementPlus, {
    locale: zhCn,
});
app.use(api);

app.mount("#app");
