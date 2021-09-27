import FeedList from '@/components/FeedList.vue'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import { clickOutside } from '@/directives/click-outside-handler'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: {
        template: 'Welcome to the app'
      }
    }
  ]
})

describe('FeedList.vue', () => {
  let wrapper, vm
  const feed = {
    namespaced: true,
    state () {
      return {
        feeds: []
      }
    },
    mutations: {},
    actions: {},
    getters: {
      feedList: (state) => state.feeds
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

  beforeAll(async () => {
    router.push('/')
    await router.isReady()
    wrapper = mount(FeedList, {
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
})
