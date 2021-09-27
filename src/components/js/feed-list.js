import { mapGetters } from 'vuex'

import Feed from '@/components/Feed.vue'
export default {
  name: 'FeedList',
  components: { Feed },
  computed: {
    ...mapGetters('feed', ['feedList'])
  }
}
