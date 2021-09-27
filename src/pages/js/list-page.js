import { mapActions } from 'vuex'

import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import FeedList from '@/components/FeedList'

export default {
  name: 'ListPage',
  components: { Header, FeedList, Sidebar },
  watch: {
    $route (to, from) {
      this.fetchNewsFeed()
    }
  },
  methods: {
    ...mapActions('feed', ['getNewsFeed']),
    /*
       When the Component Gets Created/Re-rendered we need to fetch news Feed for selected section
       So same methods we are calling on route change & during creation
       we are calling vuex action that will do api call to get data & update store
     */
    fetchNewsFeed () {
      this.getNewsFeed(
        {
          data: { 'api-key': 'L3BUA5xq82UaYrox5YJOkB4ago008fYS' },
          section: this.$route.params.sectionName || 'home'
        }
      )
    }
  },
  created () {
    this.fetchNewsFeed()
  }
}
