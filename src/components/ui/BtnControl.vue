<template>
  <button class="btn-control" :class="`btn-control--${theme} btn--${size}`">
    <Icon size="sm" width="thick" :name="icon" />
  </button>
</template>

<script>
import Icon from "@/components/ui/Icon";
export default {
  name: "BtnControl",
  components: { Icon },
  props: {
    theme: {
      type: String,
      default: "accent-match",
      validator: function (value) {
        return ["accent-match", "default"].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
      default: "plus",
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/mixins";

.btn-control {
  font-weight: normal;
  padding: 0.6em;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  aspect-ratio: 1/1;

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

  &--accent-match {
    background: cl("accent");
    color: cl("contrastMatch");
    font-weight: bolder;
  }
}
</style>
