<template lang="pug">

.page

  .hero-box.homepage.section-padding(data-component="hero-box")

    .title-container.columns

      .column.is-half-desktop
        h1.app-title Atlas
        p.app-subtitle Muzea dělnického hnutí v 21. století

      .column.is-half-desktop
        p.typo-subtitle Atlas Muzea dělnického hnutí je interaktivním rozhraním pro smartphony a tablety umožňující detailně objevovat stopy minulosti kolem vás. Nabízíme vám nástroj pro detailní zdokumentování vyhledávaných pomníků připomínajících osoby a události, kterých si stále vážíme, i zanedbané a zapomenuté pozůstatky na socialistické hrdiny a mučedníky. Skrze hledáček vašeho mobilního telefonu objevujte historii propsanou do městských ulic a parků. Informace a detaily, které budete moci k jednotlivým místům zaznamenat, lze využít ve školním či neformálním vzdělávání i k vytváření osobní databáze zajímavých míst.

    .footer-container

      .columns.is-mutiline-mobile.is-desktop

        .footer-container-section.footer-container-section-goals.column.is-half-desktop
          h2.typo-hero-box-subtitle O projektu

          .content
            p(v-html="$config.obsah.about.aboutText")

        .column.is-half-desktop
          NuxtLink(to="/prochazky/").button Spustit aplikaci




    .background

</template>

<style lang="sass">

.dashboard-container
  margin: 2rem 0

  .ui-card
    font-size: clamp(1.5rem, 2vw, 2rem)
    color: black

.red
  color: red
</style>

<script>
export default {
  layout: 'homepage',

  computed: {
    zobrazitVsechnyObjekty() {
      return this.$route.query.vse === '1';
    },
  },

  data() {
    return {
      title: 'Hlavní stránka',
    };
  },
  head() {
    return {
      title: `${this.title} — ${this.$config.globalTitle}`,
      htmlAttrs: {
        class: 'index',
      },
    };
  },
};
</script>
