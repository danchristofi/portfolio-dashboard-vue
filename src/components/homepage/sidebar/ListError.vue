<template>
  <Panel
    bg="faded"
    size="sm"
    inner-classes="flex-center text-center h-100"
    class="h-100"
  >
    <span class="mb-3 mt-6 text-body-sm text-faded">{{ title }}</span>
    <slot />
    <Icon class="mb-6" />
  </Panel>
</template>

<script>
import Panel from "@/components/ui/Panel";
import Icon from "@/components/ui/Icon";
export default {
  name: "ListError",
  components: {
    Panel,
    Icon,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
