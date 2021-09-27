module.exports = {
  api: {
    base_path: ''
  },
  getApiPath: function (apiPath) {
    return this.api.base_path + apiPath
  },
  getSectionPath (section) {
    return `/svc/topstories/v2/${section}.json`
  }
}
