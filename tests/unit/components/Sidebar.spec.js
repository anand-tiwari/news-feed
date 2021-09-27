import Sidebar from '@/components/Sidebar.vue'
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

describe('Sidebar.vue', () => {
  let wrapper, vm
  const feed = {
    namespaced: true,
    state () {
      return {
        visibleSidebar: true
      }
    },
    mutations: {
      setSidebarStatus: jest.fn()
    },
    actions: {
      updateSidebarStatus: jest.fn()
    },
    getters: {
      visibleSidebar: (state) => state.visibleSidebar,
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
    wrapper = mount(Sidebar, {
      global: {
        plugins: [store, router]
      },
      directives: {
        clickOutside
      },
      shallow: true
    })
    vm = wrapper.vm
  })

  test('Initialized well', () => {
    expect(wrapper).toBeTruthy()
  })

  test('[METHODS] hideSidebar', () => {
    vm.hideSidebar()
    expect(updateSidebarStatusSpy).toHaveBeenCalled()
  })
})
