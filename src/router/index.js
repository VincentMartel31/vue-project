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
            path: "/exobug",
            name: "exobug",
            component: () => import("../views/exo/exobug.vue"),
        },

        {
            path: "/textinterpolation",
            name: "Ntextinterpolation",
            component: () => import("../views/lessons/textinterpolation.vue"),
        },
        {
            path: "/vmodel",
            name: "vmodel",
            component: () => import("../views/lessons/vmodel.vue"),
        },

        {
            path: "/tpeventbinding",
            name: "Ntpeventbinding",
            component: () => import("../views/tp/tpeventbinding.vue"),
        },
    ],
});

export default router;
