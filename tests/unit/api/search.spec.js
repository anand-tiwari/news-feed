import feed from '@/api/feed'
import config from '@/config'
import httpApi from '@/utils/http-api'
import { serializeQueryParams } from '@/utils'

describe('feed api', () => {
  httpApi.getDataViaApi = jest.fn()

  test('FeedApi', () => {
    const data = {
      data: 'data'
    }
    const cb = jest.fn()
    const errHandler = jest.fn()
    const headers = {
      channelId: 'web'
    }
    const section = 'home'
    feed.getNewsFeed(cb, {data, section}, errHandler, headers)
    expect(httpApi.getDataViaApi).toHaveBeenCalled()
    expect(httpApi.getDataViaApi).toHaveBeenCalledWith(config.getSectionPath(section) + serializeQueryParams(data), cb, errHandler, headers)
  })
})
