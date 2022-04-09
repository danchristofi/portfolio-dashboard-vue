<template>
  <div class="scroll-styling">
    <Activity
      is-new
      :time="1"
      text="Christmas Party! See the featured tile for more information"
    />

    <Activity :key="index" v-for="index in 8" :time="index + 1" />
  </div>
</template>

<script>
import Activity from "@/components/Activity";

export default {
  name: "Announcements",
  components: { Activity },
};
</script>
