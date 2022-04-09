<template>
  <section>
    <div ref="parent" class="grid">
      <SectionTitle has-border class="featured-title" title="Featured" />

      <Tile
        :key="tile.id"
        v-for="(tile, index) in featuredTiles"
        :text="tile.text"
        :type="tile.type"
        :image="tile.image"
        :is-collection="tile.isCollection"
        :class="{ lg: index === 0 }"
      />

      <SectionTitle
        has-border
        class="announcements-title"
        title="Latest"
        icon="message"
        sm
      />

      <Announcements class="announcements" />

      <Panel class="backdrop" bg="match" />
    </div>

    <div class="prompt">
      <Icon size="md" width="thick" name="chevron-down" />
    </div>
  </section>
</template>

<script>
import Announcements from "@/components/featured/Announcements";
import Icon from "@/components/ui/Icon";
import Tile from "@/components/Tile";
import SectionTitle from "@/components/SectionTitle";
import Panel from "@/components/ui/Panel";
import useHomepage from "@/composables/useHomepage";
import { fadeInObserver } from "@/assets/js/animations";

export default {
  name: "Featured",
  components: { Tile, SectionTitle, Icon, Announcements, Panel },

  setup() {
    const { featuredTiles } = useHomepage();

    return {
      featuredTiles,
    };
  },

  mounted() {
    fadeInObserver(this.$el, this.$refs.parent.children);
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/mixins";
@import "../../assets/css/window-breakpoints";

section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: var(--headerHeight);
  min-height: calc(100vh - var(--headerHeight));

  @include screen($screenMd) {
    padding-top: var(--spV);
  }
}

.grid {
  width: fit-content;
  display: grid;
  grid-gap: var(--columnGap);
  grid-template-columns: repeat(var(--columnCount), var(--columnWidth));
  grid-template-rows: 3rem repeat(2, var(--columnWidth));

  @include screen($screenXl) {
    grid-template-rows: 3rem repeat(3, var(--columnWidth));
  }

  @include screen($screenLg) {
    grid-template-rows:
      3rem var(--columnWidth) var(--columnWidth)
      3rem var(--columnWidth) var(--columnWidth);
  }

  @include screen($screenMd) {
    grid-template-rows:
      3rem var(--columnWidth) var(--columnWidth) var(--columnWidth)
      3rem var(--columnWidth) var(--columnWidth);
  }

  .tile.lg {
    grid-column: span 2;
    grid-row: span 2;
  }
}

.featured-title,
.announcements-title {
  height: 100%;
  position: relative;
  top: 0.5rem;
  @include screen($screenMd) {
    top: 0;
  }
}

.featured-title {
  grid-column: 1 / calc(var(--columnCount) - 1);

  @include screen($screenLg) {
    grid-column: 1/4;
    grid-row: 1/2;
  }

  @include screen($screenMd) {
    grid-column: 1/3;
  }
}

.announcements-title {
  grid-row: 1/2;
  grid-column: 4/6;
  margin-left: calc(var(--columnGap) * 2);
  margin-right: var(--columnGap);

  @include screen($screenXl) {
    grid-column: 3/5;
  }

  @include screen($screenLg) {
    margin-top: var(--columnGap);
    margin-left: calc(var(--columnGap) * 1);
    grid-column: 1/4;
    grid-row: 4/5;
  }

  @include screen($screenMd) {
    grid-column: 1/3;
    grid-row: 5/6;
  }
}

.announcements {
  grid-column: 4/6;
  grid-row: 2/4;
  margin-left: calc(var(--columnGap) * 2);
  margin-right: calc(var(--columnGap) / 2);
  margin-bottom: var(--columnGap);

  @include screen($screenXl) {
    grid-row: 2/5;
    grid-column: 3/5;
  }

  @include screen($screenLg) {
    grid-column: 1/4;
    grid-row: 5/7;
    margin-left: calc(var(--columnGap) * 1);
    margin-top: var(--columnGap);
  }

  @include screen($screenMd) {
    grid-column: 1/3;
    grid-row: 6/8;
  }
}

.backdrop {
  grid-column: 4/6;
  grid-row: 1/4;
  z-index: -1;
  margin-left: var(--columnGap);
  margin-top: calc(var(--columnGap) * -1);
  box-shadow: 0 3rem 3rem -1.5rem rgba(black, 0.1);
  @include screen($screenXl) {
    grid-column: 3/5;
    grid-row: 1/5;
  }

  @include screen($screenLg) {
    grid-column: 1/4;
    grid-row: 4/7;
    margin-left: 0;
    margin-top: 0;
  }

  @include screen($screenMd) {
    grid-column: 1/3;
    grid-row: 5/8;
  }
}

.prompt {
  display: block;
  margin: var(--spV) 0 var(--sp6);
  opacity: 0.5;
}
</style>
