import config from '@/config'
import httpApi from '@/utils/http-api'
import { serializeQueryParams } from '@/utils'

export default {
  getNewsFeed: (cb, { data, section }, errHandler, headers) => {
    httpApi.getDataViaApi(
      config.getSectionPath(section) + serializeQueryParams(data),
      cb,
      errHandler,
      headers
    )
  }
}
