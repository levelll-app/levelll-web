<template>
  <section id="features">
    <div class="container">
      <div class="row">
        <div class="col-md-4 feature">
          <img
            src="../../assets/img/illustrations/landing/mobile-illustration.svg"
            alt="Levelll Mobile Platform - Illustration"
          >
          <h3>{{ $t("home.features.mobile") }}</h3>
          <p v-html="$t('home.features.mobile-paragraph')" />
        </div>
        <div class="col-md-4 feature">
          <img
            src="../../assets/img/illustrations/landing/infrastructure-illustration.svg"
            alt="Levelll Secure Infrastructure - Illustration"
          >
          <h3>{{ $t("home.features.infrastructure") }}</h3>
          <p v-html="$t('home.features.infrastructure-paragraph')" />
        </div>
        <div class="col-md-4 feature">
          <img
            src="../../assets/img/illustrations/landing/privacy-illustration.svg"
            alt="Levelll Privacy - Illustration"
          >
          <h3>{{ $t("home.features.privacy") }}</h3>
          <p v-html="$t('home.features.privacy-paragraph')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features"
};
</script>

<style lang="scss" scoped>
#features {
  @include position(relative, null);
  background: $bg-gradient;
  display: flex;
  justify-content: center;
  padding-top: 100px;

  &::after {
    z-index: 1;
    content: "";
    @include size(100%, 100%);
    @include position(absolute, -1px 0px null 0px);
    background-image: url("../../assets/img/illustrations/landing/bg-top-cut.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
  }

  .container {
    @include position(relative, null);
  }

  .feature {
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $white;
    text-align: center;
    @include padding(50px 35px null);

    @media screen and (max-width: 48rem) {
      @include padding(50px 0 null);
    }

    img {
      height: 140px;
      max-width: 100%;
    }

    h3 {
    }
  }
}
</style>
