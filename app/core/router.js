import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/pages/Home.vue";
import Login from "../components/pages/Login.vue";
import SignUp from "../components/pages/SignUp.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    }, {
        path: "/login",
        name: "Login",
        component: Login
    }, {
        path: "/signup",
        name: "SignUp",
        component: SignUp
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;