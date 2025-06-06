import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/campfire',
    name: 'Campfire',
    component: loadPage('CampfirePage')
  },
  {
    path: '/activeBlog/:blogId',
    name: 'Active Blog',
    component: loadPage('ActiveBlogPage')
  },
  {
    path: '/editBlog/:blogId',
    name: 'Edit Blog',
    component: loadPage('EditBlogPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/activity/:activityName',
    name: 'Activity',
    component: loadPage('ActivityPage')
  },
  {
    path: '/test',
    name: 'Test',
    component: loadPage('TestPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
