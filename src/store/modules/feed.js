import feedApi from '@/api/feed'

const state = () => ({
  visibleSidebar: false,
  feeds: [],
  bookmarkedFeeds: {},
  sections: [
    { name: 'Bookmark', value: 'bookmark' },
    { name: 'Home', value: 'home' },
    { name: 'World', value: 'World' },
    { name: 'U.S.', value: 'us' },
    { name: 'Politics', value: 'politics' },
    { name: 'N.Y.', value: 'nyregion' },
    { name: 'Business', value: 'business' },
    { name: 'Opinion', value: 'opinion' },
    { name: 'Tech', value: 'technology' },
    { name: 'Science', value: 'science' },
    { name: 'Health', value: 'health' },
    { name: 'Sports', value: 'sports' },
    { name: 'Arts', value: 'arts' },
    { name: 'Books', value: 'books' },
    { name: 'Style', value: 'style' },
    { name: 'Food', value: 'food' },
    { name: 'Travel', value: 'travel' },
    { name: 'Magazine', value: 'magazine' },
    { name: 'T Magazine', value: 't-magazine' }
  ]

})

const mutations = {
  setSidebarStatus (state, val) {
    state.visibleSidebar = val
  },
  setFeeds (state, val) {
    state.feeds = val
  },
  setBookmarkedFeed (state, val) {
    state.bookmarkedFeeds = Object.assign({}, val)
  }
}

const actions = {
  updateSidebarStatus ({ commit }, val) {
    commit('setSidebarStatus', val)
  },
  getNewsFeed ({ commit }, { data, section, success, fail }) {
    feedApi.getNewsFeed(
      response => {
        commit('setFeeds', response.data.results)
        success && success(response)
      },
      { data, section },
      response => {
        fail && fail(response)
      }
    )
  },
  updateBookmarkedFeeds ({ commit }, val) {
    commit('setBookmarkedFeed', val)
  }
}

const getters = {
  visibleSidebar: state => state.visibleSidebar,
  feedList: state => state.feeds,
  sections: state => state.sections,
  bookmarkedFeeds: state => state.bookmarkedFeeds
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
