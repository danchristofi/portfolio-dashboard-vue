<template>
  <SectionBase grid-type="info">
    <template #title>
      <SectionTitle
        :title="findSectionById('CollectionsSWM').title"
        :subtitle="findSectionById('CollectionsSWM').subtitle"
        icon="collection"
        has-border
      />
    </template>

    <template #content="{ infoMode }">
      <TileInfo
        shared-with-me
        :key="index"
        v-for="index in 4"
        :compact="infoMode === 'compact'"
      />
    </template>
  </SectionBase>
</template>

<script>
import SectionBase from "@/components/homepage/sections/SectionBase";
import SectionTitle from "@/components/SectionTitle";
import TileInfo from "@/components/TileInfo";
import useHomepage from "@/composables/useHomepage";
export default {
  name: "CollectionsSWM",
  components: { SectionBase, SectionTitle, TileInfo },

  setup() {
    const { findSectionById } = useHomepage();

    return {
      findSectionById,
    };
  },
};
</script>
