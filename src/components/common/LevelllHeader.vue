<template>
  <section
    id="header"
    class
  >
    <div class="container">
      <div class="row">
        <div class="col-md-8 content">
          <h1 class="sm-small">
            {{ title }}
            <span class="faded">{{ fadedTitle }}</span>
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LevelllHeader",
  props: {
    title: {
      type: String,
      default: ""
    },
    fadedTitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
  @include position(relative, null);
  background: $bg-gradient;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;

  .container {
    @include position(relative, null);
  }

  .content {
    justify-content: flex-start;

    h1 {
      color: $white;
      text-align: left;
      text-transform: uppercase;
      line-height: 1;
      @include margin(0);

      .faded {
        color: $faded-white;
      }
    }
  }
}
</style>
