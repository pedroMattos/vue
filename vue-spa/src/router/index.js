import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Games from '@/components/Games'
import singleContent from '@/components/singleContent'
import indexGames from '@/components/indexGames'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
      {
        path: 'games',
        name: 'jogos',
        component: indexGames,
        children: [
      {
        path: '',
        name: 'jogos',
        component: Games,
      },
      {
        path: ':nome',
        name: 'single',
        component: singleContent,
      }
      ]
    }
  ]
})