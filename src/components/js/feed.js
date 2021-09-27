import { mapActions } from 'vuex'
import storageApi from '@/utils/storage'
import { dateFormat } from '@/utils'

const BOOKMARK_DATA = 'bookmark_data'
const DETAIL_PAGE_DATA = 'detail_page_data'

export default {
  name: 'Feed',
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      isBookmark: false
    }
  },
  created () {
    this.isBookmarked()
  },
  computed: {
    getDetailPageUrl () {
      return this.isDetailPage ? this.item.url : null
    },
    isDetailPage () {
      return this.$route.name === "DetailPage"
    },
    isImageAvailable() {
      return this.item.multimedia && this.item.multimedia.length >0
    }
  },
  methods: {
    ...mapActions('feed', ['updateBookmarkedFeeds']),
    
    /* 
      When we click on Feed then i am adding those feed info into localstorage
      and on detail page fetch that from localStorage

      If we are already on Detail Page then don't store that in localStorage &
      redirect to actual New Feed link
    */
    updateFeedInfoIntoStorage () {
      if (this.isDetailPage) return

      let existing = storageApi.getData(DETAIL_PAGE_DATA)
      if (existing === '') { existing = {} }
      const Id = this.item.title.replaceAll(' ', '-')
      existing[Id] = { ...this.item }
      storageApi.setData(DETAIL_PAGE_DATA, existing)
      this.$router.push(`/detail/${Id}`)
    },

    // Check is the current Feed is bookmarked
    // Fetching Bookmarked List and looking for current Feed Id
    isBookmarked () {
      let existing = storageApi.getData(BOOKMARK_DATA)
      if (existing === '') { existing = {} }
      const Id = this.item.title.replaceAll(' ', '-')
      this.isBookmark = existing[Id] !== undefined
    },
    dateFormat (dateString) {
      return dateFormat(dateString)
    },
    /* This Method is used to add/remove news feeds from bookmarked list */
    updateBookmark () {
      let existing = storageApi.getData(BOOKMARK_DATA)
      if (existing === '') { existing = {} }
      const Id = this.item.title.replaceAll(' ', '-')

      /*
      if the new feed is already bookmarked then remove it &
      update localstorage & vuex store
      */
      if (existing[Id] !== undefined) {
        this.removeFeedFromBookmarkList(existing, Id)
        return
      }
      /*
      Add new article into bookmarked list &
      update localstorage & vuex store
     */
      this.addFeedIntoBookmarkList(existing, Id)
    },
    removeFeedFromBookmarkList (existing, Id) {
      this.isBookmark = false
      const res = delete existing[Id]
      // update localstorage
      storageApi.setData(BOOKMARK_DATA, existing)
      // update vuex store via action
      this.updateBookmarkedFeeds(existing)
    },
    addFeedIntoBookmarkList (existing, Id) {
      this.isBookmark = true
      const image = this.item.multimedia.length > 0 && this.item.multimedia[0].url
      existing[Id] = {
        title: this.item.title,
        byline: this.item.byline,
        updated_date: this.item.updated_date,
        image: image,
        articleLink: this.item.url
      }
      // update localstorage
      storageApi.setData(BOOKMARK_DATA, existing)
      // update vuex store via action
      this.updateBookmarkedFeeds(existing)
    }
  }
}
