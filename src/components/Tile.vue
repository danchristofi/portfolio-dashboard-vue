<template>
  <div class="tile" :class="{ isCollection: isCollection }">
    <div class="tabs">
      <Tab v-if="!isCollection" :icon="type" />
      <Tab v-if="createdByMe" icon="user" theme="accent" />
    </div>

    <div class="title clamp-1">{{ text }}</div>

    <div class="icon" v-if="isCollection">
      <Icon />
    </div>

    <div class="img" :style="`background-image: url(${image})`" />

    <div v-if="!isCollection" class="grad" />

    <div v-if="isCollection" class="pages">
      <span />
    </div>
  </div>
</template>

<script>
import Tab from "@/components/ui/Tab";
import Icon from "@/components/ui/Icon";
export default {
  name: "Tile",
  components: {
    Tab,
    Icon,
  },
  props: {
    isCollection: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: "/images/2.jpg",
    },
    text: {
      type: String,
      default: "My Tile",
    },
    createdByMe: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "link",
      validator: function (value) {
        return ["link", "video", "file"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";

.tile {
  width: 100%;
  aspect-ratio: 1 /1;
  padding: 1.8rem 1.8rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2rem 3rem -1.5rem cl("grey1", 0.5);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  position: relative;
  z-index: 0;
  border-radius: var(--rad);
  cursor: pointer;

  @include dark() {
    background: cl("grey2");
    box-shadow: 0 2rem 3rem -1.5rem cl("black", 0.9);
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2.3rem 3rem -1.5rem cl("grey1", 0.5);

    @include dark() {
      box-shadow: 0 2.3rem 3rem -1.5rem cl("black", 0.9);
    }
    .pages,
    .pages span {
      width: 96%;
      left: 3%;
      height: 0.2rem;
    }
  }

  .img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-size: cover;
    z-index: -1;
    border-radius: var(--rad);
  }

  &.isCollection {
    .img {
      overflow: hidden;
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: cl("grey2");
        top: 0;
        left: 0;
        opacity: 0.75;
      }
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
      color: cl("white");
      filter: drop-shadow(0 0 0.3rem rgba(white, 0.8));
    }
  }

  .tabs {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    display: flex;
    border-radius: var(--radSm);
    overflow: hidden;
    box-shadow: 0 0 1rem cl("grey2", 0.2);
  }

  .grad {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 6rem;
    background: linear-gradient(0deg, cl("grey2") 0%, cl("grey2", 0) 100%);
    border-radius: 0 0 var(--rad) var(--rad);
    z-index: -1;
  }

  .pages,
  .pages span {
    position: absolute;
    bottom: 0;
    left: 3%;
    width: 94%;
    background: cl("grey3");
    height: 0.3rem;
    transform: translateY(100%);
    opacity: 0.3;
    transition: all 0.2s ease-in-out;
    border-radius: 0 0 var(--rad) var(--rad);

    @include dark() {
      background: cl("grey5");
    }
  }

  .title {
    font-size: 1rem;
    margin-top: auto;
    justify-self: flex-end;
    color: cl("white");
    text-shadow: 0 0 5px cl("white", 0.4);
  }
}
</style>
