import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "*",
            component: NotFound,
        }
    ]
});