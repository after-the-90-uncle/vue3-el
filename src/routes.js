import { createRouter, createWebHistory } from "vue-router";
import routes from "./pages/router";

// export default {
//   '/': 'Home',
//   '/session1': 'Session1',
//   '/session2': 'Session1'
// }
export default createRouter({
    history: createWebHistory(),
    routes,
});
