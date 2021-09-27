import feedModule from '@/store/modules/feed'

const TYPE_BOOL_TRUE = true
const TYPE_BOOL_FALSE = false

describe('MUTATIONS store/feed.js', () => {
  const state = {
    visibleSidebar: false,
    feeds: [],
    bookmarkedFeeds: {},
    sections: []
  }

  test('mutation setSidebarStatus true', () => {
    const data = TYPE_BOOL_TRUE
    feedModule.mutations.setSidebarStatus(state, data)
    expect(state.visibleSidebar).toStrictEqual(data)
  })

  test('mutation setSidebarStatus false', () => {
    const data = TYPE_BOOL_FALSE
    feedModule.mutations.setSidebarStatus(state, data)
    expect(state.visibleSidebar).toStrictEqual(data)
  })

  test('mutation setFeeds', () => {
    const data = {title: 'test feed'}
    feedModule.mutations.setFeeds(state, data)
    expect(state.feeds).toStrictEqual(data)
  })

  test('mutation bookmarkedFeeds', () => {
   const data = {title: 'test feed'}
   feedModule.mutations.setBookmarkedFeed(state, data)
   expect(state.bookmarkedFeeds).toStrictEqual(data)
  })

})

describe('ACTIONS store/feed.js', () => {
  test('action updateSidebarStatus', () => {
    const commit = jest.fn()
    const data = TYPE_BOOL_TRUE
    feedModule.actions.updateSidebarStatus({ commit }, data)
  })
  test('action updateBookmarkedFeeds', () => {
    const commit = jest.fn()
    const data = {'bookmark_id': {title: 'feed title'} }
    feedModule.actions.updateBookmarkedFeeds({ commit }, data)
  })
})

describe('GETTERS store/feed.js', () => {
  const state = {
     visibleSidebar: false,
     feeds: [{title: 'title'}],
     bookmarkedFeeds: {'bookmark_id': { title: 'feed title'} },
     sections: [{ name: 'Bookmark', value: 'bookmark' }]
  }

  expect(feedModule.getters.visibleSidebar(state)).toStrictEqual(false)
  expect(feedModule.getters.feedList(state)).toStrictEqual(state.feeds)
  expect(feedModule.getters.sections(state)).toStrictEqual(state.sections)
  expect(feedModule.getters.bookmarkedFeeds(state)).toStrictEqual(state.bookmarkedFeeds)

})
