<template>
  <div>
    <levelll-header
      :title="$t('sign-in.title')"
      :faded-title="$t('sign-in.faded-title')"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import LevelllHeader from "@/components/common/LevelllHeader.vue";

export default {
  components: {
    LevelllHeader
  },
  metaInfo() {
    return {
      title: `${this.$t("nav.sign-in")}`,
      meta: [
        {
          name: "description",
          content: `${this.$t("sign-in.meta.description")}`
        },
        { name: "og:title", content: `${this.$t("nav.sign-in")} | Levelll` },
        {
          name: "og:description",
          content: `${this.$t("sign-in.meta.description")}`
        },
        {
          name: "og:url",
          content: `https://levelll.com/${this.$i18n.locale}/sign-in`
        }
      ]
    };
  }
};
</script>
