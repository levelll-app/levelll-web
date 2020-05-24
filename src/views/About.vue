<template>
  <div>
    <levelll-header
      :title="$t('about.title')"
      :faded-title="$t('about.faded-title')"
    />
    <section
      id="about"
      class="small"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 content">
            <p v-html="$t('about.p1')" />
            <p v-html="$t('about.p2')" />
            <p v-html="$t('about.p3')" />
          </div>
          <div class="col-md-6 col-xs-12 first-xs last-md center-xs end-md illustration">
            <img
              src="../assets/img/illustrations/about-illustration.svg"
              alt="Levelll Team - Illustration"
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
      title: `${this.$t("nav.about")}`,
      meta: [
        {
          name: "description",
          content: `${this.$t("about.meta.description")}`
        },
        { name: "og:title", content: `${this.$t("nav.about")} | Levelll` },
        {
          name: "og:description",
          content: `${this.$t("about.meta.description")}`
        },
        {
          name: "og:url",
          content: `https://levelll.com/${this.$i18n.locale}/about`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#about {
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
