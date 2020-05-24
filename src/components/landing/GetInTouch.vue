<template>
  <section id="get-in-touch">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2>{{ $t("home.get-in-touch.get-in-touch") }}</h2>
          <a
            href="mailto:support@levelll.com"
            v-html="$t('home.get-in-touch.email')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GetInTouch"
};
</script>

<style lang="scss" scoped>
#get-in-touch {
  @include position(relative, null);
  display: flex;
  justify-content: center;

  .container {
    @include position(relative, null);
    text-align: center;

    &::after {
      z-index: 1;
      content: "";
      @include size(200px, 152px);
      @include position(absolute, null null -110px 10%);
      background-image: url("../../assets/img/illustrations/landing/contact-illustration.svg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
    }

    @media screen and (max-width: 48rem) {
      &::after {
        display: none;
      }
    }

    a {
      @include margin(null null 50px null);
      @include padding(10px null);
      display: block;
      text-transform: uppercase;
      font-weight: $extra-light;
      font-size: 24px;
      color: $black;
    }

    @media screen and (max-width: 48rem) {
      a {
        font-size: 16px;
      }
    }
  }
}
</style>
