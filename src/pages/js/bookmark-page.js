import { mapGetters, mapActions } from 'vuex'
import Header from '@/components/Header.vue'
import storageApi from '@/utils/storage'
import { dateFormat } from '@/utils'
import Sidebar from '@/components/Sidebar.vue'

const BOOKMARK_DATA = 'bookmark_data'

export default {
  name: 'BookmarkPage',
  components: { Header, Sidebar },
  computed: {
    ...mapGetters('feed', ['bookmarkedFeeds'])
  },
  created () {
    this.fetchBookmark()
  },
  methods: {
    ...mapActions('feed', ['updateBookmarkedFeeds']),
    /*
     When we move to bookmark page from any other page we have to fetch bookmarked news feed from localstorage
      & update vuex store
     */
    fetchBookmark () {
      const bookmarks = storageApi.getData(BOOKMARK_DATA)
      this.updateBookmarkedFeeds(bookmarks)
    },
    /*
        format date into 'Month-DD-YYYY' format
        eg - Sep, 9, 2021
        dateFormat is from utils
     */
    dateFormat (dateString) {
      return dateFormat(dateString)
    },
    /*
        Delete Bookmarked news feed from localstorage & also update store
     */
    deleteMarkedEntry (Id) {
      const existing = storageApi.getData(BOOKMARK_DATA)
      if (existing !== '' && existing[Id] !== undefined) {
        const res = delete existing[Id]
        // update localstorage
        storageApi.setData(BOOKMARK_DATA, existing)
        // update vuex store
        this.updateBookmarkedFeeds(existing)
      }
    }
  }
}
