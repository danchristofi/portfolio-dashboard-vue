<template>
  <SectionBase>
    <template #title>
      <SectionTitle
        :title="findSectionById('AssignedToMe').title"
        icon="checkbox"
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
        :is-collection="tile.isCollection"
        :created-by-me="tile.createdByMe"
      />
    </template>
  </SectionBase>
</template>

<script>
const { faker } = require("@faker-js/faker");
import SectionBase from "@/components/homepage/sections/SectionBase";
import SectionTitle from "@/components/SectionTitle";
import Tile from "@/components/Tile";
import useHomepage from "@/composables/useHomepage";
export default {
  name: "AssignedToMe",
  components: { SectionBase, SectionTitle, Tile },

  setup() {
    const { findSectionById } = useHomepage();

    const tiles = [
      {
        id: 1,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=1",
        type: "link",
        isCollection: true,
      },
      {
        id: 2,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=2",
        isCollection: true,
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
