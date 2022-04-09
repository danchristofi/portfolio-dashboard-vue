<template>
  <div>
    <button
      v-for="(color, index) in options"
      @click="$emit('change', index)"
      :key="color"
      :class="{ active: index === active }"
      :style="{ background: `rgba(${color}, 1)` }"
    ></button>
  </div>
</template>

<script>
export default {
  name: "ColourPicker",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    active: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/mixins";

button {
  padding: 1.1rem;
  margin-right: 0.5rem;
  border-radius: 100%;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 20%;
    height: 20%;
    background: white;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(black, 0.5);
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  &.active {
    cursor: auto;
    &:after {
      width: 40%;
      height: 40%;
      opacity: 1;
    }
  }
}
</style>
