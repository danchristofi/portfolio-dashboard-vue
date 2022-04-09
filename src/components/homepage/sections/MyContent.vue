<template>
  <SectionBase>
    <template #title>
      <SectionTitle
        :title="findSectionById('MyContent').title"
        icon="user"
        has-border
      />
    </template>

    <template #content>
      <Tile
        :key="tile.id"
        v-for="tile in tiles"
        :text="tile.text"
        :type="tile.type"
        :image="tile.image"
        :created-by-me="true"
      />
    </template>

    <div class="flex jcc mt-10">
      <Btn
        class="mt-10"
        theme="contrast-solid"
        size="lg"
        icon="plus"
        text="Create Content"
      />
    </div>
  </SectionBase>
</template>

<script>
const { faker } = require("@faker-js/faker");
import SectionBase from "@/components/homepage/sections/SectionBase";
import SectionTitle from "@/components/SectionTitle";
import Btn from "@/components/ui/Btn";
import Tile from "@/components/Tile";
import useHomepage from "@/composables/useHomepage";
export default {
  name: "MyContent",
  components: { SectionBase, SectionTitle, Tile, Btn },

  setup() {
    const { findSectionById } = useHomepage();

    const tiles = [
      {
        id: 1,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=1",
        type: "video",
      },
      {
        id: 2,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=2",
      },
      {
        id: 3,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=3",
        type: "file",
      },
      {
        id: 4,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=4",
        type: "link",
      },
      {
        id: 5,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=5",
        type: "video",
      },
    ];

    return {
      findSectionById,
      tiles,
    };
  },
};
</script>
