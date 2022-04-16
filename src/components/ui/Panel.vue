<template>
  <div
    class="panel bg-contrast"
    :class="[
      `bg-contrast--${bg}`,
      `panel--${size}`,
      { 'panel--shadow': shadow },
    ]"
  >
    <div class="panel__inner" :class="innerClasses">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="panel__footer bg-contrast bg-contrast--faded"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: {
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg", "xl"].indexOf(value) !== -1;
      },
    },
    bg: {
      type: String,
      default: "default",
      validator: function (value) {
        return (
          ["faded", "default", "solid", "match", "accent"].indexOf(value) !== -1
        );
      },
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    innerClasses: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/mixins";
@import "../../assets/css/window-breakpoints";

.panel {
  --py: 1.2rem;
  --px: 1.6rem;

  border-radius: var(--rad);
  position: relative;
  display: flex;
  flex-direction: column;

  &__inner {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: var(--py) var(--px);
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.2rem;
    }

    &::-webkit-scrollbar-track {
      background: cl("contrast", 0.05);
    }

    &::-webkit-scrollbar-thumb {
      background: cl("contrast", 0.3);
    }
  }

  &__footer {
    padding: calc(var(--py) * 0.6) var(--px);
    border-radius: 0 0 var(--rad) var(--rad);
  }

  &--sm {
    --py: 1.2rem;
    --px: 1.6rem;
  }
  &--md {
    --py: 1.8rem;
    --px: 2rem;
  }
  &--lg {
    --py: 2.6rem;
    --px: 2.8rem;
  }
  &--xl {
    --py: 3.6rem;
    --px: 3.8rem;
  }

  &--shadow {
    box-shadow: 0 3rem 3rem -1.5rem rgba(black, 0.1);
  }
}
</style>
