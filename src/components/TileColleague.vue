<template>
  <div class="flex fdc aic text-center">
    <div
      class="img"
      :style="`background-image: url('/images/avatars/${key}.jpg');`"
    />
    <div class="text-lg mt-7 mb-2">
      {{ `${faker.name.firstName()} ${faker.name.lastName()}` }}
    </div>
    <span class="text-body-sm mb-0 text-faded">{{
      faker.name.jobTitle()
    }}</span>
  </div>
</template>

<script>
const { faker } = require("@faker-js/faker");

export default {
  name: "TileColleague",
  data() {
    return {
      key: Math.ceil(Math.random() * 24),
      faker: faker,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";

.img {
  width: var(--columnWidth);
  aspect-ratio: 1/1;
  border-radius: var(--rad);
  background-size: cover;
  background-position: center center;
  box-shadow: 0 2rem 3rem -1.5rem cl("grey1", 0.5);
  filter: grayscale(0.7);

  @include dark() {
    box-shadow: 0 2rem 3rem -1.5rem cl("black", 0.9);
  }
}
</style>
