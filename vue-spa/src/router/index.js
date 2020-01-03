import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Games from '@/components/Games'
import singleContent from '@/components/singleContent'
import indexGames from '@/components/indexGames'
import indexFilms from '@/components/indexFilms'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
      {
        path: '/games',
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
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: indexFilms,
    }
  ]
})