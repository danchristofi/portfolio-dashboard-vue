<template>
  <span class="pill" :class="`pill--${theme} ${size}`">{{ text }}</span>
</template>

<script>
export default {
  name: "Pill",
  props: {
    size: {
      type: String,
      default: "default",
    },
    text: {
      type: String,
      default: "New",
    },
    theme: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "contrast"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/mixins";

.pill {
  padding: 0.3em 1.3em;
  border-radius: 999px;
  font-size: var(--textBodySm);
  font-weight: normal;

  &--contrast {
    background: cl("grey1");
    color: cl("grey10");
    @include dark() {
      background: cl("grey10");
      color: cl("grey1");
    }
  }

  &--default {
    color: currentColor;
    background: var(--bgContrastDefault);
  }

  &.sm {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: var(--textSm);
  }
}
</style>
