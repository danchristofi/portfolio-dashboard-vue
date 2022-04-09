<template>
  <label class="text-md">{{ text }}</label>
</template>

<script>
export default {
  name: "InputLabel",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
