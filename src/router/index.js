import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import Home from '../views/Home.vue'

import store from '../store'
import i18n from '../i18n'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'root',
    beforeEnter(to, from, next) {
      next(store.state.language.lang)
    }
  },
  {
    path: '/:lang',
    component: {
      render(c) { return c('router-view') }
    },
    beforeEnter(to, from, next) {
      let lang = to.params.lang
      if (['en', 'bg'].includes(lang)) {
        if (store.state.language.lang != lang) {
          store.dispatch('language/changeLanguage', {
            lang: lang,
            i18n: i18n,
          })
        }
        return next()
      }
      return next({ path: store.state.language.lang })
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'privacy-policy',
        name: 'Privacy Policy',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyPolicy.vue')
      },
      {
        path: 'terms-of-service',
        name: 'Terms of Service',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/TermsOfService.vue')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    beforeEnter(to, from, next) {
      next(store.state.language.lang)
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.afterEach((to) => {

  if (store.state.language.lang && store.state.language.lang != i18n.locale) {
    i18n.locale = store.state.language.lang;
  }

  document.documentElement.setAttribute('lang', i18n.locale);

  window.gtag('config', window.GA_TRACKING_ID, {
    page_path: to.fullPath,
    app_name: 'Levelll',
    send_page_view: true,
  });

  window.gtag('event', 'screen_view', {
    screen_name: to.name,
  });

})

export default router
