<template>
  <SideBar
    @close="updateSidebarOpen(false)"
    @confirm="updateSidebarOpen(false)"
    hide-footer
    :open="sidebarOpen"
  >
    <h1 class="text-xxl">Customise Homepage</h1>
    <p class="text-faded">
      Here are the sections available for you to add to your homepage. Add new
      ones from the <strong>Sections</strong> column and then in the
      <strong>Your Homepage</strong> column, use the handles to reorder them.
    </p>

    <div
      class="lists"
      :class="
        cBp < bps.md
          ? 'scroll-styling scroll-styling--offset scroll-styling--no-padding fdc'
          : ''
      "
    >
      <ListContainer title="Your Homepage">
        <List v-if="userSections.length">
          <draggable :list="userSections" item-key="id" handle=".handle">
            <template #item="{ element }">
              <SectionCard
                :title="findSectionById(element).title"
                :subtitle="findSectionById(element).subtitle"
                :id="findSectionById(element).id"
                is-draggable
              />
            </template>
          </draggable>
        </List>

        <ListError title="No sections added" v-if="!userSections.length">
          <div class="text-md">
            Add some from the <br /><strong>Sections</strong> column
          </div>
        </ListError>
      </ListContainer>

      <hr :class="{ hz: cBp < bps.md }" />

      <ListContainer title="Sections">
        <List v-if="availableSections.length">
          <SectionCard
            v-for="section in availableSections"
            is-addable
            :key="section.id"
            :id="section.id"
            :title="section.title"
            :subtitle="section.subtitle"
          />
        </List>

        <ListError title="No sections left" v-if="!availableSections.length">
          <div class="text-md">
            Come back when we <br />
            have some more!
          </div>
        </ListError>
      </ListContainer>
    </div>

    <p class="text-faded">
      Here are you can choose a <strong>Colour</strong> and
      <strong>Light / Dark</strong> mode.
    </p>

    <ThemePickers />
  </SideBar>
</template>

<script>
import SideBar from "@/components/SideBar";
import SectionCard from "@/components/homepage/sidebar/SectionCard";
import ListError from "@/components/homepage/sidebar/ListError";
import ThemePickers from "@/components/homepage/sidebar/ThemePickers";
import ListContainer from "@/components/homepage/sidebar/ListContainer";
import List from "@/components/homepage/sidebar/List";
import draggable from "vuedraggable";
import useHomepage from "@/composables/useHomepage";
import useTheme from "@/composables/useTheme";

export default {
  name: "CustomiseHomepageSidebar",
  components: {
    draggable,
    SideBar,
    SectionCard,
    ListError,
    ListContainer,
    List,
    ThemePickers,
  },

  setup() {
    const { cBp, bps } = useTheme();

    const {
      sidebarOpen,
      updateSidebarOpen,
      userSections,
      availableSections,
      findSectionById,
    } = useHomepage();

    return {
      sidebarOpen,
      updateSidebarOpen,
      cBp,
      bps,
      userSections,
      availableSections,
      findSectionById,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/css/mixins";

.lists {
  display: flex;
  height: 100%;
  margin-bottom: 2rem;
  overflow: hidden;
  border: 1px solid var(--bgContrastDefault);
  border-radius: var(--rad);
  hr {
    border-color: var(--bgContrastDefault);
    border-style: solid;
    border-width: 0;
    border-right-width: 1px;
    height: 100%;
    width: 0;
    margin: 0;
    &.hz {
      width: 100%;
      height: 0;
      border-right-width: 0;
      border-top-width: 1px;
    }
  }
}
</style>
