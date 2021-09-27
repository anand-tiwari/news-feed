import util from '@/utils'

describe('utils/index', () => {
  test('serializeQueryParams', () => {
    const paramObj = { a: '1', b: '2', c: '3' }
    expect(util.serializeQueryParams(paramObj)).toEqual('?a=1&b=2&c=3')

    expect(util.serializeQueryParams()).toEqual('')
  })

  test('dateFormat', () => {
    const dateString = '2021-09-25T09:20:17-04:00'
    expect(util.dateFormat(dateString)).toEqual('Sep, 25, 2021')
  })
})
