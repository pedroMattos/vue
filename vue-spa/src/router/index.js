import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Games from '@/components/Games'
import Login from '@/components/Login'
import singleContent from '@/components/singleContent'
import indexGames from '@/components/indexGames'
import indexFilms from '@/components/indexFilms'
import Welcome from '@/components/Loged-user'
// import VueFire from '@/components/firebaseInit'


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
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/perfil',
      name: 'userpage',
      component: Welcome,
    }
  ]
})