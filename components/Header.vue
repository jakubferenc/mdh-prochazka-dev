<template lang="pug">
header.header-main()
  .logo-nav
    .logo
    nav.breadcrumbs
      NuxtLink(to="/").item
        span.logo Atlas&nbsp;
        span Muzea dělnického hnutí v 21. století

  <MainMenu :CssClasses="{'is-mobile-menu-visible': isMobileMenuOpen}" />

  nav.user-actions-nav
    span(v-if="currentLoggedUserId")
      small.user-actions__user {{ currentLoggedUser.email }}
      NuxtLink.item(to="/odhlaseni/") Odhlásit
    NuxtLink.item(v-if="!currentLoggedUserId" to="/prihlaseni/") Přihlásit

  .toggle-mobile-menu
    a(href="#" @click.prevent="toggleMobileMenuHandler")
      span(v-show="!isMobileMenuOpen") Menu
      span(v-show="isMobileMenuOpen") Zavřít menu
</template>
<style lang="sass">
.logo
  font-weight: bold
  text-transform: uppercase
  color: #000

.header-main
  display: flex
  justify-content: space-between
  align-items: center
  position: fixed
  top: 0
  left: 0
  width: 100%

.user-actions__user
  font-size: 10px
</style>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      currentLoggedUser: 'auth/getCurrentUser',
      isMobileMenuOpen: 'getMobileMenuState',
    }),
    currentLoggedUserId() {
      return this.currentLoggedUser?.uid;
    },
    zobrazitVsechnyObjekty() {
      return this.$route.query.vse === '1';
    },
  },
  methods: {
    toggleMobileMenuHandler(e) {
      console.log('haha hello');
      this.$store.dispatch('mobileMenuToggle', { isOpen: !this.isMobileMenuOpen });
      return false;
    },
  },
};
</script>
