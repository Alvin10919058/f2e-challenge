import Vue from "vue";
import Router from "vue-router";
import MP3player from "./views/mp3-player";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component:
    // },
    {
      path: "/week3",
      name: "week3",
      component: MP3player
    }
  ]
});
