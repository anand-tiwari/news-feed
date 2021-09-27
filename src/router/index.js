import { createRouter, createWebHistory } from 'vue-router'
import ListPage from '@/pages/ListPage.vue'
import BookmarkPage from '@/pages/BookmarkPage.vue'
import DetailPage from '@/pages/DetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'ListPage',
    component: ListPage
  },
  {
    path: '/section/bookmark/',
    name: 'BookmarkPage',
    component: BookmarkPage
  },
  {
    path: '/section/:sectionName',
    name: 'SectionPage',
    component: ListPage
  },
  {
    path: '/detail/:Id',
    name: 'DetailPage',
    component: DetailPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
