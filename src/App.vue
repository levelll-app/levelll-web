<template>
  <div id="app">
    <div
      id="nav"
      :class="{ dark: darkContent }"
      :style="{
        backgroundColor: `rgba(255, 255, 255, ${navBackgroundOpacity})`,
        padding: `${navPadding}px 50px`
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-3 start-xs logo">
            <img
              src="./assets/img/levelll_bw_dark.svg"
              alt="Levelll Logo"
              class="light-logo"
            >
            <img
              src="./assets/img/levelll_colored_light.svg"
              alt="Levelll Logo"
              class="dark-logo"
            >
          </div>

          <div class="col-xs-9 mobile-menu">
            <div
              :class="{ 'menu-button': true, active: toggleMenu }"
              @click="toggleMenu = !toggleMenu"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div :class="{ links: true, 'col-xs-9': true, active: toggleMenu }">
            <router-link :to="`/${$i18n.locale}`">
              {{ $t("nav.home") }}
            </router-link>
            <router-link :to="`/${$i18n.locale}/about`">
              {{ $t("nav.about") }}
            </router-link>
            <!-- <a href="mailto:support@levelll.com">{{ $t("nav.contact") }}</a> -->
            <span class="separator" />
            <a :href="`https://dash.levelll.com/${$i18n.locale}/signin`">{{
              $t("nav.sign-in")
            }}</a>
            <img
              src="./assets/img/levelll_bw_dark.svg"
              alt="Levelll Logo"
            >
          </div>
        </div>
      </div>
    </div>
    <router-view class="router-view" />
    <cookie-law
      theme="base--rounded"
      :button-text="$t('cookie.button')"
      :message="$t('cookie.message')"
    />
    <levelll-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import CookieLaw from "vue-cookie-law";
import LevelllFooter from "@/components/common/LevelllFooter.vue";

export default {
  components: {
    CookieLaw,
    LevelllFooter
  },
  metaInfo() {
    return {
      title: "Levelll",
      titleTemplate: "%s | Levelll",
      meta: [
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:image",
          content: "https://levelll.com/open-graph-cover.png"
        },
        { name: "og:type", content: "article" },
        { name: "og:site_name", content: "Levelll" },
        {
          name: "og:image",
          content: "https://levelll.com/open-graph-cover.png"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: `${window.location.origin}${this.$route.path}`
        }
      ]
    };
  },
  data() {
    return {
      navBackgroundOpacity: 0,
      navPadding: 30,
      darkContent: false,
      toggleMenu: false
    };
  },
  watch: {
    $route() {
      this.toggleMenu = false;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const s = window.scrollY;

      if (s <= 30) {
        this.navPadding = 30 - s / 2;
        this.navBackgroundOpacity = s / 30;

        if (s >= 15 && !this.darkContent) this.darkContent = true;
        else if (s < 15 && this.darkContent) this.darkContent = false;
      } else {
        this.navPadding = 15;
        this.navBackgroundOpacity = 1;

        if (!this.darkContent) this.darkContent = true;
      }
    }
  }
};
</script>

<style lang="scss">
.Cookie--base--rounded .Cookie__button {
  background-color: $black !important;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: lighten($black, 10) !important;
  }
}

#app {
  @include position(relative, null);
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;

  // sticky footer
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

// sticky footer
.router-view {
  flex: 1 0 auto;
}

// sticky footer
#footer {
  flex-shrink: 0;
}

#nav {
  @include padding(30px 50px);
  background-color: rgba(255, 255, 255, 0);
  @include position(fixed, 0px 0px null 0px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease-in-out;
  z-index: 100;

  &.dark {
    box-shadow: 0 4px 8px 0 rgba(17, 17, 17, 0.1);

    .logo {
      img {
        &.light-logo {
          opacity: 0;
        }

        &.dark-logo {
          opacity: 1;
        }
      }
    }

    .mobile-menu {
      .menu-button {
        span {
          background-color: $black;
        }
      }
    }

    .links {
      .separator {
        background-color: $black;
      }
    }

    a {
      color: $black;

      &::after {
        background-color: $black;
      }

      &.router-link-exact-active {
        &::after {
          background-color: $primary;
        }
      }
    }
  }

  .logo {
    @include position(relative, null);
    @include size(auto, 50px);

    img {
      @include position(absolute, 0px null null 0.5rem);
      @include size(auto, 100%);
      transition: all 0.2s ease-in-out;

      &.light-logo {
        opacity: 1;
      }

      &.dark-logo {
        opacity: 0;
      }
    }
  }

  .mobile-menu {
    display: none;

    @media screen and (max-width: 48rem) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .menu-button {
      z-index: 1001;
      @include size(50px, 25px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      span {
        @include size(50px, 4px);
        background-color: $white;
        border-radius: 2px;
        transition: all 0.2s ease-in-out;

        &:nth-child(2) {
          width: 0px;
        }
      }

      &.active {
        span {
          background-color: $white;

          &:nth-child(1) {
            transform-origin: center;
            transform: translateY(10px) rotateZ(-45deg);
          }
          &:nth-child(2) {
            width: 0px;
          }
          &:nth-child(3) {
            transform-origin: center;
            transform: translateY(-10px) rotateZ(45deg);
          }
        }
      }
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 48rem) {
      display: none;
      z-index: -1;
      opacity: 0;

      &.active {
        z-index: 1000;
        opacity: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @include position(fixed, 0px 0px 0px 0px);
        background-color: $black;
        max-width: 100vw;

        a {
          color: $white;
          @include margin(0);
          @include padding(30px 5px);

          &::after {
            background-color: $primary;
            bottom: 20px;
          }
        }

        .separator {
          display: none;
        }

        img {
          display: block;
          position: fixed;
          bottom: 20px;
          left: 20px;
          opacity: 0.1;
          height: 80px;
        }
      }
    }

    .separator {
      display: block;
      @include size(2px, 24px);
      @include margin(0 10px);
      background-color: $white;
      opacity: 0.4;
      transition: all 0.2s ease-in-out;
    }

    img {
      display: none;
    }
  }

  a {
    color: $white;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 1;
    @include margin(0 15px);
    position: relative;
    transition: all 0.2s ease-in-out;

    &:last-child {
      @include margin(0 0 0 15px);
    }

    &::after {
      content: "";
      @include position(absolute, null null -5px 50%);
      @include size(0px, 2px);
      max-width: 60px;
      border-radius: 2px;
      transform: translateX(-50%);
      background-color: $white;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      &::after {
        width: 70%;
      }
    }

    &.router-link-exact-active {
      opacity: 1;

      &::after {
        width: 70%;
      }
    }
  }
}
</style>
