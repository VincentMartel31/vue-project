import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue"),
        },

        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () => import("../views/NotFoundView.vue"),
        },

        {
            path: "/textinterpolation",
            name: "NotFound",
            component: () => import("../views/lessons/textinterpolation.vue"),
        },
    ],
});

export default router;
