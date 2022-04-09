<template>
  <div class="TileInfo" :class="{ compact: compact }">
    <div class="info">
      <div class="tabs">
        <Tab v-if="createdByMe" size="sm" icon="user" theme="accent" />
      </div>
      <div
        class="img"
        :style="`background-image: url(https://picsum.photos/200/200?random=${Math.random()})`"
      />
      <div style="padding: 1rem 0.2rem 0.5rem">
        <div class="text-sm mb-3 flex aic">
          <Icon class="mr-2 text-faded" size="sm" name="file" />
          <span>5 Items</span>
        </div>
        <div class="text-sm flex aic">
          <Icon class="mr-2 text-faded" size="sm" name="clock" />
          <span>01/01/22</span>
        </div>
      </div>
    </div>
    <div class="details">
      <i class="text-sm mb-3 flex text-faded">
        Created by
        {{
          createdByMe
            ? "you"
            : `${faker.name.firstName()} ${faker.name.lastName()}`
        }}
      </i>
      <div class="text-lg mb-2 clamp-1">
        <Icon
          v-if="sharedWithMe"
          size="sm"
          name="share"
          style="vertical-align: middle; position: relative; top: -0.2em;}"
        />
        {{ title }}
      </div>
      <p class="text-faded clamp-2">
        {{ description }}
      </p>
      <hr class="mb-5" />
      <div class="flex-wrap aic text-sm">
        <span class="mr-3 text-faded">
          <span v-if="sharedWithMe">Also </span>
          Shared With:
        </span>
        <Pill class="mr-3" size="sm" text="Design Team" />
        <span class="text-faded">+ 5 Individual Users</span>
      </div>
    </div>
  </div>
</template>

<script>
const { faker } = require("@faker-js/faker");
import Tab from "@/components/ui/Tab";
import Icon from "@/components/ui/Icon";
import Pill from "@/components/ui/Pill";
export default {
  name: "TileInfo",
  components: {
    Icon,
    Pill,
    Tab,
  },
  props: {
    sharedWithMe: {
      type: Boolean,
      default: false,
    },
    createdByMe: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      faker: faker,
      title: faker.lorem.sentence(),
      description: faker.hacker.phrase(),
    };
  },
};
</script>

<style scoped lang="scss">
.TileInfo {
  display: flex;
  padding-right: 3rem;
  align-items: flex-start;
  &.compact {
    padding-right: 0;
  }
}
.info {
  width: 9rem;
  flex-shrink: 0;
  background: var(--bgContrastDefault);
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: var(--rad);
  overflow: hidden;
  padding: 0.5rem;
  .img {
    width: 100%;
    aspect-ratio: 1/1;
    background: var(--bgContrastDefault);
    background-image: url("/images/1.jpg");
    background-size: cover;
    border-radius: var(--radSm);
  }
  .tabs {
    position: absolute;
    display: flex;
    z-index: 1;
    top: 1rem;
    left: 1rem;
    overflow: hidden;
    border-radius: var(--radSm);
    box-shadow: 0 0 1rem cl("grey2", 0.2);
  }
}

.details {
  margin-left: 2rem;
  padding-top: 1rem;
  hr {
    border-top: 1px solid var(--bgContrastDefault);
    width: 100%;
  }
}
</style>
