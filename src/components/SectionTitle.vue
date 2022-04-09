<template>
  <div class="section-title" :class="[{ sm: sm }, { 'has-border': hasBorder }]">
    <h2>
      <Icon :name="icon" :size="sm ? 'md' : 'lg'" /> {{ title }}
      <span
        v-if="subtitle"
        class="text-faded text-lg mb-0 font-normal mt-1 ml-5"
      >
        {{ subtitle }}
      </span>
    </h2>

    <Btn :size="sm ? 'sm' : 'md'" />
  </div>
</template>

<script>
import Icon from "@/components/ui/Icon";
import Btn from "@/components/ui/Btn";
import Pill from "@/components/ui/Pill";
export default {
  name: "SectionTitle",
  components: { Icon, Btn },
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "star",
    },
    sm: {
      type: Boolean,
      default: false,
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.section-title {
  font-size: var(--textXxl);
  font-weight: 500;
  flex-shrink: 0;
  padding-bottom: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.has-border {
    padding-bottom: 0.65em;
    margin-bottom: 0.85em;
    border-bottom: 1px solid var(--bgContrastDefault);
  }
  h2 {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.4em;
      opacity: 0.5;
    }
  }

  &.sm {
    font-size: var(--textLg);
    padding-bottom: 1em;
  }
}
</style>
