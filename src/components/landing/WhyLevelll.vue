<template>
  <section id="why-levelll">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2>{{ $t("home.why-levelll.why-levelll") }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-xs-12 center-xs start-md illustration">
          <img
            src="../../assets/img/illustrations/landing/why-illustration.svg"
            alt="Searching For Reason - Illustration"
          >
        </div>
        <div class="col-md-6 content">
          <p v-html="$t('home.why-levelll.p0')" />
          <p v-html="$t('home.why-levelll.p1')" />
          <p v-html="$t('home.why-levelll.p2')" />
          <p v-html="$t('home.why-levelll.p3')" />
          <p v-html="$t('home.why-levelll.p4')" />
          <p v-html="$t('home.why-levelll.p5')" />
          <p v-html="$t('home.why-levelll.p6')" />
          <p v-html="$t('home.why-levelll.p7')" />
          <router-link
            :to="`/${$i18n.locale}/about`"
            class="cta"
          >
            {{ $t("home.why-levelll.about-levelll") }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyLevelll"
};
</script>

<style lang="scss" scoped>
#why-levelll {
  @include position(relative, null);
  display: flex;
  justify-content: center;
  padding-bottom: 100px;

  .container {
    @include position(relative, null);

    h2 {
      @include margin(null null 50px);
      text-transform: uppercase;
      text-align: center;
    }
  }

  .illustration {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    img {
      width: 90%;
      max-width: 400px;
    }
  }

  .content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      @include margin(0 null 20px null);
    }

    .cta {
      @include margin(30px 0 0 0);
      @include padding(10px 30px);
      min-width: 120px;
      min-height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      background: $bg-gradient;
      box-shadow: 0 2px 4px 0 rgba(17, 17, 17, 0.1);
      text-transform: uppercase;
      text-decoration: none;
      color: $white;
      font-weight: $bold;
      font-size: 14px;
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;

      &:hover {
        box-shadow: 0 4px 8px 0 rgba(17, 17, 17, 0.2);
      }
    }
  }
}
</style>
