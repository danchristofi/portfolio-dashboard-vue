<template>
  <div class="list" :class="cBp < bps.md ? 'w-100' : ''">
    <InputLabel :text="title"></InputLabel>
    <slot />
  </div>
</template>

<script>
import InputLabel from "@/components/ui/InputLabel";
import useTheme from "@/composables/useTheme";
export default {
  name: "ListContainer",
  components: {
    InputLabel,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { cBp, bps } = useTheme();
    return { cBp, bps };
  },
};
</script>

<style scoped lang="scss">
.list {
  width: 50%;
  padding: 2rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}
</style>
