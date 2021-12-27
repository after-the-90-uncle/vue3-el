export default [
    {
        path: "/",
        name: "home",
        component: () => import("./Home"),
    },
    {
        path: "/login",
        name: "login",
        meta: {requiresAuth:true},
        component: () => import("./Login"),
        // beforeRouteEnter:(to,from,next) => {
        //     // console.log(to,from,next ,"--", this)

        //     next((vm) => {
        //         console.log(vm , "--vm")
        //     })
        // }
    },
];
