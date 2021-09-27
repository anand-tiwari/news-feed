import Header from '@/components/Header.vue'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

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

describe('Header.vue', () => {
  let wrapper, vm
  const feed = {
    namespaced: true,
    state () {
      return {
        visibleSidebar: false
      }
    },
    mutations: {},
    actions: {
      updateSidebarStatus: jest.fn()
    },
    getters: {
      sections: (state) => state.sections
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

  const updateSidebarStatusSpy = jest.spyOn(feed.actions, 'updateSidebarStatus')

  beforeAll(async () => {
    router.push('/')
    await router.isReady()
    wrapper = mount(Header, {
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

  test('[METHODS] openSidebar', () => {
    vm.openSidebar()
    expect(updateSidebarStatusSpy).toHaveBeenCalled()
  })
})
