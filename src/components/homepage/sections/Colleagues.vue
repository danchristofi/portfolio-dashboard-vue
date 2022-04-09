<template>
  <SectionBase>
    <template #title>
      <SectionTitle
        :title="findSectionById('Colleagues').title"
        icon="users"
        has-border
      />
    </template>

    <template #content>
      <TileColleague :key="index" v-for="index in 5" />
    </template>
  </SectionBase>
</template>

<script>
export default {
  name: "Colleagues",
};
</script>

<script setup>
import useHomepage from "@/composables/useHomepage";
import SectionTitle from "@/components/SectionTitle";
import TileColleague from "@/components/TileColleague";
import SectionBase from "@/components/homepage/sections/SectionBase";

const { findSectionById } = useHomepage();
</script>
