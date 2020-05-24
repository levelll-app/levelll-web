<template>
  <section
    id="header"
    class="large"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-8 content">
          <h1>
            {{ $t("home.heading.water") }}
            <span class="faded">{{ $t("home.heading.monitoring") }}</span>
          </h1>
          <h2>{{ $t("home.heading.and-automation") }}</h2>
          <router-link
            :to="`/${$i18n.locale}/sign-in`"
            class="cta"
          >
            {{ $t("home.heading.get-started") }}
          </router-link>
        </div>
        <div class="illustration">
          <img
            src="../../assets/img/illustrations/landing/chart-illustration.svg"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingHeader",
};
</script>

<style lang="scss" scoped>
#header {
  @include position(relative, null);
  background: $bg-gradient;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 48rem) {
    padding-bottom: 100px;
  }

  &::after {
    content: "";
    @include size(100%, 100%);
    @include position(absolute, null 0px -1px 0px);
    background-image: url("../../assets/img/illustrations/landing/bg-bottom-cut.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .container {
    @include position(relative, null);
  }

  .content {
    z-index: 2;
    justify-content: flex-start;

    h1,
    h2 {
      color: $white;
      text-align: left;
      text-transform: uppercase;
      line-height: 1;
      @include margin(0);

      .faded {
        color: $faded-white;
      }
    }

    h2 {
      margin-top: 5px;
    }

    .cta {
      @include margin(30px 0 0 0);
      @include size(180px, 50px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      background-color: $white;
      box-shadow: 0 2px 4px 0 rgba(17, 17, 17, 0.1);
      text-transform: uppercase;
      text-decoration: none;
      color: $black;
      font-weight: $bold;
      font-size: 16px;
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;

      &:hover {
        box-shadow: 0 4px 8px 0 rgba(17, 17, 17, 0.2);
      }
    }
  }

  .illustration {
    @include position(absolute, null 0px 0px null);
    z-index: 1;
    transform: translateY(70%);

    img {
      width: 520px;
    }

    @media screen and (max-width: 48rem) {
      img {
        display: none;
      }
    }
  }
}
</style>
