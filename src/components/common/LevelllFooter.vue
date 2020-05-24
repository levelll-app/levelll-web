<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xs-12 center-xs start-md last-xs first-md copyright">
          <p>
            <span class="faded">&copy;2020</span>
            {{ $t("footer.levelll") }}
          </p>
          <img
            src="../../assets/img/levelll_bw_dark.svg"
            alt="Levelll Logo"
          >
        </div>
        <div class="col-md-4 col-xs-12 center-xs logo">
          <img
            src="../../assets/img/levelll_bw_dark_icon.svg"
            alt="Levelll Logo"
          >
          <div class="languages">
            <span
              v-for="(lang, i) in locales"
              :key="`Locale${i}`"
              :class="{ active: selectedLocale == lang }"
              @click="updateLocale(lang)"
            >{{ $t(`footer.${lang}`) }}</span>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 center-xs end-md links">
          <router-link :to="`/${$i18n.locale}/privacy-policy`">
            {{ $t("footer.privacy-policy") }}
          </router-link>
          <router-link :to="`/${$i18n.locale}/terms-of-service`">
            {{ $t("footer.terms-of-service") }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LevelllFooter",
  data() {
    return {
      locales: ["en", "bg"],
      selectedLocale: this.$store.state.language.lang
    };
  },
  methods: {
    updateLocale(locale) {
      this.selectedLocale = locale;
      this.$store.dispatch("language/changeLanguage", {
        lang: this.selectedLocale,
        i18n: this.$i18n
      });
      this.$router
        .replace({ params: { lang: this.selectedLocale } })
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
#footer {
  @include padding(30px 30px 10px);
  @include position(relative, null);
  display: flex;
  justify-content: center;
  background-color: $black;
  color: $white;

  .container {
    @include position(relative, null);

    .copyright {
      p {
        text-transform: uppercase;
        font-weight: $bold;
        margin-bottom: 0px;
        margin-top: 10px;

        .faded {
          color: $faded-white;
          font-weight: $extra-light;
        }
      }

      img {
        opacity: 0.1;
        height: 80px;
      }

      @media screen and (max-width: 62rem) {
        img {
          display: none;
        }
      }
    }

    .logo {
      img {
        width: 55px;
      }

      .languages {
        margin-top: 20px;
        padding-top: 20px;
        margin-bottom: 20px;
        @include position(relative, null);

        &::after {
          content: "";
          @include size(30px, 2px);
          @include position(absolute, -2px null null 50%);
          transform: translateX(-50%);
          border-radius: 2px;
          background-color: $primary;
        }

        span {
          margin-right: 30px;
          font-weight: $extra-bold;
          color: $faded-white;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:last-child {
            margin-right: 0;
          }

          &.active,
          &:hover {
            color: $white;
          }
        }
      }
    }

    .links {
      display: flex;
      text-align: center;

      @media screen and (max-width: 48rem) {
        flex-direction: column;
      }

      a {
        display: block;
        @include padding(10px 20px);
        padding-top: 10px;
        padding-left: 20px;
        color: $faded-white;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 12px;
        transition: all 0.2s ease-in-out;

        @media screen and (max-width: 48rem) {
          padding-left: 0px;
          width: 100%;
        }

        &:hover,
        &.router-link-exact-active {
          color: $white;
        }
      }
    }
  }
}
</style>
