<template>
  <div class="section-base" ref="root">
    <slot name="title" />

    <div
      v-if="gridType === 'basic'"
      ref="parent"
      class="basic-grid"
      :class="basicMode"
    >
      <slot name="content" />
    </div>

    <div
      v-else-if="gridType === 'info'"
      ref="parent"
      class="info-grid"
      :class="infoMode"
    >
      <slot name="content" :infoMode="infoMode" />
    </div>

    <div v-else ref="parent">
      <slot name="content" />
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: "SectionBase",
  props: {
    gridType: {
      type: String,
      default: "basic",
    },
  },
};
</script>

<script setup>
import { computed, onMounted, ref } from "vue";
import { fadeInObserver } from "@/assets/js/animations";
import useTheme from "@/composables/useTheme";

const { cBp, bps } = useTheme();

const basicMode = computed(() => {
  if (cBp.value === bps.value.lg) {
    return "count-4";
  } else if (cBp.value === bps.value.md) {
    return "count-3";
  } else if (cBp.value <= bps.value.sm) {
    return "count-4";
  }
  return "count-5";
});

const infoMode = computed(() => {
  if (cBp.value <= bps.value.lg) {
    return "compact";
  }
  return "full";
});

const root = ref(null);
const parent = ref(null);

onMounted(() => {
  fadeInObserver(root.value, parent.value.children);
});
</script>

<style scoped lang="scss">
@import "../../../assets/css/mixins";

.section-base {
  padding: var(--spV) 0;
}

.basic-grid {
  display: grid;
  grid-template-columns: repeat(var(--columnCount), 1fr);
  grid-gap: var(--columnGap);
}

:deep(.basic-grid.count-4) {
  > *:nth-child(5) {
    display: none;
  }
}
:deep(.basic-grid.count-3) {
  > *:nth-child(5),
  > *:nth-child(4) {
    display: none;
  }
}
:deep(.basic-grid.count-2) {
  > *:nth-child(5),
  > *:nth-child(4),
  > *:nth-child(3) {
    display: none;
  }
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: calc(var(--columnGap) * 2);
  &.compact {
    grid-template-columns: 1fr;
    grid-gap: var(--columnGap);
  }
}

:deep(.info-grid.compact) {
  > *:nth-child(4) {
    display: none;
  }
}
</style>
