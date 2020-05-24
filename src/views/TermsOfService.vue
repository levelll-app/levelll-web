<template>
  <div>
    <levelll-header
      :title="$t('tos.title')"
      :faded-title="$t('tos.faded-title')"
    />
    <section
      id="tos"
      class="small"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 content">
            <p v-html="$t('tos.p1')" />
            <br>
            <p v-html="$t('tos.p2')" />
            <p
              class="ml"
              v-html="$t('tos.p2-a1')"
            />
            <p
              class="ml"
              v-html="$t('tos.p2-a2')"
            />
            <p
              class="ml"
              v-html="$t('tos.p2-a3')"
            />
            <p
              class="ml"
              v-html="$t('tos.p2-a4')"
            />
            <p
              class="ml"
              v-html="$t('tos.p2-a5')"
            />
            <p v-html="$t('tos.p2-b')" />
            <br>
            <p v-html="$t('tos.p3')" />
            <p v-html="$t('tos.p3-b')" />
            <br>
            <p v-html="$t('tos.p4')" />
            <br>
            <p v-html="$t('tos.p5')" />
            <br>
            <p v-html="$t('tos.p6')" />
            <br>
            <p v-html="$t('tos.p7')" />
            <br>
            <p v-html="$t('tos.p8')" />
          </div>
          <div class="col-md-6 col-xs-12 first-xs last-md center-xs end-md illustration">
            <img
              src="../assets/img/illustrations/tos-illustration.svg"
              alt="Levelll Terms and Conditions - Illustration"
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
      title: `${this.$t("footer.terms-of-service")}`,
      meta: [
        {
          name: "description",
          content: `${this.$t("tos.meta.description")}`
        },
        {
          name: "og:title",
          content: `${this.$t("footer.terms-of-service")} | Levelll`
        },
        {
          name: "og:description",
          content: `${this.$t("tos.meta.description")}`
        },
        {
          name: "og:url",
          content: `https://levelll.com/${this.$i18n.locale}/terms-of-service`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#tos {
  @include position(relative, null);
  display: flex;
  justify-content: center;
  padding-top: 100px;

  p.ml {
    padding-left: 40px;
  }

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
