import ListPage from '@/pages/ListPage.vue'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: {
        template: 'Welcome to the app'
      }
    },
    {
      path: '/section/:sectionName',
      name: 'ListPage',
      component: {
        template: 'Welcome to the app'
      }
    }
  ]
})

const feed = {
  namespaced: true,
  state: {
    feeds: {}
  },
  mutations: {
    setFeeds (state, val) {
      state.socketStatus = val
    }
  },
  actions: {
    getNewsFeed: jest.fn()
  },
  getters: {
    feedList: (state) => state.socketStatus
  }
}
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    feed
  }
})

describe('ListPage.vue', () => {
  let wrapper, vm

  const getNewsFeedSpy = jest.spyOn(feed.actions, 'getNewsFeed')

  beforeAll(async () => {
    router.push('/section/home')
    await router.isReady()
    wrapper = mount(ListPage, {
      global: {
        plugins: [store, router]
      },
      shallow: true
    })
    vm = wrapper.vm
  })

  test('Initialized well', () => {
    expect(wrapper).toBeTruthy()
  })

  test('[METHODS] fetchNewsFeed', async () => {
    await router.push({
      query: { isin: ['INE'] }
    })
    vm.fetchNewsFeed()
    expect(getNewsFeedSpy).toHaveBeenCalled()
  })

  test('[WATCH] sectionName change in router path', async () => {
    await router.push('/section/World')
    await nextTick()
    expect(getNewsFeedSpy).toHaveBeenCalled()
  })
})
