<template>
  <Panel size="lg" bg="default" class="cta" :class="mode">
    <button class="close" v-if="dismissable">
      <Icon name="cross" size="md" />
    </button>

    <h1 class="text-xl flex-wrap aic">
      <slot name="header" />
    </h1>

    <div class="cta-content">
      <div class="cta-body">
        <slot name="body" />
      </div>

      <Btn
        @click="$emit('action')"
        :text="buttonText"
        theme="accent-light"
        size="lg"
        :block="mode === 'sm'"
      />
    </div>
  </Panel>
</template>

<script>
import Icon from "@/components/ui/Icon";
import Btn from "@/components/ui/Btn";
import Panel from "@/components/ui/Panel";
import {
  useResponsive,
  withResponsiveProps,
} from "@/composables/useResponsive";

export default {
  name: "CTA",
  components: { Icon, Panel, Btn },
  props: withResponsiveProps(["sm", "md"], {
    buttonText: {
      type: String,
      default: "",
    },
    dismissable: {
      type: Boolean,
      default: false,
    },
  }),

  emits: ["action"],

  setup(props) {
    const { mode } = useResponsive(props);

    return { mode };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";
@import "../assets/css/window-breakpoints";

.close {
  position: absolute;
  padding: calc(var(--py) / 1.5) calc(var(--px) / 1.5);
  top: 0;
  right: 0;

  svg {
    color: cl("black");
    opacity: 0.3;
  }

  &:hover {
    svg {
      opacity: 0.8;
    }
  }
}

.cta {
  .cta-content {
    display: flex;
    align-items: flex-end;
  }

  .cta-body {
    margin-right: var(--sp10);
    flex-grow: 1;
  }

  &.sm {
    .cta-content {
      flex-direction: column;
    }

    .cta-body {
      margin-bottom: var(--sp10);
    }
  }
}
</style>
