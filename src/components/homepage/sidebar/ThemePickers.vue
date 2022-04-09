<template>
  <div>
    <div class="aic mr-10" :class="cBp < bps.sm ? 'flex mb-8' : 'inline-flex'">
      <InputLabel class="mb-0 mr-5" text="Colour" />
      <ColourPicker
        :options="colorOptions"
        :active="color"
        @change="updateColor($event)"
      />
    </div>

    <div class="inline-flex aic">
      <InputLabel class="mb-0 mr-5" text="Light / Dark" />
      <ColourPicker
        :options="['230,230,230', '40,40,40']"
        :active="theme ? 1 : 0"
        @change="updateTheme($event)"
      />
    </div>
  </div>
</template>

<script>
import InputLabel from "@/components/ui/InputLabel";
import ColourPicker from "@/components/ui/ColourPicker";
import useTheme from "@/composables/useTheme";
export default {
  name: "ThemePickers",
  components: {
    InputLabel,
    ColourPicker,
  },
  setup() {
    const { updateTheme, theme, color, colorOptions, updateColor, cBp, bps } =
      useTheme();

    return {
      updateTheme,
      theme,
      color,
      colorOptions,
      updateColor,
      cBp,
      bps,
    };
  },
};
</script>
