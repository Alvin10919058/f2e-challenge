import Vue from 'vue'
import Router from 'vue-router'
import MP3player from './views/mp3-player'
import OnlinePayment from './views/online-payment'
import Game from './views/90s-game'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //   path: "/",
        //   name: "home",
        //   component:
        // },
        {
            path: '/week3',
            name: 'week3',
            component: MP3player
        },
        {
            path: '/week4',
            name: 'week4',
            component: OnlinePayment
        },
        {
            path: '/week5',
            name: 'week5',
            component: Game
        }
    ]
})
