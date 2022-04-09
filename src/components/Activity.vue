<template>
  <Panel :bg="isNew ? 'solid' : 'faded'" size="sm">
    <p>
      <Pill v-if="isNew" text="New" theme="contrast" class="mr-4" />
      <i class="text-faded"
        >{{ time }} hour{{ time !== 1 ? "s" : "" }} ago -
      </i>
      <span v-html="text" />
      <a v-if="hasCollection" href="#" class="ml-3 text-faded wsnw"
        >View Collection</a
      >
      <a v-if="hasContent" href="#" class="ml-3 text-faded wsnw"
        >View Content</a
      >
    </p>
  </Panel>
</template>

<script>
const { faker } = require("@faker-js/faker");

import Panel from "@/components/ui/Panel";
import Pill from "@/components/ui/Pill";

export default {
  name: "Activity",
  components: { Panel, Pill },
  props: {
    isNew: {
      type: Boolean,
      default: false,
    },
    hasContent: {
      type: Boolean,
      default: false,
    },
    hasCollection: {
      type: Boolean,
      default: false,
    },
    time: {
      type: Number,
      default: 2,
    },
    text: {
      type: String,
      default: () => faker.lorem.sentence(),
    },
  },
  data() {
    return {
      faker: faker,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: underline;
}
</style>
