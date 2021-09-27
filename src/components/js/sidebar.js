import { mapActions, mapGetters } from 'vuex'
import { clickOutside } from '@/directives/click-outside-handler'

export default {
  name: 'Sidebar',
  directives: {
    clickOutside
  },
  computed: {
    ...mapGetters('feed', ['visibleSidebar', 'sections'])
  },
  methods: {
    ...mapActions('feed', ['updateSidebarStatus']),
    // it will update the visibleSidebar=false in store that will hide sidebar
    hideSidebar () {
      this.visibleSidebar && this.updateSidebarStatus(false)
    }
  }
}
