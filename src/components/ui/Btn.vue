<template>
  <component
    class="btn"
    :class="`btn--${theme} btn--${size} ${block ? 'btn--block' : ''}`"
    :is="el"
  >
    <Icon v-if="icon" :name="icon" :size="iconSize" />
    {{ text }}
  </component>
</template>

<script>
import Icon from "@/components/ui/Icon";
export default {
  name: "Btn",
  components: {
    Icon,
  },
  props: {
    el: {
      type: String,
      default: "button",
      validator: function (value) {
        return ["button", "a"].indexOf(value) !== -1;
      },
    },
    theme: {
      type: String,
      default: "default",
      validator: function (value) {
        return (
          [
            "default",
            "light",
            "contrast-solid",
            "ghost",
            "accent-dark",
            "accent-light",
            "accent-match",
            "light-accent",
          ].indexOf(value) !== -1
        );
      },
    },
    text: {
      type: String,
      default: "See All",
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    block: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: [String, Boolean],
      default: false,
    },
    iconSize: {
      type: String,
      default: "sm",
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/mixins";

.btn {
  font-weight: normal;
  padding: 0.6em 2em;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 0.5em;
    margin-left: -0.5em;
  }

  &--md {
    font-size: toRem(15);
  }

  &--sm {
    font-size: toRem(12);
  }

  &--lg {
    font-size: toRem(18);
    font-weight: 500;
    padding: 0.8em 2em;
  }

  &--block {
    width: 100%;
  }

  &--default {
    color: currentColor;
    background: var(--bgContrastFaded);
    &:hover {
      background: var(--bgContrastDefault);
    }
    &:active {
      background: var(--bgContrastSolid);
      transition: background-color 0s;
    }
  }

  &--ghost {
    color: currentColor;
    &:hover {
      background: var(--bgContrastFaded);
    }
  }

  &--light {
    color: cl("grey3");
    background: cl("white");
    box-shadow: 0 1rem 2rem -1rem rgba(white, 0.5);
  }

  &--light-accent {
    color: cl("accent");
    background: cl("white");
    box-shadow: 0 1rem 2rem -1rem rgba(white, 0.5);
    &:hover {
      background: cl("white", 0.8);
    }
  }

  &--accent-dark {
    background: cl("accent");
    color: cl("grey2");
    font-weight: bolder;
  }

  &--accent-light {
    background: cl("accent");
    color: cl("white");
    box-shadow: 0 1rem 2rem -1rem cl("accent", 0.5);
  }

  &--accent-match {
    background: cl("accent");
    color: cl("contrastMatch");
    box-shadow: 0 1rem 2rem -1rem cl("accent", 0.5);
  }

  &--contrast-solid {
    background: cl("grey2");
    color: cl("grey9");
    @include dark() {
      background: cl("white");
      color: cl("grey3");
    }
  }
}
</style>
