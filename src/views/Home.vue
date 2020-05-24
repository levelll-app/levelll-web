<template>
  <div>
    <landing-header />
    <why-levelll />
    <features />
    <get-in-touch />
  </div>
</template>

<script>
// @ is an alias to /src
import Features from "@/components/landing/Features.vue";
import GetInTouch from "@/components/landing/GetInTouch.vue";
import LandingHeader from "@/components/landing/Header.vue";
import WhyLevelll from "@/components/landing/WhyLevelll.vue";

export default {
  components: {
    Features,
    GetInTouch,
    LandingHeader,
    WhyLevelll
  },
  metaInfo() {
    return {
      title: `${this.$t("nav.home")}`,
      meta: [
        { name: "description", content: `${this.$t("home.meta.description")}` },
        { name: "og:title", content: `${this.$t("nav.home")} | Levelll` },
        {
          name: "og:description",
          content: `${this.$t("home.meta.description")}`
        },
        {
          name: "og:url",
          content: `https://levelll.com/${this.$i18n.locale}`
        }
      ]
    };
  }
};
</script>
