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
            name: "tpeventbinding",
            component: () => import("../views/tp/tpeventbinding.vue"),
        },
        {
            path: "/watchers",
            name: "watchers",
            component: () => import("../views/lessons/watchers.vue"),
        },
        {
            path: "/reactivite",
            name: "reactivite",
            component: () => import("../views/tp/reactivite.vue"),
        },
        {
            path: "/dynamicstyling",
            name: "dynamicstyling",
            component: () => import("../views/exo/dynamicstyling.vue"),
        },
        {
            path: "/tp_dynamicstyling",
            name: "tp_dynamicstyling",
            component: () => import("../views/tp/tp_dynamicstyling.vue"),
        },
    ],
});

export default router;
