/*
 Covert key-value object in query params string
 Eg. - {name: ['test1', 'test2'], api-key: '123'}
 output =>  ?name=test&name=test2&api-key=123
 */
module.exports.serializeQueryParams = function (paramObj) {
  if (paramObj) {
    return (
      '?' +
      Object.keys(paramObj)
        .map(k => {
          if (typeof paramObj[k] === 'object') {
            return paramObj[k]
              .map(v => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
              .join('&')
          } else {
            return `${encodeURIComponent(k)}=${encodeURIComponent(
              paramObj[k]
            )}`
          }
        })
        .join('&')
    )
  }
  return ''
}

/*
 Covert date String object 'MM-DD-YYYY' format
 Eg. - '2021-09-25T09:20:17-04:00'
 output => 'Sep,25,2021'
 */

const months = Array.from({ length: 12 }, (e, i) => {
  return new Date(null, i + 1, null).toLocaleDateString('en', { month: 'short' })
})
module.exports.dateFormat = function (dateString) {
  const date = new Date(dateString)
  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month}, ${day}, ${year}`
}
