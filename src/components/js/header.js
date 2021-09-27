import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters('feed', ['sections'])
  },
  methods: {
    ...mapActions('feed', ['updateSidebarStatus']),

    // click on "hamburger" icon, will trigger this method to open sidebar
    // this will update visibleSidebar: true
    openSidebar () {
      this.updateSidebarStatus(true)
    }
  }
}
