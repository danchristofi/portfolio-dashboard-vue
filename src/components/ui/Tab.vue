<template>
  <div class="tab" :class="`tab--${theme} tab--${size}`">
    <Icon size="sm" :name="icon" />
  </div>
</template>

<script>
import Icon from "@/components/ui/Icon";
export default {
  name: "Tab",
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      default: "collection",
    },
    theme: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "accent"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/mixins";

.tab {
  width: toRem(50);
  aspect-ratio: 1/1;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: cl("grey4");

  &--accent {
    background: cl("accent");
    color: #fff;
  }

  &--sm {
    width: toRem(40);
  }
}
</style>
