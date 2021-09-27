import Feed from '@/components/Feed.vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

import storageApi from '@/utils/storage'
const DETAIL_PAGE_DATA = 'detail_page_data'

export default {
  name: 'DetailPage',
  components: { Feed, Header, Sidebar },
  data () {
    return {
      item: {}
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    //When we open detail Page we need to fetch the Id from url
    // & fetch info for that Id from localStorage
    getDetail () {
      const detailPageData = storageApi.getData(DETAIL_PAGE_DATA)
      if (detailPageData === '') { detailPageData = {} }
      this.item = detailPageData[this.$route.params.Id]
    }
  }
}
