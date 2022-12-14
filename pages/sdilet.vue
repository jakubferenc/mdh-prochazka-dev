<template lang="pug">

.page()
  .section.section-padding( data-component="section")
    .prochazka-detail(v-if="isAllowedPublic && prochazka")
      .prochazka-detail__title.typo-section-title.is-section-title
        h1 {{prochazka.nazev}}
        h2.typo-subtitle.who-shares-title <font-awesome-icon icon="fa fa-solid fa-link" /> Sdílí: {{ currentUserProfile.email }}
      .section-category()

        Catalog(
          Type="objekty"
        )
          template(v-slot:catalog-items)
            template(v-for="(objekt, index) in objekty")
              ObjektNahled(
                :key="objekt.id"
                :Id="objekt.id"
                :Timestamp="objekt.timestamp"
                :Uzivatel="objekt.user_email"
                :ObrazkyArray="getObjectImages(objekt)"
                :IsShared="true"
            )

    NotFound(
      v-if="!objekty && !isLoading && isLoaded"
      Text="Nemáte uložené žádné objekty. Zkuste si je přidat v nějaké procházce."
    )

    NotFound(
      v-if="!isAllowedPublic && !isLoading && isLoaded"
      Text="Procházka není veřejná. Můžete se vrátit na hlavní stránku aplikace."
      Type="error"
      Link="/"
    )

</template>

<style lang="sass">

.who-shares-title
  text-align: center
  margin-top: 1rem
</style>

<script>
import ObjectProchazka from '~/models/ObjectProchazka';
import prochazkyConfig from '~/prochazky.config';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default {
  computed: {
    currentPublicItems() {
      return this.$store.getters['user/getCurrentPublicItems'];
    },
    currentUserProfile() {
      return this.$store.getters['user/getCurrentUserProfile'];
    },
    isAllowedPublic() {
      if (!this.currentPublicItems?.length) return false;
      return this.currentPublicItems.includes(this.prochazkaId);
    },
    loading() {
      return this.$store.state.loading;
    },
    prochazka() {
      return this.getProchazkaById(this.prochazkaId);
    },
    objekty() {
      return this.$store.state.objekty_prochazka_detail[this.prochazkaId];
    },
  },
  data() {
    return {
      title: 'Sdílet procházku',
      faGithub,
      isLoaded: false,
      isLoading: false,
      showModal: false,
    };
  },
  async created() {
    this.userId = this.$route.query.u;
    this.prochazkaId = this.$route.query.p;

    await this.$store.dispatch('user/getUserProfile', {
      userId: this.userId,
    });

    await this.$store.dispatch('getMyObjectsByProchazkaId', {
      userId: this.userId,
      prochazkaId: this.prochazkaId,
    });

    this.isLoaded = true;
  },
  mounted() {},
  methods: {
    getObjectImages(objectProchazka = ObjectProchazka) {
      return objectProchazka?.obrazky?.[0]?.items?.length
        ? objectProchazka?.obrazky?.[0]?.items
        : [];
    },
    getProchazkaById(prochazkaId) {
      const prochazkaKey = Object.keys(prochazkyConfig).find(
        (prochazkaKey) => prochazkyConfig[prochazkaKey].id === prochazkaId
      );
      return prochazkyConfig[prochazkaKey];
    },
  },
  head() {
    return {
      title: `${this.title} — ${this.$config.globalTitle}`,
      htmlAttrs: {
        class: 'page--objekty',
      },
    };
  },
};
</script>
