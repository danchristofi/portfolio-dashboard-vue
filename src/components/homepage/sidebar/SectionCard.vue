<template>
  <div class="section-card">
    <div class="handle" v-if="isDraggable">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="18"
        viewBox="0 0 10 18"
      >
        <g transform="translate(-1196 -121)">
          <circle cx="2" cy="2" r="2" transform="translate(1196 121)" />
          <circle cx="2" cy="2" r="2" transform="translate(1196 128)" />
          <circle cx="2" cy="2" r="2" transform="translate(1196 135)" />
          <circle cx="2" cy="2" r="2" transform="translate(1202 121)" />
          <circle cx="2" cy="2" r="2" transform="translate(1202 128)" />
          <circle cx="2" cy="2" r="2" transform="translate(1202 135)" />
        </g>
      </svg>
    </div>
    <div class="inner">
      <div class="mr-5">
        <span>{{ title }}</span>
        <i class="text-faded" v-if="subtitle"> - {{ subtitle }}</i>
      </div>

      <BtnControl class="ml-a" v-if="isAddable" @click="addUserSection(id)" />

      <BtnControl
        v-else
        class="ml-a"
        @click="removeUserSection(id)"
        theme="default"
        icon="minus"
      />
    </div>
  </div>
</template>

<script>
import BtnControl from "@/components/ui/BtnControl";
import useHomepage from "@/composables/useHomepage";

export default {
  name: "SectionCard",
  props: {
    isDraggable: {
      type: Boolean,
      default: false,
    },
    isAddable: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },

  components: { BtnControl },

  setup() {
    const { addUserSection, removeUserSection } = useHomepage();

    return { addUserSection, removeUserSection };
  },
};
</script>

<style scoped lang="scss">
.section-card {
  background: var(--bgContrastFaded);
  margin-bottom: var(--sp3);
  border-radius: var(--rad);
  display: flex;
  flex-grow: 0;
  overflow: hidden;
  -webkit-user-drag: element;

  .inner {
    padding: 0.7rem 1rem 0.7rem 1.6rem;
    display: flex;
    align-items: center;
    font-size: var(--textBodySm);
    width: 100%;
  }

  .handle {
    background: rgba(var(--accent), 1);
    width: 2.5rem;
    cursor: grab;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: rgba(var(--contrastMatch), 1);
    }

    &:active {
      cursor: grabbing;
    }

    + * {
      margin-left: -0.3rem;
    }
  }
}
</style>
