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
        {
            path: "/LessonListRendering",
            name: "LessonListRendering",
            component: () => import("../views/lessons/LessonListRendering.vue"),
        },
        {
            path: "/exo_listrendering",
            name: "exo_listrendering",
            component: () => import("../views/exo/exo_listrendering.vue"),
        },
        {
            path: "/exo_listecourses",
            name: "exo_listecourses",
            component: () => import("../views/exo/exo_listecourses.vue"),
        },
        {
            path: "/exoenplus",
            name: "exoenplus",
            component: () => import("../views/exo/exoenplus.vue"),
        },
        {
            path: "/FriendList",
            name: "FriendList",
            component: () => import("../views/exo/FriendList.vue"),
        },
        {
            path: "/PropsOneFriendComp",
            name: "exoprops",
            component: () => import("../views/exo/PropsOneFriendComp.vue"),
        },
        {
            path: "/SignUp",
            name: "SignUp",
            component: () => import("../views/exo/SignUp.vue"),
        },
    ],
});

export default router;
