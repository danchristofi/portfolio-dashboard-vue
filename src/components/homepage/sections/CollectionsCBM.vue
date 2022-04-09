<template>
  <SectionBase grid-type="info">
    <template #title>
      <SectionTitle
        :title="findSectionById('CollectionsCBM').title"
        :subtitle="findSectionById('CollectionsCBM').subtitle"
        icon="collection"
        has-border
      />
    </template>

    <template #content="{ infoMode }">
      <TileInfo
        created-by-me
        :key="index"
        v-for="index in 4"
        :compact="infoMode === 'compact'"
      />
    </template>

    <div class="flex jcc mt-10">
      <Btn
        class="mt-10"
        theme="contrast-solid"
        size="lg"
        icon="plus"
        text="Create Collection"
      />
    </div>
  </SectionBase>
</template>

<script>
import SectionBase from "@/components/homepage/sections/SectionBase";
import SectionTitle from "@/components/SectionTitle";
import Btn from "@/components/ui/Btn";
import TileInfo from "@/components/TileInfo";
import useHomepage from "@/composables/useHomepage";
export default {
  name: "CollectionsCBM",
  components: { SectionBase, SectionTitle, TileInfo, Btn },

  setup() {
    const { findSectionById } = useHomepage();

    return {
      findSectionById,
    };
  },
};
</script>
