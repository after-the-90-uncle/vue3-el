export default [
    {
        path: "/",
        name: "home",
        component: () => import("./Home"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("./Login"),
    },
];
