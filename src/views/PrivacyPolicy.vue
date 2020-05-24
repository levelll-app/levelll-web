<template>
  <div>
    <levelll-header
      :title="$t('privacy-policy.title')"
      :faded-title="$t('privacy-policy.faded-title')"
    />
    <section
      id="privacy-policy"
      class="small"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 content">
            <p v-html="$t('privacy-policy.p1')" />
            <p v-html="$t('privacy-policy.p2')" />
            <p v-html="$t('privacy-policy.p3')" />
            <p v-html="$t('privacy-policy.p4')" />
            <p v-html="$t('privacy-policy.p5')" />
            <p v-html="$t('privacy-policy.p6')" />
            <p v-html="$t('privacy-policy.p7')" />
            <p v-html="$t('privacy-policy.p8')" />
          </div>
          <div class="col-md-6 col-xs-12 first-xs last-md center-xs end-md illustration">
            <img
              src="../assets/img/illustrations/privacy-illustration.svg"
              alt="Levelll Privacy Policy - Illustration"
            >
          </div>
        </div>
      </div>
    </section>
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
      title: `${this.$t("footer.privacy-policy")}`,
      meta: [
        {
          name: "description",
          content: `${this.$t("privacy-policy.meta.description")}`
        },
        {
          name: "og:title",
          content: `${this.$t("footer.privacy-policy")} | Levelll`
        },
        {
          name: "og:description",
          content: `${this.$t("privacy-policy.meta.description")}`
        },
        {
          name: "og:url",
          content: `https://levelll.com/${this.$i18n.locale}/privacy-policy`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#privacy-policy {
  @include position(relative, null);
  display: flex;
  justify-content: center;
  padding-top: 100px;

  .illustration {
    display: flex;
    align-items: flex-start;
    margin-bottom: 50px;

    img {
      width: 90%;
      max-width: 400px;
    }
  }
}
</style>
