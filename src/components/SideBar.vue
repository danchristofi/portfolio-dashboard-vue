<template>
  <teleport to="#sidebar-container">
    <transition name="slide-left">
      <aside v-if="open" :class="[{ heightAuto: heightAuto }, width]">
        <Panel bg="match" size="xl">
          <button
            @click="$emit('close')"
            style="position: absolute; top: 0; right: 0; padding: 1.3rem"
          >
            <Icon size="md" name="cross" />
          </button>

          <slot></slot>

          <template v-if="!hideFooter" #footer>
            <div class="flex jce mt-a">
              <Btn
                @click="$emit('close')"
                class="mr-6"
                text="Close"
                size="lg"
                theme="ghost"
              />
              <Btn
                @click="$emit('confirm')"
                text="Save"
                size="lg"
                theme="contrast-solid"
              />
            </div>
          </template>
        </Panel>
      </aside>
    </transition>

    <transition name="fade">
      <div v-if="open" class="overlay" @click="$emit('close')" />
    </transition>
  </teleport>
</template>

<script>
import Btn from "@/components/ui/Btn";
import Panel from "@/components/ui/Panel";
import Icon from "@/components/ui/Icon";
export default {
  name: "SideBar",
  components: {
    Panel,
    Btn,
    Icon,
  },
  emits: ["close", "confirm"],
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    hideFooter: {
      type: Boolean,
      default: false,
    },
    heightAuto: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "lg",
    },
  },

  watch: {
    open(newVal, oldVal) {
      if (newVal) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";
@import "../assets/css/window-breakpoints";

aside {
  position: fixed;
  height: 100%;
  overflow: auto;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 2rem;
  display: flex;

  &.heightAuto {
    height: auto !important;
    max-height: 100%;
  }

  > * {
    flex-grow: 1;
  }

  &.lg {
    width: toRem(1000);
    @include screen($screenMd) {
      width: 100%;
      padding: 1rem;
    }
  }

  &.md {
    width: toRem(500);
    @include screen($screenMd) {
      width: 100%;
      padding: 1rem;
    }
  }
  &.w-auto {
    width: auto !important;
  }
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background: cl("grey3", 0.8);
  cursor: pointer;
}
</style>
