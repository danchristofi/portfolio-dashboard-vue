<template>
  <div class="container">
    <div class="inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";
@import "../assets/css/window-breakpoints";

.container {
  width: 100%;
  .inner {
    --x: calc(var(--columnWidth) * var(--columnCount));
    --y: calc(var(--x) + (var(--columnCount) * var(--columnGap)));
    --z: calc(var(--y) - var(--columnGap));
    width: var(--z);
    margin: 0 auto;
  }
}
</style>
