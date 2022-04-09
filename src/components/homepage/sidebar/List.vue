<template>
  <div
    :class="cBp >= bps.md ? 'scroll-styling scroll-styling--offset h-100' : ''"
  >
    <slot />
  </div>
</template>

<script>
import useTheme from "@/composables/useTheme";

export default {
  name: "List",
  setup() {
    const { cBp, bps } = useTheme();
    return { cBp, bps };
  },
};
</script>
